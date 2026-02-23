import type { Metadata } from "next";
import { StudyAbroadLanding } from "@/components/study-abroad";

export const metadata: Metadata = {
  title: "Study Abroad 2025 - Top Universities, Courses & Scholarships | Collegium",
  description: "Explore study abroad options in USA, UK, Canada, Australia & more. Get details on universities, courses, scholarships, and application process.",
};

export default function StudyAbroadPage() {
  return <StudyAbroadLanding />;
}
