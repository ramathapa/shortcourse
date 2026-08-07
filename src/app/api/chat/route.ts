import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Chat from "@/models/Chat";

// Simple fuzzy match function (approximate string matching)
function similarity(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  const longer = a.length > b.length ? a : b;
  const shorter = a.length > b.length ? b : a;
  const longerLength = longer.length;

  if (longerLength === 0) return 1.0;

  return (
    (longerLength - editDistance(longer, shorter)) /
    longerLength
  );
}

function editDistance(a: string, b: string) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) matrix[i][j] = matrix[i - 1][j - 1];
      else matrix[i][j] = Math.min(
        matrix[i - 1][j - 1] + 1,
        Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
      );
    }
  }
  return matrix[b.length][a.length];
}

// ---------------------------------------------------------------------------
// Cardinal Institute of Education Pty Ltd — chatbot keyword responses
//
// All content verified against:
//   TAS CHC33021 v2.1, TAS CHC43015 v2.1, TAS CHC43121 v2.1,
//   TAS HLTAID009 v2.0, TAS HLTAID011 v2.0,
//   Fees and Refund Policy and Procedure v1.0
//
// !! ITEMS TO CONFIRM WITH SOPHIYA BEFORE GOING LIVE — see CONTACT below.
// ---------------------------------------------------------------------------

const CONTACT = {
  phone: "04 0670 5649",
  phoneHref: "tel : +0285308337",
  // TODO: source documents show "admin@cardinainstitute.com.au" (TAS — note the
  // missing "l" in "cardinal") and "info@tba" (Fees policy). Confirm the real
  // address before publishing.
  email: "info@cardinalinstitute.edu.au",
  // TODO: TAS CHC33021 lists Level 6, 56-58 York Street, Sydney NSW 2000 as the
  // delivery location, while the Refund Request Form lists the Blacktown office.
  // Confirm which address is the training venue and which is administrative.
  address: "Level 6, 56-58 York Street, Sydney NSW 2000",
  // TODO: RTO Code 46594 appears in the TAS documents; the Fees policy still
  // says "TBA". Confirm before displaying.
  rtoCode: "46594",
  enrolUrl:
    "https://cardinalinstitute.rto.net.au/Form/Index?id=cardinalinstitute&formType=1",
};

// NOTE ON MATCHING: this array is ordered most-specific first. If your matcher
// scans top-to-bottom and returns the first hit, longer phrases such as
// "short course" and "work placement" must be tested before "course" and
// "placement" or they will never fire. Also guard the two-letter key "hi" with
// a word-boundary check, otherwise it matches "this", "which", "him", etc.

const keywords = [
  // -------------------------------------------------------------------------
  // ABOUT THE INSTITUTE
  // -------------------------------------------------------------------------
  {
    key: "about",
    reply: `Cardinal Institute of Education Pty Ltd is a Registered Training Organisation delivering nationally recognised first aid and CPR training in New South Wales.`,
  },
  {
    key: "rto",
    reply: `We are a Registered Training Organisation, so our training is nationally recognised under the Australian Qualifications Framework.`,
  },
  {
    key: "rto code",
    reply: `Our RTO code is ${CONTACT.rtoCode}. You can verify our registration on training.gov.au.`,
  },
  {
    key: "nationally recognised",
    reply: `Yes — all of our training products are nationally recognised and delivered under the Standards for Registered Training Organisations 2025.`,
  },
  {
    key: "accreditation",
    reply: `We deliver nationally recognised training as a Registered Training Organisation. Our units are listed on the national register at training.gov.au.`,
  },

  // -------------------------------------------------------------------------
  // COURSES — OVERVIEW
  // -------------------------------------------------------------------------
  {
    key: "what courses",
    reply: `We deliver two nationally recognised short courses — HLTAID011 Provide First Aid and HLTAID009 Provide Cardiopulmonary Resuscitation. Each runs as a single full-day face-to-face session.`,
  },
  {
    key: "short course",
    reply: `Our short courses are HLTAID011 Provide First Aid and HLTAID009 Provide Cardiopulmonary Resuscitation. Each runs as a single full-day face-to-face session.`,
  },
  {
    key: "course",
    reply: `We offer HLTAID011 Provide First Aid and HLTAID009 Provide CPR — both nationally recognised short courses delivered face-to-face in a single day.`,
  },
  {
    key: "learning outcomes",
    reply: `You'll learn to recognise and respond to emergency situations, perform CPR, use an automated external defibrillator (AED), manage casualties, communicate with emergency services and follow incident reporting requirements, all in line with Australian Resuscitation Council guidelines.`,
  },

  // -------------------------------------------------------------------------
  // HLTAID011 — PROVIDE FIRST AID
  // -------------------------------------------------------------------------
  {
    key: "hltaid011",
    reply: `HLTAID011 Provide First Aid is delivered as one full 8-hour face-to-face session with practical assessment. Successful participants receive a nationally recognised Statement of Attainment.`,
  },
  {
    key: "first aid",
    reply: `HLTAID011 Provide First Aid runs as a single full-day (8 hour) face-to-face session covering DRSABCD, CPR, AED use and incident reporting, aligned to Australian Resuscitation Council guidelines.`,
  },
  {
    key: "first aid renewal",
    reply: `The Australian Resuscitation Council recommends renewing first aid every 3 years and CPR every 12 months. Check with your employer or licensing body for any additional requirements.`,
  },

  // -------------------------------------------------------------------------
  // HLTAID009 — PROVIDE CPR
  // -------------------------------------------------------------------------
  {
    key: "hltaid009",
    reply: `HLTAID009 Provide Cardiopulmonary Resuscitation is delivered as one full 8-hour face-to-face session, including at least two minutes of uninterrupted CPR on a manikin placed on the floor.`,
  },
  {
    key: "cpr",
    reply: `HLTAID009 Provide CPR is a one-day face-to-face course covering DRSABCD, CPR technique and AED use, delivered in line with Australian Resuscitation Council guidelines.`,
  },
  {
    key: "cpr renewal",
    reply: `The Australian Resuscitation Council recommends renewing CPR every 12 months. You can re-enrol in HLTAID009 at any time.`,
  },
  {
    key: "aed",
    reply: `Automated external defibrillator (AED) use is taught and practically assessed in both HLTAID009 and HLTAID011.`,
  },

  // -------------------------------------------------------------------------
  // ENTRY REQUIREMENTS & ELIGIBILITY
  // -------------------------------------------------------------------------
  {
    key: "entry requirement",
    reply: `For our short courses you must be 18 or over, provide 100-point photo ID, have suitable language, literacy, numeracy and digital skills, and be willing and able to participate in face-to-face practical activities.`,
  },
  {
    key: "eligibility",
    reply: `Entry requires you to be 18+, hold 100-point photo ID, and complete a pre-training review and LLND assessment before enrolment is finalised.`,
  },
  {
    key: "age",
    reply: `You must be 18 years of age or older to enrol in our courses.`,
  },
  {
    key: "llnd",
    reply: `All applicants complete a language, literacy, numeracy and digital (LLND) assessment before enrolment. Results are used to identify any support needs, not to exclude you.`,
  },
  {
    key: "pre-training review",
    reply: `Before your enrolment is finalised we conduct a pre-training review — often a short phone or online discussion — to confirm the course suits your goals, availability and support needs.`,
  },
  {
    key: "usi",
    reply: `You'll need a Unique Student Identifier (USI) to be issued with a nationally recognised Statement of Attainment. It's free to create at usi.gov.au and we can help you set one up.`,
  },
  {
    key: "laptop",
    reply: `You may be asked to bring a personal laptop or tablet to support some learning activities. We'll let you know in advance if it's needed.`,
  },

  // -------------------------------------------------------------------------
  // DELIVERY, TIMETABLE & ATTENDANCE
  // -------------------------------------------------------------------------
  {
    key: "delivery mode",
    reply: `All of our training is delivered face-to-face in the classroom, supported by practical demonstrations and simulated emergency scenarios.`,
  },
  {
    key: "face to face",
    reply: `Yes — our training is face-to-face. Classroom sessions combine essential theory with supervised hands-on practice in simulated emergency scenarios.`,
  },
  {
    key: "online",
    reply: `Our courses are delivered face-to-face rather than online. This ensures you can practise and be assessed on hands-on skills such as CPR, AED use and casualty management.`,
  },
  {
    key: "duration",
    reply: `Both HLTAID011 Provide First Aid and HLTAID009 Provide CPR run as one full 8-hour day each.`,
  },
  {
    key: "schedule",
    reply: `Short course dates are scheduled regularly throughout the year — contact us on ${CONTACT.phone} for upcoming dates.`,
  },
  {
    key: "attendance",
    reply: `You must attend the full 8-hour session and complete all training and assessment activities — partial attendance isn't sufficient for certification.`,
  },
  {
    key: "class size",
    reply: `Trainer-to-learner ratios do not exceed 1:14 during classroom delivery, with smaller ratios during practical activities to ensure adequate supervision.`,
  },
  {
    key: "simulated",
    reply: `Practical skills are developed and assessed in simulated emergency scenarios using manikins, AED trainers and industry-relevant equipment.`,
  },

  // -------------------------------------------------------------------------
  // ASSESSMENT
  // -------------------------------------------------------------------------
  {
    key: "assessment",
    reply: `Assessment includes practical demonstrations in simulated emergency scenarios and knowledge tasks, all completed within the training day.`,
  },
  {
    key: "reassessment",
    reply: `If you're assessed as not yet satisfactory, you'll receive feedback and two reassessment opportunities for each task. Additional attempts beyond this may incur a fee.`,
  },
  {
    key: "appeal",
    reply: `You can appeal any assessment decision in writing under our Complaints and Appeals Policy. Your enrolment is maintained and you're not disadvantaged during the process.`,
  },
  {
    key: "exam",
    reply: `There are no traditional exams. You're assessed through practical demonstrations and knowledge tasks during the session.`,
  },

  // -------------------------------------------------------------------------
  // RPL & CREDIT TRANSFER
  // -------------------------------------------------------------------------
  {
    key: "credit transfer",
    reply: `Credit Transfer is available where you've completed the same or an equivalent unit with another RTO. Provide verified copies of your Statement of Attainment during enrolment.`,
  },
  {
    key: "rpl",
    reply: `Recognition of Prior Learning is available if you can evidence existing skills from work or previous training. Evidence may include workplace documents, references, a resume or a practical demonstration.`,
  },
  {
    key: "recognition of prior learning",
    reply: `RPL can reduce your training requirements where granted. Contact us to discuss whether your experience is likely to qualify.`,
  },

  // -------------------------------------------------------------------------
  // CERTIFICATION
  // -------------------------------------------------------------------------
  {
    key: "statement of attainment",
    reply: `HLTAID009 and HLTAID011 lead to a nationally recognised Statement of Attainment, issued once you successfully complete all training and assessment requirements.`,
  },
  {
    key: "certificate",
    reply: `On successful completion you receive a nationally recognised Statement of Attainment for HLTAID011 Provide First Aid or HLTAID009 Provide CPR.`,
  },
  {
    key: "certification",
    reply: `HLTAID009 and HLTAID011 result in a nationally recognised Statement of Attainment, issued under the Australian Qualifications Framework.`,
  },
  {
    key: "how long to receive certificate",
    reply: `Statements of Attainment are issued after all requirements are met and your USI is verified. Contact our admin team for current processing times.`,
  },

  // -------------------------------------------------------------------------
  // FEES, PAYMENT & REFUNDS
  // -------------------------------------------------------------------------
  {
    key: "price",
    reply: `Fees vary by course and are set out in our Schedule of Fees and Charges. Call ${CONTACT.phone} or email ${CONTACT.email} for a full itemised breakdown before you enrol.`,
  },
  {
    key: "pricing",
    reply: `Fees vary by course. We provide a clear, itemised breakdown of all tuition, material and administration charges before enrolment — contact us on ${CONTACT.phone}.`,
  },
  {
    key: "cost",
    reply: `Course costs differ between our short courses. Contact us on ${CONTACT.phone} for the current Schedule of Fees and Charges.`,
  },
  {
    key: "fees",
    reply: `All fees are disclosed in writing before enrolment. Fees may include tuition, learning materials and administration charges.`,
  },
  {
    key: "payment",
    reply: `We accept EFT and credit or debit card. Cash payments are not accepted. An initial payment is required before your course starts.`,
  },
  {
    key: "deposit",
    reply: `An initial payment is required prior to course commencement. You'll never be asked to prepay more than $1,500 in advance of training being delivered.`,
  },
  {
    key: "refund",
    reply: `Withdraw in writing 10 or more business days before your course starts and you receive a 100% refund. Less than 10 business days before, 75%. After the course has commenced, no refund unless exceptions apply.`,
  },
  {
    key: "refund process",
    reply: `Submit a completed Refund Request Form in writing with any supporting evidence. Approved refunds are paid by electronic transfer to the original payer.`,
  },
  {
    key: "refund time",
    reply: `Approved refunds are processed within 14 calendar days.`,
  },
  {
    key: "non-refundable",
    reply: `Enrolment and administration fees, learning materials already issued, and training already delivered are non-refundable.`,
  },
  {
    key: "cancellation",
    reply: `If we cancel a course, you receive a full refund automatically without needing to apply. If you need to withdraw, notify us in writing as soon as possible.`,
  },
  {
    key: "compassionate",
    reply: `Serious illness, hospitalisation or a family emergency may be considered for a refund on compassionate grounds, with supporting documentation. Each case is assessed individually by the CEO.`,
  },
  {
    key: "policy",
    reply: `Our Privacy Policy, Terms and Conditions and Fees and Refund Policy are available on our website, and you can request a copy at any time.`,
  },

  // -------------------------------------------------------------------------
  // ENROLMENT
  // -------------------------------------------------------------------------
  {
    key: "enrol",
    reply: `You can apply online through our enrolment portal, or call ${CONTACT.phone} and we'll walk you through it.`,
  },
  {
    key: "enroll",
    reply: `You can apply online through our enrolment portal, or call ${CONTACT.phone} for guidance.`,
  },
  {
    key: "how to apply",
    reply: `Submit an application, complete the LLND assessment and pre-training review, provide your ID and USI, then confirm your place with the initial payment.`,
  },
  {
    key: "intake",
    reply: `Short course sessions are scheduled regularly throughout the year. Contact us on ${CONTACT.phone} for the next available date.`,
  },
  {
    key: "admission",
    reply: `Applications are welcome year-round. Your start date depends on the next scheduled session and completion of the pre-training review.`,
  },
  {
    key: "documents needed",
    reply: `You'll need 100-point photo ID and your USI. A prior Statement of Attainment is useful if you're applying for credit transfer.`,
  },

  // -------------------------------------------------------------------------
  // CAREERS & PATHWAYS
  // -------------------------------------------------------------------------
  {
    key: "career",
    reply: `First aid and CPR certification supports roles such as workplace first aid officer, childcare and education staff, community support workers, security personnel, construction and trade workers, and hospitality and retail staff.`,
  },
  {
    key: "job",
    reply: `Current first aid and CPR certification is required or highly valued across many industries — workplaces, childcare, education, community services, security, construction, hospitality and more.`,
  },

  // -------------------------------------------------------------------------
  // STUDENT SUPPORT
  // -------------------------------------------------------------------------
  {
    key: "student support",
    reply: `We provide learning support, reasonable adjustments, referral to community services and ongoing communication with trainers. An Individual Support Plan can be developed where needed.`,
  },
  {
    key: "reasonable adjustment",
    reply: `Reasonable adjustments are available for learners with additional needs. These are identified through the LLND assessment and pre-training review and documented in a support plan.`,
  },
  {
    key: "disability access",
    reply: `Our training rooms provide a safe and accessible learning environment, and we make reasonable adjustments to support learners with additional needs.`,
  },
  {
    key: "complaint",
    reply: `Complaints and appeals are handled fairly and confidentially under our Complaints and Appeals Policy, with access to external review if you're not satisfied with the outcome.`,
  },
  {
    key: "privacy",
    reply: `We handle personal information in line with the Australian Privacy Principles and our Privacy Policy. You can request access to your records at any time.`,
  },
  {
    key: "support",
    reply: `Our team can help with course selection, enrolment and learner support. Call ${CONTACT.phone} during business hours.`,
  },
  {
    key: "help",
    reply: `Happy to help — tell me what you'd like to know, or call ${CONTACT.phone} to speak with our team.`,
  },
  {
    key: "query",
    reply: `Leave your question along with your name and contact details and our team will get back to you.`,
  },
  {
    key: "assistance",
    reply: `We assist with enrolment, course selection and learner support throughout your course.`,
  },

  // -------------------------------------------------------------------------
  // CONTACT & LOCATION
  // -------------------------------------------------------------------------
  {
    key: "contact",
    reply: `You can reach us on ${CONTACT.phone} or email ${CONTACT.email}.`,
  },
  {
    key: "phone",
    reply: `Our phone number is ${CONTACT.phone}.`,
  },
  {
    key: "email",
    reply: `You can email us at ${CONTACT.email}.`,
  },
  {
    key: "location",
    reply: `We're located at ${CONTACT.address}. Call ${CONTACT.phone} to arrange a campus visit.`,
  },
  {
    key: "address",
    reply: `Our address is ${CONTACT.address}.`,
  },
  {
    key: "parking",
    reply: `Please contact us on ${CONTACT.phone} for parking and public transport details for your campus.`,
  },
  {
    key: "opening hours",
    reply: `Please call ${CONTACT.phone} for our current office hours.`, // TODO: confirm hours with Sophiya
  },

  // -------------------------------------------------------------------------
  // GREETINGS & COURTESY
  // -------------------------------------------------------------------------
  { key: "good morning", reply: "Good morning! How can we assist you today?" },
  { key: "good afternoon", reply: "Good afternoon! How can we assist you today?" },
  { key: "good evening", reply: "Good evening! How can we assist you today?" },
  { key: "thank you", reply: "You're very welcome. Anything else I can help with?" },
  { key: "thanks", reply: "You're very welcome. Anything else I can help with?" },
  { key: "hello", reply: "Hello! How can we help you today?" },
  { key: "hi", reply: "Hi there! What can I help you with?" },
  { key: "bye", reply: "Thanks for getting in touch. We're here whenever you need us." },
];
const chatbotKeywords = keywords;
const chatbotContact = CONTACT;
// Get bot reply using fuzzy match
function getBotReply(message: string) {
  const lower = message.toLowerCase();
  let bestMatch = { key: "", score: 0 };
  for (const kw of keywords) {
    const score = similarity(lower, kw.key);
    if (score > bestMatch.score) bestMatch = { key: kw.key, score };
  }
  // If best match similarity >= 0.45, use its reply
  if (bestMatch.score >= 0.45) {
    const match = keywords.find(k => k.key === bestMatch.key);
    return match ? match.reply : "";
  }
  // If nothing matches, fallback
  return "Please leave your message and your contact (email/phone), and we will get back to you soon.";
}

export async function POST(req: Request) {
  await connectDB();
  const { message, chatId } = await req.json();
  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  let chat;

  if (chatId) {
    chat = await Chat.findById(chatId);
    if (!chat) return NextResponse.json({ error: "Chat not found" }, { status: 404 });
  }

  if (!chat) {
    chat = new Chat({
      messages: [
        { text: "Hi 👋 Welcome to Cardinal Institute of Education. How can we help you?", sender: "bot", time: now },
      ],
    });
  }

  // Save user message
  chat.messages.push({ text: message.trim(), sender: "user", time: now });

  // Generate bot reply
  const botReply = getBotReply(message);
  chat.messages.push({ text: botReply, sender: "bot", time: now });

  await chat.save();

  return NextResponse.json({ chatId: chat._id, messages: chat.messages });
}