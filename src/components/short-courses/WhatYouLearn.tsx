import { ShortCourse } from "@/lib/shortCourses";

interface WhatYouLearnProps {
  course: ShortCourse;
}

export default function WhatYouLearn({
  course,
}: WhatYouLearnProps) {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
          What You Will Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {course.learningOutcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <h3 className="font-semibold text-[#0B1F3A]">
                {outcome.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}