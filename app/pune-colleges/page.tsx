import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Pune 2025 | Engineering, MBA, Medical",
  description: "Explore top colleges in Pune. Compare fees, placements, rankings & reviews of engineering, management and medical colleges in Pune.",
  keywords: ["colleges in Pune", "Pune colleges", "top colleges Pune"],
};

export default function PuneCollegesPage() {
  return <CollegeListing />;
}
