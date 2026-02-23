"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Badge, Button } from "@/components/ui";

const admissionItems = [
  { course: "B.Tech Admission", href: "/courses/btech", deadline: "May 2026", status: "open" },
  { course: "MBA Admission", href: "/courses/mba", deadline: "Mar 2026", status: "open" },
  { course: "MBBS Admission", href: "/courses/mbbs", deadline: "Jun 2026", status: "upcoming" },
  { course: "B.Ed Admission", href: "/courses/bed", deadline: "Apr 2026", status: "open" },
  { course: "BA Admission", href: "/courses/ba", deadline: "Jul 2026", status: "upcoming" },
  { course: "M.Tech Admission", href: "/courses/mtech", deadline: "Jun 2026", status: "open" },
  { course: "BBA Admission", href: "/courses/bba", deadline: "May 2026", status: "upcoming" },
  { course: "LLB Admission", href: "/courses/llb", deadline: "Jun 2026", status: "upcoming" },
  { course: "BCA Admission", href: "/courses/bca", deadline: "Jul 2026", status: "upcoming" },
  { course: "PhD Admission", href: "/courses/phd", deadline: "Apr 2026", status: "open" },
  { course: "B.Sc Admission", href: "/courses/bsc", deadline: "Jul 2026", status: "upcoming" },
  { course: "MCA Admission", href: "/courses/mca", deadline: "Jun 2026", status: "upcoming" },
];

export function AdmissionSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-collegium-yellow" />
              Admission 2026
            </h2>
            <p className="text-gray-600 mt-1">Ongoing and upcoming admission cycles</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {admissionItems.map((item) => (
            <Link
              key={item.course}
              href={item.href}
              className="group flex items-center gap-2 px-4 py-2.5 bg-white border rounded-lg hover:border-collegium-blue hover:shadow-md transition-all"
            >
              <span className="font-medium text-gray-900 group-hover:text-collegium-blue transition-colors text-sm">
                {item.course}
              </span>
              <Badge
                variant={item.status === "open" ? "default" : "secondary"}
                className="text-xs"
              >
                {item.status === "open" ? "Open" : "Coming"}
              </Badge>
              <span className="text-xs text-gray-400">{item.deadline}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
