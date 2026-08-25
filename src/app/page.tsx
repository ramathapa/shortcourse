
import Hero from "../components/short-courses/Hero";
import CourseComparison from "../components/short-courses/CourseComparison";
import AvailableCourses from "../components/short-courses/AvailableCourses";
import UpcomingEvents from "../components/short-courses/UpcomingEvents";
// import WhyChoose from "../components/short-courses/WhyChoose";
import Heroo from "../components/hero";
import GroupTraining from "../components/short-courses/GroupTraining";
import FAQPage from "../components/faqSection";
import CTAOtherPage from "../components/CTAOtherPage";


export default function ShortCoursesPage() {
  return (
    <main>

      <Hero />

      <AvailableCourses />

      <UpcomingEvents />

      <Heroo />
      <CourseComparison />
      <GroupTraining/>
      <FAQPage/>
      <CTAOtherPage />

    </main>
  );
}