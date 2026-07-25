import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import career from "@/models/career";
import { connectDB } from  "@/lib/mongodb"; // <-- you must have this file

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const resume = formData.get("resume") as File | null;

    let resumePath = "";

    if (resume) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public", "uploads");
      const filePath = path.join(uploadDir, resume.name);

      await writeFile(filePath, buffer);

      resumePath = `/uploads/${resume.name}`;
    }

    const saved = await career.create({
      name,
      email,
      phone,
      message,
      resume: resumePath,
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (err) {
    console.error("CAREER API ERROR:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
