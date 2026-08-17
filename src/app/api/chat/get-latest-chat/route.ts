import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Chat from "@/models/Chat";

export async function GET() {
  await connectToDatabase();

  let chat = await Chat.findOne().sort({ createdAt: -1 });

  // If chat exists but first message is not welcome, prepend it
  const welcomeText = "Hi 👋 Welcome to Cardinal Institute of Education. How can we help you?";

  if (chat) {
    const firstMsg = chat.messages[0]?.text;
    if (firstMsg !== welcomeText) {
      chat.messages.unshift({
        text: welcomeText,
        sender: "bot",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
    }
  }

  // If no chat exists, create a temporary chat object with welcome
  if (!chat) {
    chat = {
      messages: [
        {
          text: welcomeText,
          sender: "bot",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ],
    };
  }

  return NextResponse.json({ chat });
}
