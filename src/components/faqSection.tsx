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

  const [openSections, setOpenSections] = useState<{
    [key: number]: number[];
  }>({});

  const toggleSection = (
    groupIndex: number,
    sectionIndex: number
  ) => {
    const groupOpen = openSections[groupIndex] || [];

    if (groupOpen.includes(sectionIndex)) {
      setOpenSections({
        ...openSections,
        [groupIndex]: groupOpen.filter(
          (i) => i !== sectionIndex
        ),
      });
    } else {
      setOpenSections({
        ...openSections,
        [groupIndex]: [...groupOpen, sectionIndex],
      });
    }
  };

  const toggleAll = (
    groupIndex: number,
    totalSections: number
  ) => {
    const groupOpen = openSections[groupIndex] || [];

    if (groupOpen.length === totalSections) {
      setOpenSections({
        ...openSections,
        [groupIndex]: [],
      });
    } else {
      setOpenSections({
        ...openSections,
        [groupIndex]: Array.from(
          { length: totalSections },
          (_, i) => i
        ),
      });
    }
  };

  return (
    <section
      className="w-full py-10 sm:py-14 lg:py-16"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      {/* Responsive Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl p-0 sm:p-4 md:p-6 lg:p-8">

          <div className="space-y-4">
            {faqGroups.map((group, groupIndex) => {
              const groupOpen = openSections[groupIndex] || [];

              return (
                <div
                  key={groupIndex}
                  className="mb-12 sm:mb-16 lg:mb-20"
                >

                  {/* Topic Title */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#002A4E] mb-2">
                    {group.heading}
                  </h2>

                  {/* Topic Description */}
                  {group.description && (
                    <p className="text-gray-600 mb-5 sm:mb-6 text-base sm:text-lg">
                      {group.description}
                    </p>
                  )}

                  {/* Expand All Button */}
                  <div className="mb-5 sm:mb-6">
                    <button
                      onClick={() =>
                        toggleAll(
                          groupIndex,
                          group.sections.length
                        )
                      }
                      className="
                        px-5 sm:px-6
                        py-2
                        rounded-full
                        font-semibold
                        border
                        text-sm sm:text-base
                        transition-all
                        duration-300
                        hover:shadow-md
                      "
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
                  <div className="space-y-3 sm:space-y-4">
                    {group.sections.map(
                      (section, sectionIndex) => {
                        const isOpen =
                          groupOpen.includes(sectionIndex);

                        return (
                          <div
                            key={sectionIndex}
                            className="
                              rounded-lg
                              overflow-hidden
                              border
                              border-[#CBA3A3]
                              bg-white
                            "
                          >

                            {/* FAQ Question */}
                            <button
                              onClick={() =>
                                toggleSection(
                                  groupIndex,
                                  sectionIndex
                                )
                              }
                              className="
                                w-full
                                flex
                                justify-between
                                items-center
                                gap-4
                                px-4
                                sm:px-6
                                py-4
                                sm:py-5
                                text-left
                                font-semibold
                                bg-white
                                text-[#0B1F3A]
                                transition-colors
                                duration-200
                                hover:bg-gray-50
                              "
                            >
                              {/* Question */}
                              <div
                                className="
                                  text-base
                                  sm:text-lg
                                  lg:text-xl
                                  leading-6
                                  sm:leading-7
                                "
                              >
                                {section.title}
                              </div>

                              {/* Arrow */}
                              <span
                                className="
                                  flex-shrink-0
                                  text-2xl
                                  sm:text-3xl
                                  leading-none
                                  font-normal
                                "
                              >
                                {isOpen ? "⌃" : "⌄"}
                              </span>
                            </button>

                            {/* FAQ Answer */}
                            {isOpen && (
                              <div
                                className="
                                  px-4
                                  sm:px-6
                                  pb-5
                                  sm:pb-6
                                  whitespace-pre-line
                                  bg-white
                                  text-base
                                  sm:text-lg
                                  text-[#0B1F3A]
                                  leading-7
                                  sm:leading-8
                                "
                              >
                                {section.content}
                              </div>
                            )}

                          </div>
                        );
                      }
                    )}
                  </div>

                </div>
              );
            })}

            {/* Read More Button */}
            <div className="flex justify-start">
              <Link
                href="/faq"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#0B1F3A]
                  text-white
                  w-full
                  sm:w-auto
                  px-8
                  py-3
                  rounded-xl
                  font-semibold
                  text-base
                  sm:text-lg
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