"use client";

import {
  HeartHandshake,
  GraduationCap,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function WhyCaringAlliancePage() {
  return (
    <main className="bg-white text-[#0f172a]">

      {/* ================= VALUES ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-5xl font-bold mb-10 text-center"
            style={{ color: "#0B1F3A" }}
          >
       What Makes Us Different?
          </h2>
         

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Mission */}
            <div className="bg-[#fffaf0] p-8 rounded-2xl shadow-lg  text-left">
              <HeartHandshake
                className="text-[#C4A15A]  mb-6"
                size={75}
              />
              <h3 className="text-3xl font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg tracking-wide">Our mission is to deliver high-quality, nationally recognised training that prepares students for meaningful careers in aged care and disability support, combining structured learning, practical skills, and genuine support, in full compliance with the Standards for RTOs.</p>
            </div>

            {/* Vision */}
            <div className="bg-[#f5f9ff] p-8 rounded-2xl shadow-lg text-left">
              <UsersRound
                className="text-[#C4A15A] mb-6"
                size={75}
              />
              <h3 className="text-3xl font-semibold mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg tracking-wide">
          To be a trusted provider of vocational education, recognised for ethical practice, industry-aligned training, and graduates who enter the care workforce confident, capable, and genuinely prepared to make a difference. </p>
             </div>

            {/* Expert Guidance */}
            <div className="bg-[#fdf7f3] p-8 rounded-2xl shadow-lg text-left">
              <GraduationCap
                className="text-[#C4A15A] mb-6"
                size={75}
              />
              <h3 className="text-3xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed text-lg tracking-wide">
       Our trainers bring current, real-world industry experience into every session. Through supportive, hands-on teaching, they help students build the practical skills, confidence, and professional judgement needed to succeed in aged care and disability workplaces.  
          </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
