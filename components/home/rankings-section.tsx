"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Trophy, ArrowRight, Star } from "lucide-react";
import { Badge, Button } from "@/components/ui";

interface RankedCollege {
  rank: number;
  name: string;
  slug: string;
  city: string;
  state: string;
  rating: number;
  fees: string;
  type: string;
}

const rankingAgencies = [
  { id: "nirf", name: "NIRF", year: 2025 },
  { id: "qs", name: "QS World", year: 2025 },
  { id: "the", name: "THE World", year: 2025 },
  { id: "collegium", name: "Collegium", year: 2026 },
  { id: "indiatoday", name: "India Today", year: 2025 },
];

const rankingsData: Record<string, RankedCollege[]> = {
  nirf: [
    { rank: 1, name: "IIT Madras", slug: "iit-madras", city: "Chennai", state: "Tamil Nadu", rating: 4.6, fees: "₹8.5L", type: "Government" },
    { rank: 2, name: "IIT Delhi", slug: "iit-delhi", city: "New Delhi", state: "Delhi", rating: 4.5, fees: "₹8.6L", type: "Government" },
    { rank: 3, name: "IIT Bombay", slug: "iit-bombay", city: "Mumbai", state: "Maharashtra", rating: 4.5, fees: "₹8.8L", type: "Government" },
    { rank: 4, name: "IIT Kanpur", slug: "iit-kanpur", city: "Kanpur", state: "Uttar Pradesh", rating: 4.4, fees: "₹8.3L", type: "Government" },
    { rank: 5, name: "IIT Kharagpur", slug: "iit-kharagpur", city: "Kharagpur", state: "West Bengal", rating: 4.3, fees: "₹8.1L", type: "Government" },
    { rank: 6, name: "IISc Bangalore", slug: "iisc-bangalore", city: "Bangalore", state: "Karnataka", rating: 4.7, fees: "₹35K", type: "Government" },
    { rank: 7, name: "IIT Roorkee", slug: "iit-roorkee", city: "Roorkee", state: "Uttarakhand", rating: 4.3, fees: "₹8.2L", type: "Government" },
    { rank: 8, name: "IIT Guwahati", slug: "iit-guwahati", city: "Guwahati", state: "Assam", rating: 4.2, fees: "₹8.0L", type: "Government" },
  ],
  qs: [
    { rank: 1, name: "IIT Bombay", slug: "iit-bombay", city: "Mumbai", state: "Maharashtra", rating: 4.5, fees: "₹8.8L", type: "Government" },
    { rank: 2, name: "IIT Delhi", slug: "iit-delhi", city: "New Delhi", state: "Delhi", rating: 4.5, fees: "₹8.6L", type: "Government" },
    { rank: 3, name: "IISc Bangalore", slug: "iisc-bangalore", city: "Bangalore", state: "Karnataka", rating: 4.7, fees: "₹35K", type: "Government" },
    { rank: 4, name: "IIT Madras", slug: "iit-madras", city: "Chennai", state: "Tamil Nadu", rating: 4.6, fees: "₹8.5L", type: "Government" },
    { rank: 5, name: "IIT Kharagpur", slug: "iit-kharagpur", city: "Kharagpur", state: "West Bengal", rating: 4.3, fees: "₹8.1L", type: "Government" },
    { rank: 6, name: "IIT Kanpur", slug: "iit-kanpur", city: "Kanpur", state: "Uttar Pradesh", rating: 4.4, fees: "₹8.3L", type: "Government" },
    { rank: 7, name: "IIT Roorkee", slug: "iit-roorkee", city: "Roorkee", state: "Uttarakhand", rating: 4.3, fees: "₹8.2L", type: "Government" },
    { rank: 8, name: "University of Delhi", slug: "university-of-delhi", city: "New Delhi", state: "Delhi", rating: 4.1, fees: "₹15K", type: "Government" },
  ],
  the: [
    { rank: 1, name: "IISc Bangalore", slug: "iisc-bangalore", city: "Bangalore", state: "Karnataka", rating: 4.7, fees: "₹35K", type: "Government" },
    { rank: 2, name: "IIT Bombay", slug: "iit-bombay", city: "Mumbai", state: "Maharashtra", rating: 4.5, fees: "₹8.8L", type: "Government" },
    { rank: 3, name: "IIT Delhi", slug: "iit-delhi", city: "New Delhi", state: "Delhi", rating: 4.5, fees: "₹8.6L", type: "Government" },
    { rank: 4, name: "IIT Madras", slug: "iit-madras", city: "Chennai", state: "Tamil Nadu", rating: 4.6, fees: "₹8.5L", type: "Government" },
    { rank: 5, name: "IIT Kanpur", slug: "iit-kanpur", city: "Kanpur", state: "Uttar Pradesh", rating: 4.4, fees: "₹8.3L", type: "Government" },
  ],
  collegium: [
    { rank: 1, name: "IIT Madras", slug: "iit-madras", city: "Chennai", state: "Tamil Nadu", rating: 4.6, fees: "₹8.5L", type: "Government" },
    { rank: 2, name: "IIT Bombay", slug: "iit-bombay", city: "Mumbai", state: "Maharashtra", rating: 4.5, fees: "₹8.8L", type: "Government" },
    { rank: 3, name: "IIT Delhi", slug: "iit-delhi", city: "New Delhi", state: "Delhi", rating: 4.5, fees: "₹8.6L", type: "Government" },
    { rank: 4, name: "IISc Bangalore", slug: "iisc-bangalore", city: "Bangalore", state: "Karnataka", rating: 4.7, fees: "₹35K", type: "Government" },
    { rank: 5, name: "BITS Pilani", slug: "bits-pilani", city: "Pilani", state: "Rajasthan", rating: 4.4, fees: "₹20.4L", type: "Private" },
  ],
  indiatoday: [
    { rank: 1, name: "IIT Madras", slug: "iit-madras", city: "Chennai", state: "Tamil Nadu", rating: 4.6, fees: "₹8.5L", type: "Government" },
    { rank: 2, name: "IIT Delhi", slug: "iit-delhi", city: "New Delhi", state: "Delhi", rating: 4.5, fees: "₹8.6L", type: "Government" },
    { rank: 3, name: "IIT Bombay", slug: "iit-bombay", city: "Mumbai", state: "Maharashtra", rating: 4.5, fees: "₹8.8L", type: "Government" },
    { rank: 4, name: "IIT Kanpur", slug: "iit-kanpur", city: "Kanpur", state: "Uttar Pradesh", rating: 4.4, fees: "₹8.3L", type: "Government" },
    { rank: 5, name: "IIT Kharagpur", slug: "iit-kharagpur", city: "Kharagpur", state: "West Bengal", rating: 4.3, fees: "₹8.1L", type: "Government" },
  ],
};

export function RankingsSection() {
  const [activeAgency, setActiveAgency] = React.useState("nirf");
  const colleges = rankingsData[activeAgency] || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-collegium-yellow" />
              College Rankings
            </h2>
            <p className="text-gray-600 mt-1">Top-ranked colleges across agencies</p>
          </div>
          <Link href="/rankings">
            <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All
            </Button>
          </Link>
        </div>

        {/* Agency Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {rankingAgencies.map((agency) => (
            <button
              key={agency.id}
              onClick={() => setActiveAgency(agency.id)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeAgency === agency.id
                  ? "bg-collegium-blue text-white shadow-md"
                  : "bg-white text-gray-700 border hover:border-collegium-blue hover:text-collegium-blue"
              )}
            >
              {agency.name} {agency.year}
            </button>
          ))}
        </div>

        {/* Rankings Table */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Rank</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">College</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">Rating</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden sm:table-cell">Fees</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden lg:table-cell">Type</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {colleges.map((college) => (
                  <tr key={college.slug} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-4 py-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-collegium-blue/10 text-collegium-blue font-bold text-sm">
                        #{college.rank}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/college/${college.slug}`} className="hover:text-collegium-blue transition-colors">
                        <div className="font-semibold text-gray-900">{college.name}</div>
                        <div className="text-xs text-gray-500">{college.city}, {college.state}</div>
                      </Link>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium text-sm">{college.rating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 hidden sm:table-cell">{college.fees}</td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <Badge variant={college.type === "Government" ? "default" : "secondary"}>
                        {college.type}
                      </Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/college/${college.slug}`}>
                        <Button variant="outline" size="sm">View</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
