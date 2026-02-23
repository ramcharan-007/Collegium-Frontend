import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Chennai 2025 | Engineering, MBA, Medical",
  description: "Explore top colleges in Chennai. Compare fees, placements, rankings & reviews of engineering, management, medical and other colleges in Chennai.",
  keywords: ["colleges in Chennai", "Chennai colleges", "top colleges Chennai", "engineering colleges Chennai"],
};

export default function ChennaiCollegesPage() {
  return <CollegeListing />;
}
