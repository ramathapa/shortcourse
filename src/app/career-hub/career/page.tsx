"use client";
import React, { useState } from "react";
import { Briefcase, Target, Users, Star } from "lucide-react";
import Link from "next/link";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null as File | null,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) body.append(key, value as any);
    });

    try {
      const res = await fetch("/api/career", { method: "POST", body });
      const data = await res.json();

      if (data.success) {
  setStatus(data.message || "✅ Application submitted successfully!");

  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  // Clear file input
  const fileInput = document.querySelector(
    'input[name="resume"]'
  ) as HTMLInputElement | null;

  if (fileInput) {
    fileInput.value = "";
  }
} else {
  setStatus(data.message || "❌ Failed to submit application.");
}
    } catch {
      setStatus("⚠️ Network error.");
    }
  };

  return (
    <main className="bg-gray-50 text-gray-800">

      {/* HERO – same style as Contact */}
      <section className="w-full bg-[#002A4E] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Careers at Cardinal Institute of Education
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Join a compassionate, professional, and empowering team that makes
            a real difference in the lives of others.
          </p>
        </div>
      </section>

      {/* JOIN OUR TEAM */}
      {/* <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center bg-white p-12 rounded-xl shadow">
          <h2 className="text-3xl font-bold text-[#002A4E] mb-4">
            Join Our Team
          </h2>
          <p className="text-gray-700 text-lg">
            We believe in supporting our staff with training, respect, and
            opportunities to grow while making a meaningful impact every day.
          </p>
        </div>
      </section> */}

      {/* CAREER ROLES */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002A4E] text-center mb-12">
            Career Opportunities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {careerRoles.map((role, index) => (
              <div
                key={index}
                className="p-8 bg-white border rounded-xl hover:shadow-lg transition text-center"
              >
                <role.icon className="w-12 h-12 text-[#F4C300] mx-auto" />
                <h3 className="mt-4 text-xl font-semibold text-[#002A4E]">
                  {role.title}
                </h3>
                <p className="mt-2 text-gray-700">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM – Contact page style */}
      <section className="py-20 px-6 bg-[#A3C4C4]/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#002A4E] text-center">
            Apply for a Career
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 gap-6 bg-white p-10 rounded-xl shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4C300]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4C300]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4C300]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Why do you want to join us?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#F4C300]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="w-full border rounded-lg px-4 py-3 bg-white"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#002A4E] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#F4C300] hover:text-black transition w-fit"
            >
              Submit Application
            </button>

            {status && (
              <p className="text-sm text-gray-700 mt-3">{status}</p>
            )}
          </form>
        </div>
      </section>

    </main>
  );
}

const careerRoles = [
  {
    title: "Support Worker",
    desc: "Provide assistance and support while promoting independence and dignity.",
    icon: Users,
  },
  {
    title: "Team Leader",
    desc: "Lead and support teams to ensure high-quality service delivery.",
    icon: Briefcase,
  },
  {
    title: "Allied Health Professional",
    desc: "Deliver specialised services to improve wellbeing and independence.",
    icon: Star,
  },
  {
    title: "Support Coordinator",
    desc: "Help participants understand and implement their support plans.",
    icon: Target,
  },
];
