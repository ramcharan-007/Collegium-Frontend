"use client";

import * as React from "react";
import Link from "next/link";
import {
  Star,
  MapPin,
  ArrowUpRight,
  Trophy,
  TrendingUp,
  Users,
  IndianRupee,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import {
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui";

interface TopCollege {
  rank: number;
  id: string;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  rating: number;
  fees: number;
  cutoff?: string;
  avgPackage: number;
}

const topCollegesData: Record<string, TopCollege[]> = {
  btech: [
    {
      rank: 1,
      id: "1",
      slug: "iit-madras",
      name: "Indian Institute of Technology Madras",
      shortName: "IIT Madras",
      city: "Chennai",
      rating: 4.6,
      fees: 850000,
      cutoff: "AIR 245",
      avgPackage: 2180000,
    },
    {
      rank: 2,
      id: "2",
      slug: "iit-delhi",
      name: "Indian Institute of Technology Delhi",
      shortName: "IIT Delhi",
      city: "New Delhi",
      rating: 4.4,
      fees: 862550,
      cutoff: "AIR 355",
      avgPackage: 2582000,
    },
    {
      rank: 3,
      id: "3",
      slug: "iit-bombay",
      name: "Indian Institute of Technology Bombay",
      shortName: "IIT Bombay",
      city: "Mumbai",
      rating: 4.5,
      fees: 882500,
      cutoff: "AIR 66",
      avgPackage: 2350000,
    },
    {
      rank: 4,
      id: "4",
      slug: "iit-kanpur",
      name: "Indian Institute of Technology Kanpur",
      shortName: "IIT Kanpur",
      city: "Kanpur",
      rating: 4.3,
      fees: 862500,
      cutoff: "AIR 1250",
      avgPackage: 2100000,
    },
    {
      rank: 5,
      id: "5",
      slug: "iit-kharagpur",
      name: "Indian Institute of Technology Kharagpur",
      shortName: "IIT Kharagpur",
      city: "Kharagpur",
      rating: 4.4,
      fees: 848000,
      cutoff: "AIR 2450",
      avgPackage: 1980000,
    },
  ],
  mba: [
    {
      rank: 1,
      id: "6",
      slug: "iim-ahmedabad",
      name: "Indian Institute of Management Ahmedabad",
      shortName: "IIM Ahmedabad",
      city: "Ahmedabad",
      rating: 4.8,
      fees: 2500000,
      cutoff: "99%ile",
      avgPackage: 3200000,
    },
    {
      rank: 2,
      id: "7",
      slug: "iim-bangalore",
      name: "Indian Institute of Management Bangalore",
      shortName: "IIM Bangalore",
      city: "Bangalore",
      rating: 4.7,
      fees: 2400000,
      cutoff: "99%ile",
      avgPackage: 3100000,
    },
    {
      rank: 3,
      id: "8",
      slug: "iim-calcutta",
      name: "Indian Institute of Management Calcutta",
      shortName: "IIM Calcutta",
      city: "Kolkata",
      rating: 4.6,
      fees: 2700000,
      cutoff: "99%ile",
      avgPackage: 3000000,
    },
    {
      rank: 4,
      id: "9",
      slug: "iim-lucknow",
      name: "Indian Institute of Management Lucknow",
      shortName: "IIM Lucknow",
      city: "Lucknow",
      rating: 4.5,
      fees: 2200000,
      cutoff: "98%ile",
      avgPackage: 2800000,
    },
    {
      rank: 5,
      id: "10",
      slug: "xlri-jamshedpur",
      name: "XLRI - Xavier School of Management",
      shortName: "XLRI Jamshedpur",
      city: "Jamshedpur",
      rating: 4.5,
      fees: 2600000,
      cutoff: "98%ile",
      avgPackage: 2900000,
    },
  ],
  mbbs: [
    {
      rank: 1,
      id: "11",
      slug: "aiims-delhi",
      name: "All India Institute of Medical Sciences",
      shortName: "AIIMS Delhi",
      city: "New Delhi",
      rating: 4.9,
      fees: 150000,
      cutoff: "AIR 50",
      avgPackage: 1500000,
    },
    {
      rank: 2,
      id: "12",
      slug: "pgimer-chandigarh",
      name: "Post Graduate Institute of Medical Education",
      shortName: "PGIMER",
      city: "Chandigarh",
      rating: 4.7,
      fees: 180000,
      cutoff: "AIR 100",
      avgPackage: 1400000,
    },
    {
      rank: 3,
      id: "13",
      slug: "cmc-vellore",
      name: "Christian Medical College",
      shortName: "CMC Vellore",
      city: "Vellore",
      rating: 4.6,
      fees: 250000,
      cutoff: "AIR 200",
      avgPackage: 1200000,
    },
    {
      rank: 4,
      id: "14",
      slug: "jipmer",
      name: "Jawaharlal Institute of Postgraduate Medical Education",
      shortName: "JIPMER",
      city: "Puducherry",
      rating: 4.5,
      fees: 160000,
      cutoff: "AIR 300",
      avgPackage: 1100000,
    },
    {
      rank: 5,
      id: "15",
      slug: "afmc-pune",
      name: "Armed Forces Medical College",
      shortName: "AFMC Pune",
      city: "Pune",
      rating: 4.6,
      fees: 120000,
      cutoff: "AIR 250",
      avgPackage: 1300000,
    },
  ],
  law: [
    {
      rank: 1,
      id: "16",
      slug: "nlsiu-bangalore",
      name: "National Law School of India University",
      shortName: "NLSIU Bangalore",
      city: "Bangalore",
      rating: 4.7,
      fees: 350000,
      cutoff: "AIR 10",
      avgPackage: 2500000,
    },
    {
      rank: 2,
      id: "17",
      slug: "nalsar-hyderabad",
      name: "NALSAR University of Law",
      shortName: "NALSAR",
      city: "Hyderabad",
      rating: 4.6,
      fees: 320000,
      cutoff: "AIR 50",
      avgPackage: 2200000,
    },
    {
      rank: 3,
      id: "18",
      slug: "nujs-kolkata",
      name: "The WB National University of Juridical Sciences",
      shortName: "NUJS Kolkata",
      city: "Kolkata",
      rating: 4.5,
      fees: 280000,
      cutoff: "AIR 100",
      avgPackage: 2000000,
    },
    {
      rank: 4,
      id: "19",
      slug: "nlu-delhi",
      name: "National Law University Delhi",
      shortName: "NLU Delhi",
      city: "New Delhi",
      rating: 4.5,
      fees: 270000,
      cutoff: "AIR 150",
      avgPackage: 1900000,
    },
    {
      rank: 5,
      id: "20",
      slug: "gnlu-gandhinagar",
      name: "Gujarat National Law University",
      shortName: "GNLU",
      city: "Gandhinagar",
      rating: 4.4,
      fees: 260000,
      cutoff: "AIR 200",
      avgPackage: 1800000,
    },
  ],
};

const tabs = [
  { value: "btech", label: "B.Tech" },
  { value: "mba", label: "MBA" },
  { value: "mbbs", label: "MBBS" },
  { value: "law", label: "Law" },
];

function CollegeRow({
  college,
  isLast,
}: {
  college: TopCollege;
  isLast: boolean;
}) {
  return (
    <Link
      href={`/college/${college.slug}`}
      className={cn(
        "group grid grid-cols-12 gap-4 items-center py-4 px-4 hover:bg-blue-50/50 transition-colors",
        !isLast && "border-b border-gray-100",
      )}
    >
      {/* Rank */}
      <div className="col-span-1">
        <span
          className={cn(
            "inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold",
            college.rank <= 3
              ? "bg-collegium-yellow text-collegium-blue"
              : "bg-gray-100 text-gray-600",
          )}
        >
          {college.rank}
        </span>
      </div>

      {/* College Info */}
      <div className="col-span-5 lg:col-span-4">
        <h4 className="font-semibold text-gray-900 group-hover:text-collegium-blue transition-colors truncate">
          {college.shortName}
        </h4>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="w-3.5 h-3.5" />
          {college.city}
        </div>
      </div>

      {/* Rating */}
      <div className="col-span-2 lg:col-span-1 hidden sm:block">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{college.rating}</span>
        </div>
      </div>

      {/* Cutoff */}
      <div className="col-span-2 hidden lg:block">
        <Badge variant="outline" size="sm">
          {college.cutoff}
        </Badge>
      </div>

      {/* Fees */}
      <div className="col-span-2">
        <div className="text-sm font-medium text-gray-900">
          {formatCurrency(college.fees, { notation: "compact" })}
        </div>
        <div className="text-xs text-gray-500">Total Fees</div>
      </div>

      {/* Avg Package */}
      <div className="col-span-2 hidden sm:block">
        <div className="text-sm font-medium text-green-600">
          {formatCurrency(college.avgPackage, { notation: "compact" })}
        </div>
        <div className="text-xs text-gray-500">Avg. Package</div>
      </div>

      {/* Arrow */}
      <div className="col-span-1 text-right">
        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-collegium-blue transition-colors inline-block" />
      </div>
    </Link>
  );
}

export function TopCollegesTable() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Top 10 Colleges in India
          </h2>
          <p className="text-gray-500 mt-2">
            Based on rankings, placements, and student reviews
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="btech" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="bg-gray-100">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-12 gap-4 items-center py-3 px-4 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase">
                  <div className="col-span-1">#</div>
                  <div className="col-span-5 lg:col-span-4">College</div>
                  <div className="col-span-2 lg:col-span-1 hidden sm:block">
                    Rating
                  </div>
                  <div className="col-span-2 hidden lg:block">Cutoff</div>
                  <div className="col-span-2">Fees</div>
                  <div className="col-span-2 hidden sm:block">Avg. Package</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Table Rows */}
                {topCollegesData[tab.value].map((college, index) => (
                  <CollegeRow
                    key={college.id}
                    college={college}
                    isLast={index === topCollegesData[tab.value].length - 1}
                  />
                ))}
              </div>

              {/* View All Link */}
              <div className="text-center mt-6">
                <Link
                  href={`/${tab.value}-colleges`}
                  className="inline-flex items-center gap-1 text-collegium-blue font-medium hover:underline"
                >
                  View all {tab.label} colleges
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
