import type { Metadata } from "next";
import { WriteReviewPage } from "@/components/write-review";

export const metadata: Metadata = {
  title: "Write a College Review - Share Your Experience | Collegium",
  description: "Share your honest review about your college. Help other students make informed decisions about their education.",
};

export default function WriteReviewRoute() {
  return <WriteReviewPage />;
}
