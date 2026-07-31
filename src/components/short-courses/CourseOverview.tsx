import {
  Clock3,
  MonitorPlay,
  Award,
  ClipboardCheck,
} from "lucide-react";

import { ShortCourse } from "@/lib/shortCourses";

interface CourseOverviewProps {
  course: ShortCourse;
}

export default function CourseOverview({
  course,
}: CourseOverviewProps) {
  const cards = [
    {
      title: "Duration",
      value: course.duration,
      icon: Clock3,
    },
    {
      title: "Delivery",
      value: course.delivery,
      icon: MonitorPlay,
    },
    {
      title: "Certificate",
      value: course.certificate,
      icon: Award,
    },
    {
      title: "Assessment",
      value: "pre-class room online knowledge assessment + face to face training with highly qualified and experienced trainer",
      icon: ClipboardCheck,
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
              className="
  group
  bg-white
  rounded-3xl
  border
  border-gray-200
  shadow-sm
  hover:shadow-xl
  hover:-translate-y-2
  transition-all
  duration-300
  p-8
  text-left
  h-[300px]
  flex
  flex-col
"
              >
             <div className="flex items-center gap-5">

  <div className="w-16 h-16 rounded-2xl bg-[#EAF3FF] flex items-center justify-center group-hover:bg-[#0B1F3A] transition-all">

    <Icon
      size={30}
      className="text-[#0B1F3A] group-hover:text-white"
    />

  </div>

  <div>
    <h3 className="text-xl font-bold text-[#0B1F3A]">
      {card.title}
    </h3>
  </div>

</div>

<p className="mt-6 text-gray-600 leading-7">
  {card.value}
</p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}