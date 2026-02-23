"use client";

import * as React from "react";
import { X, GraduationCap, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  collegeName: string;
  courseName?: string;
}

export function ApplyNowModal({
  isOpen,
  onClose,
  collegeName,
  courseName,
}: ApplyNowModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    course: courseName || "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call to create lead
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Store lead locally for now
    const leads = JSON.parse(localStorage.getItem("collegium_leads") || "[]");
    leads.push({
      ...formData,
      collegeName,
      type: "APPLY_NOW",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("collegium_leads", JSON.stringify(leads));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", course: courseName || "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="bg-collegium-blue text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-collegium-yellow/20 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-collegium-yellow" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Apply Now</h2>
              <p className="text-sm text-blue-200">{collegeName}</p>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest in {collegeName}. Our counselor will
              contact you within 24 hours.
            </p>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Interested Course
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
              >
                <option value="">Select a course</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
                <option value="MBBS">MBBS</option>
                <option value="BBA">BBA</option>
                <option value="B.Sc">B.Sc</option>
                <option value="BA">BA</option>
                <option value="B.Com">B.Com</option>
                <option value="LLB">LLB</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all resize-none"
                placeholder="Any specific queries..."
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
              leftIcon={<Send className="w-4 h-4" />}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy" className="text-collegium-blue hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms-conditions" className="text-collegium-blue hover:underline">
                Terms of Service
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
