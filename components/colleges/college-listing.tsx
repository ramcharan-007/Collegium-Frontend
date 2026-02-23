"use client";

import * as React from "react";
import { ArrowUpDown, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { CollegeCard } from "./college-card";
import { FilterSidebar, MobileFilterDrawer } from "./filter-sidebar";
import { FAQSection } from "@/components/seo";
import type { CollegeCard as CollegeCardType } from "@/types";

// Sample data
const sampleColleges: CollegeCardType[] = [
  {
    id: "1",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    location: { city: "Mumbai", state: "Maharashtra" },
    type: "GOVERNMENT",
    rating: 4.5,
    reviewCount: 403,
    fees: { course: "B.Tech", amount: 882500, type: "total" },
    approvals: ["AICTE", "UGC", "NAAC A++"],
    rankings: [
      { agency: "NIRF", rank: 3, year: 2024 },
      { agency: "QS", rank: 149, year: 2024 },
    ],
    placement: { average: 2350000, highest: 10000000 },
    coursesCount: 45,
    isVerified: true,
    isFeatured: true,
    isSponsored: false,
  },
  {
    id: "2",
    slug: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    location: { city: "New Delhi", state: "Delhi" },
    type: "GOVERNMENT",
    rating: 4.4,
    reviewCount: 993,
    fees: { course: "B.Tech", amount: 862550, type: "total" },
    approvals: ["AICTE", "UGC"],
    rankings: [{ agency: "NIRF", rank: 2, year: 2024 }],
    placement: { average: 2582000, highest: 20000000 },
    coursesCount: 38,
    isVerified: true,
    isFeatured: true,
    isSponsored: false,
  },
  {
    id: "3",
    slug: "iit-madras",
    name: "Indian Institute of Technology Madras",
    location: { city: "Chennai", state: "Tamil Nadu" },
    type: "GOVERNMENT",
    rating: 4.6,
    reviewCount: 567,
    fees: { course: "B.Tech", amount: 850000, type: "total" },
    approvals: ["AICTE", "UGC", "NAAC A++"],
    rankings: [{ agency: "NIRF", rank: 1, year: 2024 }],
    placement: { average: 2180000, highest: 15000000 },
    coursesCount: 52,
    isVerified: true,
    isFeatured: true,
    isSponsored: false,
  },
  {
    id: "4",
    slug: "bits-pilani",
    name: "Birla Institute of Technology and Science Pilani",
    location: { city: "Pilani", state: "Rajasthan" },
    type: "PRIVATE",
    rating: 4.3,
    reviewCount: 812,
    fees: { course: "B.E.", amount: 2100000, type: "total" },
    approvals: ["UGC"],
    rankings: [{ agency: "NIRF", rank: 21, year: 2024 }],
    placement: { average: 2100000, highest: 12000000 },
    coursesCount: 28,
    isVerified: true,
    isFeatured: false,
    isSponsored: false,
  },
  {
    id: "5",
    slug: "nit-trichy",
    name: "National Institute of Technology Tiruchirappalli",
    location: { city: "Tiruchirappalli", state: "Tamil Nadu" },
    type: "GOVERNMENT",
    rating: 4.2,
    reviewCount: 456,
    fees: { course: "B.Tech", amount: 657500, type: "total" },
    approvals: ["AICTE", "UGC"],
    rankings: [{ agency: "NIRF", rank: 9, year: 2024 }],
    placement: { average: 1450000, highest: 8500000 },
    coursesCount: 35,
    isVerified: true,
    isFeatured: false,
    isSponsored: false,
  },
  {
    id: "6",
    slug: "vit-vellore",
    name: "Vellore Institute of Technology",
    location: { city: "Vellore", state: "Tamil Nadu" },
    type: "PRIVATE",
    rating: 4.1,
    reviewCount: 1245,
    fees: { course: "B.Tech", amount: 1958000, type: "total" },
    approvals: ["AICTE", "UGC", "NAAC A++"],
    rankings: [{ agency: "NIRF", rank: 12, year: 2024 }],
    placement: { average: 900000, highest: 4400000 },
    coursesCount: 68,
    isVerified: true,
    isFeatured: false,
    isSponsored: false,
  },
];

const sortOptions = [
  { value: "popularity", label: "Popularity" },
  { value: "rating-desc", label: "Rating: High to Low" },
  { value: "rating-asc", label: "Rating: Low to High" },
  { value: "fees-asc", label: "Fees: Low to High" },
  { value: "fees-desc", label: "Fees: High to Low" },
  { value: "ranking", label: "Best Ranking" },
];

interface CollegeListingProps {
  title?: string;
  description?: string;
  colleges?: CollegeCardType[];
}

const collegesFAQs = [
  { question: "How to choose the best college in India?", answer: "Consider factors like NIRF rankings, placement records (average and highest packages), faculty quality, infrastructure, location, course curriculum, accreditations (NAAC, NBA), and student reviews. Use Collegium's compare tool to evaluate colleges side by side." },
  { question: "What are the top engineering colleges in India?", answer: "The top engineering colleges include IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, IIT Kharagpur (by NIRF), BITS Pilani, NIT Trichy, and VIT Vellore. Rankings may vary based on the ranking agency (NIRF, QS, THE)." },
  { question: "How do I get admission to top colleges?", answer: "Most top colleges require entrance exam scores (JEE for engineering, NEET for medical, CAT for MBA, CLAT for law). After qualifying, you participate in counselling rounds where seats are allotted based on rank, category, and preference." },
  { question: "What is the average fee for engineering colleges in India?", answer: "Fees vary widely: Government IITs/NITs charge ₹2-10 lakhs for 4 years, while private colleges range from ₹5-25 lakhs. Top private universities like BITS Pilani can cost ₹20+ lakhs. Scholarships and education loans can help manage costs." },
  { question: "What factors affect college placements?", answer: "Key factors include the college's industry connections, location (metro cities have better access), course specialization demand, alumni network strength, student skill levels, and the overall job market. Top colleges maintain 90%+ placement rates." },
];

function CollegesFAQ() {
  return <FAQSection faqs={collegesFAQs} />;
}

export function CollegeListing({
  title = "All Colleges",
  description = "Explore top colleges across India",
  colleges = sampleColleges,
}: CollegeListingProps) {
  const [selectedFilters, setSelectedFilters] = React.useState<
    Record<string, string[]>
  >({});
  const [sortBy, setSortBy] = React.useState("popularity");
  const [viewMode, setViewMode] = React.useState<"grid" | "list">("list");
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);
  const [compareList, setCompareList] = React.useState<string[]>([]);

  const handleFilterChange = (groupId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] || [];
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [groupId]: updated };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
  };

  const toggleCompare = (collegeId: string) => {
    setCompareList((prev) =>
      prev.includes(collegeId)
        ? prev.filter((id) => id !== collegeId)
        : prev.length < 4
          ? [...prev, collegeId]
          : prev,
    );
  };

  const activeFilterCount = Object.values(selectedFilters).flat().length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container py-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            {title}
          </h1>
          <p className="text-gray-500 mt-1">{description}</p>
        </div>
      </div>

      <div className="container py-6">
        <div className="flex gap-6">
          {/* Sidebar - Desktop */}
          <FilterSidebar
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onClearAll={clearAllFilters}
            className="hidden lg:block w-72 flex-shrink-0 sticky top-24 h-fit"
          />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="lg:hidden"
                    leftIcon={<SlidersHorizontal className="w-4 h-4" />}
                    onClick={() => setShowMobileFilters(true)}
                  >
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge variant="primary" size="sm" className="ml-1">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>

                  {/* Results Count */}
                  <div className="text-sm text-gray-600">
                    Showing{" "}
                    <span className="font-medium">{colleges.length}</span>{" "}
                    colleges
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Sort */}
                  <div className="flex items-center gap-2">
                    <ArrowUpDown className="w-4 h-4 text-gray-500" />
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        {sortOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* View Mode */}
                  <div className="hidden sm:flex items-center border border-gray-200 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("list")}
                      className={cn(
                        "p-2 rounded",
                        viewMode === "list"
                          ? "bg-collegium-blue text-white"
                          : "text-gray-500 hover:bg-gray-100",
                      )}
                    >
                      <List className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("grid")}
                      className={cn(
                        "p-2 rounded",
                        viewMode === "grid"
                          ? "bg-collegium-blue text-white"
                          : "text-gray-500 hover:bg-gray-100",
                      )}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* College Cards */}
            <div
              className={cn(
                "space-y-4",
                viewMode === "grid" &&
                  "grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0",
              )}
            >
              {colleges.map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  variant={viewMode === "grid" ? "compact" : "default"}
                  isComparing={compareList.includes(college.id)}
                  onCompareToggle={() => toggleCompare(college.id)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={cn(
                    "w-10 h-10 rounded-lg font-medium text-sm transition-colors",
                    page === 1
                      ? "bg-collegium-blue text-white"
                      : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  {page}
                </button>
              ))}
              <span className="text-gray-400">...</span>
              <button className="w-10 h-10 rounded-lg font-medium text-sm text-gray-600 hover:bg-gray-100">
                50
              </button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-collegium-blue text-white py-4 shadow-lg z-40">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="font-medium">
                {compareList.length} college{compareList.length > 1 ? "s" : ""}{" "}
                selected
              </span>
              <span className="text-blue-200 text-sm">(Max 4)</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCompareList([])}
                className="text-white hover:bg-white/10"
              >
                Clear
              </Button>
              <Button variant="gold" size="sm">
                Compare Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={showMobileFilters}
        onClose={() => setShowMobileFilters(false)}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClearAll={clearAllFilters}
      />

      {/* FAQ Section */}
      <div className="container pb-10">
        <CollegesFAQ />
      </div>
    </div>
  );
}
