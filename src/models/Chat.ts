import mongoose, { Schema, model, models } from "mongoose";

const MessageSchema = new Schema(
  {
    text: { type: String, required: true },
    sender: { type: String, enum: ["bot", "user"], required: true },
    time: { type: String, required: true },
    files: [
      {
        fileName: String,
        fileUrl: String,
      },
    ],
  },
  { _id: false }
);

const ChatSchema = new Schema(
  {
    messages: [MessageSchema],
  },
  { timestamps: true }
);

const Chat = models.Chat || model("Chat", ChatSchema);
export default Chat;
