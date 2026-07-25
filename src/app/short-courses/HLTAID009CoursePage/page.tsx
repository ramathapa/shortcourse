"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CourseOverview from "@/components/short-courses/CourseOverview";
import UpcomingEvents from "@/components/short-courses/UpcomingEvents";
import { shortCourses } from "@/lib/shortCourses";

export default function HLTAID009CoursePage() {

  const course =
  shortCourses.find(
    (item) => item.slug === "HLTAID009CoursePage"
  )!;
 const sections = [
  {
    title: "What You Will Learn",
    content: `
This course provides the practical skills and knowledge to perform CPR in accordance with Australian Resuscitation Council (ARC) guidelines.

By completing this course, you will learn how to:
• Recognise a cardiac emergency
• Follow the DRSABCD action plan
• Perform CPR safely and effectively
• Use an Automated External Defibrillator (AED)
• Communicate with emergency services
• Apply infection control procedures
• Respond confidently until medical help arrives
    `,
  },
  {
    title: "Entry Requirements and Suitability",
    content: `
There are no formal training package entry requirements. Participants should:

• Be 18 years or older
• Provide valid photo identification
• Have basic LLND and digital skills
• Be able to participate in practical training
• Complete a pre-training review and LLND assessment
    `,
  },
  {
    title: "Delivery and Learning Arrangements",
    content: `
This one-day face-to-face course combines theory with practical training.

Learning includes:
• Trainer demonstrations
• CPR practice on manikins
• AED operation
• Simulated emergency scenarios
• Practical assessment and feedback
    `,
  },
  {
    title: "Physical Requirements",
    content: `
Participants must complete a practical CPR assessment, including at least 2 minutes of uninterrupted CPR on an adult manikin placed on the floor.

Please contact us before enrolment if you have any physical limitations requiring discussion.
    `,
  },
  {
    title: "Assessment Arrangements",
    content: `
Assessment is competency-based and completed during training.

It includes:
• Knowledge questions
• Practical CPR demonstration
• AED use
• Emergency response scenarios

Reassessment opportunities are available where required.
    `,
  },
  {
    title: "Language, Literacy, Numeracy and Digital Support",
    content: `
All participants complete a brief LLND review before training.

Where required, we provide:
• Additional trainer support
• Reasonable assessment adjustments
• Learning assistance
• Referral to external support services
    `,
  },
  {
    title: "Industry and Regulatory Notes",
    content: `
CPR refresher training is generally recommended every 12 months in line with Australian Resuscitation Council guidelines.

Participants should confirm any workplace-specific requirements with their employer.
    `,
  },
  {
    title: "Credit Transfer (CT) & Recognition of Prior Learning (RPL)",
    content: `
Credit Transfer and Recognition of Prior Learning (RPL) are available where eligible.

Supporting evidence may be required. Contact us for further information.
    `,
  },
  {
    title: "Who This Course Is For",
    content: `
Suitable for anyone needing CPR skills for work or personal preparedness, including:

• Workplace First Aiders
• Aged Care Workers
• Disability Support Workers
• Childcare Educators
• Fitness Professionals
• Community Members
    `,
  },
  {
    title: "Attendance, Participation and Completion",
    content: `
Participants must attend the full session and complete all practical and knowledge assessments.

Successful participants receive a nationally recognised Statement of Attainment.
    `,
  },
  {
    title: "Contact and Enrolment Information",
    content: `
Cardinal Institute of Education Pty Ltd (RTO 46594)

📍 Level 6, 56–58 York Street, Sydney NSW 2000

📞 04 0670 5649

✉️ admin@cardinalinstitute.com.au
    `,
  },
];

  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const toggleAll = () => {
    if (openSections.length === sections.length) {
      setOpenSections([]);
    } else {
      setOpenSections(sections.map((_, i) => i));
    }
  };

  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center px-4 sm:px-6 md:px-16">
        <Image
          src="/courses/CPR.png" // replace with your image
          alt="HLTAID009 Provide Cardiopulmonary Resuscitation"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/20" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            HLTAID009 Provide Cardiopulmonary Resuscitation
          </h2>
          <p className="text-[#E8DFD5] text-base sm:text-lg md:text-xl mt-2">
            Nationally Recognised Training
          </p>
        </div>
      </section>

      <CourseOverview course={course}/>
      <UpcomingEvents courseSlug="HLTAID009CoursePage" />

      {/* ================= CONTENT ================= */}
      <section className="py-8 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-[#d9e6f2] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a6f97] mb-4">
              COURSE OVERVIEW
            </h2>

            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
              HLTAID009 Provide Cardiopulmonary Resuscitation covers the skills and knowledge needed to
              perform CPR in accordance with Australian Resuscitation Council (ARC) guidelines. It applies
              to a broad range of people who may need to respond to a life-threatening emergency in a
              workplace, community, care, education, security, hospitality, sport, or general public setting.
              This practical, job-relevant course gives participants the confidence to recognise a cardiac
              arrest emergency, call for help, provide CPR, and use an automated external defibrillator
              (AED). Essential theory is combined with demonstration and supervised hands-on practice so
              participants understand both what to do and why it matters.
              Participants work through the basic life support action plan, practise CPR techniques on
              manikins, and explore how the response may differ depending on the casualty's age and the
              circumstances of the incident.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-900">

              <p>
                <span className="font-semibold">Course code:</span> HLTAID009
              </p>

              <p>
                <span className="font-semibold">Course Title:</span> Provide Cardiopulmonary Resuscitation
              </p>

              <p>
                <span className="font-semibold">Delivery Mode:</span> Face-to-face classroom and practical training
              </p>

              <p>
                <span className="font-semibold">Duration:</span> 1 day (6 to 8 hours of face-to-face training and assessment)
              </p>

              <p>
                <span className="font-semibold">Certification:</span> Statement of Attainment issued on successful completion
              </p>

              <p>
                <span className="font-semibold">Renewal Guidance:</span> CPR training is generally recommended for renewal every 12 months in line with ARC guidelines, subject to workplace requirements
              </p>

              <p>
                <span className="font-semibold">Suitable For:</span> Beginners and experienced participants aged 18 or over requiring initial or refresher CPR training
              </p>

            </div>
          </div>

          {/* ===== RIGHT BLACK SIDEBAR CARD ===== */}
          <div className="bg-black text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col gap-6 h-full lg:sticky lg:top-10">

            {/* COURSE HIGHLIGHT */}
            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">
                ✔ Nationally Recognised Training
              </p>
              <p className="text-sm text-gray-300 mt-2">
                Learn the CPR skills that save lives — at work, at home, and in the community.
              </p>
            </div>

            {/* KEY FEATURES */}
            <div className="space-y-3 text-sm sm:text-base">
              <p>✔ One-Day Course</p>
              <p>✔ Hands-On CPR & AED Practice</p>
              <p>✔ Simulated Cardiac Emergencies</p>
              <p>✔ Experienced Professional Trainers</p>
              <p>✔ Same-Day Certification (on success)</p>
            </div>

            {/* CTA */}
            <Link
              href="https://cardinalinstitute.rto.net.au/Form/Index?id=cardinalinstitute&formType=1"
              className="block text-center text-lg bg-white text-black py-3 rounded-full font-semibold hover:-translate-y-1 transition"
            >
              Enrol Now
            </Link>

            {/* CAREER OUTCOME */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300 text-center mb-2">
                🎯 Ideal For:
              </p>
              <div className="text-xs text-gray-400 space-y-1 text-center">
                <p>• Workplace First Aiders</p>
                <p>• Aged Care & Disability Workers</p>
                <p>• Childcare & Education Staff</p>
                <p>• Fitness & Community Workers</p>
              </div>
            </div>

            {/* TRUST / INDUSTRY DEMAND */}
            <div className="text-center">
              <p className="text-sm text-gray-300">
                CPR certification is a mandatory requirement across many Australian industries.
              </p>
            </div>

            {/* CONTACT */}
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                🎧 Need Guidance?
              </h3>

              <a
                href="tel:0406705649"
                className="block bg-white text-black py-2 rounded-full font-semibold hover:-translate-y-1 transition"
              >
                Call Now <br />
                <span className="text-sm">(04) 0670 5649</span>
              </a>
            </div>

            {/* QUICK INFO */}
            <div className="text-center text-xs text-gray-400 mt-auto">
              <p>⏱ Duration: 1 Day</p>
              <p>📍 Face-to-Face Training</p>
            </div>

          </div>

        </div>
      </section>

      <section className="w-full py-12 px-4 sm:px-6 md:px-10 bg-[#f6f6f6]">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#0B1F3A]">
            Full Description
          </h2>

          {/* BUTTON */}
          <div className="mb-6">
            <button
              onClick={toggleAll}
              className="px-4 sm:px-6 py-2 rounded-full font-semibold border text-sm sm:text-base"
              style={{
                borderColor: "#CBA3A3",
                color: "#0B1F3A",
                backgroundColor: "#E6E6E6",
              }}
            >
              {openSections.length === sections.length ? "Collapse All" : "Expand All"}
            </button>
          </div>

          {/* ACCORDION */}
          <div className="space-y-3">
            {sections.map((section, i) => {
              const isOpen = openSections.includes(i);

              return (
                <div key={i} className="rounded-lg overflow-hidden border border-[#CBA3A3]">

                  <button
                    onClick={() => toggleSection(i)}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left font-semibold bg-white text-[#0B1F3A]"
                  >
                    <div className="text-base sm:text-lg md:text-xl">
                      {section.title}
                    </div>
                    <span className="text-2xl">{isOpen ? "⌃" : "⌄"}</span>
                  </button>

                  {isOpen && (
                    <div
                      className="px-4 sm:px-6 pb-4 whitespace-pre-line bg-white text-sm sm:text-base text-[#0B1F3A]"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  )}

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
