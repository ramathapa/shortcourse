import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Chat from "@/models/Chat";
import fs from "fs";
import path from "path";

// Bot reply logic
function getBotReply(text: string) {
  const lower = text.toLowerCase();

  if (lower.includes("course"))
    return "We offer Certificate III & IV in Ageing and Disability, plus First Aid & CPR courses.";
  if (lower.includes("contact") || lower.includes("phone"))
    return "You can contact us at 02 8530 8337.";
  if (lower.includes("email"))
    return "Our email is info@caringalliance.com.au.";
  if (lower.includes("location"))
    return "We are located in 60 Station, Parramatta. Please contact us for campus details.";
  if (lower.includes("support"))
    return "Our support team is available 24×7.";
   if (lower.includes("thanks"))
    return "thanks for contact with us .";
    if (lower.includes("thank you"))
    return "thanks for contact with us .";

  return "Hi! I'm here to help. Please leave your message or details.";
}

export async function POST(req: Request) {
  await connectDB();

  let messageText = "";
  let chatId: string | null = null;
  const uploadedFiles: { fileName: string; fileUrl: string }[] = [];

  // Detect if request is JSON or FormData (file upload)
  if (req.headers.get("content-type")?.includes("multipart/form-data")) {
    const formData = await req.formData();
    messageText = formData.get("message")?.toString() || "";
    chatId = formData.get("chatId")?.toString() || null;

    const files = formData.getAll("files") as File[];
    const uploadDir = path.join(process.cwd(), "public/uploads");
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    for (const file of files) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      const arrayBuffer = await file.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(arrayBuffer));
      uploadedFiles.push({ fileName: file.name, fileUrl: `/uploads/${fileName}` });
    }
  } else {
    const body = await req.json();
    messageText = body.message || "";
    chatId = body.chatId || null;
  }

  // Find existing chat or create new with welcome message
  let chat;
  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (chatId) chat = await Chat.findById(chatId);

  if (!chat) {
    chat = new Chat({
      messages: [
        {
          text: "Hi 👋 Welcome to Cardinal Institute of Education. How can we help you?",
          sender: "bot",
          time: now,
        },
      ],
    });
  }

  // Push user message
  if (messageText.trim() || uploadedFiles.length > 0) {
    chat.messages.push({
      text: messageText.trim(),
      sender: "user",
      time: now,
      files: uploadedFiles.length > 0 ? uploadedFiles : undefined,
    });

    // Generate bot reply
    const botReply = getBotReply(messageText);
    chat.messages.push({
      text: botReply,
      sender: "bot",
      time: now,
    });
  }

  await chat.save();

  return NextResponse.json({
    chatId: chat._id,
    messages: chat.messages,
  });
}
