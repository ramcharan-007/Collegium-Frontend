"use client";

import * as React from "react";
import { X, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounsellingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CounsellingModal({ isOpen, onClose }: CounsellingModalProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    stream: "",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    const leads = JSON.parse(localStorage.getItem("collegium_leads") || "[]");
    leads.push({
      ...formData,
      type: "COUNSELLING_REQUEST",
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("collegium_leads", JSON.stringify(leads));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "", stream: "", city: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="bg-gradient-to-r from-collegium-yellow to-yellow-500 p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10 transition-colors"
          >
            <X className="w-5 h-5 text-collegium-blue" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-collegium-blue/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-collegium-blue" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-collegium-blue">Need Counselling?</h2>
              <p className="text-sm text-collegium-blue/70">Get best college recommendations</p>
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
            <p className="text-gray-600 mb-6">
              Our expert counselor will call you within 2 hours to help you find
              the perfect college.
            </p>
            <Button onClick={handleClose} className="w-full">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-sm text-gray-600">
              Get personalized college recommendations from our expert counselors. Free of charge!
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Stream</label>
              <select
                value={formData.stream}
                onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
              >
                <option value="">Select stream</option>
                <option value="Engineering">Engineering</option>
                <option value="Management">Management / MBA</option>
                <option value="Medical">Medical</option>
                <option value="Law">Law</option>
                <option value="Arts">Arts & Humanities</option>
                <option value="Commerce">Commerce</option>
                <option value="Science">Science</option>
                <option value="Design">Design</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred City</label>
              <select
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-collegium-blue focus:ring-2 focus:ring-collegium-blue/20 outline-none transition-all"
              >
                <option value="">Select city</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Pune">Pune</option>
                <option value="Any">No Preference</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-collegium-yellow text-collegium-blue hover:bg-yellow-400"
              size="lg"
              disabled={isSubmitting}
              leftIcon={<Phone className="w-4 h-4" />}
            >
              {isSubmitting ? "Submitting..." : "Get Free Counselling"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              100% free. No spam. Our counselor will call you.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
