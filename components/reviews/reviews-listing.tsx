"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Star,
  ThumbsUp,
  Filter,
  ChevronDown,
  Building2,
  User,
  Calendar,
  MessageSquare,
  TrendingUp,
  Award,
  GraduationCap,
  Briefcase,
  Home,
  Users,
  CheckCircle2,
  Flag,
} from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Review {
  id: string;
  college: {
    name: string;
    slug: string;
    logo: string;
    location: string;
  };
  user: {
    name: string;
    avatar: string;
    course: string;
    batch: string;
    isVerified: boolean;
  };
  rating: {
    overall: number;
    academics: number;
    placements: number;
    faculty: number;
    infrastructure: number;
    campusLife: number;
  };
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  helpful: number;
  createdAt: string;
}

const reviews: Review[] = [
  {
    id: "1",
    college: {
      name: "Indian Institute of Technology Bombay",
      slug: "iit-bombay",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
      location: "Mumbai, Maharashtra",
    },
    user: {
      name: "Rahul M.",
      avatar: "https://i.pravatar.cc/100?img=1",
      course: "B.Tech Computer Science",
      batch: "2020-2024",
      isVerified: true,
    },
    rating: {
      overall: 4.8,
      academics: 5,
      placements: 5,
      faculty: 4.5,
      infrastructure: 4.8,
      campusLife: 4.7,
    },
    title: "World-class education with unparalleled opportunities",
    content:
      "My 4 years at IIT Bombay have been transformative. The academic rigor is intense but rewarding. Faculty members are experts in their fields and always approachable. The placement season was incredible - multiple offers from top tech companies and startups.",
    pros: [
      "Excellent placement opportunities with top companies",
      "World-class faculty and research facilities",
      "Strong alumni network globally",
      "Beautiful campus with great infrastructure",
    ],
    cons: [
      "Intense academic pressure at times",
      "Hostel accommodation can be crowded",
    ],
    helpful: 234,
    createdAt: "2024-12-15T10:00:00Z",
  },
  {
    id: "2",
    college: {
      name: "BITS Pilani",
      slug: "bits-pilani",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
      location: "Pilani, Rajasthan",
    },
    user: {
      name: "Ananya S.",
      avatar: "https://i.pravatar.cc/100?img=2",
      course: "M.Sc Economics",
      batch: "2019-2024",
      isVerified: true,
    },
    rating: {
      overall: 4.5,
      academics: 4.8,
      placements: 4.5,
      faculty: 4.2,
      infrastructure: 4.3,
      campusLife: 4.8,
    },
    title: "The perfect blend of academics and college life",
    content:
      "BITS Pilani offers incredible flexibility with its Practice School program. The dual degree option allowed me to pursue both engineering and economics. Campus life is vibrant with numerous clubs and fests. Placements are excellent, especially for CS and electronics branches.",
    pros: [
      "Flexible curriculum with no attendance requirements",
      "Practice School provides great industry exposure",
      "Vibrant campus life with amazing fests",
      "Strong entrepreneurship culture",
    ],
    cons: [
      "Located in a remote area",
      "Limited direct faculty interaction in some courses",
    ],
    helpful: 189,
    createdAt: "2024-11-28T14:30:00Z",
  },
  {
    id: "3",
    college: {
      name: "IIM Ahmedabad",
      slug: "iim-ahmedabad",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
      location: "Ahmedabad, Gujarat",
    },
    user: {
      name: "Vikram K.",
      avatar: "https://i.pravatar.cc/100?img=3",
      course: "MBA",
      batch: "2022-2024",
      isVerified: true,
    },
    rating: {
      overall: 4.9,
      academics: 5,
      placements: 5,
      faculty: 4.7,
      infrastructure: 4.5,
      campusLife: 4.6,
    },
    title: "Life-changing MBA experience",
    content:
      "IIM Ahmedabad lives up to its reputation. The case study methodology transforms your thinking. Peer learning is incredible - you learn as much from batchmates as from professors. Summer internships and final placements are phenomenal.",
    pros: [
      "Best-in-class placements with top consulting and finance firms",
      "Outstanding peer group from diverse backgrounds",
      "Case-based pedagogy develops analytical thinking",
      "Strong brand value recognized globally",
    ],
    cons: [
      "Very hectic schedule with little personal time",
      "Expensive program",
    ],
    helpful: 312,
    createdAt: "2024-12-20T09:00:00Z",
  },
  {
    id: "4",
    college: {
      name: "NIT Trichy",
      slug: "nit-trichy",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
      location: "Tiruchirappalli, Tamil Nadu",
    },
    user: {
      name: "Priya R.",
      avatar: "https://i.pravatar.cc/100?img=4",
      course: "B.Tech Electronics",
      batch: "2019-2023",
      isVerified: true,
    },
    rating: {
      overall: 4.4,
      academics: 4.5,
      placements: 4.3,
      faculty: 4.2,
      infrastructure: 4.4,
      campusLife: 4.5,
    },
    title: "Great value education with solid placements",
    content:
      "NIT Trichy provides excellent technical education at affordable fees. The campus is beautiful and well-maintained. Placements are competitive with good companies visiting. The technical clubs and Festember/Pragyan fests are highlights.",
    pros: [
      "Affordable fees for quality education",
      "Good placement opportunities",
      "Beautiful green campus",
      "Active technical clubs and fests",
    ],
    cons: [
      "Hot climate in Trichy",
      "Limited non-tech companies for placements",
    ],
    helpful: 145,
    createdAt: "2024-10-15T11:30:00Z",
  },
];

const ratingCategories = [
  {
    key: "academics",
    label: "Academics",
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    key: "placements",
    label: "Placements",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { key: "faculty", label: "Faculty", icon: <Users className="w-4 h-4" /> },
  {
    key: "infrastructure",
    label: "Infrastructure",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    key: "campusLife",
    label: "Campus Life",
    icon: <Home className="w-4 h-4" />,
  },
];

export function ReviewsListing() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("helpful");

  const filteredReviews = reviews.filter(
    (review) =>
      review.college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-collegium-blue text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Student Reviews
              </h1>
              <p className="text-blue-200">
                Read honest reviews from verified students to make informed
                decisions
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/write-review">
                <Button className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
                  Write a Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 lg:top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-80">
              <Input
                placeholder="Search reviews by college..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4" />}
              />
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-collegium-blue"
              >
                <option value="helpful">Most Helpful</option>
                <option value="recent">Most Recent</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="overflow-hidden">
                {/* College Header */}
                <div className="p-4 bg-gray-50 border-b flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white border overflow-hidden">
                    <img
                      src={review.college.logo}
                      alt={review.college.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/college/${review.college.slug}`}
                      className="font-semibold text-gray-900 hover:text-collegium-blue transition-colors line-clamp-1"
                    >
                      {review.college.name}
                    </Link>
                    <p className="text-sm text-gray-500">
                      {review.college.location}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xl font-bold text-gray-900">
                        {review.rating.overall}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Overall</p>
                  </div>
                </div>

                {/* Review Content */}
                <div className="p-6">
                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={review.user.avatar}
                      alt={review.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                          {review.user.name}
                        </span>
                        {review.user.isVerified && (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-500">
                        {review.user.course} • {review.user.batch}
                      </p>
                    </div>
                    <span className="ml-auto text-xs text-gray-400">
                      {formatDate(review.createdAt)}
                    </span>
                  </div>

                  {/* Title & Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {review.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{review.content}</p>

                  {/* Ratings Grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    {ratingCategories.map((cat) => (
                      <div key={cat.key} className="text-center">
                        <div className="text-lg font-bold text-collegium-blue">
                          {review.rating[cat.key as keyof typeof review.rating]}
                        </div>
                        <div className="text-xs text-gray-500">{cat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-green-700 mb-2">
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {review.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="text-sm text-green-800 flex items-start gap-2"
                          >
                            <span className="text-green-500 mt-0.5">+</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-red-700 mb-2">
                        Cons
                      </h4>
                      <ul className="space-y-1">
                        {review.cons.map((con, i) => (
                          <li
                            key={i}
                            className="text-sm text-red-800 flex items-start gap-2"
                          >
                            <span className="text-red-500 mt-0.5">−</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-collegium-blue transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      Helpful ({review.helpful})
                    </button>
                    <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
                      <Flag className="w-4 h-4" />
                      Report
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Write Review CTA */}
            <Card className="p-6 bg-collegium-blue text-white">
              <Award className="w-10 h-10 mb-3" />
              <h3 className="font-bold text-lg mb-2">Share Your Experience</h3>
              <p className="text-sm text-blue-200 mb-4">
                Help future students by writing an honest review of your college
              </p>
              <Link href="/write-review">
                <Button className="w-full bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
                  Write a Review
                </Button>
              </Link>
            </Card>

            {/* Top Reviewed Colleges */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-collegium-yellow" />
                Most Reviewed Colleges
              </h3>
              <div className="space-y-4">
                {[
                  { name: "IIT Bombay", reviews: 2341, rating: 4.8 },
                  { name: "IIT Delhi", reviews: 2156, rating: 4.9 },
                  { name: "IIM Ahmedabad", reviews: 1890, rating: 4.9 },
                  { name: "BITS Pilani", reviews: 1567, rating: 4.5 },
                  { name: "NIT Trichy", reviews: 1234, rating: 4.4 },
                ].map((college, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-gray-900 text-sm">
                        {college.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {college.reviews} reviews
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{college.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Review Guidelines */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Review Guidelines
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Be honest and specific about your experience
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Include both positives and areas for improvement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Keep it professional and respectful
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                  Avoid sharing personal information
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
