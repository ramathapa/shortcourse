import Link from "next/link";
import { shortCourseEvents } from "@/lib/shortCourseEvents";
import { shortCourses } from "@/lib/shortCourses";

interface UpcomingEventsProps {
  courseSlug?: string;
}

export default function UpcomingEvents({
  courseSlug,
}: UpcomingEventsProps) {
  const events = courseSlug
    ? shortCourseEvents.filter(
        (event) => event.courseSlug === courseSlug
      )
    : shortCourseEvents;

  return (
    <section
      id="events"
      className="py-20 bg-[#F8F8F8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span className="text-[#C4A15A] uppercase tracking-widest font-semibold">
            Upcoming Training
          </span>

             <h2 className="text-4xl lg:text-[2.6rem] leading-[1.1] tracking-wide font-extrabold text-[#0B1F3A] w-full mt-2">
            Upcoming Course Dates
          </h2>

        <p className="text-[#0B1F3A] text-lg leading-relaxed max-w-3xl mx-auto mt-5">
            Select a course date below to secure your place.
          </p>

        </div>

        <div className="overflow-x-auto rounded-2xl shadow-lg">

          <table className="w-full bg-white">

            <thead>

              <tr className="bg-[#0B1F3A] text-white">

                <th className="p-5 text-left">Course</th>
                <th className="p-5 text-left">Date</th>
                <th className="p-5 text-left">Time</th>
                <th className="p-5 text-left">Venue</th>
                <th className="p-5 text-left">Price</th>
                <th className="p-5 text-center">Book</th>

              </tr>

            </thead>

            <tbody>

              {events.map((event) => {
                const course = shortCourses.find(
                  (c) => c.slug === event.courseSlug
                );

                return (
                  <tr
                    key={event.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-5">
                      <div>
                        <p className="font-semibold text-[#0B1F3A]">
                          {course?.code}
                        </p>
                        <p className="text-sm text-gray-500">
                          {course?.title}
                        </p>
                      </div>
                    </td>

                    <td className="p-5">{event.date}</td>

                    <td className="p-5">{event.time}</td>

                    <td className="p-5">{event.venue}</td>

                    <td className="p-5">
                      {event.price}
                    </td>

                    <td className="p-5 text-center">
                      <Link
                        href={`/short-courses/${course?.slug}/enrol?event=${event.id}`}
                        className="inline-block bg-[#C4A15A] font-semibold  text-white px-6 py-3 rounded-xl hover:bg-[#b3904b] transition"
                      >
                        Book Now
                      </Link>
                    </td>
                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}