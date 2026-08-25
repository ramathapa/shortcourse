import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short Course Accreditation & Compliance | Cardinal Institute",
  description:
    "Learn about accreditation, compliance and quality standards for short courses at Cardinal Institute of Education in Sydney.",
};

export default function AccreditationPage() {
  return (
    <main className="w-full bg-white">
      <section className="max-w-6xl mx-auto px-6 py-16">

        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-[#0B1F3A] mb-6">
          Accreditation & Compliance
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          At Cardinal Institute of Education, quality, compliance and student
          safety are central to the short courses we deliver. Our training is
          designed and delivered in accordance with applicable Australian
          vocational education and training requirements, giving students
          confidence in the quality and relevance of their training.
        </p>

        {/* RTO */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Registered Training Organisation (RTO)
        </h2>

        <p className="text-gray-700 mb-6">
          Cardinal Institute of Education operates as a Registered Training
          Organisation (RTO) and delivers training in accordance with the
          requirements that apply to registered training organisations in
          Australia.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>
            Regulated by the Australian Skills Quality Authority (ASQA), where
            applicable to our scope of registration
          </li>
          <li>
            Short courses are delivered within our approved scope of
            registration
          </li>
          <li>
            Training and assessment processes are maintained in accordance
            with applicable regulatory requirements
          </li>
        </ul>

        {/* Nationally Recognised Training */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Nationally Recognised Training
        </h2>

        <p className="text-gray-700 mb-10">
          Where a short course is delivered as nationally recognised training,
          it is based on the relevant nationally recognised unit of competency
          and is delivered and assessed according to the applicable training
          and assessment requirements. Successful participants receive the
          appropriate nationally recognised credential or Statement of
          Attainment where applicable.
        </p>

        {/* Quality Training */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Our Commitment to Quality Training
        </h2>

        <p className="text-gray-700 mb-8">
          Our short courses are designed to provide practical, relevant and
          competency-focused training. Learning activities and assessments are
          structured to help participants develop the knowledge and practical
          skills required for the relevant course.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>Clear course information provided before enrolment</li>
          <li>
            Training and assessment activities aligned with course
            requirements
          </li>
          <li>Qualified and appropriately experienced trainers and assessors</li>
          <li>Practical learning activities where required</li>
          <li>Assessment decisions based on the relevant competency requirements</li>
        </ul>

        {/* Compliance & Continuous Improvement */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Compliance & Continuous Improvement
        </h2>

        <p className="text-gray-700 mb-6">
          We regularly review our short course delivery, training resources
          and assessment processes to support quality outcomes and continuous
          improvement.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-10 space-y-2">
          <li>
            Regular review of training and assessment materials
          </li>
          <li>
            Monitoring of trainer competency and industry currency
          </li>
          <li>
            Collection and review of student feedback
          </li>
          <li>
            Continuous improvement actions where opportunities are identified
          </li>
          <li>
            Review of course information when relevant requirements are updated
          </li>
        </ul>

        {/* Student Support */}
        <h2 className="text-2xl font-semibold text-[#0B1F3A] mb-4">
          Student Support & Ethical Practice
        </h2>

        <p className="text-gray-700">
          We aim to provide students with clear and transparent information
          throughout their short course experience. This includes information
          about course requirements, assessment, fees, enrolment and available
          support. Students can also access our complaints and appeals
          processes and appropriate support for their learning needs.
        </p>

      </section>
    </main>
  );
}