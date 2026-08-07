import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      lastName,
      email,
      phone,
      message,
    } = body;

    if (!name || !lastName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields missing",
        },
        { status: 400 }
      );
    }

    // Connect MongoDB
    await connectDB();

    // Save contact
    const contact = await Contact.create({
      name,
      lastName,
      email,
      phone,
      message,
    });

    console.log("✅ Contact saved:", contact._id);

    // Send email
    await transporter.sendMail({
      from: `"Cardinal Website Contact" <${process.env.EMAIL_USER}>`,
      to: "info@cardinalinstitute.edu.au",
      replyTo: email,
      subject: "New Contact Form Enquiry - Cardinal Institute",

      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Enquiry</h2>

          <p>
            <strong>Name:</strong>
            ${name} ${lastName}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>
        </div>
      `,
    });

    console.log("✅ Email sent");

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
      contact,
    });

  } catch (error) {
    console.error("❌ CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Server error",
      },
      { status: 500 }
    );
  }
}