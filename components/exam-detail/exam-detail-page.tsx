"use client";

import * as React from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  FileText,
  Download,
  Bell,
  Check,
  ChevronRight,
  ArrowRight,
  MapPin,
  Users,
  Award,
  BookOpen,
  HelpCircle,
  Calculator,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Badge,
  Tabs,
  TabsListUnderline,
  TabsTriggerUnderline,
  TabsContent,
  Card,
  CardContent,
} from "@/components/ui";

// Mock exam data
const examData = {
  id: "1",
  slug: "jee-main",
  name: "JEE Main",
  fullName: "Joint Entrance Examination Main",
  description:
    "JEE Main is a national level entrance exam conducted for admission to B.Tech/B.E., B.Arch, and B.Planning courses in NITs, IIITs, CFTIs, and other participating institutes.",
  conductingBody: "NTA (National Testing Agency)",
  level: "National",
  mode: "Computer Based Test (CBT)",
  frequency: "Twice a year (January & April)",
  year: 2026,
  status: "registration-open",
  importantDates: [
    {
      event: "Application Form Release",
      date: "Nov 15, 2025",
      status: "completed",
    },
    { event: "Last Date to Apply", date: "Dec 20, 2025", status: "upcoming" },
    { event: "Admit Card Release", date: "Mar 20, 2026", status: "upcoming" },
    {
      event: "Session 1 Exam Date",
      date: "Apr 1-15, 2026",
      status: "upcoming",
    },
    { event: "Session 1 Result", date: "Apr 30, 2026", status: "upcoming" },
    {
      event: "Session 2 Exam Date",
      date: "May 1-15, 2026",
      status: "upcoming",
    },
  ],
  eligibility: {
    age: "No age limit",
    qualification:
      "Passed 12th (or appearing) with Physics, Mathematics, and one from Chemistry/Biology/Biotechnology/Technical Vocational",
    percentage:
      "75% aggregate (65% for SC/ST) or Top 20 percentile in respective board",
    attempts: "3 consecutive years",
  },
  examPattern: {
    sections: [
      { name: "Physics", questions: 30, marks: 100, type: "MCQ + Numerical" },
      { name: "Chemistry", questions: 30, marks: 100, type: "MCQ + Numerical" },
      {
        name: "Mathematics",
        questions: 30,
        marks: 100,
        type: "MCQ + Numerical",
      },
    ],
    totalQuestions: 90,
    totalMarks: 300,
    duration: "3 Hours",
    marking: "+4 for correct, -1 for wrong (MCQ only)",
    language: "13 Languages including English, Hindi, Gujarati, Bengali, etc.",
  },
  syllabus: [
    {
      subject: "Physics",
      topics: [
        "Mechanics",
        "Electrodynamics",
        "Optics",
        "Modern Physics",
        "Thermodynamics",
        "Waves",
      ],
    },
    {
      subject: "Chemistry",
      topics: [
        "Physical Chemistry",
        "Organic Chemistry",
        "Inorganic Chemistry",
      ],
    },
    {
      subject: "Mathematics",
      topics: [
        "Algebra",
        "Calculus",
        "Coordinate Geometry",
        "Trigonometry",
        "Statistics",
        "Vectors",
      ],
    },
  ],
  applicationFee: {
    general: 1000,
    obc: 1000,
    sc: 500,
    st: 500,
    female: 500,
    pwd: 500,
  },
  collegesAccepting: 3500,
  registeredCandidates: 1200000,
  topColleges: [
    "NIT Trichy",
    "NIT Surathkal",
    "NIT Warangal",
    "IIIT Hyderabad",
    "IIIT Bangalore",
  ],
};

function DateCard({
  event,
  date,
  status,
}: {
  event: string;
  date: string;
  status: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-lg border",
        status === "completed"
          ? "bg-green-50 border-green-200"
          : "bg-white border-gray-200",
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-lg flex items-center justify-center",
          status === "completed" ? "bg-green-100" : "bg-blue-100",
        )}
      >
        {status === "completed" ? (
          <Check className="w-5 h-5 text-green-600" />
        ) : (
          <Calendar className="w-5 h-5 text-collegium-blue" />
        )}
      </div>
      <div className="flex-1">
        <div
          className={cn(
            "font-medium",
            status === "completed" ? "text-green-700" : "text-gray-900",
          )}
        >
          {event}
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      {status !== "completed" && (
        <Badge variant="outline" size="sm">
          Upcoming
        </Badge>
      )}
    </div>
  );
}

export function ExamDetailPage() {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-collegium-blue to-blue-700 text-white">
        <div className="container py-8 lg:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/exams" className="hover:text-white">
              Exams
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{examData.name}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="gold">{examData.level} Level</Badge>
              <Badge
                variant="secondary"
                className="bg-green-500/20 text-green-100"
              >
                Registration Open
              </Badge>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-2">
              {examData.name} {examData.year}
            </h1>
            <p className="text-xl text-blue-100 mb-4">{examData.fullName}</p>

            <p className="text-blue-100 mb-6 max-w-2xl">
              {examData.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download Brochure
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
                leftIcon={<Bell className="w-4 h-4" />}
              >
                Set Alert
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-lg font-bold text-collegium-blue">
                {examData.examPattern.totalQuestions}
              </div>
              <div className="text-xs text-gray-500">Questions</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                {examData.examPattern.totalMarks}
              </div>
              <div className="text-xs text-gray-500">Total Marks</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-gray-900">
                {examData.examPattern.duration}
              </div>
              <div className="text-xs text-gray-500">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">
                {examData.collegesAccepting.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">Colleges Accepting</div>
            </div>
            <div className="text-center hidden lg:block">
              <div className="text-lg font-bold text-purple-600">
                {(examData.registeredCandidates / 100000).toFixed(1)}L+
              </div>
              <div className="text-xs text-gray-500">Candidates</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsListUnderline className="mb-6">
                <TabsTriggerUnderline value="overview">
                  Overview
                </TabsTriggerUnderline>
                <TabsTriggerUnderline value="dates">
                  Important Dates
                </TabsTriggerUnderline>
                <TabsTriggerUnderline value="eligibility">
                  Eligibility
                </TabsTriggerUnderline>
                <TabsTriggerUnderline value="pattern">
                  Exam Pattern
                </TabsTriggerUnderline>
                <TabsTriggerUnderline value="syllabus">
                  Syllabus
                </TabsTriggerUnderline>
                <TabsTriggerUnderline value="colleges">
                  Colleges
                </TabsTriggerUnderline>
              </TabsListUnderline>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      About {examData.name} {examData.year}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {examData.fullName} ({examData.name}) is conducted by{" "}
                      {examData.conductingBody}. It is a computer-based
                      standardized test used for admission to undergraduate
                      engineering programs (B.E./B.Tech) and undergraduate
                      architecture (B.Arch) and planning (B.Planning) programs
                      at NITs, IIITs, CFTIs, and other participating
                      institutions.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {examData.name} is also an eligibility test for JEE
                      Advanced, which is the gateway to admission in IITs. The
                      top 2.5 lakh candidates from JEE Main are eligible to
                      appear for JEE Advanced.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Exam Highlights
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-collegium-blue" />
                        <div>
                          <div className="text-sm text-gray-500">
                            Conducting Body
                          </div>
                          <div className="font-medium">
                            {examData.conductingBody}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <FileText className="w-5 h-5 text-collegium-blue" />
                        <div>
                          <div className="text-sm text-gray-500">Exam Mode</div>
                          <div className="font-medium">{examData.mode}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Clock className="w-5 h-5 text-collegium-blue" />
                        <div>
                          <div className="text-sm text-gray-500">Frequency</div>
                          <div className="font-medium">
                            {examData.frequency}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-collegium-blue" />
                        <div>
                          <div className="text-sm text-gray-500">
                            Exam Level
                          </div>
                          <div className="font-medium">{examData.level}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Important Dates Tab */}
              <TabsContent value="dates">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {examData.name} {examData.year} Important Dates
                    </h2>
                    <div className="space-y-3">
                      {examData.importantDates.map((item) => (
                        <DateCard key={item.event} {...item} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Eligibility Tab */}
              <TabsContent value="eligibility">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {examData.name} Eligibility Criteria
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">
                          Age Limit
                        </h3>
                        <p className="text-gray-600">
                          {examData.eligibility.age}
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">
                          Educational Qualification
                        </h3>
                        <p className="text-gray-600">
                          {examData.eligibility.qualification}
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">
                          Minimum Percentage
                        </h3>
                        <p className="text-gray-600">
                          {examData.eligibility.percentage}
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">
                          Number of Attempts
                        </h3>
                        <p className="text-gray-600">
                          {examData.eligibility.attempts}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Exam Pattern Tab */}
              <TabsContent value="pattern">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {examData.name} Exam Pattern
                    </h2>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                              Section
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                              Questions
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-medium text-gray-600">
                              Marks
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                          {examData.examPattern.sections.map((section) => (
                            <tr key={section.name}>
                              <td className="px-4 py-3 font-medium text-gray-900">
                                {section.name}
                              </td>
                              <td className="px-4 py-3 text-center text-gray-600">
                                {section.questions}
                              </td>
                              <td className="px-4 py-3 text-center text-gray-600">
                                {section.marks}
                              </td>
                              <td className="px-4 py-3 text-gray-600">
                                {section.type}
                              </td>
                            </tr>
                          ))}
                          <tr className="bg-collegium-blue/5 font-medium">
                            <td className="px-4 py-3 text-gray-900">Total</td>
                            <td className="px-4 py-3 text-center text-gray-900">
                              {examData.examPattern.totalQuestions}
                            </td>
                            <td className="px-4 py-3 text-center text-gray-900">
                              {examData.examPattern.totalMarks}
                            </td>
                            <td className="px-4 py-3 text-gray-900">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-1">
                          Marking Scheme
                        </h3>
                        <p className="text-sm text-gray-600">
                          {examData.examPattern.marking}
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-1">
                          Languages Available
                        </h3>
                        <p className="text-sm text-gray-600">
                          {examData.examPattern.language}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Syllabus Tab */}
              <TabsContent value="syllabus">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      {examData.name} Syllabus
                    </h2>
                    <div className="space-y-4">
                      {examData.syllabus.map((subject) => (
                        <div
                          key={subject.subject}
                          className="border border-gray-200 rounded-lg p-4"
                        >
                          <h3 className="font-bold text-gray-900 mb-3">
                            {subject.subject}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {subject.topics.map((topic) => (
                              <Badge key={topic} variant="secondary">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Colleges Tab */}
              <TabsContent value="colleges">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">
                      Top Colleges Accepting {examData.name}
                    </h2>
                    <div className="space-y-3">
                      {examData.topColleges.map((college, index) => (
                        <Link
                          key={college}
                          href="#"
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-8 h-8 bg-collegium-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </span>
                            <span className="font-medium text-gray-900">
                              {college}
                            </span>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline">
                        View All {examData.collegesAccepting.toLocaleString()}{" "}
                        Colleges
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-6">
            {/* Apply Now Card */}
            <Card className="border-collegium-blue border-2">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  {examData.name} {examData.year} Application
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Registration is now open. Apply before the deadline!
                </p>
                <Button
                  variant="primary"
                  className="w-full mb-3"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Apply Now
                </Button>
                <div className="text-center text-sm text-gray-500">
                  Application Fee: ₹{examData.applicationFee.general}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { icon: FileText, label: "Download Admit Card", href: "#" },
                    { icon: BookOpen, label: "Preparation Tips", href: "#" },
                    { icon: Calculator, label: "Rank Predictor", href: "#" },
                    { icon: HelpCircle, label: "FAQs", href: "#" },
                    {
                      icon: Lightbulb,
                      label: "Previous Year Papers",
                      href: "#",
                    },
                  ].map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <link.icon className="w-5 h-5 text-collegium-blue" />
                      <span className="text-gray-700">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Exams */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Related Exams</h3>
                <div className="space-y-3">
                  {["JEE Advanced", "BITSAT", "VITEEE", "SRMJEE"].map(
                    (exam) => (
                      <Link
                        key={exam}
                        href="#"
                        className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{exam}</div>
                        <div className="text-sm text-gray-500">
                          View Details →
                        </div>
                      </Link>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
