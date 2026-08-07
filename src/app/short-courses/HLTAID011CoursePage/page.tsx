"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { shortCourses } from "@/lib/shortCourses";
import CourseOverview from "@/components/short-courses/CourseOverview";
import UpcomingEvents from "@/components/short-courses/UpcomingEvents";

export default function HLTAID011CoursePage() {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const course = shortCourses.find(
    (item) => item.slug === "HLTAID011CoursePage"
  );

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Course not found.</p>
      </main>
    );
  }

  const sections = [
    {
      title: "What You Will Learn",
      content: `This course provides the practical skills and confidence to respond to a range of first aid emergencies in line with Australian Resuscitation Council (ARC) guidelines.

By completing this course, you will learn how to:
• Recognise emergency situations
• Assess and manage casualties
• Perform CPR and use an AED
• Treat common injuries and illnesses
• Communicate with emergency services
• Monitor casualties until help arrives
• Complete first aid reporting requirements`,
    },
    {
      title: "Entry Requirements and Suitability",
      content: `There are no formal training package entry requirements. Participants should:

• Be 18 years or older
• Provide valid photo identification
• Have basic LLND and digital skills
• Be able to participate in practical activities
• Complete a pre-training review and LLND assessment

Please contact us before enrolment if you have concerns about completing the practical components.`,
    },
    {
      title: "Delivery and Learning Arrangements",
      content: `This one-day face-to-face course combines theory with practical training.

Learning includes:
• Trainer-led instruction
• Practical first aid and CPR practice
• AED operation
• Scenario-based emergency response
• Group discussion and trainer feedback`,
    },
    {
      title: "Physical Requirements",
      content: `Participants must complete practical CPR assessments, including at least 2 minutes of uninterrupted CPR on both adult and infant manikins.

If you have a medical condition or physical limitation, please contact us before enrolment to discuss suitable options.`,
    },
    {
      title: "Assessment Arrangements",
      content: `Assessment is competency-based and completed during training.

It includes:
• Knowledge questions
• Practical first aid demonstration
• CPR and AED assessment
• Emergency response scenarios

Reassessment opportunities are available where required.`,
    },
    {
      title: "Language, Literacy, Numeracy and Digital Support",
      content: `All participants complete a brief LLND review before training.

Where required, we provide:
• Additional trainer support
• Reasonable assessment adjustments
• Learning assistance
• Referral to external support services`,
    },
    {
      title: "Industry and Regulatory Notes",
      content: `First Aid certification is generally recommended for renewal every 3 years. CPR components may require annual renewal depending on workplace or industry requirements.

Participants should confirm employer-specific requirements where applicable.`,
    },
    {
      title: "Credit Transfer (CT) & Recognition of Prior Learning (RPL)",
      content: `Credit Transfer and Recognition of Prior Learning (RPL) are available where eligible.

Supporting evidence may be required. Contact us for further information.`,
    },
    {
      title: "Who This Course Is For",
      content: `Suitable for anyone needing first aid skills for work or personal preparedness, including:

• Workplace First Aiders
• Childcare & Education Staff
• Community Support Workers
• Security Personnel
• Construction Workers
• Hospitality & Retail Staff
• General Community Members`,
    },
    {
      title: "Attendance, Participation and Completion",
      content: `Participants must attend the full training session and complete all practical and knowledge assessments.

Successful participants receive a nationally recognised Statement of Attainment.`,
    },
    {
      title: "Contact and Enrolment Information",
      content: `Cardinal Institute of Education Pty Ltd (RTO 46594)

📍 Level 6, 56–58 York Street, Sydney NSW 2000

📞 04 0670 5649

✉️ info@cardinalinstitute.com.au`,
    },
  ];

  const toggleSection = (index: number) => {
    setOpenSections((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );
  };

  const toggleAll = () => {
    setOpenSections((previous) =>
      previous.length === sections.length
        ? []
        : sections.map((_, index) => index)
    );
  };

  const allOpen = openSections.length === sections.length;

  return (
    <main className="w-full bg-white">

      {/* HERO */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center px-4 sm:px-6 md:px-16 overflow-hidden">

        <Image
          src="/courses/firstaidd.png"
          alt="HLTAID011 Provide First Aid training"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/40" />

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {course.heroTitle}
          </h1>

          <p className="text-[#E8DFD5] text-base sm:text-lg md:text-xl mt-3">
            Nationally Recognised Training
          </p>

          <p className="text-white/90 mt-4 max-w-2xl">
            {course.description}
          </p>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <CourseOverview course={course} />

      {/* UPCOMING EVENTS */}
      <UpcomingEvents courseSlug={course.slug} />

      {/* COURSE DETAILS */}
      <section className="py-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 bg-[#d9e6f2] rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a6f97] mb-5">
              COURSE OVERVIEW
            </h2>

           <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
  HLTAID011 Provide First Aid equips participants with the practical skills and knowledge to respond confidently to emergencies in accordance with Australian Resuscitation Council (ARC) guidelines.
</p>

<p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
  Through hands-on training, you&apos;ll learn to assess incidents, provide CPR, treat common injuries and illnesses, and deliver first aid until professional medical assistance arrives.
</p>

<p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-8">
  Ideal for workplaces and the community, this nationally recognised course prepares you to respond quickly and effectively in emergency situations.
</p>

            <div className="space-y-4 text-sm sm:text-base text-gray-900">

              <p>
                <span className="font-semibold">Course code:</span>{" "}
                {course.code}
              </p>

              <p>
                <span className="font-semibold">Course Title:</span>{" "}
                {course.title}
              </p>

              <p>
                <span className="font-semibold">Delivery Mode:</span>{" "}
                {course.delivery}
              </p>

              <p>
                <span className="font-semibold">Duration:</span>{" "}
                {course.duration}
              </p>

              <p>
                <span className="font-semibold">Certification:</span>{" "}
                {course.certificate}
              </p>

              <p>
                <span className="font-semibold">Renewal Guidance:</span>{" "}
                {course.refresher}
              </p>

              <p>
                <span className="font-semibold">Suitable For:</span>{" "}
                {course.features.suitableFor}
              </p>

            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="bg-black text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col gap-6 h-full lg:sticky lg:top-10">

            <div className="text-center">
              <p className="text-lg sm:text-xl font-bold">
                ✔ Nationally Recognised Training
              </p>

              <p className="text-sm text-gray-300 mt-2">
                Gain practical life-saving skills trusted across workplaces and
                communities.
              </p>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <p>✔ 1 day equivalent (same day certification)</p>
              <p>✔ Hands-On CPR &amp; AED Practice</p>
              <p>✔ Real-Life Emergency Scenarios</p>
              <p>✔ Experienced Professional Trainers</p>
              <p>✔ Statement of Attainment</p>
            </div>

            <Link
              href={course.enrolUrl}
              className="block text-center text-lg bg-white text-black py-3 rounded-full font-semibold hover:-translate-y-1 hover:bg-[#C4A15A] transition"
            >
              Enrol Now
            </Link>

            {/* <div className="border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-300 text-center mb-2">
                🎯 Ideal For:
              </p>

              <div className="text-xs text-gray-400 space-y-1 text-center">
                <p>• Workplace First Aid Officers</p>
                <p>• Childcare &amp; Education Staff</p>
                <p>• Community Support Workers</p>
                <p>• Construction &amp; Trade Workers</p>
              </div>
            </div> */}

            <div className="text-center">
              <p className="text-sm text-gray-300">
                Trusted by students preparing for workplace safety, healthcare,
                and community roles.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3">
                🎧 Need Guidance?
              </h3>

              <a
                href="tel : +0285308337"
                className="block bg-white text-black py-2 rounded-full font-semibold hover:-translate-y-1 transition"
              >
                Call Now
                <br />
                <span className="text-sm">02 8530 8337</span>
              </a>
            </div>

            <div className="text-center text-xs text-gray-400 mt-auto">
              <p>⏱ Duration: {course.duration}</p>
              <p>📍 {course.delivery}</p>
            </div>

          </aside>
        </div>
      </section>

      {/* FULL DESCRIPTION / ACCORDION */}
      <section className="w-full py-12 px-4 sm:px-6 md:px-10 bg-[#f6f6f6]">
        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
              Full Description
            </h2>

            <button
              type="button"
              onClick={toggleAll}
              className="px-4 sm:px-6 py-2 rounded-full font-semibold border text-sm sm:text-base w-fit"
              style={{
                borderColor: "#CBA3A3",
                color: "#0B1F3A",
                backgroundColor: "#E6E6E6",
              }}
            >
              {allOpen ? "Collapse All" : "Expand All"}
            </button>

          </div>

          <div className="space-y-3">

            {sections.map((section, index) => {
              const isOpen = openSections.includes(index);

              return (
                <div
                  key={section.title}
                  className="rounded-lg overflow-hidden border border-[#CBA3A3]"
                >

                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left font-semibold bg-white text-[#0B1F3A] hover:bg-gray-50 transition"
                  >
                    <span className="text-base sm:text-lg md:text-xl">
                      {section.title}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-2xl ml-4 flex-shrink-0"
                    >
                      {isOpen ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 pt-2 whitespace-pre-line bg-white text-sm sm:text-base leading-relaxed text-[#0B1F3A]">
                      {section.content}
                    </div>
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
