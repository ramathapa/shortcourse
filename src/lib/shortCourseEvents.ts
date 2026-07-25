export interface CourseEvent {
  id: string;
  courseSlug: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  iframe: string;
}

export const shortCourseEvents: CourseEvent[] = [
  {
    id: "58696",
    courseSlug: "HLTAID011CoursePage",
    date: "15 August 2026",
    time: "9:00 AM – 4:00 PM",
    venue: "Cardinal Institute",
    price: "$150",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200050&courseCode=HLTAID011&fromIFrame=true",
  },
  {
    id: "58697",
    courseSlug: "HLTAID011CoursePage",
    date: "22 August 2026",
    time: "9:00 AM – 4:00 PM",
    venue: "Cardinal Institute",
    price: "$150",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58697&group=200051&courseCode=HLTAID011&fromIFrame=true",
  },
];