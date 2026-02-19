"use client";

import * as React from "react";
import Link from "next/link";
import { Calendar, ArrowRight, Bell, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge, Button } from "@/components/ui";

interface Exam {
  id: string;
  slug: string;
  name: string;
  fullName: string;
  examDate: string;
  registrationEnd?: string;
  level: "national" | "state" | "university";
  collegesAccepting: number;
  status: "registration-open" | "upcoming" | "result-out";
}

const topExams: Exam[] = [
  {
    id: "1",
    slug: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    examDate: "April 1-15, 2026",
    registrationEnd: "Feb 28, 2026",
    level: "national",
    collegesAccepting: 3500,
    status: "registration-open",
  },
  {
    id: "2",
    slug: "neet",
    name: "NEET UG",
    fullName: "National Eligibility cum Entrance Test",
    examDate: "May 3, 2026",
    registrationEnd: "Mar 15, 2026",
    level: "national",
    collegesAccepting: 1375,
    status: "upcoming",
  },
  {
    id: "3",
    slug: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    examDate: "Nov 28, 2025",
    level: "national",
    collegesAccepting: 1200,
    status: "result-out",
  },
  {
    id: "4",
    slug: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    examDate: "Feb 1-16, 2026",
    registrationEnd: "Oct 15, 2025",
    level: "national",
    collegesAccepting: 900,
    status: "upcoming",
  },
  {
    id: "5",
    slug: "cuet",
    name: "CUET UG",
    fullName: "Common University Entrance Test",
    examDate: "May 11-20, 2026",
    registrationEnd: "Apr 10, 2026",
    level: "national",
    collegesAccepting: 580,
    status: "upcoming",
  },
  {
    id: "6",
    slug: "clat",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    examDate: "Dec 1, 2025",
    registrationEnd: "Nov 15, 2025",
    level: "national",
    collegesAccepting: 24,
    status: "registration-open",
  },
];

const statusConfig = {
  "registration-open": {
    label: "Registration Open",
    className: "bg-green-100 text-green-700",
  },
  upcoming: {
    label: "Upcoming",
    className: "bg-blue-100 text-blue-700",
  },
  "result-out": {
    label: "Result Out",
    className: "bg-purple-100 text-purple-700",
  },
};

function ExamCard({ exam }: { exam: Exam }) {
  const status = statusConfig[exam.status];

  return (
    <Link
      href={`/exams/${exam.slug}`}
      className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-jirs-blue/30 transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-jirs-blue transition-colors">
            {exam.name}
          </h3>
          <p className="text-sm text-gray-500 truncate max-w-[200px]">
            {exam.fullName}
          </p>
        </div>
        <Badge className={status.className}>{status.label}</Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">Exam: {exam.examDate}</span>
        </div>
        {exam.registrationEnd && (
          <div className="flex items-center gap-2 text-sm">
            <Bell className="w-4 h-4 text-orange-500" />
            <span className="text-orange-600 font-medium">
              Register by {exam.registrationEnd}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-sm text-gray-500">
          {exam.collegesAccepting.toLocaleString()} colleges accepting
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-jirs-blue group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  );
}

export function TopExams() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Top Entrance Exams
            </h2>
            <p className="text-gray-500 mt-1">
              Stay updated with important exam dates and registrations
            </p>
          </div>
          <Link
            href="/exams"
            className="hidden sm:flex items-center gap-1 text-jirs-blue font-medium hover:underline"
          >
            View all exams
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/exams"
            className="inline-flex items-center gap-1 text-jirs-blue font-medium"
          >
            View all exams
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
