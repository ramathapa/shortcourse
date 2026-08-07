import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  Briefcase,
  GraduationCap,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: HeartHandshake,
    title: "Healthcare",
    description:
      "Nationally recognised First Aid and CPR training for hospitals, medical centres and allied health providers.",
  },
  {
    icon: Users,
    title: "Aged Care & Disability",
    description:
      "Flexible workplace training for aged care, disability support and community care organisations.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Childcare",
    description:
      "Compliant First Aid and CPR training for teachers, educators and childcare professionals.",
  },
  {
    icon: Shield,
    title: "Construction",
    description:
      "Practical safety training to help construction teams meet workplace compliance requirements.",
  },
  {
    icon: Briefcase,
    title: "Corporate Workplaces",
    description:
      "Convenient on-site First Aid and CPR programs for businesses of every size.",
  },
  {
    icon: Building2,
    title: "Community Organisations",
    description:
      "Customised training for councils, sporting clubs, volunteers and community groups.",
  },
];

export default function GroupTraining() {
  return (
    <section className="py-24 bg-[#E8DFD5]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[4px] text-[#C4A15A] font-semibold">
            Corporate & Workplace Training
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-[#0B1F3A]">
            Group First Aid & CPR Training
          </h2>

          <p className="text-gray-700 mt-6 text-lg leading-8">
            Cardinal Institute of Education delivers flexible corporate
            First Aid and CPR training for businesses, schools,
            healthcare providers and community organisations.
            Training can be delivered at your workplace or at our Sydney campus.
          </p>

        </div>

        {/* Industry Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C4A15A]/15 flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-[#0B1F3A]"
                  />

                </div>

                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="p-10 lg:p-14">

              <span className="uppercase tracking-[3px] text-[#C4A15A] font-semibold">
                Corporate Bookings
              </span>

              <h3 className="text-4xl font-bold text-[#0B1F3A] mt-4">
                Need Training for Your Team?
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Whether you need training for a small team or an entire
                organisation, we provide flexible workplace solutions
                tailored to your schedule, location and compliance needs.
              </p>

              <div className="mt-8 space-y-3 text-[#0B1F3A]">

                <p>✓ On-site workplace or campus training</p>

                <p>✓ Flexible booking dates</p>

                <p>✓ Experienced accredited trainers</p>

                <p>✓ Nationally recognised certification</p>

                <p>✓ Competitive pricing for group bookings</p>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/corporate-bookings"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#173d69] transition"
                >
                  Learn More

                  <ArrowRight size={20} />
                </Link>

                <a
                  href="tel : +0285308337"
                  className="inline-flex items-center px-8 py-4 border border-[#0B1F3A] rounded-xl text-[#0B1F3A] font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                >
                  Call 02 8530 8337
                </a>

              </div>

            </div>

            {/* Right */}

            <div className="bg-[#0B1F3A] flex items-center justify-center p-12">

              <div className="text-center text-white">

                <h2 className="text-7xl font-bold text-[#C4A15A]">
                  5+
                </h2>

                <p className="mt-4 text-2xl font-semibold">
                  Participants?
                </p>

                <p className="mt-4 max-w-sm leading-7 text-gray-300">
                  Receive discounted group pricing and customised
                  First Aid & CPR training delivered by experienced
                  trainers at your workplace or our training centre.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}