"use client";"use client";



import * as React from "react";import * as React from "react";

import Link from "next/link";import Link from "next/link";

import {import {

  Star,  Star,

  MapPin,  MapPin,

  Award,  Award,

  Download,  Download,

  Share2,  Share2,

  Heart,  Heart,

  Check,  Check,

  Building2,  Building2,

  GraduationCap,  GraduationCap,

  Users,  Users,

  Calendar,  Calendar,

  Globe,  Globe,

  Phone,  Phone,

  Mail,  Mail,

  ExternalLink,  ExternalLink,

  ChevronRight,  ChevronRight,

  Play,  Play,

  Briefcase,  Briefcase,

  IndianRupee,  IndianRupee,

  TrendingUp,  TrendingUp,

  BarChart3,  BarChart3,

  BookOpen,} from "lucide-react";

  Camera,import { cn, formatCurrency } from "@/lib/utils";

  MessageSquare,import {

  ChevronUp,  Button,

  ThumbsUp,  Badge,

  Quote,  Tabs,

} from "lucide-react";  TabsListUnderline,

import { cn, formatCurrency } from "@/lib/utils";  TabsTriggerUnderline,

import { Button, Badge, Card, CardContent } from "@/components/ui";  TabsContent,

  Card,

// Mock data for college detail  CardContent,

const collegeData = {} from "@/components/ui";

  id: "1",

  slug: "iit-bombay",// Mock data for college detail

  name: "Indian Institute of Technology Bombay",const collegeData = {

  shortName: "IIT Bombay",  id: "1",

  tagline: "Where Innovation Meets Excellence",  slug: "iit-bombay",

  logo: "/colleges/iit-bombay-logo.png",  name: "Indian Institute of Technology Bombay",

  coverImage:  shortName: "IIT Bombay",

    "https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80",  tagline: "Where Innovation Meets Excellence",

  galleryImages: [  logo: "/colleges/iit-bombay-logo.png",

    "https://images.unsplash.com/photo-1562774053-701939374585?w=600",  coverImage: "/colleges/iit-bombay-cover.jpg",

    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",  city: "Mumbai",

    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600",  state: "Maharashtra",

    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600",  address: "Powai, Mumbai, Maharashtra 400076",

    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600",  establishedYear: 1958,

    "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600",  type: "Government",

  ],  website: "https://www.iitb.ac.in",

  city: "Mumbai",  email: "admissions@iitb.ac.in",

  state: "Maharashtra",  phone: "+91-22-2576-7001",

  address: "Powai, Mumbai, Maharashtra 400076",  rating: 4.5,

  establishedYear: 1958,  reviewCount: 403,

  type: "Government",  cdScore: 9.2,

  website: "https://www.iitb.ac.in",  rankings: [

  email: "admissions@iitb.ac.in",    { agency: "NIRF", rank: 3, year: 2024, category: "Engineering" },

  phone: "+91-22-2576-7001",    { agency: "QS World", rank: 149, year: 2024, category: "Overall" },

  rating: 4.5,    { agency: "THE World", rank: 251, year: 2024, category: "Overall" },

  reviewCount: 403,  ],

  cdScore: 9.2,  approvals: ["AICTE", "UGC", "MHRD"],

  rankings: [  accreditations: [

    { agency: "NIRF", rank: 3, year: 2024, category: "Engineering" },    { agency: "NAAC", grade: "A++", score: 3.67 },

    { agency: "QS World", rank: 149, year: 2024, category: "Overall" },    { agency: "NBA", grade: "Accredited", score: null },

    { agency: "THE World", rank: 251, year: 2024, category: "Overall" },  ],

  ],  highlights: [

  approvals: ["AICTE", "UGC", "MHRD"],    { label: "Established", value: "1958" },

  accreditations: [    { label: "Type", value: "Government" },

    { agency: "NAAC", grade: "A++", score: 3.67 },    { label: "Campus Size", value: "550 Acres" },

    { agency: "NBA", grade: "Accredited", score: null },    { label: "Total Students", value: "16,000+" },

  ],    { label: "Faculty", value: "680+" },

  highlights: [    { label: "Courses Offered", value: "147" },

    { label: "Established", value: "1958", icon: Calendar },  ],

    { label: "Type", value: "Government", icon: Building2 },  fees: {

    { label: "Campus Size", value: "550 Acres", icon: MapPin },    btech: { amount: 882500, duration: "4 Years" },

    { label: "Total Students", value: "16,000+", icon: Users },    mtech: { amount: 235000, duration: "2 Years" },

    { label: "Faculty", value: "680+", icon: GraduationCap },    phd: { amount: 50000, duration: "5 Years" },

    { label: "Courses Offered", value: "147", icon: BookOpen },    mba: { amount: 1500000, duration: "2 Years" },

  ],  },

  fees: {  placement: {

    btech: { amount: 882500, duration: "4 Years" },    year: 2024,

    mtech: { amount: 235000, duration: "2 Years" },    studentsPlaced: 1450,

    phd: { amount: 50000, duration: "5 Years" },    totalStudents: 1520,

    mba: { amount: 1500000, duration: "2 Years" },    placementRate: 95.4,

  },    averagePackage: 2350000,

  placement: {    medianPackage: 2100000,

    year: 2024,    highestPackage: 10000000,

    studentsPlaced: 1450,    topRecruiters: [

    totalStudents: 1520,      "Google",

    placementRate: 95.4,      "Microsoft",

    averagePackage: 2350000,      "Amazon",

    medianPackage: 2100000,      "Goldman Sachs",

    highestPackage: 10000000,      "McKinsey",

    topRecruiters: [      "BCG",

      "Google",      "Apple",

      "Microsoft",      "Meta",

      "Amazon",    ],

      "Goldman Sachs",  },

      "McKinsey",  courses: [

      "BCG",    {

      "Apple",      name: "B.Tech",

      "Meta",      specializations: 12,

      "Uber",      fees: 882500,

      "Adobe",      duration: "4 Years",

      "Flipkart",      seats: 1200,

      "Morgan Stanley",    },

    ],    {

  },      name: "M.Tech",

  courses: [      specializations: 35,

    {      fees: 235000,

      name: "B.Tech",      duration: "2 Years",

      specializations: [      seats: 1800,

        "Computer Science",    },

        "Electrical Engineering",    {

        "Mechanical Engineering",      name: "PhD",

        "Civil Engineering",      specializations: 28,

        "Chemical Engineering",      fees: 50000,

        "Aerospace Engineering",      duration: "3-5 Years",

      ],      seats: 400,

      fees: 882500,    },

      duration: "4 Years",    {

      seats: 1200,      name: "MBA",

      eligibility: "JEE Advanced",      specializations: 3,

    },      fees: 1500000,

    {      duration: "2 Years",

      name: "M.Tech",      seats: 120,

      specializations: [    },

        "AI & ML",    {

        "Data Science",      name: "M.Sc",

        "VLSI Design",      specializations: 8,

        "Structural Engineering",      fees: 25000,

      ],      duration: "2 Years",

      fees: 235000,      seats: 200,

      duration: "2 Years",    },

      seats: 1800,  ],

      eligibility: "GATE",};

    },

    {function StatCard({

      name: "PhD",  icon: Icon,

      specializations: ["Research Programs across all departments"],  label,

      fees: 50000,  value,

      duration: "3-5 Years",  subValue,

      seats: 400,  className,

      eligibility: "GATE/NET + Interview",}: {

    },  icon: React.ElementType;

    {  label: string;

      name: "MBA",  value: string;

      specializations: ["Finance", "Marketing", "Operations"],  subValue?: string;

      fees: 1500000,  className?: string;

      duration: "2 Years",}) {

      seats: 120,  return (

      eligibility: "CAT",    <div

    },      className={cn(

    {        "bg-white rounded-xl border border-gray-200 p-4",

      name: "M.Sc",        className,

      specializations: ["Physics", "Chemistry", "Mathematics", "Biology"],      )}

      fees: 25000,    >

      duration: "2 Years",      <div className="flex items-center gap-3">

      seats: 200,        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">

      eligibility: "JAM",          <Icon className="w-5 h-5 text-jirs-blue" />

    },        </div>

  ],        <div>

  cutoffs: [          <div className="text-sm text-gray-500">{label}</div>

    {          <div className="font-bold text-gray-900">{value}</div>

      course: "B.Tech Computer Science",          {subValue && <div className="text-xs text-gray-400">{subValue}</div>}

      exam: "JEE Advanced 2024",        </div>

      general: 68,      </div>

      obc: 45,    </div>

      sc: 18,  );

      st: 8,}

    },

    {export function CollegeDetailPage() {

      course: "B.Tech Electrical Engineering",  const [activeTab, setActiveTab] = React.useState("overview");

      exam: "JEE Advanced 2024",

      general: 285,  return (

      obc: 180,    <div className="min-h-screen bg-gray-50">

      sc: 65,      {/* Hero Section */}

      st: 28,      <div className="bg-jirs-blue text-white">

    },        <div className="container py-8">

    {          {/* Breadcrumb */}

      course: "B.Tech Mechanical Engineering",          <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">

      exam: "JEE Advanced 2024",            <Link href="/" className="hover:text-white">

      general: 520,              Home

      obc: 350,            </Link>

      sc: 120,            <ChevronRight className="w-4 h-4" />

      st: 55,            <Link href="/colleges" className="hover:text-white">

    },              Colleges

    {            </Link>

      course: "B.Tech Civil Engineering",            <ChevronRight className="w-4 h-4" />

      exam: "JEE Advanced 2024",            <span className="text-white">{collegeData.shortName}</span>

      general: 1250,          </nav>

      obc: 850,

      sc: 320,          <div className="flex flex-col lg:flex-row gap-6">

      st: 145,            {/* Logo */}

    },            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-xl flex items-center justify-center text-3xl font-bold text-jirs-blue shrink-0">

  ],              {collegeData.name.charAt(0)}

  reviews: [            </div>

    {

      id: "1",            {/* College Info */}

      author: "Rahul Sharma",            <div className="flex-1">

      course: "B.Tech CSE",              <div className="flex flex-wrap items-center gap-3 mb-2">

      batch: "2020-2024",                {collegeData.rankings.slice(0, 2).map((ranking) => (

      rating: 5,                  <Badge key={ranking.agency} variant="gold">

      title: "Best decision of my life",                    #{ranking.rank} {ranking.agency}

      content:                  </Badge>

        "IIT Bombay has transformed my career. The faculty, infrastructure, and peer group are exceptional. The placement opportunities are unmatched.",                ))}

      helpful: 234,                <Badge

      date: "2024-12-15",                  variant="secondary"

      avatar: "https://i.pravatar.cc/100?img=1",                  className="bg-green-500/20 text-green-100"

    },                >

    {                  <Check className="w-3.5 h-3.5 mr-1" /> Verified

      id: "2",                </Badge>

      author: "Priya Patel",              </div>

      course: "M.Tech AI",

      batch: "2022-2024",              <h1 className="text-2xl lg:text-3xl font-bold mb-2">

      rating: 4.5,                {collegeData.name}

      title: "Excellent research opportunities",              </h1>

      content:

        "The research culture here is amazing. Professors are very supportive and the labs are well-equipped. Highly recommend for anyone interested in research.",              <div className="flex flex-wrap items-center gap-4 text-blue-100 mb-4">

      helpful: 156,                <div className="flex items-center gap-1">

      date: "2024-11-20",                  <MapPin className="w-4 h-4" />

      avatar: "https://i.pravatar.cc/100?img=2",                  {collegeData.city}, {collegeData.state}

    },                </div>

    {                <div className="flex items-center gap-1">

      id: "3",                  <Building2 className="w-4 h-4" />

      author: "Amit Kumar",                  Est. {collegeData.establishedYear}

      course: "B.Tech EE",                </div>

      batch: "2019-2023",                <div className="flex items-center gap-1">

      rating: 4.8,                  <GraduationCap className="w-4 h-4" />

      title: "World-class education",                  {collegeData.type}

      content:                </div>

        "The curriculum is rigorous but rewarding. Campus life is vibrant with numerous clubs and festivals. Placements are excellent with top companies visiting.",              </div>

      helpful: 189,

      date: "2024-10-05",              {/* Rating & Actions */}

      avatar: "https://i.pravatar.cc/100?img=3",              <div className="flex flex-wrap items-center gap-4">

    },                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2">

  ],                  <Star className="w-5 h-5 text-jirs-yellow fill-jirs-yellow" />

  facilities: [                  <span className="font-bold">{collegeData.rating}</span>

    "Central Library",                  <span className="text-blue-200">/ 5</span>

    "Sports Complex",                  <span className="text-blue-200">

    "Swimming Pool",                    ({collegeData.reviewCount} reviews)

    "Gymnasium",                  </span>

    "Medical Center",                </div>

    "Banks & ATMs",

    "Cafeterias",                <div className="flex items-center gap-2">

    "Hostels",                  <Button variant="gold" size="sm">

    "WiFi Campus",                    Apply Now

    "Research Labs",                  </Button>

    "Auditorium",                  <Button

    "Convention Center",                    variant="outline"

  ],                    size="sm"

};                    className="border-white/30 text-white hover:bg-white/10"

                    leftIcon={<Download className="w-4 h-4" />}

const navItems = [                  >

  { id: "overview", label: "Overview" },                    Brochure

  { id: "courses", label: "Courses & Fees" },                  </Button>

  { id: "placements", label: "Placements" },                  <button className="p-2 rounded-lg border border-white/30 hover:bg-white/10">

  { id: "cutoffs", label: "Cutoffs" },                    <Heart className="w-5 h-5" />

  { id: "reviews", label: "Reviews" },                  </button>

  { id: "gallery", label: "Gallery" },                  <button className="p-2 rounded-lg border border-white/30 hover:bg-white/10">

  { id: "facilities", label: "Facilities" },                    <Share2 className="w-5 h-5" />

];                  </button>

                </div>

function StatCard({              </div>

  icon: Icon,            </div>

  label,          </div>

  value,        </div>

  subValue,      </div>

  className,

  highlight,      {/* Quick Stats Bar */}

}: {      <div className="bg-white border-b border-gray-200 py-4 sticky top-16 z-20">

  icon: React.ElementType;        <div className="container">

  label: string;          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">

  value: string;            <div className="text-center">

  subValue?: string;              <div className="text-lg font-bold text-jirs-blue">

  className?: string;                {collegeData.cdScore}/10

  highlight?: boolean;              </div>

}) {              <div className="text-xs text-gray-500">CD Score</div>

  return (            </div>

    <div            <div className="text-center">

      className={cn(              <div className="text-lg font-bold text-green-600">

        "bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow",                {formatCurrency(collegeData.placement.averagePackage, {

        highlight && "border-jirs-blue bg-blue-50/50",                  notation: "compact",

        className                })}

      )}              </div>

    >              <div className="text-xs text-gray-500">Avg. Package</div>

      <div className="flex items-center gap-4">            </div>

        <div            <div className="text-center">

          className={cn(              <div className="text-lg font-bold text-blue-600">

            "w-12 h-12 rounded-xl flex items-center justify-center",                {formatCurrency(collegeData.fees.btech.amount, {

            highlight ? "bg-jirs-blue" : "bg-blue-50"                  notation: "compact",

          )}                })}

        >              </div>

          <Icon              <div className="text-xs text-gray-500">B.Tech Fees</div>

            className={cn("w-6 h-6", highlight ? "text-white" : "text-jirs-blue")}            </div>

          />            <div className="text-center">

        </div>              <div className="text-lg font-bold text-gray-900">

        <div>                {collegeData.placement.placementRate}%

          <div className="text-sm text-gray-500">{label}</div>              </div>

          <div className="text-xl font-bold text-gray-900">{value}</div>              <div className="text-xs text-gray-500">Placement</div>

          {subValue && <div className="text-xs text-gray-400">{subValue}</div>}            </div>

        </div>            <div className="text-center hidden lg:block">

      </div>              <div className="text-lg font-bold text-purple-600">

    </div>                {formatCurrency(collegeData.placement.highestPackage, {

  );                  notation: "compact",

}                })}

              </div>

export function CollegeDetailPage() {              <div className="text-xs text-gray-500">Highest Package</div>

  const [activeSection, setActiveSection] = React.useState("overview");            </div>

  const [showScrollTop, setShowScrollTop] = React.useState(false);            <div className="text-center hidden lg:block">

              <div className="text-lg font-bold text-gray-900">

  // Handle scroll to update active section                {collegeData.courses.length}

  React.useEffect(() => {              </div>

    const handleScroll = () => {              <div className="text-xs text-gray-500">Courses</div>

      setShowScrollTop(window.scrollY > 500);            </div>

          </div>

      const sections = navItems.map((item) => document.getElementById(item.id));        </div>

      const scrollPosition = window.scrollY + 200;      </div>



      for (let i = sections.length - 1; i >= 0; i--) {      {/* Content Area */}

        const section = sections[i];      <div className="container py-8">

        if (section && section.offsetTop <= scrollPosition) {        <div className="flex flex-col lg:flex-row gap-8">

          setActiveSection(navItems[i].id);          {/* Main Content */}

          break;          <div className="flex-1 min-w-0">

        }            <Tabs

      }              value={activeTab}

    };              onValueChange={setActiveTab}

              className="w-full"

    window.addEventListener("scroll", handleScroll);            >

    return () => window.removeEventListener("scroll", handleScroll);              <TabsListUnderline className="mb-6">

  }, []);                <TabsTriggerUnderline value="overview">

                  Overview

  const scrollToSection = (id: string) => {                </TabsTriggerUnderline>

    const element = document.getElementById(id);                <TabsTriggerUnderline value="courses">

    if (element) {                  Courses & Fees

      const offset = 120;                </TabsTriggerUnderline>

      const elementPosition = element.getBoundingClientRect().top;                <TabsTriggerUnderline value="placements">

      const offsetPosition = elementPosition + window.pageYOffset - offset;                  Placements

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });                </TabsTriggerUnderline>

    }                <TabsTriggerUnderline value="cutoff">

  };                  Cutoffs

                </TabsTriggerUnderline>

  const scrollToTop = () => {                <TabsTriggerUnderline value="reviews">

    window.scrollTo({ top: 0, behavior: "smooth" });                  Reviews

  };                </TabsTriggerUnderline>

                <TabsTriggerUnderline value="gallery">

  return (                  Gallery

    <div className="min-h-screen bg-gray-50">                </TabsTriggerUnderline>

      {/* Hero Section with Background Image */}              </TabsListUnderline>

      <div className="relative">

        {/* Background Image */}              {/* Overview Tab */}

        <div className="absolute inset-0 h-[500px] md:h-[550px]">              <TabsContent value="overview" className="space-y-8">

          <img                {/* About */}

            src={collegeData.coverImage}                <Card>

            alt={collegeData.name}                  <CardContent className="p-6">

            className="w-full h-full object-cover"                    <h2 className="text-xl font-bold text-gray-900 mb-4">

          />                      About {collegeData.shortName}

          <div className="absolute inset-0 bg-gradient-to-t from-jirs-blue via-jirs-blue/80 to-jirs-blue/40" />                    </h2>

        </div>                    <p className="text-gray-600 leading-relaxed mb-4">

                      The Indian Institute of Technology Bombay (IIT Bombay) is

        {/* Hero Content */}                      a public technical and research university located in

        <div className="relative z-10 text-white">                      Powai, Mumbai, India. IIT Bombay was established in 1958

          <div className="container pt-8 pb-16 md:pb-24">                      and is the second-oldest IIT in India. The institute is

            {/* Breadcrumb */}                      recognized as an Institute of National Importance by the

            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">                      Government of India.

              <Link href="/" className="hover:text-white">                    </p>

                Home                    <p className="text-gray-600 leading-relaxed">

              </Link>                      IIT Bombay offers undergraduate, postgraduate, and

              <ChevronRight className="w-4 h-4" />                      doctoral programs in various fields of engineering, pure

              <Link href="/colleges" className="hover:text-white">                      sciences, design, and humanities & social sciences. The

                Colleges                      institute has been consistently ranked among the top

              </Link>                      engineering institutes in India and Asia.

              <ChevronRight className="w-4 h-4" />                    </p>

              <span className="text-white">{collegeData.shortName}</span>                  </CardContent>

            </nav>                </Card>



            <div className="flex flex-col lg:flex-row gap-8 items-start">                {/* Key Highlights */}

              {/* Logo */}                <Card>

              <div className="w-28 h-28 lg:w-36 lg:h-36 bg-white rounded-2xl shadow-xl flex items-center justify-center text-4xl font-bold text-jirs-blue shrink-0">                  <CardContent className="p-6">

                {collegeData.name.charAt(0)}                    <h2 className="text-xl font-bold text-gray-900 mb-4">

              </div>                      Key Highlights

                    </h2>

              {/* College Info */}                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">

              <div className="flex-1">                      {collegeData.highlights.map((highlight) => (

                <div className="flex flex-wrap items-center gap-3 mb-3">                        <div

                  {collegeData.rankings.slice(0, 2).map((ranking) => (                          key={highlight.label}

                    <Badge                          className="bg-gray-50 rounded-lg p-4"

                      key={ranking.agency}                        >

                      className="bg-jirs-yellow text-jirs-blue font-semibold"                          <div className="text-sm text-gray-500">

                    >                            {highlight.label}

                      #{ranking.rank} {ranking.agency}                          </div>

                    </Badge>                          <div className="font-bold text-gray-900">

                  ))}                            {highlight.value}

                  <Badge className="bg-green-500 text-white">                          </div>

                    <Check className="w-3.5 h-3.5 mr-1" /> Verified                        </div>

                  </Badge>                      ))}

                </div>                    </div>

                  </CardContent>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 leading-tight">                </Card>

                  {collegeData.name}

                </h1>                {/* Rankings */}

                <Card>

                <p className="text-xl text-jirs-yellow mb-4 font-medium">                  <CardContent className="p-6">

                  {collegeData.tagline}                    <h2 className="text-xl font-bold text-gray-900 mb-4">

                </p>                      Rankings & Accreditations

                    </h2>

                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90 mb-6">                    <div className="grid sm:grid-cols-2 gap-4">

                  <div className="flex items-center gap-2">                      <div>

                    <MapPin className="w-5 h-5" />                        <h3 className="font-medium text-gray-700 mb-3">

                    <span>                          Rankings

                      {collegeData.city}, {collegeData.state}                        </h3>

                    </span>                        <div className="space-y-3">

                  </div>                          {collegeData.rankings.map((ranking) => (

                  <div className="flex items-center gap-2">                            <div

                    <Building2 className="w-5 h-5" />                              key={ranking.agency}

                    <span>Est. {collegeData.establishedYear}</span>                              className="flex items-center justify-between bg-yellow-50 rounded-lg p-3"

                  </div>                            >

                  <div className="flex items-center gap-2">                              <div>

                    <GraduationCap className="w-5 h-5" />                                <div className="font-medium text-gray-900">

                    <span>{collegeData.type}</span>                                  {ranking.agency}

                  </div>                                </div>

                </div>                                <div className="text-sm text-gray-500">

                                  {ranking.category} {ranking.year}

                {/* Rating & Actions */}                                </div>

                <div className="flex flex-wrap items-center gap-4">                              </div>

                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3">                              <div className="text-2xl font-bold text-jirs-blue">

                    <Star className="w-6 h-6 text-jirs-yellow fill-jirs-yellow" />                                #{ranking.rank}

                    <span className="text-2xl font-bold">                              </div>

                      {collegeData.rating}                            </div>

                    </span>                          ))}

                    <span className="text-white/70">/ 5</span>                        </div>

                    <span className="text-white/70 ml-1">                      </div>

                      ({collegeData.reviewCount} reviews)                      <div>

                    </span>                        <h3 className="font-medium text-gray-700 mb-3">

                  </div>                          Accreditations

                        </h3>

                  <div className="flex items-center gap-2">                        <div className="space-y-3">

                    <Button                          {collegeData.accreditations.map((acc) => (

                      size="lg"                            <div

                      className="bg-jirs-yellow text-jirs-blue hover:bg-yellow-400 font-semibold"                              key={acc.agency}

                    >                              className="flex items-center justify-between bg-green-50 rounded-lg p-3"

                      Apply Now                            >

                    </Button>                              <div>

                    <Button                                <div className="font-medium text-gray-900">

                      variant="outline"                                  {acc.agency}

                      size="lg"                                </div>

                      className="border-white/40 text-white hover:bg-white/10"                                {acc.score && (

                      leftIcon={<Download className="w-4 h-4" />}                                  <div className="text-sm text-gray-500">

                    >                                    Score: {acc.score}

                      Brochure                                  </div>

                    </Button>                                )}

                    <button className="p-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors">                              </div>

                      <Heart className="w-5 h-5" />                              <Badge variant="success">{acc.grade}</Badge>

                    </button>                            </div>

                    <button className="p-3 rounded-xl border border-white/40 hover:bg-white/10 transition-colors">                          ))}

                      <Share2 className="w-5 h-5" />                        </div>

                    </button>                        <div className="mt-4">

                  </div>                          <h3 className="font-medium text-gray-700 mb-3">

                </div>                            Approvals

              </div>                          </h3>

            </div>                          <div className="flex flex-wrap gap-2">

          </div>                            {collegeData.approvals.map((approval) => (

        </div>                              <Badge key={approval} variant="outline">

      </div>                                {approval}

                              </Badge>

      {/* Quick Stats Bar */}                            ))}

      <div className="bg-white border-b border-gray-200 py-6 -mt-8 relative z-20 rounded-t-3xl shadow-lg">                          </div>

        <div className="container">                        </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">                      </div>

            <div className="text-center">                    </div>

              <div className="text-2xl font-bold text-jirs-blue">                  </CardContent>

                {collegeData.cdScore}/10                </Card>

              </div>              </TabsContent>

              <div className="text-sm text-gray-500">CD Score</div>

            </div>              {/* Courses Tab */}

            <div className="text-center">              <TabsContent value="courses" className="space-y-6">

              <div className="text-2xl font-bold text-green-600">                <Card>

                {formatCurrency(collegeData.placement.averagePackage, {                  <CardContent className="p-6">

                  notation: "compact",                    <h2 className="text-xl font-bold text-gray-900 mb-4">

                })}                      Courses Offered at {collegeData.shortName}

              </div>                    </h2>

              <div className="text-sm text-gray-500">Avg. Package</div>                    <div className="space-y-4">

            </div>                      {collegeData.courses.map((course) => (

            <div className="text-center">                        <div

              <div className="text-2xl font-bold text-blue-600">                          key={course.name}

                {formatCurrency(collegeData.fees.btech.amount, {                          className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"

                  notation: "compact",                        >

                })}                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

              </div>                            <div>

              <div className="text-sm text-gray-500">B.Tech Fees</div>                              <h3 className="font-bold text-gray-900">

            </div>                                {course.name}

            <div className="text-center">                              </h3>

              <div className="text-2xl font-bold text-purple-600">                              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">

                {collegeData.placement.placementRate}%                                <span>

              </div>                                  {course.specializations} Specializations

              <div className="text-sm text-gray-500">Placement Rate</div>                                </span>

            </div>                                <span>{course.duration}</span>

            <div className="text-center hidden sm:block">                                <span>{course.seats} Seats</span>

              <div className="text-2xl font-bold text-orange-600">                              </div>

                {formatCurrency(collegeData.placement.highestPackage, {                            </div>

                  notation: "compact",                            <div className="text-right">

                })}                              <div className="text-lg font-bold text-jirs-blue">

              </div>                                {formatCurrency(course.fees)}

              <div className="text-sm text-gray-500">Highest Package</div>                              </div>

            </div>                              <div className="text-sm text-gray-500">

            <div className="text-center hidden lg:block">                                Total Fees

              <div className="text-2xl font-bold text-gray-900">                              </div>

                {collegeData.courses.length}                            </div>

              </div>                          </div>

              <div className="text-sm text-gray-500">Programs</div>                          <div className="flex gap-2 mt-4">

            </div>                            <Button variant="outline" size="sm">

          </div>                              View Details

        </div>                            </Button>

      </div>                            <Button variant="primary" size="sm">

                              Apply Now

      {/* Sticky Navigation */}                            </Button>

      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">                          </div>

        <div className="container">                        </div>

          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-2">                      ))}

            {navItems.map((item) => (                    </div>

              <button                  </CardContent>

                key={item.id}                </Card>

                onClick={() => scrollToSection(item.id)}              </TabsContent>

                className={cn(

                  "px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all",              {/* Placements Tab */}

                  activeSection === item.id              <TabsContent value="placements" className="space-y-6">

                    ? "bg-jirs-blue text-white"                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                    : "text-gray-600 hover:bg-gray-100"                  <StatCard

                )}                    icon={BarChart3}

              >                    label="Avg. Package"

                {item.label}                    value={formatCurrency(collegeData.placement.averagePackage)}

              </button>                  />

            ))}                  <StatCard

          </div>                    icon={TrendingUp}

        </div>                    label="Highest Package"

      </div>                    value={formatCurrency(collegeData.placement.highestPackage)}

                  />

      {/* Content Area */}                  <StatCard

      <div className="container py-10">                    icon={Users}

        <div className="flex flex-col lg:flex-row gap-8">                    label="Students Placed"

          {/* Main Content */}                    value={collegeData.placement.studentsPlaced.toString()}

          <div className="flex-1 min-w-0 space-y-12">                    subValue={`of ${collegeData.placement.totalStudents}`}

            {/* Overview Section */}                  />

            <section id="overview" className="scroll-mt-32">                  <StatCard

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">                    icon={Briefcase}

                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">                    label="Placement Rate"

                  <Building2 className="w-5 h-5 text-white" />                    value={`${collegeData.placement.placementRate}%`}

                </div>                  />

                About {collegeData.shortName}                </div>

              </h2>

                <Card>

              <Card className="mb-8">                  <CardContent className="p-6">

                <CardContent className="p-6 md:p-8">                    <h2 className="text-xl font-bold text-gray-900 mb-4">

                  <p className="text-gray-600 leading-relaxed text-lg mb-6">                      Top Recruiters

                    The Indian Institute of Technology Bombay (IIT Bombay) is a                    </h2>

                    public technical and research university located in Powai,                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                    Mumbai, India. IIT Bombay was established in 1958 and is the                      {collegeData.placement.topRecruiters.map((recruiter) => (

                    second-oldest IIT in India. The institute is recognized as                        <div

                    an Institute of National Importance by the Government of                          key={recruiter}

                    India.                          className="bg-gray-50 rounded-lg p-4 text-center font-medium text-gray-700"

                  </p>                        >

                  <p className="text-gray-600 leading-relaxed text-lg">                          {recruiter}

                    IIT Bombay offers undergraduate, postgraduate, and doctoral                        </div>

                    programs in various fields of engineering, pure sciences,                      ))}

                    design, and humanities & social sciences. The institute has                    </div>

                    been consistently ranked among the top engineering                  </CardContent>

                    institutes in India and Asia.                </Card>

                  </p>              </TabsContent>

                </CardContent>

              </Card>              {/* Cutoff Tab */}

              <TabsContent value="cutoff">

              {/* Key Highlights */}                <Card>

              <h3 className="text-xl font-bold text-gray-900 mb-4">                  <CardContent className="p-6">

                Key Highlights                    <h2 className="text-xl font-bold text-gray-900 mb-4">

              </h3>                      JEE Advanced Cutoff 2024

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">                    </h2>

                {collegeData.highlights.map((highlight) => {                    <p className="text-gray-600">Cutoff data coming soon...</p>

                  const Icon = highlight.icon;                  </CardContent>

                  return (                </Card>

                    <div              </TabsContent>

                      key={highlight.label}

                      className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"              {/* Reviews Tab */}

                    >              <TabsContent value="reviews">

                      <div className="flex items-center gap-3 mb-2">                <Card>

                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">                  <CardContent className="p-6">

                          <Icon className="w-5 h-5 text-jirs-blue" />                    <h2 className="text-xl font-bold text-gray-900 mb-4">

                        </div>                      Student Reviews

                      </div>                    </h2>

                      <div className="text-sm text-gray-500">                    <p className="text-gray-600">

                        {highlight.label}                      Reviews section coming soon...

                      </div>                    </p>

                      <div className="text-xl font-bold text-gray-900">                  </CardContent>

                        {highlight.value}                </Card>

                      </div>              </TabsContent>

                    </div>

                  );              {/* Gallery Tab */}

                })}              <TabsContent value="gallery">

              </div>                <Card>

                  <CardContent className="p-6">

              {/* Rankings & Accreditations */}                    <h2 className="text-xl font-bold text-gray-900 mb-4">

              <h3 className="text-xl font-bold text-gray-900 mb-4">                      Campus Gallery

                Rankings & Accreditations                    </h2>

              </h3>                    <p className="text-gray-600">

              <div className="grid md:grid-cols-2 gap-6">                      Gallery section coming soon...

                <Card>                    </p>

                  <CardContent className="p-6">                  </CardContent>

                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">                </Card>

                      <Award className="w-5 h-5 text-jirs-yellow" />              </TabsContent>

                      Rankings            </Tabs>

                    </h4>          </div>

                    <div className="space-y-3">

                      {collegeData.rankings.map((ranking) => (          {/* Sidebar */}

                        <div          <div className="w-full lg:w-80 shrink-0 space-y-6">

                          key={ranking.agency}            {/* Quick Apply Card */}

                          className="flex items-center justify-between bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4"            <Card>

                        >              <CardContent className="p-6">

                          <div>                <h3 className="font-bold text-gray-900 mb-4">

                            <div className="font-semibold text-gray-900">                  Interested in {collegeData.shortName}?

                              {ranking.agency}                </h3>

                            </div>                <form className="space-y-4">

                            <div className="text-sm text-gray-500">                  <input

                              {ranking.category} {ranking.year}                    type="text"

                            </div>                    placeholder="Your Name"

                          </div>                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue"

                          <div className="text-3xl font-bold text-jirs-blue">                  />

                            #{ranking.rank}                  <input

                          </div>                    type="email"

                        </div>                    placeholder="Email Address"

                      ))}                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue"

                    </div>                  />

                  </CardContent>                  <input

                </Card>                    type="tel"

                    placeholder="Phone Number"

                <Card>                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue"

                  <CardContent className="p-6">                  />

                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">                  <Button variant="primary" className="w-full">

                      <Check className="w-5 h-5 text-green-600" />                    Get Expert Counselling

                      Accreditations                  </Button>

                    </h4>                </form>

                    <div className="space-y-3 mb-6">              </CardContent>

                      {collegeData.accreditations.map((acc) => (            </Card>

                        <div

                          key={acc.agency}            {/* Contact Info */}

                          className="flex items-center justify-between bg-green-50 rounded-xl p-4"            <Card>

                        >              <CardContent className="p-6">

                          <div>                <h3 className="font-bold text-gray-900 mb-4">

                            <div className="font-semibold text-gray-900">                  Contact Information

                              {acc.agency}                </h3>

                            </div>                <div className="space-y-3">

                            {acc.score && (                  <a

                              <div className="text-sm text-gray-500">                    href={`tel:${collegeData.phone}`}

                                Score: {acc.score}                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-jirs-blue"

                              </div>                  >

                            )}                    <Phone className="w-4 h-4" />

                          </div>                    {collegeData.phone}

                          <Badge className="bg-green-600 text-white">                  </a>

                            {acc.grade}                  <a

                          </Badge>                    href={`mailto:${collegeData.email}`}

                        </div>                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-jirs-blue"

                      ))}                  >

                    </div>                    <Mail className="w-4 h-4" />

                    <h4 className="font-semibold text-gray-900 mb-3">                    {collegeData.email}

                      Approvals                  </a>

                    </h4>                  <a

                    <div className="flex flex-wrap gap-2">                    href={collegeData.website}

                      {collegeData.approvals.map((approval) => (                    target="_blank"

                        <Badge key={approval} variant="outline" className="text-sm">                    rel="noopener noreferrer"

                          {approval}                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-jirs-blue"

                        </Badge>                  >

                      ))}                    <Globe className="w-4 h-4" />

                    </div>                    Visit Website

                  </CardContent>                    <ExternalLink className="w-3 h-3" />

                </Card>                  </a>

              </div>                  <div className="flex items-start gap-3 text-sm text-gray-600">

            </section>                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />

                    {collegeData.address}

            {/* Courses & Fees Section */}                  </div>

            <section id="courses" className="scroll-mt-32">                </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">              </CardContent>

                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">            </Card>

                  <BookOpen className="w-5 h-5 text-white" />

                </div>            {/* Similar Colleges */}

                Courses & Fees            <Card>

              </h2>              <CardContent className="p-6">

                <h3 className="font-bold text-gray-900 mb-4">

              <div className="space-y-4">                  Similar Colleges

                {collegeData.courses.map((course) => (                </h3>

                  <Card                <div className="space-y-3">

                    key={course.name}                  {["IIT Delhi", "IIT Madras", "IIT Kanpur", "BITS Pilani"].map(

                    className="hover:shadow-lg transition-shadow"                    (college) => (

                  >                      <Link

                    <CardContent className="p-6">                        key={college}

                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">                        href="#"

                        <div>                        className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"

                          <h3 className="text-xl font-bold text-gray-900 mb-1">                      >

                            {course.name}                        <div className="font-medium text-gray-900">

                          </h3>                          {college}

                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">                        </div>

                            <span className="flex items-center gap-1">                        <div className="text-sm text-gray-500">

                              <Calendar className="w-4 h-4" />                          View Details →

                              {course.duration}                        </div>

                            </span>                      </Link>

                            <span className="flex items-center gap-1">                    ),

                              <Users className="w-4 h-4" />                  )}

                              {course.seats} Seats                </div>

                            </span>              </CardContent>

                            <span className="flex items-center gap-1">            </Card>

                              <GraduationCap className="w-4 h-4" />          </div>

                              {course.eligibility}        </div>

                            </span>      </div>

                          </div>    </div>

                        </div>  );

                        <div className="text-right">}

                          <div className="text-2xl font-bold text-jirs-blue">
                            {formatCurrency(course.fees)}
                          </div>
                          <div className="text-sm text-gray-500">Total Fees</div>
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
                        <Button size="sm">Apply Now</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Placements Section */}
            <section id="placements" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">
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
                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">
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
                            <td className="p-4 text-gray-600">{cutoff.exam}</td>
                            <td className="p-4 text-center font-semibold text-jirs-blue">
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
                            <div className="font-bold text-jirs-blue">
                              {cutoff.general}
                            </div>
                            <div className="text-xs text-gray-500">General</div>
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

            {/* Reviews Section */}
            <section id="reviews" className="scroll-mt-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">
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
                        <button className="flex items-center gap-2 text-gray-500 hover:text-jirs-blue transition-colors">
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

            {/* Gallery Section */}
            <section id="gallery" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">
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
                <div className="w-10 h-10 bg-jirs-blue rounded-xl flex items-center justify-center">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-jirs-blue/20 focus:border-jirs-blue transition-all"
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
                    className="flex items-center gap-3 text-gray-600 hover:text-jirs-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-jirs-blue" />
                    </div>
                    <span>{collegeData.phone}</span>
                  </a>
                  <a
                    href={`mailto:${collegeData.email}`}
                    className="flex items-center gap-3 text-gray-600 hover:text-jirs-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-jirs-blue" />
                    </div>
                    <span className="truncate">{collegeData.email}</span>
                  </a>
                  <a
                    href={collegeData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-jirs-blue transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-jirs-blue" />
                    </div>
                    <span className="flex items-center gap-1">
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                  <div className="flex items-start gap-3 text-gray-600">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-jirs-blue" />
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
                  {["IIT Delhi", "IIT Madras", "IIT Kanpur", "BITS Pilani"].map(
                    (college) => (
                      <Link
                        key={college}
                        href="#"
                        className="block p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="font-medium text-gray-900">
                          {college}
                        </div>
                        <div className="text-sm text-jirs-blue">
                          View Details →
                        </div>
                      </Link>
                    )
                  )}
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
          className="fixed bottom-8 right-8 w-12 h-12 bg-jirs-blue text-white rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center z-50"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
