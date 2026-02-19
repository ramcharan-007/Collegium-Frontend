import type { Metadata } from "next";
import { CollegeListing } from "@/components/colleges";

export const metadata: Metadata = {
  title:
    "Top Colleges in India 2025 - Rankings, Reviews & Admissions | Collegium",
  description:
    "Explore 25,000+ colleges in India. Compare rankings, reviews, courses, fees, and placements. Find the best college for your career goals.",
  keywords:
    "colleges in India, top colleges, engineering colleges, MBA colleges, medical colleges, college rankings",
};

export default function CollegesPage() {
  return (
    <CollegeListing
      title="Top Colleges in India 2025"
      description="Explore 25,000+ colleges across India - Filter by location, course, fees, and more"
    />
  );
}
