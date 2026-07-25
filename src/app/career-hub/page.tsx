"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CareerHub() {
  return (
    <main className="min-h-screen bg-[#f7f9fa] text-[#002A4E] py-16 px-6">
      {/* Header */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[#002A4E]">Career Hub</h1>
        <p className="text-lg text-[#334b63] max-w-3xl mx-auto">
          Explore opportunities, build your future, and connect with Cardinal Institute of Education.
        </p>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Career Opportunities */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#D71920]">
          <h2 className="text-2xl font-semibold mb-4 text-[#002A4E]">Career Opportunities</h2>
          <p className="text-[#445b73] mb-6">
            Discover open positions and start your journey with us.
          </p>
         
        </div>

        {/* Internships */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#A3C4C4]">
          <h2 className="text-2xl font-semibold mb-4 text-[#002A4E]">Internship Programs</h2>
          <p className="text-[#445b73] mb-6">
            Gain real-world experience through our practical learning internships.
          </p>
          {/* <Link
            href="#"
            className="inline-flex items-center text-[#F4C300] font-semibold hover:text-[#D71920] transition"
          >
            Explore Internships <ArrowRight className="ml-2 h-4 w-4" />
          </Link> */}
        </div>

        {/* Skill Development */}
        <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-[#F4C300]">
          <h2 className="text-2xl font-semibold mb-4 text-[#002A4E]">Skill Development</h2>
          <p className="text-[#445b73] mb-6">
            Access training, workshops, and self-growth programs.
          </p>
          
        </div>
      </div>

      {/* Footer CTA */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4 text-[#002A4E]">Join Cardinal Institute of Education</h2>
        <p className="text-lg text-[#445b73] mb-8 max-w-2xl mx-auto">
          Build a meaningful career and grow with a community that believes in excellence, values, and opportunities.
        </p>

              {/* Arrow bounce + Button zoom */}
            <div className="mt-6 inline-flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl text-[#0a2d52] mb-2"
              >
                ↓
              </motion.div>

              <motion.a
                href="/career-hub/career"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-[#C4A15A] text-white px-8 py-3 rounded-xl font-semibold shadow-md  transition"
              >
                Apply Now
              </motion.a>
            </div>

      </section>
    </main>
  );
}
