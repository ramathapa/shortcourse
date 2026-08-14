import Link from "next/link";
import { Check, Minus } from "lucide-react";

const comparison = [
  {
    feature: "Course Duration",
    cpr: "1 Day (8 Hours)",
    firstAid: "1 Day (8 Hours)",
  },
  {
    feature: "CPR",
    cpr: true,
    firstAid: true,
  },
  {
    feature: "AED Training",
    cpr: true,
    firstAid: true,
  },
  {
    feature: "Burns",
    cpr: false,
    firstAid: true,
  },
  {
    feature: "Fractures",
    cpr: false,
    firstAid: true,
  },
  {
    feature: "Bleeding Control",
    cpr: false,
    firstAid: true,
  },
  {
    feature: "Asthma",
    cpr: false,
    firstAid: true,
  },
  {
    feature: "Anaphylaxis",
    cpr: false,
    firstAid: true,
  },
  {
    feature: "Certification",
    cpr: "Statement of Attainment",
    firstAid: "Statement of Attainment",
  },
  {
    feature: "Recommended Renewal",
    cpr: "12 Months",
    firstAid: "3 Years",
  },
];

function renderValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto text-green-600" size={22} />
    ) : (
      <Minus className="mx-auto text-gray-400" size={22} />
    );
  }

  return value;
}

export default function CourseComparison() {
  return (
    <section className="py-20 bg-[#F8F9FA]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

           <span className="text-[#C4A15A] font-semibold uppercase tracking-widest">
            
            Compare Courses
          </span>

             <h2 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] w-full mt-2">
            CPR vs First Aid
          </h2>

           <p className="text-[#0B1F3A] text-lg leading-relaxed max-w-3xl mx-auto mt-5">
            Not sure which course is right for you?
            Compare our nationally recognised courses side-by-side.
          </p>

        </div>

           

        <div className="overflow-x-auto rounded-3xl shadow-xl bg-white">

          <table className="w-full">

            <thead>

              <tr className="bg-[#0B1F3A] text-white">

                <th className="p-6 text-left">
                  Features
                </th>

                <th className="p-6 text-center">
                  HLTAID009
                  <br />
                  <span className="font-normal">
                    Provide CPR
                  </span>
                </th>

                <th className="p-6 text-center">
                  HLTAID011
                  <br />
                  <span className="font-normal">
                    Provide First Aid
                  </span>
                </th>

              </tr>

            </thead>

            <tbody>

              {comparison.map((row) => (

                <tr
                  key={row.feature}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-5 text-lg font-semibold text-[#0B1F3A]">
                    {row.feature}
                  </td>

                  <td className="p-5 tracking-wide text-center">
                    {renderValue(row.cpr)}
                  </td>

                  <td className="p-5 text-center tracking-wide">
                    {renderValue(row.firstAid)}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-white rounded-3xl shadow-lg p-8 border">

            <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
              HLTAID009
            </h3>

            <h4 className="text-2xl font-semibold text-[#C4A15A] mb-5">
              Provide Cardiopulmonary Resuscitation
            </h4>

            <p className="text-lg text-[#0B1F3A]/90 leading-relaxed w-full">
              Ideal for those needing CPR certification or an annual CPR
              refresher. Learn CPR, use an AED and respond confidently to
              cardiac emergencies.
            </p>

            <Link
              href="/short-courses/HLTAID009CoursePage"
              className="inline-block mt-8 bg-[#0B1F3A] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#173d69]"
            >
              View CPR Course
            </Link>

          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-[#C4A15A]">

            <h3 className="text-xl font-bold text-[#0B1F3A] mb-4">
              HLTAID011
            </h3>

            <h4 className="text-2xl font-semibold text-[#C4A15A] mb-5">
              Provide First Aid
            </h4>

           <p className="text-lg text-[#0B1F3A]/90 leading-relaxed w-full">
              Perfect for workplaces, childcare, healthcare,
              disability support and anyone wanting comprehensive
              emergency response skills beyond CPR.
            </p>

            <Link
              href="/short-courses/HLTAID011CoursePage"
              className="inline-block mt-8 bg-[#C4A15A] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#b39146]"
            >
              View First Aid Course
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}