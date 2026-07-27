import Image from "next/image";
import Mission from "@/components/mission";
import {
  GraduationCap,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <main className="bg-[#E8DFD5] text-[#0B1F3A]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[70vh] md:h-[60vh] flex items-end justify-start px-6 md:px-16 pb-16">
        <Image
          src="/about/hero.jpg" // replace with your image
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
            Empowering learners with quality education, practical skills, and
            pathways to real-world success.
          </p>
        </div>
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="py-16 sm:py-20 px-6 md:px-16 bg-[#E8DFD5]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#0B1F3A] tracking-wide">
            Cardinal Institute of Education – Our Purpose
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
            Cardinal Institute of Education is a Registered Training Organisation delivering nationally recognised training in the aged care and disability sectors.  </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
            Our programs are designed in alignment with nationally recognised training packages, industry standards, and regulatory expectations. Training is underpinned by the principles of safety, inclusion, ethical decision-making, and person-centred practice, and is delivered through a balance of structured learning, practical skills development, and supervised work placement where required. </p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
            Cardinal Institute of Education delivers qualifications including CHC33021 Certificate III in Individual Support (Ageing and Disability), CHC43015 Certificate IV in Ageing Support, and CHC43121 Certificate IV in Disability Support, as well as targeted units and short courses such as HLTAID011 Provide First Aid and HLTAID009 Provide Cardiopulmonary Resuscitation.</p>

              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
            Cardinal Institute of Education is approved to deliver nationally recognised training to domestic students only and does not enrol international students holding a primary student visa. </p>
              <p className="text-base sm:text-lg leading-relaxed text-[#0B1F3A]/80 tracking-wide text-justify">
           We are committed to contributing to a skilled and accountable care workforce that values empathy, safety, responsibility, and respect, and that strengthens communities through high-quality care delivery.  </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end items-center">
            <img
              src="/about/about.png"
              alt="About Cardinal Institute"
              className="w-full max-h-[500px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[850px] object-cover rounded-xl shadow-md"
            />
          </div>

        </div>
      </section>

       {/* COMMITMENT */}

      <section className="py-20 px-6 md:px-16">

        <div className="max-w-6xl mx-auto bg-[#0B1F3A] text-white rounded-3xl p-10 md:p-16">


          <h2 className="text-4xl font-bold mb-8">
            Our Commitment to Students
          </h2>


          <div className="grid md:grid-cols-2 gap-8">


            <div className="flex gap-5">

              <HeartHandshake
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                We keep classes practical and personal, ensuring every learner
                receives meaningful guidance throughout their training journey.
              </p>

            </div>


            <div className="flex gap-5">

              <UsersRound
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                Our trainers bring current industry experience and support
                students with study skills, LLN assistance and placement
                preparation.
              </p>

            </div>


            <div className="flex gap-5">

              <ShieldCheck
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                Cardinal Institute arranges work placements so learners are
                not required to source their own placement opportunities.
              </p>

            </div>


            <div className="flex gap-5">

              <GraduationCap
                className="text-[#C4A15A] shrink-0"
                size={45}
              />

              <p className="text-lg leading-relaxed text-gray-200">
                We currently enrol domestic students only and do not enrol
                international students holding a primary student visa.
              </p>

            </div>


          </div>

        </div>

      </section>
      


      {/* ================= MISSION / VISION ================= */}
      <Mission />
       {/* LOCATION */}

      <section className="bg-white py-20 px-6">


        <div className="max-w-6xl mx-auto">


          <div className="text-center mb-12">


            <MapPin
              size={60}
              className="mx-auto text-[#C4A15A]"
            />


            <h2 className="text-4xl font-bold mt-5">
              Where To Find Us
            </h2>


            <p className="text-gray-600 mt-4 text-lg">
              Visit our offices and training locations.
            </p>


          </div>




          <div className="grid md:grid-cols-2 gap-8">


            <div className="bg-[#E8DFD5] rounded-3xl p-10 shadow-lg">


              <h3 className="text-2xl font-bold mb-5">
                Head Office
              </h3>


              <p className="text-lg leading-relaxed">
                Suite 207,
                <br/>
                30 Campbell Street,
                <br/>
                Blacktown NSW 2148
              </p>


            </div>



            <div className="bg-[#0B1F3A] text-white rounded-3xl p-10 shadow-lg">


              <h3 className="text-2xl font-bold mb-5">
                Training Delivery
              </h3>


              <p className="text-lg leading-relaxed text-gray-200">

                Level 6,
                <br/>
                56–58 York Street,
                <br/>
                Sydney NSW 2000

              </p>


            </div>


          </div>


        </div>


      </section>

    </main>
  );
}
