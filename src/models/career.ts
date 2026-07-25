import mongoose, { Schema, models } from "mongoose";

const CareerSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
    resume: String,
  },
  { timestamps: true }
);

export default models.Career || mongoose.model("Career", CareerSchema);
