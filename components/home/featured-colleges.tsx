"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Star,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button, Badge } from "@/components/ui";

interface FeaturedCollege {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  logo: string;
  coverImage: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  rankings: Array<{ agency: string; rank: number }>;
  fees: { amount: number; course: string };
  placement: { average: number; highest: number };
  tags: string[];
}

const featuredColleges: FeaturedCollege[] = [
  {
    id: "1",
    slug: "iit-bombay",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    logo: "/colleges/iit-bombay-logo.png",
    coverImage: "/colleges/iit-bombay-cover.jpg",
    city: "Mumbai",
    state: "Maharashtra",
    rating: 4.5,
    reviewCount: 403,
    rankings: [
      { agency: "NIRF", rank: 3 },
      { agency: "QS", rank: 149 },
    ],
    fees: { amount: 882500, course: "B.Tech" },
    placement: { average: 2350000, highest: 10000000 },
    tags: ["Autonomous", "AICTE Approved"],
  },
  {
    id: "2",
    slug: "iit-delhi",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    logo: "/colleges/iit-delhi-logo.png",
    coverImage: "/colleges/iit-delhi-cover.jpg",
    city: "New Delhi",
    state: "Delhi",
    rating: 4.4,
    reviewCount: 993,
    rankings: [
      { agency: "NIRF", rank: 2 },
      { agency: "QS", rank: 150 },
    ],
    fees: { amount: 862550, course: "B.Tech" },
    placement: { average: 2582000, highest: 20000000 },
    tags: ["Autonomous", "UGC Approved"],
  },
  {
    id: "3",
    slug: "iit-madras",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    logo: "/colleges/iit-madras-logo.png",
    coverImage: "/colleges/iit-madras-cover.jpg",
    city: "Chennai",
    state: "Tamil Nadu",
    rating: 4.6,
    reviewCount: 567,
    rankings: [
      { agency: "NIRF", rank: 1 },
      { agency: "QS", rank: 227 },
    ],
    fees: { amount: 850000, course: "B.Tech" },
    placement: { average: 2180000, highest: 15000000 },
    tags: ["Autonomous", "AICTE Approved"],
  },
  {
    id: "4",
    slug: "bits-pilani",
    name: "Birla Institute of Technology and Science",
    shortName: "BITS Pilani",
    logo: "/colleges/bits-pilani-logo.png",
    coverImage: "/colleges/bits-pilani-cover.jpg",
    city: "Pilani",
    state: "Rajasthan",
    rating: 4.3,
    reviewCount: 812,
    rankings: [{ agency: "NIRF", rank: 21 }],
    fees: { amount: 2100000, course: "B.E." },
    placement: { average: 2100000, highest: 12000000 },
    tags: ["Deemed", "UGC Approved"],
  },
];

function CollegeCard({ college }: { college: FeaturedCollege }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Cover Image */}
      <div className="relative h-40 bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-collegium-blue/90" />

        {/* Rankings Badge */}
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          {college.rankings.slice(0, 2).map((ranking) => (
            <Badge key={ranking.agency} variant="gold" size="sm">
              #{ranking.rank} {ranking.agency}
            </Badge>
          ))}
        </div>

        {/* College Name on Image */}
        <div className="absolute bottom-3 left-3 right-3 z-20">
          <h3 className="text-lg font-bold text-white truncate">
            {college.shortName}
          </h3>
          <div className="flex items-center gap-1 text-white/80 text-sm">
            <MapPin className="w-3.5 h-3.5" />
            {college.city}, {college.state}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {college.tags.map((tag) => (
            <Badge key={tag} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-semibold">{college.rating}</span>
          </div>
          <span className="text-sm text-gray-500">
            ({college.reviewCount} reviews)
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">Avg. Package</div>
            <div className="font-semibold text-gray-900">
              {formatCurrency(college.placement.average, {
                notation: "compact",
              })}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-xs text-gray-500 mb-1">
              {college.fees.course} Fees
            </div>
            <div className="font-semibold text-gray-900">
              {formatCurrency(college.fees.amount, { notation: "compact" })}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button variant="primary" size="sm" className="flex-1">
            Apply Now
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Brochure
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedColleges() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Featured Colleges
            </h2>
            <p className="text-gray-500 mt-1">
              Top-rated institutions handpicked for you
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-gray-200 hover:bg-white hover:border-gray-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-gray-200 hover:bg-white hover:border-gray-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Colleges Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 lg:-mx-0 lg:px-0 snap-x snap-mandatory"
        >
          {featuredColleges.map((college) => (
            <div
              key={college.id}
              className="flex-shrink-0 w-[300px] snap-start"
            >
              <Link href={`/college/${college.slug}`}>
                <CollegeCard college={college} />
              </Link>
            </div>
          ))}

          {/* View All Card */}
          <div className="flex-shrink-0 w-[300px] snap-start">
            <Link
              href="/colleges"
              className="flex flex-col items-center justify-center h-full min-h-[380px] bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-collegium-blue hover:bg-blue-50/30 transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-8 h-8 text-collegium-blue" />
              </div>
              <span className="text-lg font-semibold text-gray-900">
                View All Colleges
              </span>
              <span className="text-sm text-gray-500 mt-1">
                Explore 25,000+ colleges
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
