
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#ebfcff] min-h-0 lg:min-h-[90vh] flex justify-start">
      <div className="w-full my-0 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center w-full max-w-4xl mx-auto text-start px-6 py-12 lg:py-0 lg:pl-40 space-y-6">

            <h1 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] w-full">
              Cardinal Institute of Education – Our Purpose
            </h1>

            <p className="text-lg text-[#0B1F3A]/90 leading-relaxed w-full">
              Cardinal Institute of Education is a Registered Training
              Organisation providing nationally recognised aged care and
              disability training. We deliver Certificate III & IV
              qualifications, First Aid courses, and practical skill
              development for domestic students. Our programs focus on
              safety, inclusion, person-centred care, and preparing a
              skilled, compassionate workforce.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 lg:mt-10 w-full">
              <Link
                href="/about"
                className="px-6 py-3 rounded-full bg-[#0B1F3A] text-[#E8DFD5] font-semibold whitespace-nowrap hover:opacity-90 transition"
              >
                More about us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-auto lg:min-h-[90vh] flex justify-center overflow-hidden">

            <div className="relative w-full h-full lg:w-10/12">
              <Image
                src="/disability.png"
                alt="Cardinal Institute training"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="
                  object-cover
                  object-center
                  lg:object-left
                "
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

