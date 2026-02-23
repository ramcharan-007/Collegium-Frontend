"use client";

import * as React from "react";
import { BookOpen, FileText, Calendar, ClipboardList, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const boardExams = [
  {
    board: "CBSE",
    classes: [
      {
        name: "Class 12",
        links: [
          { label: "Results 2025", href: "/board-exams/cbse-class-12-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/cbse-class-12-syllabus", icon: BookOpen },
          { label: "Date Sheet", href: "/board-exams/cbse-class-12-datesheet", icon: Calendar },
          { label: "Sample Papers", href: "/board-exams/cbse-class-12-papers", icon: FileText },
        ],
      },
      {
        name: "Class 10",
        links: [
          { label: "Results 2025", href: "/board-exams/cbse-class-10-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/cbse-class-10-syllabus", icon: BookOpen },
          { label: "Date Sheet", href: "/board-exams/cbse-class-10-datesheet", icon: Calendar },
          { label: "Sample Papers", href: "/board-exams/cbse-class-10-papers", icon: FileText },
        ],
      },
    ],
  },
  {
    board: "ICSE/ISC",
    classes: [
      {
        name: "ISC (Class 12)",
        links: [
          { label: "Results 2025", href: "/board-exams/isc-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/isc-syllabus", icon: BookOpen },
          { label: "Date Sheet", href: "/board-exams/isc-datesheet", icon: Calendar },
        ],
      },
      {
        name: "ICSE (Class 10)",
        links: [
          { label: "Results 2025", href: "/board-exams/icse-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/icse-syllabus", icon: BookOpen },
          { label: "Date Sheet", href: "/board-exams/icse-datesheet", icon: Calendar },
        ],
      },
    ],
  },
  {
    board: "State Boards",
    classes: [
      {
        name: "UP Board",
        links: [
          { label: "Results", href: "/board-exams/up-board-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/up-board-syllabus", icon: BookOpen },
        ],
      },
      {
        name: "Maharashtra Board",
        links: [
          { label: "Results", href: "/board-exams/maharashtra-board-results", icon: ClipboardList },
          { label: "Syllabus", href: "/board-exams/maharashtra-board-syllabus", icon: BookOpen },
        ],
      },
    ],
  },
];

export function BoardExams() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Board Exams 2025
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Results, syllabus, date sheets & sample papers
            </p>
          </div>
          <Link
            href="/board-exams"
            className="text-collegium-blue dark:text-collegium-yellow text-sm font-medium flex items-center gap-1 hover:underline"
          >
            View All <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {boardExams.map((board) => (
            <div
              key={board.board}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="bg-collegium-blue px-4 py-3">
                <h3 className="font-semibold text-white">{board.board}</h3>
              </div>
              <div className="p-4 space-y-4">
                {board.classes.map((cls) => (
                  <div key={cls.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {cls.name}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cls.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-700 rounded-lg text-xs text-gray-700 dark:text-gray-300 hover:bg-collegium-blue/5 dark:hover:bg-collegium-blue/20 hover:text-collegium-blue dark:hover:text-collegium-yellow transition-colors"
                        >
                          <link.icon className="w-3.5 h-3.5" />
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
