"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { shortCourses } from "@/lib/shortCourses";
import CourseOverview from "@/components/short-courses/CourseOverview";
import UpcomingEvents from "@/components/short-courses/UpcomingEvents";

export default function HLTAID011CoursePage() {
 const course = shortCourses.find(
  (item) => item.slug === "HLTAID011CoursePage"
);

if (!course) {
  return <div>Course not found.</div>;
}
 const sections = [
  {
    title: "What You Will Learn",
    content: `
This course provides the practical skills and confidence to respond to a range of first aid emergencies in line with Australian Resuscitation Council (ARC) guidelines.

By completing this course, you will learn how to:
• Recognise emergency situations
• Assess and manage casualties
• Perform CPR and use an AED
• Treat common injuries and illnesses
• Communicate with emergency services
• Monitor casualties until help arrives
• Complete first aid reporting requirements
    `,
  },
  {
    title: "Entry Requirements and Suitability",
    content: `
There are no formal training package entry requirements. Participants should:

• Be 18 years or older
• Provide valid photo identification
• Have basic LLND and digital skills
• Be able to participate in practical activities
• Complete a pre-training review and LLND assessment

Please contact us before enrolment if you have concerns about completing the practical components.
    `,
  },
  {
    title: "Delivery and Learning Arrangements",
    content: `
This one-day face-to-face course combines theory with practical training.

Learning includes:
• Trainer-led instruction
• Practical first aid and CPR practice
• AED operation
• Scenario-based emergency response
• Group discussion and trainer feedback
    `,
  },
  {
    title: "Physical Requirements",
    content: `
Participants must complete practical CPR assessments, including at least 2 minutes of uninterrupted CPR on both adult and infant manikins.

If you have a medical condition or physical limitation, please contact us before enrolment to discuss suitable options.
    `,
  },
  {
    title: "Assessment Arrangements",
    content: `
Assessment is competency-based and completed during training.

It includes:
• Knowledge questions
• Practical first aid demonstration
• CPR and AED assessment
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
First Aid certification is generally recommended for renewal every 3 years. CPR components may require annual renewal depending on workplace or industry requirements.

Participants should confirm employer-specific requirements where applicable.
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
Suitable for anyone needing first aid skills for work or personal preparedness, including:

• Workplace First Aiders
• Childcare & Education Staff
• Community Support Workers
• Security Personnel
• Construction Workers
• Hospitality & Retail Staff
• General Community Members
    `,
  },
  {
    title: "Attendance, Participation and Completion",
    content: `
Participants must attend the full training session and complete all practical and knowledge assessments.

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
          src="/courses/firstaidd.png"
          alt="HLTAID011 Provide First Aid"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1F3A]/20" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            HLTAID011 Provide First Aid
          </h2>
          <p className="text-[#E8DFD5] text-base sm:text-lg md:text-xl mt-2">
            Nationally Recognised Training
          </p>
        </div>
      </section>

       <CourseOverview course={course}/>
  
  <UpcomingEvents courseSlug="HLTAID011CoursePage" />

      {/* ================= CONTENT ================= */}
      <section className="py-8 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 bg-[#d9e6f2] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a6f97] mb-4">
              COURSE OVERVIEW
            </h2>

            <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
              HLTAID011 Provide First Aid covers the skills and knowledge needed to deliver a first aid
              response to a casualty in accordance with guidelines set by the Australian Resuscitation
              Council (ARC) and other national peak clinical bodies. It applies to anyone who may need to
              respond to an incident in a workplace, education, community, care, hospitality, sport, security,
              or general public setting.
              As one of the most widely recognised workplace first aid programs in Australia, this course
              gives participants the knowledge and confidence to assess an incident, manage a casualty,
              communicate effectively, and provide an initial first aid response until further assistance is
              available.
              The course combines theory with practical application and suits anyone seeking a nationally
              recognised first aid qualification for work, compliance, or personal preparedness.
            </p>

            <div className="space-y-3 text-sm sm:text-base text-gray-900">

              <p>
                <span className="font-semibold">Course code:</span> HLTAID011
              </p>

              <p>
                <span className="font-semibold">Course Title:</span> Provide First Aid
              </p>

              <p>
                <span className="font-semibold">Delivery Mode:</span> Face-to-face classroom and practical training
              </p>

              <p>
                <span className="font-semibold">Duration:</span> 8 hours (1 day)
              </p>

              <p>
                <span className="font-semibold">Certification:</span> Statement of Attainment issued on successful completion
              </p>

              <p>
                <span className="font-semibold">Renewal Guidance:</span> First aid training is generally recommended for renewal every 3 years, subject to workplace requirements
              </p>

              <p>
                <span className="font-semibold">Suitable For:</span> Beginners and experienced participants aged 18 or over requiring nationally recognised first aid training
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
                Gain practical life-saving skills trusted across workplaces and communities.
              </p>
            </div>

            {/* KEY FEATURES */}
            <div className="space-y-3 text-sm sm:text-base">
              <p>✔ One-Day Course (8 Hours)</p>
              <p>✔ Hands-On CPR & AED Practice</p>
              <p>✔ Real-Life Emergency Scenarios</p>
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
                <p>• Workplace First Aid Officers</p>
                <p>• Childcare & Education Staff</p>
                <p>• Community Support Workers</p>
                <p>• Construction & Trade Workers</p>
              </div>
            </div>

            {/* TRUST / INDUSTRY DEMAND */}
            <div className="text-center">
              <p className="text-sm text-gray-300">
                Trusted by students preparing for workplace safety, healthcare, and community roles.
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
              <p>⏱ Duration: 1 Day (8 Hours)</p>
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
