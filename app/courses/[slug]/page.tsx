import { CourseDetailPage } from "@/components/courses";

const courseData: Record<string, any> = {
  btech: {
    name: "B.Tech",
    slug: "btech",
    fullName: "Bachelor of Technology",
    level: "Bachelors",
    stream: "Engineering",
    duration: "4 Years",
    mode: ["Full-time"],
    avgFees: 250000,
    colleges: 6361,
    description:
      "Bachelor of Technology (B.Tech) is a professional undergraduate engineering degree awarded after completion of four years of academic study in the engineering field. It is one of the most sought-after courses in India, offering excellent career opportunities in various sectors including IT, manufacturing, construction, and research. The program covers theoretical knowledge as well as practical applications of engineering principles.",
    eligibility: [
      "Candidates must have passed 10+2 or equivalent examination with Physics and Mathematics as compulsory subjects along with Chemistry/Biology/Biotechnology/Computer Science as optional subjects",
      "Minimum aggregate marks of 60% (55% for reserved categories) in 10+2",
      "Must have qualified in JEE Main / JEE Advanced / State Engineering Entrance Exams",
      "Age limit: Generally, there is no age limit for B.Tech admissions",
    ],
    icon: "⚙️",
    popularExams: [
      { name: "JEE Main", slug: "jee-main" },
      { name: "JEE Advanced", slug: "jee-advanced" },
      { name: "BITSAT", slug: "bitsat" },
      { name: "VITEEE", slug: "viteee" },
    ],
    careers: [
      { title: "Software Engineer", avgSalary: "₹6-25 LPA" },
      { title: "Data Scientist", avgSalary: "₹8-30 LPA" },
      { title: "Product Manager", avgSalary: "₹12-40 LPA" },
      { title: "Systems Architect", avgSalary: "₹15-45 LPA" },
      { title: "DevOps Engineer", avgSalary: "₹8-25 LPA" },
      { title: "Machine Learning Engineer", avgSalary: "₹10-35 LPA" },
    ],
    syllabus: [
      {
        semester: "Semester 1",
        subjects: [
          "Engineering Mathematics I",
          "Engineering Physics",
          "Engineering Chemistry",
          "Basic Electrical Engineering",
          "Programming Fundamentals",
        ],
      },
      {
        semester: "Semester 2",
        subjects: [
          "Engineering Mathematics II",
          "Data Structures",
          "Digital Electronics",
          "Engineering Graphics",
          "Environmental Science",
        ],
      },
      {
        semester: "Semester 3",
        subjects: [
          "Discrete Mathematics",
          "Object-Oriented Programming",
          "Computer Organization",
          "Database Management",
          "Operating Systems",
        ],
      },
      {
        semester: "Semester 4",
        subjects: [
          "Design & Analysis of Algorithms",
          "Computer Networks",
          "Software Engineering",
          "Theory of Computation",
          "Microprocessors",
        ],
      },
    ],
    topColleges: [
      {
        name: "IIT Bombay",
        slug: "iit-bombay",
        location: "Mumbai, Maharashtra",
        fees: 882000,
        rating: 4.9,
      },
      {
        name: "IIT Delhi",
        slug: "iit-delhi",
        location: "New Delhi, Delhi",
        fees: 862000,
        rating: 4.9,
      },
      {
        name: "IIT Madras",
        slug: "iit-madras",
        location: "Chennai, Tamil Nadu",
        fees: 850000,
        rating: 4.9,
      },
      {
        name: "IIT Kanpur",
        slug: "iit-kanpur",
        location: "Kanpur, Uttar Pradesh",
        fees: 845000,
        rating: 4.8,
      },
      {
        name: "BITS Pilani",
        slug: "bits-pilani",
        location: "Pilani, Rajasthan",
        fees: 1800000,
        rating: 4.7,
      },
    ],
    specializations: [
      "Computer Science",
      "Information Technology",
      "Electronics & Communication",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
      "Aerospace Engineering",
    ],
    skills: [
      "Programming",
      "Problem Solving",
      "Data Analysis",
      "System Design",
      "Project Management",
      "Technical Documentation",
      "Team Collaboration",
      "Critical Thinking",
    ],
  },
  mba: {
    name: "MBA",
    slug: "mba",
    fullName: "Master of Business Administration",
    level: "Masters",
    stream: "Management",
    duration: "2 Years",
    mode: ["Full-time", "Part-time", "Online"],
    avgFees: 800000,
    colleges: 8001,
    description:
      "Master of Business Administration (MBA) is a globally recognized postgraduate degree program focused on developing managerial and leadership skills. The program covers various aspects of business management including finance, marketing, operations, and human resources. An MBA degree opens doors to senior management positions and is highly valued by employers worldwide.",
    eligibility: [
      "Bachelor's degree in any discipline from a recognized university",
      "Minimum 50% aggregate marks (45% for reserved categories)",
      "Valid CAT/XAT/GMAT/MAT/CMAT score for top B-schools",
      "Work experience of 0-5 years (preferred but not mandatory for most programs)",
    ],
    icon: "📊",
    popularExams: [
      { name: "CAT", slug: "cat" },
      { name: "XAT", slug: "xat" },
      { name: "GMAT", slug: "gmat" },
      { name: "MAT", slug: "mat" },
    ],
    careers: [
      { title: "Business Analyst", avgSalary: "₹8-20 LPA" },
      { title: "Marketing Manager", avgSalary: "₹12-35 LPA" },
      { title: "Finance Manager", avgSalary: "₹15-40 LPA" },
      { title: "Consultant", avgSalary: "₹15-50 LPA" },
      { title: "Operations Manager", avgSalary: "₹10-30 LPA" },
      { title: "Investment Banker", avgSalary: "₹20-80 LPA" },
    ],
    syllabus: [
      {
        semester: "Semester 1",
        subjects: [
          "Organizational Behavior",
          "Managerial Economics",
          "Financial Accounting",
          "Marketing Management",
          "Business Statistics",
        ],
      },
      {
        semester: "Semester 2",
        subjects: [
          "Operations Management",
          "Human Resource Management",
          "Corporate Finance",
          "Business Research Methods",
          "Business Communication",
        ],
      },
      {
        semester: "Semester 3",
        subjects: [
          "Strategic Management",
          "Business Law",
          "Summer Internship Project",
          "Specialization Electives",
          "Industry Analysis",
        ],
      },
      {
        semester: "Semester 4",
        subjects: [
          "International Business",
          "Entrepreneurship",
          "Capstone Project",
          "Specialization Electives",
          "Leadership Development",
        ],
      },
    ],
    topColleges: [
      {
        name: "IIM Ahmedabad",
        slug: "iim-ahmedabad",
        location: "Ahmedabad, Gujarat",
        fees: 2300000,
        rating: 4.9,
      },
      {
        name: "IIM Bangalore",
        slug: "iim-bangalore",
        location: "Bangalore, Karnataka",
        fees: 2350000,
        rating: 4.9,
      },
      {
        name: "IIM Calcutta",
        slug: "iim-calcutta",
        location: "Kolkata, West Bengal",
        fees: 2700000,
        rating: 4.9,
      },
      {
        name: "ISB Hyderabad",
        slug: "isb-hyderabad",
        location: "Hyderabad, Telangana",
        fees: 4200000,
        rating: 4.8,
      },
      {
        name: "FMS Delhi",
        slug: "fms-delhi",
        location: "New Delhi, Delhi",
        fees: 230000,
        rating: 4.8,
      },
    ],
    specializations: [
      "Finance",
      "Marketing",
      "Human Resources",
      "Operations",
      "Business Analytics",
      "International Business",
      "Entrepreneurship",
      "Healthcare Management",
    ],
    skills: [
      "Leadership",
      "Strategic Thinking",
      "Financial Analysis",
      "Marketing Strategy",
      "Team Management",
      "Negotiation",
      "Communication",
      "Decision Making",
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const course = courseData[slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Course Not Found
          </h1>
          <p className="text-gray-600">
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return <CourseDetailPage course={course} />;
}
