import type { Metadata } from "next";
import { CollegeDetailPage } from "@/components/college-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // In production, fetch college data based on slug
  const collegeName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${collegeName} - Courses, Fees, Placements, Rankings | Collegium`,
    description: `Get all details about ${collegeName} - courses, fees, placements, cutoffs, rankings, reviews, and admission process. Apply now for 2025 intake.`,
  };
}

export default function CollegePage() {
  return <CollegeDetailPage />;
}
