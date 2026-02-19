import Link from "next/link";
import {
  Star,
  MapPin,
  Award,
  TrendingUp,
  Users,
  ArrowUpRight,
  Heart,
  Download,
  ChevronRight,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button, Badge } from "@/components/ui";
import type { CollegeCard as CollegeCardType } from "@/types";

interface CollegeCardProps {
  college: CollegeCardType;
  variant?: "default" | "compact";
  showCompare?: boolean;
  isComparing?: boolean;
  onCompareToggle?: () => void;
}

export function CollegeCard({
  college,
  variant = "default",
  showCompare = true,
  isComparing = false,
  onCompareToggle,
}: CollegeCardProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "group bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg",
        isComparing && "ring-2 ring-jirs-blue",
      )}
    >
      <div className={cn("p-4", isCompact ? "sm:p-4" : "sm:p-5")}>
        {/* Header Row */}
        <div className="flex gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <div
              className={cn(
                "bg-gray-100 rounded-lg flex items-center justify-center font-bold text-jirs-blue",
                isCompact
                  ? "w-14 h-14 text-lg"
                  : "w-16 h-16 sm:w-20 sm:h-20 text-xl",
              )}
            >
              {college.name.charAt(0)}
            </div>
          </div>

          {/* College Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Link
                  href={`/college/${college.slug}`}
                  className="font-bold text-gray-900 hover:text-jirs-blue transition-colors line-clamp-2"
                >
                  {college.name}
                </Link>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">
                    {college.location.city}, {college.location.state}
                  </span>
                </div>
              </div>

              {/* Wishlist Button */}
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {college.type && (
                <Badge variant="secondary" size="sm">
                  {college.type}
                </Badge>
              )}
              {college.approvals?.slice(0, 2).map((approval) => (
                <Badge key={approval} variant="outline" size="sm">
                  {approval}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Rankings Row */}
        {college.rankings && college.rankings.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {college.rankings.slice(0, 3).map((ranking) => (
              <div
                key={ranking.agency}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-yellow-50 text-yellow-700 rounded-md text-xs font-medium"
              >
                <Award className="w-3.5 h-3.5" />#{ranking.rank}{" "}
                {ranking.agency}
              </div>
            ))}
          </div>
        )}

        {/* Stats Grid */}
        <div
          className={cn(
            "grid gap-3 mt-4",
            isCompact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4",
          )}
        >
          {/* Rating */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-1 text-green-600 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold">
                {college.rating?.toFixed(1) || "N/A"}
              </span>
            </div>
            <div className="text-xs text-gray-500">
              {college.reviewCount?.toLocaleString() || 0} reviews
            </div>
          </div>

          {/* Fees */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
              {college.fees
                ? formatCurrency(college.fees.amount, { notation: "compact" })
                : "N/A"}
            </div>
            <div className="text-xs text-gray-500">Total Fees</div>
          </div>

          {/* Average Package */}
          {!isCompact && (
            <div className="bg-gray-50 rounded-lg p-3 hidden sm:block">
              <div className="font-bold text-green-600 mb-1">
                {college.placement?.average
                  ? formatCurrency(college.placement.average, {
                      notation: "compact",
                    })
                  : "N/A"}
              </div>
              <div className="text-xs text-gray-500">Avg Package</div>
            </div>
          )}

          {/* Highest Package */}
          {!isCompact && (
            <div className="bg-gray-50 rounded-lg p-3 hidden sm:block">
              <div className="font-bold text-blue-600 mb-1">
                {college.placement?.highest
                  ? formatCurrency(college.placement.highest, {
                      notation: "compact",
                    })
                  : "N/A"}
              </div>
              <div className="text-xs text-gray-500">Highest Package</div>
            </div>
          )}
        </div>

        {/* Courses Count */}
        {college.coursesCount && college.coursesCount > 0 && !isCompact && (
          <div className="mt-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{college.coursesCount}</span>{" "}
              courses offered
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <Button variant="primary" size="sm" className="flex-1">
            Apply Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            leftIcon={<Download className="w-4 h-4" />}
          >
            Brochure
          </Button>
          {showCompare && (
            <Button
              variant={isComparing ? "gold" : "ghost"}
              size="sm"
              onClick={onCompareToggle}
              className="hidden sm:flex"
            >
              {isComparing ? "Added" : "Compare"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
