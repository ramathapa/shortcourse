import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
<section className="relative min-h-[700px] md:min-h-[750px] lg:h-[75vh] overflow-hidden">
      {/* Background */}
      <Image
        src="/courses/firstaidd.png"
        alt="Cardinal Institute Short Courses"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1a1510]/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="max-w-3xl">

          <span className="inline-flex items-center rounded-full bg-[#F4C300] px-4 py-2 text-sm font-semibold text-[#0B1F3A]">
            Nationally Recognised First Aid Training
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
            First Aid & CPR
            <span className="block text-[#F4C300]">
              Short Courses
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">
            Build practical, life-saving skills with nationally recognised
            CPR and First Aid training delivered by experienced trainers.
            Learn through hands-on practical sessions aligned with Australian
            Resuscitation Council (ARC) guidelines.
          </p>

          {/* Quick Facts */}
          <div className="mt-8 flex flex-wrap gap-3">

            <div className="rounded-full bg-white/30 backdrop-blur px-4 py-2 text-white">
              ✔ Face-to-face
            </div>

            <div className="rounded-full bg-white/30 backdrop-blur px-4 py-2 text-white">
              ✔ Nationally Recognised
            </div>

            <div className="rounded-full bg-white/30 backdrop-blur px-4 py-2 text-white">
              ✔ Same Day Assessment
            </div>

            <div className="rounded-full bg-white/30 backdrop-blur px-4 py-2 text-white">
              ✔ Statement of Attainment
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#courses"
              className="rounded-full bg-[#F4C300] px-8 py-4 text-[#0B1F3A] font-bold hover:bg-[#ddb000] transition"
            >
              View Courses
            </Link>

            <Link
              href="#events"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-[#0B1F3A] transition"
            >
              View Upcoming Dates
            </Link>

          </div>

        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white"
        >
          <path d="M0,64L120,69.3C240,75,480,85,720,80C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}