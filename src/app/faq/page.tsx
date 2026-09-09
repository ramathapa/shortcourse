"use client";

import Image from "next/image";
import FAQ from "@/components/short-courses/FAQ";

export default function FAQPage() {
  return (
    <main className="bg-[#E8DFD5] text-[#0B1F3A]">

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative
          w-full
          min-h-[420px]
          sm:min-h-[480px]
          md:min-h-[520px]
          lg:min-h-[560px]
          flex
          items-end
          justify-start
          px-4
          sm:px-6
          md:px-10
          lg:px-16
          pb-10
          sm:pb-12
          md:pb-16
        "
      >
        {/* Hero Image */}
        <Image
          src="/about/hero.png"
          alt="Cardinal Institute of Education"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/45" />

        {/* Content */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-3xl
          "
        >
          {/* Small Label */}
          <span
            className="
              inline-block
              bg-[#C4A15A]
              text-[#0B1F3A]
              px-4
              py-2
              rounded-full
              text-xs
              sm:text-sm
              font-bold
              tracking-wide
              mb-4
            "
          >
            FAQ
          </span>

          {/* Heading */}
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-white
            "
          >
            Frequently Asked Questions
          </h1>

          {/* Description */}
          <p
            className="
              mt-4
              sm:mt-5
              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              leading-6
              sm:leading-7
              md:leading-8
              text-[#E6E6E6]
              max-w-2xl
            "
          >
            Find answers to common questions about our First Aid and CPR
            training courses, enrolment, certification and requirements.
          </p>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <FAQ />

    </main>
  );
}