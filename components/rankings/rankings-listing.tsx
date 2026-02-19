"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronDown,
  Trophy,
  Building2,
  GraduationCap,
  TrendingUp,
  TrendingDown,
  Minus,
  Filter,
  Download,
  ExternalLink,
  Star,
  MapPin,
} from "lucide-react";

interface RankingAgency {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  description: string;
  year: number;
}

interface RankedCollege {
  rank: number;
  previousRank: number | null;
  name: string;
  slug: string;
  location: string;
  type: string;
  score: number;
  rating: number;
  streams: string[];
  highlights: string[];
}

const rankingAgencies: RankingAgency[] = [
  {
    id: "nirf",
    name: "NIRF",
    fullName: "National Institutional Ranking Framework",
    logo: "🏛️",
    description: "Government of India's official ranking",
    year: 2024,
  },
  {
    id: "qs",
    name: "QS",
    fullName: "QS World University Rankings",
    logo: "🌍",
    description: "Global university rankings by Quacquarelli Symonds",
    year: 2024,
  },
  {
    id: "times",
    name: "THE",
    fullName: "Times Higher Education",
    logo: "📰",
    description: "Global performance tables for universities",
    year: 2024,
  },
  {
    id: "collegium",
    name: "Collegium",
    fullName: "Collegium Rankings",
    logo: "🎓",
    description: "India's most comprehensive college rankings",
    year: 2024,
  },
];

const categories = [
  { id: "all", name: "All Colleges" },
  { id: "engineering", name: "Engineering" },
  { id: "management", name: "Management" },
  { id: "medical", name: "Medical" },
  { id: "law", name: "Law" },
  { id: "pharmacy", name: "Pharmacy" },
  { id: "architecture", name: "Architecture" },
  { id: "university", name: "Universities" },
];

const rankedColleges: RankedCollege[] = [
  {
    rank: 1,
    previousRank: 1,
    name: "Indian Institute of Technology Madras",
    slug: "iit-madras",
    location: "Chennai, Tamil Nadu",
    type: "Public",
    score: 90.14,
    rating: 4.9,
    streams: ["Engineering", "Science", "Management"],
    highlights: ["NIRF Rank #1", "QS Rank #285", "Research Excellence"],
  },
  {
    rank: 2,
    previousRank: 3,
    name: "Indian Institute of Technology Delhi",
    slug: "iit-delhi",
    location: "New Delhi, Delhi",
    type: "Public",
    score: 88.81,
    rating: 4.9,
    streams: ["Engineering", "Science", "Design"],
    highlights: ["NIRF Rank #2", "Strong Industry Connect", "Top Placements"],
  },
  {
    rank: 3,
    previousRank: 2,
    name: "Indian Institute of Technology Bombay",
    slug: "iit-bombay",
    location: "Mumbai, Maharashtra",
    type: "Public",
    score: 85.79,
    rating: 4.9,
    streams: ["Engineering", "Science", "Management"],
    highlights: ["NIRF Rank #3", "Entrepreneurship Hub", "Global Recognition"],
  },
  {
    rank: 4,
    previousRank: 4,
    name: "Indian Institute of Technology Kanpur",
    slug: "iit-kanpur",
    location: "Kanpur, Uttar Pradesh",
    type: "Public",
    score: 82.56,
    rating: 4.8,
    streams: ["Engineering", "Science"],
    highlights: ["Research Focus", "Strong Alumni Network"],
  },
  {
    rank: 5,
    previousRank: 6,
    name: "Indian Institute of Technology Kharagpur",
    slug: "iit-kharagpur",
    location: "Kharagpur, West Bengal",
    type: "Public",
    score: 78.89,
    rating: 4.8,
    streams: ["Engineering", "Science", "Law", "Management"],
    highlights: ["Largest IIT Campus", "Diverse Programs"],
  },
  {
    rank: 6,
    previousRank: 5,
    name: "Indian Institute of Science",
    slug: "iisc-bangalore",
    location: "Bangalore, Karnataka",
    type: "Public",
    score: 77.32,
    rating: 4.9,
    streams: ["Science", "Engineering", "Research"],
    highlights: ["#1 in Research", "Nobel Laureate Alumni"],
  },
  {
    rank: 7,
    previousRank: 7,
    name: "Indian Institute of Technology Roorkee",
    slug: "iit-roorkee",
    location: "Roorkee, Uttarakhand",
    type: "Public",
    score: 74.56,
    rating: 4.7,
    streams: ["Engineering", "Architecture", "Management"],
    highlights: ["Oldest IIT", "Heritage Campus"],
  },
  {
    rank: 8,
    previousRank: 9,
    name: "Indian Institute of Technology Guwahati",
    slug: "iit-guwahati",
    location: "Guwahati, Assam",
    type: "Public",
    score: 72.45,
    rating: 4.7,
    streams: ["Engineering", "Science", "Design"],
    highlights: ["Scenic Campus", "Growing Research"],
  },
  {
    rank: 9,
    previousRank: 8,
    name: "Indian Institute of Technology Hyderabad",
    slug: "iit-hyderabad",
    location: "Hyderabad, Telangana",
    type: "Public",
    score: 70.23,
    rating: 4.6,
    streams: ["Engineering", "Science"],
    highlights: ["Young IIT", "Rapid Growth"],
  },
  {
    rank: 10,
    previousRank: 11,
    name: "National Institute of Technology Tiruchirappalli",
    slug: "nit-trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "Public",
    score: 68.91,
    rating: 4.6,
    streams: ["Engineering", "Science", "Management"],
    highlights: ["Top NIT", "Excellent Placements"],
  },
];

function RankChange({
  current,
  previous,
}: {
  current: number;
  previous: number | null;
}) {
  if (previous === null) return <Badge variant="outline">New</Badge>;

  const diff = previous - current;
  if (diff > 0) {
    return (
      <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
        <TrendingUp className="h-4 w-4" />+{diff}
      </span>
    );
  } else if (diff < 0) {
    return (
      <span className="flex items-center gap-1 text-red-600 text-sm font-medium">
        <TrendingDown className="h-4 w-4" />
        {diff}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-gray-400 text-sm">
      <Minus className="h-4 w-4" />
    </span>
  );
}

export function RankingsListing() {
  const [selectedAgency, setSelectedAgency] = useState("nirf");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredColleges = rankedColleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-400" />
              <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30">
                2024 Rankings
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              College Rankings India
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
              Compare colleges across NIRF, QS, THE, and Collegium rankings
            </p>

            {/* Search Box */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ranking Agencies */}
      <section className="py-4 md:py-6 border-b bg-white sticky top-16 z-40 overflow-x-auto">
        <div className="container">
          <div className="flex items-center gap-3 md:gap-4 pb-2 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
            {rankingAgencies.map((agency) => (
              <button
                key={agency.id}
                onClick={() => setSelectedAgency(agency.id)}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-xl border-2 transition-all whitespace-nowrap ${
                  selectedAgency === agency.id
                    ? "border-blue-900 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <span className="text-xl md:text-2xl">{agency.logo}</span>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                    {agency.name} {agency.year}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 hidden sm:block">
                    {agency.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 md:py-6 bg-white border-b overflow-x-auto">
        <div className="container">
          <div className="flex items-center gap-2 pb-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-6 md:py-8">
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-900">
                {rankingAgencies.find((a) => a.id === selectedAgency)?.fullName}{" "}
                Rankings
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {filteredColleges.length} colleges ranked
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>

          {/* Rankings Cards - Mobile */}
          <div className="lg:hidden space-y-4">
            {filteredColleges.map((college) => (
              <div
                key={college.slug}
                className="bg-white rounded-xl border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`text-2xl font-bold ${
                        college.rank <= 3 ? "text-yellow-500" : "text-gray-700"
                      }`}
                    >
                      #{college.rank}
                    </span>
                    <RankChange
                      current={college.rank}
                      previous={college.previousRank}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/college/${college.slug}`}
                      className="text-base font-semibold text-gray-900 hover:text-blue-900 transition-colors line-clamp-2"
                    >
                      {college.name}
                    </Link>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      <span className="truncate">{college.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {college.streams.slice(0, 2).map((stream) => (
                        <Badge
                          key={stream}
                          variant="secondary"
                          className="text-xs"
                        >
                          {stream}
                        </Badge>
                      ))}
                      {college.streams.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{college.streams.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-900">
                        {college.score.toFixed(1)}
                      </div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{college.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/college/${college.slug}`}>View</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Rankings Table - Desktop */}
          <div className="hidden lg:block bg-white rounded-xl border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b text-sm font-semibold text-gray-700">
              <div className="col-span-1 text-center">Rank</div>
              <div className="col-span-5">College</div>
              <div className="col-span-2 text-center">Score</div>
              <div className="col-span-2 text-center">Rating</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {/* Table Body */}
            <div className="divide-y">
              {filteredColleges.map((college) => (
                <div
                  key={college.slug}
                  className="grid grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors items-center"
                >
                  {/* Rank */}
                  <div className="col-span-1 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`text-2xl font-bold ${
                          college.rank <= 3
                            ? "text-yellow-500"
                            : "text-gray-700"
                        }`}
                      >
                        #{college.rank}
                      </span>
                      <RankChange
                        current={college.rank}
                        previous={college.previousRank}
                      />
                    </div>
                  </div>

                  {/* College Info */}
                  <div className="col-span-5">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-8 w-8 text-blue-900" />
                      </div>
                      <div>
                        <Link
                          href={`/college/${college.slug}`}
                          className="text-lg font-semibold text-gray-900 hover:text-blue-900 transition-colors"
                        >
                          {college.name}
                        </Link>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {college.location}
                          <Badge variant="outline" className="ml-2">
                            {college.type}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {college.streams.map((stream) => (
                            <Badge
                              key={stream}
                              variant="secondary"
                              className="text-xs"
                            >
                              {stream}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-2 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full text-white">
                      <div>
                        <div className="text-xl font-bold">
                          {college.score.toFixed(1)}
                        </div>
                        <div className="text-[10px] opacity-80">/ 100</div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="col-span-2 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-50 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-gray-900">
                        {college.rating}
                      </span>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="col-span-2 text-center">
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="w-full" asChild>
                        <Link href={`/college/${college.slug}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full gap-1"
                      >
                        <ExternalLink className="h-3 w-3" />
                        Compare
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-6 md:mt-8">
            <Button variant="outline" size="lg">
              Load More Rankings
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ranking Methodology */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            How Rankings Are Calculated
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Teaching",
                percentage: 30,
                description:
                  "Learning environment, teacher-student ratio, faculty qualifications",
              },
              {
                title: "Research",
                percentage: 30,
                description:
                  "Research output, publications, citations, industry funding",
              },
              {
                title: "Graduation Outcomes",
                percentage: 20,
                description: "Placement rates, median salary, higher education",
              },
              {
                title: "Perception",
                percentage: 20,
                description: "Employer perception, peer perception, outreach",
              },
            ].map((criterion, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 md:p-6 text-center"
              >
                <div className="text-2xl md:text-4xl font-bold text-blue-900 mb-2">
                  {criterion.percentage}%
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  {criterion.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                  {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 md:py-12 bg-blue-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: "15,000+", label: "Colleges Ranked" },
              { value: "4", label: "Ranking Agencies" },
              { value: "50+", label: "Categories" },
              { value: "2024", label: "Latest Rankings" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
