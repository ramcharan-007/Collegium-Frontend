"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Building2,
  GraduationCap,
  IndianRupee,
  BookOpen,
  Briefcase,
  ArrowRight,
  Star,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle2,
  FileText,
  Award,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CourseDetailProps {
  course: {
    name: string;
    slug: string;
    fullName: string;
    level: string;
    stream: string;
    duration: string;
    mode: string[];
    avgFees: number;
    colleges: number;
    description: string;
    eligibility: string[];
    icon: string;
    popularExams: { name: string; slug: string }[];
    careers: { title: string; avgSalary: string }[];
    syllabus: { semester: string; subjects: string[] }[];
    topColleges: {
      name: string;
      slug: string;
      location: string;
      fees: number;
      rating: number;
    }[];
    specializations: string[];
    skills: string[];
  };
}

export function CourseDetailPage({ course }: CourseDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-jirs-blue">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/courses" className="hover:text-jirs-blue">
              Courses
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-400">{course.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-jirs-blue text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-4xl">
              {course.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {course.fullName}
              </h1>
              <p className="text-blue-200 mb-4">
                {course.name} Course Details, Eligibility, Fees & Top Colleges
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-white/20">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </Badge>
                <Badge className="bg-white/20">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  {course.level}
                </Badge>
                <Badge className="bg-white/20">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {course.stream}
                </Badge>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-jirs-yellow text-jirs-blue hover:bg-yellow-400"
              >
                Get Free Counselling
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <IndianRupee className="w-6 h-6 mx-auto text-jirs-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {formatCurrency(course.avgFees)}
              </div>
              <div className="text-sm text-gray-500">Average Fees</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Building2 className="w-6 h-6 mx-auto text-jirs-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {formatNumber(course.colleges)}+
              </div>
              <div className="text-sm text-gray-500">Colleges</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Clock className="w-6 h-6 mx-auto text-jirs-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {course.duration}
              </div>
              <div className="text-sm text-gray-500">Duration</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Briefcase className="w-6 h-6 mx-auto text-jirs-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {course.careers.length}+
              </div>
              <div className="text-sm text-gray-500">Career Options</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="w-full overflow-x-auto mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="careers">Careers</TabsTrigger>
                <TabsTrigger value="colleges">Top Colleges</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* About */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    About {course.name}
                  </h2>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">
                        Duration: {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">
                        Mode: {course.mode.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Level: {course.level}</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Stream: {course.stream}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-3">
                    Specializations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Skills */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Skills You'll Learn
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Entrance Exams */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Popular Entrance Exams
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {course.popularExams.map((exam) => (
                      <Link
                        key={exam.slug}
                        href={`/exams/${exam.slug}`}
                        className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-50 hover:border-jirs-blue border border-transparent transition-colors"
                      >
                        <FileText className="w-6 h-6 mx-auto text-jirs-blue mb-2" />
                        <span className="font-medium text-gray-900">
                          {exam.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="eligibility" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {course.name} Eligibility Criteria
                  </h2>
                  <div className="space-y-4">
                    {course.eligibility.map((criteria, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{criteria}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="syllabus" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {course.name} Syllabus
                  </h2>
                  <div className="space-y-4">
                    {course.syllabus.map((sem) => (
                      <div
                        key={sem.semester}
                        className="border rounded-lg overflow-hidden"
                      >
                        <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-900">
                          {sem.semester}
                        </div>
                        <div className="p-4">
                          <div className="flex flex-wrap gap-2">
                            {sem.subjects.map((subject) => (
                              <Badge key={subject} variant="secondary">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="careers" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Career Options after {course.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.careers.map((career) => (
                      <div key={career.title} className="p-4 border rounded-xl">
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="w-5 h-5 text-jirs-blue" />
                          <h3 className="font-semibold text-gray-900">
                            {career.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <IndianRupee className="w-4 h-4" />
                          <span>Avg Salary: {career.avgSalary}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="colleges" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Top {course.name} Colleges in India
                  </h2>
                  <div className="space-y-4">
                    {course.topColleges.map((college, index) => (
                      <Link
                        key={college.slug}
                        href={`/college/${college.slug}`}
                        className="flex items-center gap-4 p-4 border rounded-xl hover:border-jirs-blue hover:bg-blue-50/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-jirs-blue text-white flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900">
                            {college.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="w-3 h-3" />
                            {college.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 justify-end">
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            <span className="font-medium">
                              {college.rating}
                            </span>
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatCurrency(college.fees)}
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      View All {course.name} Colleges
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="p-6 bg-jirs-blue text-white">
              <h3 className="text-lg font-bold mb-2">Need Guidance?</h3>
              <p className="text-blue-200 text-sm mb-4">
                Get personalized counselling for {course.name} admissions
              </p>
              <Button className="w-full bg-jirs-yellow text-jirs-blue hover:bg-yellow-400">
                Get Free Counselling
              </Button>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  {
                    label: `${course.name} Colleges`,
                    href: `/${course.slug}-colleges`,
                  },
                  { label: `${course.name} Syllabus`, href: `#syllabus` },
                  { label: `${course.name} Eligibility`, href: `#eligibility` },
                  { label: `${course.name} Career Scope`, href: `#careers` },
                  { label: `${course.name} Fees`, href: `#fees` },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </Card>

            {/* Related Courses */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Courses</h3>
              <div className="space-y-3">
                {[
                  "M.Tech",
                  "B.E.",
                  "Diploma in Engineering",
                  "PhD in Engineering",
                ].map((related) => (
                  <Link
                    key={related}
                    href="#"
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                  >
                    {related}
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
