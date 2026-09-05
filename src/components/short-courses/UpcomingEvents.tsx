"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { shortCourseEvents } from "@/lib/shortCourseEvents";
import { shortCourses } from "@/lib/shortCourses";

interface UpcomingEventsProps {
  courseSlug?: string;
}

export default function UpcomingEvents({
  courseSlug,
}: UpcomingEventsProps) {
  const [expandedDates, setExpandedDates] = useState<string[]>([]);

  /*
  |--------------------------------------------------------------------------
  | Filter events by course
  |--------------------------------------------------------------------------
  */

  const events = useMemo(() => {
    if (!courseSlug) {
      return shortCourseEvents;
    }

    return shortCourseEvents.filter(
      (event) => event.courseSlug === courseSlug
    );
  }, [courseSlug]);

  /*
  |--------------------------------------------------------------------------
  | Group events by date
  |--------------------------------------------------------------------------
  */

  const groupedEvents = useMemo(() => {
    const groups: Record<string, typeof events> = {};

    events.forEach((event) => {
      if (!groups[event.date]) {
        groups[event.date] = [];
      }

      groups[event.date].push(event);
    });

    return Object.entries(groups);
  }, [events]);

  /*
  |--------------------------------------------------------------------------
  | Expand / collapse date
  |--------------------------------------------------------------------------
  */

  const toggleDate = (date: string) => {
    setExpandedDates((current) => {
      if (current.includes(date)) {
        return current.filter((item) => item !== date);
      }

      return [...current, date];
    });
  };

  /*
  |--------------------------------------------------------------------------
  | No events
  |--------------------------------------------------------------------------
  */

  if (events.length === 0) {
    return (
      <section
        id="events"
        className="py-20 bg-[#F8F8F8]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">

            <span className="text-[#C4A15A] uppercase tracking-widest font-semibold text-sm">
              Upcoming Training
            </span>

            <h2 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] mt-3">
              Upcoming Course Dates
            </h2>

            <p className="text-[#0B1F3A] text-lg leading-relaxed max-w-3xl mx-auto mt-5">
              New training dates will be available soon. Please contact
              our team for upcoming course availability.
            </p>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="events"
      className="py-20 bg-[#F8F8F8]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="text-center mb-12">

          <span className="text-[#C4A15A] uppercase tracking-widest font-semibold text-sm">
            Upcoming Training
          </span>

          <h2 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] mt-3">
            Upcoming Course Dates
          </h2>

          <p className="text-[#0B1F3A] text-lg leading-relaxed max-w-3xl mx-auto mt-5">
            Select your preferred training date and session to secure
            your place.
          </p>

        </div>

        {/* =========================================================
            DATE LIST
        ========================================================= */}

        <div className="space-y-4">

          {groupedEvents.map(([date, dateEvents]) => {

            const isExpanded = expandedDates.includes(date);

            const hasMultipleSessions =
              dateEvents.length > 1;

            /*
            |--------------------------------------------------------------------------
            | Find course information
            |--------------------------------------------------------------------------
            */

            const course = shortCourses.find(
              (item) => item.slug === dateEvents[0].courseSlug
            );

            /*
            |--------------------------------------------------------------------------
            | SINGLE SESSION
            |--------------------------------------------------------------------------
            */

            if (!hasMultipleSessions) {
              const event = dateEvents[0];

              return (
                <div
                  key={date}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >

                  <div className="p-6 md:p-7">

                    <div className="grid lg:grid-cols-[1.1fr_1.5fr_auto] gap-6 items-center">

                      {/* DATE */}

                      <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                          <CalendarDays
                            className="w-7 h-7 text-[#C4A15A]"
                          />
                        </div>

                        <div>

                          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                            Training Date
                          </p>

                          <p className="text-xl font-bold text-[#0B1F3A] mt-1">
                            {date}
                          </p>

                        </div>

                      </div>

                      {/* SESSION */}

                      <div>

                        <div className="flex flex-wrap items-center gap-3 mb-2">

                          <span className="inline-flex items-center gap-2 bg-[#F4EEDC] text-[#0B1F3A] px-3 py-1.5 rounded-full text-sm font-semibold">
                            <Clock className="w-4 h-4" />
                            {event.session}
                          </span>

                          <span className="text-[#0B1F3A] font-medium">
                            {event.time}
                          </span>

                        </div>

                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <MapPin className="w-4 h-4" />
                          {event.venue}
                        </div>

                        {course && (
                          <div className="mt-2">

                            <span className="text-sm font-semibold text-[#0B1F3A]">
                              {course.code}
                            </span>

                            <span className="text-sm text-gray-500 ml-2">
                              {course.title}
                            </span>

                          </div>
                        )}

                      </div>

                      {/* PRICE + BOOK */}

                      <div className="lg:text-right">

                        <p className="text-sm font-semibold text-[#C4A15A] mb-3">
                          {event.price}
                        </p>

                        <Link
                          href={`/short-courses/${event.courseSlug}/enrol?event=${event.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-[#C4A15A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#b3904b] transition"
                        >
                          Book Now

                          <ArrowRight className="w-4 h-4" />
                        </Link>

                      </div>

                    </div>

                  </div>

                </div>
              );
            }

            /*
            |--------------------------------------------------------------------------
            | MULTIPLE SESSIONS ON SAME DATE
            |--------------------------------------------------------------------------
            */

            return (
              <div
                key={date}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >

                {/* DATE HEADER */}

                <button
                  type="button"
                  onClick={() => toggleDate(date)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 md:p-7"
                >

                  <div className="flex items-center justify-between gap-5">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                        <CalendarDays
                          className="w-7 h-7 text-[#C4A15A]"
                        />
                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                          Training Date
                        </p>

                        <p className="text-xl md:text-2xl font-bold text-[#0B1F3A] mt-1">
                          {date}
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          {dateEvents.length} sessions available
                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-2 text-[#0B1F3A] shrink-0">

                      <span className="hidden sm:block text-sm font-semibold">
                        {isExpanded
                          ? "Hide sessions"
                          : "Choose session"}
                      </span>

                      <ChevronDown
                        className={`w-6 h-6 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />

                    </div>

                  </div>

                </button>

                {/* =====================================================
                    EXPANDED SESSION LIST
                ===================================================== */}

                {isExpanded && (
                  <div className="border-t border-gray-100 bg-[#FAFAFA] p-5 md:p-6">

                    <div className="space-y-3">

                      {dateEvents.map((event) => {

                        const eventCourse =
                          shortCourses.find(
                            (item) =>
                              item.slug === event.courseSlug
                          );

                        return (
                          <div
                            key={event.id}
                            className="bg-white rounded-xl border border-gray-200 p-5 hover:border-[#C4A15A] transition"
                          >

                            <div className="grid lg:grid-cols-[1fr_auto] gap-5 items-center">

                              {/* SESSION INFORMATION */}

                              <div>

                                {eventCourse && (
                                  <div className="mb-3">

                                    <span className="text-sm font-bold text-[#0B1F3A]">
                                      {eventCourse.code}
                                    </span>

                                    <span className="text-sm text-gray-500 ml-2">
                                      {eventCourse.title}
                                    </span>

                                  </div>
                                )}

                                <div className="flex flex-wrap items-center gap-3">

                                  <span className="inline-flex items-center gap-2 bg-[#F4EEDC] text-[#0B1F3A] px-3 py-1.5 rounded-full text-sm font-semibold">
                                    <Clock className="w-4 h-4" />
                                    {event.session}
                                  </span>

                                  <span className="font-semibold text-[#0B1F3A]">
                                    {event.time}
                                  </span>

                                </div>

                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">

                                  <MapPin className="w-4 h-4" />

                                  {event.venue}

                                </div>

                                <p className="text-sm font-semibold text-[#C4A15A] mt-3">
                                  {event.price}
                                </p>

                              </div>

                              {/* BOOK BUTTON */}

                              <div>

                                <Link
                                  href={`/short-courses/${event.courseSlug}/enrol?event=${event.id}`}
                                  className="inline-flex items-center justify-center gap-2 w-full lg:w-auto bg-[#C4A15A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#b3904b] transition"
                                >
                                  Book Now

                                  <ArrowRight className="w-4 h-4" />
                                </Link>

                              </div>

                            </div>

                          </div>
                        );
                      })}

                    </div>

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* =========================================================
            SMALL INFORMATION NOTE
        ========================================================= */}

        <div className="mt-8 text-center">

        <p className="text-sm text-gray-500">
  Can&apos;t find a suitable date or session?
  {" "}

  <Link
    href="/contact"
    className="font-semibold text-[#0B1F3A] hover:text-[#C4A15A] transition"
  >
    Contact our team
  </Link>
  {" "}
  for assistance.
</p>

        </div>

      </div>
    </section>
  );
}