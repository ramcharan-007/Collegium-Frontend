import {
  HeroSearch,
  StudyGoalGrid,
  FeaturedColleges,
  TopCollegesTable,
  TopExams,
  CollegePredictorCTA,
  StudyAbroad,
  ExplorePrograms,
  RankingsSection,
  ExploreCourses,
  TopStudyPlaces,
  AdmissionSection,
  BoardExams,
  NewsletterSubscribe,
  CollegesByLocation,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Search */}
      <HeroSearch />

      {/* Explore Programs Bar */}
      <ExplorePrograms />

      {/* Study Goals Grid */}
      <StudyGoalGrid />

      {/* Featured Colleges Carousel */}
      <FeaturedColleges />

      {/* Top Colleges Table with Tabs */}
      <TopCollegesTable />

      {/* College Rankings by Agency */}
      <RankingsSection />

      {/* Top Exams Section */}
      <TopExams />

      {/* Explore Courses by Level */}
      <ExploreCourses />

      {/* Admission 2026 Updates */}
      <AdmissionSection />

      {/* Top Study Places / Cities */}
      <TopStudyPlaces />

      {/* Colleges by Location (State/City) */}
      <CollegesByLocation />

      {/* Board Exams 2025 */}
      <BoardExams />

      {/* College Predictor CTA */}
      <CollegePredictorCTA />

      {/* Study Abroad Section */}
      <StudyAbroad />

      {/* Newsletter Subscription */}
      <NewsletterSubscribe />
    </>
  );
}
