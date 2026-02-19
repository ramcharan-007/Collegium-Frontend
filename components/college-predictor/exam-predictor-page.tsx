"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Building2,
  Star,
  MapPin,
  TrendingUp,
  TrendingDown,
  Minus,
  Filter,
  Download,
  Info,
  AlertCircle,
  GraduationCap,
  IndianRupee,
  Users,
  ChevronDown,
} from "lucide-react";

interface ExamData {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  scoreType: "rank" | "percentile" | "score";
  maxScore?: number;
  categories: string[];
  branches?: string[];
}

interface PredictedCollege {
  name: string;
  slug: string;
  location: string;
  type: string;
  branch: string;
  openingRank: number;
  closingRank: number;
  chance: "high" | "medium" | "low";
  rating: number;
  fees: number;
  placement: number;
}

const examData: ExamData = {
  id: "jee-main",
  name: "JEE Main",
  fullName: "Joint Entrance Examination Main",
  icon: "⚙️",
  scoreType: "rank",
  categories: ["General", "OBC-NCL", "SC", "ST", "EWS", "PwD"],
  branches: [
    "Computer Science Engineering",
    "Electronics & Communication",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Information Technology",
    "Aerospace Engineering",
  ],
};

const predictedColleges: PredictedCollege[] = [
  {
    name: "NIT Trichy",
    slug: "nit-trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 2500,
    closingRank: 4800,
    chance: "high",
    rating: 4.6,
    fees: 240000,
    placement: 2200000,
  },
  {
    name: "NIT Warangal",
    slug: "nit-warangal",
    location: "Warangal, Telangana",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 3200,
    closingRank: 5500,
    chance: "high",
    rating: 4.5,
    fees: 230000,
    placement: 1800000,
  },
  {
    name: "NIT Surathkal",
    slug: "nit-surathkal",
    location: "Mangalore, Karnataka",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 2800,
    closingRank: 5200,
    chance: "medium",
    rating: 4.5,
    fees: 250000,
    placement: 2000000,
  },
  {
    name: "IIIT Hyderabad",
    slug: "iiit-hyderabad",
    location: "Hyderabad, Telangana",
    type: "IIIT",
    branch: "Computer Science Engineering",
    openingRank: 1500,
    closingRank: 3500,
    chance: "medium",
    rating: 4.7,
    fees: 350000,
    placement: 2500000,
  },
  {
    name: "NIT Rourkela",
    slug: "nit-rourkela",
    location: "Rourkela, Odisha",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 4500,
    closingRank: 7800,
    chance: "high",
    rating: 4.4,
    fees: 220000,
    placement: 1600000,
  },
  {
    name: "NIT Calicut",
    slug: "nit-calicut",
    location: "Kozhikode, Kerala",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 5200,
    closingRank: 8500,
    chance: "high",
    rating: 4.3,
    fees: 210000,
    placement: 1500000,
  },
  {
    name: "IIIT Delhi",
    slug: "iiit-delhi",
    location: "New Delhi, Delhi",
    type: "IIIT",
    branch: "Computer Science Engineering",
    openingRank: 3800,
    closingRank: 6200,
    chance: "medium",
    rating: 4.5,
    fees: 380000,
    placement: 2200000,
  },
  {
    name: "NIT Durgapur",
    slug: "nit-durgapur",
    location: "Durgapur, West Bengal",
    type: "NIT",
    branch: "Computer Science Engineering",
    openingRank: 6500,
    closingRank: 10000,
    chance: "high",
    rating: 4.2,
    fees: 200000,
    placement: 1400000,
  },
];

function ChanceIndicator({ chance }: { chance: "high" | "medium" | "low" }) {
  const config = {
    high: {
      color: "bg-green-100 text-green-700",
      label: "High Chance",
      icon: TrendingUp,
    },
    medium: {
      color: "bg-yellow-100 text-yellow-700",
      label: "Medium Chance",
      icon: Minus,
    },
    low: {
      color: "bg-red-100 text-red-700",
      label: "Low Chance",
      icon: TrendingDown,
    },
  };

  const { color, label, icon: Icon } = config[chance];

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${color}`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

interface ExamPredictorPageProps {
  examId: string;
}

export function ExamPredictorPage({ examId }: ExamPredictorPageProps) {
  const [step, setStep] = useState<"input" | "results">("input");
  const [rank, setRank] = useState("");
  const [category, setCategory] = useState("General");
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [quota, setQuota] = useState("All India");

  const handlePredict = () => {
    if (rank) {
      setStep("results");
    }
  };

  const handleReset = () => {
    setStep("input");
    setRank("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-8">
        <div className="container-custom">
          <Link
            href="/college-predictor"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Predictors
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{examData.icon}</span>
            <div>
              <h1 className="text-3xl font-bold">
                {examData.name} College Predictor
              </h1>
              <p className="text-blue-200">{examData.fullName}</p>
            </div>
          </div>
        </div>
      </section>

      {step === "input" ? (
        /* Input Form */
        <section className="py-12">
          <div className="container-custom max-w-3xl">
            <div className="bg-white rounded-xl border shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-blue-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Enter Your Details
                </h2>
                <p className="text-gray-600">
                  Fill in your exam details to get personalized predictions
                </p>
              </div>

              <div className="space-y-6">
                {/* Rank/Score Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your JEE Main Rank (AIR) *
                  </label>
                  <input
                    type="number"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                    placeholder="Enter your All India Rank"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Enter your All India Rank from JEE Main result
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {examData.categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${
                          category === cat
                            ? "bg-blue-900 text-white border-blue-900"
                            : "bg-white text-gray-700 border-gray-300 hover:border-blue-300"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quota */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quota
                  </label>
                  <select
                    value={quota}
                    onChange={(e) => setQuota(e.target.value)}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="All India">All India Quota</option>
                    <option value="Home State">Home State Quota</option>
                    <option value="Other State">Other State Quota</option>
                  </select>
                </div>

                {/* Branch Preferences */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Branches (Optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {examData.branches?.map((branch) => (
                      <button
                        key={branch}
                        onClick={() => {
                          setSelectedBranches((prev) =>
                            prev.includes(branch)
                              ? prev.filter((b) => b !== branch)
                              : [...prev, branch],
                          );
                        }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedBranches.includes(branch)
                            ? "bg-blue-900 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {branch}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 rounded-lg p-4 flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-800">
                    <strong>Pro Tip:</strong> Our predictions are based on
                    previous year cutoffs and may vary slightly from actual
                    results. Use this as a guide for counseling preparation.
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handlePredict}
                  disabled={!rank}
                  className="w-full"
                  size="lg"
                >
                  Predict My Colleges
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Results */
        <section className="py-8">
          <div className="container-custom">
            {/* Result Summary */}
            <div className="bg-white rounded-xl border p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Prediction Results
                  </h2>
                  <p className="text-gray-600">
                    Based on AIR {rank} | {category} | {quota}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" onClick={handleReset}>
                    Modify Input
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Export PDF
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="text-2xl font-bold text-green-700">
                      {
                        predictedColleges.filter((c) => c.chance === "high")
                          .length
                      }
                    </div>
                    <div className="text-green-600">High Chance Colleges</div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="flex items-center gap-3">
                  <Minus className="h-8 w-8 text-yellow-600" />
                  <div>
                    <div className="text-2xl font-bold text-yellow-700">
                      {
                        predictedColleges.filter((c) => c.chance === "medium")
                          .length
                      }
                    </div>
                    <div className="text-yellow-600">
                      Medium Chance Colleges
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-2xl font-bold text-blue-700">
                      {predictedColleges.length}
                    </div>
                    <div className="text-blue-600">Total Colleges Found</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
              <Button variant="outline" className="gap-2 shrink-0">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              {["All", "NIT", "IIIT", "GFTI"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    type === "All"
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Results List */}
            <div className="space-y-4">
              {predictedColleges.map((college, index) => (
                <div
                  key={college.slug}
                  className="bg-white rounded-xl border hover:border-blue-200 hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* College Info */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center shrink-0">
                            <Building2 className="h-7 w-7 text-blue-900" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Link
                                href={`/college/${college.slug}`}
                                className="text-lg font-semibold text-gray-900 hover:text-blue-900"
                              >
                                {college.name}
                              </Link>
                              <Badge variant="outline">{college.type}</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                              <MapPin className="h-4 w-4" />
                              {college.location}
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                              <GraduationCap className="h-4 w-4 text-blue-900" />
                              <span className="text-sm font-medium text-blue-900">
                                {college.branch}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Cutoff Info */}
                      <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">
                            Opening Rank
                          </div>
                          <div className="font-bold text-gray-900">
                            {college.openingRank.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">
                            Closing Rank
                          </div>
                          <div className="font-bold text-gray-900">
                            {college.closingRank.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">
                            Avg. Package
                          </div>
                          <div className="font-bold text-green-600">
                            ₹{(college.placement / 100000).toFixed(0)}L
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">
                            Fees/Year
                          </div>
                          <div className="font-bold text-gray-900">
                            ₹{(college.fees / 1000).toFixed(0)}K
                          </div>
                        </div>
                        <ChanceIndicator chance={college.chance} />
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button size="sm" asChild>
                          <Link href={`/college/${college.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Results
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 rounded-xl p-6 mt-8 flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-1">
                  Disclaimer
                </h3>
                <p className="text-sm text-yellow-700">
                  These predictions are based on previous year cutoff data and
                  trends. Actual cutoffs may vary depending on various factors
                  like number of candidates, difficulty level, and seat
                  availability. Please use this as a reference guide only and
                  verify with official counseling authorities.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
