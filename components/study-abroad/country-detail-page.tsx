"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  GraduationCap,
  Building2,
  DollarSign,
  Calendar,
  Clock,
  Users,
  Globe,
  ArrowRight,
  Star,
  BookOpen,
  Plane,
  FileText,
  CheckCircle2,
  Briefcase,
  Home,
  Heart,
  Shield,
} from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CountryDetailProps {
  country: {
    name: string;
    slug: string;
    flag: string;
    image: string;
    description: string;
    universities: number;
    courses: number;
    avgCost: string;
    currency: string;
    livingCost: string;
    popularCourses: string[];
    highlights: string[];
    intakes: { name: string; months: string }[];
    visaSuccess: number;
    workPermit: string;
    partTimeWork: string;
    requirements: {
      ielts: string;
      toefl: string;
      gre?: string;
      gmat?: string;
    };
    topCities: { name: string; universities: number }[];
    facts: { label: string; value: string }[];
  };
}

export function CountryDetailPage({ country }: CountryDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={country.image}
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end pb-8">
          <div className="container">
            <Link
              href="/study-abroad"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Study Abroad
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{country.flag}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Study in {country.name}
              </h1>
            </div>
            <p className="text-white/80 max-w-2xl">{country.description}</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Building2 className="w-6 h-6 mx-auto text-collegium-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {formatNumber(country.universities)}
              </div>
              <div className="text-sm text-gray-500">Universities</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <BookOpen className="w-6 h-6 mx-auto text-collegium-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {formatNumber(country.courses)}
              </div>
              <div className="text-sm text-gray-500">Courses</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <DollarSign className="w-6 h-6 mx-auto text-collegium-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {country.avgCost}
              </div>
              <div className="text-sm text-gray-500">Avg. Tuition/Year</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Home className="w-6 h-6 mx-auto text-collegium-blue mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {country.livingCost}
              </div>
              <div className="text-sm text-gray-500">Living Cost/Month</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <Shield className="w-6 h-6 mx-auto text-green-600 mb-2" />
              <div className="text-xl font-bold text-gray-900">
                {country.visaSuccess}%
              </div>
              <div className="text-sm text-gray-500">Visa Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <Tabs defaultValue="overview">
              <TabsList className="w-full overflow-x-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="universities">Universities</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="visa">Visa & Work</TabsTrigger>
                <TabsTrigger value="cost">Cost</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Why Study Here */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Why Study in {country.name}?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {country.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Intakes */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Intake Seasons
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {country.intakes.map((intake) => (
                      <div
                        key={intake.name}
                        className="p-4 bg-gray-50 rounded-xl text-center"
                      >
                        <Calendar className="w-6 h-6 mx-auto text-collegium-blue mb-2" />
                        <h3 className="font-semibold text-gray-900">
                          {intake.name}
                        </h3>
                        <p className="text-sm text-gray-500">{intake.months}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Popular Courses */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Popular Courses
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {country.popularCourses.map((course) => (
                      <Badge key={course} variant="secondary" size="lg">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </Card>

                {/* Top Cities */}
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Top Study Cities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {country.topCities.map((city) => (
                      <div
                        key={city.name}
                        className="text-center p-4 border rounded-xl hover:border-collegium-blue transition-colors cursor-pointer"
                      >
                        <MapPin className="w-5 h-5 mx-auto text-collegium-blue mb-2" />
                        <h3 className="font-medium text-gray-900">
                          {city.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {city.universities} Unis
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="universities" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Top Universities in {country.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore {formatNumber(country.universities)} universities
                    and find your perfect match.
                  </p>
                  <Button>
                    Browse All Universities
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </TabsContent>

              <TabsContent value="courses" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Courses in {country.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover {formatNumber(country.courses)} courses across
                    various disciplines.
                  </p>
                  <Button>
                    Explore All Courses
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </TabsContent>

              <TabsContent value="visa" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Visa & Work Opportunities
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Briefcase className="w-6 h-6 text-collegium-blue shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Post-Study Work Permit
                        </h3>
                        <p className="text-gray-600">{country.workPermit}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <Clock className="w-6 h-6 text-collegium-blue shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Part-Time Work During Study
                        </h3>
                        <p className="text-gray-600">{country.partTimeWork}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                      <Shield className="w-6 h-6 text-green-600 shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Visa Success Rate
                        </h3>
                        <p className="text-gray-600">
                          {country.visaSuccess}% of applicants get their student
                          visa approved
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="cost" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Cost of Education & Living
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">
                          Average Tuition Fee (per year)
                        </span>
                        <span className="font-bold text-collegium-blue">
                          {country.avgCost}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">
                          Living Cost (per month)
                        </span>
                        <span className="font-bold text-collegium-blue">
                          {country.livingCost}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="p-6 bg-collegium-blue text-white">
              <h3 className="text-lg font-bold mb-2">Get Free Counselling</h3>
              <p className="text-blue-200 text-sm mb-4">
                Speak with our expert counselors to plan your education in{" "}
                {country.name}
              </p>
              <Button className="w-full bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
                Book Free Session
              </Button>
            </Card>

            {/* Requirements */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Eligibility Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">IELTS</span>
                  <span className="font-medium">
                    {country.requirements.ielts}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">TOEFL</span>
                  <span className="font-medium">
                    {country.requirements.toefl}
                  </span>
                </div>
                {country.requirements.gre && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">GRE</span>
                    <span className="font-medium">
                      {country.requirements.gre}
                    </span>
                  </div>
                )}
                {country.requirements.gmat && (
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">GMAT</span>
                    <span className="font-medium">
                      {country.requirements.gmat}
                    </span>
                  </div>
                )}
              </div>
            </Card>

            {/* Quick Facts */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-3">
                {country.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <span className="text-gray-600 text-sm">{fact.label}</span>
                    <span className="font-medium text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
