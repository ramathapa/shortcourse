"use client";
import Image from "next/image";
import FAQ from "@/components/short-courses/FAQ";



export default function FAQPage() {
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

<FAQ />
</main>
  )
 
}
