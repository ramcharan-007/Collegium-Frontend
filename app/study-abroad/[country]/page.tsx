import { CountryDetailPage } from "@/components/study-abroad";

// Sample country data - in production, this would come from an API
const countryData: Record<string, any> = {
  usa: {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200",
    description:
      "The United States is home to some of the world's most prestigious universities and offers unparalleled research opportunities across diverse fields.",
    universities: 4500,
    courses: 25000,
    avgCost: "$20,000 - $55,000",
    currency: "USD",
    livingCost: "$1,000 - $2,500",
    popularCourses: [
      "MS in Computer Science",
      "MBA",
      "MS in Data Science",
      "Engineering",
      "Finance",
      "Healthcare",
      "Law",
      "Arts & Design",
    ],
    highlights: [
      "OPT (Optional Practical Training) for up to 3 years for STEM graduates",
      "World-class research facilities and funding opportunities",
      "Home to 8 Ivy League universities and top tech schools",
      "Diverse multicultural campus environment",
      "Strong industry connections and internship opportunities",
      "Extensive scholarship and financial aid options",
    ],
    intakes: [
      { name: "Fall Intake", months: "August - September (Primary)" },
      { name: "Spring Intake", months: "January - February" },
      { name: "Summer Intake", months: "May - June (Limited)" },
    ],
    visaSuccess: 82,
    workPermit:
      "OPT allows you to work for 12 months after graduation. STEM graduates can extend for additional 24 months (total 3 years).",
    partTimeWork:
      "Students can work up to 20 hours/week on-campus during semesters and full-time during breaks.",
    requirements: {
      ielts: "6.5 - 7.5",
      toefl: "80 - 110",
      gre: "300 - 330",
      gmat: "600 - 750",
    },
    topCities: [
      { name: "Boston", universities: 52 },
      { name: "New York", universities: 89 },
      { name: "San Francisco", universities: 34 },
      { name: "Los Angeles", universities: 45 },
    ],
    facts: [
      { label: "Capital", value: "Washington D.C." },
      { label: "Currency", value: "US Dollar ($)" },
      { label: "Language", value: "English" },
      { label: "Time Zone", value: "UTC-5 to UTC-10" },
      { label: "Climate", value: "Varies by region" },
    ],
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    description:
      "The UK offers world-renowned education with shorter program durations, rich cultural heritage, and excellent post-study work opportunities.",
    universities: 160,
    courses: 15000,
    avgCost: "£15,000 - £35,000",
    currency: "GBP",
    livingCost: "£800 - £1,500",
    popularCourses: [
      "MBA",
      "MSc Finance",
      "LLM",
      "Engineering",
      "Data Science",
      "Business Analytics",
      "Medicine",
      "Arts",
    ],
    highlights: [
      "1-year Master's programs (shorter than most countries)",
      "2-year Graduate Route visa for post-study work",
      "Home to Oxford, Cambridge, and Russell Group universities",
      "Rich cultural and historical heritage",
      "Gateway to Europe for travel and networking",
      "Strong emphasis on research and practical learning",
    ],
    intakes: [
      { name: "September Intake", months: "September - October (Primary)" },
      { name: "January Intake", months: "January - February" },
    ],
    visaSuccess: 89,
    workPermit:
      "The Graduate Route visa allows you to stay and work in the UK for 2 years after completing your degree (3 years for PhD).",
    partTimeWork:
      "Students can work up to 20 hours/week during term time and full-time during holidays.",
    requirements: {
      ielts: "6.0 - 7.5",
      toefl: "79 - 100",
      gre: "Optional for most programs",
      gmat: "550 - 700",
    },
    topCities: [
      { name: "London", universities: 40 },
      { name: "Manchester", universities: 8 },
      { name: "Edinburgh", universities: 5 },
      { name: "Birmingham", universities: 6 },
    ],
    facts: [
      { label: "Capital", value: "London" },
      { label: "Currency", value: "British Pound (£)" },
      { label: "Language", value: "English" },
      { label: "Time Zone", value: "UTC+0 (GMT)" },
      { label: "Climate", value: "Temperate maritime" },
    ],
  },
  canada: {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1200",
    description:
      "Canada offers high-quality education at affordable costs with excellent permanent residency pathways and a welcoming multicultural environment.",
    universities: 100,
    courses: 12000,
    avgCost: "CAD 15,000 - CAD 35,000",
    currency: "CAD",
    livingCost: "CAD 800 - CAD 1,500",
    popularCourses: [
      "Computer Science",
      "Business Analytics",
      "Engineering",
      "Healthcare",
      "Data Science",
      "Hospitality",
      "Finance",
    ],
    highlights: [
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Clear pathway to Permanent Residency (Express Entry)",
      "Affordable education compared to USA and UK",
      "Safe, multicultural, and welcoming society",
      "High quality of life and work-life balance",
      "Co-op programs with paid work experience",
    ],
    intakes: [
      { name: "Fall Intake", months: "September (Primary)" },
      { name: "Winter Intake", months: "January" },
      { name: "Summer Intake", months: "May (Limited)" },
    ],
    visaSuccess: 85,
    workPermit:
      "PGWP allows you to work for up to 3 years after graduation. Eligible for Express Entry PR pathway.",
    partTimeWork:
      "Students can work up to 20 hours/week off-campus during semesters and full-time during breaks.",
    requirements: {
      ielts: "6.0 - 7.0",
      toefl: "80 - 100",
      gre: "Optional for most programs",
    },
    topCities: [
      { name: "Toronto", universities: 15 },
      { name: "Vancouver", universities: 12 },
      { name: "Montreal", universities: 10 },
      { name: "Ottawa", universities: 5 },
    ],
    facts: [
      { label: "Capital", value: "Ottawa" },
      { label: "Currency", value: "Canadian Dollar (CAD)" },
      { label: "Languages", value: "English, French" },
      { label: "Time Zone", value: "UTC-3.5 to UTC-8" },
      { label: "Climate", value: "Varies, cold winters" },
    ],
  },
  australia: {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200",
    description:
      "Australia offers world-class education, excellent quality of life, and generous post-study work rights in a beautiful natural setting.",
    universities: 43,
    courses: 10000,
    avgCost: "AUD 20,000 - AUD 45,000",
    currency: "AUD",
    livingCost: "AUD 1,400 - AUD 2,500",
    popularCourses: [
      "Engineering",
      "IT",
      "Business",
      "Nursing",
      "Data Science",
      "Biotechnology",
      "Architecture",
    ],
    highlights: [
      "Post-study work visa up to 6 years for eligible graduates",
      "8 universities in world's top 100 (Group of Eight)",
      "High quality of life and safety",
      "Beautiful beaches and outdoor lifestyle",
      "Strong job market in tech, healthcare, and engineering",
      "Pathway to permanent residency",
    ],
    intakes: [
      { name: "February Intake", months: "February - March (Primary)" },
      { name: "July Intake", months: "July - August" },
    ],
    visaSuccess: 88,
    workPermit:
      "Temporary Graduate visa (subclass 485) allows you to work for 2-6 years depending on your qualification.",
    partTimeWork:
      "Students can work up to 48 hours per fortnight during semesters and unlimited during breaks.",
    requirements: {
      ielts: "6.0 - 7.0",
      toefl: "79 - 100",
    },
    topCities: [
      { name: "Melbourne", universities: 10 },
      { name: "Sydney", universities: 9 },
      { name: "Brisbane", universities: 5 },
      { name: "Perth", universities: 4 },
    ],
    facts: [
      { label: "Capital", value: "Canberra" },
      { label: "Currency", value: "Australian Dollar (AUD)" },
      { label: "Language", value: "English" },
      { label: "Time Zone", value: "UTC+8 to UTC+11" },
      { label: "Climate", value: "Warm, varied" },
    ],
  },
  germany: {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200",
    description:
      "Germany offers tuition-free education at public universities, world-class engineering programs, and excellent career opportunities in Europe's largest economy.",
    universities: 400,
    courses: 8000,
    avgCost: "€0 - €20,000",
    currency: "EUR",
    livingCost: "€700 - €1,000",
    popularCourses: [
      "Engineering",
      "Automobile Engineering",
      "Data Science",
      "Business",
      "Computer Science",
      "Mechanical Engineering",
    ],
    highlights: [
      "Free or low-cost tuition at public universities",
      "18-month job seeker visa after graduation",
      "Europe's largest economy with strong job market",
      "World-renowned engineering and automotive industry",
      "English-taught programs available",
      "Central location for European travel",
    ],
    intakes: [
      { name: "Winter Semester", months: "October (Primary)" },
      { name: "Summer Semester", months: "April" },
    ],
    visaSuccess: 90,
    workPermit:
      "18-month job seeker visa to find employment related to your studies. Can convert to work permit.",
    partTimeWork:
      "Students can work up to 120 full days or 240 half days per year.",
    requirements: {
      ielts: "6.0 - 7.0",
      toefl: "80 - 100",
      gre: "Optional",
    },
    topCities: [
      { name: "Munich", universities: 18 },
      { name: "Berlin", universities: 35 },
      { name: "Frankfurt", universities: 8 },
      { name: "Hamburg", universities: 12 },
    ],
    facts: [
      { label: "Capital", value: "Berlin" },
      { label: "Currency", value: "Euro (€)" },
      { label: "Language", value: "German" },
      { label: "Time Zone", value: "UTC+1" },
      { label: "Climate", value: "Temperate" },
    ],
  },
  ireland: {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=1200",
    description:
      "Ireland is Europe's tech hub with world-class universities, a vibrant culture, and excellent post-study work opportunities in an English-speaking environment.",
    universities: 34,
    courses: 5000,
    avgCost: "€10,000 - €25,000",
    currency: "EUR",
    livingCost: "€800 - €1,500",
    popularCourses: [
      "Technology",
      "Pharmaceutical Sciences",
      "Finance",
      "Business",
      "Data Analytics",
      "Biotechnology",
    ],
    highlights: [
      "2-year stay back visa (Third Level Graduate Scheme)",
      "European headquarters of major tech giants",
      "English-speaking country",
      "Rich cultural heritage and friendly people",
      "Gateway to EU job market",
      "Strong pharmaceutical and tech industries",
    ],
    intakes: [
      { name: "September Intake", months: "September (Primary)" },
      { name: "January Intake", months: "January" },
    ],
    visaSuccess: 86,
    workPermit:
      "Third Level Graduate Scheme allows 2 years of stay back for job search and work.",
    partTimeWork:
      "Students can work up to 20 hours/week during term time and 40 hours/week during holidays.",
    requirements: {
      ielts: "6.0 - 6.5",
      toefl: "79 - 90",
    },
    topCities: [
      { name: "Dublin", universities: 12 },
      { name: "Cork", universities: 4 },
      { name: "Galway", universities: 3 },
      { name: "Limerick", universities: 2 },
    ],
    facts: [
      { label: "Capital", value: "Dublin" },
      { label: "Currency", value: "Euro (€)" },
      { label: "Language", value: "English, Irish" },
      { label: "Time Zone", value: "UTC+0" },
      { label: "Climate", value: "Mild, rainy" },
    ],
  },
};

interface PageProps {
  params: Promise<{ country: string }>;
}

export default async function CountryPage({ params }: PageProps) {
  const { country } = await params;
  const data = countryData[country];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Country Not Found
          </h1>
          <p className="text-gray-600">
            The country you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return <CountryDetailPage country={data} />;
}

export function generateStaticParams() {
  return Object.keys(countryData).map((country) => ({
    country,
  }));
}
