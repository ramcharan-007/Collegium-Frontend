"use client";

import * as React from "react";
import { X, Download, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BrochureDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  collegeName: string;
}

export function BrochureDownloadModal({
  isOpen,
  onClose,
  collegeName,
}: BrochureDownloadModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const leads = JSON.parse(localStorage.getItem("collegium_leads") || "[]");
    leads.push({
      ...formData,
      collegeName,
      type: "BROCHURE_DOWNLOAD",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("collegium_leads", JSON.stringify(leads));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-fade-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-collegium-blue to-blue-800 text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Download Brochure</h2>
              <p className="text-sm text-blue-200">{collegeName}</p>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Brochure Ready!</h3>
            <p className="text-gray-600 mb-6">
              The brochure for {collegeName} has been sent to your email. You can
              also download it directly below.
            </p>
            <Button
              onClick={handleClose}
              className="w-full"
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download PDF
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-sm text-gray-600">
              Fill in your details to download the brochure for {collegeName}.
            </p>

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

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isSubmitting}
              leftIcon={<Download className="w-4 h-4" />}
            >
              {isSubmitting ? "Processing..." : "Get Brochure"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              By submitting, you agree to our{" "}
              <a href="/privacy-policy" className="text-collegium-blue hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
