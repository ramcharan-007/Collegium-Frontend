"use client";

import * as React from "react";
import { MapPin, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";

const statesData = [
  {
    name: "Maharashtra",
    cities: [
      { name: "Mumbai", count: 420 },
      { name: "Pune", count: 310 },
      { name: "Nagpur", count: 145 },
    ],
    totalColleges: 1250,
  },
  {
    name: "Karnataka",
    cities: [
      { name: "Bangalore", count: 380 },
      { name: "Mysore", count: 85 },
      { name: "Mangalore", count: 62 },
    ],
    totalColleges: 890,
  },
  {
    name: "Tamil Nadu",
    cities: [
      { name: "Chennai", count: 350 },
      { name: "Coimbatore", count: 180 },
      { name: "Madurai", count: 95 },
    ],
    totalColleges: 1100,
  },
  {
    name: "Delhi NCR",
    cities: [
      { name: "New Delhi", count: 290 },
      { name: "Noida", count: 120 },
      { name: "Gurgaon", count: 85 },
    ],
    totalColleges: 650,
  },
  {
    name: "Uttar Pradesh",
    cities: [
      { name: "Lucknow", count: 210 },
      { name: "Noida", count: 120 },
      { name: "Kanpur", count: 95 },
    ],
    totalColleges: 1400,
  },
  {
    name: "West Bengal",
    cities: [
      { name: "Kolkata", count: 280 },
      { name: "Howrah", count: 45 },
      { name: "Durgapur", count: 38 },
    ],
    totalColleges: 720,
  },
  {
    name: "Rajasthan",
    cities: [
      { name: "Jaipur", count: 195 },
      { name: "Jodhpur", count: 72 },
      { name: "Udaipur", count: 55 },
    ],
    totalColleges: 680,
  },
  {
    name: "Telangana",
    cities: [
      { name: "Hyderabad", count: 340 },
      { name: "Warangal", count: 65 },
      { name: "Nizamabad", count: 30 },
    ],
    totalColleges: 580,
  },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function CollegesByLocation() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Colleges by Location
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Find top colleges in your state and city
            </p>
          </div>
          <Link
            href="/colleges"
            className="text-collegium-blue dark:text-collegium-yellow text-sm font-medium flex items-center gap-1 hover:underline"
          >
            All Locations <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statesData.map((state) => (
            <div
              key={state.name}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-collegium-blue dark:text-collegium-yellow" />
                  {state.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {state.totalColleges.toLocaleString()} colleges
                </span>
              </div>

              <div className="space-y-1.5">
                {state.cities.map((city) => (
                  <Link
                    key={city.name}
                    href={`/colleges?city=${slugify(city.name)}`}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 text-sm hover:bg-collegium-blue/5 dark:hover:bg-collegium-blue/20 transition-colors group"
                  >
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-collegium-blue dark:group-hover:text-collegium-yellow">
                      {city.name}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      {city.count}
                      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href={`/colleges?state=${slugify(state.name)}`}
                className="mt-3 block text-center text-xs text-collegium-blue dark:text-collegium-yellow font-medium hover:underline"
              >
                View all in {state.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
