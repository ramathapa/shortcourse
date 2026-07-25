"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Paperclip, MessageCircle, X } from "lucide-react";

type FileType = {
  fileUrl: string;
  fileName: string;
};

type Message = {
  text: string;
  sender: "bot" | "user";
  time: string;
  files?: FileType[];
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [chatId, setChatId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [loading, setLoading] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Temporary welcome message for UI only
  const tempWelcome: Message = {
    text: "Hi 👋 Welcome to Cardinal Institute of Education. How can we help you?",
    sender: "bot",
    time: getTime(),
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load chat messages on mount
  useEffect(() => {
    async function loadChat() {
      try {
        const res = await fetch("/api/chat/get-latest-chat");
        const data = await res.json();

        if (data.chat?.messages?.length > 0) {
          setMessages(data.chat.messages);
          setChatId(data.chat._id || null);
        } else {
          // show temporary welcome if backend has no messages yet
          setMessages([tempWelcome]);
        }
      } catch (err) {
        console.error("Failed to load chat:", err);
        setMessages([tempWelcome]); // fallback
      } finally {
        setLoading(false);
      }
    }
    loadChat();
  }, []);

  // Send message
  const sendMessage = async () => {
    if (!input.trim() && files.length === 0) return;

    try {
      let res;
      let data;

      if (files.length > 0) {
        const formData = new FormData();
        formData.append("message", input);
        if (chatId) formData.append("chatId", chatId);
        files.forEach((file) => formData.append("files", file));

        res = await fetch("/api/chat/upload", { method: "POST", body: formData });
        data = await res.json();
      } else {
        res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input, chatId }),
        });
        data = await res.json();
      }

      if (data.messages) setMessages(data.messages);
      if (data.chatId) setChatId(data.chatId);

      setInput("");
      setFiles([]);
    } catch (err) {
      console.error("Message send failed:", err);
    }
  };

  return (
    <>
      {/* Welcome popup */}
      {showWelcome && !open && (
        <div
          onClick={() => {
            setOpen(true);
            setShowWelcome(false);
          }}
          className="fixed bottom-24 right-6 z-40 w-64 bg-white border rounded-xl shadow-lg p-3 flex gap-3 cursor-pointer"
        >
          <img src="/chat-avatar.png" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Have any questions?</p>
            <p className="text-xs text-gray-500">Chat with us now</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowWelcome(false);
            }}
            className="text-gray-400"
          >
            ✕
          </button>
        </div>
      )}

      {/* Floating Open Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle className="text-white" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 h-[480px] bg-white rounded-xl shadow-xl flex flex-col z-50">
          {/* Header with Close Button */}
          <div className="bg-blue-600 text-white p-3 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/chat-avatar.png" alt="Agent" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">24×7 Chat Support</p>
                <p className="text-xs opacity-80">Cardinal Institute</p>
              </div>
            </div>

            <button onClick={() => setOpen(false)} className="hover:bg-blue-700 p-1 rounded">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-gray-50">
            {loading ? (
              <p className="text-center text-gray-400 text-sm">Loading chat...</p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg text-sm ${
                      msg.sender === "user" ? "bg-blue-600 text-white" : "bg-white border"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {msg.files && msg.files.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {msg.files.map((f, idx) => (
                          <a
                            key={idx}
                            href={f.fileUrl}
                            target="_blank"
                            className="text-blue-600 text-xs block underline"
                          >
                            📎 {f.fileName}
                          </a>
                        ))}
                      </div>
                    )}

                    <p className="text-[10px] text-right mt-1 opacity-60">{msg.time}</p>
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Section */}
          <div className="border-t p-2 flex items-center gap-2">
            <Paperclip
              className="text-gray-400 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            />

            <input
              type="file"
              ref={fileInputRef}
              multiple
              className="hidden"
              onChange={(e) => setFiles(e.target.files ? Array.from(e.target.files) : [])}
            />

            {files.length > 0 && (
              <div className="absolute bottom-20 right-6 bg-white border shadow-md rounded p-2 text-xs max-h-24 overflow-y-auto">
                {files.map((f, i) => (
                  <p key={i}>📎 {f.name}</p>
                ))}
              </div>
            )}

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message"
              className="flex-1 text-sm outline-none"
            />

            <button onClick={sendMessage}>
              <Send className="text-blue-600" />
            </button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs py-1 text-gray-400">
            Powered by <span className="font-semibold">Cardinal Institute of Education</span>
          </div>
        </div>
      )}
    </>
  );
}
