
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CPR & First Aid Short Courses Sydney",
  description:
    "Contact Cardinal Institute of Education in Sydney about CPR, First Aid and group training bookings. Enquire about course dates, workplace training and enrolment.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}