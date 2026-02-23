import type { Metadata } from "next";
import { RankingsListing } from "@/components/rankings";

export const metadata: Metadata = {
  title: "College Rankings 2025 - NIRF, QS, Times | Collegium",
  description: "Latest college rankings in India - NIRF, QS World, THE, and more. Compare top colleges by ranking, category, and year.",
};

export default function RankingsPage() {
  return <RankingsListing />;
}
