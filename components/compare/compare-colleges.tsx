"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  X,
  Plus,
  Check,
  ChevronDown,
  ChevronUp,
  Building2,
  MapPin,
  Star,
  GraduationCap,
  Users,
  IndianRupee,
  Trophy,
  Briefcase,
  ArrowUpDown,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface CompareCollege {
  id: string;
  name: string;
  shortName: string;
  location: {
    city: string;
    state: string;
  };
  image: string;
  logo: string;
  type: string;
  establishedYear: number;
  ranking: {
    nirf?: number;
    qs?: number;
  };
  rating: number;
  reviewsCount: number;
  fees: {
    min: number;
    max: number;
  };
  courses: number;
  placements: {
    averagePackage: number;
    highestPackage: number;
    placementRate: number;
  };
  facilities: string[];
  accreditation: string[];
}

const sampleColleges: CompareCollege[] = [
  {
    id: "1",
    name: "Indian Institute of Technology Bombay",
    shortName: "IIT Bombay",
    location: { city: "Mumbai", state: "Maharashtra" },
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
    type: "Government",
    establishedYear: 1958,
    ranking: { nirf: 3, qs: 149 },
    rating: 4.8,
    reviewsCount: 2341,
    fees: { min: 200000, max: 800000 },
    courses: 156,
    placements: {
      averagePackage: 2800000,
      highestPackage: 20000000,
      placementRate: 98,
    },
    facilities: [
      "Library",
      "Hostel",
      "Sports Complex",
      "Labs",
      "Wifi",
      "Medical",
    ],
    accreditation: ["NAAC A++", "NBA", "AICTE"],
  },
  {
    id: "2",
    name: "Indian Institute of Technology Delhi",
    shortName: "IIT Delhi",
    location: { city: "New Delhi", state: "Delhi" },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
    type: "Government",
    establishedYear: 1961,
    ranking: { nirf: 2, qs: 150 },
    rating: 4.9,
    reviewsCount: 2156,
    fees: { min: 210000, max: 850000 },
    courses: 142,
    placements: {
      averagePackage: 3000000,
      highestPackage: 22000000,
      placementRate: 97,
    },
    facilities: [
      "Library",
      "Hostel",
      "Sports Complex",
      "Labs",
      "Wifi",
      "Medical",
      "Gym",
    ],
    accreditation: ["NAAC A++", "NBA", "AICTE"],
  },
  {
    id: "3",
    name: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    location: { city: "Chennai", state: "Tamil Nadu" },
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
    type: "Government",
    establishedYear: 1959,
    ranking: { nirf: 1, qs: 155 },
    rating: 4.9,
    reviewsCount: 2890,
    fees: { min: 195000, max: 780000 },
    courses: 168,
    placements: {
      averagePackage: 2750000,
      highestPackage: 21000000,
      placementRate: 99,
    },
    facilities: [
      "Library",
      "Hostel",
      "Sports Complex",
      "Labs",
      "Wifi",
      "Medical",
      "Research Park",
    ],
    accreditation: ["NAAC A++", "NBA", "AICTE"],
  },
  {
    id: "4",
    name: "Birla Institute of Technology and Science, Pilani",
    shortName: "BITS Pilani",
    location: { city: "Pilani", state: "Rajasthan" },
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100",
    type: "Private",
    establishedYear: 1964,
    ranking: { nirf: 26 },
    rating: 4.5,
    reviewsCount: 1567,
    fees: { min: 450000, max: 1200000 },
    courses: 89,
    placements: {
      averagePackage: 2100000,
      highestPackage: 18000000,
      placementRate: 94,
    },
    facilities: ["Library", "Hostel", "Sports Complex", "Labs", "Wifi"],
    accreditation: ["NAAC A", "UGC"],
  },
];

interface ComparisonCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  isExpanded: boolean;
}

export function CompareColleges() {
  const [selectedColleges, setSelectedColleges] = React.useState<
    CompareCollege[]
  >([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);
  const [categories, setCategories] = React.useState<ComparisonCategory[]>([
    {
      id: "overview",
      name: "Overview",
      icon: <Building2 className="w-4 h-4" />,
      isExpanded: true,
    },
    {
      id: "rankings",
      name: "Rankings & Ratings",
      icon: <Trophy className="w-4 h-4" />,
      isExpanded: true,
    },
    {
      id: "fees",
      name: "Fees & Courses",
      icon: <IndianRupee className="w-4 h-4" />,
      isExpanded: true,
    },
    {
      id: "placements",
      name: "Placements",
      icon: <Briefcase className="w-4 h-4" />,
      isExpanded: true,
    },
    {
      id: "facilities",
      name: "Facilities",
      icon: <Users className="w-4 h-4" />,
      isExpanded: false,
    },
  ]);

  const filteredColleges = sampleColleges.filter(
    (college) =>
      !selectedColleges.find((s) => s.id === college.id) &&
      (college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.shortName.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const addCollege = (college: CompareCollege) => {
    if (selectedColleges.length < 4) {
      setSelectedColleges([...selectedColleges, college]);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const removeCollege = (collegeId: string) => {
    setSelectedColleges(selectedColleges.filter((c) => c.id !== collegeId));
  };

  const toggleCategory = (categoryId: string) => {
    setCategories(
      categories.map((cat) =>
        cat.id === categoryId ? { ...cat, isExpanded: !cat.isExpanded } : cat,
      ),
    );
  };

  const getBestValue = (values: (number | undefined)[], higher = true) => {
    const numericValues = values.filter((v): v is number => v !== undefined);
    if (numericValues.length === 0) return undefined;
    return higher ? Math.max(...numericValues) : Math.min(...numericValues);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-collegium-blue text-white py-8">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Compare Colleges
          </h1>
          <p className="text-blue-200">
            Compare up to 4 colleges side by side to find your perfect match
          </p>
        </div>
      </div>

      <div className="container py-8">
        {/* College Selection Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => {
            const college = selectedColleges[index];
            return (
              <Card key={index} className="relative min-h-48 p-4">
                {college ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => removeCollege(college.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden">
                      <img
                        src={college.logo}
                        alt={college.shortName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm line-clamp-2">
                        {college.name}
                      </h3>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {college.location.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" size="sm">
                        {college.type}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {college.rating}
                      </span>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowSearch(true)}
                    className="w-full h-full flex flex-col items-center justify-center gap-3 text-gray-400 hover:text-collegium-blue hover:border-collegium-blue border-2 border-dashed border-gray-200 rounded-lg transition-colors min-h-48"
                  >
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Plus className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-medium">Add College</span>
                  </button>
                )}
              </Card>
            );
          })}
        </div>

        {/* Search Modal */}
        {showSearch && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50">
            <Card className="w-full max-w-lg mx-4 max-h-[60vh] overflow-hidden">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Add College to Compare</h3>
                  <button
                    onClick={() => {
                      setShowSearch(false);
                      setSearchQuery("");
                    }}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <Input
                  placeholder="Search colleges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  leftIcon={<Search className="w-4 h-4" />}
                  autoFocus
                />
              </div>
              <div className="overflow-y-auto max-h-80">
                {filteredColleges.length > 0 ? (
                  filteredColleges.map((college) => (
                    <button
                      key={college.id}
                      onClick={() => addCollege(college)}
                      className="w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors text-left border-b last:border-b-0"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden shrink-0">
                        <img
                          src={college.logo}
                          alt={college.shortName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {college.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {college.location.city}, {college.location.state}
                        </p>
                      </div>
                      <Plus className="w-5 h-5 text-gray-400" />
                    </button>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <Building2 className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No colleges found</p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}

        {/* Comparison Table */}
        {selectedColleges.length >= 2 ? (
          <div className="space-y-4">
            {categories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="font-semibold">{category.name}</span>
                  </div>
                  {category.isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {category.isExpanded && (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {category.id === "overview" && (
                          <>
                            <CompareRow
                              label="Type"
                              values={selectedColleges.map((c) => c.type)}
                            />
                            <CompareRow
                              label="Established"
                              values={selectedColleges.map((c) =>
                                c.establishedYear.toString(),
                              )}
                            />
                            <CompareRow
                              label="Location"
                              values={selectedColleges.map(
                                (c) =>
                                  `${c.location.city}, ${c.location.state}`,
                              )}
                            />
                            <CompareRow
                              label="Accreditation"
                              values={selectedColleges.map((c) =>
                                c.accreditation.join(", "),
                              )}
                            />
                          </>
                        )}

                        {category.id === "rankings" && (
                          <>
                            <CompareRow
                              label="NIRF Rank"
                              values={selectedColleges.map(
                                (c) => c.ranking.nirf?.toString() || "N/A",
                              )}
                              highlight={getBestValue(
                                selectedColleges.map((c) => c.ranking.nirf),
                                false,
                              )}
                              highlightType="lower"
                              numericValues={selectedColleges.map(
                                (c) => c.ranking.nirf,
                              )}
                            />
                            <CompareRow
                              label="QS World Rank"
                              values={selectedColleges.map(
                                (c) => c.ranking.qs?.toString() || "N/A",
                              )}
                            />
                            <CompareRow
                              label="Rating"
                              values={selectedColleges.map(
                                (c) => `${c.rating}/5`,
                              )}
                              highlight={getBestValue(
                                selectedColleges.map((c) => c.rating),
                              )}
                              highlightType="higher"
                              numericValues={selectedColleges.map(
                                (c) => c.rating,
                              )}
                            />
                            <CompareRow
                              label="Reviews"
                              values={selectedColleges.map((c) =>
                                c.reviewsCount.toLocaleString(),
                              )}
                            />
                          </>
                        )}

                        {category.id === "fees" && (
                          <>
                            <CompareRow
                              label="Fee Range"
                              values={selectedColleges.map(
                                (c) =>
                                  `${formatCurrency(c.fees.min)} - ${formatCurrency(c.fees.max)}`,
                              )}
                            />
                            <CompareRow
                              label="Total Courses"
                              values={selectedColleges.map((c) =>
                                c.courses.toString(),
                              )}
                              highlight={getBestValue(
                                selectedColleges.map((c) => c.courses),
                              )}
                              highlightType="higher"
                              numericValues={selectedColleges.map(
                                (c) => c.courses,
                              )}
                            />
                          </>
                        )}

                        {category.id === "placements" && (
                          <>
                            <CompareRow
                              label="Average Package"
                              values={selectedColleges.map((c) =>
                                formatCurrency(c.placements.averagePackage),
                              )}
                              highlight={getBestValue(
                                selectedColleges.map(
                                  (c) => c.placements.averagePackage,
                                ),
                              )}
                              highlightType="higher"
                              numericValues={selectedColleges.map(
                                (c) => c.placements.averagePackage,
                              )}
                            />
                            <CompareRow
                              label="Highest Package"
                              values={selectedColleges.map((c) =>
                                formatCurrency(c.placements.highestPackage),
                              )}
                              highlight={getBestValue(
                                selectedColleges.map(
                                  (c) => c.placements.highestPackage,
                                ),
                              )}
                              highlightType="higher"
                              numericValues={selectedColleges.map(
                                (c) => c.placements.highestPackage,
                              )}
                            />
                            <CompareRow
                              label="Placement Rate"
                              values={selectedColleges.map(
                                (c) => `${c.placements.placementRate}%`,
                              )}
                              highlight={getBestValue(
                                selectedColleges.map(
                                  (c) => c.placements.placementRate,
                                ),
                              )}
                              highlightType="higher"
                              numericValues={selectedColleges.map(
                                (c) => c.placements.placementRate,
                              )}
                            />
                          </>
                        )}

                        {category.id === "facilities" && (
                          <>
                            <CompareRow
                              label="Available"
                              values={selectedColleges.map((c) =>
                                c.facilities.join(", "),
                              )}
                            />
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </Card>
            ))}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button variant="outline" onClick={() => setSelectedColleges([])}>
                Clear All
              </Button>
              <Button>Download Comparison</Button>
            </div>
          </div>
        ) : (
          <Card className="p-12 text-center">
            <ArrowUpDown className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Select Colleges to Compare
            </h3>
            <p className="text-gray-500 mb-6">
              Add at least 2 colleges to start comparing. You can compare up to
              4 colleges at a time.
            </p>
            <Button onClick={() => setShowSearch(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First College
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
}

interface CompareRowProps {
  label: string;
  values: string[];
  highlight?: number;
  highlightType?: "higher" | "lower";
  numericValues?: (number | undefined)[];
}

function CompareRow({
  label,
  values,
  highlight,
  highlightType,
  numericValues,
}: CompareRowProps) {
  const isHighlighted = (index: number) => {
    if (highlight === undefined || !numericValues) return false;
    const value = numericValues[index];
    if (value === undefined) return false;
    if (highlightType === "lower") {
      return value === highlight;
    }
    return value === highlight;
  };

  return (
    <tr className="border-b last:border-b-0">
      <td className="px-4 py-3 text-sm font-medium text-gray-600 bg-gray-50 w-36 md:w-48">
        {label}
      </td>
      {values.map((value, index) => (
        <td
          key={index}
          className={cn(
            "px-4 py-3 text-sm text-center min-w-32",
            isHighlighted(index) && "bg-green-50 text-green-700 font-medium",
          )}
        >
          {value}
          {isHighlighted(index) && (
            <Check className="w-4 h-4 inline-block ml-1 text-green-600" />
          )}
        </td>
      ))}
    </tr>
  );
}
