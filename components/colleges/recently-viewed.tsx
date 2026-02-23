"use client";

import * as React from "react";
import Link from "next/link";
import { Clock, Star, MapPin, X, ChevronRight } from "lucide-react";
import { useRecentlyViewed } from "@/contexts";
import { Card, CardContent, Badge } from "@/components/ui";

export function RecentlyViewed() {
  const { recentColleges, clearRecent } = useRecentlyViewed();

  if (recentColleges.length === 0) return null;

  return (
    <section className="py-8">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-400" />
            Recently Viewed Colleges
          </h3>
          <button
            onClick={clearRecent}
            className="text-xs text-gray-500 hover:text-red-500 transition-colors flex items-center gap-1"
          >
            <X className="w-3 h-3" /> Clear
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {recentColleges.map((college) => (
            <Link
              key={college.id}
              href={`/college/${college.slug}`}
              className="shrink-0 w-60"
            >
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-lg font-bold text-collegium-blue shrink-0">
                      {college.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
                        {college.name}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {college.city}
                      </p>
                    </div>
                  </div>
                  {college.rating && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      {college.rating}/5
                    </div>
                  )}
                  <div className="text-xs text-collegium-blue dark:text-collegium-yellow mt-2 flex items-center gap-1">
                    View Details <ChevronRight className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
