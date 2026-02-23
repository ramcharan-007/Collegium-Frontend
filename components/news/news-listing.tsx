"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Clock,
  User,
  Eye,
  MessageSquare,
  Share2,
  BookOpen,
  TrendingUp,
  ArrowRight,
  Calendar,
  Tag,
  ChevronRight,
} from "lucide-react";
import { cn, formatDate, truncate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: number;
  views: number;
  comments: number;
  tags: string[];
  isFeatured?: boolean;
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "JEE Main 2025 Session 1 Results Announced: Check Your Score Now",
    slug: "jee-main-2025-session-1-results",
    excerpt:
      "NTA has announced the JEE Main 2025 Session 1 results. Students can check their scores on the official website. The cutoff for JEE Advanced qualification has been released.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
    category: "Exam Results",
    author: { name: "Priya Sharma", avatar: "https://i.pravatar.cc/100?img=1" },
    publishedAt: "2025-01-15T10:30:00Z",
    readTime: 5,
    views: 45230,
    comments: 234,
    tags: ["JEE Main", "Results", "NTA"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "Top 10 Engineering Colleges in India 2025: NIRF Ranking Released",
    slug: "top-engineering-colleges-nirf-2025",
    excerpt:
      "Ministry of Education releases NIRF 2025 rankings. IIT Madras continues to top the engineering category, followed by IIT Delhi and IIT Bombay.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
    category: "Rankings",
    author: { name: "Rahul Verma", avatar: "https://i.pravatar.cc/100?img=2" },
    publishedAt: "2025-01-14T14:00:00Z",
    readTime: 8,
    views: 32450,
    comments: 156,
    tags: ["NIRF", "Rankings", "Engineering"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "CAT 2025 Registration to Begin from August: Complete Guide",
    slug: "cat-2025-registration-guide",
    excerpt:
      "IIM Calcutta will conduct CAT 2025. Registration expected to start in August. Here's everything you need to know about eligibility, exam pattern, and preparation.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    category: "Exam Updates",
    author: { name: "Amit Singh", avatar: "https://i.pravatar.cc/100?img=3" },
    publishedAt: "2025-01-13T09:00:00Z",
    readTime: 10,
    views: 28900,
    comments: 98,
    tags: ["CAT", "MBA", "IIM"],
  },
  {
    id: "4",
    title: "New Education Policy 2025: Major Changes in Higher Education",
    slug: "nep-2025-higher-education-changes",
    excerpt:
      "Government announces new reforms under NEP for higher education institutions. Multiple entry-exit options, academic credit banks, and more flexibility for students.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600",
    category: "Policy",
    author: {
      name: "Dr. Meera Iyer",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    publishedAt: "2025-01-12T16:30:00Z",
    readTime: 12,
    views: 21340,
    comments: 67,
    tags: ["NEP", "Policy", "Education Reform"],
  },
  {
    id: "5",
    title: "NEET UG 2025: NTA Releases Revised Exam Pattern and Syllabus",
    slug: "neet-ug-2025-revised-pattern",
    excerpt:
      "NTA has released the updated exam pattern for NEET UG 2025. Check the changes in marking scheme, total questions, and subject-wise distribution.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    category: "Exam Updates",
    author: {
      name: "Dr. Arun Kumar",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    publishedAt: "2025-01-11T11:00:00Z",
    readTime: 7,
    views: 38760,
    comments: 189,
    tags: ["NEET", "Medical", "Syllabus"],
  },
  {
    id: "6",
    title: "Study Abroad: USA Extends STEM OPT to 4 Years for Select Fields",
    slug: "usa-stem-opt-extension-2025",
    excerpt:
      "US government announces extension of STEM OPT program from 3 to 4 years for students in AI, quantum computing, and semiconductor fields.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600",
    category: "Study Abroad",
    author: {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
    publishedAt: "2025-01-10T08:00:00Z",
    readTime: 6,
    views: 15890,
    comments: 78,
    tags: ["USA", "STEM", "OPT", "Study Abroad"],
  },
];

const categories = [
  "All",
  "Exam Results",
  "Exam Updates",
  "Rankings",
  "Admissions",
  "Study Abroad",
  "Policy",
  "Campus Life",
];

export function NewsListing() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const featuredArticles = newsArticles.filter((a) => a.isFeatured);
  const regularArticles = newsArticles.filter((a) => !a.isFeatured);

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-collegium-blue text-white py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                Education News & Updates
              </h1>
              <p className="text-blue-200">
                Stay updated with the latest news on exams, admissions,
                rankings, and more
              </p>
            </div>
            <div className="w-full md:w-80">
              <Input
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4" />}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b sticky top-16 lg:top-20 z-30">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                  selectedCategory === category
                    ? "bg-collegium-blue text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Articles */}
            {selectedCategory === "All" && searchQuery === "" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-collegium-yellow" />
                  Featured Stories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredArticles.map((article) => (
                    <Link key={article.id} href={`/news/${article.slug}`}>
                      <Card className="group overflow-hidden h-full hover:shadow-lg transition-shadow">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-collegium-yellow text-collegium-blue">
                              {article.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-collegium-blue transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-2">
                              <img
                                src={article.author.avatar}
                                alt={article.author.name}
                                className="w-6 h-6 rounded-full"
                              />
                              <span>{article.author.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime} min
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {(article.views / 1000).toFixed(1)}k
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-collegium-blue" />
                {selectedCategory === "All" ? "Latest News" : selectedCategory}
              </h2>
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <Link key={article.id} href={`/news/${article.slug}`}>
                    <Card className="group overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-48 h-40 sm:h-auto overflow-hidden shrink-0">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <Badge variant="secondary" size="sm" className="mb-2">
                            {article.category}
                          </Badge>
                          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-collegium-blue transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2 hidden sm:block">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(article.publishedAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime} min read
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {(article.views / 1000).toFixed(1)}k
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" />
                                {article.comments}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center pt-4">
                <Button variant="outline">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-collegium-yellow" />
                Trending Now
              </h3>
              <div className="space-y-4">
                {newsArticles.slice(0, 5).map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="flex items-start gap-3 group"
                  >
                    <span className="text-2xl font-bold text-gray-200 group-hover:text-collegium-blue transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-collegium-blue transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(article.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-collegium-blue" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JEE Main",
                  "NEET",
                  "CAT",
                  "Rankings",
                  "MBA",
                  "Engineering",
                  "Study Abroad",
                  "Scholarships",
                  "GATE",
                  "CUET",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-collegium-blue hover:text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-collegium-blue text-white">
              <h3 className="font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-blue-200 mb-4">
                Get the latest education news delivered to your inbox
              </p>
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 mb-3"
              />
              <Button className="w-full bg-collegium-yellow text-collegium-blue hover:bg-yellow-400">
                Subscribe
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
