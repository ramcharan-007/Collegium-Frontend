import Link from "next/link";
import {
  ArrowRight,
  Plane,
  GraduationCap,
  DollarSign,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Country {
  id: string;
  name: string;
  flag: string;
  universities: number;
  avgFees: string;
  currency: string;
  popularCourses: string[];
  href: string;
}

const countries: Country[] = [
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    universities: 1018,
    avgFees: "$35,000",
    currency: "USD",
    popularCourses: ["MS in CS", "MBA", "Data Science"],
    href: "/study-abroad/usa",
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: 175,
    avgFees: "£22,000",
    currency: "GBP",
    popularCourses: ["MBA", "Engineering", "Law"],
    href: "/study-abroad/uk",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    universities: 223,
    avgFees: "$25,000",
    currency: "CAD",
    popularCourses: ["MS", "MBA", "Nursing"],
    href: "/study-abroad/canada",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    universities: 142,
    avgFees: "$28,000",
    currency: "AUD",
    popularCourses: ["Engineering", "Medicine", "MBA"],
    href: "/study-abroad/australia",
  },
  {
    id: "germany",
    name: "Germany",
    flag: "🇩🇪",
    universities: 112,
    avgFees: "€8,000",
    currency: "EUR",
    popularCourses: ["Engineering", "MS", "Medicine"],
    href: "/study-abroad/germany",
  },
  {
    id: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    universities: 45,
    avgFees: "€18,000",
    currency: "EUR",
    popularCourses: ["MS in CS", "Pharma", "Business"],
    href: "/study-abroad/ireland",
  },
];

function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={country.href}
      className="group block bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      {/* Header with Flag */}
      <div className="bg-gradient-to-r from-collegium-blue to-blue-600 p-4 flex items-center gap-3">
        <span className="text-4xl">{country.flag}</span>
        <div>
          <h3 className="text-lg font-bold text-white">{country.name}</h3>
          <p className="text-blue-200 text-sm">
            {country.universities} Universities
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Stats */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span>Avg. {country.avgFees}/year</span>
        </div>

        {/* Popular Courses */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2">Popular Courses</div>
          <div className="flex flex-wrap gap-1.5">
            {country.popularCourses.map((course) => (
              <span
                key={course}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center text-collegium-blue font-medium text-sm group-hover:gap-2 transition-all">
          <span>Explore Universities</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

export function StudyAbroad() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-collegium-blue mb-2">
              <Plane className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Study Abroad
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Explore Top Destinations
            </h2>
            <p className="text-gray-500 mt-1">
              Find the best universities abroad for your dream course
            </p>
          </div>
          <Link
            href="/study-abroad"
            className="hidden sm:flex items-center gap-1 text-collegium-blue font-medium hover:underline"
          >
            View all countries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-collegium-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Scholarship Finder
                </h4>
                <p className="text-sm text-gray-600">
                  Find scholarships for international students
                </p>
                <Link
                  href="/study-abroad/scholarships"
                  className="text-sm text-collegium-blue font-medium hover:underline mt-1 inline-block"
                >
                  Explore →
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-collegium-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">SOP & LOR Guide</h4>
                <p className="text-sm text-gray-600">
                  Write compelling application essays
                </p>
                <Link
                  href="/study-abroad/sop-guide"
                  className="text-sm text-collegium-blue font-medium hover:underline mt-1 inline-block"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-collegium-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Visa Guidance</h4>
                <p className="text-sm text-gray-600">
                  Step-by-step visa application process
                </p>
                <Link
                  href="/study-abroad/visa-guide"
                  className="text-sm text-collegium-blue font-medium hover:underline mt-1 inline-block"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
