import { ExamPredictorPage } from "@/components/college-predictor";

interface PageProps {
  params: Promise<{ exam: string }>;
}

export default async function ExamPredictorRoute({ params }: PageProps) {
  const { exam } = await params;
  return <ExamPredictorPage examId={exam} />;
}
