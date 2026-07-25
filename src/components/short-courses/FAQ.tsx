"use client";


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

  {
    heading: "Entry Requirements",
    description: "",
    sections: [
      {
        title: "What are the entry requirements?",
        content: `There are no formal entry requirements in the training package. However, to make sure you can successfully complete the course, you must:
1. Be 18 years of age or older
2. Provide valid photo identification (100-point ID check)
3. Have suitable language, literacy, numeracy and digital (LLND) skills to complete training and assessment
4. Have basic digital skills and access to a device with internet
5. Be willing and able to take part in face-to-face practical activities
6. Bring a personal device (laptop or tablet) where advised

Before enrolment is confirmed, you will complete a pre-training review and an LLND assessment so we can identify any support you may need.`,
      },
      {
        title: "Do I need any prior first aid experience?",
        content: `No. Both courses are designed to accommodate learners with no previous first aid or emergency response experience. Training combines clear explanations, trainer demonstrations and supervised hands-on practice, so you build skills step by step throughout the day.`,
      },
    ],
  },

  {
    heading: "Course Delivery & Duration",
    description: "",
    sections: [
      {
        title: "How long does each course take?",
        content: `HLTAID011 Provide First Aid runs for 8 hours, delivered in a single day of face-to-face training and assessment.

HLTAID009 Provide CPR is also delivered in a single day, with face-to-face training and assessment typically running between 6 and 8 hours.

You must attend the full session to be eligible for certification — training and assessment are integrated throughout the day, so partial attendance is not sufficient.`,
      },
      {
        title: "Can I complete these courses online?",
        content: `No. Training is delivered face-to-face in a classroom environment supported by practical demonstrations and simulated emergency scenarios. Hands-on practice — including performing CPR on manikins and using AED trainers — is essential to developing real emergency response skills and cannot be replaced by online study.`,
      },
      {
        title: "What does the training involve?",
        content: `You will take part in trainer-led sessions that include:
• Explanation of first aid and CPR principles, including the DRSABCD action plan
• Trainer demonstrations of techniques
• Practical skills practice using adult (and where applicable, infant) CPR manikins
• AED use and emergency response procedures
• Simulated emergency scenarios, such as responding to an unconscious casualty
• Group discussion and scenario-based activities

Assessment happens during and at the end of training through knowledge questions and practical skill demonstrations.`,
      },
      {
        title: "What should I bring on the day?",
        content: `Bring valid photo identification and, where advised, a personal device such as a laptop or tablet to support learning activities. Wear comfortable clothing suitable for practical activities — you will be kneeling on the floor to perform CPR on manikins during the session.`,
      },
    ],
  },

  {
    heading: "Assessment & Certification",
    description: "",
    sections: [
      {
        title: "How am I assessed?",
        content: `Assessment is conducted during and at the conclusion of training and includes:
1. Knowledge assessment questions
2. Practical demonstration of skills in simulated emergency scenarios

For CPR, you will need to demonstrate at least two minutes of uninterrupted CPR on an adult manikin placed on the floor, along with correct AED use, in line with ARC guidelines.`,
      },
      {
        title: "What certification do I receive?",
        content: `Participants who successfully demonstrate competency receive a nationally recognised Statement of Attainment for the unit completed — either HLTAID011 Provide First Aid or HLTAID009 Provide Cardiopulmonary Resuscitation.`,
      },
      {
        title: "How often should I renew my first aid or CPR certificate?",
        content: `As a general guide, first aid training should be refreshed every 3 years and CPR every 12 months, in line with Australian Resuscitation Council guidelines. Some industries or employers may require more frequent refreshers, so always confirm requirements with your workplace or regulator.`,
      },
      {
        title: "What happens if I can't complete the full session?",
        content: `Because training and assessment are integrated throughout the day, participants who do not complete the full session and all assessment activities may not be eligible for certification. If something unexpected comes up, contact us as early as possible to discuss your options, which may include attending a future session.`,
      },
    ],
  },

  {
    heading: "Fees & Refunds",
    description: "",
    sections: [
      {
        title: "How much does the course cost and how do I pay?",
        content: `Full fee details are set out in our Schedule of Fees and Charges, and an itemised breakdown is provided before you enrol. Payments can be made by EFT or credit/debit card (cash is not accepted).

To protect your money, you are never required to prepay more than $1,500 ahead of training being delivered. Contact us for current pricing.`,
      },
      {
        title: "What is the refund policy if I withdraw?",
        content: `Refunds depend on when you withdraw:
1. Written withdrawal 10 or more business days before the course starts — 100% refund
2. Written withdrawal less than 10 business days before the course starts — 75% refund
3. Withdrawal after the course has started — no refund, unless exceptions apply (such as approved compassionate circumstances or rights under Australian Consumer Law)

If Cardinal Institute of Education cancels a course, you receive a full refund automatically. Approved refunds are processed within 14 calendar days. Enrolment fees and learning materials already issued are non-refundable.`,
      },
    ],
  },

  {
    heading: "Recognition & Support",
    description: "",
    sections: [
      {
        title: "Can I get credit for previous first aid or CPR training?",
        content: `Yes. Credit Transfer is available if you hold a valid Statement of Attainment for the same unit from another provider, and Recognition of Prior Learning (RPL) may be available if you can demonstrate existing skills and knowledge. Keep in mind that first aid and CPR certificates have recommended refresher periods, so many participants choose to complete the full course to maintain currency. Contact us to discuss your situation.`,
      },
      {
        title: "What support is available during the course?",
        content: `Every learner completes an LLND assessment before enrolment, and a pre-training review helps us understand your needs. If additional support is required, we can provide reasonable adjustments and extra assistance from trainers, provided the integrity of the unit and assessment requirements is maintained. Talk to us before enrolling if you have any concerns.`,
      },
      {
        title: "Which jobs require these certificates?",
        content: `First aid and CPR certification is required or expected in many roles, including:
1. Workplace First Aid Officer
2. Aged care and disability support workers
3. Childcare educators and education support staff
4. Fitness instructors
5. Security personnel
6. Construction, trade, hospitality and retail workers

Specific licensing or regulatory requirements vary by industry and state, so always confirm with your employer or the relevant authority which course you need.`,
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
