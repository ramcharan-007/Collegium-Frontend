"use client";

import * as React from "react";
import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const searchSuggestions = [
  "IIT Bombay",
  "MBA Colleges in Bangalore",
  "JEE Main 2026",
  "NEET Preparation",
  "Top Engineering Colleges",
];

const quickSearches = [
  { label: "Engineering", href: "/engineering-colleges" },
  { label: "MBA", href: "/mba-colleges" },
  { label: "Medical", href: "/medical-colleges" },
  { label: "JEE Main", href: "/exams/jee-main" },
  { label: "NEET", href: "/exams/neet" },
];

export function HeroSearch() {
  const [query, setQuery] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <section className="relative bg-gradient-to-br from-jirs-blue via-blue-600 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-jirs-yellow rounded-full blur-3xl" />
      </div>

      <div className="container relative py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect <span className="text-jirs-yellow">College</span>
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Explore 25,000+ colleges, compare courses, check rankings, and make
            informed decisions about your education journey.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div
              className={cn(
                "relative bg-white rounded-2xl shadow-xl transition-all duration-300",
                isFocused && "ring-4 ring-jirs-yellow/30",
              )}
            >
              <div className="flex items-center">
                <div className="pl-5">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  placeholder="Search colleges, courses, exams..."
                  className="flex-1 px-4 py-4 lg:py-5 text-gray-900 placeholder:text-gray-400 bg-transparent border-0 focus:outline-none text-base lg:text-lg"
                />
                <button className="m-2 px-6 py-3 bg-jirs-blue text-white font-medium rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <span className="hidden sm:inline">Search</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Search Suggestions Dropdown */}
            {isFocused && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-10 animate-fade-in">
                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">
                  Popular Searches
                </div>
                {searchSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full px-4 py-2.5 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3"
                    onClick={() => setQuery(suggestion)}
                  >
                    <Search className="w-4 h-4 text-gray-400" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Search Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-sm text-blue-200">Popular:</span>
            {quickSearches.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">
                25K+
              </div>
              <div className="text-sm text-blue-200">Colleges</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">
                500+
              </div>
              <div className="text-sm text-blue-200">Courses</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">
                100+
              </div>
              <div className="text-sm text-blue-200">Exams</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white">
                1M+
              </div>
              <div className="text-sm text-blue-200">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
