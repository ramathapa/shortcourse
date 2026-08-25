"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function FAQPage() {
const faqGroups = [
  {
    heading: "General Questions",
    description: "",
    sections: [
      {
        title: "What short courses does Cardinal Institute of Education offer?",
        content: `We deliver two nationally recognised short courses:

1. HLTAID011 Provide First Aid — a comprehensive one-day course covering first aid response for a range of injuries and medical emergencies, including CPR and AED use
2. HLTAID009 Provide Cardiopulmonary Resuscitation (CPR) — a focused course teaching you to recognise a cardiac emergency, perform CPR and use an automated external defibrillator (AED)

Both courses follow Australian Resuscitation Council (ARC) guidelines and are delivered face-to-face with hands-on practical training.`,
      },
      {
        title: "What is the difference between the First Aid and CPR courses?",
        content: `HLTAID009 Provide CPR focuses specifically on responding to cardiac emergencies — following the DRSABCD action plan, performing CPR and using an AED.

HLTAID011 Provide First Aid is broader. It includes CPR skills plus first aid response for a wide range of injuries and illnesses, such as bleeding, wounds, and other common medical emergencies.

If your workplace only requires current CPR certification, the CPR course may be sufficient. If you need to be a workplace first aider or want complete emergency response skills, choose the First Aid course. Always confirm the exact requirement with your employer or regulator.`,
      },
      {
        title: "Are these courses nationally recognised?",
        content: `Yes. Both HLTAID011 and HLTAID009 are nationally recognised units of competency. On successful completion, you receive a Statement of Attainment recognised across Australia.`,
      },
      {
        title: "Who are these courses for?",
        content: `Anyone aged 18 or over can enrol — no prior first aid experience is needed. Typical participants include:
1. Workers required to hold a first aid or CPR certificate for their job
2. People in health, community services, education, childcare, fitness, security or hospitality roles
3. Students completing vocational qualifications that require first aid or CPR skills
4. Community members who want to be prepared for emergencies`,
      },
    ],
  },
];
const [openSections, setOpenSections] = useState<{ [key: number]: number[] }>({});

const toggleSection = (groupIndex: number, sectionIndex: number) => {
  const groupOpen = openSections[groupIndex] || [];

  if (groupOpen.includes(sectionIndex)) {
    setOpenSections({
      ...openSections,
      [groupIndex]: groupOpen.filter((i) => i !== sectionIndex),
    });
  } else {
    setOpenSections({
      ...openSections,
      [groupIndex]: [...groupOpen, sectionIndex],
    });
  }
};

const toggleAll = (groupIndex: number, totalSections: number) => {
  const groupOpen = openSections[groupIndex] || [];

  if (groupOpen.length === totalSections) {
    setOpenSections({
      ...openSections,
      [groupIndex]: [],
    });
  } else {
    setOpenSections({
      ...openSections,
      [groupIndex]: Array.from({ length: totalSections }, (_, i) => i),
    });
  }
};
   

  return (
  <section className="w-full py-16" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="max-w-7xl mx-20 px-4">
        <div className="rounded-xl p-8 ">
       {/* <h1 className="text-5xl lg:text-4xl font-extrabold text-[#002A4E] text-center">
          FAQS
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-12 text-xl">
          Find answers to the most common questions about our courses and services.
        </p> */}
         



          <div className="space-y-4">
          {faqGroups.map((group, groupIndex) => {
  const groupOpen = openSections[groupIndex] || [];

  return (
    <div key={groupIndex} className="mb-20">

      {/* ✅ Topic Title */}
      <h2 className="text-3xl font-bold text-[#002A4E] mb-2">
        {group.heading}
      </h2>

      {/* ✅ Topic Description */}
      <p className="text-gray-600 mb-6 text-lg">
        {group.description}
      </p>

      {/* Expand All Button */}
      <div className="mb-6">
        <button
          onClick={() => toggleAll(groupIndex, group.sections.length)}
          className="px-6 py-2 rounded-full font-semibold border"
          style={{
            borderColor: "#CBA3A3",
            color: "#0B1F3A",
            backgroundColor: "#E6E6E6",
          }}
        >
          {groupOpen.length === group.sections.length
            ? "Collapse All"
            : "Expand All"}
        </button>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {group.sections.map((section, sectionIndex) => {
          const isOpen = groupOpen.includes(sectionIndex);

          return (
            <div
              key={sectionIndex}
              className="rounded-lg overflow-hidden border border-[#CBA3A3]"
            >
              <button
                onClick={() =>
                  toggleSection(groupIndex, sectionIndex)
                }
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold bg-white text-[#0B1F3A]"
              >
                <div className="text-xl">{section.title}</div>
                <span className="text-3xl">
                  {isOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-4 whitespace-pre-line bg-white text-lg text-[#0B1F3A]">
                  {section.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
         {/* Read More Button */}
   
    </div>
    
  );
})}
   <div className="flex justify-start ">
      <Link
        href="/faq"
        className="
          inline-flex items-center justify-center
          bg-[#0B1F3A]
          text-white
          px-8
          py-3
          rounded-xl
          font-semibold
          text-lg
          transition-all
          duration-300
          hover:bg-[#C4A15A]
          hover:text-[#0B1F3A]
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Read More
      </Link>
    </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}
