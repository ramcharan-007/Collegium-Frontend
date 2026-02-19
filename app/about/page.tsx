import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Building2,
  Globe,
  Target,
  Heart,
  Award,
  Lightbulb,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Linkedin,
  Twitter,
} from "lucide-react";

const stats = [
  { value: "50L+", label: "Students Helped" },
  { value: "50,000+", label: "Colleges Listed" },
  { value: "100+", label: "Exams Covered" },
  { value: "10M+", label: "Monthly Visitors" },
];

const values = [
  {
    icon: Target,
    title: "Student First",
    description:
      "Every decision we make centers around what's best for students",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We maintain transparency and honesty in all our recommendations",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously innovate to provide better tools and insights",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for excellence in everything we do",
  },
];

const team = [
  { name: "Dr. Rajesh Kumar", role: "Founder & CEO", image: "👨‍💼" },
  { name: "Priya Sharma", role: "Chief Product Officer", image: "👩‍💼" },
  { name: "Amit Patel", role: "CTO", image: "👨‍💻" },
  { name: "Sneha Gupta", role: "Head of Content", image: "👩‍🏫" },
];

const milestones = [
  {
    year: "2015",
    title: "Founded",
    description: "Collegium started as a simple college listing platform",
  },
  {
    year: "2017",
    title: "100K Users",
    description: "Reached our first 100,000 registered users",
  },
  {
    year: "2019",
    title: "AI Launch",
    description: "Introduced AI-powered college predictor",
  },
  {
    year: "2021",
    title: "10M Monthly",
    description: "Crossed 10 million monthly visitors",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded to cover international universities",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-12 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-4 md:mb-6">
              About Collegium
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Empowering Students to Make Informed Decisions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 px-4">
              We&apos;re on a mission to simplify the college discovery process
              and help every student find their perfect educational path.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-blue-900">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-sm md:text-base">
                <p>
                  Collegium was founded in 2015 with a simple yet powerful
                  vision: to democratize access to information about higher
                  education in India. We saw countless students struggling to
                  find the right college, often making decisions based on
                  incomplete or inaccurate information.
                </p>
                <p>
                  Today, we&apos;ve grown to become India&apos;s most trusted
                  platform for college discovery, helping millions of students
                  every year make informed decisions about their educational
                  future. Our comprehensive database covers over 50,000
                  colleges, 100+ entrance exams, and thousands of courses.
                </p>
                <p>
                  We combine cutting-edge technology with deep expertise in
                  education to provide personalized recommendations, accurate
                  information, and expert guidance to students across the
                  country.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-6xl md:text-8xl mb-4 md:mb-6">🎓</div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                To empower every student with the information and tools they
                need to make the best educational decisions for their future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Values
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, idx) => (
              <div key={idx} className="text-center p-4 md:p-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <value.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-900" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm hidden sm:block">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Mobile optimized */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Our Journey
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-900 rounded-full" />
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-blue-200" />
                  )}
                </div>
                <div className="bg-white rounded-xl border p-4 flex-1 mb-2">
                  <div className="text-lg font-bold text-blue-900">
                    {milestone.year}
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {milestone.title}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {milestone.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <div className="bg-white rounded-xl border p-6 inline-block">
                      <div className="text-2xl font-bold text-blue-900 mb-1">
                        {milestone.year}
                      </div>
                      <div className="font-semibold text-gray-900">
                        {milestone.title}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {milestone.description}
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-900 rounded-full z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Leadership Team
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Meet the people driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-4 md:p-6 text-center"
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-4">
                  {member.image}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {member.name}
                </h3>
                <div className="text-gray-600 text-xs md:text-sm">
                  {member.role}
                </div>
                <div className="flex items-center justify-center gap-2 mt-3 md:mt-4">
                  <button className="p-1.5 md:p-2 hover:bg-gray-200 rounded-full">
                    <Linkedin className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                  </button>
                  <button className="p-1.5 md:p-2 hover:bg-gray-200 rounded-full">
                    <Twitter className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            We&apos;re always looking for passionate people to join our team and
            help shape the future of education discovery in India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-yellow-400 text-blue-900 hover:bg-yellow-300"
              asChild
            >
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
