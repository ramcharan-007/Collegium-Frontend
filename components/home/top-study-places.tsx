"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";

const topCities = [
  { name: "Delhi NCR", slug: "delhi", colleges: 4200, icon: "🏛️" },
  { name: "Bangalore", slug: "bangalore", colleges: 3800, icon: "🌆" },
  { name: "Mumbai", slug: "mumbai", colleges: 2900, icon: "🏙️" },
  { name: "Hyderabad", slug: "hyderabad", colleges: 2500, icon: "🕌" },
  { name: "Chennai", slug: "chennai", colleges: 2300, icon: "🛕" },
  { name: "Kolkata", slug: "kolkata", colleges: 2100, icon: "🌉" },
  { name: "Pune", slug: "pune", colleges: 2800, icon: "📚" },
  { name: "Jaipur", slug: "jaipur", colleges: 1800, icon: "🏰" },
  { name: "Ahmedabad", slug: "ahmedabad", colleges: 1600, icon: "🏗️" },
  { name: "Lucknow", slug: "lucknow", colleges: 1500, icon: "🕰️" },
  { name: "Chandigarh", slug: "chandigarh", colleges: 1200, icon: "🌳" },
  { name: "Bhopal", slug: "bhopal", colleges: 1100, icon: "🏞️" },
];

export function TopStudyPlaces() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-collegium-blue" />
              Top Study Places
            </h2>
            <p className="text-gray-600 mt-1">Find colleges in your preferred city</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {topCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}-colleges`}
              className="group flex items-center gap-2 px-4 py-2.5 bg-white border rounded-full hover:border-collegium-blue hover:shadow-md transition-all"
            >
              <span className="text-lg">{city.icon}</span>
              <span className="font-medium text-gray-900 group-hover:text-collegium-blue transition-colors">
                {city.name}
              </span>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {city.colleges.toLocaleString("en-IN")}+
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
