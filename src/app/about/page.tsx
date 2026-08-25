import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import Mission from "@/components/mission";
import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";


export default function AboutUsPage() {
  return (
    <main className="bg-[#E8DFD5] text-[#0B1F3A]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] md:h-[60vh] flex items-end justify-start px-6 md:px-16 pb-16">
        <Image
          src="/about/hero.png"
          alt="About Cardinal Institute of Education"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/30" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            About Cardinal Institute of Education
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#E6E6E6]">
            Practical, nationally recognised First Aid and CPR training
            designed to build confidence and essential emergency response
            skills.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16 sm:py-20 px-6 md:px-16 bg-[#E8DFD5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {/* Left Column - Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#0B1F3A] tracking-wide">
              Cardinal Institute of Education – Our Purpose
            </h2>

            <div className="space-y-4 sm:space-y-6">

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
                Cardinal Institute of Education is a Registered Training
                Organisation (RTO 46594) delivering nationally recognised First
                Aid and CPR training in Sydney. Our short courses are designed
                to provide participants with practical knowledge and essential
                skills for responding to emergency situations.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
                Our training is delivered in accordance with nationally
                recognised training requirements and relevant Australian
                Resuscitation Council (ARC) guidelines. We combine clear
                instruction with hands-on practical activities to create a
                supportive and engaging learning environment.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
                We currently deliver nationally recognised short courses
                including{" "}
                <strong>HLTAID011 Provide First Aid</strong> and{" "}
                <strong>
                  HLTAID009 Provide Cardiopulmonary Resuscitation (CPR)
                </strong>.
                These courses are suitable for individuals and workplaces
                seeking practical emergency response skills and recognised
                training.
              </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
                Our focus is on delivering high-quality, practical training
                that helps participants develop the knowledge, skills and
                confidence to respond quickly, safely and effectively when
                emergency situations occur.
              </p>

            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about/about.png"
              alt="First Aid and CPR training at Cardinal Institute of Education"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-20 px-6 md:px-16">

        <div className="max-w-6xl mx-auto bg-[#0B1F3A] text-white rounded-3xl p-10 md:p-16">

          <h2 className="text-4xl font-bold mb-8">
            Our Commitment to Students
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Practical Training */}
            <div className="flex gap-5">
              <HeartHandshake
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                We keep our short courses practical and engaging, giving
                participants the opportunity to develop and practise essential
                First Aid and CPR skills.
              </p>
            </div>

            {/* Experienced Trainers */}
            <div className="flex gap-5">
              <UsersRound
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                Our trainers bring relevant industry experience and practical
                knowledge to the classroom, helping participants understand
                how emergency response skills can be applied in real-life
                situations.
              </p>
            </div>

            {/* Quality & Compliance */}
            <div className="flex gap-5">
              <ShieldCheck
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                As RTO 46594, we are committed to delivering nationally
                recognised training in accordance with applicable regulatory
                requirements and relevant course standards.
              </p>
            </div>

            {/* Learning Experience */}
            <div className="flex gap-5">
              <GraduationCap
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                We provide a supportive learning environment where participants
                can ask questions, receive guidance and build confidence in
                their practical skills.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION / VISION ================= */}
      <Mission />

      {/* ================= LOCATION & CONTACT ================= */}
      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 border-3 rounded-lg overflow-hidden shadow bg-white border-[#CBA3A3]">

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

          {/* RIGHT — CONTACT DETAILS */}
          <div className="p-10 flex flex-col justify-center space-y-6">

            <h2 className="text-2xl font-semibold">
              Contact Details
            </h2>

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

            <div className="flex items-start gap-4 text-gray-700 leading-relaxed tracking-wide text-lg">
              <Phone className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium text-lg">
                  Phone
                </p>
                <p>
                  02 8530 8337
                </p>
              </div>
            </div>

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

            <div className="flex items-start gap-4 text-lg text-gray-700">
              <ShieldCheck className="text-[#CBA3A3]" />

              <div>
                <p className="font-medium">
                  RTO Code
                </p>
                <p>
                  46594
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}