"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
 <section className="bg-[#ebfcff] min-h-[90vh] flex justify-start">
  <div className="w-full my-20 h-full">
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]  items-stretch h-full">


      {/* LEFT CONTENT */}
      
<div className="flex flex-col justify-center w-full max-w-4xl mx-auto h-full text-start pl-6 lg:pl-40 space-y-6">

  <h1 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] w-full">
   Cardinal Institute of Education – Our Purpose
  </h1>

  <p className="text-lg text-[#0B1F3A]/90 leading-relaxed w-full">
 Cardinal Institute of Education is a Registered Training Organisation (RTO 46594) delivering nationally recognised First Aid and CPR training in Sydney. Our short courses are designed to provide participants with practical knowledge and essential skills for responding to emergency situations.</p>

  <div className="flex flex-wrap gap-4 mt-10 w-full">
    <Link
      href="/about"
      className="px-6 py-3 rounded-full bg-[#0B1F3A] text-[#E8DFD5] font-semibold whitespace-nowrap hover:opacity-90 transition"
    >
      More about us
    </Link> 
    {/* <Link
      href="/courses"
      className="px-6 py-3 rounded-full border border-[#CBA3A3] text-[#0B1F3A] font-semibold whitespace-nowrap hover:bg-[#CBA3A3]/20 transition"
    >
      Course outline
    </Link> */}
  </div>

</div>



      {/* RIGHT IMAGE – unchanged */}
    {/* RIGHT IMAGE – LEFT ALIGNED INSIDE RIGHT COLUMN */}
<div className="relative h-full min-h-[90vh] flex justify-center">
  <div className="relative w-10/12 h-full">
    <Image
      src="/disability.png"
      alt="Cardinal Institute training"
      fill
      className="object-cover object-left"
      priority
    />
  </div>
</div>




    </div>
  </div>
</section>


  );
}
