import type { Metadata } from "next";
import { CollegePredictorLanding } from "@/components/college-predictor";

export const metadata: Metadata = {
  title: "College Predictor 2025 - JEE, NEET, CAT Score Based | Collegium",
  description: "Predict your best college based on exam scores. Use our college predictor for JEE Main, NEET, CAT, and more entrance exams.",
};

export default function CollegePredictorPage() {
  return <CollegePredictorLanding />;
}
