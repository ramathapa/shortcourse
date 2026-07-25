"use client";


import React, { useState } from "react";

export default function FAQPage() {
const faqGroups = [
  {
    heading: "General Questions",
    description: "",
    sections: [
      {
        title: "What is the difference between Certificate III in Individual Support and Certificate IV in Ageing Support?",
        content: `CHC33021 Certificate III in Individual Support (Ageing and Disability) is an entry-level qualification for people starting out in aged care and disability support. It builds the foundational skills needed to provide person-centred care across both ageing and disability settings.

CHC43015 Certificate IV in Ageing Support sits at a higher level. It focuses on coordinating services, supporting people with more complex needs, and developing the leadership and supervisory skills used in aged care teams.`,
      },
      {
        title: "What career opportunities are available after completing these courses?",
        content: `Certificate III graduates typically move into entry-level roles such as:
1. Aged Care Support Worker
2. Disability Support Worker
3. Home and Community Care Worker
4. Personal Care Assistant

Certificate IV graduates are prepared for roles including:
1. Community Program Coordinator
2. Residential Care Worker
3. Personal Care Worker (senior roles)
4. Accommodation Support Worker`,
      },
      {
        title: "Are these courses nationally recognised?",
        content: `Yes. Both qualifications are nationally recognised and issued under the Australian Qualifications Framework (AQF). Graduates who complete all requirements receive the full qualification, and anyone who completes only some units receives a Statement of Attainment for those units.`,
      },
      {
        title: "Do I need prior experience or a health background to enrol?",
        content: `No. Both courses are designed for people who are new to the care and support industry, including those with no previous health or nursing background. Training starts with foundational knowledge and builds practical skills step by step, with support available throughout the course.

For Certificate IV, no previous qualification is required, although learners with existing skills or experience may apply for Recognition of Prior Learning or Credit Transfer.`,
      },
    ],
  },

  {
    heading: "Entry Requirements",
    description: "",
    sections: [
      {
        title: "What are the entry requirements?",
        content: `To enrol, you must:
1. Be 18 years of age or older
2. Provide valid photo identification (100-point ID check)
3. Be an Australian citizen, New Zealand citizen, or Australian permanent resident
4. Have suitable language, literacy, numeracy and digital (LLND) skills to complete training and assessment
5. Be willing and able to take part in face-to-face practical activities
6. Confirm you can complete the mandatory 120 hours of work placement

Before enrolment is confirmed, you will complete a pre-training review and an LLND assessment so we can identify any support you may need. A National Police Check (at your own cost) and any immunisations required by the host facility must also be completed before work placement begins.`,
      },
    ],
  },

  {
    heading: "Study Mode & Duration",
    description: "",
    sections: [
      {
        title: "How long does each course take?",
        content: `Both Certificate III in Individual Support and Certificate IV in Ageing Support are delivered over 52 weeks, which includes 40 active weeks of training and assessment and 12 weeks of scheduled holiday breaks.

Learners attend 20 hours of structured training per week, plus around 5 hours of self-directed study. Learners granted Credit Transfer or Recognition of Prior Learning may complete the course in a shorter timeframe.`,
      },
      {
        title: "Can I study online?",
        content: `No. Training is delivered face-to-face in a classroom environment, supported by practical demonstrations, simulated workplace activities and supervised work placement. This hands-on approach ensures you develop the practical care skills employers expect, which cannot be achieved through online study alone.`,
      },
      {
        title: "What does the training involve?",
        content: `Training combines trainer-led classroom sessions with practical, hands-on learning, including:
• Practical demonstrations and skills-based activities
• Simulated workplace activities in a purpose-built environment
• Case studies and scenario-based learning
• Group discussions and collaborative tasks
• Supervised work placement in a real aged care or disability setting`,
      },
    ],
  },

  {
    heading: "Work Placement",
    description: "",
    sections: [
      {
        title: "Do these courses include work placement?",
        content: `Yes. Both Certificate III and Certificate IV include a mandatory minimum of 120 hours of supervised work placement in an approved aged care or disability support workplace. Placement is scheduled in blocks across the course, so you apply your classroom learning with real clients under supervision.`,
      },
      {
        title: "Do I need to find my own placement?",
        content: `No. Cardinal Institute of Education arranges all work placements on your behalf with approved industry partners. A formal Work Placement Agreement is set up with each host organisation, and your trainer visits you during each placement block to provide support and conduct workplace observations.`,
      },
      {
        title: "What do I need before starting placement?",
        content: `Before your first placement block, you must complete:
1. A National Police Check (at your own cost)
2. Any immunisations required by the host organisation

Your placement hours are recorded in a Workplace Hours Log and verified by your workplace supervisor.`,
      },
    ],
  },

  {
    heading: "First Aid & CPR Short Courses",
    description: "",
    sections: [
      {
        title: "How long does the First Aid course take?",
        content: `HLTAID011 Provide First Aid is delivered in a single 8-hour face-to-face session combining theory, practical skills and assessment. You must attend the full session to be eligible for certification, as training and assessment run throughout the day. Successful participants receive a nationally recognised Statement of Attainment.`,
      },
      {
        title: "What does the CPR course cover?",
        content: `HLTAID009 Provide Cardiopulmonary Resuscitation teaches you to recognise a cardiac emergency, follow the DRSABCD action plan, perform CPR, and use an automated external defibrillator (AED), all in line with Australian Resuscitation Council (ARC) guidelines. Assessment includes hands-on practice with CPR manikins in simulated emergency scenarios.`,
      },
      {
        title: "How often should I renew my first aid or CPR certificate?",
        content: `As a general guide, first aid training should be refreshed every 3 years and CPR every 12 months, in line with Australian Resuscitation Council guidelines. Some industries or employers may require more frequent refreshers, so always confirm requirements with your workplace or regulator.`,
      },
    ],
  },

  {
    heading: "Fees & Refunds",
    description: "",
    sections: [
      {
        title: "How much does the course cost and how do I pay?",
        content: `Full fee details are set out in our Schedule of Fees and Charges, and an itemised breakdown is provided before you enrol. An initial payment is required before the course starts, with instalment plans available depending on the course. Payments can be made by EFT or credit/debit card (cash is not accepted).

To protect your money, you are never required to prepay more than $1,500 ahead of training being delivered — fees are collected progressively as the course runs. Contact us for current pricing.`,
      },
      {
        title: "What is the refund policy if I withdraw?",
        content: `Refunds depend on when you withdraw:
1. Written withdrawal 10 or more business days before the course starts — 100% refund
2. Written withdrawal less than 10 business days before the course starts — 75% refund
3. Withdrawal after the course has started — no refund, unless exceptions apply (such as approved compassionate circumstances or rights under Australian Consumer Law)

If Cardinal Institute of Education cancels a course, you receive a full refund automatically. Approved refunds are processed within 14 calendar days. Enrolment fees and learning materials already issued are non-refundable.`,
      },
      {
        title: "What happens if I cannot complete the course within the scheduled duration?",
        content: `Contact us as early as possible. Options such as additional learner support, reasonable adjustments or a course extension may be available depending on your circumstances. If you withdraw without completing the full qualification, you will receive a Statement of Attainment for any units you have successfully completed.`,
      },
    ],
  },

  {
    heading: "Recognition & Pathways",
    description: "",
    sections: [
      {
        title: "Can I get credit for previous study or experience?",
        content: `Yes. Credit Transfer is available if you have already completed identical units with another provider, and Recognition of Prior Learning (RPL) is available if you have existing skills and knowledge from work or life experience. Where granted, credit can shorten your course duration. Contact us to discuss your evidence and eligibility.`,
      },
      {
        title: "What can I study after Certificate IV in Ageing Support?",
        content: `Certificate IV graduates can continue into higher-level study, including:
1. HLT54121 Diploma of Nursing
2. Bachelor of Nursing (subject to university entry requirements)

You can also broaden your skills with further vocational training in the health and community services sector.`,
      },
    ],
  },

  {
    heading: "Additional Questions",
    description: "",
    sections: [
      {
        title: "What support is available if I need help with reading, writing or study skills?",
        content: `Every learner completes a language, literacy, numeracy and digital (LLND) assessment before enrolment. If additional needs are identified, we provide tailored support, which may include reasonable adjustments, extra assistance from trainers, and an individual support plan. Support arrangements are reviewed throughout your course to make sure you stay on track.`,
      },
      {
        title: "What if I miss a class?",
        content: `Regular attendance is expected, as training and assessment are structured week by week and practical skills are built progressively. If you need to miss a session, talk to your trainer as soon as possible so catch-up arrangements can be made. Completing all scheduled training, assessments and the 120 hours of work placement is required to achieve the qualification.`,
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
    </div>
  );
})}
          </div>
        </div>
      </div>
    </section>
  );
}
