import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Career from "@/models/career";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    // Read multipart/form-data
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const resume = formData.get("resume") as File | null;

    // Validate required fields
    if (!name || !email || !message || !resume) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields and upload a resume.",
        },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        {
          success: false,
          message: "Only PDF, DOC and DOCX files are allowed.",
        },
        { status: 400 }
      );
    }

    // Optional file size limit: 5 MB
    const maxSize = 5 * 1024 * 1024;

    if (resume.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          message: "Resume must be smaller than 5 MB.",
        },
        { status: 400 }
      );
    }

    // Convert resume to Buffer
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    // Connect MongoDB
    await connectDB();

    // Save application
    const career = await Career.create({
      name,
      email,
      phone,
      message,
      resume: resume.name,
    });

    console.log("✅ Career application saved:", career._id);

    // Send email
    await transporter.sendMail({
      from: `"Cardinal Careers" <${process.env.EMAIL_USER}>`,

      to: "ramathapa130@gmail.com",

      replyTo: email,

      subject: `New Career Application - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">

          <h2>New Career Application</h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Phone:</strong> ${phone || "Not provided"}
          </p>

          <p>
            <strong>Why they want to join:</strong>
          </p>

          <p>
            ${message}
          </p>

          <hr />

          <p>
            <strong>Resume:</strong> ${resume.name}
          </p>

        </div>
      `,

      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });

    console.log("✅ Career email sent");

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!",
      application: career,
    });

  } catch (error) {
    console.error("❌ CAREER APPLICATION ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting your application.",
      },
      {
        status: 500,
      }
    );
  }
}