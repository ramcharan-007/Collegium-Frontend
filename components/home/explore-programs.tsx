"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const programs = [
  { label: "All", href: "/colleges", count: 25000 },
  { label: "B.Tech", href: "/courses/btech", count: 6361 },
  { label: "MBA", href: "/courses/mba", count: 8001 },
  { label: "MBBS", href: "/courses/mbbs", count: 2497 },
  { label: "M.Tech", href: "/courses/mtech", count: 3200 },
  { label: "B.Sc", href: "/courses/bsc", count: 5713 },
  { label: "BA", href: "/courses/ba", count: 4890 },
  { label: "B.Com", href: "/courses/bcom", count: 6944 },
  { label: "BCA", href: "/courses/bca", count: 3100 },
  { label: "MCA", href: "/courses/mca", count: 2800 },
  { label: "LLB", href: "/courses/llb", count: 1200 },
  { label: "B.Ed", href: "/courses/bed", count: 5619 },
  { label: "BBA", href: "/courses/bba", count: 4500 },
  { label: "B.Pharm", href: "/courses/bpharm", count: 2100 },
  { label: "M.Sc", href: "/courses/msc", count: 3400 },
  { label: "PhD", href: "/courses/phd", count: 1800 },
];

export function ExplorePrograms() {
  const [active, setActive] = React.useState("All");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <section className="py-8 bg-white border-b">
      <div className="container">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Explore Programs
        </h2>
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        >
          {programs.map((program) => (
            <Link
              key={program.label}
              href={program.href}
              onClick={() => setActive(program.label)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                active === program.label
                  ? "bg-collegium-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-collegium-blue"
              )}
            >
              {program.label}
              <span className="ml-1.5 text-xs opacity-70">
                ({program.count.toLocaleString("en-IN")})
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
