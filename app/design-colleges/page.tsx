import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Design Colleges in India 2025 | B.Des, M.Des Admissions",
  description: "Explore top design colleges in India. Compare B.Des & M.Des fees, NID/NIFT cutoff, placements & rankings. Find the best design schools for your creative career.",
  keywords: ["design colleges", "B.Des colleges", "NID", "NIFT", "top design colleges India", "design admission 2025"],
};

export default function DesignCollegesPage() {
  return <CollegeListing />;
}
