import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Bangalore 2025 | Engineering, MBA, Medical",
  description: "Find top colleges in Bangalore/Bengaluru. Compare fees, placements, rankings & reviews of engineering, management, medical and other colleges in Bangalore.",
  keywords: ["colleges in Bangalore", "Bangalore colleges", "Bengaluru colleges", "top colleges Bangalore", "engineering colleges Bangalore"],
};

export default function BangaloreCollegesPage() {
  return <CollegeListing />;
}
