import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronRight, Search, Bell } from "lucide-react";
import { Badge, Button, Card, CardContent } from "@/components/ui";

export const metadata: Metadata = {
  title: "Entrance Exams 2025-2026 - Dates, Eligibility, Syllabus | Collegium",
  description:
    "Find all entrance exams in India - JEE, NEET, CAT, GATE, CUET, CLAT, and more. Get exam dates, eligibility, syllabus, and application details.",
};

const exams = [
  {
    id: "1",
    slug: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    examDate: "April 1-15, 2026",
    registrationEnd: "Dec 20, 2025",
    level: "National",
    colleges: 3500,
    status: "registration-open",
    category: "Engineering",
  },
  {
    id: "2",
    slug: "neet",
    name: "NEET UG",
    fullName: "National Eligibility cum Entrance Test",
    examDate: "May 3, 2026",
    registrationEnd: "Mar 15, 2026",
    level: "National",
    colleges: 1375,
    status: "upcoming",
    category: "Medical",
  },
  {
    id: "3",
    slug: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    examDate: "Nov 28, 2025",
    registrationEnd: "Closed",
    level: "National",
    colleges: 1200,
    status: "result-out",
    category: "Management",
  },
  {
    id: "4",
    slug: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    examDate: "Feb 1-16, 2026",
    registrationEnd: "Oct 15, 2025",
    level: "National",
    colleges: 900,
    status: "upcoming",
    category: "Engineering",
  },
  {
    id: "5",
    slug: "cuet",
    name: "CUET UG",
    fullName: "Common University Entrance Test",
    examDate: "May 11-20, 2026",
    registrationEnd: "Apr 10, 2026",
    level: "National",
    colleges: 580,
    status: "upcoming",
    category: "General",
  },
  {
    id: "6",
    slug: "clat",
    name: "CLAT",
    fullName: "Common Law Admission Test",
    examDate: "Dec 1, 2025",
    registrationEnd: "Nov 15, 2025",
    level: "National",
    colleges: 24,
    status: "registration-open",
    category: "Law",
  },
  {
    id: "7",
    slug: "jee-advanced",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination Advanced",
    examDate: "May 25, 2026",
    registrationEnd: "May 5, 2026",
    level: "National",
    colleges: 23,
    status: "upcoming",
    category: "Engineering",
  },
  {
    id: "8",
    slug: "bitsat",
    name: "BITSAT",
    fullName: "BITS Admission Test",
    examDate: "May 20-30, 2026",
    registrationEnd: "Apr 15, 2026",
    level: "University",
    colleges: 4,
    status: "upcoming",
    category: "Engineering",
  },
];

const categories = [
  "All",
  "Engineering",
  "Medical",
  "Management",
  "Law",
  "General",
];

const statusConfig: Record<string, { label: string; className: string }> = {
  "registration-open": {
    label: "Registration Open",
    className: "bg-green-100 text-green-700",
  },
  upcoming: { label: "Upcoming", className: "bg-blue-100 text-blue-700" },
  "result-out": {
    label: "Result Out",
    className: "bg-purple-100 text-purple-700",
  },
};

export default function ExamsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-jirs-blue text-white py-12">
        <div className="container">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Entrance Exams 2025-2026
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Find all entrance exams in India. Get dates, eligibility, syllabus,
            and apply online.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-20">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search exams..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    category === "All"
                      ? "bg-jirs-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Exams List */}
      <div className="container py-8">
        <div className="grid gap-4">
          {exams.map((exam) => (
            <Link key={exam.id} href={`/exams/${exam.slug}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h2 className="text-xl font-bold text-gray-900">
                          {exam.name}
                        </h2>
                        <Badge className={statusConfig[exam.status].className}>
                          {statusConfig[exam.status].label}
                        </Badge>
                        <Badge variant="outline">{exam.category}</Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{exam.fullName}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Exam: {exam.examDate}
                        </div>
                        {exam.status === "registration-open" && (
                          <div className="flex items-center gap-1 text-orange-600 font-medium">
                            <Bell className="w-4 h-4" />
                            Apply by: {exam.registrationEnd}
                          </div>
                        )}
                        <div>
                          {exam.colleges.toLocaleString()} colleges accepting
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      {exam.status === "registration-open" && (
                        <Button variant="primary" size="sm">
                          Apply Now
                        </Button>
                      )}
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
