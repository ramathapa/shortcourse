
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Users,
  CalendarDays,
  MapPin,
  CheckCircle,
  Phone,
  Mail,
  Baby,
  School,
  Dumbbell,
  HeartHandshake,
  HandHeart,
  BriefcaseBusiness,
  ArrowRight,
  Clock3,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

export default function CorporateBookingsPage() {

  const benefits = [
    "On-site workplace training",
    "Training at our Sydney campus",
    "Flexible booking dates",
    "Experienced accredited trainers",
    "Nationally recognised certification",
    "Competitive group pricing",
  ];

  const courses = [
    "HLTAID011 Provide First Aid",
    "HLTAID009 Provide Cardiopulmonary Resuscitation (CPR)",
  ];

  const organisations = [
    {
      title: "Workplaces",
      description:
        "Keep your team prepared with practical First Aid and CPR training delivered at your workplace.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Childcare Centres",
      description:
        "Training solutions designed to support childcare teams and educators with practical emergency skills.",
      icon: Baby,
    },
    {
      title: "Schools",
      description:
        "Flexible First Aid and CPR training for teachers, staff and school teams.",
      icon: School,
    },
    {
      title: "Gyms & Fitness Centres",
      description:
        "Give your fitness team essential CPR and emergency response skills.",
      icon: Dumbbell,
    },
    {
      title: "Aged Care",
      description:
        "Practical training for aged care teams working in fast-paced care environments.",
      icon: HeartHandshake,
    },
    {
      title: "Disability Providers",
      description:
        "Support your workforce with practical First Aid and CPR skills.",
      icon: HandHeart,
    },
    {
      title: "Community Organisations",
      description:
        "Flexible group training for community groups, clubs and organisations.",
      icon: Users,
    },
  ];

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[65vh] flex items-center">

        <Image
          src="/corporate/corporate.png"
          alt="Corporate First Aid and CPR Training"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">

          <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-5 py-2 rounded-full font-bold text-sm md:text-base">
            Corporate & Group Training
          </span>


          <h1 className="text-4xl md:text-6xl font-bold mt-6 max-w-4xl leading-tight">
            Corporate First Aid & CPR Training
          </h1>


          <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-200 leading-8">
            Deliver nationally recognised First Aid and CPR training to your
            employees with flexible workplace and group training solutions
            designed around your organisation.
          </p>


          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C4A15A] text-[#0B1F3A] px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Request a Quote

              <ArrowRight size={20} />

            </Link>


            <a
              href="tel:+61285308337"
              className="inline-flex items-center gap-2 border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              <Phone size={20} />

              Call 02 8530 8337
            </a>
             <a
              href="tel:+61494799291"
              className="inline-flex items-center gap-2 border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0B1F3A] transition"
            >
              <Phone size={20} />

              Call  0494 799 291
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIMITED TIME OFFER
      ====================================================== */}
      <section className="relative -mt-10 z-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

            {/* Offer Header */}
            <div className="bg-[#C4A15A] text-[#0B1F3A] text-center py-3">

              <div className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide">
                <Clock3 size={20} />

                Limited-Time Corporate & Group Offer
              </div>

            </div>


            <div className="p-8 md:p-10">

              <div className="grid lg:grid-cols-3 gap-8 items-center">

                {/* PRICE */}
                <div className="text-center lg:text-left">

                  <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Normally
                  </p>


                  <p className="text-2xl text-gray-400 line-through font-semibold">
                    $179 per person
                  </p>


                  <div className="flex items-center justify-center lg:justify-start gap-3 mt-1">

                    <span className="text-6xl font-extrabold text-[#0B1F3A]">
                      $99
                    </span>

                    <span className="text-gray-600 font-bold leading-tight">
                      PER
                      <br />
                      PERSON
                    </span>

                  </div>


                  <p className="mt-3 text-[#0B1F3A] font-bold">
                    Limited-Time Offer
                  </p>


                  <p className="text-gray-600 font-medium">
                    Corporate & Group Booking
                  </p>

                </div>


                {/* DETAILS */}
                <div className="lg:col-span-2">

                  <h2 className="text-2xl md:text-3xl font-bold text-[#0B1F3A]">
                    First Aid + CPR Package — $99 Per Person
                  </h2>


                  <p className="mt-3 text-gray-600 leading-7">
                    Normally $179 per person, now only $99 per person for a
                    limited time. This special package includes both HLTAID009
                    Provide CPR and HLTAID011 Provide First Aid.
                  </p>


                  <div className="grid sm:grid-cols-2 gap-4 mt-6">

                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        size={21}
                      />

                      <span className="font-medium">
                        HLTAID009 Provide CPR
                      </span>
                    </div>


                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        size={21}
                      />

                      <span className="font-medium">
                        HLTAID011 Provide First Aid
                      </span>
                    </div>


                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        size={21}
                      />

                      <span className="font-medium">
                        $99 per person
                      </span>
                    </div>


                    <div className="flex items-start gap-3">
                      <CheckCircle
                        className="text-green-600 mt-0.5 flex-shrink-0"
                        size={21}
                      />

                      <span className="font-medium">
                        Workplace or campus training
                      </span>
                    </div>

                  </div>


                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-6 bg-[#0B1F3A] text-white px-7 py-3.5 rounded-full font-bold hover:bg-[#173b61] transition"
                  >
                    Secure Your Group Booking

                    <ArrowRight size={19} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="text-[#C4A15A] font-bold uppercase tracking-wider text-sm">
              Corporate Training
            </span>


            <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3 mb-6">
              Workplace Training Made Easy
            </h2>


            <p className="text-gray-700 leading-8 mb-6">
              Cardinal Institute of Education provides flexible corporate
              First Aid and CPR training for businesses, community
              organisations, schools, childcare centres, aged care providers,
              disability services and workplaces across Sydney.
            </p>


            <p className="text-gray-700 leading-8">
              Our experienced trainers can deliver practical training at your
              workplace or at our training facility, making it easy for your
              team to gain valuable life-saving skills with minimal disruption
              to your organisation.
            </p>


            <div className="flex flex-wrap gap-5 mt-8">

              <div className="flex items-center gap-2 text-[#0B1F3A] font-semibold">

                <BadgeCheck className="text-[#C4A15A]" />

                Accredited Training

              </div>


              <div className="flex items-center gap-2 text-[#0B1F3A] font-semibold">

                <BadgeCheck className="text-[#C4A15A]" />

                Flexible Scheduling

              </div>

            </div>

          </div>


          <div className="bg-[#F8F8F8] rounded-3xl shadow-lg p-8 md:p-10">

            <h3 className="text-2xl font-bold mb-7 text-[#0B1F3A]">
              Why Choose Cardinal?
            </h3>


            <div className="space-y-5">

              {benefits.map((item) => (

                <div
                  key={item}
                  className="flex gap-3 items-start"
                >

                  <CheckCircle
                    className="text-green-600 mt-1 flex-shrink-0"
                    size={22}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CPR $65 OFFER
      ====================================================== */}
    <section className="bg-[#F8F8F8] py-20">

  <div className="max-w-6xl mx-auto px-6">

    <div className="bg-[#0B1F3A] rounded-3xl overflow-hidden shadow-xl">

      <div className="grid lg:grid-cols-3 items-center">

        {/* Content */}
        <div className="p-8 md:p-10 lg:col-span-2 text-white">

          <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-4 py-2 rounded-full text-sm font-bold">
            CPR TRAINING
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-5">
            CPR Training – Now Only $59 Per Person
          </h2>

          <p className="mt-4 text-gray-300 leading-7 max-w-2xl">
            CPR training available for workplaces, childcare centres,
            schools, gyms, aged care providers, disability providers and
            community organisations.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">

            <div className="flex items-center gap-2">
              <CheckCircle
                className="text-[#C4A15A]"
                size={20}
              />
              Group bookings
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle
                className="text-[#C4A15A]"
                size={20}
              />
              Workplace delivery
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle
                className="text-[#C4A15A]"
                size={20}
              />
              Flexible scheduling
            </div>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-7 bg-[#C4A15A] text-[#0B1F3A] px-7 py-3.5 rounded-full font-bold hover:scale-105 transition"
          >
            Enquire About CPR Training
            <ArrowRight size={19} />
          </Link>

        </div>

        {/* Price */}
        <div className="bg-[#C4A15A] text-[#0B1F3A] min-h-[280px] flex flex-col items-center justify-center text-center p-8">

          <p className="uppercase tracking-[3px] text-sm font-bold">
            CPR Training
          </p>

          {/* Original Price */}
          <p className="text-xl font-bold mt-3 line-through opacity-70">
            Normally $89
          </p>

          {/* Sale Price */}
          <div className="text-7xl font-extrabold mt-1">
            $59
          </div>

          <p className="font-bold text-xl mt-1">
            Per Person
          </p>

          <p className="text-sm mt-3 max-w-xs">
            Special offer for CPR training only.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          TRAINING OPTIONS
      ====================================================== */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-[#C4A15A] font-bold uppercase tracking-wider text-sm">
              Flexible Solutions
            </span>


            <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Corporate Training Options
            </h2>


            <p className="text-gray-600 mt-5 leading-7">
              Choose a training option that works best for your organisation,
              your staff and your schedule.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-1 transition">

              <Building2
                size={42}
                className="text-[#C4A15A]"
              />

              <h3 className="font-bold text-xl mt-6 text-[#0B1F3A]">
                On-Site Training
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We bring the training to your workplace with the required
                equipment, helping reduce travel and staff downtime.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-1 transition">

              <Users
                size={42}
                className="text-[#C4A15A]"
              />

              <h3 className="font-bold text-xl mt-6 text-[#0B1F3A]">
                Group Bookings
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Train multiple employees together with flexible group
                arrangements designed around your organisation.
              </p>

            </div>


            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:-translate-y-1 transition">

              <CalendarDays
                size={42}
                className="text-[#C4A15A]"
              />

              <h3 className="font-bold text-xl mt-6 text-[#0B1F3A]">
                Flexible Scheduling
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Arrange weekday and customised training sessions to minimise
                disruption to your normal operations.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE TRAIN
      ====================================================== */}
      <section className="bg-[#F8F8F8] py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-[#C4A15A] font-bold uppercase tracking-wider text-sm">
              Training For Your Organisation
            </span>


            <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Who We Train
            </h2>


            <p className="text-gray-600 mt-5 leading-7">
              Our corporate First Aid and CPR training is suitable for a wide
              range of workplaces and organisations across Sydney.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {organisations.map((organisation) => {

              const Icon = organisation.icon;

              return (
                <div
                  key={organisation.title}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition"
                >

                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center">

                    <Icon
                      className="text-[#C4A15A]"
                      size={25}
                    />

                  </div>


                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-5">
                    {organisation.title}
                  </h3>


                  <p className="text-gray-600 text-sm leading-6 mt-3">
                    {organisation.description}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          COURSES
      ====================================================== */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">

            <span className="text-[#C4A15A] font-bold uppercase tracking-wider text-sm">
              Nationally Recognised
            </span>


            <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
              Available Corporate Courses
            </h2>

          </div>


          <div className="grid md:grid-cols-2 gap-8">

            {courses.map((course) => (

              <div
                key={course}
                className="border border-gray-100 rounded-2xl p-8 bg-white shadow-lg hover:-translate-y-1 transition"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                      {course}
                    </h3>


                    <p className="mt-4 text-gray-600 leading-7">
                      Nationally recognised workplace training delivered by
                      experienced trainers.
                    </p>

                  </div>


                  <BadgeCheck
                    className="text-[#C4A15A] flex-shrink-0"
                    size={32}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#0B1F3A] text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-5 py-2 rounded-full font-bold text-sm">
            LIMITED-TIME OFFER
          </span>


          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Ready to Train Your Team?
          </h2>


          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
            Tell us how many staff you need to train and your preferred
            location. Our team will help you arrange a corporate or group
            training solution that works for your organisation.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div>

              <Phone
                className="mx-auto text-[#C4A15A]"
                size={34}
              />

              <p className="mt-4 font-semibold">
                Call Us
              </p>

              <a
                href="tel:+61285308337"
                className="text-gray-300 hover:text-white transition"
              >
                02 8530 8337 
              </a> OR <span>
               <a
                href="tel:+61494799291"
                className="text-gray-300 hover:text-white transition"
              >
                0494 799 291
              </a></span>

            </div>


            <div>

              <Mail
                className="mx-auto text-[#C4A15A]"
                size={34}
              />

              <p className="mt-4 font-semibold">
                Email
              </p>

              <a
                href="mailto:info@cardinalinstitute.edu.au"
                className="text-gray-300 hover:text-white transition break-all"
              >
                info@cardinalinstitute.edu.au
              </a>

            </div>


            <div>

              <MapPin
                className="mx-auto text-[#C4A15A]"
                size={34}
              />

              <p className="mt-4 font-semibold">
                Location
              </p>

              <p className="text-gray-300">
                Level 6, 56–58 York Street,
                <br />
                Sydney NSW 2000
              </p>

            </div>

          </div>


          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-14 bg-[#C4A15A] text-[#0B1F3A] px-10 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Contact Our Team

            <ArrowRight size={20} />

          </Link>


          <p className="text-gray-400 text-sm mt-6">
            Limited-time corporate and group pricing. Prices shown are per
            person. Contact our team for booking details and availability.
          </p>

        </div>

      </section>

    </main>
  );
}

