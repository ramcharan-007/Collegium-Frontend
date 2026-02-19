"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Heart,
  FileText,
  Settings,
  Bell,
  LogOut,
  Building2,
  Star,
  Calendar,
  ChevronRight,
  Edit,
  Trash2,
  Eye,
  MessageSquare,
  GraduationCap,
  Target,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Plus,
  MapPin,
  Lock,
} from "lucide-react";

const tabs = [
  { id: "overview", label: "Overview", icon: User },
  { id: "shortlisted", label: "Shortlisted", icon: Heart },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "reviews", label: "My Reviews", icon: Star },
  { id: "settings", label: "Settings", icon: Settings },
];

const savedColleges = [
  {
    name: "IIT Delhi",
    slug: "iit-delhi",
    location: "New Delhi, Delhi",
    rating: 4.9,
    fees: "₹8.5L",
    savedAt: "2024-01-15",
  },
  {
    name: "IIM Ahmedabad",
    slug: "iim-ahmedabad",
    location: "Ahmedabad, Gujarat",
    rating: 4.9,
    fees: "₹23L",
    savedAt: "2024-01-12",
  },
  {
    name: "BITS Pilani",
    slug: "bits-pilani",
    location: "Pilani, Rajasthan",
    rating: 4.7,
    fees: "₹18L",
    savedAt: "2024-01-10",
  },
];

const applications = [
  {
    college: "IIT Delhi",
    course: "B.Tech Computer Science",
    status: "submitted",
    submittedAt: "2024-01-20",
    deadline: "2024-02-15",
  },
  {
    college: "BITS Pilani",
    course: "B.Tech Electronics",
    status: "draft",
    submittedAt: null,
    deadline: "2024-02-28",
  },
  {
    college: "NIT Trichy",
    course: "B.Tech IT",
    status: "under_review",
    submittedAt: "2024-01-18",
    deadline: "2024-02-10",
  },
];

const userReviews = [
  {
    college: "IIT Delhi",
    title: "Best engineering college in India",
    rating: 5,
    date: "2024-01-10",
    views: 245,
    helpful: 32,
    status: "published",
  },
  {
    college: "BITS Pilani",
    title: "Great campus life and placements",
    rating: 4,
    date: "2024-01-05",
    views: 128,
    helpful: 18,
    status: "published",
  },
];

const notifications = [
  {
    title: "Application deadline approaching",
    message: "NIT Trichy deadline is in 5 days",
    time: "2h ago",
    read: false,
  },
  {
    title: "New college added to recommendations",
    message: "Check out DTU Delhi based on your preferences",
    time: "1d ago",
    read: true,
  },
  {
    title: "Your review was helpful",
    message: "15 people found your IIT Delhi review helpful",
    time: "2d ago",
    read: true,
  },
];

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    phone: "+91 98765 43210",
    avatar: null,
    studyGoal: "B.Tech",
    location: "Mumbai, Maharashtra",
    joinedAt: "December 2023",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-900 text-white py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl font-bold text-blue-900">
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
              <p className="text-blue-200">{user.email}</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-blue-100">
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  {user.studyGoal}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {user.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Joined {user.joinedAt}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <button className="relative p-2 hover:bg-white/10 rounded-full">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="container-custom">
          <div className="flex items-center gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-4 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-900 text-blue-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container-custom">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {savedColleges.length}
                      </div>
                      <div className="text-gray-600">Shortlisted</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {applications.length}
                      </div>
                      <div className="text-gray-600">Applications</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Star className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        {userReviews.length}
                      </div>
                      <div className="text-gray-600">Reviews</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        85%
                      </div>
                      <div className="text-gray-600">Profile Complete</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Notifications */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Recent Shortlisted */}
                <div className="bg-white rounded-xl border">
                  <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Recently Shortlisted
                    </h2>
                    <Link
                      href="#"
                      onClick={() => setActiveTab("shortlisted")}
                      className="text-blue-900 text-sm hover:underline"
                    >
                      View All
                    </Link>
                  </div>
                  <div className="divide-y">
                    {savedColleges.slice(0, 3).map((college) => (
                      <Link
                        key={college.slug}
                        href={`/college/${college.slug}`}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-900 truncate">
                            {college.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {college.location}
                          </div>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-xl border">
                  <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-lg font-semibold text-gray-900">
                      Notifications
                    </h2>
                    <button className="text-blue-900 text-sm hover:underline">
                      Mark all read
                    </button>
                  </div>
                  <div className="divide-y">
                    {notifications.map((notif, idx) => (
                      <div
                        key={idx}
                        className={`p-4 ${!notif.read ? "bg-blue-50" : ""}`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? "bg-blue-600" : "bg-gray-300"}`}
                          />
                          <div>
                            <div className="font-medium text-gray-900 text-sm">
                              {notif.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {notif.message}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {notif.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                  <Link
                    href="/college-predictor"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <Target className="h-6 w-6 text-blue-900" />
                    <span className="font-medium text-gray-900">
                      College Predictor
                    </span>
                  </Link>
                  <Link
                    href="/compare"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <Building2 className="h-6 w-6 text-blue-900" />
                    <span className="font-medium text-gray-900">
                      Compare Colleges
                    </span>
                  </Link>
                  <Link
                    href="/write-review"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <MessageSquare className="h-6 w-6 text-blue-900" />
                    <span className="font-medium text-gray-900">
                      Write Review
                    </span>
                  </Link>
                  <Link
                    href="/exams"
                    className="flex items-center gap-3 p-4 rounded-lg border hover:border-blue-300 hover:bg-blue-50 transition-all"
                  >
                    <FileText className="h-6 w-6 text-blue-900" />
                    <span className="font-medium text-gray-900">
                      Explore Exams
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Shortlisted Tab */}
          {activeTab === "shortlisted" && (
            <div className="bg-white rounded-xl border">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  Shortlisted Colleges ({savedColleges.length})
                </h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export List
                </Button>
              </div>
              <div className="divide-y">
                {savedColleges.map((college) => (
                  <div
                    key={college.slug}
                    className="flex items-center gap-4 p-6"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <Link
                        href={`/college/${college.slug}`}
                        className="text-lg font-semibold text-gray-900 hover:text-blue-900"
                      >
                        {college.name}
                      </Link>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>{college.location}</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          {college.rating}
                        </span>
                        <span>Fees: {college.fees}</span>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Saved on{" "}
                        {new Date(college.savedAt).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" asChild>
                        <Link href={`/college/${college.slug}`}>
                          View Details
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applications Tab */}
          {activeTab === "applications" && (
            <div className="bg-white rounded-xl border">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  My Applications ({applications.length})
                </h2>
                <Button size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Application
                </Button>
              </div>
              <div className="divide-y">
                {applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-lg font-semibold text-gray-900">
                        {app.college}
                      </div>
                      <div className="text-sm text-gray-600">{app.course}</div>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <Badge
                          variant={
                            app.status === "submitted"
                              ? "default"
                              : app.status === "draft"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {app.status === "submitted" && (
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                          )}
                          {app.status === "draft" && (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {app.status === "under_review" && (
                            <AlertCircle className="h-3 w-3 mr-1" />
                          )}
                          {app.status.replace("_", " ")}
                        </Badge>
                        <span className="text-gray-500">
                          Deadline:{" "}
                          {new Date(app.deadline).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {app.status === "draft" ? (
                        <Button size="sm">Continue</Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <div className="bg-white rounded-xl border">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">
                  My Reviews ({userReviews.length})
                </h2>
                <Button size="sm" className="gap-2" asChild>
                  <Link href="/write-review">
                    <Plus className="h-4 w-4" />
                    Write Review
                  </Link>
                </Button>
              </div>
              <div className="divide-y">
                {userReviews.map((review, idx) => (
                  <div key={idx} className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">
                          {review.college}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-gray-700">{review.title}</div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span>
                            {new Date(review.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {review.views} views
                          </span>
                          <span>{review.helpful} found helpful</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* Profile Settings */}
              <div className="bg-white rounded-xl border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Profile Settings
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      defaultValue={user.phone}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Study Goal
                    </label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="btech">B.Tech</option>
                      <option value="mba">MBA</option>
                      <option value="mbbs">MBBS</option>
                      <option value="law">Law</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <Button>Save Changes</Button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-white rounded-xl border p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-6">
                  Account
                </h2>
                <div className="space-y-4">
                  <button className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">
                        Change Password
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="flex items-center justify-between w-full p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-900">
                        Notification Preferences
                      </span>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="flex items-center justify-between w-full p-4 border border-red-200 rounded-lg hover:bg-red-50 text-red-600">
                    <div className="flex items-center gap-3">
                      <LogOut className="h-5 w-5" />
                      <span className="font-medium">Sign Out</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
