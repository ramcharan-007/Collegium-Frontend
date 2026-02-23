import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Medical Colleges in India 2025 | MBBS, BDS, BAMS Admissions",
  description: "Explore top medical colleges in India. Compare MBBS fees, NEET cutoff, placements, rankings & reviews. Get admission guidance for AIIMS, JIPMER, CMC Vellore & more.",
  keywords: ["medical colleges", "MBBS colleges", "NEET colleges", "top medical colleges India", "AIIMS", "medical admission 2025"],
};

export default function MedicalCollegesPage() {
  return <CollegeListing />;
}
