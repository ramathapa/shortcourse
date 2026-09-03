"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#043352] text-white pt-12">
      
      {/* Main Grid */}
      <div className="w-full px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        {/* Column 1 */}
        <div className="flex flex-col items-start md:items-center md:text-center">
          <div className="w-full max-w-[260px]">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Logo" className="h-18 w-auto mx-auto md:mx-0" />
            </Link>

            <div className="border border-white/30 rounded-xl px-5 py-4 text-sm w-full">
              <p className="font-semibold">
                Cardinal Institute of Education
              </p>
              <p className="mt-1 text-white/80 leading-snug">
                Level 6, 56-58 York Street, Sydney NSW 2000
              </p>
              <p className="mt-1 text-white/80">
                Training & Education Provider
              </p>
              <p className="mt-1 text-white/80">
                 RTO Code: 46594
              </p>
              
            </div>
          </div>
        </div>

        {/* Column 2 */}
<div className="flex justify-start md:justify-center lg:justify-end  ">
  <div className="w-full max-w-[260px] text-left">
    <h4 className="font-semibold text-xl mb-6 h-[32px] flex items-center">
      Menu
    </h4>

    <ul className="space-y-3 text-base">
      <li><Link href="/refund-policy" className="hover:underline">Refund Policy</Link></li>
      <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
      <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
      <li><Link href="/career-hub" className="hover:underline">Career Hub</Link></li>
      <li><Link href="/about" className="hover:underline">Our Story</Link></li>
      <li><Link href="/accreditation" className="hover:underline">Accreditation</Link></li>
      <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
      <li><Link href="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
    </ul>
  </div>
</div>

        {/* Column 3 */}
  <div className="flex justify-start">
  <div className="w-full max-w-[260px] text-left">
    <h4 className="font-semibold text-xl mb-6 h-[32px] flex items-center justify-start">
      All Our Courses
    </h4>

    <ul className="space-y-3 text-base text-left">
      {/* <li className="leading-snug">
        <Link href="#" className="hover:underline">
          CHC33021 – Certificate III in Individual Support
        </Link>
      </li>

      <li className="leading-snug">
        <Link href="#" className="hover:underline">
          CHC43015 – Certificate IV in Ageing Support
        </Link>
      </li>

      <li className="leading-snug">
        <Link href="#" className="hover:underline">
          CHC43121 – Certificate IV in Disability Support
        </Link>
      </li> */}

      <li className="leading-snug">
        <Link href="/short-courses/HLTAID009CoursePage" className="hover:underline">
          HLTAID009 – Provide Cardiopulmonary Resuscitation
        </Link>
      </li>

      <li className="leading-snug">
        <Link href="/short-courses/HLTAID011CoursePage" className="hover:underline">
          HLTAID011 – Provide First Aid
        </Link>
      </li>
      <li className="leading-snug">
     <span className="leading-snug">
              Looking for our Certificate III and IV qualifications? Visit 
             </span>
             </li>
      
       <li className="leading-snug">
        <Link href="https://cardinalinstitute.edu.au/" className="hover:underline">
       cardinalinstitute.edu.au  </Link>
      </li>

    </ul>
  </div>
</div>

        {/* Column 4 */}
        <div>
          <div className="w-full max-w-[260px]">
            <h4 className="font-semibold text-xl mb-6 h-[32px] flex items-center">
              Contact
            </h4>

            <ul className="space-y-4 text-base">
             <li className="flex items-start gap-3">
  <MapPin className="w-6 h-6 text-[#C4A15A] flex-shrink-0 mt-0.5" />
  <span className="leading-snug">
    Level 6, 56-58 York Street, Sydney NSW 2000
  </span>
</li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C4A15A]" />
                     <span>02 8530 8337, </span>
                <span>0494 799 291</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C4A15A]" />
                <span>info@cardinalinstitute.edu.au</span>
              </li>
            </ul>

            <div className="flex space-x-5 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61582219676402" className="text-[#C4A15A] hover:text-[#9c255f] transition"><FaFacebookF className="w-7 h-7" /></a>
            <a
  href="https://x.com/cardinal_instit"  target="_blank"  rel="noopener noreferrer"  className="text-[#C4A15A] hover:text-[#9c255f] transition">  <FaXTwitter className="w-7 h-7" /></a>
 <a href="https://www.instagram.com/cardinal_institute" className="text-[#C4A15A] hover:text-[#9c255f] transition"><FaInstagram className="w-7 h-7" /></a>
            <a href="https://www.linkedin.com/company/112751946/admin/dashboard/" className="text-[#C4A15A] hover:text-[#9c255f] transition"><FaLinkedinIn className="w-7 h-7" /></a>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center text-sm text-gray-300 relative">

          <p className="text-center sm:text-left mb-3 sm:mb-0 w-full sm:w-auto">
            © {new Date().getFullYear()} Cardinal Institute of Education. All rights reserved.
          </p>

          {/* <div className="flex justify-center w-full sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 gap-4">
            <img src="/icons/mastercard.png" className="h-10" />
            <img src="/icons/visa.png" className="h-10" />
            <img src="/icons/applepay.png" className="h-10" />
            <img src="/icons/googlepay.png" className="h-10" />
          </div> */}
        </div>
      </div>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#C4A15A] text-white px-4 py-2 rounded-full shadow-lg"
        >
          ↑
        </button>
      )}
    </footer>
  );
}