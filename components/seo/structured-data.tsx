"use client";

import * as React from "react";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Organization schema for global use
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Collegium",
    alternateName: "Collegium",
    url: "https://collegium.in",
    logo: "https://collegium.in/logo.png",
    description:
      "Your trusted guide to finding the perfect college. Explore 25,000+ colleges, compare courses, and make informed decisions about your education.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-800-123-4567",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.facebook.com/collegium",
      "https://www.twitter.com/collegium",
      "https://www.instagram.com/collegium",
      "https://www.linkedin.com/company/collegium",
      "https://www.youtube.com/collegium",
    ],
  };

  return <StructuredData data={data} />;
}

// WebSite schema with search action
export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Collegium",
    url: "https://collegium.in",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://collegium.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <StructuredData data={data} />;
}

// Breadcrumb schema
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://collegium.in${item.url}`,
    })),
  };

  return <StructuredData data={data} />;
}

// Educational Organization schema for college detail pages
export function EducationalOrganizationSchema({
  college,
}: {
  college: {
    name: string;
    slug: string;
    description?: string;
    city: string;
    state: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    establishedYear?: number;
    rating?: number;
    reviewCount?: number;
    logo?: string;
    type?: string;
  };
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: college.name,
    url: `https://collegium.in/college/${college.slug}`,
    description: college.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: college.city,
      addressRegion: college.state,
      addressCountry: "IN",
      streetAddress: college.address,
    },
    telephone: college.phone,
    email: college.email,
    logo: college.logo,
    foundingDate: college.establishedYear
      ? `${college.establishedYear}`
      : undefined,
    sameAs: college.website ? [college.website] : undefined,
  };

  if (college.rating && college.reviewCount) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: college.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: college.reviewCount,
    };
  }

  return <StructuredData data={data} />;
}

// Course schema
export function CourseSchema({
  course,
}: {
  course: {
    name: string;
    slug: string;
    description?: string;
    provider?: string;
    providerUrl?: string;
    duration?: string;
    mode?: string;
    fees?: number;
  };
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    url: `https://collegium.in/courses/${course.slug}`,
    description: course.description,
    provider: course.provider
      ? {
          "@type": "Organization",
          name: course.provider,
          sameAs: course.providerUrl,
        }
      : undefined,
    timeRequired: course.duration,
    courseMode: course.mode,
  };

  if (course.fees) {
    data.offers = {
      "@type": "Offer",
      price: course.fees,
      priceCurrency: "INR",
      category: "Tuition",
    };
  }

  return <StructuredData data={data} />;
}

// FAQ schema
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <StructuredData data={data} />;
}

// Article schema for news pages
export function ArticleSchema({
  article,
}: {
  article: {
    title: string;
    slug: string;
    description?: string;
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
    image?: string;
    category?: string;
  };
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    url: `https://collegium.in/news/${article.slug}`,
    description: article.description,
    author: article.author
      ? { "@type": "Person", name: article.author }
      : { "@type": "Organization", name: "Collegium" },
    publisher: {
      "@type": "Organization",
      name: "Collegium",
      logo: {
        "@type": "ImageObject",
        url: "https://collegium.in/logo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    image: article.image,
    articleSection: article.category,
  };

  return <StructuredData data={data} />;
}

// Event schema for exam dates
export function ExamEventSchema({
  exam,
}: {
  exam: {
    name: string;
    slug: string;
    description?: string;
    examDate?: string;
    registrationEnd?: string;
    conductingBody?: string;
    mode?: string;
  };
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: exam.name,
    url: `https://collegium.in/exams/${exam.slug}`,
    description: exam.description,
    startDate: exam.examDate,
    organizer: {
      "@type": "Organization",
      name: exam.conductingBody,
    },
    eventAttendanceMode: exam.mode === "online"
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "VirtualLocation",
      url: `https://collegium.in/exams/${exam.slug}`,
    },
  };

  return <StructuredData data={data} />;
}

// Review schema
export function ReviewSchema({
  review,
}: {
  review: {
    author: string;
    rating: number;
    content: string;
    datePublished: string;
    collegeName: string;
    collegeSlug: string;
  };
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    author: { "@type": "Person", name: review.author },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.content,
    datePublished: review.datePublished,
    itemReviewed: {
      "@type": "EducationalOrganization",
      name: review.collegeName,
      url: `https://collegium.in/college/${review.collegeSlug}`,
    },
  };

  return <StructuredData data={data} />;
}
