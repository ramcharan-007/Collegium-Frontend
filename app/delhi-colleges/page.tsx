import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Delhi NCR 2025 | Engineering, MBA, Medical",
  description: "Explore top colleges in Delhi NCR. Compare fees, placements, rankings & reviews of engineering, management, medical and other colleges in Delhi, Noida, Gurgaon.",
  keywords: ["colleges in Delhi", "Delhi NCR colleges", "top colleges Delhi", "engineering colleges Delhi"],
};

export default function DelhiCollegesPage() {
  return <CollegeListing />;
}
