"use client";

export default function AccreditationPage() {
  return (
    <main className="w-full bg-white">

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-6">
          Accreditation & Compliance
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          At Cardinal Institute of Education, quality and accountability sit at
          the centre of everything we do. Every course we deliver is built on
          nationally recognised training packages and shaped by regulatory
          requirements, so students can enrol with confidence knowing their
          education meets Australian vocational standards.
        </p>

        {/* Commitment */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Our Commitment to Quality Training
        </h2>

        <p className="text-gray-700 mb-8">
          Our training and assessment strategies are developed in consultation
          with employers, industry representatives, and subject matter experts
          in the aged care and disability sectors. This ensures that what
          students learn in the classroom and simulated environments reflects
          the skills genuinely required in today&apos;s care workplaces.
        </p>

        {/* RTO */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Registered Training Organisation (RTO)
        </h2>

        <p className="text-gray-700 mb-6">
          Cardinal Institute of Education operates as a Registered Training
          Organisation in accordance with the Standards for Registered
          Training Organisations 2025, regulated by the Australian Skills
          Quality Authority (ASQA).
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>Regulated by the Australian Skills Quality Authority (ASQA)</li>
          <li>Delivering qualifications within our approved scope of registration</li>
          <li>Subject to ongoing regulatory monitoring and audit</li>
        </ul>

        {/* Nationally recognised */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Nationally Recognised Training
        </h2>

        <p className="text-gray-700 mb-10">
          All qualifications we deliver sit within the Australian
          Qualifications Framework (AQF). Graduates receive an AQF
          qualification on successful completion, while students who complete
          individual units are issued a Statement of Attainment recognised by
          employers and training providers across Australia.
        </p>

        {/* Industry alignment */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Industry Partnerships & Alignment
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>Ongoing consultation recorded through our Industry Consultation Register</li>
          <li>Course structure and assessment validated by sector professionals</li>
          <li>Supervised work placement arranged with approved industry partners</li>
        </ul>

        {/* Compliance */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Compliance & Continuous Improvement
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>Systematic validation of assessment tools and judgements on a planned cycle</li>
          <li>Trainers and assessors maintain vocational competency and industry currency</li>
          <li>A Continuous Improvement Register capturing feedback and actions</li>
          <li>Regular review of training resources against training package updates</li>
        </ul>

        {/* Ethics */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Student Support & Ethical Practice
        </h2>

        <p className="text-gray-700">
          We treat every student fairly and transparently — from pre-enrolment
          information and LLND support through to assessment, complaints and
          appeals, and the handling of personal information under the Privacy
          Act 1988 and the Australian Privacy Principles. Individual support
          plans are available where needed, so no learner is left to navigate
          their study alone.
        </p>

      </section>

    </main>
  );
}
