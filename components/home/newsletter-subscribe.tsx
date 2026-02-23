"use client";

import * as React from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterSubscribe() {
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual newsletter subscription API
    await new Promise((resolve) => setTimeout(resolve, 800));

    const subscribers = JSON.parse(localStorage.getItem("collegium_subscribers") || "[]");
    subscribers.push({ email, phone, timestamp: new Date().toISOString() });
    localStorage.setItem("collegium_subscribers", JSON.stringify(subscribers));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-12 bg-gradient-to-r from-collegium-blue to-blue-800">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {isSubmitted ? (
            <div className="text-white">
              <CheckCircle className="w-16 h-16 mx-auto mb-4 text-collegium-yellow" />
              <h2 className="text-2xl font-bold mb-2">You&apos;re Subscribed!</h2>
              <p className="text-blue-200">
                You&apos;ll receive the latest updates on admissions, exams, and college
                news directly in your inbox.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">
                Stay Updated with Latest News
              </h2>
              <p className="text-blue-200 mb-6">
                Get exam alerts, admission updates, and college news delivered to
                your inbox. Join 50,000+ students.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              >
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-collegium-yellow outline-none"
                  />
                </div>
                <div className="flex-1 relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone (optional)"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-collegium-yellow outline-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400 px-6"
                  size="lg"
                  leftIcon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? "..." : "Subscribe"}
                </Button>
              </form>

              <p className="text-xs text-blue-300 mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
