// lib/shortCourseEvents.ts

export interface CourseEvent {
  // Unique ID used by your website / React key
  id: string;

  // Course slug matching shortCourses.ts
  courseSlug: string;

  // Training date
  date: string;

  // Training time
  time: string;

  // Helps visually identify Morning / Afternoon / Evening
  session: "Morning" | "Afternoon" | "Evening";

  // Training venue
  venue: string;

  // Display price / promotion
  price: string;

  // eSkilled enrolment iframe URL
  iframe: string;
}

export const shortCourseEvents: CourseEvent[] = [
  /*
  |--------------------------------------------------------------------------
  | HLTAID011 - PROVIDE FIRST AID
  |--------------------------------------------------------------------------
  */

  {
    id: "hltaid011-13-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "13th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200050&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-13-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "13th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218745&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-14-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "14th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218746&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-14-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "14th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218767&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-16-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "16th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218747&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-16-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "16th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218769&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-20-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "20th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=200049&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-20-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "20th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218771&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-21-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "21st October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218749&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-21-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "21st October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218772&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-23-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "23rd October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218751&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-23-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "23rd October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218773&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-27-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "27th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218752&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-27-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "27th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218774&courseCode=HLTAID011&fromIFrame=true",
  },


      {
    id: "hltaid011-28-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "28th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218753&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-28-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "28th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218775&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-30-oct-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "30th October 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218754&courseCode=HLTAID011&fromIFrame=true",
  },

    {
    id: "hltaid011-30-oct-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "30th October 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218776&courseCode=HLTAID011&fromIFrame=true",
  },

      {
    id: "hltaid011-03-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "3rd November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218755&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-03-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "3rd November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218777&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-04-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "4th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218756&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-04-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "4th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218778&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-06-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "6th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218757&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-06-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "6th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218780&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-10-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "10th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218758&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-10-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "10th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218781&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-11-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "11th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218759&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-11-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "11th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218782&courseCode=HLTAID011&fromIFrame=true",
  },
        {
    id: "hltaid011-13-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "13th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218760&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-13-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "13th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218783&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-17-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "17th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218761&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-17-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "17th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218784&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-18-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "18th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218762&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-18-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "18th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218785&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-20-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "20th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218763&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-20-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "20th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218786&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-24-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "24th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218764&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-24-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "24th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218787&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-25-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "25th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218765&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-25-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "25th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218788&courseCode=HLTAID011&fromIFrame=true",
  },

        {
    id: "hltaid011-27-nov-morning",
    courseSlug: "HLTAID011CoursePage",
    date: "27th November 2026",
    time: "9:30 AM – 12:30 PM",
    session: "Morning",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218766&courseCode=HLTAID011&fromIFrame=true",
  },
    {
    id: "hltaid011-27-nov-afternoon",
    courseSlug: "HLTAID011CoursePage",
    date: "27th November 2026",
    time: "1:30 PM – 4:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price:
      "Normally $179, now $99 for a limited time, including both HLTAID009 and HLTAID011",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=58696&group=218789&courseCode=HLTAID011&fromIFrame=true",
  },



  /*
  |--------------------------------------------------------------------------
  | HLTAID009 - PROVIDE CPR
  |--------------------------------------------------------------------------
  */


  {
    id: "hltaid009-13-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "13th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218688&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-13-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "13th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=214576&courseCode=HLTAID009&fromIFrame=true",
  },


  {
    id: "hltaid009-14-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "14th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218689&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-14-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "14th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218610&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-16-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "16th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218690&courseCode=HLTAID009&fromIFrame=true",
  },
  
  {
    id: "hltaid009-16-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "16th October 2026",
   time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218611&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-20-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "20th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218691&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-20-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "20th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=214577&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-21-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "21st October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218692&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-21-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "21st October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218720&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-23-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "23rd October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218693&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-23-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "23rd October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218722&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-27-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "27th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218694&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-27-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "27th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218723&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-28-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "28th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218695&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-28-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "28th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218724&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-30-oct-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "30th October 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218696&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-30-oct-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "30th October 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218725&courseCode=HLTAID009&fromIFrame=true",
  },

    {
    id: "hltaid009-03-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "3rd November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218697&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-03-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "3rd November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218726&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-04-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "4th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218698&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-04-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "4th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218727&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-06-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "6th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218699&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-06-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "6th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218728&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-10-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "10th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218700&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-10-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "10th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218729&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-11-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "11th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218701&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-11-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "11th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218730&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-13-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "13th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218712&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-13-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "13th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218731&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-17-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "17th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218713&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-17-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "17th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218733&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-18-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "18th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218714&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-18-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "18th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218734&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-20-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "20th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218715&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-20-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "20th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218735&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-24-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "24th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218716&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-24-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "24th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218736&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-25-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "25th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218717&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-25-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "25th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218737&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-27-nov-morning",
    courseSlug: "HLTAID009CoursePage",
    date: "27th November 2026",
    time: "9:30 AM – 11:30 AM",
    session: "Morning",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=67595&group=218718&courseCode=HLTAID009&fromIFrame=true",
  },

  {
    id: "hltaid009-27-nov-afternoon",
    courseSlug: "HLTAID009CoursePage",
    date: "27th November 2026",
    time: "1:30 PM – 3:30 PM",
    session: "Afternoon",
    venue: "Cardinal Institute",
    price: "Normally $89, now $59 for CPR only",
    iframe:
      "https://cardinalinstitute.rto.net.au/Form/Index?formType=1&directLink=true&id=cardinalinstitute&del=63806&group=218738&courseCode=HLTAID009&fromIFrame=true",
  },


  /*
  |--------------------------------------------------------------------------
  | ADD MORE EVENTS HERE
  |--------------------------------------------------------------------------
  |
  | Example of an evening class:
  |
  | {
  |   id: "hltaid009-20-oct-evening",
  |   courseSlug: "HLTAID009CoursePage",
  |   date: "20th October 2026",
  |   time: "5:30 PM – 7:30 PM",
  |   session: "Evening",
  |   venue: "Cardinal Institute",
  |   price: "Normally $89, now $59 for CPR only",
  |   iframe: "YOUR_ESKILLED_IFRAME_URL",
  | },
  |
  |--------------------------------------------------------------------------
  */
];