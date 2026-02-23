import type { Metadata } from "next";
import { NewsListing } from "@/components/news";

export const metadata: Metadata = {
  title: "Education News & Updates - Admissions, Exams, Results | Collegium",
  description: "Stay updated with latest education news, exam updates, admission alerts, and college announcements.",
};

export default function NewsPage() {
  return <NewsListing />;
}
