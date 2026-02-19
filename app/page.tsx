import {
  HeroSearch,
  StudyGoalGrid,
  FeaturedColleges,
  TopCollegesTable,
  TopExams,
  CollegePredictorCTA,
  StudyAbroad,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Search */}
      <HeroSearch />

      {/* Study Goals Grid */}
      <StudyGoalGrid />

      {/* Featured Colleges Carousel */}
      <FeaturedColleges />

      {/* Top Colleges Table with Tabs */}
      <TopCollegesTable />

      {/* Top Exams Section */}
      <TopExams />

      {/* College Predictor CTA */}
      <CollegePredictorCTA />

      {/* Study Abroad Section */}
      <StudyAbroad />
    </>
  );
}
