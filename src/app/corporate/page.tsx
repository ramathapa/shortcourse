"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Users,
  CalendarDays,
  MapPin,
  Clock3,
  CheckCircle,
  Phone,
  Mail,
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

  return (
    <main>

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/corporate/corporate.jpg"
          alt="Corporate Bookings"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F3A]/65" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-4 py-2 rounded-full font-semibold">
            Corporate Training
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mt-6">
            Corporate First Aid & CPR Training
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200 leading-8">
            Deliver nationally recognised First Aid and CPR training to your
            employees with flexible workplace training solutions designed around
            your organisation.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-[#C4A15A] text-[#0B1F3A] px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-bold text-[#0B1F3A] mb-6">
              Workplace Training Made Easy
            </h2>

            <p className="text-gray-700 leading-8 mb-6">
              Cardinal Institute of Education provides flexible corporate First
              Aid and CPR training for businesses, community organisations,
              schools, childcare centres, aged care providers, disability
              services and workplaces across Sydney.
            </p>

            <p className="text-gray-700 leading-8">
              Our experienced trainers can deliver practical training at your
              workplace or at our training facility, making it easy for your
              team to stay compliant while gaining valuable life-saving skills.
            </p>
          </div>

          <div className="bg-[#F8F8F8] rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#0B1F3A]">
              Why Choose Cardinal?
            </h3>

            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* TRAINING OPTIONS */}
      <section className="bg-[#F8F8F8] py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B1F3A] mb-14">
            Corporate Training Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow p-8">
              <Building2 size={42} className="text-[#C4A15A]" />

              <h3 className="font-bold text-xl mt-6">
                On-Site Training
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                We bring all equipment and deliver training at your workplace,
                reducing travel and downtime for your staff.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <Users size={42} className="text-[#C4A15A]" />

              <h3 className="font-bold text-xl mt-6">
                Group Bookings
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Perfect for organisations wanting to train multiple employees
                together with flexible scheduling.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-8">
              <CalendarDays size={42} className="text-[#C4A15A]" />

              <h3 className="font-bold text-xl mt-6">
                Flexible Scheduling
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Weekday and customised sessions available to minimise workplace
                disruption.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COURSES */}
      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-10 text-center">
            Available Corporate Courses
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {courses.map((course) => (
              <div
                key={course}
                className="border rounded-xl p-8 bg-white shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-[#0B1F3A]">
                  {course}
                </h3>

                <p className="mt-4 text-gray-600">
                  Nationally recognised workplace training delivered by
                  experienced trainers.
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="bg-[#0B1F3A] text-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Request a Corporate Training Quote
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
            Tell us how many staff you need to train and your preferred
            location. We'll provide a tailored corporate training solution for
            your organisation.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div>
              <Phone className="mx-auto text-[#C4A15A]" size={34} />
              <p className="mt-4 font-semibold">Call Us</p>
              <p>(04) 0670 5649</p>
            </div>

            <div>
              <Mail className="mx-auto text-[#C4A15A]" size={34} />
              <p className="mt-4 font-semibold">Email</p>
              <p>admin@cardinalinstitute.com.au</p>
            </div>

            <div>
              <MapPin className="mx-auto text-[#C4A15A]" size={34} />
              <p className="mt-4 font-semibold">Location</p>
              <p>Level 6, 56–58 York Street, Sydney NSW 2000</p>
            </div>

          </div>

          <Link
            href="/contact"
            className="inline-block mt-14 bg-[#C4A15A] text-[#0B1F3A] px-10 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Contact Our Team
          </Link>

        </div>

      </section>

    </main>
  );
}