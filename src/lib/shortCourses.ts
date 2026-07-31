// lib/shortCourses.ts

export interface FAQ {
  question: string;
  answer: string;
}

export interface CourseFeatures {
  cpr: boolean;
  aed: boolean;
  burns: boolean;
  fractures: boolean;
  bleeding: boolean;
  asthma: boolean;
  anaphylaxis: boolean;
  renewal: string;
  suitableFor: string;
}

export interface LearningOutcome {
  title: string;
}

export interface Requirement {
  title: string;
}

export interface ShortCourse {
  code: string;

  // Folder name
  slug: string;

  // eSkilled Course Code
  courseCode: string;

  // eSkilled Group ID
  groupId: string;

  title: string;

  heroTitle: string;

  description: string;

  overview: string;

  image: string;

  duration: string;

  delivery: string;

  certificate: string;

  refresher: string;

  price: string;

  pageUrl: string;

  enrolUrl: string;

  features: CourseFeatures;

  learningOutcomes: LearningOutcome[];

  requirements: Requirement[];

  faq: FAQ[];
}

export const shortCourses: ShortCourse[] = [
  {
    code: "HLTAID009",

    slug: "HLTAID009CoursePage",

    courseCode: "HLTAID009",

    groupId: "200050",

    title: "Provide Cardiopulmonary Resuscitation",

    heroTitle: "HLTAID009 Provide CPR",

    description:
      "Gain the skills and confidence to respond to cardiac emergencies using CPR and an Automated External Defibrillator (AED).",

    overview:
      "This nationally recognised course teaches participants how to perform CPR and respond effectively during cardiac emergencies following Australian Resuscitation Council guidelines.",

    image: "/courses/CPR.png",

    duration: "1 day equivalent (same day certification)",

    delivery: "Blended mode (2-3 hrs Face-to-face training + online assessment) Contact us for more information or for other special requirements",

    certificate: "Statement of Attainment (issued same day)",

    refresher: "Recommended every 12 months",

    price: "-",

    pageUrl: "/short-courses/HLTAID009CoursePage", 

    enrolUrl:
      "/short-courses/HLTAID009CoursePage/enrol",

    features: {
      cpr: true,
      aed: true,
      burns: false,
      fractures: false,
      bleeding: false,
      asthma: false,
      anaphylaxis: false,
      renewal: "12 Months",
      suitableFor:
        "Healthcare workers, workplaces and annual CPR renewal",
    },

    learningOutcomes: [
      {
        title: "Recognise cardiac emergencies",
      },
      {
        title: "Perform CPR",
      },
      {
        title: "Use an AED safely",
      },
      {
        title: "Communicate with emergency services",
      },
    ],

    requirements: [
      {
        title: "Practical assessment required",
      },
      {
        title:
          "Ability to kneel and perform CPR on the floor",
      },
    ],

    faq: [
      {
        question: "How long does CPR certification last?",
        answer:
          "The Australian Resuscitation Council recommends renewing CPR every 12 months.",
      },
      {
        question: "Is this nationally recognised?",
        answer:
          "Yes. Successful participants receive a Statement of Attainment.",
      },
    ],
  },

  {
    code: "HLTAID011",

    slug: "HLTAID011CoursePage",

    courseCode: "HLTAID011",

    groupId: "200050",

    title: "Provide First Aid",

    heroTitle: "HLTAID011 Provide First Aid",

    description:
      "Develop practical first aid skills including CPR, burns, fractures, asthma, anaphylaxis and medical emergencies.",

    overview:
      "Learn how to confidently respond to a range of emergency situations in workplaces and the community through practical hands-on training.",

    image: "/courses/firstaidd.png",

   duration: "1 day equivalent (same day certification)",

    delivery: "Blended mode (2-3 hrs Face-to-face training + online assessment) Contact us for more information or for other special requirements",

    certificate: "Statement of Attainment (issued same day)",

    refresher: "Recommended every 3 years",

    price: "-",

    pageUrl: "/short-courses/HLTAID011CoursePage",

    enrolUrl:
      "/short-courses/HLTAID011CoursePage/enrol",

    features: {
      cpr: true,
      aed: true,
      burns: true,
      fractures: true,
      bleeding: true,
      asthma: true,
      anaphylaxis: true,
      renewal: "3 Years",
      suitableFor:
        "General workplace, childcare, aged care, disability and healthcare professionals",
    },

    learningOutcomes: [
      {
        title: "Respond to emergency situations",
      },
      {
        title: "Perform CPR",
      },
      {
        title: "Treat burns and fractures",
      },
      {
        title: "Manage asthma and anaphylaxis",
      },
      {
        title:
          "Provide first aid until medical help arrives",
      },
    ],

    requirements: [
      {
        title: "Practical assessment required",
      },
      {
        title: "Ability to complete CPR assessment",
      },
    ],

    faq: [
      {
        question: "How long is the course?",
        answer:
          "This course is delivered over one full day (approximately 8 hours).",
      },
      {
        question: "Who should complete this course?",
        answer:
          "Anyone requiring workplace first aid certification or wishing to develop practical emergency response skills.",
      },
    ],
  },
];