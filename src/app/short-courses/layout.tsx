// app/about/layout.tsx
import type React from "react";
// import CTAOtherPage from "../components/CTAOtherPage";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Render the main page content */}
      {children}

      {/* Render your component above footer */}
      {/* <CTAOtherPage /> */}
    </>
  );
}