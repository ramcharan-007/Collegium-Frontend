"use client";

import * as React from "react";
import Link from "next/link";
import {
  Star,
  MapPin,
  Award,
  Download,
  Share2,
  Heart,
  Check,
  Building2,
  GraduationCap,
  Users,
  Calendar,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Play,
  Briefcase,
  IndianRupee,
  TrendingUp,
  BarChart3,
  BookOpen,
  Camera,
  MessageSquare,
  ChevronUp,
  ThumbsUp,
  Quote,
} from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";
import { Button, Badge, Card, CardContent } from "@/components/ui";
import { ApplyNowModal, BrochureDownloadModal } from "@/components/modals";

// Mock data for college detail
const collegeData = {
  id: "1",
  slug: "iit-bombay",
  name: "Indian Institute of Technology Bombay",
  shortName: "IIT Bombay",
  tagline: "Where Innovation Meets Excellence",
  logo: "/colleges/iit-bombay-logo.png",
  coverImage:
    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",
  galleryImages: [
    "https://images.unsplash.com/photo-1562774053-701939374585?w=600",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600",
    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600",
  ],
  city: "Mumbai",
  state: "Maharashtra",
  address: "Powai, Mumbai, Maharashtra 400076",
  establishedYear: 1958,
  type: "Government",
  website: "https://www.iitb.ac.in",
  email: "admissions@iitb.ac.in",
  phone: "+91-22-2576-7001",
  rating: 4.5,
  reviewCount: 403,
  cdScore: 9.2,
  rankings: [
    { agency: "NIRF", rank: 3, year: 2024, category: "Engineering" },
    { agency: "QS World", rank: 149, year: 2024, category: "Overall" },
    { agency: "THE World", rank: 251, year: 2024, category: "Overall" },
  ],
  approvals: ["AICTE", "UGC", "MHRD"],
  accreditations: [
    { agency: "NAAC", grade: "A++", score: 3.67 },
    { agency: "NBA", grade: "Accredited", score: null },
  ],
  highlights: [
    { label: "Established", value: "1958", icon: Calendar },
    { label: "Type", value: "Government", icon: Building2 },
    { label: "Campus Size", value: "550 Acres", icon: MapPin },
    { label: "Total Students", value: "16,000+", icon: Users },
    { label: "Faculty", value: "680+", icon: GraduationCap },
    { label: "Courses Offered", value: "147", icon: BookOpen },
  ],
  fees: {
    btech: { amount: 882500, duration: "4 Years" },
    mtech: { amount: 235000, duration: "2 Years" },
    phd: { amount: 50000, duration: "5 Years" },
    mba: { amount: 1500000, duration: "2 Years" },
  },
  placement: {
    year: 2024,
    studentsPlaced: 1450,
    totalStudents: 1520,
    placementRate: 95.4,
    averagePackage: 2350000,
    medianPackage: 2100000,
    highestPackage: 10000000,
    topRecruiters: [
      "Google",
      "Microsoft",
      "Amazon",
      "Goldman Sachs",
      "McKinsey",
      "BCG",
      "Apple",
      "Meta",
      "Uber",
      "Adobe",
      "Flipkart",
      "Morgan Stanley",
    ],
  },
  courses: [
    {
      name: "B.Tech",
      specializations: [
        "Computer Science",
        "Electrical Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Aerospace Engineering",
      ],
      fees: 882500,
      duration: "4 Years",
      seats: 1200,
      eligibility: "JEE Advanced",
    },
    {
      name: "M.Tech",
      specializations: [
        "AI & ML",
        "Data Science",
        "VLSI Design",
        "Structural Engineering",
      ],
      fees: 235000,
      duration: "2 Years",
      seats: 1800,
      eligibility: "GATE",
    },
    {
      name: "PhD",
      specializations: ["Research Programs across all departments"],
      fees: 50000,
      duration: "3-5 Years",
      seats: 400,
      eligibility: "GATE/NET + Interview",
    },
    {
      name: "MBA",
      specializations: ["Finance", "Marketing", "Operations"],
      fees: 1500000,
      duration: "2 Years",
      seats: 120,
      eligibility: "CAT",
    },
    {
      name: "M.Sc",
      specializations: ["Physics", "Chemistry", "Mathematics", "Biology"],
      fees: 25000,
      duration: "2 Years",
      seats: 200,
      eligibility: "JAM",
    },
  ],
  cutoffs: [
    {
      course: "B.Tech Computer Science",
      exam: "JEE Advanced 2024",
      general: 68,
      obc: 45,
      sc: 18,
      st: 8,
    },
    {
      course: "B.Tech Electrical Engineering",
      exam: "JEE Advanced 2024",
      general: 285,
      obc: 180,
      sc: 65,
      st: 28,
    },
    {
      course: "B.Tech Mechanical Engineering",
      exam: "JEE Advanced 2024",
      general: 520,
      obc: 350,
      sc: 120,
      st: 55,
    },
    {
      course: "B.Tech Civil Engineering",
      exam: "JEE Advanced 2024",
      general: 1250,
      obc: 850,
      sc: 320,
      st: 145,
    },
  ],
  reviews: [
    {
      id: "1",
      author: "Rahul Sharma",
      course: "B.Tech CSE",
      batch: "2020-2024",
      rating: 5,
      title: "Best decision of my life",
      content:
        "IIT Bombay has transformed my career. The faculty, infrastructure, and peer group are exceptional. The placement opportunities are unmatched.",
      helpful: 234,
      date: "2024-12-15",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      id: "2",
      author: "Priya Patel",
      course: "M.Tech AI",
      batch: "2022-2024",
      rating: 4.5,
      title: "Excellent research opportunities",
      content:
        "The research culture here is amazing. Professors are very supportive and the labs are well-equipped. Highly recommend for anyone interested in research.",
      helpful: 156,
      date: "2024-11-20",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      id: "3",
      author: "Amit Kumar",
      course: "B.Tech EE",
      batch: "2019-2023",
      rating: 4.8,
      title: "World-class education",
      content:
        "The curriculum is rigorous but rewarding. Campus life is vibrant with numerous clubs and festivals. Placements are excellent with top companies visiting.",
      helpful: 189,
      date: "2024-10-05",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ],
  facilities: [
    "Central Library",
    "Sports Complex",
    "Swimming Pool",
    "Gymnasium",
    "Medical Center",
    "Banks & ATMs",
    "Cafeterias",
    "Hostels",
    "WiFi Campus",
    "Research Labs",
    "Auditorium",
    "Convention Center",
  ],
  admission: {
    process: [
      { step: 1, title: "Register Online", description: "Create an account on the official IIT Bombay admission portal." },
      { step: 2, title: "Fill Application", description: "Complete the application form with academic details and upload documents." },
      { step: 3, title: "Appear for Entrance", description: "Take the required entrance exam (JEE Advanced / GATE / CAT / JAM)." },
      { step: 4, title: "Counselling", description: "Participate in JoSAA / CCMT / IIM counselling based on your rank." },
      { step: 5, title: "Seat Allotment", description: "Accept the allotted seat and pay the admission fee." },
      { step: 6, title: "Report to Campus", description: "Complete document verification and join the institute." },
    ],
    importantDates: [
      { event: "JEE Advanced Registration", date: "April 2025", status: "upcoming" },
      { event: "JEE Advanced Exam", date: "May 2025", status: "upcoming" },
      { event: "Results Declaration", date: "June 2025", status: "upcoming" },
      { event: "JoSAA Counselling", date: "June-July 2025", status: "upcoming" },
      { event: "Classes Begin", date: "August 2025", status: "upcoming" },
    ],
    eligibility: [
      { course: "B.Tech", criteria: "Passed 12th with PCM (75% aggregate or top 20 percentile). Qualified JEE Advanced." },
      { course: "M.Tech", criteria: "B.Tech/BE with minimum 60% marks. Valid GATE score." },
      { course: "MBA", criteria: "Bachelor's degree with minimum 60% marks. Valid CAT score." },
      { course: "PhD", criteria: "Master's degree with minimum 60% marks. Valid GATE/NET score + Interview." },
    ],
  },
  scholarships: [
    { name: "Merit-cum-Means Scholarship", amount: "Full tuition fee waiver", eligibility: "Family income < ₹5 LPA", deadline: "August 2025" },
    { name: "Institute Free Studentship", amount: "₹1,000/month + fee waiver", eligibility: "SC/ST students, family income < ₹5 LPA", deadline: "July 2025" },
    { name: "INSPIRE Fellowship", amount: "₹80,000/year", eligibility: "Top 1% in Class 12 board exams", deadline: "September 2025" },
    { name: "Aditya Birla Scholarship", amount: "₹65,000/year", eligibility: "Top performers in JEE Advanced", deadline: "October 2025" },
    { name: "KVPY Fellowship", amount: "₹5,000-7,000/month", eligibility: "KVPY qualified B.Sc/M.Sc students", deadline: "November 2025" },
    { name: "Teaching Assistantship (TA)", amount: "₹12,400/month", eligibility: "M.Tech/PhD students", deadline: "Ongoing" },
  ],
  hostel: {
    totalHostels: 18,
    boysHostels: 13,
    girlsHostels: 5,
    roomTypes: [
      { type: "Single Occupancy", fees: "₹25,000/year", available: true },
      { type: "Double Sharing", fees: "₹18,000/year", available: true },
      { type: "Triple Sharing", fees: "₹12,000/year", available: false },
    ],
    facilities: ["WiFi", "Mess/Canteen", "Laundry", "Common Room", "Gym", "Reading Room", "Medical Facility", "24/7 Security", "Hot Water", "Parking"],
    messCharges: "₹35,000/semester",
    messType: "Veg & Non-Veg options available",
  },
  qna: [
    { id: "q1", question: "What is the admission process for B.Tech at IIT Bombay?", answer: "Candidates must qualify JEE Advanced and participate in JoSAA counselling. Seat allotment is based on JEE Advanced rank and category.", author: "Admission Office", date: "2024-12-01", votes: 45 },
    { id: "q2", question: "What is the average placement package?", answer: "The average placement package for the 2024 batch was ₹23.5 LPA. The highest package went up to ₹1 Crore.", author: "Placement Cell", date: "2024-11-15", votes: 89 },
    { id: "q3", question: "Is hostel accommodation compulsory for first-year students?", answer: "Yes, hostel accommodation is compulsory for all first-year undergraduate students. Hostels are allotted on a lottery basis.", author: "Dean of Students", date: "2024-10-20", votes: 32 },
    { id: "q4", question: "Are there any scholarships available for economically weaker sections?", answer: "Yes, IIT Bombay offers Merit-cum-Means scholarships and Institute Free Studentship for students with family income below ₹5 LPA.", author: "Financial Aid Office", date: "2024-09-10", votes: 67 },
  ],
  relatedNews: [
    { id: "n1", title: "IIT Bombay Placements 2025: Average Package Crosses ₹25 LPA", date: "2025-01-15", category: "Placements" },
    { id: "n2", title: "JEE Advanced 2025: Registration Opens in April", date: "2025-01-10", category: "Admission" },
    { id: "n3", title: "IIT Bombay Launches New B.Tech Program in AI & Data Science", date: "2025-01-05", category: "Academics" },
    { id: "n4", title: "NIRF Rankings 2025: IIT Bombay Retains Top 3 Position", date: "2024-12-20", category: "Rankings" },
  ],
  hasDistanceLearning: false,
};

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "courses", label: "Courses & Fees" },
  { id: "admission", label: "Admission" },
  { id: "placements", label: "Placements" },
  { id: "cutoffs", label: "Cutoffs" },
  { id: "scholarships", label: "Scholarships" },
  { id: "hostel", label: "Hostel & Accommodation" },
  { id: "reviews", label: "Reviews" },
  { id: "qna", label: "Q&A" },
  { id: "gallery", label: "Gallery" },
  { id: "facilities", label: "Facilities" },
];

function StatCard({
  icon: Icon,
  label,
  value,
  subValue,
  className,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  subValue?: string;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow",
        highlight && "border-collegium-blue bg-blue-50/50",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center",
            highlight ? "bg-collegium-blue" : "bg-blue-50"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6",
              highlight ? "text-white" : "text-collegium-blue"
            )}
          />
        </div>
        <div>
          <div className="text-sm text-gray-500">{label}</div>
          <div className="text-xl font-bold text-gray-900">{value}</div>
          {subValue && (
            <div className="text-xs text-gray-400">{subValue}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export function CollegeDetailPage() {
  const [activeSection, setActiveSection] = React.useState("overview");
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isApplyModalOpen, setIsApplyModalOpen] = React.useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = React.useState(false);
  const [applyCourseName, setApplyCourseName] = React.useState<string | undefined>();

  // Handle scroll to update active section
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 h-[500px] md:h-[550px]">
          <img
            src={collegeData.coverImage}
            alt={collegeData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-collegium-blue via-collegium-blue/80 to-collegium-blue/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-white">
          <div className="container pt-8 pb-16 md:pb-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/colleges" className="hover:text-white">
                Colleges
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{collegeData.shortName}</span>
            </nav>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Logo */}
              <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl font-bold text-collegium-blue shrink-0">
                {collegeData.name.charAt(0)}
              </div>

              {/* College Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {collegeData.rankings.slice(0, 2).map((ranking) => (
                    <Badge
                      key={ranking.agency}
                      className="bg-collegium-yellow text-collegium-blue font-semibold"
                    >
                      #{ranking.rank} {ranking.agency}
                    </Badge>
                  ))}
                  <Badge className="bg-green-500 text-white">
                    <Check className="w-3.5 h-3.5 mr-1" /> Verified
                  </Badge>
                </div>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 leading-tight">
                  {collegeData.name}
                </h1>

                <p className="text-xl text-collegium-yellow mb-4 font-medium">
                  {collegeData.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>
                      {collegeData.city}, {collegeData.state}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span>Est. {collegeData.establishedYear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    <span>{collegeData.type}</span>
                  </div>
                </div>

                {/* Rating & Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">
                    <Star className="w-6 h-6 text-collegium-yellow fill-collegium-yellow" />
                    <span className="text-2xl font-bold">
                      {collegeData.rating}
                    </span>
                    <span className="text-white/70">/ 5</span>
                    <span className="text-white/70 ml-1">
                      ({collegeData.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="lg"
                      className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400 font-semibold"
                      onClick={() => setIsApplyModalOpen(true)}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/40 text-white hover:bg-white/10"
                      leftIcon={<Download className="w-4 h-4" />}
                      onClick={() => setIsBrochureModalOpen(true)}
                    >
                      Brochure
                    </Button>
                    <button className="p-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white border-b border-gray-200 py-6 -mt-8 relative z-20 rounded-t-3xl shadow-lg">
        <div className="container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-collegium-blue">
                {collegeData.cdScore}/10
              </div>
              <div className="text-sm text-gray-500">CD Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(collegeData.placement.averagePackage, {
                  notation: "compact",
                })}
              </div>
              <div className="text-sm text-gray-500">Avg. Package</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(collegeData.fees.btech.amount, {
                  notation: "compact",
                })}
              </div>
              <div className="text-sm text-gray-500">B.Tech Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {collegeData.placement.placementRate}%
              </div>
              <div className="text-sm text-gray-500">Placement Rate</div>
            </div>
            <div className="text-center hidden sm:block">
              <div className="text-2xl font-bold text-orange-600">
                {formatCurrency(collegeData.placement.highestPackage, {
                  notation: "compact",
                })}
              </div>
              <div className="text-sm text-gray-500">Highest Package</div>
            </div>
            <div className="text-center hidden lg:block">
              <div className="text-2xl font-bold text-gray-900">
                {collegeData.courses.length}
              </div>
              <div className="text-sm text-gray-500">Programs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navigation */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                  activeSection === item.id
                    ? "bg-collegium-blue text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="container py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-12">
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                About {collegeData.shortName}
              </h2>

              <Card className="mb-8">
                <CardContent className="p-6 md:p-8">
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    The Indian Institute of Technology Bombay (IIT Bombay) is a
                    public technical and research university located in Powai,
                    Mumbai, India. IIT Bombay was established in 1958 and is the
                    second-oldest IIT in India. The institute is recognized as
                    an Institute of National Importance by the Government of
                    India.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    IIT Bombay offers undergraduate, postgraduate, and doctoral
                    programs in various fields of engineering, pure sciences,
                    design, and humanities & social sciences. The institute has
                    been consistently ranked among the top engineering
                    institutes in India and Asia.
                  </p>
                </CardContent>
              </Card>

              {/* Key Highlights */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {collegeData.highlights.map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <div
                      key={highlight.label}
                      className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-collegium-blue" />
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {highlight.label}
                      </div>
                      <div className="text-xl font-bold text-gray-900">
                        {highlight.value}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rankings & Accreditations */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Rankings & Accreditations
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-collegium-yellow" />
                      Rankings
                    </h4>
                    <div className="space-y-3">
                      {collegeData.rankings.map((ranking) => (
                        <div
                          key={ranking.agency}
                          className="flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4"
                        >
                          <div>
                            <div className="font-semibold text-gray-900">
                              {ranking.agency}
                            </div>
                            <div className="text-sm text-gray-500">
                              {ranking.category} {ranking.year}
                            </div>
                          </div>
                          <div className="text-3xl font-bold text-collegium-blue">
                            #{ranking.rank}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      Accreditations
                    </h4>
                    <div className="space-y-3 mb-6">
                      {collegeData.accreditations.map((acc) => (
                        <div
                          key={acc.agency}
                          className="flex items-center justify-between bg-green-50 rounded-xl p-4"
                        >
                          <div>
                            <div className="font-semibold text-gray-900">
                              {acc.agency}
                            </div>
                            {acc.score && (
                              <div className="text-sm text-gray-500">
                                Score: {acc.score}
                              </div>
                            )}
                          </div>
                          <Badge className="bg-green-600 text-white">
                            {acc.grade}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Approvals
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {collegeData.approvals.map((approval) => (
                        <Badge
                          key={approval}
                          variant="outline"
                          className="text-sm"
                        >
                          {approval}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Courses & Fees Section */}
            <section id="courses" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                Courses & Fees
              </h2>

              <div className="space-y-4">
                {collegeData.courses.map((course) => (
                  <Card
                    key={course.name}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {course.name}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {course.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {course.seats} Seats
                            </span>
                            <span className="flex items-center gap-1">
                              <GraduationCap className="w-4 h-4" />
                              {course.eligibility}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-collegium-blue">
                            {formatCurrency(course.fees)}
                          </div>
                          <div className="text-sm text-gray-500">
                            Total Fees
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">
                          Specializations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.specializations.slice(0, 4).map((spec) => (
                            <Badge key={spec} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                          {course.specializations.length > 4 && (
                            <Badge variant="outline">
                              +{course.specializations.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm" onClick={() => { setApplyCourseName(course.name); setIsApplyModalOpen(true); }}>Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Admission Section */}
            <section id="admission" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                Admission Process
              </h2>

              {/* Admission Steps */}
              <Card className="mb-6">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">How to Apply</h3>
                  <div className="space-y-4">
                    {collegeData.admission.process.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="w-8 h-8 bg-collegium-blue text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Important Dates */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Important Dates</h3>
                  <div className="space-y-3">
                    {collegeData.admission.importantDates.map((item) => (
                      <div key={item.event} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                        <div className="font-medium text-gray-900">{item.event}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-600">{item.date}</span>
                          <Badge variant={item.status === "upcoming" ? "secondary" : "default"} className="text-xs capitalize">
                            {item.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Eligibility Criteria</h3>
                  <div className="space-y-3">
                    {collegeData.admission.eligibility.map((item) => (
                      <div key={item.course} className="bg-blue-50 rounded-xl p-4">
                        <div className="font-semibold text-collegium-blue mb-1">{item.course}</div>
                        <div className="text-sm text-gray-700">{item.criteria}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Placements Section */}
            <section id="placements" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                Placements {collegeData.placement.year}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard
                  icon={BarChart3}
                  label="Average Package"
                  value={formatCurrency(collegeData.placement.averagePackage)}
                  highlight
                />
                <StatCard
                  icon={TrendingUp}
                  label="Highest Package"
                  value={formatCurrency(collegeData.placement.highestPackage)}
                />
                <StatCard
                  icon={Users}
                  label="Students Placed"
                  value={collegeData.placement.studentsPlaced.toString()}
                  subValue={`of ${collegeData.placement.totalStudents}`}
                />
                <StatCard
                  icon={Briefcase}
                  label="Placement Rate"
                  value={`${collegeData.placement.placementRate}%`}
                />
              </div>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Top Recruiters
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {collegeData.placement.topRecruiters.map((recruiter) => (
                      <div
                        key={recruiter}
                        className="bg-gray-50 rounded-xl p-4 text-center font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        {recruiter}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Cutoffs Section */}
            <section id="cutoffs" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                Admission Cutoffs
              </h2>

              <Card>
                <CardContent className="p-0">
                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="text-left p-4 font-semibold text-gray-900">
                            Course
                          </th>
                          <th className="text-left p-4 font-semibold text-gray-900">
                            Exam
                          </th>
                          <th className="text-center p-4 font-semibold text-gray-900">
                            General
                          </th>
                          <th className="text-center p-4 font-semibold text-gray-900">
                            OBC
                          </th>
                          <th className="text-center p-4 font-semibold text-gray-900">
                            SC
                          </th>
                          <th className="text-center p-4 font-semibold text-gray-900">
                            ST
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {collegeData.cutoffs.map((cutoff, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="p-4 font-medium text-gray-900">
                              {cutoff.course}
                            </td>
                            <td className="p-4 text-gray-600">
                              {cutoff.exam}
                            </td>
                            <td className="p-4 text-center font-semibold text-collegium-blue">
                              {cutoff.general}
                            </td>
                            <td className="p-4 text-center text-gray-700">
                              {cutoff.obc}
                            </td>
                            <td className="p-4 text-center text-gray-700">
                              {cutoff.sc}
                            </td>
                            <td className="p-4 text-center text-gray-700">
                              {cutoff.st}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden divide-y">
                    {collegeData.cutoffs.map((cutoff, index) => (
                      <div key={index} className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {cutoff.course}
                        </h4>
                        <p className="text-sm text-gray-500 mb-3">
                          {cutoff.exam}
                        </p>
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="bg-blue-50 rounded-lg p-2">
                            <div className="font-bold text-collegium-blue">
                              {cutoff.general}
                            </div>
                            <div className="text-xs text-gray-500">
                              General
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="font-bold text-gray-700">
                              {cutoff.obc}
                            </div>
                            <div className="text-xs text-gray-500">OBC</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="font-bold text-gray-700">
                              {cutoff.sc}
                            </div>
                            <div className="text-xs text-gray-500">SC</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div className="font-bold text-gray-700">
                              {cutoff.st}
                            </div>
                            <div className="text-xs text-gray-500">ST</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Scholarships Section */}
            <section id="scholarships" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                Scholarships
              </h2>

              <div className="grid gap-4">
                {collegeData.scholarships.map((scholarship) => (
                  <Card key={scholarship.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{scholarship.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{scholarship.eligibility}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              Deadline: {scholarship.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{scholarship.amount}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Hostel & Accommodation Section */}
            <section id="hostel" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                Hostel & Accommodation
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Hostel Overview</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center bg-blue-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-collegium-blue">{collegeData.hostel.totalHostels}</div>
                        <div className="text-xs text-gray-500">Total Hostels</div>
                      </div>
                      <div className="text-center bg-blue-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-collegium-blue">{collegeData.hostel.boysHostels}</div>
                        <div className="text-xs text-gray-500">Boys Hostels</div>
                      </div>
                      <div className="text-center bg-pink-50 rounded-xl p-4">
                        <div className="text-2xl font-bold text-pink-600">{collegeData.hostel.girlsHostels}</div>
                        <div className="text-xs text-gray-500">Girls Hostels</div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600">Mess Charges: <strong>{collegeData.hostel.messCharges}</strong></div>
                      <div className="text-sm text-gray-600 mt-1">{collegeData.hostel.messType}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Room Types & Fees</h3>
                    <div className="space-y-3">
                      {collegeData.hostel.roomTypes.map((room) => (
                        <div key={room.type} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                          <div>
                            <div className="font-medium text-gray-900">{room.type}</div>
                            <div className="text-sm text-gray-500">{room.fees}</div>
                          </div>
                          <Badge variant={room.available ? "default" : "secondary"}>
                            {room.available ? "Available" : "Full"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Hostel Facilities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {collegeData.hostel.facilities.map((facility) => (
                      <div key={facility} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span className="text-sm text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="scroll-mt-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  Student Reviews
                </h2>
                <Link href="/write-review">
                  <Button>Write a Review</Button>
                </Link>
              </div>

              <div className="space-y-4">
                {collegeData.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <img
                          src={review.avatar}
                          alt={review.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {review.author}
                              </h4>
                              <p className="text-sm text-gray-500">
                                {review.course} • {review.batch}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full">
                              <Star className="w-4 h-4 text-green-600 fill-green-600" />
                              <span className="font-semibold text-green-700">
                                {review.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Quote className="w-4 h-4 text-gray-400" />
                        {review.title}
                      </h5>
                      <p className="text-gray-600 mb-4">{review.content}</p>

                      <div className="flex items-center justify-between text-sm">
                        <button className="flex items-center gap-2 text-gray-500 hover:text-collegium-blue transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful ({review.helpful})
                        </button>
                        <span className="text-gray-400">{review.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-6">
                <Button variant="outline">View All Reviews</Button>
              </div>
            </section>

            {/* Q&A Section */}
            <section id="qna" className="scroll-mt-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  Questions & Answers
                </h2>
                <Button variant="outline">Ask a Question</Button>
              </div>

              <div className="space-y-4">
                {collegeData.qna.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Q: {item.question}</h4>
                      <p className="text-gray-600 mb-3 pl-4 border-l-2 border-collegium-blue">{item.answer}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Answered by <strong>{item.author}</strong> &middot; {item.date}</span>
                        <button className="flex items-center gap-1 hover:text-collegium-blue transition-colors">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          {item.votes}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Related News */}
            <Card className="mt-12">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-collegium-blue" />
                  Latest News about {collegeData.shortName}
                </h3>
                <div className="space-y-3">
                  {collegeData.relatedNews.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 group-hover:text-collegium-blue transition-colors">{article.title}</div>
                        <div className="text-xs text-gray-500 mt-1">{article.date} &middot; {article.category}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-collegium-blue" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gallery Section */}
            <section id="gallery" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                Campus Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {collegeData.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative rounded-xl overflow-hidden group cursor-pointer",
                      index === 0 && "col-span-2 row-span-2"
                    )}
                  >
                    <img
                      src={image}
                      alt={`Campus ${index + 1}`}
                      className={cn(
                        "w-full object-cover group-hover:scale-110 transition-transform duration-500",
                        index === 0 ? "h-80" : "h-40"
                      )}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-collegium-blue rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                Campus Facilities
              </h2>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {collegeData.facilities.map((facility) => (
                      <div
                        key={facility}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                      >
                        <Check className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 shrink-0 space-y-6">
            {/* Quick Apply Card */}
            <Card className="sticky top-44">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Interested in {collegeData.shortName}?
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-collegium-blue/20 focus:border-collegium-blue transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-collegium-blue/20 focus:border-collegium-blue transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-collegium-blue/20 focus:border-collegium-blue transition-all"
                  />
                  <Button className="w-full">Get Expert Counselling</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${collegeData.phone}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-collegium-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-collegium-blue" />
                    </div>
                    <span>{collegeData.phone}</span>
                  </a>
                  <a
                    href={`mailto:${collegeData.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-collegium-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-collegium-blue" />
                    </div>
                    <span className="truncate">{collegeData.email}</span>
                  </a>
                  <a
                    href={collegeData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-collegium-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-collegium-blue" />
                    </div>
                    <span className="flex items-center gap-1">
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-collegium-blue" />
                    </div>
                    <span>{collegeData.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Colleges */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Similar Colleges
                </h3>
                <div className="space-y-3">
                  {[
                    "IIT Delhi",
                    "IIT Madras",
                    "IIT Kanpur",
                    "BITS Pilani",
                  ].map((college) => (
                    <Link
                      key={college}
                      href="#"
                      className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-gray-900">
                        {college}
                      </div>
                      <div className="text-sm text-collegium-blue">
                        View Details →
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-collegium-blue text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Modals */}
      <ApplyNowModal
        isOpen={isApplyModalOpen}
        onClose={() => { setIsApplyModalOpen(false); setApplyCourseName(undefined); }}
        collegeName={collegeData.name}
        courseName={applyCourseName}
      />
      <BrochureDownloadModal
        isOpen={isBrochureModalOpen}
        onClose={() => setIsBrochureModalOpen(false)}
        collegeName={collegeData.name}
      />
    </div>
  );
}
