
import Link from "next/link";
import {
  Building2,
  HeartHandshake,
  Briefcase,
  GraduationCap,
  Shield,
  Users,
  ArrowRight,
  Baby,
  Dumbbell,
  HandHeart,
  Clock3,
  CheckCircle,
} from "lucide-react";

const industries = [
  {
    icon: Briefcase,
    title: "Workplaces",
    description:
      "Flexible First Aid and CPR training for businesses and corporate teams, delivered at your workplace or our Sydney campus.",
  },
  {
    icon: Baby,
    title: "Childcare Centres",
    description:
      "Practical First Aid and CPR training for childcare teams and educators with flexible workplace group bookings.",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description:
      "Nationally recognised First Aid and CPR training for teachers, staff and school teams.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    description:
      "Help your fitness team develop essential CPR and emergency response skills with workplace training.",
  },
  {
    icon: HeartHandshake,
    title: "Aged Care",
    description:
      "Practical workplace training for teams working across aged care and community care environments.",
  },
  {
    icon: HandHeart,
    title: "Disability Providers",
    description:
      "Flexible First Aid and CPR group training for disability support providers and their teams.",
  },
  {
    icon: Users,
    title: "Community Organisations",
    description:
      "Group training solutions for community organisations, clubs, volunteers and local groups.",
  },
  {
    icon: Shield,
    title: "Construction",
    description:
      "Practical First Aid and CPR training to help construction teams develop essential workplace safety skills.",
  },
  {
    icon: Building2,
    title: "Healthcare",
    description:
      "First Aid and CPR training for healthcare, medical and allied health organisations.",
  },
];

export default function GroupTraining() {
  return (
    <section className="py-24 bg-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="text-center max-w-4xl mx-auto mb-14">

          <span className="uppercase tracking-[4px] text-[#C4A15A] font-semibold text-sm">
            Corporate & Workplace Training
          </span>

          <h2 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] mt-4">
            Group First Aid & CPR Training
          </h2>

          <p className="text-gray-700 mt-6 text-lg leading-8">
            Cardinal Institute of Education delivers flexible corporate and
            group First Aid and CPR training for workplaces, childcare
            centres, schools, gyms, aged care providers, disability services
            and community organisations across Sydney.
          </p>

        </div>


        {/* =========================
            LIMITED TIME $99 OFFER
        ========================== */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mb-20">

          {/* Offer Header */}
          <div className="bg-[#C4A15A] text-[#0B1F3A] py-3 px-6">

            <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base">
              <Clock3 size={19} />

              Limited-Time Corporate & Group Offer
            </div>

          </div>


          <div className="grid lg:grid-cols-3 items-center">

            {/* =========================
                PRICE
            ========================== */}
            <div className="p-8 lg:p-10 text-center border-b lg:border-b-0 lg:border-r border-gray-200">

              <p className="uppercase text-sm font-semibold tracking-wider text-gray-500">
                Normally
              </p>

              <p className="text-2xl font-semibold text-gray-400 line-through mt-1">
                $179 per person
              </p>

              <div className="flex justify-center items-center gap-3 mt-1">

                <span className="text-6xl font-extrabold text-[#0B1F3A]">
                  $99
                </span>

                <span className="text-left text-sm font-bold text-gray-600 leading-5">
                  PER
                  <br />
                  PERSON
                </span>

              </div>

              <p className="mt-3 text-[#0B1F3A] font-bold">
                Limited-Time Offer
              </p>

              <p className="mt-1 text-gray-600 font-medium">
                Corporate & Group Bookings
              </p>

            </div>


            {/* =========================
                OFFER DETAILS
            ========================== */}
            <div className="p-8 lg:p-10 lg:col-span-2">

              <h3 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
                First Aid + CPR Package — $99 Per Person
              </h3>

              <p className="mt-3 text-gray-600 leading-7 max-w-2xl">
                Save with our limited-time corporate and group booking offer.
                Normally $179 per person, now only $99 per person. The package
                includes both nationally recognised First Aid and CPR training.
              </p>


              {/* Package Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">

                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />

                  <span className="font-medium text-gray-700">
                    HLTAID011 Provide First Aid
                  </span>
                </div>


                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />

                  <span className="font-medium text-gray-700">
                    HLTAID009 Provide CPR
                  </span>
                </div>


                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />

                  <span className="font-medium text-gray-700">
                    $99 per person
                  </span>
                </div>


                <div className="flex items-start gap-3">
                  <CheckCircle
                    size={21}
                    className="text-green-600 mt-0.5 flex-shrink-0"
                  />

                  <span className="font-medium text-gray-700">
                    Workplace or campus training
                  </span>
                </div>

              </div>


              <Link
                href="/corporate"
                className="inline-flex items-center gap-2 mt-7 bg-[#0B1F3A] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#173d69] transition"
              >
                View Corporate Offer

                <ArrowRight size={19} />

              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            WHO WE TRAIN
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="uppercase tracking-[3px] text-[#C4A15A] font-semibold text-sm">
            Training For Your Organisation
          </span>

          <h3 className="text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] mt-3">
            Who We Train
          </h3>

          <p className="text-gray-700 mt-4 leading-7">
            Our corporate First Aid and CPR training is suitable for a wide
            range of workplaces, businesses and community organisations.
          </p>

        </div>


        {/* =========================
            INDUSTRY CARDS
        ========================== */}
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

                <h3 className="text-2xl font-bold text-[#0B1F3A] tracking-wide mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 tracking-wide leading-7">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>


        {/* =========================
            CPR $65 OFFER
        ========================== */}
        <div className="mt-20 bg-[#0B1F3A] rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-3 items-center">

            {/* Content */}
            <div className="p-10 lg:p-12 lg:col-span-2 text-white">

              <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                CPR Training
              </span>


              <h3 className="text-3xl md:text-4xl font-bold tracking-wide mt-5">
                CPR Training From $65 Per Person
              </h3>


              <p className="mt-5 text-gray-300 leading-8 max-w-2xl">
                CPR training available for workplaces, childcare centres,
                schools, gyms, aged care providers, disability providers and
                community organisations.
              </p>


              <div className="grid sm:grid-cols-2 gap-3 mt-6">

                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle
                    size={19}
                    className="text-[#C4A15A]"
                  />
                  Group bookings
                </div>


                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle
                    size={19}
                    className="text-[#C4A15A]"
                  />
                  Workplace training
                </div>


                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle
                    size={19}
                    className="text-[#C4A15A]"
                  />
                  Flexible scheduling
                </div>


                <div className="flex items-center gap-2 text-gray-200">
                  <CheckCircle
                    size={19}
                    className="text-[#C4A15A]"
                  />
                  Experienced trainers
                </div>

              </div>


              <Link
                href="/corporate"
                className="inline-flex items-center gap-2 mt-8 bg-[#C4A15A] text-[#0B1F3A] px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
              >
                Enquire About CPR Training

                <ArrowRight size={20} />

              </Link>

            </div>


            {/* Price */}
            <div className="bg-[#C4A15A] text-[#0B1F3A] min-h-[300px] flex flex-col items-center justify-center text-center p-8">

              <p className="uppercase tracking-[3px] text-sm font-bold">
                CPR Training
              </p>

              <div className="text-7xl font-extrabold mt-2">
                $65
              </div>

              <p className="text-xl font-bold mt-2">
                Per Person
              </p>

              <p className="text-sm mt-3 max-w-xs leading-6">
                Available for workplaces and organisations.
              </p>

            </div>

          </div>

        </div>


        {/* =========================
            FINAL CTA
        ========================== */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="p-10 lg:p-14">

              <span className="uppercase tracking-[3px] text-[#C4A15A] font-semibold">
                Corporate Bookings
              </span>


              <h3 className="text-4xl font-bold tracking-wide text-[#0B1F3A] mt-4">
                Need Training for Your Team?
              </h3>


              <p className="mt-6 text-gray-600 tracking-wide leading-8">
                Whether you need training for a small team or an entire
                organisation, we provide flexible workplace solutions tailored
                to your schedule, location and training needs.
              </p>


              <div className="mt-8 space-y-3 tracking-wide text-[#0B1F3A]">

                <p>✓ On-site workplace or campus training</p>

                <p>✓ Flexible booking dates</p>

                <p>✓ Experienced accredited trainers</p>

                <p>✓ Nationally recognised certification</p>

                <p>✓ Corporate & group booking options</p>

              </div>


              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/corporate"
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-8 py-4 rounded-xl font-semibold tracking-wide hover:bg-[#173d69] transition"
                >
                  View Corporate Training

                  <ArrowRight size={20} />

                </Link>


                <a
                  href="tel:+61285308337"
                  className="inline-flex items-center px-8 py-4 border border-[#0B1F3A] rounded-xl text-[#0B1F3A] font-semibold tracking-wide hover:bg-[#0B1F3A] hover:text-white transition"
                >
                  Call 02 8530 8337
                </a>

              </div>

            </div>


            {/* Right */}
            <div className="bg-[#0B1F3A] flex items-center justify-center p-12">

              <div className="text-center text-white">

                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C4A15A]/20 mb-5">

                  <Users
                    size={32}
                    className="text-[#C4A15A]"
                  />

                </div>


                <h2 className="text-3xl font-bold">
                  Train Your Team
                </h2>


                <p className="mt-4 max-w-sm leading-7 tracking-wide text-gray-300">
                  Bring First Aid and CPR training to your workplace with
                  flexible corporate and group booking options.
                </p>


                <Link
                  href="/corporate"
                  className="inline-flex items-center gap-2 mt-7 text-[#C4A15A] font-bold hover:text-white transition"
                >
                  Explore Corporate Training

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

