"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  GraduationCap,
  Building2,
  Star,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const predictorExams = [
  {
    id: "jee-main",
    name: "JEE Main",
    fullName: "Joint Entrance Examination Main",
    icon: "⚙️",
    participants: "12L+",
    colleges: 3500,
    description: "Predict your college based on JEE Main rank and percentile",
    features: [
      "NIT/IIIT/GFTI predictions",
      "Branch-wise analysis",
      "Category cutoffs",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "jee-advanced",
    name: "JEE Advanced",
    fullName: "Joint Entrance Examination Advanced",
    icon: "🏆",
    participants: "2.5L+",
    colleges: 23,
    description: "Predict your IIT and branch based on JEE Advanced rank",
    features: [
      "All 23 IITs covered",
      "Branch allocation analysis",
      "Opening/Closing ranks",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "neet",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    icon: "🏥",
    participants: "20L+",
    colleges: 600,
    description: "Find medical colleges based on your NEET score",
    features: [
      "Government & Private colleges",
      "State-wise predictions",
      "AIQ & State quota",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    id: "cat",
    name: "CAT",
    fullName: "Common Admission Test",
    icon: "📊",
    participants: "3L+",
    colleges: 250,
    description: "Predict IIM and top B-school admissions",
    features: ["IIM predictions", "Profile-based analysis", "Call probability"],
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "gate",
    name: "GATE",
    fullName: "Graduate Aptitude Test in Engineering",
    icon: "🎓",
    participants: "8L+",
    colleges: 150,
    description: "Predict IIT M.Tech admissions based on GATE score",
    features: ["IIT M.Tech predictions", "PSU cutoffs", "Branch-wise analysis"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    id: "mht-cet",
    name: "MHT CET",
    fullName: "Maharashtra Common Entrance Test",
    icon: "🌟",
    participants: "5L+",
    colleges: 400,
    description: "Predict Maharashtra engineering college admissions",
    features: [
      "All Maharashtra colleges",
      "CAP round analysis",
      "Branch preferences",
    ],
    color: "from-red-500 to-red-600",
  },
];

const stats = [
  { value: "50L+", label: "Predictions Made" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "10,000+", label: "Colleges Covered" },
  { value: "100+", label: "Exams Supported" },
];

const howItWorks = [
  {
    step: 1,
    title: "Enter Your Score",
    description:
      "Input your exam score, rank, or percentile along with your category and preferences",
    icon: BarChart3,
  },
  {
    step: 2,
    title: "AI Analysis",
    description: "Our ML algorithm analyzes 5+ years of cutoff data and trends",
    icon: Sparkles,
  },
  {
    step: 3,
    title: "Get Predictions",
    description:
      "Receive personalized college and branch predictions with admission probability",
    icon: Target,
  },
  {
    step: 4,
    title: "Compare & Apply",
    description:
      "Compare predicted colleges and start your application process",
    icon: CheckCircle2,
  },
];

export function CollegePredictorLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-4 md:mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Powered by AI & ML
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              College Predictor
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 px-4">
              Predict your dream college based on your exam score. Get accurate
              predictions using our AI-powered algorithm trained on 5+ years of
              cutoff data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-yellow-400 text-blue-900 hover:bg-yellow-300"
              >
                Start Prediction
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              >
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-6 md:py-8 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-900">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Predictors */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Choose Your Exam
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Select the exam you&apos;ve appeared for to get personalized
              college predictions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {predictorExams.map((exam) => (
              <Link
                key={exam.id}
                href={`/college-predictor/${exam.id}`}
                className="group bg-white rounded-xl border hover:border-blue-200 hover:shadow-lg transition-all overflow-hidden"
              >
                <div
                  className={`bg-gradient-to-r ${exam.color} p-4 md:p-6 text-white`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl md:text-4xl">{exam.icon}</span>
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mt-3 md:mt-4">
                    {exam.name}
                  </h3>
                  <p className="text-sm opacity-90">{exam.fullName}</p>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-4">
                    {exam.description}
                  </p>
                  <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-3 md:mb-4">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3 md:h-4 md:w-4" />
                      {exam.participants}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="h-3 w-3 md:h-4 md:w-4" />
                      {exam.colleges}+ colleges
                    </span>
                  </div>
                  <div className="space-y-2">
                    {exam.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs md:text-sm"
                      >
                        <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get accurate college predictions in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-200">
                    <ArrowRight className="absolute -right-3 -top-2.5 h-5 w-5 text-gray-300" />
                  </div>
                )}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center relative">
                  <step.icon className="h-6 w-6 md:h-10 md:w-10 text-blue-900" />
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Why Use Our Predictor?
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  {
                    title: "AI-Powered Accuracy",
                    description:
                      "Our ML algorithms analyze historical cutoff data to provide 95%+ accurate predictions",
                    icon: Sparkles,
                  },
                  {
                    title: "Comprehensive Coverage",
                    description:
                      "Covering 10,000+ colleges across 100+ entrance exams in India",
                    icon: Building2,
                  },
                  {
                    title: "Real-time Updates",
                    description:
                      "Predictions updated with latest cutoff trends and counseling data",
                    icon: TrendingUp,
                  },
                  {
                    title: "Expert Guidance",
                    description:
                      "Get personalized counseling from our expert advisors",
                    icon: GraduationCap,
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 border shadow-lg">
              <div className="text-center mb-4 md:mb-6">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎯</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900">
                  Quick Prediction
                </h3>
                <p className="text-gray-600 text-sm">
                  Enter your score to get started
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Exam
                  </label>
                  <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Choose an exam...</option>
                    {predictorExams.map((exam) => (
                      <option key={exam.id} value={exam.id}>
                        {exam.name} - {exam.fullName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Score/Rank
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your score or rank"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <Button className="w-full" size="lg">
                  Predict Colleges
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Ready to Find Your Dream College?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Join 50 lakh+ students who have used our predictor to find their
            perfect college match
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
          >
            Start Free Prediction
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
