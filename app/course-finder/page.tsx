"use client";

import * as React from "react";
import {
  Search,
  Filter,
  ChevronRight,
  GraduationCap,
  MapPin,
  IndianRupee,
  Clock,
  ArrowRight,
  BookOpen,
  Building2,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

// Course Finder Steps
const steps = [
  { id: 1, title: "Study Level", icon: GraduationCap },
  { id: 2, title: "Stream", icon: BookOpen },
  { id: 3, title: "Location", icon: MapPin },
  { id: 4, title: "Budget", icon: IndianRupee },
];

const studyLevels = [
  { id: "ug", label: "Undergraduate (UG)", description: "B.Tech, BBA, B.Sc, BA, B.Com, MBBS, etc.", icon: "🎓" },
  { id: "pg", label: "Postgraduate (PG)", description: "M.Tech, MBA, M.Sc, MA, M.Com, MD, etc.", icon: "📚" },
  { id: "doctorate", label: "Doctorate (PhD)", description: "Research programs across disciplines", icon: "🔬" },
  { id: "diploma", label: "Diploma", description: "Short-term professional programs", icon: "📋" },
  { id: "certificate", label: "Certificate", description: "Professional certification courses", icon: "🏆" },
];

const streams: Record<string, Array<{ id: string; label: string; count: number }>> = {
  ug: [
    { id: "engineering", label: "Engineering", count: 4500 },
    { id: "management", label: "Management", count: 3200 },
    { id: "medical", label: "Medical", count: 2100 },
    { id: "science", label: "Science", count: 1800 },
    { id: "arts", label: "Arts & Humanities", count: 1500 },
    { id: "commerce", label: "Commerce", count: 1200 },
    { id: "law", label: "Law", count: 900 },
    { id: "design", label: "Design", count: 600 },
    { id: "agriculture", label: "Agriculture", count: 450 },
    { id: "education", label: "Education", count: 380 },
    { id: "pharmacy", label: "Pharmacy", count: 720 },
    { id: "computer-applications", label: "Computer Applications", count: 2800 },
  ],
  pg: [
    { id: "engineering", label: "Engineering", count: 3200 },
    { id: "management", label: "Management/MBA", count: 4100 },
    { id: "medical", label: "Medical", count: 1500 },
    { id: "science", label: "Science", count: 2200 },
    { id: "arts", label: "Arts & Humanities", count: 1000 },
    { id: "law", label: "Law (LLM)", count: 500 },
  ],
  doctorate: [
    { id: "engineering", label: "Engineering", count: 800 },
    { id: "science", label: "Science", count: 650 },
    { id: "management", label: "Management", count: 350 },
    { id: "medical", label: "Medical", count: 400 },
    { id: "arts", label: "Arts & Humanities", count: 300 },
  ],
  diploma: [
    { id: "engineering", label: "Engineering", count: 1200 },
    { id: "management", label: "Management", count: 800 },
    { id: "medical", label: "Paramedical", count: 500 },
    { id: "design", label: "Design", count: 300 },
  ],
  certificate: [
    { id: "it", label: "IT & Software", count: 900 },
    { id: "management", label: "Management", count: 600 },
    { id: "digital-marketing", label: "Digital Marketing", count: 400 },
    { id: "data-science", label: "Data Science", count: 350 },
  ],
};

const locations = [
  { id: "delhi", label: "Delhi NCR", colleges: 650 },
  { id: "mumbai", label: "Mumbai", colleges: 420 },
  { id: "bangalore", label: "Bangalore", colleges: 380 },
  { id: "chennai", label: "Chennai", colleges: 350 },
  { id: "hyderabad", label: "Hyderabad", colleges: 340 },
  { id: "pune", label: "Pune", colleges: 310 },
  { id: "kolkata", label: "Kolkata", colleges: 280 },
  { id: "jaipur", label: "Jaipur", colleges: 195 },
  { id: "lucknow", label: "Lucknow", colleges: 210 },
  { id: "chandigarh", label: "Chandigarh", colleges: 120 },
  { id: "ahmedabad", label: "Ahmedabad", colleges: 180 },
  { id: "bhopal", label: "Bhopal", colleges: 145 },
];

const budgetRanges = [
  { id: "under-1l", label: "Under ₹1 Lakh", range: "< ₹1,00,000" },
  { id: "1l-3l", label: "₹1 - 3 Lakhs", range: "₹1,00,000 - ₹3,00,000" },
  { id: "3l-5l", label: "₹3 - 5 Lakhs", range: "₹3,00,000 - ₹5,00,000" },
  { id: "5l-10l", label: "₹5 - 10 Lakhs", range: "₹5,00,000 - ₹10,00,000" },
  { id: "10l-20l", label: "₹10 - 20 Lakhs", range: "₹10,00,000 - ₹20,00,000" },
  { id: "above-20l", label: "Above ₹20 Lakhs", range: "> ₹20,00,000" },
];

// Mock results
const mockResults = [
  { id: 1, name: "IIT Bombay", city: "Mumbai", rating: 4.5, fees: "₹8.82L", course: "B.Tech Computer Science", ranking: "#3 NIRF" },
  { id: 2, name: "IIT Delhi", city: "New Delhi", rating: 4.6, fees: "₹8.50L", course: "B.Tech Computer Science", ranking: "#1 NIRF" },
  { id: 3, name: "BITS Pilani", city: "Pilani", rating: 4.3, fees: "₹20.5L", course: "B.Tech Computer Science", ranking: "#25 NIRF" },
  { id: 4, name: "NIT Trichy", city: "Tiruchirappalli", rating: 4.2, fees: "₹6.47L", course: "B.Tech Computer Science", ranking: "#9 NIRF" },
  { id: 5, name: "VIT Vellore", city: "Vellore", rating: 4.0, fees: "₹7.98L", course: "B.Tech Computer Science", ranking: "#12 NIRF" },
];

export default function CourseFinderPage() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [selectedLevel, setSelectedLevel] = React.useState("");
  const [selectedStream, setSelectedStream] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!selectedLevel;
      case 2: return !!selectedStream;
      case 3: return selectedLocation.length > 0;
      case 4: return !!selectedBudget;
      default: return false;
    }
  };

  const toggleLocation = (id: string) => {
    setSelectedLocation((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-collegium-blue py-12">
          <div className="container">
            <h1 className="text-3xl font-bold text-white mb-2">Course Finder Results</h1>
            <p className="text-blue-200">
              Found <strong className="text-collegium-yellow">{mockResults.length} colleges</strong> matching your preferences
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="bg-white/20 text-white">{studyLevels.find(l => l.id === selectedLevel)?.label}</Badge>
              <Badge className="bg-white/20 text-white">{streams[selectedLevel]?.find(s => s.id === selectedStream)?.label}</Badge>
              {selectedLocation.map(loc => (
                <Badge key={loc} className="bg-white/20 text-white">{locations.find(l => l.id === loc)?.label}</Badge>
              ))}
              <Badge className="bg-white/20 text-white">{budgetRanges.find(b => b.id === selectedBudget)?.label}</Badge>
            </div>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={handleBack}>
              ← Modify Search
            </Button>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              Sort by: Relevance
            </div>
          </div>

          <div className="space-y-4">
            {mockResults.map((college) => (
              <Card key={college.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-2xl font-bold text-collegium-blue shrink-0">
                        {college.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{college.name}</h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {college.city}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{college.course}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-yellow-500" />
                          <span className="font-bold text-gray-900 dark:text-white">{college.rating}</span>
                        </div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-collegium-blue">{college.fees}</div>
                        <div className="text-xs text-gray-500">Total Fees</div>
                      </div>
                      <div className="text-center">
                        <Badge variant="secondary">{college.ranking}</Badge>
                      </div>
                      <Link href={`/college/${college.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-collegium-blue py-12">
        <div className="container text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <Search className="w-8 h-8 inline-block mr-2 mb-1" />
            Course Finder
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Find the perfect course and college based on your preferences in 4 simple steps
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="container py-8">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.id}>
                <div
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer",
                    currentStep === step.id
                      ? "bg-collegium-blue text-white shadow-lg"
                      : currentStep > step.id
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                  )}
                  onClick={() => {
                    if (step.id < currentStep) setCurrentStep(step.id);
                  }}
                >
                  <StepIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{step.id}</span>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="max-w-3xl mx-auto">
          {/* Step 1: Study Level */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                What level do you want to study?
              </h2>
              <div className="grid gap-4">
                {studyLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left",
                      selectedLevel === level.id
                        ? "border-collegium-blue bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                    )}
                  >
                    <span className="text-3xl">{level.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{level.label}</div>
                      <div className="text-sm text-gray-500">{level.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Stream */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Choose your stream
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {(streams[selectedLevel] || []).map((stream) => (
                  <button
                    key={stream.id}
                    onClick={() => setSelectedStream(stream.id)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all text-left",
                      selectedStream === stream.id
                        ? "border-collegium-blue bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                    )}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white">{stream.label}</div>
                    <div className="text-xs text-gray-500 mt-1">{stream.count.toLocaleString()} colleges</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Preferred locations
              </h2>
              <p className="text-gray-500 text-center mb-8">Select one or more cities</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => toggleLocation(loc.id)}
                    className={cn(
                      "p-4 rounded-xl border-2 transition-all text-left",
                      selectedLocation.includes(loc.id)
                        ? "border-collegium-blue bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">{loc.label}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{loc.colleges} colleges</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Budget */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
                What&apos;s your budget?
              </h2>
              <div className="grid gap-3">
                {budgetRanges.map((budget) => (
                  <button
                    key={budget.id}
                    onClick={() => setSelectedBudget(budget.id)}
                    className={cn(
                      "flex items-center justify-between p-5 rounded-xl border-2 transition-all",
                      selectedBudget === budget.id
                        ? "border-collegium-blue bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <IndianRupee className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">{budget.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{budget.range}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              ← Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-collegium-blue"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {currentStep === 4 ? "Find Colleges" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
