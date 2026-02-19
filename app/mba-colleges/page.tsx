import type { Metadata } from "next";
import { CollegeListing } from "@/components/colleges";

export const metadata: Metadata = {
  title: "Top MBA Colleges in India 2025 - Rankings, CAT Cutoffs | Collegium",
  description:
    "Find the best MBA colleges in India. Compare IIMs, top B-schools by rankings, CAT cutoffs, fees, placements, and ROI.",
  keywords:
    "MBA colleges, IIM, best MBA colleges India, CAT colleges, PGDM colleges",
};

export default function MBACollegesPage() {
  return (
    <CollegeListing
      title="Top MBA Colleges in India 2025"
      description="8,001 MBA colleges - Compare by rankings, CAT cutoffs, fees & placements"
    />
  );
}
