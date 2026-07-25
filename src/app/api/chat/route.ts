import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Chat from "@/models/Chat";

// Simple fuzzy match function (approximate string matching)
function similarity(a: string, b: string) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  let longer = a.length > b.length ? a : b;
  let shorter = a.length > b.length ? b : a;
  let longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / longerLength;
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
  phoneHref: "tel:0406705649",
  // TODO: source documents show "admin@cardinainstitute.com.au" (TAS — note the
  // missing "l" in "cardinal") and "info@tba" (Fees policy). Confirm the real
  // address before publishing.
  email: "admin@cardinalinstitute.com.au",
  // TODO: TAS CHC33021 lists Level 6, 56-58 York Street, Sydney NSW 2000 as the
  // delivery location, while the Refund Request Form lists the Blacktown office.
  // Confirm which address is the training venue and which is administrative.
  address: "Suite 207/30 Campbell St, Blacktown NSW 2148",
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
    reply: `Cardinal Institute of Education Pty Ltd is a Registered Training Organisation delivering nationally recognised training in aged care, disability support and first aid across New South Wales.`,
  },
  {
    key: "rto",
    reply: `We are a Registered Training Organisation, so our qualifications are nationally recognised under the Australian Qualifications Framework.`,
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
    reply: `We deliver nationally recognised training as a Registered Training Organisation. Our qualifications and units are listed on the national register at training.gov.au.`,
  },

  // -------------------------------------------------------------------------
  // COURSES — OVERVIEW
  // -------------------------------------------------------------------------
  {
    key: "what courses",
    reply: `We deliver CHC33021 Certificate III in Individual Support (Ageing and Disability), CHC43015 Certificate IV in Ageing Support, CHC43121 Certificate IV in Disability Support, HLTAID011 Provide First Aid and HLTAID009 Provide CPR.`,
  },
  {
    key: "short course",
    reply: `Our short courses are HLTAID011 Provide First Aid and HLTAID009 Provide Cardiopulmonary Resuscitation. Each runs as a single full-day face-to-face session.`,
  },
  {
    key: "long course",
    reply: `Our full qualifications are CHC33021 Certificate III in Individual Support, CHC43015 Certificate IV in Ageing Support and CHC43121 Certificate IV in Disability Support. Each includes 120 hours of supervised work placement.`,
  },
  {
    key: "course",
    reply: `We offer three nationally recognised qualifications — Certificate III in Individual Support, Certificate IV in Ageing Support and Certificate IV in Disability Support — plus First Aid and CPR short courses.`,
  },
  {
    key: "units",
    reply: `Certificate III in Individual Support has 15 units (9 core, 6 elective). Certificate IV in Ageing Support has 18 units (15 core, 3 elective). Certificate IV in Disability Support has 10 units (7 core, 3 elective).`,
  },
  {
    key: "learning outcomes",
    reply: `You'll learn person-centred support, dementia support, communication with clients and families, safe manual handling, infection prevention and control, legal and ethical practice, documentation, and work health and safety.`,
  },

  // -------------------------------------------------------------------------
  // CHC33021 — CERTIFICATE III IN INDIVIDUAL SUPPORT
  // -------------------------------------------------------------------------
  {
    key: "certificate iii",
    reply: `CHC33021 Certificate III in Individual Support (Ageing and Disability) runs over 52 weeks — 40 active weeks plus 12 weeks of scheduled breaks — with 15 units and 120 hours of supervised work placement.`,
  },
  {
    key: "chc33021",
    reply: `CHC33021 Certificate III in Individual Support (Ageing and Disability): 52 weeks, 15 units of competency, 20 hours per week of classroom training plus around 5 hours of self-directed study, and 120 hours of supervised work placement.`,
  },
  {
    key: "cert 3",
    reply: `Certificate III in Individual Support (CHC33021) is our entry-level qualification for aged care and disability support. It runs 52 weeks and includes 120 hours of work placement.`,
  },
  {
    key: "individual support",
    reply: `CHC33021 Certificate III in Individual Support (Ageing and Disability) prepares you for entry-level roles such as personal care worker, disability support worker and community care worker.`,
  },

  // -------------------------------------------------------------------------
  // CHC43015 — CERTIFICATE IV IN AGEING SUPPORT
  // -------------------------------------------------------------------------
  {
    key: "certificate iv in ageing",
    reply: `CHC43015 Certificate IV in Ageing Support runs over 52 weeks with 18 units of competency and 120 hours of supervised work placement in an aged care setting.`,
  },
  {
    key: "chc43015",
    reply: `CHC43015 Certificate IV in Ageing Support: 52 weeks (40 weeks training plus 12 weeks of breaks), 18 units, 20 hours per week face-to-face, and 120 hours of supervised aged care work placement.`,
  },
  {
    key: "ageing support",
    reply: `Certificate IV in Ageing Support (CHC43015) suits people moving into roles with more responsibility, such as community program coordinator, residential care worker or accommodation support worker.`,
  },
  {
    key: "aged care",
    reply: `For aged care we offer CHC33021 Certificate III in Individual Support and CHC43015 Certificate IV in Ageing Support. Both include 120 hours of supervised placement in an aged care workplace.`,
  },
  {
    key: "dementia",
    reply: `Dementia support is covered in both our Certificate III and Certificate IV in Ageing Support programs, including practical demonstration of dementia support strategies during work placement.`,
  },

  // -------------------------------------------------------------------------
  // CHC43121 — CERTIFICATE IV IN DISABILITY SUPPORT
  // -------------------------------------------------------------------------
  {
    key: "certificate iv in disability",
    reply: `CHC43121 Certificate IV in Disability Support runs over 29 weeks with 10 units and 120 hours of supervised placement. Please note it has a prerequisite qualification — ask me about entry requirements.`,
  },
  {
    key: "chc43121",
    reply: `CHC43121 Certificate IV in Disability Support: 29 weeks (27 weeks training plus 2 weeks of breaks), 10 units, and 120 hours of supervised placement with an approved disability service provider.`,
  },
  {
    key: "disability support",
    reply: `CHC43121 Certificate IV in Disability Support focuses on person-centred support, complex needs, behaviour support and community participation. It requires a prior Certificate III in Individual Support (Disability) or equivalent.`,
  },
  {
    key: "prerequisite",
    reply: `CHC43121 Certificate IV in Disability Support requires completion of CHC33021 or CHC33015 Certificate III in Individual Support (Disability), or CHC30408 Certificate III in Disability plus the CHCSS00125 Entry to Certificate IV in Disability Support Skill Set.`,
  },
  {
    key: "ndis",
    reply: `Our disability placements are hosted by approved providers operating under the NDIS Quality and Safeguards Framework, and graduates commonly work in NDIS-funded support roles.`,
  },
  {
    key: "medication",
    reply: `HLTHPS006 Assist Clients with Medication is offered as an elective within CHC43121 Certificate IV in Disability Support.`,
  },
  {
    key: "mental health",
    reply: `CHCMHS001 Work with People with Mental Health Issues is a core unit in CHC43121 Certificate IV in Disability Support.`,
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
    reply: `For our qualifications you must be 18 or over, provide 100-point photo ID, be an Australian or New Zealand citizen or permanent resident, have suitable language, literacy, numeracy and digital skills, and be able to complete 120 hours of work placement.`,
  },
  {
    key: "eligibility",
    reply: `Entry requires you to be 18+, hold 100-point ID, be an Australian or NZ citizen or permanent resident, and complete a pre-training review and LLND assessment before enrolment is finalised.`,
  },
  {
    key: "age",
    reply: `You must be 18 years of age or older to enrol in our qualifications.`,
  },
  {
    key: "international student",
    reply: `Our qualifications are currently available to Australian and New Zealand citizens and permanent residents of Australia.`,
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
    reply: `You'll need a Unique Student Identifier (USI) to be issued with a nationally recognised qualification or Statement of Attainment. It's free to create at usi.gov.au and we can help you set one up.`,
  },
  {
    key: "police check",
    reply: `Host workplaces generally require clearances such as a National Police Check before placement. We'll confirm exactly what's needed for your placement during enrolment.`,
  },
  {
    key: "laptop",
    reply: `You may be asked to bring a personal laptop or tablet to support some learning activities. We'll let you know in advance if it's needed.`,
  },

  // -------------------------------------------------------------------------
  // WORK PLACEMENT
  // -------------------------------------------------------------------------
  {
    key: "work placement",
    reply: `All three qualifications require a minimum of 120 hours of supervised work placement. We arrange placements with approved industry partners — you don't need to find your own.`,
  },
  {
    key: "placement",
    reply: `You'll complete 120 hours of supervised placement in an approved aged care or disability workplace. Cardinal Institute arranges this with our industry partners.`,
  },
  {
    key: "placement hours",
    reply: `120 hours minimum, mapped across the units that require workplace evidence. Trainers visit you on site at least twice a week during each placement block.`,
  },
  {
    key: "find my own placement",
    reply: `No — placements are arranged by Cardinal Institute with approved host organisations, so you don't need to source one yourself.`,
  },

  // -------------------------------------------------------------------------
  // DELIVERY, TIMETABLE & ATTENDANCE
  // -------------------------------------------------------------------------
  {
    key: "delivery mode",
    reply: `All of our training is delivered face-to-face in the classroom, supported by practical activities, simulated workplace learning and supervised work placement.`,
  },
  {
    key: "face to face",
    reply: `Yes — our training is face-to-face. Classroom sessions are supported by practical demonstrations, simulated workplace activities and supervised placement.`,
  },
  {
    key: "online",
    reply: `Our courses are delivered face-to-face rather than online. This ensures you can practise and be assessed on hands-on skills such as manual handling, infection control and CPR.`,
  },
  {
    key: "class hours",
    reply: `Qualification students attend 20 hours of structured training and assessment per week, plus approximately 5 hours of self-directed study.`,
  },
  {
    key: "duration",
    reply: `Certificate III in Individual Support: 52 weeks. Certificate IV in Ageing Support: 52 weeks. Certificate IV in Disability Support: 29 weeks. First Aid and CPR: one full day each.`,
  },
  {
    key: "schedule",
    reply: `Qualification classes run 20 hours per week across scheduled terms. Short course dates are scheduled regularly — contact us on ${CONTACT.phone} for upcoming dates.`,
  },
  {
    key: "attendance",
    reply: `Regular attendance is required. For HLTAID009 and HLTAID011 you must attend the full 8-hour session — partial attendance isn't sufficient for certification.`,
  },
  {
    key: "class size",
    reply: `Classroom trainer-to-learner ratios do not exceed 1:10 for qualifications and 1:14 for first aid and CPR, with smaller ratios during practical activities.`,
  },
  {
    key: "simulated",
    reply: `Practical skills are developed in a simulated aged care or disability support environment with industry-relevant equipment before you go on placement.`,
  },

  // -------------------------------------------------------------------------
  // ASSESSMENT
  // -------------------------------------------------------------------------
  {
    key: "assessment",
    reply: `Assessment includes written and knowledge tasks, practical demonstrations, simulated scenarios, case studies and workplace observation during placement.`,
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
    reply: `There are no traditional exams. You're assessed progressively through practical demonstrations, written tasks and workplace observation.`,
  },

  // -------------------------------------------------------------------------
  // RPL & CREDIT TRANSFER
  // -------------------------------------------------------------------------
  {
    key: "credit transfer",
    reply: `Credit Transfer is available where you've completed the same or an equivalent unit with another RTO. Provide verified copies of your qualification or Statement of Attainment during enrolment.`,
  },
  {
    key: "rpl",
    reply: `Recognition of Prior Learning is available if you can evidence existing skills from work or previous training. Evidence may include workplace documents, references, a resume or a practical demonstration.`,
  },
  {
    key: "recognition of prior learning",
    reply: `RPL can reduce your training requirements and course duration where granted. Contact us to discuss whether your experience is likely to qualify.`,
  },

  // -------------------------------------------------------------------------
  // CERTIFICATION
  // -------------------------------------------------------------------------
  {
    key: "statement of attainment",
    reply: `HLTAID009 and HLTAID011 lead to a nationally recognised Statement of Attainment. You'll also receive one for any units you complete if you don't finish a full qualification.`,
  },
  {
    key: "certificate",
    reply: `On successful completion of a full qualification you receive a nationally recognised certificate issued under the Australian Qualifications Framework. Short courses lead to a Statement of Attainment.`,
  },
  {
    key: "certification",
    reply: `Our qualifications are issued under the Australian Qualifications Framework. HLTAID009 and HLTAID011 result in a Statement of Attainment rather than a full qualification.`,
  },
  {
    key: "how long to receive certificate",
    reply: `Certificates and Statements of Attainment are issued after all requirements are met and your USI is verified. Contact our admin team for current processing times.`,
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
    reply: `Course costs differ between our qualifications and short courses. Contact us on ${CONTACT.phone} for the current Schedule of Fees and Charges.`,
  },
  {
    key: "fees",
    reply: `All fees are disclosed in writing before enrolment. Fees may include tuition, learning materials and administration charges, with instalment options depending on course structure.`,
  },
  {
    key: "payment",
    reply: `We accept EFT and credit or debit card. Cash payments are not accepted. An initial payment is required before your course starts.`,
  },
  {
    key: "payment plan",
    reply: `Instalment arrangements may be available depending on the course. Fees are collected progressively in line with course delivery.`,
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
    reply: `Intakes are scheduled throughout the year. Contact us on ${CONTACT.phone} for the next available start date for your course.`,
  },
  {
    key: "admission",
    reply: `Applications are welcome year-round. Your start date depends on the next scheduled intake and completion of the pre-training review.`,
  },
  {
    key: "documents needed",
    reply: `You'll need 100-point photo ID, proof of citizenship or permanent residency, and your USI. Any prior qualifications are useful if you're applying for credit transfer.`,
  },

  // -------------------------------------------------------------------------
  // CAREERS & PATHWAYS
  // -------------------------------------------------------------------------
  {
    key: "career",
    reply: `Graduates work as personal care workers, disability support workers, residential care workers, community care workers, in-home support workers and respite care workers.`,
  },
  {
    key: "job",
    reply: `Our qualifications lead to roles across aged care, disability and community services — including NDIS-funded support work and residential aged care.`,
  },
  {
    key: "further study",
    reply: `Pathways include Certificate IV in Ageing Support, Certificate IV in Disability Support, Certificate IV in Community Services, Diploma of Community Services, Diploma of Nursing and Bachelor of Nursing.`,
  },
  {
    key: "pathway",
    reply: `Certificate III leads into our Certificate IV programs, which in turn can lead to Diploma of Nursing or a Bachelor of Nursing, subject to entry requirements.`,
  },
  {
    key: "nursing",
    reply: `HLT54121 Diploma of Nursing and Bachelor of Nursing are recognised further-study pathways from our Certificate IV programs, subject to the provider's entry requirements.`,
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
    reply: `Our team can help with course selection, enrolment, placement and learner support. Call ${CONTACT.phone} during business hours.`,
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
    reply: `We assist with enrolment, course selection, work placement arrangements and learner support throughout your course.`,
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