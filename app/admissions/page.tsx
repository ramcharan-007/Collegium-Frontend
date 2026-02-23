"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  Search,
  TrendingUp,
} from "lucide-react";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const admissionGuides = [
  {
    id: "engineering",
    title: "Engineering Admission Guide 2025",
    description: "Complete guide covering JEE Main, JEE Advanced, BITSAT, state CETs and counselling process for B.Tech admissions.",
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT CET", "KCET"],
    icon: "🔧",
    colleges: 5400,
    lastUpdated: "Jan 2025",
  },
  {
    id: "medical",
    title: "Medical Admission Guide 2025",
    description: "Everything about NEET UG/PG, AIIMS, JIPMER admission process, counselling rounds, and seat allotment.",
    exams: ["NEET UG", "NEET PG", "AIIMS", "JIPMER"],
    icon: "🏥",
    colleges: 2100,
    lastUpdated: "Jan 2025",
  },
  {
    id: "mba",
    title: "MBA Admission Guide 2025",
    description: "Step-by-step guide for CAT, XAT, SNAP, MAT, and MBA admission process at IIMs, IITs, and top B-schools.",
    exams: ["CAT", "XAT", "SNAP", "MAT", "NMAT"],
    icon: "💼",
    colleges: 3200,
    lastUpdated: "Jan 2025",
  },
  {
    id: "law",
    title: "Law Admission Guide 2025",
    description: "Complete guide for CLAT, AILET, LSAT admissions in NLUs and top law colleges.",
    exams: ["CLAT", "AILET", "LSAT", "MH CET Law"],
    icon: "⚖️",
    colleges: 900,
    lastUpdated: "Dec 2024",
  },
  {
    id: "design",
    title: "Design Admission Guide 2025",
    description: "NID, NIFT, UCEED, and CEED admission process for B.Des and M.Des programs.",
    exams: ["NID DAT", "NIFT", "UCEED", "CEED"],
    icon: "🎨",
    colleges: 600,
    lastUpdated: "Dec 2024",
  },
  {
    id: "science",
    title: "Science UG/PG Admission Guide 2025",
    description: "CUET, JAM, and university-specific entrance exams for B.Sc and M.Sc programs.",
    exams: ["CUET", "IIT JAM", "JEST", "TIFR GS"],
    icon: "🔬",
    colleges: 1800,
    lastUpdated: "Jan 2025",
  },
  {
    id: "abroad",
    title: "Study Abroad Application Guide 2025",
    description: "GRE, GMAT, TOEFL, IELTS preparation and university application process for MS, MBA abroad.",
    exams: ["GRE", "GMAT", "TOEFL", "IELTS", "SAT"],
    icon: "🌍",
    colleges: 500,
    lastUpdated: "Jan 2025",
  },
  {
    id: "pharmacy",
    title: "Pharmacy Admission Guide 2025",
    description: "GPAT, NIPER JEE, and state-level entrance exam guide for B.Pharm and M.Pharm admissions.",
    exams: ["GPAT", "NIPER JEE", "State CETs"],
    icon: "💊",
    colleges: 720,
    lastUpdated: "Dec 2024",
  },
];

const timeline = [
  { month: "Jan-Feb", events: ["CAT Results", "XAT Exam", "JEE Main Registration", "NEET Registration begins"] },
  { month: "Mar-Apr", events: ["JEE Main Exam", "CLAT Exam", "Board Exams", "NEET UG Exam (May)"] },
  { month: "May-Jun", events: ["JEE Advanced", "NEET Results", "Board Results", "CUET UG Exam"] },
  { month: "Jul-Aug", events: ["JoSAA Counselling", "NEET Counselling", "CAP Rounds", "Classes begin"] },
  { month: "Sep-Oct", events: ["Spot Rounds", "CAT Registration", "SNAP Registration", "MBA season starts"] },
  { month: "Nov-Dec", events: ["CAT Exam", "SNAP Exam", "MAT Exam", "JEE Main registration (Jan session)"] },
];

export default function AdmissionsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filtered = admissionGuides.filter(
    (guide) =>
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.exams.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-collegium-blue py-12">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Admission Guides", href: "/admissions" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Admission Guides 2025
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Step-by-step admission guides for every stream — from entrance exams
            to counselling and seat allotment
          </p>

          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by stream or exam..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-collegium-yellow outline-none"
            />
          </div>
        </div>
      </div>

      <div className="container py-10">
        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {filtered.map((guide) => (
            <Card key={guide.id} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{guide.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-collegium-blue transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-3">
                      {guide.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {guide.exams.map((exam) => (
                        <Badge key={exam} variant="secondary" className="text-xs">
                          {exam}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5" />
                        {guide.colleges.toLocaleString()} colleges
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        Updated {guide.lastUpdated}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex gap-3">
                  <Link href={`/admissions/${guide.id}`} className="flex-1">
                    <Button className="w-full" size="sm">
                      Read Full Guide
                    </Button>
                  </Link>
                  <Link href={`/exams`}>
                    <Button variant="outline" size="sm">
                      View Exams
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Admission Timeline */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-collegium-blue" />
          Admission Calendar 2025
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {timeline.map((period) => (
            <Card key={period.month}>
              <CardContent className="p-4">
                <div className="font-bold text-collegium-blue text-sm mb-3">{period.month}</div>
                <div className="space-y-2">
                  {period.events.map((event) => (
                    <div
                      key={event}
                      className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 bg-collegium-blue rounded-full mt-1 shrink-0" />
                      {event}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-collegium-blue to-blue-800 text-white overflow-hidden">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Not sure which course is right for you?
              </h2>
              <p className="text-blue-200">
                Use our Course Finder tool to discover colleges and courses that match your interests, budget, and location.
              </p>
            </div>
            <Link href="/course-finder">
              <Button
                size="lg"
                className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400 whitespace-nowrap"
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Try Course Finder
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
