import type { Metadata } from "next";
import { ReviewsListing } from "@/components/reviews";

export const metadata: Metadata = {
  title: "College Reviews by Students - Honest Ratings & Feedback | Collegium",
  description: "Read genuine reviews from current students and alumni. Get honest feedback about colleges, courses, placements, and campus life.",
};

export default function ReviewsPage() {
  return <ReviewsListing />;
}
