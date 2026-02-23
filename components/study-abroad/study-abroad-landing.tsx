"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  GraduationCap,
  Building2,
  DollarSign,
  Users,
  Globe,
  ArrowRight,
  Star,
  BookOpen,
  Plane,
  FileText,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { cn, formatNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Country {
  id: string;
  name: string;
  slug: string;
  flag: string;
  image: string;
  universities: number;
  courses: number;
  avgCost: string;
  currency: string;
  popularCourses: string[];
  highlights: string[];
  intakes: string[];
  visaSuccess: number;
}

const countries: Country[] = [
  {
    id: "1",
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600",
    universities: 4500,
    courses: 25000,
    avgCost: "$20,000 - $55,000",
    currency: "USD",
    popularCourses: ["MS in CS", "MBA", "MS in Data Science", "Engineering"],
    highlights: [
      "OPT for 3 years",
      "Research opportunities",
      "Top global universities",
    ],
    intakes: ["Fall (Aug-Sep)", "Spring (Jan)", "Summer (May)"],
    visaSuccess: 82,
  },
  {
    id: "2",
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600",
    universities: 160,
    courses: 15000,
    avgCost: "£15,000 - £35,000",
    currency: "GBP",
    popularCourses: ["MBA", "MSc Finance", "LLM", "Engineering"],
    highlights: [
      "2-year post-study work visa",
      "1-year Master's programs",
      "Rich cultural heritage",
    ],
    intakes: ["September", "January"],
    visaSuccess: 89,
  },
  {
    id: "3",
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600",
    universities: 100,
    courses: 12000,
    avgCost: "CAD 15,000 - CAD 35,000",
    currency: "CAD",
    popularCourses: [
      "Computer Science",
      "Business Analytics",
      "Engineering",
      "Healthcare",
    ],
    highlights: ["3-year PGWP", "PR pathways", "Affordable education"],
    intakes: ["Fall (Sep)", "Winter (Jan)", "Summer (May)"],
    visaSuccess: 85,
  },
  {
    id: "4",
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600",
    universities: 43,
    courses: 10000,
    avgCost: "AUD 20,000 - AUD 45,000",
    currency: "AUD",
    popularCourses: ["Engineering", "IT", "Business", "Nursing"],
    highlights: [
      "Post-study work visa up to 6 years",
      "High quality of life",
      "Part-time work allowed",
    ],
    intakes: ["February", "July"],
    visaSuccess: 88,
  },
  {
    id: "5",
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600",
    universities: 400,
    courses: 8000,
    avgCost: "€0 - €20,000",
    currency: "EUR",
    popularCourses: ["Engineering", "Automobile", "Data Science", "Business"],
    highlights: [
      "Free/Low tuition at public universities",
      "18-month job seeker visa",
      "Strong economy",
    ],
    intakes: ["Winter (Oct)", "Summer (Apr)"],
    visaSuccess: 90,
  },
  {
    id: "6",
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600",
    universities: 34,
    courses: 5000,
    avgCost: "€10,000 - €25,000",
    currency: "EUR",
    popularCourses: ["Technology", "Pharma", "Finance", "Business"],
    highlights: [
      "2-year stay back visa",
      "English speaking",
      "Tech hub of Europe",
    ],
    intakes: ["September", "January"],
    visaSuccess: 86,
  },
];

interface University {
  id: string;
  name: string;
  country: string;
  ranking: number;
  image: string;
  courses: number;
  rating: number;
}

const topUniversities: University[] = [
  {
    id: "1",
    name: "Massachusetts Institute of Technology",
    country: "USA",
    ranking: 1,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400",
    courses: 450,
    rating: 4.9,
  },
  {
    id: "2",
    name: "Stanford University",
    country: "USA",
    ranking: 3,
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    courses: 380,
    rating: 4.9,
  },
  {
    id: "3",
    name: "University of Oxford",
    country: "UK",
    ranking: 4,
    image: "https://images.unsplash.com/photo-1580491934424-5dd84b8a7995?w=400",
    courses: 350,
    rating: 4.8,
  },
  {
    id: "4",
    name: "Harvard University",
    country: "USA",
    ranking: 5,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    courses: 420,
    rating: 4.9,
  },
];

export function StudyAbroadLanding() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-collegium-blue via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-collegium-yellow rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-collegium-yellow text-collegium-blue mb-6">
              <Plane className="w-4 h-4 mr-2" />
              Study Abroad
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Your Gateway to{" "}
              <span className="text-collegium-yellow">Global Education</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-200 mb-8">
              Explore 50,000+ courses across 6+ countries. Get expert guidance
              for admissions, visas, and scholarships.
            </p>

            {/* Search */}
            <div className="bg-white rounded-2xl p-2 md:p-3 shadow-xl max-w-2xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex-1">
                  <Input
                    placeholder="Search countries, universities, or courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    leftIcon={<Search className="w-5 h-5" />}
                    className="border-0 bg-gray-50 h-12"
                  />
                </div>
                <Button size="lg" className="h-12 px-8">
                  Explore
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-10">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-collegium-yellow">
                  50,000+
                </div>
                <div className="text-sm text-blue-200">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-collegium-yellow">
                  5,000+
                </div>
                <div className="text-sm text-blue-200">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-collegium-yellow">
                  25+
                </div>
                <div className="text-sm text-blue-200">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-collegium-yellow">
                  10,000+
                </div>
                <div className="text-sm text-blue-200">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Popular Study Destinations
              </h2>
              <p className="text-gray-600">
                Explore top countries for international education
              </p>
            </div>
            <Link href="/study-abroad/countries" className="hidden md:block">
              <Button variant="outline">
                View All Countries
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country) => (
              <Link key={country.id} href={`/study-abroad/${country.slug}`}>
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{country.flag}</span>
                        <h3 className="text-xl font-bold">{country.name}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Building2 className="w-4 h-4 mx-auto text-collegium-blue mb-1" />
                        <div className="text-lg font-bold text-gray-900">
                          {formatNumber(country.universities)}
                        </div>
                        <div className="text-xs text-gray-500">
                          Universities
                        </div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <BookOpen className="w-4 h-4 mx-auto text-collegium-blue mb-1" />
                        <div className="text-lg font-bold text-gray-900">
                          {formatNumber(country.courses)}
                        </div>
                        <div className="text-xs text-gray-500">Courses</div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {country.popularCourses.slice(0, 3).map((course) => (
                        <Badge key={course} variant="secondary" size="sm">
                          {course}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Avg. Cost/Year</span>
                      <span className="font-semibold text-collegium-blue">
                        {country.avgCost}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link href="/study-abroad/countries">
              <Button variant="outline">View All Countries</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Top Ranked Universities
            </h2>
            <p className="text-gray-600">
              Study at world-renowned institutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topUniversities.map((uni) => (
              <Card
                key={uni.id}
                className="group overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-collegium-yellow text-collegium-blue font-bold">
                      #{uni.ranking} QS
                    </Badge>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-3 h-3" />
                    {uni.country}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      {uni.courses} Courses
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{uni.rating}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-collegium-blue text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              How We Help You
            </h2>
            <p className="text-blue-200">
              Your journey to studying abroad made simple
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Explore",
                description:
                  "Browse countries, universities, and courses that match your goals",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Apply",
                description:
                  "Get guidance on applications, SOPs, LORs, and documentation",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Visa",
                description:
                  "Expert assistance for visa applications and interviews",
              },
              {
                icon: <Plane className="w-8 h-8" />,
                title: "Fly",
                description: "Pre-departure guidance and post-arrival support",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="w-8 h-8 rounded-full bg-collegium-yellow text-collegium-blue font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-blue-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Study Abroad with Collegium?
              </h2>
              <div className="space-y-4">
                {[
                  "Personalized university shortlisting based on your profile",
                  "End-to-end application support and document review",
                  "Scholarship guidance - ₹50 Cr+ scholarships secured",
                  "Visa preparation with 95% success rate",
                  "Education loan assistance with partner banks",
                  "Pre-departure orientation and alumni network",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg">
                  Get Free Counselling
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600"
                alt="Students"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      10,000+
                    </div>
                    <div className="text-sm text-gray-500">Students Placed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-collegium-yellow to-yellow-400">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-collegium-blue mb-4">
            Ready to Start Your Global Education Journey?
          </h2>
          <p className="text-collegium-blue/80 mb-8 max-w-2xl mx-auto">
            Get a free profile evaluation and personalized university
            recommendations from our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-collegium-blue hover:bg-blue-900">
              Book Free Counselling
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-collegium-blue text-collegium-blue hover:bg-collegium-blue hover:text-white"
            >
              Explore Universities
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
