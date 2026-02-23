# Collegium Platform — Missing Features & Gap Analysis

**Reference:** [Collegedunia.com](https://collegedunia.com/)
**Date:** February 2026
**Version:** 1.0
**Status:** Planning / Pre-Implementation

---

## Table of Contents

1. [Overview](#1-overview)
2. [Feature Gap Summary](#2-feature-gap-summary)
3. [A — Homepage Missing Sections](#a--homepage-missing-sections)
4. [B — Header & Navigation](#b--header--navigation)
5. [C — College Detail Enhancements](#c--college-detail-enhancements)
6. [D — New Pages & Tools](#d--new-pages--tools)
7. [E — Functional & UX Features](#e--functional--ux-features)
8. [F — Footer Enhancements](#f--footer-enhancements)
9. [G — SEO & Content Infrastructure](#g--seo--content-infrastructure)
10. [Implementation Priority Matrix](#8-implementation-priority-matrix)
11. [Current Codebase Inventory](#9-current-codebase-inventory)

---

## 1. Overview

This document captures every feature and UI element present on [Collegedunia.com](https://collegedunia.com/) that is **missing or incomplete** in the current Collegium codebase. The analysis was performed by auditing all ~98 source files (~19,243 lines of code) in the Collegium frontend repository and comparing the result against a full crawl of the Collegedunia homepage and its key inner pages.

### Current State Summary

| Metric | Value |
|--------|-------|
| Total source files | ~98 |
| Total lines of code | ~19,243 |
| Implemented pages | ~25 routes |
| Data layer | 100% hardcoded mock data |
| State management | Local `useState` only |
| Backend integration | None |

---

## 2. Feature Gap Summary

| Category | Missing Items | Priority Breakdown |
|----------|--------------|-------------------|
| **A.** Homepage Sections | 10 | 4 High · 4 Medium · 2 Low |
| **B.** Header & Navigation | 4 | 2 High · 1 Medium · 1 Low |
| **C.** College Detail | 6 | 3 High · 2 Medium · 1 Low |
| **D.** New Pages & Tools | 5 | 2 High · 2 Medium · 1 Low |
| **E.** Functional / UX | 6 | 3 High · 2 Medium · 1 Low |
| **F.** Footer | 2 | 1 High · 1 Low |
| **G.** SEO & Content | 4 | 3 High · 1 Medium |
| **Total** | **37** | **18 High · 12 Medium · 7 Low** |

---

## A — Homepage Missing Sections

These sections appear on the Collegedunia.com homepage but are absent from Collegium's current `app/page.tsx` and its home components.

### A-1. Explore Programs Section
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Horizontal scrollable pill/tab bar below the hero: _All, B.Tech, MBA, MBBS, M.Tech, B.Sc, BA, B.Com…_ |
| **What's Missing** | A `<ProgramSlider>` (or `<ExploreProgramsTabs>`) that lets users filter the homepage content by degree program. Currently `study-goal-grid.tsx` shows stream categories, but there is no program-level pill bar. |
| **Architecture Ref** | Section 3.1 — "EXPLORE PROGRAMS (Horizontal Scroll)" |
| **Suggested Component** | `components/home/explore-programs.tsx` |
| **Data Needed** | List of degree programs with college counts |

### A-2. College Ranking Section (Multi-Agency)
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | A tabbed ranking widget: _Collegedunia, NIRF, QS, THE, India Today…_ showing top-ranked colleges per agency |
| **What's Missing** | The homepage has no ranking section at all. `rankings-listing.tsx` exists on `/rankings` but is not surfaced on the homepage. |
| **Architecture Ref** | Section 3.1 — "RANKINGS SECTION" |
| **Suggested Component** | `components/home/rankings-section.tsx` |
| **Data Needed** | Top 5-10 colleges per ranking agency per year |

### A-3. Top Universities Carousel Enhancement
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Collegedunia shows "Top Universities & Colleges" as a full-width carousel with institution logos, tags, and a "View All" link |
| **What's Missing** | `featured-colleges.tsx` exists but renders a basic 3-column grid. Needs a true auto-scrolling carousel with logo-centric cards and branding. |
| **Architecture Ref** | Section 3.1 — "FEATURED COLLEGES CAROUSEL" |
| **Suggested Update** | Refactor `components/home/featured-colleges.tsx` to use a carousel (e.g., Embla / Swiper). |

### A-4. Course Finder Section
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Multi-level course explorer: _Bachelors → Masters → Doctorate → Diploma → Certificate_, each listing popular courses (B.Com, B.Ed, B.Sc…) with duration, avg fees, and college count |
| **What's Missing** | No course finder on the homepage. `/courses` page exists but is not represented on home. |
| **Architecture Ref** | Section 3.1 — "EXPLORE COURSES" |
| **Suggested Component** | `components/home/explore-courses.tsx` |
| **Data Needed** | Courses grouped by level, with avg fees, duration, college count |

### A-5. Top Study Places (City Nav)
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | A city chip bar: _Delhi NCR, Bangalore, Mumbai, Hyderabad, Chennai, Kolkata, Pune…_ linking to city-specific college listing pages |
| **What's Missing** | No city navigation on homepage. No `/bangalore-colleges` or similar city routes exist. |
| **Architecture Ref** | Section 3.1 — "TOP STUDY PLACES" |
| **Suggested Component** | `components/home/top-study-places.tsx` |
| **Data Needed** | Popular cities with college counts |
| **Depends On** | D-3 (City-specific listing pages) |

### A-6. Admission 2026 Section
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Quick-access pill chips for active admissions: _B.Ed Admission, MBA Admission, MBBS Admission, BA Admission…_ linking to course-specific admission guides |
| **What's Missing** | No admission section on homepage. No `/courses/mba/admission-2026` routes. |
| **Architecture Ref** | Section 3.1 — "ADMISSION 2026" |
| **Suggested Component** | `components/home/admission-section.tsx` |
| **Data Needed** | Active admission cycles with deadlines |

### A-7. CBSE Board Exam Section
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | Class 12 & Class 10 sections with links to Results, Syllabus, Date Sheet, Sample Papers |
| **What's Missing** | No board exam content at all. |
| **Architecture Ref** | Section 3.1 — "CBSE BOARD EXAMS SECTION" |
| **Suggested Component** | `components/home/board-exams.tsx` |
| **Route Needed** | `/board-exams`, `/board-exams/cbse-class-12`, etc. |

### A-8. Newsletter Subscribe Section
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Email + phone number subscription form near the footer |
| **What's Missing** | No newsletter/subscription anywhere on the site. |
| **Architecture Ref** | Section 3.1 — "NEWSLETTER SUBSCRIPTION" |
| **Suggested Component** | `components/home/newsletter-subscribe.tsx` |
| **Data Needed** | Email service integration (Resend / SendGrid) |

### A-9. Find Colleges by Location
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | A grid/list of states and cities with college counts, linking to location-filtered listings |
| **What's Missing** | No location-based college discovery on homepage. |
| **Suggested Component** | `components/home/colleges-by-location.tsx` |
| **Data Needed** | State/city list with aggregated college counts |

### A-10. Explore Courses Section (Detailed)
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Tabbed course explorer (Bachelors/Masters/Doctorate) showing course cards with duration, avg fees, number of colleges |
| **What's Missing** | Although `study-goal-grid.tsx` shows stream-level categories, there is no detailed course-level explorer with fee/duration data. |
| **Architecture Ref** | Section 3.1 — "EXPLORE COURSES" |
| **Suggested Component** | `components/home/explore-courses.tsx` (same as A-4) |

---

## B — Header & Navigation

### B-1. "Need Counselling?" CTA
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Prominent yellow button in Collegedunia's header: _"Need Counselling? Get Best College Recommendations"_ opening a lead capture modal |
| **What's Missing** | Header (`layout/header.tsx`) has no counselling CTA or lead capture entry point. |
| **Suggested Update** | Add a sticky CTA button in `components/layout/header.tsx` triggering a counselling modal. |
| **Revenue Impact** | This is a primary lead-generation touchpoint. |

### B-2. City-Based Search Scope
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Collegedunia search allows scoping by city before typing a query |
| **What's Missing** | `global-search.tsx` does keyword search only — no city scope, no faceted search. |
| **Suggested Update** | Add city dropdown/filter to `components/search/global-search.tsx`. |

### B-3. Write a Review Incentive Banner
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | Collegedunia prominently advertises _"Get ₹1000 Amazon Gift Card"_ for writing reviews |
| **What's Missing** | "Write Review" link exists in nav but no incentive banner or callout. |
| **Suggested Update** | Add an incentive callout near the Write Review link in header. |

### B-4. Course Finder Navigation Link
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Top nav includes a dedicated "Courses" mega-menu with sub-links to specific course pages |
| **What's Missing** | Header nav doesn't link to `/courses` or offer a courses mega-menu. The "Explore" dropdown doesn't include courses. |
| **Suggested Update** | Extend header navigation to include Courses with a mega-menu. |

---

## C — College Detail Enhancements

The current `college-detail-page.tsx` (~940 lines) implements 7 sections: Overview, Courses & Fees, Placements, Cutoffs, Reviews, Gallery, Facilities. The following tabs/sections are missing compared to Collegedunia:

### C-1. Admission Tab
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Dedicated tab with: admission highlights table (course-wise), eligibility criteria, selection process, important dates calendar, application process steps, required documents, reservation policy |
| **What's Missing** | No admission tab. No admission data in the college detail page at all. |
| **Architecture Ref** | Section 3.3 — "Tab 3: Admission" |
| **Suggested Component** | Add Admission section to `components/college-detail/college-detail-page.tsx` |
| **Data Needed** | Course-wise admission criteria, dates, documents, reservation |

### C-2. Scholarship Tab
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Scholarship information: name, provider, amount, eligibility, application process, deadlines |
| **What's Missing** | No scholarship section. Architecture plans for it, Prisma schema includes `Scholarship` model. |
| **Architecture Ref** | College Detail Tab — "Scholarship" |
| **Data Needed** | Scholarship records per college |

### C-3. Hostel & Campus Life Tab
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Hostel details: types (Boys/Girls), room types, capacity, fees, amenities, photos |
| **What's Missing** | "Facilities" section shows a basic icon grid with WiFi/Library/Sports/etc. but no detailed hostel info. Prisma schema includes `Hostel` model. |
| **Architecture Ref** | College Detail Tab — "Hostel" |
| **Data Needed** | Hostel records with amenities, fees, room configs, photos |

### C-4. Q&A / Discussion Section
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | User-submitted questions and expert answers on each college page. Collegedunia shows _"Questions & Answers (1234)"_ tab. |
| **What's Missing** | No Q&A system at all. No Prisma model for questions. |
| **Architecture Ref** | College Detail Tab — "Q&A" |
| **New Component** | `components/college-detail/qa-section.tsx` |
| **Data Needed** | Questions, answers, upvotes, tags. Requires new DB model. |

### C-5. Related News Widget (Sidebar)
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Sidebar widget showing latest news/updates specific to the college |
| **What's Missing** | Sidebar has inquiry form, contact info, and similar colleges — but no news widget. News pages exist (`/news`) but aren't connected to college detail. |
| **Architecture Ref** | Section 3.3 — Sidebar "News: Latest updates" |
| **Suggested Update** | Add news widget to college detail sidebar |

### C-6. Distance Learning / Online Mode Indicator
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | Collegedunia flags colleges offering distance/online courses prominently |
| **What's Missing** | No distance/online mode indicators on college detail or listing pages. Course mode exists in architecture (`CourseMode` enum) but not surfaced in UI. |
| **Suggested Update** | Add course mode badges to college cards and detail page |

---

## D — New Pages & Tools

### D-1. Course Finder Tool (`/course-finder`)
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Dedicated interactive tool: _"What course should I study?"_ — multi-step wizard with stream → interest → budget → city flow |
| **What's Missing** | `/courses` page exists with a basic listing but no interactive finder/wizard. |
| **Architecture Ref** | URL strategy includes `/courses` but no finder flow |
| **Suggested Route** | `/course-finder` |
| **Suggested Component** | `components/course-finder/course-finder-wizard.tsx` |

### D-2. Category-Specific College Listings
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Collegedunia has separate SEO-optimized listing pages: `/medical-colleges`, `/law-colleges`, `/arts-colleges`, `/commerce-colleges`, `/science-colleges`, `/design-colleges`, `/pharmacy-colleges` |
| **What's Missing** | Only `/engineering-colleges` and `/mba-colleges` exist. All other stream-based listings are missing. |
| **Architecture Ref** | Section 2.2 — URL patterns show `/engineering-colleges`, `/mba-colleges`, etc. |
| **Routes Needed** | `/medical-colleges`, `/law-colleges`, `/arts-colleges`, `/commerce-colleges`, `/science-colleges`, `/design-colleges`, `/pharmacy-colleges` |
| **Implementation** | These can share the same `CollegeListing` component with different filter presets. |

### D-3. City-Specific College Listings
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Collegedunia has: `/bangalore-colleges`, `/delhi-colleges`, `/mumbai-colleges`, `/hyderabad-colleges`, etc. Also compound routes: `/mba/bangalore-colleges` |
| **What's Missing** | No city-specific listing routes at all. |
| **Architecture Ref** | Section 2.2 — URL patterns show `/{city}-colleges` and `/{course}/{city}-colleges` |
| **Routes Needed** | `/[city]-colleges` dynamic route or pre-generated routes for top 20 cities |

### D-4. Board Exam Pages
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | CBSE, ICSE, State Board pages with results, syllabus, date sheets, sample papers |
| **What's Missing** | No board exam pages exist. |
| **Architecture Ref** | Section 3.1 — "CBSE BOARD EXAMS SECTION" |
| **Routes Needed** | `/board-exams`, `/board-exams/cbse-class-12`, `/board-exams/cbse-class-10`, etc. |

### D-5. Admission Guides
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | Course-specific admission guides: _"MBA Admission 2026"_, _"B.Tech Admission 2026"_ |
| **What's Missing** | No admission guide pages. |
| **Routes Needed** | `/courses/{slug}/admission-2026` or `/admission/mba-2026` |

---

## E — Functional & UX Features

### E-1. Apply Now Lead Capture Modal
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Clicking "Apply Now" opens a lead capture form (name, email, phone, course interest) that sends data to the college |
| **What's Missing** | "Apply Now" buttons exist across the site but are non-functional — they don't open a modal or capture leads. This is the **primary revenue driver**. |
| **Architecture Ref** | Section 11.1 — Lead Generation; Section 7.2 — Lead model in Prisma schema |
| **Suggested Component** | `components/modals/apply-now-modal.tsx` |
| **Revenue Impact** | 🔴 Critical — this is the #1 monetization feature |

### E-2. Download Brochure Gated Flow
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | "Download Brochure" requires user to submit name + phone + email before downloading PDF |
| **What's Missing** | "Download Brochure" buttons exist but are non-functional dead links. |
| **Architecture Ref** | Section 11.1 — Lead Generation (Brochure downloads → CPL) |
| **Suggested Component** | `components/modals/brochure-download-modal.tsx` |
| **Revenue Impact** | 🔴 Critical — second-highest lead source |

### E-3. Compare State Persistence
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Collegedunia persists compare selections across page navigations with a floating compare bar |
| **What's Missing** | Compare page exists (`/compare`) but: (a) no floating compare bar, (b) selections don't persist across navigation, (c) no "Add to Compare" checkbox on college cards |
| **Suggested Implementation** | Use Zustand or Context for global compare state; add floating compare bar component |
| **Suggested Component** | `components/compare/floating-compare-bar.tsx` |

### E-4. Breadcrumbs on All Pages
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Collegedunia shows breadcrumbs on every page: _Home > Mumbai Colleges > IIT Bombay_ |
| **What's Missing** | No breadcrumb component exists anywhere in the codebase. |
| **Architecture Ref** | Section 3.2 — "BREADCRUMB: Home > Colleges > Engineering Colleges" |
| **Suggested Component** | `components/ui/breadcrumb.tsx` (reusable) |
| **SEO Impact** | Breadcrumbs improve SEO via `BreadcrumbList` structured data |

### E-5. Recently Viewed Colleges
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | Collegedunia shows "Recently Viewed" colleges in sidebar/footer |
| **What's Missing** | No recently viewed tracking. |
| **Suggested Implementation** | localStorage-based tracking with a sidebar widget |

### E-6. Notification System
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | Bell icon in header with notification dropdown (exam alerts, admission deadlines, saved college updates) |
| **What's Missing** | No notification system. Header has no notification bell. Dashboard page is a placeholder. |
| **Architecture Ref** | Section 2.1 — User Dashboard includes "Notifications" |
| **Suggested Component** | `components/layout/notification-bell.tsx` |

---

## F — Footer Enhancements

### F-1. Comprehensive Footer Links
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Collegedunia footer has 100+ organized links: Top Colleges (by stream), Top Universities, Top Exams, Study Abroad, Courses, Board Exams, city links, and social media |
| **What's Missing** | Current `footer.tsx` is minimal — has basic company links, quick links, and social icons but is missing the large SEO-rich link sections. |
| **Architecture Ref** | Section 3.1 — Footer layout |
| **SEO Impact** | Footer links are a major SEO signal for internal linking |
| **Suggested Update** | Expand `components/layout/footer.tsx` with multi-column link sections |

### F-2. App Download Links
| | |
|---|---|
| **Priority** | 🟢 Low |
| **Reference** | iOS App Store and Google Play Store download badges |
| **What's Missing** | No app download links (expected — app doesn't exist yet) |
| **Architecture Ref** | Footer includes _"Download App: [iOS] [Android]"_ |
| **Suggested Update** | Add placeholder badges when app is ready |

---

## G — SEO & Content Infrastructure

### G-1. Structured Data (JSON-LD)
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Collegedunia includes JSON-LD structured data on every page: Organization, BreadcrumbList, EducationalOrganization, Course, Review, FAQ, Article, Event |
| **What's Missing** | Zero structured data markup in the entire codebase. No JSON-LD anywhere. |
| **Architecture Ref** | Section 9.2 — "Structured Data (JSON-LD)" checklist |
| **Suggested Component** | `components/seo/structured-data.tsx` |
| **SEO Impact** | 🔴 Critical for search engine rich results |

### G-2. Dynamic Meta Tags
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Unique `<title>`, `<meta description>`, Open Graph, and Twitter Card tags on every page |
| **What's Missing** | Only `app/layout.tsx` sets a global title/description. Individual pages don't set unique meta tags. No Open Graph or Twitter Card tags. |
| **Architecture Ref** | Section 9.2 — "Meta Tags" checklist |
| **Implementation** | Use Next.js `metadata` exports or `generateMetadata()` in each page route |
| **SEO Impact** | 🔴 Critical for search rankings and social sharing |

### G-3. Sitemap & robots.txt
| | |
|---|---|
| **Priority** | 🔴 High |
| **Reference** | Collegedunia has a comprehensive XML sitemap index with per-entity sitemaps |
| **What's Missing** | No `sitemap.xml` or `robots.txt` in the project. |
| **Architecture Ref** | Section 9.4 — Sitemap Strategy |
| **Implementation** | Use Next.js `app/sitemap.ts` and `app/robots.ts` conventions |

### G-4. FAQ Schema on Listing Pages
| | |
|---|---|
| **Priority** | 🟡 Medium |
| **Reference** | FAQ sections with expandable answers on listing pages, marked up with FAQ schema for Google rich results |
| **What's Missing** | Some pages have basic FAQ accordions but no schema markup, and most listing pages lack FAQ sections entirely. |
| **Suggested Component** | `components/seo/faq-section.tsx` with built-in JSON-LD |

---

## 8. Implementation Priority Matrix

### 🔴 Critical (Must-Have for MVP Parity) — 18 items

| # | Feature | Category | Revenue Impact | SEO Impact | Effort |
|---|---------|----------|---------------|------------|--------|
| 1 | Apply Now Lead Capture Modal | E-1 | 🔴 Critical | — | Medium |
| 2 | Download Brochure Gated Flow | E-2 | 🔴 Critical | — | Medium |
| 3 | Need Counselling CTA | B-1 | 🔴 High | — | Low |
| 4 | Structured Data (JSON-LD) | G-1 | — | 🔴 Critical | Medium |
| 5 | Dynamic Meta Tags | G-2 | — | 🔴 Critical | Medium |
| 6 | Sitemap & robots.txt | G-3 | — | 🔴 Critical | Low |
| 7 | Comprehensive Footer Links | F-1 | — | 🔴 High | Low |
| 8 | Explore Programs Section | A-1 | — | 🟡 Medium | Low |
| 9 | College Ranking Section | A-2 | — | 🟡 Medium | Medium |
| 10 | Course Finder / Explorer | A-4/A-10 | — | 🔴 High | Medium |
| 11 | Course Finder Nav Link | B-4 | — | 🟡 Medium | Low |
| 12 | Admission Tab | C-1 | 🟡 Medium | 🟡 Medium | Medium |
| 13 | Q&A Section | C-4 | — | 🔴 High | High |
| 14 | Related News Widget | C-5 | — | 🟡 Medium | Low |
| 15 | Course Finder Tool | D-1 | 🟡 Medium | 🔴 High | High |
| 16 | Category Listings | D-2 | — | 🔴 High | Low |
| 17 | Breadcrumbs | E-4 | — | 🟡 Medium | Low |
| 18 | Notification System | E-6 | — | — | Medium |

### 🟡 Medium (Important for Feature Completeness) — 12 items

| # | Feature | Category | Effort |
|---|---------|----------|--------|
| 1 | Top Universities Carousel | A-3 | Low |
| 2 | Top Study Places | A-5 | Low |
| 3 | Admission 2026 Section | A-6 | Low |
| 4 | Newsletter Subscribe | A-8 | Medium |
| 5 | City-Based Search | B-2 | Medium |
| 6 | Scholarship Tab | C-2 | Medium |
| 7 | Hostel & Campus Tab | C-3 | Medium |
| 8 | City-Specific Listings | D-3 | Medium |
| 9 | Board Exam Pages | D-4 | High |
| 10 | Compare State Persistence | E-3 | Medium |
| 11 | Notification System | E-6 | Medium |
| 12 | FAQ Schema | G-4 | Low |

### 🟢 Low (Nice-to-Have / Future Phase) — 7 items

| # | Feature | Category | Effort |
|---|---------|----------|--------|
| 1 | CBSE Board Exam Section | A-7 | Medium |
| 2 | Colleges by Location | A-9 | Low |
| 3 | Write Review Incentive | B-3 | Low |
| 4 | Distance Learning Indicator | C-6 | Low |
| 5 | Admission Guides | D-5 | Medium |
| 6 | Recently Viewed | E-5 | Low |
| 7 | App Download Links | F-2 | Low |

---

## 9. Current Codebase Inventory

For reference, below is what already exists and is functional in the Collegium codebase:

### Implemented Pages (Routes)
- `/` — Homepage (hero, study goals, top colleges table, featured colleges, exams, predictor CTA, study abroad)
- `/colleges` — College listing with filter sidebar
- `/engineering-colleges` — Engineering college listing
- `/mba-colleges` — MBA college listing
- `/college/[slug]` — College detail (Overview, Courses, Placements, Cutoffs, Reviews, Gallery, Facilities)
- `/courses` — Course listing
- `/courses/[slug]` — Course detail
- `/exams` — Exam listing
- `/exams/[slug]` — Exam detail
- `/compare` — Compare colleges
- `/rankings` — Rankings listing
- `/reviews` — Reviews listing
- `/write-review` — Write review form
- `/college-predictor` — Predictor landing
- `/college-predictor/[exam]` — Exam-specific predictor
- `/news` — News listing
- `/news/[slug]` — News article detail
- `/study-abroad` — Study abroad landing
- `/study-abroad/[country]` — Country detail
- `/login`, `/signup`, `/forgot-password` — Auth pages
- `/dashboard` — User dashboard (placeholder)
- `/about`, `/contact`, `/careers`, `/advertise` — Static pages
- `/privacy-policy`, `/terms-conditions` — Legal pages

### Implemented Components
- **Layout:** Header (with nav, search, auth), Footer (basic)
- **Home:** HeroSearch, StudyGoalGrid, TopCollegesTable, FeaturedColleges, TopExams, CollegePredictorCTA, StudyAbroad
- **Colleges:** CollegeCard, CollegeListing, FilterSidebar
- **College Detail:** Full detail page (7 sections), sidebar with inquiry form
- **Courses:** CoursesListing, CourseDetailPage
- **Exams:** ExamDetailPage
- **Compare:** CompareColleges
- **Rankings:** RankingsListing
- **Reviews:** ReviewsListing, WriteReviewForm
- **News:** NewsListing, NewsArticleDetail
- **Study Abroad:** StudyAbroadLanding, CountryDetailPage
- **Auth:** LoginPage, SignupPage, ForgotPasswordPage
- **Search:** GlobalSearch
- **Filters:** AdvancedFilters
- **UI Kit:** Button, Badge, Card, Tabs, Input, Select, Avatar, ThemeToggle, Dialog, Dropdown, Separator, Label, Textarea, Checkbox, Progress, ScrollArea, Sheet, Slider, Switch, Tooltip

### What's NOT Implemented
- No backend / API integration
- No database
- No authentication (forms exist but are non-functional)
- No state management (no Zustand, no Context for global state)
- No lead capture (Apply Now, Brochure — all buttons are dead)
- No SEO markup (no JSON-LD, no unique meta tags, no sitemap)
- No analytics integration
- No notification system
- No admin panel

---

**Document Prepared By:** Development Team
**For:** Collegium Platform
**Version:** 1.0
**Last Updated:** February 2026

_This document should be updated as features are implemented. Mark items as ✅ when completed._
