import {
  Award,
  Users,
  HeartPulse,
  GraduationCap,
  ShieldCheck,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Nationally Recognised Training",
    description:
      "Receive a nationally recognised Statement of Attainment upon successful completion.",
  },
  {
    icon: GraduationCap,
    title: "Experienced Trainers",
    description:
      "Learn from qualified trainers with extensive industry and emergency response experience.",
  },
  {
    icon: HeartPulse,
    title: "Hands-on Practical Learning",
    description:
      "Build confidence through realistic scenarios and practical CPR and First Aid training.",
  },
  {
    icon: ShieldCheck,
    title: "Industry Standards",
    description:
      "Training is delivered in accordance with Australian Resuscitation Council (ARC) guidelines.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Enjoy personalised support and more practical time with experienced trainers.",
  },
  {
    icon: Clock3,
    title: "Fast Certification",
    description:
      "Successful participants receive their Statement of Attainment as soon as assessment requirements are met.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-[#C4A15A] uppercase tracking-widest font-semibold">
            Why Cardinal Institute
          </span>

          <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
            Why Choose Cardinal?
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            We deliver practical, engaging and nationally recognised training
            designed to prepare you for real-life emergency situations with
            confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-[#F9F9F9] rounded-3xl p-8 border border-gray-200 hover:border-[#C4A15A] hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center mb-6 group-hover:bg-[#C4A15A] transition">
                  <Icon className="text-white w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Statistics */}

        <div className="mt-20 rounded-3xl bg-[#0B1F3A] text-white py-14 px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold text-[#F4C300]">100%</h3>
              <p className="mt-3">Face-to-Face Practical Training</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F4C300]">ARC</h3>
              <p className="mt-3">Guideline Compliant</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F4C300]">1 Day</h3>
              <p className="mt-3">Course Duration</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#F4C300]">RTO</h3>
              <p className="mt-3">Nationally Recognised Training</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}