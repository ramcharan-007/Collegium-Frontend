import type { Metadata } from "next";
import { ExamDetailPage } from "@/components/exam-detail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const examName = slug.toUpperCase().replace(/-/g, " ");

  return {
    title: `${examName} 2026 - Dates, Eligibility, Syllabus, Pattern | Collegium`,
    description: `Get complete information about ${examName} 2026 - exam dates, eligibility criteria, syllabus, exam pattern, application process, and more.`,
  };
}

export default function ExamPage() {
  return <ExamDetailPage />;
}
