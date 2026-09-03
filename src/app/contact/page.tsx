"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          lastName: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Network error.");
    }
  };

  return (
    <main className="bg-[#E8DFD5] text-[#0B1F3A]">

      {/* FIRST SECTION */}
      <section className="py-10 px-6">
        <div
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 rounded-lg border-3 border-[#CBA3A3]
          overflow-hidden shadow hover:shadow-lg transition bg-white"
        >

          {/* LEFT SIDE — SHORT COURSE ENQUIRY CONTENT */}
          <div className="p-10 flex flex-col justify-center">

            <p className="text-xl mb-4">
              Would you like to know more about our short courses?
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Short Course Enquiries
            </h2>

            <p className="text-gray-700 leading-relaxed tracking-wide text-lg">
              We’re here to help. Whether you’d like to know more about our
              CPR or First Aid short courses, ask about course dates,
              availability or enrolment, our team at Cardinal Institute of
              Education is happy to assist. You can also contact us to discuss
              group and workplace training options.
            </p>


          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="p-10">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* First Name */}
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  className="w-full border border-[#E6E6E6] rounded-md px-4 py-3 focus:ring-2 focus:ring-[#CBA3A3] focus:outline-none"
                />

                {/* Last Name */}
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  className="w-full border border-[#E6E6E6] rounded-md px-4 py-3 focus:ring-2 focus:ring-[#CBA3A3] focus:outline-none"
                />

                {/* Phone */}
                <PhoneInput
                  country={"au"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                  enableSearch
                  inputClass="!w-full !h-[50px] !border !border-[#E6E6E6] !rounded-md"
                  buttonClass="!border-[#E6E6E6]"
                  containerClass="!w-full"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full border border-[#E6E6E6] rounded-md px-4 py-3 focus:ring-2 focus:ring-[#CBA3A3] focus:outline-none"
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your short course or group booking enquiry *"
                  required
                  className="md:col-span-2 w-full border border-[#E6E6E6] rounded-md px-4 py-3 focus:ring-2 focus:ring-[#CBA3A3] focus:outline-none"
                />

                {/* Button */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#0B1F3A] text-white px-10 py-3 rounded-md hover:bg-[#CBA3A3] hover:text-[#0B1F3A] transition duration-300"
                  >
                    Send Enquiry
                  </button>
                </div>

              </div>

              {status && (
                <p className="text-sm text-center">
                  {status}
                </p>
              )}

            </form>

          </div>
        </div>
      </section>

      {/* SECOND SECTION — MAP LEFT, CONTACT RIGHT */}
      <section className="pb-20 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 border-3 rounded-lg overflow-hidden shadow bg-white border-[#CBA3A3]">

          {/* RIGHT — CONTACT DETAILS */}
          <div className="p-10 flex flex-col justify-center space-y-6">

            <h2 className="text-2xl font-semibold">
              Contact Details
            </h2>

            {/* Office Hours */}
            <div className="flex items-start gap-4 text-lg text-gray-700">
              <Clock className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium">
                  Office Hours
                </p>

                <p>
                  9:00 am – 5:00 pm, Monday to Friday
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 text-gray-700 leading-relaxed tracking-wide text-lg">
              <Phone className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium text-lg">
                  Phone
                </p>

                <p>
                  02 8530 8337  OR <span>0494 799 291</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 text-gray-700 text-lg">
              <Mail className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium text-lg">
                  Email
                </p>

                <p>
                  info@cardinalinstitute.edu.au
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 text-lg text-gray-700">
              <MapPin className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium">
                  Location
                </p>

                <p>
                  Level 6, 56-58 York Street, Sydney NSW 2000
                </p>
              </div>
            </div>

            {/* RTO CODE */}
            <div className="flex items-start gap-4 text-lg text-gray-700">
              <MapPin className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium">
                  RTO CODE
                </p>

                <p>
                  46594
                </p>
              </div>
            </div>

          </div>

          {/* LEFT — GOOGLE MAP */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7733633709327!2d151.20371207659892!3d-33.869731219108616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f113a96a9%3A0x42aeae16d6e8cc74!2sLevel%206%2F56-58%20York%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2snp!4v1783573695308!5m2!1sen!2snp"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cardinal Institute of Education Sydney location"
            />

          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="px-6 pb-16">

        <div className="max-w-5xl mx-auto bg-[#0B1F3A] rounded-3xl p-8 md:p-12 text-center shadow-xl">

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Need Training for a Group?
          </h3>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Looking to arrange CPR or First Aid training for your workplace,
            team or organisation? Contact us to discuss group booking
            requirements, course availability and training options.
          </p>

          <div className="mt-8 flex justify-center">

            <Link
              href="mailto:info@cardinalinstitute.edu.au"
              className="
                inline-flex items-center justify-center
                bg-[#C4A15A]
                text-[#0B1F3A]
                px-8 py-3
                rounded-full
                font-semibold
                text-lg
                transition-all
                duration-300
                hover:bg-white
                hover:shadow-xl
                hover:-translate-y-1
              "
            >
              Group Booking Enquiry
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}