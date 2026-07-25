"use client";

import { useSearchParams, useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { shortCourses } from "@/lib/shortCourses";
import { shortCourseEvents } from "@/lib/shortCourseEvents";

import {
  CalendarDays,
  Clock3,
  DollarSign,
  MapPin,
  CheckCircle,
} from "lucide-react";

export default function EnrolPage() {

  const params = useParams();

  const searchParams = useSearchParams();

  const courseSlug = params.course as string;

  const eventId = searchParams.get("event");

  const course = shortCourses.find(
    (c) => c.slug === courseSlug
  );

  if (!course) {
    notFound();
  }

  const event = shortCourseEvents.find(
    (e) => e.id === eventId
  );

  if (!event) {
    notFound();
  }

  const iframeUrl =
    `https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=${event.id}&group=${course.groupId}&courseCode=${course.courseCode}&fromIFrame=true`;

  return (
    <main className="bg-[#F8F8F8]">

      {/* HERO */}

      <section className="bg-[#0B1F3A] text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <span className="bg-[#C4A15A] text-[#0B1F3A] px-4 py-1 rounded-full font-semibold">
            Nationally Recognised Training
          </span>

          <h1 className="text-5xl font-bold mt-5">
            {course.code}
          </h1>

          <h2 className="text-3xl mt-2">
            {course.title}
          </h2>

        </div>

      </section>

      {/* EVENT */}

      <section className="py-10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow p-6">

              <CalendarDays className="text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">Date</p>

              <h3>{event.date}</h3>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <Clock3 className="text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">Time</p>

              <h3>{event.time}</h3>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <MapPin className="text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">Venue</p>

              <h3>{event.venue}</h3>

            </div>

            <div className="bg-white rounded-xl shadow p-6">

              <DollarSign className="text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">Price</p>

              <h3>{event.price}</h3>

            </div>

          </div>

        </div>

      </section>

      {/* BEFORE YOU ENROL */}

      <section className="pb-10">

        <div className="max-w-6xl mx-auto px-6 bg-white rounded-xl shadow p-8">

          <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
            Before You Enrol
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              "Bring photo identification",
              "Arrive 15 minutes early",
              "Wear comfortable clothing",
              "Practical assessment required",
              "Statement of Attainment issued",
              "Nationally recognised qualification",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <CheckCircle className="text-green-600" />

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ESKILLED */}

      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-6 bg-white rounded-xl shadow overflow-hidden">

          <div className="p-8">

            <h2 className="text-3xl font-bold">
              Complete Your Enrolment
            </h2>

          </div>

          <iframe
            src={iframeUrl}
            width="100%"
            height="7800"
            frameBorder="0"
          />

        </div>

      </section>

    </main>
  );
}