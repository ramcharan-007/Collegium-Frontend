"use client";

import * as React from "react";
import Link from "next/link";
import { X, ArrowRight, Scale } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { useCompare } from "@/contexts";
import { cn } from "@/lib/utils";

export function FloatingCompareBar() {
  const { compareList, removeFromCompare, clearCompare, maxItems } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t-2 border-collegium-blue shadow-2xl animate-in slide-in-from-bottom">
      <div className="container py-3">
        <div className="flex items-center gap-4">
          {/* College Chips */}
          <div className="flex-1 flex items-center gap-2 overflow-x-auto">
            <Scale className="w-5 h-5 text-collegium-blue shrink-0" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 shrink-0">
              Compare ({compareList.length}/{maxItems}):
            </span>
            {compareList.map((college) => (
              <div
                key={college.id}
                className="flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 text-collegium-blue dark:text-blue-300 px-3 py-1.5 rounded-full text-sm shrink-0"
              >
                <span className="max-w-[120px] truncate">{college.name}</span>
                <button
                  onClick={() => removeFromCompare(college.id)}
                  className="hover:text-red-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            {/* Empty slots */}
            {Array.from({ length: maxItems - compareList.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="w-28 h-8 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-full shrink-0"
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={clearCompare}
              className="text-xs text-gray-500 hover:text-red-500 transition-colors"
            >
              Clear All
            </button>
            <Link href={`/compare?colleges=${compareList.map((c) => c.slug).join(",")}`}>
              <Button
                size="sm"
                className="bg-collegium-blue"
                disabled={compareList.length < 2}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Compare Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
