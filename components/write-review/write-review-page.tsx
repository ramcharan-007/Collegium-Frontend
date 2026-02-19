"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Building2,
  Search,
  CheckCircle2,
  ArrowRight,
  Info,
  Camera,
  X,
  AlertCircle,
  Gift,
} from "lucide-react";

interface ReviewCategory {
  id: string;
  label: string;
  description: string;
}

const reviewCategories: ReviewCategory[] = [
  {
    id: "academics",
    label: "Academics",
    description: "Quality of teaching, curriculum, faculty",
  },
  {
    id: "placements",
    label: "Placements",
    description: "Placement opportunities, companies visiting",
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    description: "Campus facilities, labs, library",
  },
  {
    id: "faculty",
    label: "Faculty",
    description: "Teaching quality, availability, mentorship",
  },
  {
    id: "campus_life",
    label: "Campus Life",
    description: "Hostels, food, clubs, events",
  },
  {
    id: "value_for_money",
    label: "Value for Money",
    description: "Fees vs facilities & outcomes",
  },
];

const guidelines = [
  "Be honest and authentic about your experience",
  "Include specific examples and details",
  "Avoid using offensive or inappropriate language",
  "Don't include personal information of others",
  "Reviews must be at least 100 words long",
  "Focus on facts rather than rumors",
];

const recentColleges = [
  { name: "IIT Delhi", slug: "iit-delhi", location: "New Delhi" },
  { name: "IIM Ahmedabad", slug: "iim-ahmedabad", location: "Ahmedabad" },
  { name: "NIT Trichy", slug: "nit-trichy", location: "Tiruchirappalli" },
  { name: "BITS Pilani", slug: "bits-pilani", location: "Pilani" },
];

export function WriteReviewPage() {
  const [step, setStep] = useState(1);
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [collegeSearch, setCollegeSearch] = useState("");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [overallRating, setOverallRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [course, setCourse] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleCategoryRating = (categoryId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [categoryId]: rating }));
  };

  const handleSubmit = () => {
    // Submit logic
    console.log("Submitting review...");
  };

  const wordCount = reviewContent.split(/\s+/).filter(Boolean).length;
  const isValid =
    selectedCollege &&
    overallRating > 0 &&
    wordCount >= 100 &&
    reviewTitle &&
    course;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-10 md:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-3 md:mb-4">
              <Gift className="h-4 w-4 mr-2" />
              Earn ₹100 Amazon Voucher
            </Badge>
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Write a Review
            </h1>
            <p className="text-lg md:text-xl text-blue-100 px-4">
              Share your college experience and help other students make
              informed decisions
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container py-3 md:py-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-1 md:gap-2">
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold ${
                    step >= s
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step > s ? (
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" />
                  ) : (
                    s
                  )}
                </div>
                <span
                  className={`text-xs md:text-sm hidden sm:inline ${step >= s ? "text-gray-900" : "text-gray-500"}`}
                >
                  {s === 1
                    ? "Select College"
                    : s === 2
                      ? "Rate & Review"
                      : "Submit"}
                </span>
                {s < 3 && (
                  <div
                    className={`w-8 md:w-12 h-0.5 ${step > s ? "bg-blue-900" : "bg-gray-200"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-6 md:py-8">
        <div className="container max-w-3xl">
          {/* Step 1: Select College */}
          {step === 1 && (
            <div className="bg-white rounded-xl border p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Select Your College
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
                Search and select the college you want to review
              </p>

              {/* Search */}
              <div className="relative mb-4 md:mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for your college..."
                  value={collegeSearch}
                  onChange={(e) => setCollegeSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 md:py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Quick Select */}
              {!collegeSearch && (
                <div className="mb-4 md:mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Popular Colleges
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {recentColleges.map((college) => (
                      <button
                        key={college.slug}
                        onClick={() => setSelectedCollege(college.slug)}
                        className={`flex items-center gap-3 p-3 md:p-4 rounded-lg border transition-all text-left ${
                          selectedCollege === college.slug
                            ? "border-blue-900 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                          <Building2 className="h-5 w-5 text-gray-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 text-sm md:text-base truncate">
                            {college.name}
                          </div>
                          <div className="text-xs md:text-sm text-gray-500">
                            {college.location}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Selected College */}
              {selectedCollege && (
                <div className="bg-blue-50 rounded-lg p-3 md:p-4 flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                    <span className="font-medium text-blue-900 text-sm md:text-base">
                      {
                        recentColleges.find((c) => c.slug === selectedCollege)
                          ?.name
                      }
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCollege(null)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              )}

              <Button
                onClick={() => setStep(2)}
                disabled={!selectedCollege}
                className="w-full"
                size="lg"
              >
                Continue
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Rate & Review */}
          {step === 2 && (
            <div className="space-y-4 md:space-y-6">
              {/* Overall Rating */}
              <div className="bg-white rounded-xl border p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Overall Rating
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setOverallRating(star)}
                        className="p-1 transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-10 w-10 ${
                            star <= overallRating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {overallRating > 0 ? `${overallRating}.0` : "Rate"}
                  </span>
                </div>
              </div>

              {/* Category Ratings */}
              <div className="bg-white rounded-xl border p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Rate by Category
                </h2>
                <div className="space-y-4">
                  {reviewCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between py-3 border-b last:border-0"
                    >
                      <div>
                        <div className="font-medium text-gray-900">
                          {category.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {category.description}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() =>
                              handleCategoryRating(category.id, star)
                            }
                            className="p-0.5"
                          >
                            <Star
                              className={`h-6 w-6 ${
                                star <= (ratings[category.id] || 0)
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <div className="bg-white rounded-xl border p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Write Your Review
                </h2>

                {/* Title */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                    placeholder="Summarize your experience in a few words"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Review */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review * (minimum 100 words)
                  </label>
                  <textarea
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                    placeholder="Share your detailed experience about the college..."
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className={`text-sm ${wordCount >= 100 ? "text-green-600" : "text-gray-500"}`}
                    >
                      {wordCount} / 100 words minimum
                    </span>
                    {wordCount >= 100 && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pros (What you liked)
                    </label>
                    <textarea
                      value={pros}
                      onChange={(e) => setPros(e.target.value)}
                      placeholder="List the positives..."
                      rows={3}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cons (What could improve)
                    </label>
                    <textarea
                      value={cons}
                      onChange={(e) => setCons(e.target.value)}
                      placeholder="List areas of improvement..."
                      rows={3}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Photos */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Photos (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Camera className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG up to 5MB each
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Details */}
              <div className="bg-white rounded-xl border p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Your Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course/Program *
                    </label>
                    <input
                      type="text"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      placeholder="e.g., B.Tech Computer Science"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year of Study/Graduation
                    </label>
                    <select
                      value={yearOfStudy}
                      onChange={(e) => setYearOfStudy(e.target.value)}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Alumni">Alumni</option>
                    </select>
                  </div>
                </div>

                {/* Anonymous Toggle */}
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Post review anonymously</span>
                </label>
              </div>

              {/* Guidelines */}
              <div className="bg-yellow-50 rounded-xl p-6 flex items-start gap-3">
                <Info className="h-6 w-6 text-yellow-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Review Guidelines
                  </h3>
                  <ul className="space-y-1">
                    {guidelines.map((guideline, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-yellow-700 flex items-start gap-2"
                      >
                        <span>•</span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!isValid}
                  size="lg"
                >
                  Preview & Submit
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Submit */}
          {step === 3 && (
            <div className="space-y-6">
              {/* Preview */}
              <div className="bg-white rounded-xl border p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Review Preview
                </h2>

                {/* College & Rating */}
                <div className="flex items-center gap-4 pb-6 border-b mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {
                        recentColleges.find((c) => c.slug === selectedCollege)
                          ?.name
                      }
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= overallRating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="font-semibold text-gray-900">
                        {overallRating}.0
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {reviewTitle}
                  </h4>
                  <p className="text-gray-700 whitespace-pre-wrap">
                    {reviewContent}
                  </p>
                </div>

                {/* Pros & Cons */}
                {(pros || cons) && (
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {pros && (
                      <div className="bg-green-50 rounded-lg p-4">
                        <h5 className="font-medium text-green-800 mb-2">
                          Pros
                        </h5>
                        <p className="text-sm text-green-700">{pros}</p>
                      </div>
                    )}
                    {cons && (
                      <div className="bg-red-50 rounded-lg p-4">
                        <h5 className="font-medium text-red-800 mb-2">Cons</h5>
                        <p className="text-sm text-red-700">{cons}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Reviewer Info */}
                <div className="text-sm text-gray-500">
                  {isAnonymous ? "Anonymous" : "Your Name"} • {course} •{" "}
                  {yearOfStudy || "Current Student"}
                </div>
              </div>

              {/* Terms */}
              <div className="bg-blue-50 rounded-xl p-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 mt-0.5 rounded border-gray-300 text-blue-900 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I confirm that this review is based on my genuine experience
                    and I agree to the{" "}
                    <Link href="/terms" className="text-blue-900 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-900 underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Edit Review
                </Button>
                <Button onClick={handleSubmit} size="lg">
                  Submit Review
                  <CheckCircle2 className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
