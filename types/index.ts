// ============================================
// COLLEGIUM TYPE DEFINITIONS
// ============================================

// ========== COMMON TYPES ==========

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: PaginationMeta;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// ========== LOCATION TYPES ==========

export interface Location {
  address?: string;
  city: string;
  state: string;
  country: string;
  pincode?: string;
  latitude?: number;
  longitude?: number;
}

// ========== COLLEGE TYPES ==========

export type CollegeType =
  | "GOVERNMENT"
  | "PRIVATE"
  | "DEEMED"
  | "AUTONOMOUS"
  | "PUBLIC_PRIVATE";

export type CollegeStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "PENDING_REVIEW"
  | "ARCHIVED";

export interface Approval {
  authority: string;
  approvalNo?: string;
  validFrom?: string;
  validTo?: string;
}

export interface Accreditation {
  agency: string;
  grade: string;
  score?: number;
  validFrom?: string;
  validTo?: string;
}

export interface Facility {
  name: string;
  available: boolean;
  details?: string;
}

export interface CollegeRanking {
  agency: string;
  year: number;
  rank: number;
  totalRanked?: number;
  category?: string;
  score?: number;
}

export interface CollegeFees {
  course: string;
  amount: number;
  type: "total" | "yearly" | "semester";
  currency?: string;
}

export interface PlacementStats {
  year: number;
  studentsPlaced?: number;
  totalStudents?: number;
  placementRate?: number;
  averagePackage?: number;
  medianPackage?: number;
  highestPackage?: number;
  lowestPackage?: number;
  topRecruiters?: string[];
  sectorWise?: Record<string, number>;
}

export interface College extends BaseEntity {
  slug: string;
  name: string;
  shortName?: string;
  description?: string;
  establishedYear?: number;
  type: CollegeType;
  status: CollegeStatus;
  location: Location;
  email?: string;
  phone?: string;
  website?: string;
  logo?: string;
  coverImage?: string;
  gallery?: string[];
  virtualTourUrl?: string;
  cdScore?: number;
  isVerified: boolean;
  isFeatured: boolean;
  isSponsored: boolean;
  approvals: Approval[];
  accreditations: Accreditation[];
  facilities: Facility[];
  rankings: CollegeRanking[];
  reviewStats?: ReviewStats;
  metaTitle?: string;
  metaDescription?: string;
}

export interface CollegeCard {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  logo?: string;
  location: {
    city: string;
    state: string;
  };
  type: CollegeType;
  cdScore?: number;
  rating?: number;
  reviewCount?: number;
  approvals: string[];
  accreditation?: string;
  rankings: Array<{
    agency: string;
    rank: number;
    year: number;
  }>;
  fees?: {
    course: string;
    amount: number;
    type: "total" | "yearly" | "semester";
  };
  placement?: {
    average?: number;
    highest?: number;
    percentage?: number;
  };
  coursesCount?: number;
  isVerified: boolean;
  isFeatured: boolean;
  isSponsored: boolean;
}

// ========== COURSE TYPES ==========

export type CourseLevel =
  | "DIPLOMA"
  | "CERTIFICATE"
  | "BACHELORS"
  | "MASTERS"
  | "DOCTORATE"
  | "INTEGRATED"
  | "EXECUTIVE";

export type CourseMode =
  | "FULL_TIME"
  | "PART_TIME"
  | "DISTANCE"
  | "ONLINE"
  | "HYBRID";

export interface Course extends BaseEntity {
  slug: string;
  name: string;
  fullName: string;
  shortName?: string;
  description?: string;
  level: CourseLevel;
  stream: string;
  subStream?: string;
  durationYears: number;
  durationMonths?: number;
  mode: CourseMode;
  eligibility?: string;
  careerProspects?: string;
  syllabus?: SyllabusSemester[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface SyllabusSemester {
  semester: number;
  subjects: string[];
}

export interface CollegeCourse {
  id: string;
  collegeId: string;
  courseId: string;
  course: Course;
  specialization?: string;
  intake?: number;
  fees?: {
    total?: number;
    yearly?: number;
    semester?: number;
    hostel?: number;
  };
  feesCurrency: string;
  eligibilityCriteria?: string;
  minimumPercentage?: number;
  admissionProcess?: string;
  entranceExams: string[];
  applicationStart?: string;
  applicationEnd?: string;
  isActive: boolean;
  academicYear?: string;
}

// ========== EXAM TYPES ==========

export type ExamLevel = "NATIONAL" | "STATE" | "UNIVERSITY" | "INSTITUTE";

export type ExamMode = "ONLINE" | "OFFLINE" | "HYBRID";

export interface ExamDate {
  event: string;
  date: string;
  description?: string;
}

export interface ExamPattern {
  totalMarks: number;
  totalQuestions: number;
  duration: number; // in minutes
  sections?: ExamSection[];
  markingScheme?: {
    correct: number;
    incorrect: number;
    unattempted: number;
  };
}

export interface ExamSection {
  name: string;
  questions: number;
  marks: number;
  duration?: number;
}

export interface Exam extends BaseEntity {
  slug: string;
  name: string;
  fullName: string;
  description?: string;
  conductingBody: string;
  level: ExamLevel;
  mode: ExamMode;
  frequency?: string;
  officialWebsite?: string;
  registrationUrl?: string;
  eligibility?: string;
  examPattern?: ExamPattern;
  syllabus?: Record<string, string[]>;
  importantDates?: ExamDate[];
  feeStructure?: Record<string, number>;
  metaTitle?: string;
  metaDescription?: string;
}

// ========== CUTOFF TYPES ==========

export interface Cutoff {
  id: string;
  collegeCourseId?: string;
  examId?: string;
  year: number;
  round?: string;
  category: string;
  gender?: string;
  state?: string;
  rank?: number;
  percentile?: number;
  marks?: number;
}

// ========== REVIEW TYPES ==========

export type ReviewStatus = "PENDING" | "APPROVED" | "REJECTED" | "FLAGGED";

export interface ReviewRatings {
  overall: number;
  academic?: number;
  faculty?: number;
  infrastructure?: number;
  placement?: number;
  socialLife?: number;
  valueForMoney?: number;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingDistribution: Record<number, number>;
  categoryRatings?: {
    academic?: number;
    faculty?: number;
    infrastructure?: number;
    placement?: number;
    socialLife?: number;
  };
}

export interface ReviewAuthor {
  id: string;
  name: string;
  avatar?: string;
  course?: string;
  graduationYear?: number;
  isVerified: boolean;
}

export interface Review extends BaseEntity {
  collegeId: string;
  userId: string;
  author: ReviewAuthor;
  courseId?: string;
  courseName?: string;
  graduationYear?: number;
  ratings: ReviewRatings;
  title?: string;
  content: string;
  likes: string[];
  dislikes: string[];
  photos?: string[];
  helpfulCount: number;
  status: ReviewStatus;
  isVerified: boolean;
  replies?: ReviewReply[];
}

export interface ReviewReply extends BaseEntity {
  reviewId: string;
  userId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  isOfficial: boolean;
}

// ========== USER TYPES ==========

export type UserRole =
  | "STUDENT"
  | "PARENT"
  | "COLLEGE_ADMIN"
  | "CONTENT_ADMIN"
  | "SUPER_ADMIN";

export interface User extends BaseEntity {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  currentEducation?: string;
  graduationYear?: number;
  interestedStreams: string[];
  preferredCities: string[];
  emailVerified: boolean;
  phoneVerified: boolean;
  role: UserRole;
}

// ========== LEAD TYPES ==========

export type LeadType =
  | "APPLY_NOW"
  | "BROCHURE_DOWNLOAD"
  | "CONTACT_REQUEST"
  | "CALLBACK_REQUEST"
  | "ENQUIRY";

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "CONVERTED"
  | "LOST";

export interface Lead extends BaseEntity {
  collegeId: string;
  userId?: string;
  name: string;
  email: string;
  phone: string;
  courseId?: string;
  source: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  type: LeadType;
  status: LeadStatus;
  notes?: string;
}

// ========== NEWS TYPES ==========

export type NewsCategory =
  | "EXAM_ALERT"
  | "COLLEGE_ALERT"
  | "ADMISSION_NEWS"
  | "RESULT_NEWS"
  | "EDUCATION_NEWS"
  | "CAREER_GUIDANCE";

export type ContentStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface News extends BaseEntity {
  slug: string;
  title: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  category: NewsCategory;
  tags: string[];
  collegeId?: string;
  examId?: string;
  authorId?: string;
  authorName?: string;
  status: ContentStatus;
  publishedAt?: string;
  viewCount: number;
  metaTitle?: string;
  metaDescription?: string;
}

// ========== RANKING TYPES ==========

export interface RankingAgency {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
  website?: string;
  description?: string;
}

export interface RankingEntry {
  rank: number;
  college: CollegeCard;
  score?: number;
  change?: number; // compared to previous year
}

export interface RankingList {
  agency: RankingAgency;
  year: number;
  category?: string;
  entries: RankingEntry[];
  totalRanked: number;
}

// ========== COMPARISON TYPES ==========

export interface ComparisonItem {
  college: CollegeCard;
  courses?: CollegeCourse[];
  placements?: PlacementStats;
  rankings: CollegeRanking[];
  facilities: Facility[];
  reviewStats?: ReviewStats;
}

// ========== PREDICTOR TYPES ==========

export interface PredictorInput {
  examId: string;
  score?: number;
  percentile?: number;
  rank?: number;
  category: string;
  gender: string;
  state?: string;
  homeState?: string;
}

export interface PredictionResult {
  college: CollegeCard;
  course: string;
  probability: "high" | "medium" | "low";
  previousCutoff?: number;
  expectedCutoff?: number;
  message?: string;
}

// ========== SEARCH TYPES ==========

export interface SearchResult {
  type: "college" | "course" | "exam" | "news";
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  image?: string;
  url: string;
}

export interface SearchSuggestion {
  type: "college" | "course" | "exam" | "city" | "stream";
  text: string;
  url: string;
  count?: number;
}

// ========== FILTER TYPES ==========

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface FilterConfig {
  key: string;
  label: string;
  type: "checkbox" | "radio" | "range" | "select";
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  multiSelect?: boolean;
}

export interface ActiveFilters {
  streams?: string[];
  cities?: string[];
  states?: string[];
  degrees?: string[];
  collegeTypes?: string[];
  examAccepted?: string[];
  feeMin?: number;
  feeMax?: number;
  ratingMin?: number;
  rankingAgency?: string;
  accreditation?: string[];
  courseDuration?: string[];
  courseMode?: string[];
}

// ========== NAVIGATION TYPES ==========

export interface NavItem {
  label: string;
  href?: string;
  icon?: string;
  children?: NavItem[];
  badge?: string;
  isNew?: boolean;
}

export interface Breadcrumb {
  label: string;
  href?: string;
}

// ========== COMPONENT PROP TYPES ==========

export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
export type ColorScheme =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";
