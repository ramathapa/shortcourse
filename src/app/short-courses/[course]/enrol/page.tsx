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

  // Find the course
  const course = shortCourses.find(
    (c) => c.slug === courseSlug
  );

  if (!course) {
    notFound();
  }

  // Find the event belonging to this course
  const event = shortCourseEvents.find(
    (e) =>
      e.id === eventId &&
      e.courseSlug === courseSlug
  );

  if (!event) {
    notFound();
  }

  // IMPORTANT:
  // Use the exact eSkilled iframe URL stored
  // in shortCourseEvents.ts
  const iframeUrl = event.iframe;

  return (
    <main className="bg-[#F8F8F8] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#0B1F3A] text-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <span className="inline-block bg-[#C4A15A] text-[#0B1F3A] px-4 py-1 rounded-full font-semibold">
            Nationally Recognised Training
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            {course.code}
          </h1>

          <h2 className="text-2xl md:text-3xl mt-2">
            {course.title}
          </h2>

          <p className="mt-5 max-w-3xl text-gray-200 leading-relaxed">
            {course.description}
          </p>

        </div>
      </section>


      {/* ================= EVENT DETAILS ================= */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

            {/* DATE */}
            <div className="bg-white rounded-xl shadow p-6">
              <CalendarDays className="w-7 h-7 text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">
                Date
              </p>

              <h3 className="font-semibold text-[#0B1F3A] mt-1">
                {event.date}
              </h3>
            </div>


            {/* TIME */}
            <div className="bg-white rounded-xl shadow p-6">
              <Clock3 className="w-7 h-7 text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">
                Time
              </p>

              <h3 className="font-semibold text-[#0B1F3A] mt-1">
                {event.time}
              </h3>
            </div>


            {/* VENUE */}
            <div className="bg-white rounded-xl shadow p-6">
              <MapPin className="w-7 h-7 text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">
                Venue
              </p>

              <h3 className="font-semibold text-[#0B1F3A] mt-1">
                {event.venue}
              </h3>
            </div>


            {/* PRICE */}
            <div className="bg-white rounded-xl shadow p-6">
              <DollarSign className="w-7 h-7 text-[#C4A15A]" />

              <p className="text-gray-500 mt-3">
                Price
              </p>

              <h3 className="font-semibold text-[#0B1F3A] mt-1">
                {event.price}
              </h3>
            </div>

          </div>

        </div>
      </section>


      {/* ================= BEFORE YOU ENROL ================= */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
              Before You Enrol
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {[
                "Bring photo identification",
                "Arrive 15 minutes early",
                "Wear comfortable clothing",
                "Practical assessment required",
                "Statement of Attainment issued",
                "Nationally recognised training",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />

                  <span>
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>
      </section>


      {/* ================= ENROLMENT FORM ================= */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-xl shadow overflow-hidden">

            {/* FORM HEADER */}
            <div className="p-8 border-b">

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Complete Your Enrolment
              </h2>

              <p className="text-gray-600 mt-2">
                Please complete the enrolment form below to apply for this course.
              </p>

              <div className="mt-4 bg-[#F8F8F8] rounded-lg p-4">

                <p className="text-sm text-gray-600">
                  <strong>Course:</strong>{" "}
                  {course.code} – {course.title}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  <strong>Date:</strong>{" "}
                  {event.date}
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  <strong>Time:</strong>{" "}
                  {event.time}
                </p>

              </div>

            </div>


            {/* ESKILLED FORM */}
            <div className="w-full">

              <iframe
                src={iframeUrl}
                title={`${course.code} Enrolment Form`}
                className="w-full border-0"
                style={{
                  height: "7900px",
                  display: "block",
                }}
                scrolling="no"
              />

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}