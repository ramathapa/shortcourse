// app/about/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import CTAOtherPage from "@/components/CTAOtherPage";

export const metadata: Metadata = {
  title: "Contact Us | CPR & First Aid Short Courses Sydney",
  description:
    "Contact Cardinal Institute of Education in Sydney about CPR, First Aid and group training bookings. Enquire about course dates, workplace training and enrolment.",
};


export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Render the main page content */}
      {children}

      {/* Render your component above footer */}
      <CTAOtherPage />
    </>
  );
}





