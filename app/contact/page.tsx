"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  HelpCircle,
  Building2,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "support@collegium.in",
    action: "mailto:support@collegium.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Sat, 9am to 6pm IST",
    contact: "+91 1800-XXX-XXXX",
    action: "tel:+911800XXXXXXX",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    action: "#",
  },
];

const offices = [
  {
    city: "Mumbai (HQ)",
    address: "123 Business Park, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 22-XXXX-XXXX",
  },
  {
    city: "Bangalore",
    address: "456 Tech Hub, Koramangala, Bangalore, Karnataka 560095",
    phone: "+91 80-XXXX-XXXX",
  },
  {
    city: "Delhi",
    address: "789 Corporate Tower, Connaught Place, New Delhi 110001",
    phone: "+91 11-XXXX-XXXX",
  },
];

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "Click on the 'Sign Up' button in the top right corner and follow the registration process.",
  },
  {
    question: "Is Collegium free to use?",
    answer:
      "Yes, Collegium is completely free for students. We generate revenue through partnerships with colleges.",
  },
  {
    question: "How accurate is the college predictor?",
    answer:
      "Our predictor has 95%+ accuracy based on analysis of 5+ years of cutoff data and trends.",
  },
  {
    question: "Can I compare multiple colleges?",
    answer:
      "Yes, you can compare up to 4 colleges side-by-side using our Compare feature.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 px-4">
              Have questions? We&apos;re here to help. Reach out to us through
              any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 md:py-12 -mt-6 md:-mt-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {contactMethods.map((method, idx) => (
              <a
                key={idx}
                href={method.action}
                className="bg-white rounded-xl border p-4 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <method.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm mb-2">
                  {method.description}
                </p>
                <p className="text-blue-900 font-medium text-sm md:text-base">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl border p-5 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Send us a Message
              </h2>

              {submitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">
                        Partnership/Advertising
                      </option>
                      <option value="feedback">Feedback/Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={5}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                    <Send className="h-5 w-5 ml-2" />
                  </Button>
                </form>
              )}
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Offices
              </h2>
              <div className="space-y-3 md:space-y-4">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border p-4 md:p-6"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                        <Building2 className="h-4 w-4 md:h-5 md:w-5 text-blue-900" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                          {office.city}
                        </h3>
                        <p className="text-gray-600 text-xs md:text-sm mt-1">
                          {office.address}
                        </p>
                        <p className="text-blue-900 text-xs md:text-sm mt-2">
                          {office.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl border p-4 md:p-6 mt-4 md:mt-6">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 md:gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4 md:p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm md:text-base mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
