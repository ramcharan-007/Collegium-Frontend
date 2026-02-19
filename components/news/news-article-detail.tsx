"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  User,
  Eye,
  MessageSquare,
  Share2,
  Calendar,
  Tag,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
  Bookmark,
} from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface NewsArticleDetailProps {
  article: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
    publishedAt: string;
    updatedAt?: string;
    readTime: number;
    views: number;
    comments: number;
    tags: string[];
  };
  relatedArticles: {
    id: string;
    title: string;
    slug: string;
    image: string;
    category: string;
    publishedAt: string;
  }[];
}

export function NewsArticleDetail({
  article,
  relatedArticles,
}: NewsArticleDetailProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [helpfulVote, setHelpfulVote] = React.useState<"yes" | "no" | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-jirs-blue">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news" className="hover:text-jirs-blue">
              News
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-400 truncate max-w-xs">
              {article.title}
            </span>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <Card className="overflow-hidden">
              {/* Header */}
              <div className="p-6 md:p-8 border-b">
                <Badge className="mb-4">{article.category}</Badge>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {article.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {article.author.name}
                      </p>
                      <p className="text-xs">Author</p>
                    </div>
                  </div>
                  <span className="h-4 w-px bg-gray-300" />
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime} min read
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {article.views.toLocaleString()} views
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      Was this helpful?
                    </span>
                    <button
                      onClick={() => setHelpfulVote("yes")}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        helpfulVote === "yes"
                          ? "bg-green-100 text-green-600"
                          : "hover:bg-gray-100",
                      )}
                    >
                      <ThumbsUp className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setHelpfulVote("no")}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        helpfulVote === "no"
                          ? "bg-red-100 text-red-600"
                          : "hover:bg-gray-100",
                      )}
                    >
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={cn(
                        "p-2 rounded-lg transition-colors",
                        isBookmarked
                          ? "bg-jirs-yellow text-jirs-blue"
                          : "hover:bg-gray-100",
                      )}
                    >
                      <Bookmark
                        className={cn(
                          "w-5 h-5",
                          isBookmarked && "fill-current",
                        )}
                      />
                    </button>
                    <span className="text-sm text-gray-600">Share:</span>
                    <button className="p-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-sky-100 hover:text-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Link2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="p-6 md:p-8 bg-gray-50 border-t">
                <div className="flex items-start gap-4">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {article.author.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {article.author.bio}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            <Card className="mt-8 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Comments ({article.comments})
              </h2>
              <div className="text-center py-8 text-gray-500">
                <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Login to join the discussion</p>
                <Button className="mt-4">Login to Comment</Button>
              </div>
            </Card>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Articles */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/news/${related.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-20 h-16 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-jirs-blue transition-colors">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(related.publishedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-jirs-blue text-white">
              <h3 className="font-bold mb-2">Need Guidance?</h3>
              <p className="text-sm text-blue-200 mb-4">
                Get personalized counselling for college admissions
              </p>
              <Button className="w-full bg-jirs-yellow text-jirs-blue hover:bg-yellow-400">
                Get Free Counselling
              </Button>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
