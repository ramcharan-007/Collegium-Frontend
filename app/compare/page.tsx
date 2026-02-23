import type { Metadata } from "next";
import { CompareColleges } from "@/components/compare";

export const metadata: Metadata = {
  title: "Compare Colleges Side by Side - Fees, Rankings, Placements | Collegium",
  description: "Compare colleges side by side on ranking, fees, placements, courses, and more. Make an informed decision with detailed college comparisons.",
};

export default function ComparePage() {
  return <CompareColleges />;
}
