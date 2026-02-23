"use client";

import * as React from "react";
import Link from "next/link";
import { BookOpen, Calendar, ClipboardList, FileText, Download, ChevronRight } from "lucide-react";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { Breadcrumb } from "@/components/ui/breadcrumb";

// This page handles all dynamic board exam routes like:
// /board-exams/cbse-class-12-results
// /board-exams/cbse-class-10-syllabus
// etc.

export default function BoardExamDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Parse slug to get board and resource type
  const slug = params.slug || "";
  const formattedTitle = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l: string) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="bg-collegium-blue py-12">
        <div className="container">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Board Exams", href: "/board-exams" },
              { label: formattedTitle, href: `/board-exams/${slug}` },
            ]}
          />
          <h1 className="text-3xl font-bold text-white mt-4 mb-3">
            {formattedTitle}
          </h1>
          <p className="text-blue-200">
            Complete details, resources and latest updates
          </p>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  About {formattedTitle}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  This page provides comprehensive information about {formattedTitle.toLowerCase()}.
                  Find all the details you need including important dates, eligibility criteria,
                  preparation tips, and downloadable resources to help you prepare effectively.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Important Information
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Conducting Body", value: "Board of Education", icon: BookOpen },
                    { label: "Exam Date", value: "To be announced", icon: Calendar },
                    { label: "Result Date", value: "To be announced", icon: ClipboardList },
                    { label: "Official Website", value: "Visit Official Site", icon: FileText },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-collegium-blue" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{item.label}</div>
                          <div className="font-medium text-gray-900 dark:text-white">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Preparation Tips
                </h2>
                <ol className="space-y-3 list-decimal list-inside text-gray-600 dark:text-gray-400">
                  <li>Start with understanding the syllabus and exam pattern thoroughly</li>
                  <li>Create a study schedule and stick to it consistently</li>
                  <li>Solve previous year question papers and sample papers regularly</li>
                  <li>Focus on weak areas and seek help when needed</li>
                  <li>Take regular breaks and maintain a healthy lifestyle during preparation</li>
                  <li>Join study groups and discuss difficult topics with peers</li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {["Results", "Syllabus", "Date Sheet", "Sample Papers", "Admit Card"].map((link) => (
                    <Link
                      key={link}
                      href="#"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm group transition-colors"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{link}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-collegium-blue" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Download Resources</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" leftIcon={<Download className="w-4 h-4" />}>
                    Syllabus PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start" leftIcon={<Download className="w-4 h-4" />}>
                    Sample Papers
                  </Button>
                  <Button variant="outline" className="w-full justify-start" leftIcon={<Download className="w-4 h-4" />}>
                    Previous Year Papers
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-collegium-blue text-white overflow-hidden">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Need Guidance?</h3>
                <p className="text-sm text-blue-200 mb-4">
                  Talk to our expert counsellors for personalized advice on your board exams and college selection.
                </p>
                <Button className="w-full bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
                  Get Free Counselling
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
