import { CollegeListing } from "@/components/colleges";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Colleges in Hyderabad 2025 | Engineering, MBA, Medical",
  description: "Explore top colleges in Hyderabad. Compare fees, placements, rankings & reviews of engineering, management and medical colleges in Hyderabad.",
  keywords: ["colleges in Hyderabad", "Hyderabad colleges", "top colleges Hyderabad"],
};

export default function HyderabadCollegesPage() {
  return <CollegeListing />;
}
