"use client";

import * as React from "react";

interface CompareItem {
  id: string;
  name: string;
  slug: string;
}

interface CompareContextType {
  compareList: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isInCompare: (id: string) => boolean;
  maxItems: number;
}

const CompareContext = React.createContext<CompareContextType | null>(null);

const MAX_COMPARE = 4;
const STORAGE_KEY = "collegium_compare";

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [compareList, setCompareList] = React.useState<CompareItem[]>([]);

  // Load from localStorage on mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompareList(JSON.parse(stored));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  // Persist to localStorage on change
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compareList));
  }, [compareList]);

  const addToCompare = (item: CompareItem) => {
    setCompareList((prev) => {
      if (prev.length >= MAX_COMPARE) return prev;
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareList((prev) => prev.filter((i) => i.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompare = (id: string) => {
    return compareList.some((i) => i.id === id);
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        maxItems: MAX_COMPARE,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const context = React.useContext(CompareContext);
  if (!context) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
}
