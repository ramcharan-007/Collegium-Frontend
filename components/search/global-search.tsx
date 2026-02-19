"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  Clock,
  TrendingUp,
  Building2,
  FileText,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchResult {
  type: "college" | "exam" | "course" | "article";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

const recentSearches = [
  "IIT Bombay",
  "JEE Main 2026",
  "MBA Colleges in Bangalore",
  "NEET Preparation",
];

const trendingSearches = [
  { term: "JEE Main 2026 Dates", count: "25K+" },
  { term: "Top Engineering Colleges", count: "18K+" },
  { term: "NEET Cutoff 2025", count: "15K+" },
  { term: "CAT Results", count: "12K+" },
];

const mockResults: SearchResult[] = [
  {
    type: "college",
    id: "1",
    title: "IIT Bombay",
    subtitle: "Mumbai, Maharashtra",
    href: "/college/iit-bombay",
  },
  {
    type: "college",
    id: "2",
    title: "IIT Delhi",
    subtitle: "New Delhi, Delhi",
    href: "/college/iit-delhi",
  },
  {
    type: "college",
    id: "3",
    title: "IIT Madras",
    subtitle: "Chennai, Tamil Nadu",
    href: "/college/iit-madras",
  },
  {
    type: "exam",
    id: "4",
    title: "JEE Main 2026",
    subtitle: "Registration Open",
    href: "/exams/jee-main",
  },
  {
    type: "exam",
    id: "5",
    title: "JEE Advanced 2026",
    subtitle: "Upcoming",
    href: "/exams/jee-advanced",
  },
  {
    type: "course",
    id: "6",
    title: "B.Tech Computer Science",
    subtitle: "4 Years | 2500+ Colleges",
    href: "/courses/btech-cs",
  },
  {
    type: "article",
    id: "7",
    title: "How to Prepare for JEE Main",
    subtitle: "Study Guide",
    href: "/news/jee-main-preparation",
  },
];

const typeIcons: Record<string, React.ElementType> = {
  college: Building2,
  exam: FileText,
  course: GraduationCap,
  article: FileText,
};

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  React.useEffect(() => {
    if (query.length > 1) {
      setIsLoading(true);
      // Simulate search delay
      const timer = setTimeout(() => {
        const filtered = mockResults.filter(
          (r) =>
            r.title.toLowerCase().includes(query.toLowerCase()) ||
            r.subtitle.toLowerCase().includes(query.toLowerCase()),
        );
        setResults(filtered);
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setResults([]);
    }
  }, [query]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (!isOpen) {
          // Parent should handle opening
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search Modal */}
      <div className="relative max-w-2xl mx-auto mt-20 px-4">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Search Input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search colleges, exams, courses..."
              className="flex-1 text-lg bg-transparent border-0 focus:outline-none placeholder:text-gray-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded">
              ESC
            </kbd>
          </div>

          {/* Content */}
          <div className="max-h-[60vh] overflow-y-auto">
            {isLoading ? (
              <div className="p-8 text-center text-gray-500">
                <div className="inline-block w-6 h-6 border-2 border-jirs-blue border-t-transparent rounded-full animate-spin" />
                <p className="mt-2">Searching...</p>
              </div>
            ) : query.length > 1 && results.length > 0 ? (
              <div className="py-2">
                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase">
                  Results
                </div>
                {results.map((result) => {
                  const Icon = typeIcons[result.type];
                  return (
                    <Link
                      key={result.id}
                      href={result.href}
                      onClick={onClose}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-jirs-blue" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900 truncate">
                          {result.title}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {result.subtitle}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  );
                })}
              </div>
            ) : query.length > 1 && results.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-1">Try different keywords</p>
              </div>
            ) : (
              <div className="py-4">
                {/* Recent Searches */}
                <div className="px-4 py-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    Recent Searches
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending */}
                <div className="px-4 py-2 mt-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase mb-2">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Trending Searches
                  </div>
                  <div className="space-y-1">
                    {trendingSearches.map((item, index) => (
                      <button
                        key={item.term}
                        onClick={() => setQuery(item.term)}
                        className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <span className="w-6 h-6 bg-jirs-yellow/20 text-jirs-blue rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <span className="flex-1 text-left text-gray-700">
                          {item.term}
                        </span>
                        <span className="text-xs text-gray-400">
                          {item.count} searches
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="px-4 py-2 mt-4 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <Link
                      href="/colleges"
                      onClick={onClose}
                      className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Building2 className="w-5 h-5 text-jirs-blue" />
                      <span className="text-sm font-medium text-jirs-blue">
                        Browse Colleges
                      </span>
                    </Link>
                    <Link
                      href="/exams"
                      onClick={onClose}
                      className="flex items-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">
                        Explore Exams
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
