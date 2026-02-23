# 🎓 Collegium - College Discovery Platform

## Complete Product Design & Technical Architecture Document

**Version:** 2.0  
**Date:** February 2026  
**Client:** Collegium  
**Changelog:** v2.0 — Updated based on Collegedunia.com gap analysis (see [MISSING_FEATURES.md](MISSING_FEATURES.md))

---

## 📋 Table of Contents

1. [Executive Summary](#1-executive-summary) _(updated in v2.0 — includes gap analysis status)_
2. [Information Architecture](#2-information-architecture)
3. [Page-by-Page Design Specifications](#3-page-by-page-design-specifications)
4. [Design System](#4-design-system)
5. [Component Library](#5-component-library) _(updated in v2.0 — 20+ new planned components)_
6. [Technical Architecture](#6-technical-architecture)
7. [Data Models](#7-data-models)
8. [API Design](#8-api-design)
9. [SEO Strategy](#9-seo-strategy)
10. [Performance & Scalability](#10-performance--scalability)
11. [Monetization & Business Logic](#11-monetization--business-logic)
12. [Implementation Roadmap](#12-implementation-roadmap) _(updated in v2.0 — revised phases)_

📄 **Related:** [MISSING_FEATURES.md](MISSING_FEATURES.md) — Detailed gap analysis (37 missing features)

---

## 1. Executive Summary

### 1.1 Objective

Build a modern, scalable college discovery and comparison platform that helps students search, compare, and make informed decisions about colleges, courses, and exams in India and abroad.

### 1.2 Target Users

| User Type                         | Primary Goals                                     | Key Features                                   |
| --------------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| **Students (Class 10-12, UG/PG)** | Find colleges, compare options, check eligibility | Search, Compare, Predictor, Reviews            |
| **Parents**                       | Verify credibility, check fees & placements       | Rankings, Fees comparison, Placement data      |
| **Educational Institutions**      | Lead generation, brand visibility                 | Admin dashboard, Analytics, Featured listings  |
| **Exam Aspirants**                | Prepare for exams, check dates & syllabus         | Exam pages, Practice papers, College predictor |

### 1.3 Core Value Propositions

- ✅ **25,000+ Colleges** with verified data
- ✅ **Real-time Cutoffs & Rankings** from multiple agencies
- ✅ **College Predictor** based on exam scores
- ✅ **Side-by-side Comparison** of colleges
- ✅ **Verified Student Reviews** with incentives
- ✅ **Study Abroad** guidance and college listings

### 1.4 Gap Analysis Status (v2.0)

A comprehensive feature audit was conducted against [Collegedunia.com](https://collegedunia.com/). **37 missing features** were identified across 7 categories. Full details are in [MISSING_FEATURES.md](MISSING_FEATURES.md).

| Category | Missing Items | High Priority |
|----------|--------------|---------------|
| Homepage Sections | 10 | 4 |
| Header & Navigation | 4 | 2 |
| College Detail Enhancements | 6 | 3 |
| New Pages & Tools | 5 | 2 |
| Functional / UX Features | 6 | 3 |
| Footer Enhancements | 2 | 1 |
| SEO & Content Infrastructure | 4 | 3 |
| **Total** | **37** | **18** |

#### Current Implementation Status

| Layer | Status |
|-------|--------|
| Frontend pages (25 routes) | ✅ Implemented (mock data) |
| UI Component Library | ✅ ~20 components |
| Backend / API | ❌ Not started |
| Database | ❌ Not started |
| Authentication | ❌ Forms exist, non-functional |
| Lead Capture (Apply/Brochure) | ❌ Buttons exist, non-functional |
| SEO (JSON-LD, meta, sitemap) | ❌ Not started |
| Analytics | ❌ Not started |
| Admin Panel | ❌ Not started |

---

## 2. Information Architecture

### 2.1 Complete Site Map

```
COLLEGIUM PLATFORM
│
├── 🏠 HOME
│   ├── Hero Search (College/Course/Exam)
│   ├── Study Goal Selection
│   ├── Explore Programs
│   ├── Rankings Section
│   ├── Exam Highlights
│   ├── College Predictor CTA
│   ├── Top 10 Colleges
│   ├── Featured Colleges Carousel
│   ├── Study Places (Cities)
│   ├── Explore Courses
│   ├── Top Exams
│   ├── Admission Alerts
│   ├── News & Stories
│   └── Study Abroad Section
│
├── 🎓 COLLEGES
│   ├── /colleges (Listing with filters)
│   │   ├── By Stream (Engineering, Medical, Management, Law, Arts, Commerce, Science)
│   │   ├── By Course (MBA, B.Tech, MBBS, etc.)
│   │   ├── By City (Bangalore, Delhi, Mumbai, etc.)
│   │   ├── By State
│   │   ├── By Exam Accepted
│   │   └── By Ranking Agency
│   │
│   └── /college/:slug (Detail Page)
│       ├── Overview Tab
│       │   ├── Latest Updates & News
│       │   ├── Quick Stats (Rating, Ranking, Fees)
│       │   ├── Table of Contents
│       │   ├── About College
│       │   └── Highlights Table
│       │
│       ├── Courses & Fees Tab
│       │   ├── Popular Courses
│       │   ├── Course Filters (Degree, Stream, Duration)
│       │   ├── Fee Breakdown
│       │   └── Eligibility Criteria
│       │
│       ├── Admission Tab
│       │   ├── Important Dates
│       │   ├── Admission Process
│       │   ├── Eligibility Requirements
│       │   └── Application Links
│       │
│       ├── Cutoff Tab
│       │   ├── Exam-wise Cutoffs
│       │   ├── Category-wise Cutoffs
│       │   ├── Year-over-year Comparison
│       │   └── Round-wise Data
│       │
│       ├── Placement Tab
│       │   ├── Placement Highlights
│       │   ├── Average/Median/Highest Package
│       │   ├── Top Recruiters
│       │   ├── Sector-wise Placement
│       │   └── Year-wise Trends
│       │
│       ├── Reviews Tab
│       │   ├── Overall Rating
│       │   ├── Category Ratings (Academic, Faculty, Infrastructure, Placement)
│       │   ├── Likes/Dislikes Summary
│       │   ├── Course-wise Reviews
│       │   ├── Review Filters
│       │   └── Write Review CTA
│       │
│       ├── Ranking Tab
│       │   ├── Agency-wise Rankings
│       │   ├── Category Rankings
│       │   └── Year-wise Trends
│       │
│       ├── Gallery Tab
│       │   ├── Campus Photos
│       │   ├── Hostel Photos
│       │   ├── Events
│       │   └── Videos
│       │
│       ├── Scholarship Tab
│       ├── Faculty Tab
│       ├── Hostel Tab
│       ├── Q&A Tab
│       ├── News & Articles Tab
│       └── Compare Tab
│
├── 📚 COURSES
│   ├── /courses (Course Finder)
│   │   ├── By Level (Bachelors, Masters, Doctorate, Diploma)
│   │   ├── By Stream
│   │   ├── By Duration
│   │   └── By Mode (Full-time, Part-time, Online)
│   │
│   └── /course/:slug (Course Detail)
│       ├── Overview
│       ├── Eligibility
│       ├── Syllabus
│       ├── Career Scope
│       ├── Top Colleges
│       ├── Entrance Exams
│       ├── Fees Range
│       └── Related Courses
│
├── 📝 EXAMS
│   ├── /exams (Exam Listing)
│   │   ├── By Course Type (B.Tech, MBA, MBBS, etc.)
│   │   ├── By Level (National, State, University)
│   │   └── By Mode (Online, Offline)
│   │
│   └── /exam/:slug (Exam Detail)
│       ├── Overview
│       ├── Important Dates
│       ├── Registration/Application
│       ├── Eligibility
│       ├── Exam Pattern
│       ├── Syllabus
│       ├── Admit Card
│       ├── Results
│       ├── Cutoff
│       ├── Answer Key
│       ├── Counselling
│       ├── Preparation Tips
│       ├── Question Papers (PYQs)
│       ├── Mock Tests
│       ├── College Predictor
│       ├── Participating Colleges
│       └── News & Updates
│
├── ⚖️ COMPARE
│   ├── /compare (Tool Page)
│   └── /compare/:college1-vs-college2
│       ├── Side-by-side Comparison
│       ├── Fees Comparison
│       ├── Ranking Comparison
│       ├── Placement Comparison
│       ├── Infrastructure Comparison
│       └── Reviews Summary
│
├── 🏆 RANKINGS
│   ├── /rankings (Main Rankings Page)
│   │   ├── By Agency (NIRF, QS, THE, Collegedunia, etc.)
│   │   ├── By Stream
│   │   └── By Year
│   │
│   └── /rankings/:agency (Agency-specific)
│
├── 🔮 COLLEGE PREDICTOR
│   ├── /college-predictor (Main Tool)
│   └── /college-predictor/:exam
│       ├── Score Input
│       ├── Category Selection
│       ├── Predicted Colleges List
│       └── Cutoff Analysis
│
├── ⭐ REVIEWS
│   ├── /reviews (All Reviews)
│   └── /write-review (Review Submission)
│
├── 🌍 STUDY ABROAD
│   ├── /study-abroad
│   ├── /country/:slug (USA, UK, Canada, etc.)
│   │   ├── Overview
│   │   ├── Top Universities
│   │   ├── Courses
│   │   ├── Visa Process
│   │   ├── Cost of Living
│   │   ├── Scholarships
│   │   └── SOP Guide
│   │
│   └── /university/:slug (International University Detail)
│
├── 📰 NEWS & ARTICLES
│   ├── /news
│   │   ├── Exam Alerts
│   │   ├── College Alerts
│   │   ├── Admission News
│   │   └── Education News
│   │
│   └── /article/:slug
│
├── 🔐 AUTH
│   ├── /login
│   ├── /signup
│   ├── /forgot-password
│   └── /verify-email
│
├── 👤 USER DASHBOARD
│   ├── /dashboard
│   │   ├── Profile
│   │   ├── Saved Colleges
│   │   ├── Compare List
│   │   ├── My Reviews
│   │   ├── Applications
│   │   └── Notifications
│
├── 🏢 ADMIN PORTAL
│   ├── /admin/dashboard
│   ├── /admin/colleges
│   ├── /admin/courses
│   ├── /admin/exams
│   ├── /admin/reviews
│   ├── /admin/users
│   ├── /admin/leads
│   ├── /admin/analytics
│   └── /admin/content
│
└── 📄 STATIC PAGES
    ├── /about
    ├── /contact
    ├── /careers
    ├── /advertise
    ├── /privacy-policy
    └── /terms-conditions
```

### 2.2 URL Structure Strategy

```
# SEO-Optimized URL Patterns

# Colleges
/colleges                                    # All colleges
/engineering-colleges                        # Stream-based
/mba-colleges                               # Course-based
/bangalore-colleges                         # City-based
/mba/bangalore-colleges                     # Course + City
/college/{college-slug}                     # College detail
/college/{college-slug}/courses-fees        # College sub-pages
/college/{college-slug}/placement
/college/{college-slug}/reviews
/college/{college-slug}/cutoff
/college/{college-slug}/admission

# Courses
/courses                                    # Course finder
/courses/{course-slug}                      # Course detail
/courses/{course-slug}/admission-2026       # Year-specific

# Exams
/exams                                      # All exams
/exams/{exam-slug}                          # Exam detail
/exams/{exam-slug}/syllabus
/exams/{exam-slug}/cutoff
/exams/{exam-slug}/question-paper-{year}

# Compare
/college-compare/{slug1}-vs-{slug2}

# Predictor
/{exam-slug}-college-predictor

# Rankings
/nirf-ranked-colleges
/qs-ranked-colleges

# Study Abroad
/usa-universities
/uk-universities
```

---

## 3. Page-by-Page Design Specifications

### 3.1 Home Page

#### Layout Structure (Mobile-First)

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER                                                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ Logo │ Goal Selector │ Search │ Write Review │ Explore  │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ HERO SECTION                                                 │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Find Over 25,000+ Colleges in India"                   │ │
│ │ ┌─────────────────────────────────────────────────────┐ │ │
│ │ │ 🔍 Search colleges, exams, courses...               │ │ │
│ │ └─────────────────────────────────────────────────────┘ │ │
│ │ Featured College Banner (Rotating)                      │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ STUDY GOAL SELECTION                                         │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                     │
│ │Eng. │ │Mgmt │ │Med. │ │Law  │ │Arts │ ...                 │
│ │6361 │ │8001 │ │2497 │ │1200│ │5713 │                      │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘                     │
├─────────────────────────────────────────────────────────────┤
│ EXPLORE PROGRAMS (Horizontal Scroll)                         │
│ [All] [B.Tech] [MBA] [MBBS] [M.Tech] [B.Sc] [BA] ...        │
├─────────────────────────────────────────────────────────────┤
│ RANKINGS SECTION                                             │
│ ┌───────────────────────────────────────────────────────┐   │
│ │ Agency Tabs: [Collegedunia] [NIRF] [QS] [THE] ...     │   │
│ │ ┌─────────────────────────────────────────────────┐   │   │
│ │ │ #1 IIT Madras  │ #2 IIT Delhi │ #3 IIT Bombay   │   │   │
│ │ └─────────────────────────────────────────────────┘   │   │
│ └───────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│ EXAMS SECTION                                                │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│ │  NEET   │ │  JEE    │ │  CAT    │ │  GATE   │             │
│ │May 2026 │ │Jan 2026 │ │Nov 2025 │ │Feb 2026 │             │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘             │
├─────────────────────────────────────────────────────────────┤
│ COLLEGE PREDICTOR CTA                                        │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ "Know your college admission chances"                   │ │
│ │ [Select Exam ▼] [Enter Score] [Predict Now]            │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ TOP 10 COLLEGES (Tab-based)                                  │
│ [B.Tech] [MBA] [MBBS] [M.Tech]                              │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ #1 │ IIT Bombay │ 5/5 │ ₹8.82L │ Cutoff: 66 │ Apply   │  │
│ │ #2 │ IIT Delhi  │ 4.9 │ ₹8.62L │ Cutoff: 355│ Apply   │  │
│ └────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│ FEATURED COLLEGES CAROUSEL                                   │
│ ←  [College Card] [College Card] [College Card]  →          │
├─────────────────────────────────────────────────────────────┤
│ TOP STUDY PLACES                                             │
│ [Delhi NCR] [Bangalore] [Mumbai] [Hyderabad] [Chennai]      │
├─────────────────────────────────────────────────────────────┤
│ EXPLORE COURSES                                              │
│ [Bachelors] [Masters] [Doctorate] [Diploma] [Certificate]   │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ B.Com │ 3 Years │ ₹81K Avg │ 6944 Colleges             │ │
│ │ B.Ed  │ 2 Years │ ₹87K Avg │ 5619 Colleges             │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ CBSE BOARD EXAMS SECTION                                     │
│ Class 12: [Results] [Syllabus] [Date Sheet] [Papers]        │
│ Class 10: [Results] [Syllabus] [Date Sheet] [Papers]        │
├─────────────────────────────────────────────────────────────┤
│ TOP EXAMS                                                    │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ CUET │ 580 Colleges │ May 11, 2026 │ National         │ │
│ │ NEET │ 1375 Colleges│ May 3, 2026  │ National         │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ ADMISSION 2026                                               │
│ [B.Ed] [MBA] [MBBS] [BA] [M.Tech] [PhD] [LLB] ...          │
├─────────────────────────────────────────────────────────────┤
│ NEWS & STORIES (Tabs)                                        │
│ [Exam Alerts] [College Alerts] [Admission Alerts]           │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 📰 JEE Main 2026 Session 2 Registration Begins          │ │
│ │ 📰 GATE 2026 Answer Key Released                        │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ STUDY ABROAD                                                 │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐                         │
│ │ 🇺🇸 USA  │ │ 🇬🇧 UK   │ │ 🇨🇦 Canada│                         │
│ │1018 Col.│ │175 Col. │ │223 Col. │                         │
│ │$34K/yr  │ │$22K/yr  │ │$25K/yr  │                         │
│ └─────────┘ └─────────┘ └─────────┘                         │
├─────────────────────────────────────────────────────────────┤
│ NEWSLETTER SUBSCRIPTION                                      │
│ [Email] [Phone] [Subscribe]                                  │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
│ Top Colleges | Top Universities | Top Exams | Study Abroad  │
│ Board Exams | Other Links | Social Media                    │
│ © 2026 Collegium. Download App: [iOS] [Android]             │
└─────────────────────────────────────────────────────────────┘
```

#### Component Breakdown - Home Page

| Section      | Component            | Data Requirements                   |
| ------------ | -------------------- | ----------------------------------- |
| Header       | `<GlobalHeader>`     | User auth state, notifications      |
| Hero         | `<HeroSearch>`       | Search suggestions, featured banner |
| Study Goals  | `<StudyGoalGrid>`    | Streams with college counts         |
| Programs     | `<ProgramSlider>`    | Course tags with counts             |
| Rankings     | `<RankingsSection>`  | Agencies, top colleges per agency   |
| Exams        | `<ExamsGrid>`        | Top exams with dates                |
| Predictor    | `<PredictorCTA>`     | Exam list                           |
| Top 10       | `<TopCollegesTable>` | Colleges by course type             |
| Featured     | `<CollegeCarousel>`  | Featured/sponsored colleges         |
| Study Places | `<CityChips>`        | Cities with counts                  |
| Courses      | `<CourseExplorer>`   | Courses by level                    |
| Board Exams  | `<BoardExamsSection>`| CBSE Class 10/12 links              |
| News         | `<NewsSection>`      | Recent news by category             |
| Study Abroad | `<CountryCards>`     | Countries with stats                |
| Admission    | `<AdmissionSection>` | Active admissions by course         |
| Location     | `<CollegesByLocation>`| States/cities with counts          |
| Newsletter   | `<NewsletterForm>`   | Email + phone subscription          |
| Footer       | `<GlobalFooter>`     | Comprehensive SEO link sections     |

> **⚠️ Implementation Gap (v2.0):** Of the 15 homepage sections above, only 7 are currently implemented: Header, Hero, Study Goals, Exams, Predictor, Top 10, Featured, Study Abroad. The remaining 8 sections are documented in [MISSING_FEATURES.md](MISSING_FEATURES.md) items A-1 through A-10.

---

### 3.2 College Listing Page

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Colleges > Engineering Colleges          │
├─────────────────────────────────────────────────────────────┤
│ PAGE TITLE & META                                            │
│ "List of Top Engineering Colleges in India 2026"            │
│ Found 6,361 Colleges                                         │
├─────────────────────────────────────────────────────────────┤
│ FILTER BAR (Sticky on scroll)                                │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ [Stream ▼] [State ▼] [City ▼] [Degree ▼] [Fees ▼]      │ │
│ │ [Exam Accepted ▼] [College Type ▼] [Agency ▼]          │ │
│ │ Active Filters: Engineering × Delhi NCR × Clear All     │ │
│ └─────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ SORT BAR                                                     │
│ Sort By: [Popularity ▼] [Rating] [Highest Fees] [Lowest]    │
├────────────────────────────────────┬────────────────────────┤
│ COLLEGE CARDS (Main Content)       │ SIDEBAR                │
│ ┌────────────────────────────────┐ │ ┌──────────────────┐   │
│ │ #1 IIT Bombay                  │ │ │ COMPARE BOX      │   │
│ │ ┌──────┐ Rating: 4.4/5        │ │ │ Selected: 2/4    │   │
│ │ │ Logo │ Mumbai, Maharashtra  │ │ │ [IIT Bombay]     │   │
│ │ └──────┘ AICTE, UGC Approved  │ │ │ [IIT Delhi]      │   │
│ │                                │ │ │ [Compare Now]    │   │
│ │ CD Score: 1851/2000           │ │ └──────────────────┘   │
│ │ ₹8,82,500 - B.Tech CSE Fees   │ │                        │
│ │ ₹23.5 LPA Avg | ₹1 Cr Highest │ │ ┌──────────────────┐   │
│ │ 90% Placement                  │ │ │ TOP EXAMS        │   │
│ │                                │ │ │ JEE Main         │   │
│ │ Rankings: #1 NIRF #3 QS       │ │ │ JEE Advanced     │   │
│ │                                │ │ │ GATE             │   │
│ │ [Apply Now] [Brochure] [+Comp] │ │ └──────────────────┘   │
│ └────────────────────────────────┘ │                        │
│                                    │ ┌──────────────────┐   │
│ ┌────────────────────────────────┐ │ │ TOP CITIES       │   │
│ │ #2 IIT Delhi                   │ │ │ [Bangalore]      │   │
│ │ ...                            │ │ │ [Delhi]          │   │
│ └────────────────────────────────┘ │ │ [Mumbai]         │   │
│                                    │ └──────────────────┘   │
│ ┌────────────────────────────────┐ │                        │
│ │ FEATURED COLLEGE (Sponsored)   │ │ ┌──────────────────┐   │
│ │ Parul University               │ │ │ COLLEGE PREDIC.  │   │
│ │ "Ad" badge                     │ │ │ Enter your score │   │
│ └────────────────────────────────┘ │ │ [Predict →]      │   │
│                                    │ └──────────────────┘   │
│ [1] [2] [3] ... [100] [Next →]     │                        │
├────────────────────────────────────┴────────────────────────┤
│ SEO CONTENT SECTION                                          │
│ "About Engineering Colleges in India..."                     │
│ FAQ Accordion                                                │
└─────────────────────────────────────────────────────────────┘
```

#### Filter Configuration

```typescript
interface FilterConfig {
  streams: {
    options: [
      "Engineering",
      "Management",
      "Medical",
      "Law",
      "Arts",
      "Commerce",
      "Science",
      "Design",
      "Hotel Management",
      "Architecture",
    ];
    multiSelect: true;
  };
  states: {
    options: string[]; // All Indian states
    multiSelect: true;
  };
  cities: {
    options: string[]; // Dynamic based on state
    multiSelect: true;
  };
  degrees: {
    options: [
      "B.Tech",
      "MBA",
      "MBBS",
      "B.Sc",
      "BA",
      "B.Com",
      "M.Tech",
      "MCA",
      "BCA",
      "LLB",
    ];
    multiSelect: true;
  };
  examAccepted: {
    options: [
      "JEE Main",
      "JEE Advanced",
      "NEET",
      "CAT",
      "GATE",
      "CLAT",
      "XAT",
      "MAT",
    ];
    multiSelect: true;
  };
  collegeType: {
    options: ["Government", "Private", "Deemed", "Autonomous"];
    multiSelect: true;
  };
  feeRange: {
    type: "range";
    min: 0;
    max: 5000000;
    step: 50000;
  };
  rankingAgency: {
    options: ["NIRF", "QS", "THE", "Collegedunia", "Indiatoday", "Outlook"];
    multiSelect: true;
  };
  accreditation: {
    options: ["NAAC A++", "NAAC A+", "NAAC A", "NBA", "AICTE", "UGC"];
    multiSelect: true;
  };
  courseDuration: {
    options: ["1 Year", "2 Years", "3 Years", "4 Years", "5 Years"];
    multiSelect: true;
  };
}
```

---

### 3.3 College Detail Page

#### Tab-Based Navigation Structure

```
┌─────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Home > Mumbai Colleges > IIT Bombay             │
├─────────────────────────────────────────────────────────────┤
│ COLLEGE HEADER                                               │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ ┌──────┐  IIT Bombay - Indian Institute of Technology   ││
│ │ │ Logo │  Mumbai, Maharashtra | Autonomous | Est. 1958  ││
│ │ └──────┘  ⭐ 4.4 (403 Reviews) | AICTE, UGC Approved    ││
│ │                                                          ││
│ │  [Apply Now] [Download Brochure] [+ Compare] [Contact]  ││
│ └──────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│ QUICK STATS BAR                                              │
│ ┌───────────┬───────────┬───────────┬───────────┬─────────┐ │
│ │ 📊 #3     │ 💰 ₹8.82L │ 📈 ₹23.5L │ 🎯 90%    │ 📚 120+ │ │
│ │ NIRF Rank │ Avg Fees  │ Avg Pkg   │ Placement │ Courses │ │
│ └───────────┴───────────┴───────────┴───────────┴─────────┘ │
├─────────────────────────────────────────────────────────────┤
│ TAB NAVIGATION (Sticky)                                      │
│ [Info] [Courses] [Admission] [Cutoff] [Placement] [Reviews] │
│ [Ranking] [Gallery] [Scholarship] [Faculty] [Hostel] [Q&A]  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│ ┌──────────────────────────────────┬────────────────────────┤
│ │ TAB CONTENT                      │ SIDEBAR                │
│ │                                  │                        │
│ │ [Dynamic based on selected tab]  │ Quick Actions:         │
│ │                                  │ - Apply Now            │
│ │                                  │ - Download Brochure    │
│ │                                  │ - Get Contact Details  │
│ │                                  │                        │
│ │                                  │ Top Courses:           │
│ │                                  │ - MBA (₹15.16L)        │
│ │                                  │ - B.Tech (₹8.83L)      │
│ │                                  │                        │
│ │                                  │ Similar Colleges:      │
│ │                                  │ - IIT Delhi            │
│ │                                  │ - IIT Madras           │
│ │                                  │                        │
│ │                                  │ News:                  │
│ │                                  │ - Latest updates       │
│ │                                  │                        │
│ │                                  │ Related Exams:         │
│ │                                  │ - JEE Advanced         │
│ │                                  │ - GATE                 │
│ └──────────────────────────────────┴────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

#### Tab Content Specifications

**Tab 1: Overview (Info)**

```
- Latest Updates & News (Collapsible alerts)
- Table of Contents (Anchor links)
- About College (Rich text with Read More)
- Admission Dates Table (Exam-wise)
- Key Highlights Table
- Fees Summary Table
- Important Events Timeline
- Campus & Facilities Icons
- College Contact Details
- Map Integration
- Comments Section
```

**Tab 2: Courses & Fees**

```
- Course Filter (Degree, Stream, Duration, Mode)
- Course Cards:
  - Course Name & Duration
  - Total Fees
  - Eligibility
  - Application Dates
  - Apply CTA
- Fee Breakdown (Semester-wise)
- Scholarship Info Link
```

**Tab 3: Admission**

```
- Admission Highlights Table (Course-wise)
- Eligibility Criteria
- Selection Process
- Important Dates Calendar
- Application Process Steps
- Required Documents
- Reservation Policy
```

**Tab 4: Cutoff**

```
- Exam Selector Tabs
- Year Selector
- Round-wise Cutoff Tables
- Category-wise Breakup
- Branch-wise Cutoff
- Year-over-Year Trend Charts
- Cutoff Predictor Widget
```

**Tab 5: Placement**

```
- Placement Highlights (Avg/Median/Highest)
- Course-wise Tabs
- NIRF Data Integration
- Sector-wise Placement Pie Chart
- Top Recruiters Logo Grid
- Year-wise Trend Chart
- Internship Statistics
- Alumni Network Info
```

**Tab 6: Reviews**

```
- Overall Rating Display
- Rating Breakdown (Academic, Faculty, Infra, Placement, Social)
- Rating Distribution Bar
- Likes/Dislikes Summary
- Course Filter
- Review Cards:
  - Student Name & Avatar
  - Course & Year
  - Rating
  - Detailed Review
  - Photos
  - Helpful Count
  - Reply Thread
- Write Review CTA (Sticky)
- Review Incentive Banner
```

**Tab 7: Ranking**

```
- Agency Tabs
- Rank Card per Agency
- Category-wise Rankings
- Year-wise Trend
- Rank Comparison Chart
- Methodology Info
```

**Tab 8: Gallery**

```
- Category Tabs (Campus, Hostel, Events, Labs)
- Photo Grid with Lightbox
- Video Embed Section
- Virtual Tour Link
- Student-submitted Photos
```

---

### 3.4 Exam Detail Page

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ EXAM HEADER                                                  │
│ ┌──────────────────────────────────────────────────────────┐│
│ │ ┌──────┐  JEE Main 2026                                 ││
│ │ │ Logo │  Joint Entrance Examination                    ││
│ │ └──────┘  Conducting Body: NTA | Level: National        ││
│ │           Mode: Online | Next Exam: January 23, 2026    ││
│ └──────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│ QUICK ACTIONS                                                │
│ [Registration Open →] [Download Syllabus] [Mock Test]       │
├─────────────────────────────────────────────────────────────┤
│ TAB NAVIGATION                                               │
│ [Overview] [Dates] [Registration] [Eligibility] [Pattern]   │
│ [Syllabus] [Admit Card] [Result] [Cutoff] [Answer Key]      │
│ [Counselling] [Preparation] [Question Papers] [Predictor]   │
├─────────────────────────────────────────────────────────────┤
│ CONTENT AREA                                                 │
│ ┌──────────────────────────────────┬────────────────────────┤
│ │ [Tab Content]                    │ SIDEBAR                │
│ │                                  │                        │
│ │                                  │ Important Dates:       │
│ │                                  │ - Registration: Feb 1  │
│ │                                  │ - Exam: Apr 1-10       │
│ │                                  │ - Result: Apr 20       │
│ │                                  │                        │
│ │                                  │ Download:              │
│ │                                  │ - Syllabus PDF         │
│ │                                  │ - Sample Paper         │
│ │                                  │ - Info Bulletin        │
│ │                                  │                        │
│ │                                  │ Related Exams:         │
│ │                                  │ - JEE Advanced         │
│ │                                  │ - BITSAT               │
│ │                                  │                        │
│ │                                  │ Top Colleges:          │
│ │                                  │ - NIT Trichy           │
│ │                                  │ - NIT Warangal         │
│ └──────────────────────────────────┴────────────────────────┘
├─────────────────────────────────────────────────────────────┤
│ COLLEGE PREDICTOR SECTION                                    │
│ [Enter Your Score] [Select Category] [Predict Colleges →]   │
├─────────────────────────────────────────────────────────────┤
│ NEWS & UPDATES                                               │
│ Latest articles related to this exam                         │
├─────────────────────────────────────────────────────────────┤
│ FAQ SECTION                                                  │
│ Common questions with expandable answers                     │
└─────────────────────────────────────────────────────────────┘
```

---

### 3.5 College Comparison Page

#### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│ COMPARISON HEADER                                            │
│ Compare Colleges Side-by-Side                                │
├─────────────────────────────────────────────────────────────┤
│ COLLEGE SELECTOR                                             │
│ ┌─────────────────┐  ┌─────────────────┐  ┌───────────────┐ │
│ │ IIT Bombay  ✕   │  │ IIT Delhi   ✕   │  │ + Add College │ │
│ │ [Change]        │  │ [Change]        │  │               │ │
│ └─────────────────┘  └─────────────────┘  └───────────────┘ │
├─────────────────────────────────────────────────────────────┤
│ COMPARISON TABLE                                             │
│ ┌─────────────┬─────────────────┬─────────────────┐         │
│ │ Criteria    │ IIT Bombay      │ IIT Delhi       │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ Logo        │ [Image]         │ [Image]         │         │
│ │ Location    │ Mumbai          │ New Delhi       │         │
│ │ Established │ 1958            │ 1961            │         │
│ │ Type        │ Public          │ Public          │         │
│ │ Approved By │ AICTE, UGC      │ AICTE, UGC      │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ RANKINGS    │                 │                 │         │
│ │ NIRF 2025   │ #3 ✓            │ #2 ✓            │         │
│ │ QS 2025     │ #149            │ #150            │         │
│ │ CD Score    │ 1851            │ 1818            │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ FEES        │                 │                 │         │
│ │ B.Tech      │ ₹8,82,500 ✓     │ ₹8,62,550       │         │
│ │ M.Tech      │ ₹1,24,000       │ ₹1,15,000 ✓     │         │
│ │ MBA         │ ₹15,16,000      │ ₹15,00,000 ✓    │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ PLACEMENT   │                 │                 │         │
│ │ Avg Package │ ₹23.5 LPA       │ ₹25.82 LPA ✓    │         │
│ │ High Package│ ₹1 Cr           │ ₹2 Cr ✓         │         │
│ │ Placement % │ 90%             │ 92% ✓           │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ CUTOFF      │                 │                 │         │
│ │ JEE Adv CSE │ 66              │ 55 ✓            │         │
│ │ JEE Adv EE  │ 418             │ 355 ✓           │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ REVIEWS     │                 │                 │         │
│ │ Rating      │ 4.4/5           │ 4.3/5           │         │
│ │ Total       │ 403             │ 993 ✓           │         │
│ ├─────────────┼─────────────────┼─────────────────┤         │
│ │ FACILITIES  │                 │                 │         │
│ │ Hostel      │ ✓               │ ✓               │         │
│ │ Library     │ ✓               │ ✓               │         │
│ │ Sports      │ ✓               │ ✓               │         │
│ │ WiFi        │ ✓               │ ✓               │         │
│ └─────────────┴─────────────────┴─────────────────┘         │
├─────────────────────────────────────────────────────────────┤
│ VERDICT                                                      │
│ "IIT Delhi has higher placements while IIT Bombay has        │
│ better research output. Choose based on your priorities."    │
├─────────────────────────────────────────────────────────────┤
│ ACTIONS                                                      │
│ [Share Comparison] [Download PDF] [Print]                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Design System

### 4.1 Color Palette (Collegium Brand-Inspired)

```css
:root {
  /* Primary Colors */
  --collegium-blue: #001c54; /* Collegium Blue - Primary */
  --collegium-yellow: #f8c300; /* Collegium Yellow - Accent */

  /* Extended Palette */
  --blue-dark: #001039;
  --blue-light: #16336e;
  --yellow-dark: #dfb82d;
  --yellow-light: #ffde4d;

  /* Semantic Colors */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --info: #3b82f6;

  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-300: #d1d5db;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-700: #374151;
  --gray-800: #1f2937;
  --gray-900: #111827;

  /* Background */
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --bg-tertiary: #f3f4f6;

  /* Text */
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-tertiary: #9ca3af;
  --text-inverse: #ffffff;
}
```

### 4.2 Typography System

```css
:root {
  /* Font Families (as per Collegium guidelines) */
  --font-primary: "Arial", "Helvetica", sans-serif;
  --font-secondary: "Roboto", sans-serif;
  --font-display: "Inter", sans-serif; /* For modern headings */

  /* Font Sizes (Fluid Typography) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 1.875rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.25rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3rem);
  --text-5xl: clamp(3rem, 2.25rem + 3.75vw, 4rem);

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 4.3 Spacing System

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */
  --space-20: 5rem; /* 80px */
  --space-24: 6rem; /* 96px */
}
```

### 4.4 Breakpoints

```css
/* Mobile-First Breakpoints */
--bp-sm: 640px; /* Small devices */
--bp-md: 768px; /* Tablets */
--bp-lg: 1024px; /* Laptops */
--bp-xl: 1280px; /* Desktops */
--bp-2xl: 1536px; /* Large screens */
```

### 4.5 Shadows & Borders

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
}
```

---

## 5. Component Library

### 5.1 Core Components

```typescript
// Component Structure

// atoms/
├── Button/
├── Input/
├── Select/
├── Checkbox/
├── Radio/
├── Badge/
├── Avatar/
├── Icon/
├── Spinner/
├── Skeleton/
├── Tag/
└── Breadcrumb/               ← NEW (E-4)

// molecules/
├── SearchBar/
├── FilterDropdown/
├── RatingDisplay/
├── PriceDisplay/
├── DateBadge/
├── RankBadge/
├── TabNavigation/
├── Breadcrumb/
├── Pagination/
├── StarRating/
├── CompareButton/
├── NotificationBell/          ← NEW (E-6)
├── CounsellingCTA/            ← NEW (B-1)
└── FloatingCompareBar/        ← NEW (E-3)

// organisms/
├── CollegeCard/
├── CourseCard/
├── ExamCard/
├── ReviewCard/
├── ComparisonTable/
├── FilterSidebar/
├── CollegeHeader/
├── PredictorWidget/
├── NewsCard/
├── RankingsTable/
├── PlacementChart/
├── ApplyNowModal/             ← NEW (E-1)
├── BrochureDownloadModal/     ← NEW (E-2)
├── QASection/                 ← NEW (C-4)
├── AdmissionTab/              ← NEW (C-1)
├── ScholarshipTab/            ← NEW (C-2)
├── HostelTab/                 ← NEW (C-3)
├── NewsletterForm/            ← NEW (A-8)
├── StructuredData/            ← NEW (G-1)
└── FAQSection/                ← NEW (G-4)

// homepage sections/
├── ExploreProgramsTabs/       ← NEW (A-1)
├── RankingsSection/           ← NEW (A-2)
├── CourseExplorer/            ← NEW (A-4)
├── TopStudyPlaces/            ← NEW (A-5)
├── AdmissionSection/          ← NEW (A-6)
├── BoardExamsSection/         ← NEW (A-7)
└── CollegesByLocation/        ← NEW (A-9)

// tools/
├── CourseFinderWizard/        ← NEW (D-1)
└── RecentlyViewed/            ← NEW (E-5)

// templates/
├── ListingPageLayout/
├── DetailPageLayout/
├── ComparePageLayout/
├── DashboardLayout/
└── AuthLayout/
```

### 5.2 Key Component Specifications

#### CollegeCard Component

```typescript
interface CollegeCardProps {
  id: string;
  name: string;
  slug: string;
  logo: string;
  location: {
    city: string;
    state: string;
  };
  rating: number;
  reviewCount: number;
  cdScore: number;
  approvals: string[];
  accreditation?: string;
  rankings: Array<{
    agency: string;
    rank: number;
    total: number;
    year: number;
  }>;
  fees: {
    course: string;
    amount: number;
    type: "total" | "yearly" | "semester";
  };
  placement?: {
    average: number;
    highest: number;
    percentage: number;
  };
  isSponsored?: boolean;
  isFeatured?: boolean;

  // Actions
  onApply: () => void;
  onCompare: () => void;
  onBrochure: () => void;
}
```

#### ReviewCard Component

```typescript
interface ReviewCardProps {
  id: string;
  author: {
    name: string;
    avatar?: string;
    course: string;
    year: string;
    isVerified: boolean;
  };
  rating: {
    overall: number;
    academic?: number;
    faculty?: number;
    infrastructure?: number;
    placement?: number;
    socialLife?: number;
  };
  title?: string;
  content: string;
  likes: string[];
  dislikes: string[];
  photos?: string[];
  helpfulCount: number;
  createdAt: string;
  replies?: ReviewReply[];

  onHelpful: () => void;
  onReport: () => void;
  onReply: (content: string) => void;
}
```

#### PredictorWidget Component

```typescript
interface PredictorWidgetProps {
  exams: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  onPredict: (data: {
    examId: string;
    score: number;
    percentile?: number;
    rank?: number;
    category: string;
    gender: string;
    state?: string;
  }) => Promise<PredictionResult[]>;
}

interface PredictionResult {
  college: CollegeBasic;
  course: string;
  probability: "high" | "medium" | "low";
  previousCutoff: number;
  expectedCutoff: number;
}
```

---

## 6. Technical Architecture

### 6.1 Technology Stack

```yaml
Frontend:
  Framework: Next.js 14+ (App Router)
  Language: TypeScript 5+
  Styling: Tailwind CSS 3.4+
  State Management:
    - Server State: TanStack Query (React Query)
    - Client State: Zustand
  Forms: React Hook Form + Zod
  UI Components: Radix UI Primitives + Custom Design System
  Charts: Recharts / Chart.js
  Maps: React Leaflet / Mapbox
  Rich Text: TipTap / Slate
  Image Optimization: Next/Image + Cloudinary

Backend:
  Primary API: Node.js 20+ with Fastify / Express
  Language: TypeScript
  ORM: Prisma / Drizzle ORM
  Validation: Zod
  Authentication: NextAuth.js v5 + JWT
  File Upload: UploadThing / AWS S3
  Email: Resend / SendGrid
  SMS: MSG91 / Twilio

Database:
  Primary: PostgreSQL 15+ (Neon / Supabase)
  Search:
    - Meilisearch (Primary - fast, typo-tolerant)
    - OR Elasticsearch (if advanced analytics needed)
  Cache: Redis (Upstash)
  CDN: Cloudflare / Vercel Edge

Infrastructure:
  Hosting: Vercel (Frontend) + Railway/Render (Backend)
  Database Hosting: Neon / Supabase / PlanetScale
  CDN: Cloudflare
  Monitoring: Sentry + Vercel Analytics
  Logging: Axiom / Logtail
  CI/CD: GitHub Actions

Third-Party Integrations:
  Analytics: Google Analytics 4 + Mixpanel
  Payment: Razorpay (India) + Stripe (International)
  Chat: Intercom / Crisp
  Push Notifications: OneSignal
  Social Auth: Google, Facebook, LinkedIn
```

### 6.2 System Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER                                │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐             │
│   │   Web App   │    │ Mobile Web  │    │ Admin Panel │             │
│   │  (Next.js)  │    │ (PWA/TWA)   │    │  (Next.js)  │             │
│   └──────┬──────┘    └──────┬──────┘    └──────┬──────┘             │
│          │                  │                  │                     │
│          └──────────────────┼──────────────────┘                     │
│                             │                                        │
├─────────────────────────────┼────────────────────────────────────────┤
│                        CDN LAYER                                      │
│   ┌─────────────────────────┴────────────────────────────────┐       │
│   │                    Cloudflare CDN                         │       │
│   │    - Static Assets  - Edge Caching  - DDoS Protection    │       │
│   └─────────────────────────┬────────────────────────────────┘       │
├─────────────────────────────┼────────────────────────────────────────┤
│                        API GATEWAY                                    │
│   ┌─────────────────────────┴────────────────────────────────┐       │
│   │              Vercel Edge Functions / Middleware           │       │
│   │    - Rate Limiting  - Auth  - Request Validation         │       │
│   └─────────────────────────┬────────────────────────────────┘       │
├─────────────────────────────┼────────────────────────────────────────┤
│                     APPLICATION LAYER                                 │
│                                                                       │
│   ┌─────────────────────────┴────────────────────────────────┐       │
│   │                                                           │       │
│   │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │       │
│   │  │  Next.js API │  │  Node.js API │  │  Background  │   │       │
│   │  │   Routes     │  │   (Fastify)  │  │    Workers   │   │       │
│   │  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘   │       │
│   │         │                 │                 │            │       │
│   │  ┌──────┴─────────────────┴─────────────────┴──────┐    │       │
│   │  │              Service Layer (Business Logic)      │    │       │
│   │  │  - CollegeService  - ExamService  - UserService │    │       │
│   │  │  - SearchService   - LeadService  - ReviewService│    │       │
│   │  └──────────────────────────────────────────────────┘    │       │
│   │                                                           │       │
│   └───────────────────────────┬───────────────────────────────┘       │
│                               │                                       │
├───────────────────────────────┼───────────────────────────────────────┤
│                         DATA LAYER                                    │
│                                                                       │
│   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐          │
│   │  PostgreSQL   │   │  Meilisearch  │   │    Redis      │          │
│   │   (Primary)   │   │   (Search)    │   │   (Cache)     │          │
│   │               │   │               │   │               │          │
│   │ - Colleges    │   │ - Full-text   │   │ - Sessions    │          │
│   │ - Courses     │   │   search      │   │ - Hot data    │          │
│   │ - Exams       │   │ - Faceted     │   │ - Rate limits │          │
│   │ - Reviews     │   │   filters     │   │ - Queue jobs  │          │
│   │ - Users       │   │ - Suggestions │   │               │          │
│   │ - Leads       │   │               │   │               │          │
│   └───────────────┘   └───────────────┘   └───────────────┘          │
│                                                                       │
│   ┌───────────────┐   ┌───────────────┐                              │
│   │  Cloudinary   │   │     S3        │                              │
│   │  (Images)     │   │  (Documents)  │                              │
│   └───────────────┘   └───────────────┘                              │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
```

### 6.3 Database Architecture

#### Why PostgreSQL?

| Requirement      | PostgreSQL Advantage                          |
| ---------------- | --------------------------------------------- |
| Complex Queries  | Advanced JOINs, CTEs, Window Functions        |
| Data Integrity   | ACID compliance, Foreign Keys, Constraints    |
| JSON Support     | JSONB for flexible schema (cutoffs, rankings) |
| Full-text Search | Built-in FTS (backup to Meilisearch)          |
| Scalability      | Read replicas, Partitioning, Neon serverless  |
| Geospatial       | PostGIS for location-based queries            |
| Analytics        | Aggregate functions, Materialized views       |

---

## 7. Data Models

### 7.1 Core Entity Relationship

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   College   │────<│   Course    │────<│    Fee      │
└──────┬──────┘     └──────┬──────┘     └─────────────┘
       │                   │
       │     ┌─────────────┘
       │     │
       ▼     ▼
┌─────────────────────┐     ┌─────────────┐
│  CollegeCourse      │────<│   Cutoff    │
│  (Junction Table)   │     └─────────────┘
└──────┬──────────────┘
       │
       │     ┌─────────────┐     ┌─────────────┐
       └────>│  Placement  │────>│  Recruiter  │
             └─────────────┘     └─────────────┘

┌─────────────┐     ┌─────────────┐
│    Exam     │────<│ ExamCollege │
└──────┬──────┘     └─────────────┘
       │
       ▼
┌─────────────┐
│   Cutoff    │
└─────────────┘

┌─────────────┐     ┌─────────────┐
│    User     │────<│   Review    │
└──────┬──────┘     └─────────────┘
       │
       ├────────────>┌─────────────┐
       │             │ Application │
       │             │   (Lead)    │
       │             └─────────────┘
       │
       └────────────>┌─────────────┐
                     │  SavedItem  │
                     └─────────────┘

┌─────────────┐
│   Ranking   │────>College
└─────────────┘
```

### 7.2 Prisma Schema

```prisma
// schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ==================== COLLEGE MODELS ====================

model College {
  id                String   @id @default(cuid())
  slug              String   @unique
  name              String
  shortName         String?
  description       String?  @db.Text
  establishedYear   Int?
  type              CollegeType
  status            CollegeStatus @default(ACTIVE)

  // Location
  address           String?
  city              String
  state             String
  country           String   @default("India")
  pincode           String?
  latitude          Float?
  longitude         Float?

  // Contact
  email             String?
  phone             String?
  website           String?

  // Media
  logo              String?
  coverImage        String?
  gallery           Json?    // Array of image URLs
  virtualTourUrl    String?

  // Metadata
  cdScore           Int?     // Collegedunia-style score (0-2000)
  isVerified        Boolean  @default(false)
  isFeatured        Boolean  @default(false)
  isSponsored       Boolean  @default(false)
  sponsorPriority   Int?

  // SEO
  metaTitle         String?
  metaDescription   String?

  // Timestamps
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  // Relations
  approvals         CollegeApproval[]
  accreditations    CollegeAccreditation[]
  courses           CollegeCourse[]
  rankings          Ranking[]
  placements        Placement[]
  reviews           Review[]
  facilities        CollegeFacility[]
  faculty           Faculty[]
  news              News[]
  leads             Lead[]
  examColleges      ExamCollege[]
  scholarships      Scholarship[]
  hostels           Hostel[]

  // Indexes
  @@index([city])
  @@index([state])
  @@index([type])
  @@index([cdScore])
  @@index([isFeatured, isSponsored])
}

enum CollegeType {
  GOVERNMENT
  PRIVATE
  DEEMED
  AUTONOMOUS
  PUBLIC_PRIVATE
}

enum CollegeStatus {
  ACTIVE
  INACTIVE
  PENDING_REVIEW
  ARCHIVED
}

model CollegeApproval {
  id         String   @id @default(cuid())
  collegeId  String
  authority  String   // AICTE, UGC, MCI, BCI, etc.
  approvalNo String?
  validFrom  DateTime?
  validTo    DateTime?

  college    College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)

  @@unique([collegeId, authority])
}

model CollegeAccreditation {
  id            String   @id @default(cuid())
  collegeId     String
  agency        String   // NAAC, NBA, etc.
  grade         String   // A++, A+, A, B++, etc.
  score         Float?
  validFrom     DateTime?
  validTo       DateTime?

  college       College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)

  @@unique([collegeId, agency])
}

model CollegeFacility {
  id         String   @id @default(cuid())
  collegeId  String
  name       String   // Library, Hostel, Sports, WiFi, etc.
  available  Boolean  @default(true)
  details    String?

  college    College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)

  @@unique([collegeId, name])
}

// ==================== COURSE MODELS ====================

model Course {
  id               String   @id @default(cuid())
  slug             String   @unique
  name             String
  fullName         String
  shortName        String?
  description      String?  @db.Text

  level            CourseLevel
  stream           String   // Engineering, Management, Medical, etc.
  subStream        String?  // Computer Science, Finance, etc.

  durationYears    Float
  durationMonths   Int?
  mode             CourseMode

  eligibility      String?  @db.Text
  careerProspects  String?  @db.Text
  syllabus         Json?    // Semester-wise syllabus

  // SEO
  metaTitle        String?
  metaDescription  String?

  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt

  // Relations
  collegeCourses   CollegeCourse[]
  examCourses      ExamCourse[]

  @@index([level])
  @@index([stream])
}

enum CourseLevel {
  DIPLOMA
  CERTIFICATE
  BACHELORS
  MASTERS
  DOCTORATE
  INTEGRATED
  EXECUTIVE
}

enum CourseMode {
  FULL_TIME
  PART_TIME
  DISTANCE
  ONLINE
  HYBRID
}

model CollegeCourse {
  id                  String   @id @default(cuid())
  collegeId           String
  courseId            String

  specialization      String?
  intake              Int?     // Number of seats

  // Fees
  fees                Json?    // { total, yearly, semester, hostel, etc. }
  feesCurrency        String   @default("INR")

  // Eligibility
  eligibilityCriteria String?  @db.Text
  minimumPercentage   Float?

  // Admission
  admissionProcess    String?  @db.Text
  entranceExams       String[] // JEE, CAT, NEET, etc.
  applicationStart    DateTime?
  applicationEnd      DateTime?

  // Status
  isActive            Boolean  @default(true)
  academicYear        String?  // 2026-27

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  // Relations
  college             College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
  course              Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)
  cutoffs             Cutoff[]
  placements          Placement[]

  @@unique([collegeId, courseId, specialization])
  @@index([collegeId])
  @@index([courseId])
}

// ==================== EXAM MODELS ====================

model Exam {
  id                  String   @id @default(cuid())
  slug                String   @unique
  name                String
  fullName            String
  description         String?  @db.Text

  conductingBody      String   // NTA, IIT, etc.
  level               ExamLevel
  mode                ExamMode

  frequency           String?  // Once, Twice, Annual, etc.

  // URLs
  officialWebsite     String?
  registrationUrl     String?

  // Content (JSON for flexibility)
  eligibility         Json?
  examPattern         Json?
  syllabus            Json?
  importantDates      Json?
  feeStructure        Json?

  // SEO
  metaTitle           String?
  metaDescription     String?

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt

  // Relations
  examColleges        ExamCollege[]
  examCourses         ExamCourse[]
  cutoffs             Cutoff[]
  examDates           ExamDate[]
  questionPapers      QuestionPaper[]
  news                News[]

  @@index([level])
  @@index([conductingBody])
}

enum ExamLevel {
  NATIONAL
  STATE
  UNIVERSITY
  INSTITUTE
}

enum ExamMode {
  ONLINE
  OFFLINE
  HYBRID
}

model ExamDate {
  id          String   @id @default(cuid())
  examId      String
  year        Int
  session     String?  // Session 1, Session 2, etc.

  // Key Dates
  registrationStart  DateTime?
  registrationEnd    DateTime?
  admitCardDate      DateTime?
  examStartDate      DateTime?
  examEndDate        DateTime?
  resultDate         DateTime?
  counsellingStart   DateTime?

  exam        Exam     @relation(fields: [examId], references: [id], onDelete: Cascade)

  @@unique([examId, year, session])
}

model ExamCollege {
  id          String   @id @default(cuid())
  examId      String
  collegeId   String

  exam        Exam     @relation(fields: [examId], references: [id], onDelete: Cascade)
  college     College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)

  @@unique([examId, collegeId])
}

model ExamCourse {
  id          String   @id @default(cuid())
  examId      String
  courseId    String

  exam        Exam     @relation(fields: [examId], references: [id], onDelete: Cascade)
  course      Course   @relation(fields: [courseId], references: [id], onDelete: Cascade)

  @@unique([examId, courseId])
}

model QuestionPaper {
  id          String   @id @default(cuid())
  examId      String
  year        Int
  session     String?
  shift       String?
  subject     String?
  fileUrl     String
  answerKeyUrl String?

  exam        Exam     @relation(fields: [examId], references: [id], onDelete: Cascade)

  @@unique([examId, year, session, shift, subject])
}

// ==================== CUTOFF MODELS ====================

model Cutoff {
  id                String   @id @default(cuid())
  collegeCourseId   String?
  examId            String?

  year              Int
  round             String?  // Round 1, 2, 3, etc.

  category          String   // General, OBC-NCL, SC, ST, EWS, PwD, etc.
  gender            String?  // Male, Female, All
  state             String?  // For state quota

  // Cutoff values (use appropriate field based on exam)
  rank              Int?
  percentile        Float?
  marks             Float?

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  collegeCourse     CollegeCourse? @relation(fields: [collegeCourseId], references: [id], onDelete: Cascade)
  exam              Exam?    @relation(fields: [examId], references: [id], onDelete: Cascade)

  @@index([collegeCourseId])
  @@index([examId])
  @@index([year])
  @@index([category])
}

// ==================== PLACEMENT MODELS ====================

model Placement {
  id                String   @id @default(cuid())
  collegeId         String
  collegeCourseId   String?
  year              Int

  // Statistics
  studentsPlaced    Int?
  totalStudents     Int?
  placementRate     Float?

  averagePackage    Float?
  medianPackage     Float?
  highestPackage    Float?
  lowestPackage     Float?

  topRecruiters     Json?    // Array of recruiter info
  sectorWise        Json?    // { IT: 40%, Consulting: 30%, ... }

  // Source
  source            String?  // NIRF, College Website, etc.
  isVerified        Boolean  @default(false)

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  college           College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
  collegeCourse     CollegeCourse? @relation(fields: [collegeCourseId], references: [id], onDelete: Cascade)

  @@index([collegeId])
  @@index([year])
}

// ==================== RANKING MODELS ====================

model Ranking {
  id          String   @id @default(cuid())
  collegeId   String

  agency      String   // NIRF, QS, THE, Collegedunia, etc.
  year        Int
  category    String?  // Engineering, Management, Overall, etc.

  rank        Int
  totalRanked Int?
  score       Float?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  college     College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)

  @@unique([collegeId, agency, year, category])
  @@index([agency])
  @@index([year])
  @@index([rank])
}

// ==================== REVIEW MODELS ====================

model Review {
  id                String   @id @default(cuid())
  collegeId         String
  userId            String

  // Course info
  courseId          String?
  graduationYear    Int?

  // Ratings (1-5)
  overallRating     Float
  academicRating    Float?
  facultyRating     Float?
  infrastructureRating Float?
  placementRating   Float?
  socialLifeRating  Float?
  valueForMoney     Float?

  // Content
  title             String?
  content           String   @db.Text
  likes             String[] // Array of liked aspects
  dislikes          String[] // Array of disliked aspects

  // Media
  photos            String[]

  // Engagement
  helpfulCount      Int      @default(0)

  // Moderation
  status            ReviewStatus @default(PENDING)
  moderatedBy       String?
  moderatedAt       DateTime?

  // Verification
  isVerified        Boolean  @default(false)
  verificationDoc   String?

  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  college           College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
  user              User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  replies           ReviewReply[]

  @@index([collegeId])
  @@index([userId])
  @@index([status])
  @@index([overallRating])
}

enum ReviewStatus {
  PENDING
  APPROVED
  REJECTED
  FLAGGED
}

model ReviewReply {
  id          String   @id @default(cuid())
  reviewId    String
  userId      String

  content     String   @db.Text
  isOfficial  Boolean  @default(false) // From college admin

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  review      Review   @relation(fields: [reviewId], references: [id], onDelete: Cascade)
  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// ==================== USER MODELS ====================

model User {
  id              String   @id @default(cuid())
  email           String   @unique
  phone           String?  @unique
  passwordHash    String?

  // Profile
  firstName       String?
  lastName        String?
  avatar          String?

  // Student Info
  currentEducation String?
  graduationYear   Int?
  interestedStreams String[]
  preferredCities   String[]

  // Settings
  emailVerified   Boolean  @default(false)
  phoneVerified   Boolean  @default(false)
  notificationPrefs Json?

  // Role
  role            UserRole @default(STUDENT)

  // Admin specific
  adminCollegeId  String?  // For college admins

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  // Relations
  reviews         Review[]
  reviewReplies   ReviewReply[]
  leads           Lead[]
  savedItems      SavedItem[]
  compareItems    CompareItem[]
  sessions        Session[]

  @@index([email])
  @@index([role])
}

enum UserRole {
  STUDENT
  PARENT
  COLLEGE_ADMIN
  CONTENT_ADMIN
  SUPER_ADMIN
}

model Session {
  id          String   @id @default(cuid())
  userId      String
  token       String   @unique
  expiresAt   DateTime

  userAgent   String?
  ipAddress   String?

  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model SavedItem {
  id          String   @id @default(cuid())
  userId      String
  itemType    SavedItemType
  itemId      String

  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, itemType, itemId])
}

enum SavedItemType {
  COLLEGE
  COURSE
  EXAM
  ARTICLE
}

model CompareItem {
  id          String   @id @default(cuid())
  userId      String
  collegeId   String

  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, collegeId])
}

// ==================== LEAD MODELS ====================

model Lead {
  id              String   @id @default(cuid())
  collegeId       String
  userId          String?

  // Contact Info
  name            String
  email           String
  phone           String

  // Interest
  courseId        String?
  source          String   // Website, Ad, Referral, etc.
  utmSource       String?
  utmMedium       String?
  utmCampaign     String?

  // Lead Type
  type            LeadType

  // Status
  status          LeadStatus @default(NEW)

  // Notes
  notes           String?    @db.Text

  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt

  college         College    @relation(fields: [collegeId], references: [id], onDelete: Cascade)
  user            User?      @relation(fields: [userId], references: [id])

  @@index([collegeId])
  @@index([status])
  @@index([createdAt])
}

enum LeadType {
  APPLY_NOW
  BROCHURE_DOWNLOAD
  CONTACT_REQUEST
  CALLBACK_REQUEST
  ENQUIRY
}

enum LeadStatus {
  NEW
  CONTACTED
  QUALIFIED
  CONVERTED
  LOST
}

// ==================== CONTENT MODELS ====================

model News {
  id              String   @id @default(cuid())
  slug            String   @unique

  title           String
  excerpt         String?
  content         String   @db.Text
  featuredImage   String?

  category        NewsCategory
  tags            String[]

  // Relations
  collegeId       String?
  examId          String?

  // Author
  authorId        String?

  // Status
  status          ContentStatus @default(DRAFT)
  publishedAt     DateTime?

  // SEO
  metaTitle       String?
  metaDescription String?

  // Stats
  viewCount       Int      @default(0)

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  college         College? @relation(fields: [collegeId], references: [id])
  exam            Exam?    @relation(fields: [examId], references: [id])

  @@index([category])
  @@index([status, publishedAt])
}

enum NewsCategory {
  EXAM_ALERT
  COLLEGE_ALERT
  ADMISSION_NEWS
  RESULT_NEWS
  EDUCATION_NEWS
  CAREER_GUIDANCE
}

enum ContentStatus {
  DRAFT
  PUBLISHED
  ARCHIVED
}

// ==================== OTHER MODELS ====================

model Faculty {
  id          String   @id @default(cuid())
  collegeId   String

  name        String
  designation String
  department  String?
  qualification String?
  photo       String?
  profileUrl  String?

  college     College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
}

model Hostel {
  id          String   @id @default(cuid())
  collegeId   String

  name        String
  type        String   // Boys, Girls, Co-ed
  capacity    Int?
  roomTypes   Json?    // Single, Double, Triple
  amenities   String[]
  fees        Json?
  photos      String[]

  college     College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
}

model Scholarship {
  id              String   @id @default(cuid())
  collegeId       String

  name            String
  provider        String   // College, Government, Private
  amount          String?
  eligibility     String?  @db.Text
  applicationProcess String? @db.Text
  deadline        DateTime?
  link            String?

  college         College  @relation(fields: [collegeId], references: [id], onDelete: Cascade)
}
```

---

## 8. API Design

### 8.1 RESTful API Endpoints

```yaml
# Base URL: /api/v1

# ==================== COLLEGES ====================
GET    /colleges                    # List colleges (with filters, pagination)
GET    /colleges/:slug              # Get college details
GET    /colleges/:slug/courses      # Get college courses
GET    /colleges/:slug/placements   # Get placement data
GET    /colleges/:slug/reviews      # Get reviews
GET    /colleges/:slug/cutoffs      # Get cutoffs
GET    /colleges/:slug/rankings     # Get rankings
GET    /colleges/:slug/news         # Get related news
GET    /colleges/compare            # Compare colleges (query: ids[])
GET    /colleges/search             # Search colleges

# ==================== COURSES ====================
GET    /courses                     # List courses
GET    /courses/:slug               # Get course details
GET    /courses/:slug/colleges      # Colleges offering this course

# ==================== EXAMS ====================
GET    /exams                       # List exams
GET    /exams/:slug                 # Get exam details
GET    /exams/:slug/dates           # Get important dates
GET    /exams/:slug/syllabus        # Get syllabus
GET    /exams/:slug/cutoffs         # Get cutoffs
GET    /exams/:slug/colleges        # Participating colleges
GET    /exams/:slug/question-papers # Previous year papers

# ==================== RANKINGS ====================
GET    /rankings                    # Get rankings (filter by agency, year)
GET    /rankings/:agency            # Rankings by agency

# ==================== REVIEWS ====================
GET    /reviews                     # All reviews (with filters)
POST   /reviews                     # Create review (auth required)
GET    /reviews/:id                 # Get review details
PUT    /reviews/:id                 # Update review
DELETE /reviews/:id                 # Delete review
POST   /reviews/:id/helpful         # Mark as helpful

# ==================== PREDICTOR ====================
POST   /predictor/predict           # Get college predictions
GET    /predictor/exams             # Get supported exams

# ==================== SEARCH ====================
GET    /search                      # Global search
GET    /search/suggestions          # Autocomplete suggestions

# ==================== USER ====================
POST   /auth/register               # Register
POST   /auth/login                  # Login
POST   /auth/logout                 # Logout
POST   /auth/forgot-password        # Forgot password
POST   /auth/reset-password         # Reset password
POST   /auth/verify-email           # Verify email
POST   /auth/verify-phone           # Verify phone (OTP)

GET    /user/profile                # Get profile
PUT    /user/profile                # Update profile
GET    /user/saved                  # Saved items
POST   /user/saved                  # Save item
DELETE /user/saved/:id              # Remove saved item
GET    /user/compare                # Compare list
POST   /user/compare                # Add to compare
DELETE /user/compare/:id            # Remove from compare
GET    /user/reviews                # User's reviews

# ==================== LEADS ====================
POST   /leads                       # Create lead (apply, brochure, etc.)

# ==================== NEWS ====================
GET    /news                        # List news
GET    /news/:slug                  # Get article

# ==================== ADMIN ====================
# Colleges
GET    /admin/colleges              # List all colleges
POST   /admin/colleges              # Create college
PUT    /admin/colleges/:id          # Update college
DELETE /admin/colleges/:id          # Delete college

# Similar patterns for courses, exams, reviews, users, leads...

# Analytics
GET    /admin/analytics/leads       # Lead analytics
GET    /admin/analytics/traffic     # Traffic analytics
GET    /admin/analytics/reviews     # Review analytics
```

### 8.2 Query Parameters Standard

```typescript
// Pagination
interface PaginationParams {
  page?: number; // Default: 1
  limit?: number; // Default: 20, Max: 100
  sortBy?: string; // Field to sort by
  sortOrder?: "asc" | "desc";
}

// College Listing Filters
interface CollegeFilters extends PaginationParams {
  search?: string;
  stream?: string[]; // Engineering, Medical, etc.
  city?: string[];
  state?: string[];
  degree?: string[]; // B.Tech, MBA, etc.
  collegeType?: string[]; // Government, Private
  examAccepted?: string[];
  feeMin?: number;
  feeMax?: number;
  ratingMin?: number;
  rankingAgency?: string;
  accreditation?: string[];
  featured?: boolean;
}

// Response Format
interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}
```

---

## 9. SEO Strategy

### 9.1 Technical SEO

```typescript
// next.config.ts optimizations
const nextConfig = {
  // Enable static generation
  output: "standalone",

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ["cdn.collegium.com", "res.cloudinary.com"],
  },

  // Headers for SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },

  // Redirects for URL canonicalization
  async redirects() {
    return [
      // Trailing slash consistency
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },
};
```

### 9.2 On-Page SEO Checklist

```markdown
# Per Page SEO Requirements

## Meta Tags

- [ ] Unique title (50-60 chars)
- [ ] Meta description (150-160 chars)
- [ ] Canonical URL
- [ ] Robots meta
- [ ] Open Graph tags
- [ ] Twitter Card tags

## Structured Data (JSON-LD)

- [ ] Organization schema (global)
- [ ] BreadcrumbList schema
- [ ] EducationalOrganization (colleges)
- [ ] Course schema
- [ ] Review schema
- [ ] FAQ schema
- [ ] Article schema (news)
- [ ] Event schema (exam dates)

## Content

- [ ] H1 tag (single, keyword-rich)
- [ ] H2-H6 hierarchy
- [ ] Keyword in first 100 words
- [ ] Alt text for images
- [ ] Internal linking
- [ ] External authoritative links

## Technical

- [ ] Mobile responsive
- [ ] Core Web Vitals optimized
- [ ] Fast TTFB (<200ms)
- [ ] Lazy loading images
- [ ] Preconnect to critical origins
```

### 9.3 URL & Keyword Strategy

```yaml
# High-Priority Keywords & URLs

Engineering:
  - /engineering-colleges → "Engineering colleges in India"
  - /btech-colleges → "B.Tech colleges in India"
  - /btech/bangalore-colleges → "B.Tech colleges in Bangalore"
  - /iit-colleges → "IIT colleges in India"
  - /nit-colleges → "NIT colleges in India"

Management:
  - /mba-colleges → "MBA colleges in India"
  - /mba/delhi-colleges → "MBA colleges in Delhi"
  - /iim-colleges → "IIM colleges in India"
  - /pgdm-colleges → "PGDM colleges in India"

Medical:
  - /mbbs-colleges → "MBBS colleges in India"
  - /medical-colleges → "Medical colleges in India"
  - /aiims-colleges → "AIIMS colleges"

Exams:
  - /exams/jee-main → "JEE Main 2026"
  - /exams/neet → "NEET 2026"
  - /exams/cat → "CAT 2025"
  - /jee-main-college-predictor → "JEE Main college predictor"

Rankings:
  - /nirf-ranked-colleges → "NIRF ranking 2025"
  - /qs-ranked-colleges → "QS ranking India"
```

### 9.4 Sitemap Strategy

```xml
<!-- sitemap-index.xml -->
<sitemapindex>
  <sitemap><loc>/sitemap-colleges.xml</loc></sitemap>
  <sitemap><loc>/sitemap-courses.xml</loc></sitemap>
  <sitemap><loc>/sitemap-exams.xml</loc></sitemap>
  <sitemap><loc>/sitemap-rankings.xml</loc></sitemap>
  <sitemap><loc>/sitemap-news.xml</loc></sitemap>
  <sitemap><loc>/sitemap-static.xml</loc></sitemap>
</sitemapindex>

<!-- Priority Strategy -->
- Homepage: 1.0
- Stream/Course listing pages: 0.9
- College detail pages: 0.8
- Exam pages: 0.8
- Course pages: 0.7
- News articles: 0.6
- Static pages: 0.5
```

---

## 10. Performance & Scalability

### 10.1 Performance Targets

| Metric                         | Target  | Measurement     |
| ------------------------------ | ------- | --------------- |
| LCP (Largest Contentful Paint) | < 2.5s  | Core Web Vitals |
| FID (First Input Delay)        | < 100ms | Core Web Vitals |
| CLS (Cumulative Layout Shift)  | < 0.1   | Core Web Vitals |
| TTFB (Time to First Byte)      | < 200ms | Server response |
| TTI (Time to Interactive)      | < 3.5s  | User experience |
| Bundle Size (Initial)          | < 200KB | Gzipped JS      |
| Lighthouse Score               | > 90    | Performance     |

### 10.2 Caching Strategy

```typescript
// Redis Caching Layers

const cacheConfig = {
  // Static data (rarely changes)
  staticData: {
    streams: { ttl: 86400 }, // 24 hours
    cities: { ttl: 86400 },
    approvalBodies: { ttl: 86400 },
    rankingAgencies: { ttl: 86400 },
  },

  // Semi-static data (changes occasionally)
  semiStatic: {
    collegeList: { ttl: 3600 }, // 1 hour
    courseList: { ttl: 3600 },
    examList: { ttl: 3600 },
    rankings: { ttl: 3600 },
  },

  // Dynamic data (frequent updates)
  dynamic: {
    collegeDetail: { ttl: 900 }, // 15 minutes
    examDates: { ttl: 900 },
    cutoffs: { ttl: 1800 }, // 30 minutes
  },

  // Real-time data (no cache or short)
  realtime: {
    reviews: { ttl: 300 }, // 5 minutes
    news: { ttl: 300 },
    leads: { ttl: 0 }, // No cache
  },

  // Search cache
  search: {
    suggestions: { ttl: 3600 },
    results: { ttl: 300 },
  },
};
```

### 10.3 Database Optimization

```sql
-- Key Indexes for Performance

-- College listing queries
CREATE INDEX idx_college_listing ON colleges(status, is_featured, is_sponsored, cd_score DESC);
CREATE INDEX idx_college_location ON colleges(city, state);
CREATE INDEX idx_college_search ON colleges USING gin(to_tsvector('english', name || ' ' || COALESCE(short_name, '')));

-- Course queries
CREATE INDEX idx_college_course_active ON college_courses(college_id, is_active);

-- Review queries
CREATE INDEX idx_review_college ON reviews(college_id, status, created_at DESC);
CREATE INDEX idx_review_rating ON reviews(college_id, overall_rating);

-- Search performance
CREATE INDEX idx_exam_search ON exams USING gin(to_tsvector('english', name || ' ' || full_name));

-- Ranking queries
CREATE INDEX idx_ranking_lookup ON rankings(agency, year, category, rank);

-- Cutoff queries
CREATE INDEX idx_cutoff_lookup ON cutoffs(college_course_id, year, category);
```

### 10.4 Scaling Architecture

```
                    Load Balancer
                         │
           ┌─────────────┼─────────────┐
           │             │             │
        ┌──┴──┐       ┌──┴──┐       ┌──┴──┐
        │ App │       │ App │       │ App │
        │  1  │       │  2  │       │  3  │
        └──┬──┘       └──┬──┘       └──┬──┘
           │             │             │
           └─────────────┼─────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
         ┌────┴────┐          ┌────┴────┐
         │  Redis  │          │  Redis  │
         │ Primary │──────────│ Replica │
         └────┬────┘          └─────────┘
              │
    ┌─────────┴─────────┐
    │                   │
┌───┴───┐           ┌───┴───┐
│  PG   │           │  PG   │
│Primary│───────────│Replica│ (Read queries)
└───────┘           └───────┘

# Horizontal Scaling:
- App servers: Auto-scale based on CPU/Memory
- Read replicas: Add for high-read workloads
- Redis cluster: For session/cache distribution
- CDN: Cloudflare for static assets & edge caching
```

---

## 11. Monetization & Business Logic

### 11.1 Revenue Streams

```yaml
1. Lead Generation (Primary):
   - Apply Now clicks → CPL (Cost Per Lead)
   - Brochure downloads → CPL
   - Contact requests → CPL
   - Callback requests → CPL

   Pricing Model:
   - Tier 1 colleges: ₹200-500 per lead
   - Tier 2 colleges: ₹100-200 per lead
   - Tier 3 colleges: ₹50-100 per lead

2. Featured Listings:
   - Premium placement in search results
   - Homepage carousel
   - Category-specific featuring

   Pricing Model:
   - Homepage feature: ₹50,000/month
   - Category feature: ₹20,000/month
   - Search boost: ₹10,000/month

3. Sponsored Content:
   - Sponsored college cards
   - Banner advertisements
   - Native content integration

   Pricing Model:
   - Banner ads: CPM (₹100-500)
   - Sponsored cards: CPC (₹5-20)

4. Premium Subscriptions (Future):
   - Ad-free experience
   - Advanced predictor access
   - Priority counseling

   Pricing: ₹499/year

5. B2B Services:
   - Analytics dashboard for colleges
   - Competitor benchmarking
   - Admission management tools

   Pricing: ₹50,000-500,000/year
```

### 11.2 Lead Tracking System

```typescript
interface LeadEvent {
  id: string;
  collegeId: string;
  userId?: string;
  sessionId: string;

  // Event type
  type: "APPLY_NOW" | "BROCHURE" | "CONTACT" | "CALLBACK" | "ENQUIRY";

  // Source tracking
  source: string;
  medium: string;
  campaign?: string;
  referrer?: string;
  landingPage: string;

  // User info
  name: string;
  email: string;
  phone: string;

  // Context
  courseInterest?: string;
  message?: string;

  // Attribution
  firstTouchSource?: string;
  lastTouchSource?: string;
  touchPoints: TouchPoint[];

  // Status
  status: "NEW" | "SENT" | "VERIFIED" | "CONVERTED" | "INVALID";

  // Timestamps
  createdAt: Date;
  sentToCollegeAt?: Date;
  convertedAt?: Date;
}

// Lead quality scoring
function calculateLeadScore(lead: LeadEvent): number {
  let score = 50; // Base score

  // Contact completeness
  if (lead.email && lead.phone) score += 20;
  if (lead.name && lead.name.split(" ").length > 1) score += 5;

  // Engagement signals
  if (lead.touchPoints.length > 3) score += 15;
  if (lead.courseInterest) score += 10;

  // Source quality
  if (lead.source === "organic") score += 10;
  if (lead.source === "referral") score += 15;

  return Math.min(score, 100);
}
```

### 11.3 CTA Tracking

```typescript
// Track all CTAs for analytics
interface CTAEvent {
  eventName: "cta_click";
  ctaType:
    | "apply"
    | "brochure"
    | "compare"
    | "save"
    | "contact"
    | "visit_website";
  collegeId: string;
  collegeName: string;
  courseId?: string;
  position: string; // 'card' | 'header' | 'sidebar' | 'sticky'
  pageType: "listing" | "detail" | "compare" | "home";
  userId?: string;
  sessionId: string;
  timestamp: Date;
}

// Analytics aggregation
const ctaAnalytics = {
  // Daily/Weekly/Monthly metrics
  totalClicks: number,
  uniqueUsers: number,
  conversionRate: number,

  // By CTA type
  byType: Record<string, number>,

  // By college
  byCollege: Record<string, number>,

  // By position
  byPosition: Record<string, number>,

  // Funnel analysis
  viewToClick: number,
  clickToLead: number,
  leadToConverted: number,
};
```

---

## 12. Implementation Roadmap

> **Updated in v2.0** — Roadmap revised to incorporate the 37 missing features identified in the [gap analysis](MISSING_FEATURES.md). Phase 1 now reflects that basic frontend scaffolding is already complete (25 routes with mock data).

### Phase 0: Current State (✅ Complete)

```markdown
Already Implemented:

- [x] Project setup (Next.js, TypeScript, Tailwind)
- [x] Design system & component library (~20 UI components)
- [x] Home page (7 of 15 sections)
- [x] College listing with filter sidebar
- [x] College detail page (7 sections: Overview, Courses, Placements, Cutoffs, Reviews, Gallery, Facilities)
- [x] Exam listing & detail pages
- [x] Course listing & detail pages
- [x] College predictor (landing + exam-specific)
- [x] Compare colleges page
- [x] Rankings listing
- [x] Reviews listing + Write Review
- [x] News listing & article detail
- [x] Study abroad (landing + country detail)
- [x] Auth pages (Login, Signup, Forgot Password) — forms only, non-functional
- [x] Dashboard, About, Contact, Careers, Advertise, Privacy, Terms
- [x] Global search
- [x] responsive design
- [x] Theme system (light/dark/system)

NOT implemented:
- Database, API, Authentication, Lead capture, SEO, Analytics, Admin panel
- All data is hardcoded mock data
```

### Phase 1: Revenue-Critical Features (Weeks 1-3)

```markdown
Week 1: Lead Capture & Monetization (Gap Items E-1, E-2, B-1)

- [ ] Apply Now modal with lead capture form
- [ ] Download Brochure gated flow with lead capture
- [ ] Need Counselling CTA in header
- [ ] Lead tracking infrastructure (even if localStorage/mock initially)

Week 2: SEO Foundation (Gap Items G-1, G-2, G-3, G-4, E-4)

- [ ] JSON-LD structured data component (Organization, BreadcrumbList,
      EducationalOrganization, Course, Review, FAQ, Article)
- [ ] Dynamic meta tags via generateMetadata() on all page routes
- [ ] Open Graph & Twitter Card meta tags
- [ ] sitemap.ts & robots.ts (Next.js conventions)
- [ ] Breadcrumb component (reusable, with BreadcrumbList schema)
- [ ] FAQ section component with FAQ schema markup

Week 3: Footer & Navigation (Gap Items F-1, B-4)

- [ ] Comprehensive footer with 100+ SEO links (Top Colleges, Exams, etc.)
- [ ] Courses mega-menu in header navigation
- [ ] Course Finder nav link
```

### Phase 2: Homepage Completion (Weeks 4-5)

```markdown
Week 4: Missing Homepage Sections — Part 1 (Gap Items A-1, A-2, A-4, A-10)

- [ ] Explore Programs horizontal tab bar
- [ ] College Rankings multi-agency section
- [ ] Explore Courses tabbed section (Bachelors/Masters/Doctorate)
- [ ] Featured Colleges carousel upgrade (auto-scroll, logos)

Week 5: Missing Homepage Sections — Part 2 (Gap Items A-5, A-6, A-8, A-9)

- [ ] Top Study Places city chip nav
- [ ] Admission 2026 quick-access section
- [ ] Newsletter subscription form
- [ ] Find Colleges by Location grid
- [ ] CBSE Board Exam section (A-7, low priority, can defer)
```

### Phase 3: College Detail & New Pages (Weeks 6-8)

```markdown
Week 6: College Detail Missing Tabs (Gap Items C-1, C-2, C-3, C-4, C-5, C-6)

- [ ] Admission tab (criteria, dates, process, documents)
- [ ] Scholarship tab (scholarships per college)
- [ ] Hostel & Campus Life tab (rooms, fees, amenities, photos)
- [ ] Q&A / Discussion section
- [ ] Related News sidebar widget
- [ ] Distance Learning / Online Mode badges

Week 7: New Listing Pages (Gap Items D-2, D-3)

- [ ] Category-specific listings: /medical-colleges, /law-colleges,
      /arts-colleges, /commerce-colleges, /science-colleges,
      /design-colleges, /pharmacy-colleges
- [ ] City-specific listings: /bangalore-colleges, /delhi-colleges,
      /mumbai-colleges, etc. (dynamic route or top-20 static)

Week 8: New Tools & Pages (Gap Items D-1, D-4, D-5)

- [ ] Course Finder wizard (/course-finder)
- [ ] Board Exam pages (/board-exams, /board-exams/cbse-class-12)
- [ ] Admission guides (/courses/{slug}/admission-2026)
```

### Phase 4: UX & Backend Foundation (Weeks 9-12)

```markdown
Week 9-10: Functional UX (Gap Items E-3, E-5, E-6, B-2, B-3)

- [ ] Compare state persistence (Zustand + floating compare bar)
- [ ] Recently Viewed Colleges (localStorage widget)
- [ ] Notification system (bell icon + dropdown)
- [ ] City-based search scope in global search
- [ ] Write Review incentive banner

Week 11-12: Backend & Database Setup

- [ ] Database schema & Prisma setup (using models from Section 7)
- [ ] Authentication system (NextAuth.js v5)
- [ ] Core API endpoints (colleges, courses, exams, reviews)
- [ ] Search integration (Meilisearch)
- [ ] Replace all hardcoded mock data with API calls
```

### Phase 5: Admin, Analytics & Launch (Weeks 13-16)

```markdown
Week 13-14: Admin & Analytics

- [ ] Admin dashboard
- [ ] Lead management system
- [ ] Content management (colleges, courses, exams, news)
- [ ] Analytics integration (GA4, Mixpanel)
- [ ] Review moderation system

Week 15: Performance & Testing

- [ ] Performance optimization (Core Web Vitals targets)
- [ ] Load testing
- [ ] Security audit
- [ ] Bug fixes

Week 16: Launch Preparation

- [ ] Data migration / seeding (25,000+ colleges)
- [ ] Final testing
- [ ] Documentation
- [ ] Soft launch & monitoring
```

---

## 📎 Appendix

### A. File Structure

```
collegium/
├── apps/
│   ├── web/                    # Main website (Next.js)
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   ├── (main)/
│   │   │   ├── admin/
│   │   │   └── api/
│   │   ├── components/
│   │   ├── lib/
│   │   └── styles/
│   │
│   └── admin/                  # Admin panel (if separate)
│
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── database/               # Prisma schema & client
│   ├── api-client/             # API client library
│   ├── utils/                  # Shared utilities
│   └── config/                 # Shared configs
│
├── services/
│   ├── search/                 # Meilisearch service
│   ├── email/                  # Email service
│   └── analytics/              # Analytics service
│
└── infrastructure/
    ├── docker/
    ├── kubernetes/
    └── terraform/
```

### B. Environment Variables

```env
# Database
DATABASE_URL=postgresql://...
REDIS_URL=redis://...

# Search
MEILISEARCH_HOST=...
MEILISEARCH_KEY=...

# Auth
NEXTAUTH_SECRET=...
NEXTAUTH_URL=...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...

# Storage
CLOUDINARY_URL=...
AWS_S3_BUCKET=...

# Analytics
GOOGLE_ANALYTICS_ID=...
MIXPANEL_TOKEN=...

# Email
RESEND_API_KEY=...

# SMS
MSG91_AUTH_KEY=...

# Payment
RAZORPAY_KEY_ID=...
RAZORPAY_KEY_SECRET=...
```

---

**Document Prepared By:** Senior Product Designer + Full-Stack Architect  
**For:** Collegium Platform  
**Version:** 2.0  
**Last Updated:** February 2026

---

### Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial architecture document |
| 2.0 | Feb 2026 | Gap analysis against Collegedunia.com: added Section 1.4 (implementation status), updated Component Library (Section 5.1) with 20+ new planned components, revised Implementation Roadmap (Section 12) with Phase 0 baseline and reprioritized phases, added cross-references to [MISSING_FEATURES.md](MISSING_FEATURES.md) |

---

_This document serves as the complete blueprint for building the Collegium platform. All specifications are based on analysis of Collegedunia.com and tailored to Collegium brand guidelines. See [MISSING_FEATURES.md](MISSING_FEATURES.md) for the detailed feature gap analysis._
