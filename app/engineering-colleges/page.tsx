import type { Metadata } from "next";
import { CollegeListing } from "@/components/colleges";

export const metadata: Metadata = {
  title:
    "Top Engineering Colleges in India 2025 - Rankings & Admissions | Collegium",
  description:
    "Find the best engineering colleges in India. Compare B.Tech colleges by NIRF rankings, JEE Main cutoffs, fees, placements, and student reviews.",
  keywords:
    "engineering colleges, B.Tech colleges, IIT, NIT, IIIT, best engineering colleges India",
};

export default function EngineeringCollegesPage() {
  return (
    <CollegeListing
      title="Top Engineering Colleges in India 2025"
      description="6,361 Engineering colleges - Compare by rankings, fees, placements & JEE cutoffs"
    />
  );
}
