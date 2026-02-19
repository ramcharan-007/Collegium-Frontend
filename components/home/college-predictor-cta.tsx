"use client";

import * as React from "react";
import { BarChart3, Calculator, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";

const exams = [
  { id: "jee-main", name: "JEE Main 2026" },
  { id: "neet", name: "NEET UG 2026" },
  { id: "cat", name: "CAT 2025" },
  { id: "gate", name: "GATE 2026" },
  { id: "jee-advanced", name: "JEE Advanced 2026" },
  { id: "cuet", name: "CUET UG 2026" },
];

const categories = [
  { id: "general", name: "General" },
  { id: "obc-ncl", name: "OBC-NCL" },
  { id: "sc", name: "SC" },
  { id: "st", name: "ST" },
  { id: "ews", name: "EWS" },
  { id: "pwd", name: "PwD" },
];

export function CollegePredictorCTA() {
  const [selectedExam, setSelectedExam] = React.useState("");
  const [score, setScore] = React.useState("");
  const [category, setCategory] = React.useState("");

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-jirs-blue to-blue-700 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-jirs-yellow rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <BarChart3 className="w-5 h-5 text-jirs-yellow" />
                <span className="text-sm font-medium">College Predictor</span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Know Your Admission Chances
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Enter your exam score and get a personalized list of colleges
                where you have a high chance of admission based on previous year
                cutoffs.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-5 h-5 text-jirs-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Accurate Predictions</h4>
                    <p className="text-sm text-blue-200">
                      Based on 5 years of data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-jirs-yellow" />
                  </div>
                  <div>
                    <h4 className="font-semibold">3500+ Colleges</h4>
                    <p className="text-sm text-blue-200">
                      Comprehensive database
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Predictor Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Predict Your Colleges
              </h3>

              <div className="space-y-4">
                {/* Exam Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Exam
                  </label>
                  <Select value={selectedExam} onValueChange={setSelectedExam}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your exam" />
                    </SelectTrigger>
                    <SelectContent>
                      {exams.map((exam) => (
                        <SelectItem key={exam.id} value={exam.id}>
                          {exam.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Score/Rank Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Your Score / Rank / Percentile
                  </label>
                  <input
                    type="text"
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                    placeholder="e.g., 95.5 percentile or Rank 15000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue transition-all"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full mt-2"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Predict My Colleges
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Free and instant predictions based on previous year data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
