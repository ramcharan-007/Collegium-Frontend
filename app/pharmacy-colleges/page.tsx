import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Pharmacy Colleges in India 2025 | B.Pharm, D.Pharm Admissions",
  description: "Find the best pharmacy colleges in India. Compare B.Pharm & D.Pharm fees, placements, rankings & reviews. Get admission details for top pharmacy institutes.",
  keywords: ["pharmacy colleges", "B.Pharm colleges", "D.Pharm colleges", "top pharmacy colleges India", "pharmacy admission 2025"],
};

export default function PharmacyCollegesPage() {
  return <CollegeListing />;
}
