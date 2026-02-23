import Link from "next/link";
import {
  Cpu,
  Briefcase,
  Stethoscope,
  Scale,
  Palette,
  FlaskConical,
  Hotel,
  Ruler,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StudyGoal {
  id: string;
  label: string;
  icon: React.ReactNode;
  count: number;
  color: string;
  href: string;
}

const studyGoals: StudyGoal[] = [
  {
    id: "engineering",
    label: "Engineering",
    icon: <Cpu className="w-6 h-6" />,
    count: 6361,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    href: "/engineering-colleges",
  },
  {
    id: "management",
    label: "Management",
    icon: <Briefcase className="w-6 h-6" />,
    count: 8001,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    href: "/mba-colleges",
  },
  {
    id: "medical",
    label: "Medical",
    icon: <Stethoscope className="w-6 h-6" />,
    count: 2497,
    color: "bg-red-50 text-red-600 border-red-200",
    href: "/medical-colleges",
  },
  {
    id: "law",
    label: "Law",
    icon: <Scale className="w-6 h-6" />,
    count: 1890,
    color: "bg-amber-50 text-amber-600 border-amber-200",
    href: "/law-colleges",
  },
  {
    id: "arts",
    label: "Arts & Humanities",
    icon: <Palette className="w-6 h-6" />,
    count: 5713,
    color: "bg-pink-50 text-pink-600 border-pink-200",
    href: "/arts-colleges",
  },
  {
    id: "science",
    label: "Science",
    icon: <FlaskConical className="w-6 h-6" />,
    count: 4521,
    color: "bg-green-50 text-green-600 border-green-200",
    href: "/science-colleges",
  },
  {
    id: "hotel-management",
    label: "Hotel Management",
    icon: <Hotel className="w-6 h-6" />,
    count: 892,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    href: "/hotel-management-colleges",
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: <Ruler className="w-6 h-6" />,
    count: 456,
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    href: "/architecture-colleges",
  },
];

function formatCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K+`;
  }
  return `${count}+`;
}

export function StudyGoalGrid() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              What do you want to study?
            </h2>
            <p className="text-gray-500 mt-1">
              Choose your field of interest and explore top colleges
            </p>
          </div>
          <Link
            href="/colleges"
            className="hidden sm:flex items-center gap-1 text-collegium-blue font-medium hover:underline"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {studyGoals.map((goal) => (
            <Link
              key={goal.id}
              href={goal.href}
              className={cn(
                "group relative p-5 rounded-xl border-2 transition-all duration-300",
                "hover:shadow-lg hover:-translate-y-1",
                goal.color,
              )}
            >
              <div className="flex flex-col items-start">
                <div className="mb-3">{goal.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-collegium-blue transition-colors">
                  {goal.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {formatCount(goal.count)} Colleges
                </p>
              </div>
              <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/colleges"
            className="inline-flex items-center gap-1 text-collegium-blue font-medium"
          >
            View all categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
