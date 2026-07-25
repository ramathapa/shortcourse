import Image from "next/image";
import Link from "next/link";
import { Clock, Award, ArrowRight } from "lucide-react";
import { shortCourses } from "@/lib/shortCourses";

export default function AvailableCourses() {
  return (
    <section
      id="courses"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="text-[#C4A15A] font-semibold uppercase tracking-widest">
            Available Courses
          </span>

          <h2 className="text-4xl font-bold text-[#0B1F3A] mt-3">
            Choose Your Course
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5">
            Whether you need CPR certification or a comprehensive First Aid
            qualification, Cardinal Institute delivers nationally recognised
            training with experienced trainers and practical learning.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {shortCourses.map((course) => (

            <div
              key={course.slug}
              className="group rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition duration-300"
            >

              <div className="relative h-64">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <span className="bg-[#F4C300] text-[#0B1F3A] px-3 py-1 rounded-full text-sm font-semibold">

                    {course.code}

                  </span>

                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#0B1F3A]">
                  {course.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {course.description}
                </p>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">

                    <Clock className="w-5 h-5 text-[#C4A15A]" />

                    <span>{course.duration}</span>

                  </div>

                  <div className="flex items-center gap-3">

                    <Award className="w-5 h-5 text-[#C4A15A]" />

                    <span>{course.certificate}</span>

                  </div>

                </div>

                <div className="mt-8 flex gap-4">

                  <Link
                    href={course.pageUrl}
                    className="flex-1 text-center bg-[#0B1F3A] text-white py-3 rounded-xl font-semibold hover:bg-[#102a4f]"
                  >
                    View Course
                  </Link>

                  <Link
                    href="#events"
                    className="flex items-center justify-center gap-2 flex-1 border border-[#C4A15A] text-[#C4A15A] rounded-xl font-semibold hover:bg-[#C4A15A] hover:text-white transition"
                  >
                    View Dates
                    <ArrowRight size={18}/>
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}