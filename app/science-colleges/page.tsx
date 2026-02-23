import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Science Colleges in India 2025 | B.Sc, M.Sc Admissions",
  description: "Explore top science colleges in India. Compare B.Sc & M.Sc fees, CUET cutoff, placements & rankings. Find the best science colleges for Physics, Chemistry, Biology & Math.",
  keywords: ["science colleges", "B.Sc colleges", "M.Sc colleges", "top science colleges India", "science admission 2025"],
};

export default function ScienceCollegesPage() {
  return <CollegeListing />;
}
