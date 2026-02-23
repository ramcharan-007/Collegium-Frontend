"use client";

import * as React from "react";
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Badge,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
  type: "checkbox" | "radio" | "range";
}

const filterGroups: FilterGroup[] = [
  {
    id: "stream",
    label: "Stream",
    type: "checkbox",
    options: [
      { id: "engineering", label: "Engineering", count: 6361 },
      { id: "management", label: "Management", count: 8001 },
      { id: "medical", label: "Medical", count: 2497 },
      { id: "law", label: "Law", count: 1890 },
      { id: "arts", label: "Arts & Humanities", count: 5713 },
      { id: "science", label: "Science", count: 4521 },
    ],
  },
  {
    id: "state",
    label: "State",
    type: "checkbox",
    options: [
      { id: "maharashtra", label: "Maharashtra", count: 3215 },
      { id: "karnataka", label: "Karnataka", count: 2891 },
      { id: "tamil-nadu", label: "Tamil Nadu", count: 2567 },
      { id: "delhi", label: "Delhi", count: 1234 },
      { id: "uttar-pradesh", label: "Uttar Pradesh", count: 2890 },
      { id: "west-bengal", label: "West Bengal", count: 1567 },
    ],
  },
  {
    id: "city",
    label: "City",
    type: "checkbox",
    options: [
      { id: "mumbai", label: "Mumbai", count: 845 },
      { id: "delhi", label: "Delhi", count: 723 },
      { id: "bangalore", label: "Bangalore", count: 912 },
      { id: "chennai", label: "Chennai", count: 567 },
      { id: "pune", label: "Pune", count: 634 },
      { id: "hyderabad", label: "Hyderabad", count: 521 },
    ],
  },
  {
    id: "ownership",
    label: "Ownership",
    type: "checkbox",
    options: [
      { id: "government", label: "Government", count: 4521 },
      { id: "private", label: "Private", count: 18234 },
      { id: "public-private", label: "Public-Private", count: 890 },
    ],
  },
  {
    id: "accreditation",
    label: "Accreditation",
    type: "checkbox",
    options: [
      { id: "naac-a", label: "NAAC A++", count: 123 },
      { id: "naac-a-plus", label: "NAAC A+", count: 456 },
      { id: "naac-a-only", label: "NAAC A", count: 890 },
      { id: "naac-b", label: "NAAC B", count: 1234 },
      { id: "nba", label: "NBA Accredited", count: 567 },
    ],
  },
  {
    id: "exam-accepted",
    label: "Exam Accepted",
    type: "checkbox",
    options: [
      { id: "jee-main", label: "JEE Main", count: 3456 },
      { id: "jee-advanced", label: "JEE Advanced", count: 234 },
      { id: "cat", label: "CAT", count: 2345 },
      { id: "neet", label: "NEET", count: 1234 },
      { id: "gate", label: "GATE", count: 890 },
    ],
  },
  {
    id: "fees",
    label: "Fees Range",
    type: "range",
    options: [
      { id: "0-100000", label: "Under ₹1 Lakh" },
      { id: "100000-300000", label: "₹1L - ₹3L" },
      { id: "300000-500000", label: "₹3L - ₹5L" },
      { id: "500000-1000000", label: "₹5L - ₹10L" },
      { id: "1000000+", label: "Above ₹10L" },
    ],
  },
  {
    id: "rating",
    label: "Rating",
    type: "checkbox",
    options: [
      { id: "4.5+", label: "4.5 & above", count: 234 },
      { id: "4+", label: "4 & above", count: 567 },
      { id: "3.5+", label: "3.5 & above", count: 890 },
      { id: "3+", label: "3 & above", count: 1234 },
    ],
  },
];

interface FilterSidebarProps {
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string) => void;
  onClearAll: () => void;
  className?: string;
}

function FilterSection({
  group,
  selectedOptions,
  onOptionChange,
}: {
  group: FilterGroup;
  selectedOptions: string[];
  onOptionChange: (optionId: string) => void;
}) {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);

  const displayedOptions = showAll ? group.options : group.options.slice(0, 5);
  const hasMore = group.options.length > 5;

  return (
    <div className="border-b border-gray-100 py-4">
      <button
        className="flex items-center justify-between w-full text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="font-medium text-gray-900">{group.label}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-2">
          {displayedOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.id)}
                onChange={() => onOptionChange(option.id)}
                className="w-4 h-4 rounded border-gray-300 text-collegium-blue focus:ring-collegium-blue"
              />
              <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                {option.label}
              </span>
              {option.count && (
                <span className="text-xs text-gray-400">({option.count})</span>
              )}
            </label>
          ))}

          {hasMore && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-collegium-blue hover:underline mt-2"
            >
              {showAll ? "Show Less" : `+${group.options.length - 5} More`}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function FilterSidebar({
  selectedFilters,
  onFilterChange,
  onClearAll,
  className,
}: FilterSidebarProps) {
  const totalFilters = Object.values(selectedFilters).flat().length;

  return (
    <aside
      className={cn(
        "bg-white rounded-xl border border-gray-200 p-4",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          <h3 className="font-semibold text-gray-900">Filters</h3>
          {totalFilters > 0 && (
            <Badge variant="primary" size="sm">
              {totalFilters}
            </Badge>
          )}
        </div>
        {totalFilters > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm text-collegium-blue hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear All
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        {filterGroups.map((group) => (
          <FilterSection
            key={group.id}
            group={group}
            selectedOptions={selectedFilters[group.id] || []}
            onOptionChange={(optionId) => onFilterChange(group.id, optionId)}
          />
        ))}
      </div>
    </aside>
  );
}

// Mobile Filter Modal
export function MobileFilterDrawer({
  isOpen,
  onClose,
  selectedFilters,
  onFilterChange,
  onClearAll,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, optionId: string) => void;
  onClearAll: () => void;
}) {
  const totalFilters = Object.values(selectedFilters).flat().length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
            {totalFilters > 0 && (
              <Badge variant="primary" size="sm">
                {totalFilters}
              </Badge>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {filterGroups.map((group) => (
            <FilterSection
              key={group.id}
              group={group}
              selectedOptions={selectedFilters[group.id] || []}
              onOptionChange={(optionId) => onFilterChange(group.id, optionId)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex gap-3">
          {totalFilters > 0 && (
            <Button variant="outline" onClick={onClearAll} className="flex-1">
              Clear All
            </Button>
          )}
          <Button variant="primary" onClick={onClose} className="flex-1">
            Show Results
          </Button>
        </div>
      </div>
    </div>
  );
}
