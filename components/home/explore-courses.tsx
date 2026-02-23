"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookOpen, ArrowRight, Clock, IndianRupee, Building2 } from "lucide-react";
import { Button } from "@/components/ui";

interface CourseInfo {
  name: string;
  slug: string;
  duration: string;
  avgFees: string;
  collegeCount: number;
}

const courseLevels = [
  { id: "bachelors", label: "Bachelors" },
  { id: "masters", label: "Masters" },
  { id: "doctorate", label: "Doctorate" },
  { id: "diploma", label: "Diploma" },
  { id: "certificate", label: "Certificate" },
];

const coursesByLevel: Record<string, CourseInfo[]> = {
  bachelors: [
    { name: "B.Tech", slug: "btech", duration: "4 Years", avgFees: "₹2.5L", collegeCount: 6361 },
    { name: "B.Com", slug: "bcom", duration: "3 Years", avgFees: "₹81K", collegeCount: 6944 },
    { name: "B.Ed", slug: "bed", duration: "2 Years", avgFees: "₹87K", collegeCount: 5619 },
    { name: "B.Sc", slug: "bsc", duration: "3 Years", avgFees: "₹95K", collegeCount: 5713 },
    { name: "BA", slug: "ba", duration: "3 Years", avgFees: "₹45K", collegeCount: 4890 },
    { name: "BBA", slug: "bba", duration: "3 Years", avgFees: "₹2.1L", collegeCount: 4500 },
    { name: "BCA", slug: "bca", duration: "3 Years", avgFees: "₹1.8L", collegeCount: 3100 },
    { name: "MBBS", slug: "mbbs", duration: "5.5 Years", avgFees: "₹25L", collegeCount: 2497 },
    { name: "B.Pharm", slug: "bpharm", duration: "4 Years", avgFees: "₹1.5L", collegeCount: 2100 },
    { name: "LLB", slug: "llb", duration: "3 Years", avgFees: "₹1.2L", collegeCount: 1200 },
  ],
  masters: [
    { name: "MBA", slug: "mba", duration: "2 Years", avgFees: "₹8L", collegeCount: 8001 },
    { name: "M.Tech", slug: "mtech", duration: "2 Years", avgFees: "₹1.5L", collegeCount: 3200 },
    { name: "M.Sc", slug: "msc", duration: "2 Years", avgFees: "₹65K", collegeCount: 3400 },
    { name: "MA", slug: "ma", duration: "2 Years", avgFees: "₹35K", collegeCount: 2800 },
    { name: "MCA", slug: "mca", duration: "2 Years", avgFees: "₹1.2L", collegeCount: 2800 },
    { name: "M.Com", slug: "mcom", duration: "2 Years", avgFees: "₹25K", collegeCount: 2200 },
    { name: "LLM", slug: "llm", duration: "1 Year", avgFees: "₹1L", collegeCount: 800 },
    { name: "M.Ed", slug: "med", duration: "2 Years", avgFees: "₹50K", collegeCount: 1500 },
  ],
  doctorate: [
    { name: "PhD", slug: "phd", duration: "3-5 Years", avgFees: "₹50K", collegeCount: 1800 },
    { name: "MD", slug: "md", duration: "3 Years", avgFees: "₹20L", collegeCount: 600 },
    { name: "MS (Medical)", slug: "ms-medical", duration: "3 Years", avgFees: "₹18L", collegeCount: 500 },
  ],
  diploma: [
    { name: "Polytechnic", slug: "polytechnic", duration: "3 Years", avgFees: "₹45K", collegeCount: 3500 },
    { name: "PGDM", slug: "pgdm", duration: "2 Years", avgFees: "₹12L", collegeCount: 1200 },
    { name: "D.Pharm", slug: "dpharm", duration: "2 Years", avgFees: "₹60K", collegeCount: 1100 },
    { name: "GNM", slug: "gnm", duration: "3 Years", avgFees: "₹80K", collegeCount: 900 },
  ],
  certificate: [
    { name: "ITI", slug: "iti", duration: "1-2 Years", avgFees: "₹20K", collegeCount: 5000 },
    { name: "ANM", slug: "anm", duration: "2 Years", avgFees: "₹60K", collegeCount: 700 },
    { name: "Certificate in Yoga", slug: "yoga", duration: "6 Months", avgFees: "₹15K", collegeCount: 300 },
  ],
};

export function ExploreCourses() {
  const [activeLevel, setActiveLevel] = React.useState("bachelors");
  const courses = coursesByLevel[activeLevel] || [];

  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-collegium-blue" />
              Explore Courses
            </h2>
            <p className="text-gray-600 mt-1">Find the right course for your career</p>
          </div>
          <Link href="/courses">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              All Courses
            </Button>
          </Link>
        </div>

        {/* Level Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {courseLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={cn(
                "flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                activeLevel === level.id
                  ? "bg-collegium-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-collegium-blue"
              )}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group bg-white border rounded-xl p-4 hover:border-collegium-blue hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-collegium-blue transition-colors mb-3">
                {course.name}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-4 h-4 text-gray-400" />
                  <span>{course.avgFees} Avg Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <span>{course.collegeCount.toLocaleString("en-IN")} Colleges</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Course Finder CTA */}
        <div className="mt-8 bg-gradient-to-r from-collegium-blue to-blue-800 rounded-xl p-6 text-white text-center">
          <h3 className="text-lg font-bold mb-2">Not sure which course to pick?</h3>
          <p className="text-blue-200 mb-4">Take our Course Finder quiz and get personalized recommendations</p>
          <Link href="/course-finder">
            <Button className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
              Find My Course
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
