"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  Clock,
  Building2,
  GraduationCap,
  IndianRupee,
  BookOpen,
  Briefcase,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Course {
  id: string;
  name: string;
  slug: string;
  fullName: string;
  level: "Bachelors" | "Masters" | "Doctorate" | "Diploma" | "Certificate";
  stream: string;
  duration: string;
  mode: string[];
  avgFees: number;
  colleges: number;
  description: string;
  eligibility: string;
  icon: string;
  popularExams: string[];
  careers: string[];
}

const courses: Course[] = [
  {
    id: "1",
    name: "B.Tech",
    slug: "btech",
    fullName: "Bachelor of Technology",
    level: "Bachelors",
    stream: "Engineering",
    duration: "4 Years",
    mode: ["Full-time"],
    avgFees: 250000,
    colleges: 6361,
    description:
      "B.Tech is a professional undergraduate engineering degree awarded after completion of four years of academic study.",
    eligibility: "10+2 with PCM, minimum 60%",
    icon: "⚙️",
    popularExams: ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"],
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Product Manager",
      "Consultant",
    ],
  },
  {
    id: "2",
    name: "MBA",
    slug: "mba",
    fullName: "Master of Business Administration",
    level: "Masters",
    stream: "Management",
    duration: "2 Years",
    mode: ["Full-time", "Part-time", "Online"],
    avgFees: 800000,
    colleges: 8001,
    description:
      "MBA is a postgraduate degree focused on business administration and management skills.",
    eligibility: "Bachelor's degree with minimum 50%",
    icon: "📊",
    popularExams: ["CAT", "XAT", "GMAT", "MAT", "CMAT"],
    careers: [
      "Business Analyst",
      "Marketing Manager",
      "Finance Manager",
      "Consultant",
    ],
  },
  {
    id: "3",
    name: "MBBS",
    slug: "mbbs",
    fullName: "Bachelor of Medicine and Bachelor of Surgery",
    level: "Bachelors",
    stream: "Medical",
    duration: "5.5 Years",
    mode: ["Full-time"],
    avgFees: 500000,
    colleges: 706,
    description:
      "MBBS is an undergraduate degree for aspiring doctors and medical practitioners.",
    eligibility: "10+2 with PCB, minimum 50%, NEET qualified",
    icon: "⚕️",
    popularExams: ["NEET UG"],
    careers: ["Doctor", "Surgeon", "Specialist", "Medical Researcher"],
  },
  {
    id: "4",
    name: "B.Com",
    slug: "bcom",
    fullName: "Bachelor of Commerce",
    level: "Bachelors",
    stream: "Commerce",
    duration: "3 Years",
    mode: ["Full-time", "Online"],
    avgFees: 81000,
    colleges: 6944,
    description:
      "B.Com is an undergraduate degree in commerce, focusing on accounting, finance, and business.",
    eligibility: "10+2 with Commerce, minimum 50%",
    icon: "💰",
    popularExams: ["CUET", "IPU CET", "BHU UET"],
    careers: ["Accountant", "Tax Consultant", "Financial Analyst", "Auditor"],
  },
  {
    id: "5",
    name: "LLB",
    slug: "llb",
    fullName: "Bachelor of Laws",
    level: "Bachelors",
    stream: "Law",
    duration: "3-5 Years",
    mode: ["Full-time"],
    avgFees: 150000,
    colleges: 1200,
    description:
      "LLB is an undergraduate law degree that prepares students for legal practice.",
    eligibility: "10+2 for 5-year LLB, Bachelor's for 3-year LLB",
    icon: "⚖️",
    popularExams: ["CLAT", "AILET", "LSAT"],
    careers: ["Lawyer", "Legal Advisor", "Judge", "Corporate Counsel"],
  },
  {
    id: "6",
    name: "B.Sc",
    slug: "bsc",
    fullName: "Bachelor of Science",
    level: "Bachelors",
    stream: "Science",
    duration: "3 Years",
    mode: ["Full-time"],
    avgFees: 60000,
    colleges: 5713,
    description:
      "B.Sc is an undergraduate degree in natural sciences like Physics, Chemistry, Biology, Mathematics.",
    eligibility: "10+2 with Science, minimum 50%",
    icon: "🔬",
    popularExams: ["CUET", "NEST", "JAM"],
    careers: ["Scientist", "Researcher", "Lab Technician", "Data Analyst"],
  },
  {
    id: "7",
    name: "M.Tech",
    slug: "mtech",
    fullName: "Master of Technology",
    level: "Masters",
    stream: "Engineering",
    duration: "2 Years",
    mode: ["Full-time"],
    avgFees: 200000,
    colleges: 3500,
    description:
      "M.Tech is a postgraduate engineering degree for specialization in technical fields.",
    eligibility: "B.Tech/B.E. with minimum 60%",
    icon: "🔧",
    popularExams: ["GATE"],
    careers: ["Research Engineer", "Technical Lead", "Professor", "Scientist"],
  },
  {
    id: "8",
    name: "BBA",
    slug: "bba",
    fullName: "Bachelor of Business Administration",
    level: "Bachelors",
    stream: "Management",
    duration: "3 Years",
    mode: ["Full-time"],
    avgFees: 150000,
    colleges: 4500,
    description:
      "BBA is an undergraduate degree in business management and administration.",
    eligibility: "10+2 with minimum 50%",
    icon: "💼",
    popularExams: ["IPU CET", "NPAT", "SET"],
    careers: [
      "Business Manager",
      "Entrepreneur",
      "Marketing Executive",
      "HR Manager",
    ],
  },
];

const levels = [
  "All",
  "Bachelors",
  "Masters",
  "Doctorate",
  "Diploma",
  "Certificate",
];
const streams = [
  "All",
  "Engineering",
  "Management",
  "Medical",
  "Commerce",
  "Law",
  "Science",
  "Arts",
];

export function CoursesListing() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedLevel, setSelectedLevel] = React.useState("All");
  const [selectedStream, setSelectedStream] = React.useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesStream =
      selectedStream === "All" || course.stream === selectedStream;
    return matchesSearch && matchesLevel && matchesStream;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-jirs-blue text-white py-10">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Explore Courses
          </h1>
          <p className="text-blue-200 mb-6">
            Find the right course for your career goals from 50,000+ programs
            across India
          </p>
          <div className="max-w-xl">
            <Input
              placeholder="Search courses like B.Tech, MBA, MBBS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="w-5 h-5" />}
              className="bg-white text-gray-900 h-12"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b sticky top-16 lg:top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Level Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    selectedLevel === level
                      ? "bg-jirs-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  )}
                >
                  {level}
                </button>
              ))}
            </div>

            {/* Stream Filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {streams.map((stream) => (
                <button
                  key={stream}
                  onClick={() => setSelectedStream(stream)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                    selectedStream === stream
                      ? "bg-jirs-yellow text-jirs-blue"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                  )}
                >
                  {stream}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                        {course.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-jirs-blue transition-colors">
                          {course.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {course.fullName}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" size="sm">
                      {course.level}
                    </Badge>
                    <Badge variant="outline" size="sm">
                      {course.stream}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 mx-auto text-gray-400 mb-1" />
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {course.duration}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <IndianRupee className="w-4 h-4 mx-auto text-gray-400 mb-1" />
                      <p className="text-xs text-gray-500">Avg Fees</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatCurrency(course.avgFees)}
                      </p>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <Building2 className="w-4 h-4 mx-auto text-gray-400 mb-1" />
                      <p className="text-xs text-gray-500">Colleges</p>
                      <p className="text-sm font-semibold text-gray-900">
                        {formatNumber(course.colleges)}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Popular Exams */}
                  <div className="flex flex-wrap gap-1">
                    {course.popularExams.slice(0, 3).map((exam) => (
                      <Badge
                        key={exam}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                      >
                        {exam}
                      </Badge>
                    ))}
                    {course.popularExams.length > 3 && (
                      <Badge variant="outline" size="sm" className="text-xs">
                        +{course.popularExams.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 border-t flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    {course.mode.join(", ")}
                  </span>
                  <span className="text-sm text-jirs-blue font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
