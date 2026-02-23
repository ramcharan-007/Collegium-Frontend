import type { Metadata } from "next";
import { CoursesListing } from "@/components/courses";

export const metadata: Metadata = {
  title: "Courses in India 2025 - B.Tech, MBA, MBBS, B.Sc & More | Collegium",
  description: "Explore all courses offered by colleges in India. Compare course fees, duration, eligibility, and career prospects. Find the right course for your future.",
};

export default function CoursesPage() {
  return <CoursesListing />;
}
