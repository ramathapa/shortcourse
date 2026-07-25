import { ShortCourse } from "@/lib/shortCourses";

interface CourseOverviewProps {
  course: ShortCourse;
}

export default function CourseOverview({
  course,
}: CourseOverviewProps) {
  const data = [
    ["Duration", course.duration],
    ["Delivery", course.delivery],
    ["Certificate", course.certificate],
    ["Assessment", "Practical Demonstration"],
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {data.map(([title, value]) => (
          <div
            key={title}
            className="bg-white shadow rounded-xl p-6 text-center border"
          >
            <h3 className="font-bold text-[#0B1F3A]">
              {title}
            </h3>

            <p className="mt-3">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}