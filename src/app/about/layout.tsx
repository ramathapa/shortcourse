// app/about/layout.tsx
import type React from "react";
import CTAOtherPage from "@/components/CTAOtherPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cardinal Institute of Education | Short Courses Sydney",
  description:
    "Learn about Cardinal Institute of Education, RTO 46594, providing nationally recognised CPR and First Aid short courses in Sydney.",
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