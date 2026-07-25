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
    description: "Hospitals, medical centres and allied health providers.",
  },
  {
    icon: Users,
    title: "Aged Care & Disability",
    description: "Residential care, home care and disability support providers.",
  },
  {
    icon: GraduationCap,
    title: "Schools & Childcare",
    description: "Training for teachers, educators and childcare professionals.",
  },
  {
    icon: Shield,
    title: "Construction",
    description: "Safety and workplace compliance training for construction teams.",
  },
  {
    icon: Briefcase,
    title: "Corporate",
    description: "First aid programs for offices and business organisations.",
  },
  {
    icon: Building2,
    title: "Community Organisations",
    description: "Training tailored for clubs, councils and community groups.",
  },
];

export default function GroupTraining() {
  return (
    <section className="py-24 bg-[#E8DFD5] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="uppercase tracking-[4px] text-[#F4C300] font-semibold ">
            Workplace Training
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-[#C4A15A]">
            Group & On-site Training
          </h2>

          <p className="text-black mt-6 text-lg leading-8">
            Need First Aid or CPR training for your organisation?
            Cardinal Institute delivers flexible group training for workplaces,
            schools and community organisations across Australia.
          </p>

        </div>

        {/* Industry Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F4C300] flex items-center justify-center mb-6">

                  <Icon
                    size={30}
                    className="text-[#0B1F3A]"
                  />

                </div>

                <h3 className="text-2xl text-[#C4A15A] font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-black leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* CTA */}

        <div className="mt-20 bg-white rounded-3xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            <div className="p-10 lg:p-14">

              <span className="text-[#C4A15A] uppercase tracking-[3px] font-semibold">
                Corporate Bookings
              </span>

              <h3 className="text-4xl font-bold text-[#0B1F3A] mt-4">
                Looking for Group Training?
              </h3>

              <p className="mt-6 text-gray-600 leading-8">
                Whether you need training for five employees or an entire
                organisation, we can customise a training solution that suits
                your workplace, schedule and compliance requirements.
              </p>

              <div className="mt-8 space-y-3 text-[#0B1F3A]">

                <p>✓ Flexible training dates</p>

                <p>✓ On-site workplace delivery available</p>

                <p>✓ Experienced industry trainers</p>

                <p>✓ Competitive group pricing</p>

                <p>✓ Nationally recognised qualifications</p>

              </div>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#173d69] transition"
                >
                  Request a Quote

                  <ArrowRight size={20} />
                </Link>

                <a
                  href="tel:+61XXXXXXXXX"
                  className="inline-flex items-center px-8 py-4 border border-[#0B1F3A] rounded-xl text-[#0B1F3A] font-semibold hover:bg-[#0B1F3A] hover:text-white transition"
                >
                  Call Us
                </a>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-[#C4A15A] flex items-center justify-center p-12">

              <div className="text-center">

                <h2 className="text-7xl font-bold text-[#0B1F3A]">
                  5+
                </h2>

                <p className="mt-4 text-xl font-semibold text-[#0B1F3A]">
                  Participants?
                </p>

                <p className="mt-3 max-w-xs text-[#0B1F3A]/80">
                  Contact us for discounted group pricing and customised
                  workplace training solutions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}