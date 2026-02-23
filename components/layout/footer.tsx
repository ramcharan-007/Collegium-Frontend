import Link from "next/link";
import {
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  topColleges: {
    title: "Top Colleges",
    links: [
      { label: "Engineering Colleges", href: "/engineering-colleges" },
      { label: "MBA Colleges", href: "/mba-colleges" },
      { label: "Medical Colleges", href: "/medical-colleges" },
      { label: "Law Colleges", href: "/law-colleges" },
      { label: "Arts Colleges", href: "/arts-colleges" },
      { label: "Science Colleges", href: "/science-colleges" },
      { label: "Commerce Colleges", href: "/commerce-colleges" },
      { label: "Design Colleges", href: "/design-colleges" },
      { label: "Pharmacy Colleges", href: "/pharmacy-colleges" },
      { label: "View All Colleges", href: "/colleges" },
    ],
  },
  topCollegesByCity: {
    title: "Colleges by City",
    links: [
      { label: "Colleges in Bangalore", href: "/bangalore-colleges" },
      { label: "Colleges in Delhi", href: "/delhi-colleges" },
      { label: "Colleges in Mumbai", href: "/mumbai-colleges" },
      { label: "Colleges in Hyderabad", href: "/hyderabad-colleges" },
      { label: "Colleges in Chennai", href: "/chennai-colleges" },
      { label: "Colleges in Pune", href: "/pune-colleges" },
      { label: "Colleges in Kolkata", href: "/kolkata-colleges" },
      { label: "Colleges in Jaipur", href: "/jaipur-colleges" },
      { label: "Colleges in Ahmedabad", href: "/ahmedabad-colleges" },
      { label: "Colleges in Lucknow", href: "/lucknow-colleges" },
    ],
  },
  topCourses: {
    title: "Top Courses",
    links: [
      { label: "B.Tech", href: "/courses/btech" },
      { label: "MBA", href: "/courses/mba" },
      { label: "MBBS", href: "/courses/mbbs" },
      { label: "M.Tech", href: "/courses/mtech" },
      { label: "B.Sc", href: "/courses/bsc" },
      { label: "BA", href: "/courses/ba" },
      { label: "B.Com", href: "/courses/bcom" },
      { label: "MCA", href: "/courses/mca" },
      { label: "BCA", href: "/courses/bca" },
      { label: "Course Finder", href: "/course-finder" },
    ],
  },
  exams: {
    title: "Top Exams",
    links: [
      { label: "JEE Main 2026", href: "/exams/jee-main" },
      { label: "JEE Advanced 2026", href: "/exams/jee-advanced" },
      { label: "NEET 2026", href: "/exams/neet" },
      { label: "CAT 2025", href: "/exams/cat" },
      { label: "GATE 2026", href: "/exams/gate" },
      { label: "CUET 2026", href: "/exams/cuet" },
      { label: "CLAT 2026", href: "/exams/clat" },
      { label: "XAT 2026", href: "/exams/xat" },
      { label: "MAT 2026", href: "/exams/mat" },
      { label: "View All Exams", href: "/exams" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "College Predictor", href: "/college-predictor" },
      { label: "Compare Colleges", href: "/compare" },
      { label: "Rankings", href: "/rankings" },
      { label: "Reviews", href: "/reviews" },
      { label: "Write a Review", href: "/write-review" },
      { label: "News & Articles", href: "/news" },
      { label: "Board Exams", href: "/board-exams" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Advertise With Us", href: "/advertise" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
};

const studyAbroadLinks = [
  { label: "Study in USA", href: "/study-abroad/usa" },
  { label: "Study in UK", href: "/study-abroad/uk" },
  { label: "Study in Canada", href: "/study-abroad/canada" },
  { label: "Study in Australia", href: "/study-abroad/australia" },
  { label: "Study in Germany", href: "/study-abroad/germany" },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-collegium-yellow flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-collegium-blue" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Collegium</span>
                <span className="text-xs text-gray-400 block -mt-1">
                    know better about colleges
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              Your trusted guide to finding the perfect college. Explore 25,000+
              colleges, compare courses, and make informed decisions about your
              education.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@collegium.in"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-collegium-yellow" />
                info@collegium.in
              </a>
              <a
                href="tel:+918001234567"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-collegium-yellow" />
                +91 800 123 4567
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-collegium-yellow mt-0.5" />
                <span>Bangalore, Karnataka, India</span>
              </div>
            </div>

            {/* App Download Badges Placeholder */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg w-fit cursor-not-allowed opacity-60">
                <span className="text-xs text-gray-400">Coming Soon on</span>
                <span className="text-sm font-semibold text-white">App Store</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg w-fit cursor-not-allowed opacity-60">
                <span className="text-xs text-gray-400">Coming Soon on</span>
                <span className="text-sm font-semibold text-white">Google Play</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Study Abroad Links */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <h4 className="text-white font-semibold mb-4">Study Abroad</h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {studyAbroadLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2026 Collegium. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
