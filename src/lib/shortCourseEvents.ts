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
    date: "13th October 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "Cardinal Institute",
    price: "Normally $179, now $99 for limited time, including both HLTAID009 and HLTAID011",
    iframe:
     "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200050&courseCode=HLTAID011&fromIFrame=true",
  },

  {
    id: "58697",
    courseSlug: "HLTAID011CoursePage",
    date: "20th October 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "Cardinal Institute",
    price: "Normally $179, now $99 for limited time, including both HLTAID009 and HLTAID011",
    iframe:
     "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200049&courseCode=HLTAID011&fromIFrame=true",
  },

  {
    id: "58698",
    courseSlug: "HLTAID009CoursePage",
    date: "13th October 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=214576&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "58699",
    courseSlug: "HLTAID009CoursePage",
    date: "20th October 2026",
    time: "9:00 AM – 5:00 PM",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=214577&courseCode=HLTAID009&fromIFrame=true",
  },
];