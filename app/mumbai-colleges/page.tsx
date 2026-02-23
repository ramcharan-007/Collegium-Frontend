import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Mumbai 2025 | Engineering, MBA, Medical",
  description: "Explore top colleges in Mumbai. Compare fees, placements, rankings & reviews of engineering, management, medical and other colleges in Mumbai.",
  keywords: ["colleges in Mumbai", "Mumbai colleges", "top colleges Mumbai", "engineering colleges Mumbai"],
};

export default function MumbaiCollegesPage() {
  return <CollegeListing />;
}
