"use client";

import * as React from "react";

interface RecentCollege {
  id: string;
  name: string;
  slug: string;
  city: string;
  rating?: number;
  visitedAt: string;
}

interface RecentlyViewedContextType {
  recentColleges: RecentCollege[];
  addRecentCollege: (college: Omit<RecentCollege, "visitedAt">) => void;
  clearRecent: () => void;
}

const RecentlyViewedContext = React.createContext<RecentlyViewedContextType | null>(null);

const MAX_RECENT = 10;
const STORAGE_KEY = "collegium_recently_viewed";

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [recentColleges, setRecentColleges] = React.useState<RecentCollege[]>([]);

  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setRecentColleges(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentColleges));
  }, [recentColleges]);

  const addRecentCollege = (college: Omit<RecentCollege, "visitedAt">) => {
    setRecentColleges((prev) => {
      const filtered = prev.filter((c) => c.id !== college.id);
      const newEntry: RecentCollege = {
        ...college,
        visitedAt: new Date().toISOString(),
      };
      return [newEntry, ...filtered].slice(0, MAX_RECENT);
    });
  };

  const clearRecent = () => {
    setRecentColleges([]);
  };

  return (
    <RecentlyViewedContext.Provider
      value={{ recentColleges, addRecentCollege, clearRecent }}
    >
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = React.useContext(RecentlyViewedContext);
  if (!context) {
    throw new Error("useRecentlyViewed must be used within a RecentlyViewedProvider");
  }
  return context;
}
