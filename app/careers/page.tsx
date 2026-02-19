import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Coffee,
  GraduationCap,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Briefcase,
} from "lucide-react";

const departments = [
  "All Departments",
  "Engineering",
  "Product",
  "Design",
  "Marketing",
  "Sales",
  "Operations",
  "Content",
];

const openPositions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "4-6 years",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai / Remote",
    type: "Full-time",
    experience: "2-4 years",
  },
  {
    title: "Content Writer - Education",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    experience: "1-3 years",
  },
  {
    title: "Data Scientist",
    department: "Engineering",
    location: "Bangalore",
    type: "Full-time",
    experience: "3-5 years",
  },
  {
    title: "Business Development Manager",
    department: "Sales",
    location: "Delhi",
    type: "Full-time",
    experience: "4-6 years",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and family",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "₹50,000 annual budget for courses and conferences",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive",
  },
  {
    icon: Coffee,
    title: "Remote Friendly",
    description: "Work from anywhere in India",
  },
  {
    icon: TrendingUp,
    title: "Stock Options",
    description: "Equity for all full-time employees",
  },
  {
    icon: Zap,
    title: "Fast Growth",
    description: "Clear career progression paths",
  },
];

const values = [
  "We put students first in every decision",
  "We value transparency and honest communication",
  "We embrace continuous learning and improvement",
  "We celebrate diversity and inclusion",
  "We maintain high standards of excellence",
  "We support work-life balance",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mb-6">
              We're Hiring!
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build the Future of Education Discovery
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our mission to help millions of students find their dream
              college. We're looking for passionate people to join our growing
              team.
            </p>
            <Button
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
            >
              View Open Positions
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900">150+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">4</div>
              <div className="text-gray-600">Office Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">40%</div>
              <div className="text-gray-600">Remote Team</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900">15</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Collegium?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a chance to make a real
              impact in the lives of millions of students across India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-xl border p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Culture
              </h2>
              <p className="text-gray-600 mb-6">
                At Collegium, we believe in creating an environment where
                everyone can do their best work. We're a diverse team united by
                a common goal: helping students succeed.
              </p>
              <ul className="space-y-3">
                {values.map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <div className="font-medium text-gray-900">Team Events</div>
              </div>
              <div className="bg-yellow-100 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <div className="font-medium text-gray-900">Hackathons</div>
              </div>
              <div className="bg-green-100 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">📚</div>
                <div className="font-medium text-gray-900">Learning Days</div>
              </div>
              <div className="bg-purple-100 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">💬</div>
                <div className="font-medium text-gray-900">Town Halls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16" id="positions">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600">
              Find your next opportunity with us
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  dept === "All Departments"
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {job.title}
                      </h3>
                      <Badge variant="secondary">{job.department}</Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button>
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* No Match */}
          <div className="text-center mt-12 p-8 bg-white rounded-xl border max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Don't see a perfect match?
            </h3>
            <p className="text-gray-600 mb-4">
              We're always looking for talented people. Send us your resume and
              we'll keep you in mind for future opportunities.
            </p>
            <Button variant="outline">Send General Application</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in building the future of education discovery in India. Your
            work will help millions of students find their dream college.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 text-blue-900 hover:bg-yellow-300"
          >
            View All Positions
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
