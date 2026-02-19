"use client";

import * as React from "react";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  MapPin,
  IndianRupee,
  Building2,
  GraduationCap,
  Trophy,
  Check,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterSection {
  id: string;
  label: string;
  icon: React.ReactNode;
  type: "checkbox" | "radio" | "range" | "rating";
  options?: FilterOption[];
  min?: number;
  max?: number;
}

interface AdvancedFiltersProps {
  filters: FilterSection[];
  selectedFilters: Record<string, string[]>;
  rangeValues: Record<string, [number, number]>;
  onFilterChange: (sectionId: string, values: string[]) => void;
  onRangeChange: (sectionId: string, values: [number, number]) => void;
  onReset: () => void;
  className?: string;
}

export function AdvancedFilters({
  filters,
  selectedFilters,
  rangeValues,
  onFilterChange,
  onRangeChange,
  onReset,
  className,
}: AdvancedFiltersProps) {
  const [expandedSections, setExpandedSections] = React.useState<string[]>(
    filters.slice(0, 3).map((f) => f.id),
  );
  const [searchQuery, setSearchQuery] = React.useState("");

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  const toggleOption = (sectionId: string, optionId: string, type: string) => {
    const current = selectedFilters[sectionId] || [];
    if (type === "radio") {
      onFilterChange(sectionId, current.includes(optionId) ? [] : [optionId]);
    } else {
      onFilterChange(
        sectionId,
        current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId],
      );
    }
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce(
      (acc, arr) => acc + arr.length,
      0,
    );
  };

  const activeCount = getActiveFilterCount();

  return (
    <Card className={cn("overflow-hidden", className)}>
      {/* Header */}
      <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-jirs-blue" />
          <span className="font-semibold text-gray-900">Filters</span>
          {activeCount > 0 && (
            <Badge size="sm" className="bg-jirs-blue">
              {activeCount}
            </Badge>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={onReset}
            className="text-sm text-jirs-blue hover:underline flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
        )}
      </div>

      {/* Search within filters */}
      <div className="p-4 border-b">
        <Input
          placeholder="Search filters..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          leftIcon={<Search className="w-4 h-4" />}
          className="h-9 text-sm"
        />
      </div>

      {/* Filter Sections */}
      <div className="divide-y max-h-[calc(100vh-300px)] overflow-y-auto">
        {filters.map((section) => {
          const isExpanded = expandedSections.includes(section.id);
          const selected = selectedFilters[section.id] || [];

          return (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <span className="font-medium text-gray-900">
                    {section.label}
                  </span>
                  {selected.length > 0 && (
                    <Badge variant="secondary" size="sm">
                      {selected.length}
                    </Badge>
                  )}
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gray-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 space-y-2">
                  {section.type === "checkbox" || section.type === "radio" ? (
                    section.options
                      ?.filter((opt) =>
                        opt.label
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()),
                      )
                      .map((option) => {
                        const isSelected = selected.includes(option.id);
                        return (
                          <label
                            key={option.id}
                            className={cn(
                              "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                              isSelected
                                ? "bg-blue-50 border border-jirs-blue"
                                : "hover:bg-gray-50 border border-transparent",
                            )}
                          >
                            <div
                              className={cn(
                                "w-5 h-5 rounded flex items-center justify-center border-2 transition-colors",
                                section.type === "radio"
                                  ? "rounded-full"
                                  : "rounded",
                                isSelected
                                  ? "bg-jirs-blue border-jirs-blue"
                                  : "border-gray-300",
                              )}
                            >
                              {isSelected && (
                                <Check className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span
                              className={cn(
                                "flex-1 text-sm",
                                isSelected
                                  ? "text-jirs-blue font-medium"
                                  : "text-gray-700",
                              )}
                            >
                              {option.label}
                            </span>
                            {option.count !== undefined && (
                              <span className="text-xs text-gray-400">
                                ({option.count})
                              </span>
                            )}
                          </label>
                        );
                      })
                  ) : section.type === "range" ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Min"
                          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-jirs-blue"
                          value={rangeValues[section.id]?.[0] || ""}
                          onChange={(e) =>
                            onRangeChange(section.id, [
                              parseInt(e.target.value) || 0,
                              rangeValues[section.id]?.[1] || section.max || 0,
                            ])
                          }
                        />
                        <span className="text-gray-400">-</span>
                        <input
                          type="number"
                          placeholder="Max"
                          className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-jirs-blue"
                          value={rangeValues[section.id]?.[1] || ""}
                          onChange={(e) =>
                            onRangeChange(section.id, [
                              rangeValues[section.id]?.[0] || section.min || 0,
                              parseInt(e.target.value) || 0,
                            ])
                          }
                        />
                      </div>
                      <input
                        type="range"
                        min={section.min}
                        max={section.max}
                        className="w-full accent-jirs-blue"
                        value={rangeValues[section.id]?.[1] || section.max}
                        onChange={(e) =>
                          onRangeChange(section.id, [
                            rangeValues[section.id]?.[0] || section.min || 0,
                            parseInt(e.target.value),
                          ])
                        }
                      />
                    </div>
                  ) : section.type === "rating" ? (
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => {
                        const isSelected = selected.includes(rating.toString());
                        return (
                          <label
                            key={rating}
                            className={cn(
                              "flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors",
                              isSelected
                                ? "bg-blue-50 border border-jirs-blue"
                                : "hover:bg-gray-50 border border-transparent",
                            )}
                            onClick={() =>
                              toggleOption(
                                section.id,
                                rating.toString(),
                                "checkbox",
                              )
                            }
                          >
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={cn(
                                    "w-4 h-4",
                                    star <= rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300",
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-700">
                              & above
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Active Filters Summary */}
      {activeCount > 0 && (
        <div className="p-4 border-t bg-gray-50">
          <p className="text-xs text-gray-500 mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(selectedFilters).map(([sectionId, values]) =>
              values.map((value) => {
                const section = filters.find((f) => f.id === sectionId);
                const option = section?.options?.find((o) => o.id === value);
                return (
                  <Badge
                    key={`${sectionId}-${value}`}
                    variant="secondary"
                    size="sm"
                    className="gap-1"
                  >
                    {option?.label || value}
                    <button
                      onClick={() =>
                        onFilterChange(
                          sectionId,
                          values.filter((v) => v !== value),
                        )
                      }
                      className="ml-1 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                );
              }),
            )}
          </div>
        </div>
      )}
    </Card>
  );
}

// Mobile Filter Drawer
export function MobileFilterDrawer({
  isOpen,
  onClose,
  children,
  activeCount,
  onApply,
  onReset,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  activeCount: number;
  onApply: () => void;
  onReset: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl animate-slide-in-right flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-jirs-blue" />
            <span className="font-semibold">Filters</span>
            {activeCount > 0 && (
              <Badge size="sm" className="bg-jirs-blue">
                {activeCount}
              </Badge>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>

        {/* Footer */}
        <div className="p-4 border-t flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onReset}>
            Reset All
          </Button>
          <Button className="flex-1" onClick={onApply}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
