"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAOtherPage() {
  return (
    <main className="bg-[#f7f9fa] text-[#002A4E] py-10 px-6">
      {/* Footer CTA */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#002A4E]">
          Join Cardinal Institute of Education
        </h2>
        <p className="text-xl text-[#445b73] mb-6 max-w-2xl mx-auto">
          Build a meaningful career and grow with a community that believes in excellence, values, and opportunities.
        </p>
        {/* Call Option */}
        
      <div className="flex items-center justify-center gap-6">

  {/* Call Button */}
  <a
    href="tel:0452603303"
    className="inline-flex items-center justify-center text-[#0a2d52] text-lg font-semibold bg-white px-6 py-3 rounded-xl shadow hover:bg-[#C4A15A] hover:text-white transition"
  >
    <Phone className="w-5 h-5 mr-2" />
    Call Us
  </a>

  {/* Animated Arrow pointing right */}
  <motion.div
    animate={{ x: [0, 10, 0] }} // horizontal movement
    transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
    className="text-5xl text-[#0a2d52]  transform hover:-translate-y-1 transition-all duration-300" // rotate arrow 90deg to point right
  >
    →
  </motion.div>

  {/* Book Now Button */}
  <motion.a
    href="/contact"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
    className="bg-[#C4A15A] text-white px-8 py-3 rounded-xl font-semibold transform hover:-translate-y-1 transition-all duration-300 shadow-md transition"
  >
    Book Now
  </motion.a>

</div>
      </section>
    </main>
  );
}