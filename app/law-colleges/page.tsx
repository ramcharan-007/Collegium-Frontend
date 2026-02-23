import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Law Colleges in India 2025 | LLB, BA LLB Admissions & Rankings",
  description: "Find the best law colleges in India. Compare LLB & BA LLB fees, CLAT cutoff, placements, and rankings. Get admission details for NLUs, faculty of law & more.",
  keywords: ["law colleges", "LLB colleges", "CLAT colleges", "top law colleges India", "NLU", "law admission 2025"],
};

export default function LawCollegesPage() {
  return <CollegeListing />;
}
