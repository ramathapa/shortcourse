import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatBot from "@/components/chatbot";

export const metadata: Metadata = {
  title: "Cardinal Institute of Education | Training Courses in Sydney",
  description:
    "Cardinal Institute of Education offers vocational training and short courses in Sydney, including aged care, disability support, CPR and First Aid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        {/* Floating ChatBot */}
        <ChatBot />
      </body>
    </html>
  );
}