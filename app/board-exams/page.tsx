"use client";

import * as React from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Calendar,
  ClipboardList,
  ExternalLink,
  ChevronRight,
  Download,
  Search,
} from "lucide-react";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const boards = [
  {
    id: "cbse",
    name: "CBSE",
    fullName: "Central Board of Secondary Education",
    classes: ["Class 10", "Class 12"],
    color: "bg-blue-500",
  },
  {
    id: "icse",
    name: "ICSE/ISC",
    fullName: "Indian Certificate of Secondary Education",
    classes: ["ICSE (Class 10)", "ISC (Class 12)"],
    color: "bg-green-500",
  },
  {
    id: "up",
    name: "UP Board",
    fullName: "Uttar Pradesh Madhyamik Shiksha Parishad",
    classes: ["Class 10", "Class 12"],
    color: "bg-orange-500",
  },
  {
    id: "maharashtra",
    name: "Maharashtra Board",
    fullName: "Maharashtra State Board of Secondary & Higher Secondary Education",
    classes: ["SSC (Class 10)", "HSC (Class 12)"],
    color: "bg-purple-500",
  },
  {
    id: "karnataka",
    name: "Karnataka Board",
    fullName: "Karnataka Secondary Education Examination Board",
    classes: ["SSLC (Class 10)", "PUC (Class 12)"],
    color: "bg-red-500",
  },
  {
    id: "tamilnadu",
    name: "Tamil Nadu Board",
    fullName: "Directorate of Government Examinations, Tamil Nadu",
    classes: ["Class 10", "Class 12"],
    color: "bg-teal-500",
  },
];

const resources = [
  {
    title: "Results 2025",
    description: "Check your board exam results online",
    icon: ClipboardList,
    category: "results",
    color: "text-green-600 bg-green-50",
  },
  {
    title: "Syllabus 2025-26",
    description: "Download latest syllabus and curriculum",
    icon: BookOpen,
    category: "syllabus",
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Date Sheet",
    description: "Exam schedule and timetable",
    icon: Calendar,
    category: "datesheet",
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "Sample Papers",
    description: "Practice with previous year papers",
    icon: FileText,
    category: "papers",
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Study Material",
    description: "Chapter-wise notes and resources",
    icon: Download,
    category: "study-material",
    color: "text-red-600 bg-red-50",
  },
];

const latestUpdates = [
  { title: "CBSE Class 12 Results 2025 Date Announced", date: "Jan 15, 2025", board: "CBSE" },
  { title: "UP Board Exam 2025 Date Sheet Released", date: "Jan 12, 2025", board: "UP Board" },
  { title: "Maharashtra HSC Timetable 2025 Out", date: "Jan 10, 2025", board: "Maharashtra" },
  { title: "ICSE ISC Specimen Papers 2025 Available", date: "Jan 08, 2025", board: "ICSE" },
  { title: "Karnataka SSLC Exam Starts February 28", date: "Jan 05, 2025", board: "Karnataka" },
];

export default function BoardExamsPage() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredBoards = boards.filter(
    (board) =>
      board.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      board.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-collegium-blue py-12">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Board Exams", href: "/board-exams" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
            Board Exams 2025
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Results, date sheets, syllabus, sample papers & study material for
            CBSE, ICSE, and all state boards
          </p>

          {/* Search */}
          <div className="mt-6 relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search board exams..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-collegium-yellow outline-none"
            />
          </div>
        </div>
      </div>

      <div className="container py-10">
        {/* Quick Resources */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Resources</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.category} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-5 text-center">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3", resource.color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{resource.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{resource.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Boards Grid */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Boards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBoards.map((board) => (
            <Card key={board.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className={cn("h-2", board.color)} />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{board.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{board.fullName}</p>
                <div className="space-y-2">
                  {board.classes.map((cls) => (
                    <Link
                      key={cls}
                      href={`/board-exams/${board.id}-${cls.toLowerCase().replace(/[\s()]/g, "-")}`}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm group transition-colors"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">{cls}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-collegium-blue transition-colors" />
                    </Link>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <Link href={`/board-exams/${board.id}-results`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Results</Badge>
                  </Link>
                  <Link href={`/board-exams/${board.id}-syllabus`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Syllabus</Badge>
                  </Link>
                  <Link href={`/board-exams/${board.id}-datesheet`}>
                    <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Date Sheet</Badge>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Latest Updates */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Latest Updates</h2>
        <Card>
          <CardContent className="p-0 divide-y dark:divide-gray-700">
            {latestUpdates.map((update, index) => (
              <Link
                key={index}
                href="#"
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
              >
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-collegium-blue transition-colors">
                    {update.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">{update.board}</Badge>
                    <span className="text-xs text-gray-500">{update.date}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-collegium-blue" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
