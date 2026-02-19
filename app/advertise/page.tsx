"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Eye,
  MousePointerClick,
  Mail,
  Phone,
  BarChart3,
  Megaphone,
  Award,
  Star,
} from "lucide-react";

const audienceStats = [
  { value: "10M+", label: "Monthly Visitors", icon: Users },
  { value: "50L+", label: "Registered Students", icon: Target },
  { value: "500K+", label: "Daily Searches", icon: Eye },
  { value: "85%", label: "Mobile Users", icon: MousePointerClick },
];

const advertisingOptions = [
  {
    title: "Featured Listings",
    description: "Get premium placement in college listings and search results",
    features: [
      "Top position in search results",
      "Highlighted college card design",
      "Featured badge on your profile",
      "Priority in recommendations",
    ],
    icon: Star,
    popular: true,
  },
  {
    title: "Display Advertising",
    description: "Banner ads across high-traffic pages on our platform",
    features: [
      "Homepage banner placement",
      "Category page placements",
      "Mobile-optimized banners",
      "Retargeting campaigns",
    ],
    icon: Megaphone,
    popular: false,
  },
  {
    title: "Lead Generation",
    description: "Connect directly with interested students seeking admissions",
    features: [
      "Qualified student leads",
      "Real-time lead delivery",
      "Verified contact details",
      "Lead dashboard access",
    ],
    icon: Target,
    popular: true,
  },
  {
    title: "Sponsored Content",
    description: "Native articles and content featuring your institution",
    features: [
      "Expert-written articles",
      "SEO-optimized content",
      "Social media promotion",
      "Long-term visibility",
    ],
    icon: Award,
    popular: false,
  },
];

const successStories = [
  {
    college: "XYZ Engineering College",
    quote:
      "Collegium helped us increase our admission inquiries by 300% in just one year.",
    metric: "+300% Inquiries",
  },
  {
    college: "ABC Business School",
    quote:
      "The quality of leads from Collegium is exceptional. Highly recommended!",
    metric: "+250% Conversions",
  },
  {
    college: "PQR Medical University",
    quote:
      "Our visibility among students improved dramatically after partnering with Collegium.",
    metric: "+400% Visibility",
  },
];

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    collegeName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
    package: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-6">
              Grow Your Admissions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Reach Millions of Students
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Partner with India&apos;s leading college discovery platform to
              connect with students actively searching for their dream college.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 -mt-10">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {audienceStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border p-6 text-center shadow-lg"
              >
                <stat.icon className="h-8 w-8 text-blue-900 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Advertise */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Advertise on Collegium?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Targeted Audience",
                    desc: "Reach students who are actively searching for colleges like yours",
                  },
                  {
                    title: "High Intent Traffic",
                    desc: "Our visitors are in decision-making mode, leading to higher conversions",
                  },
                  {
                    title: "Verified Leads",
                    desc: "Get access to verified student leads with genuine interest",
                  },
                  {
                    title: "Measurable Results",
                    desc: "Track your ROI with detailed analytics and reporting",
                  },
                  {
                    title: "Expert Support",
                    desc: "Dedicated account managers to optimize your campaigns",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <BarChart3 className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Our Audience Demographics
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Class 12 Students", value: "45%" },
                  { label: "Undergraduate Students", value: "30%" },
                  { label: "Graduate Students", value: "15%" },
                  { label: "Parents & Guardians", value: "10%" },
                ].map((demo, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{demo.label}</span>
                      <span className="font-semibold">{demo.value}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-900 rounded-full"
                        style={{ width: demo.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Options */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advertising Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of advertising options tailored for
              educational institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advertisingOptions.map((option, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl border p-6 relative ${
                  option.popular ? "border-blue-900 shadow-lg" : ""
                }`}
              >
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-900">
                    Most Popular
                  </Badge>
                )}
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <option.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {option.description}
                </p>
                <ul className="space-y-2">
                  {option.features.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how our partners have grown with Collegium
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-xl border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {story.college}
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-green-700 bg-green-100"
                    >
                      {story.metric}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;{story.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get back to you within
              24 hours
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  College/Institution Name *
                </label>
                <input
                  type="text"
                  value={formData.collegeName}
                  onChange={(e) =>
                    setFormData({ ...formData, collegeName: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  value={formData.contactName}
                  onChange={(e) =>
                    setFormData({ ...formData, contactName: e.target.value })
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                placeholder="City, State"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interested Package
              </label>
              <select
                value={formData.package}
                onChange={(e) =>
                  setFormData({ ...formData, package: e.target.value })
                }
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a package</option>
                <option value="featured">Featured Listings</option>
                <option value="display">Display Advertising</option>
                <option value="leads">Lead Generation</option>
                <option value="content">Sponsored Content</option>
                <option value="custom">Custom Package</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={4}
                placeholder="Tell us about your requirements..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Submit Inquiry
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 text-gray-600">
            <a
              href="mailto:advertise@collegium.in"
              className="flex items-center gap-2 hover:text-blue-900"
            >
              <Mail className="h-5 w-5" />
              advertise@collegium.in
            </a>
            <a
              href="tel:+911800XXXXXXX"
              className="flex items-center gap-2 hover:text-blue-900"
            >
              <Phone className="h-5 w-5" />
              +91 1800-XXX-XXXX
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
