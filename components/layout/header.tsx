"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Building2,
  FileText,
  Trophy,
  BarChart3,
  Plane,
  PenLine,
  User,
  LogIn,
  GitCompare,
  Bell,
  Phone,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GlobalSearch } from "@/components/search";
import { CounsellingModal } from "@/components/modals";

interface NavItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: "Colleges",
    icon: <Building2 className="w-4 h-4" />,
    children: [
      { label: "Engineering Colleges", href: "/engineering-colleges" },
      { label: "MBA Colleges", href: "/mba-colleges" },
      { label: "Medical Colleges", href: "/medical-colleges" },
      { label: "Law Colleges", href: "/law-colleges" },
      { label: "Arts & Science Colleges", href: "/arts-science-colleges" },
      { label: "View All Colleges", href: "/colleges" },
    ],
  },
  {
    label: "Courses",
    icon: <GraduationCap className="w-4 h-4" />,
    children: [
      { label: "B.Tech", href: "/courses/btech" },
      { label: "MBA", href: "/courses/mba" },
      { label: "MBBS", href: "/courses/mbbs" },
      { label: "B.Sc", href: "/courses/bsc" },
      { label: "BA", href: "/courses/ba" },
      { label: "B.Com", href: "/courses/bcom" },
      { label: "Course Finder", href: "/course-finder" },
      { label: "View All Courses", href: "/courses" },
    ],
  },
  {
    label: "Exams",
    icon: <FileText className="w-4 h-4" />,
    children: [
      { label: "JEE Main", href: "/exams/jee-main" },
      { label: "NEET", href: "/exams/neet" },
      { label: "CAT", href: "/exams/cat" },
      { label: "GATE", href: "/exams/gate" },
      { label: "CUET", href: "/exams/cuet" },
      { label: "View All Exams", href: "/exams" },
    ],
  },
  {
    label: "Rankings",
    href: "/rankings",
    icon: <Trophy className="w-4 h-4" />,
  },
  {
    label: "Predictor",
    icon: <BarChart3 className="w-4 h-4" />,
    children: [
      { label: "JEE Main Predictor", href: "/college-predictor/jee-main" },
      { label: "NEET Predictor", href: "/college-predictor/neet" },
      { label: "CAT Predictor", href: "/college-predictor/cat" },
    ],
  },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    icon: <Plane className="w-4 h-4" />,
  },
];

function NavDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg transition-colors",
          "hover:text-collegium-blue hover:bg-blue-50",
          isOpen && "text-collegium-blue bg-blue-50",
        )}
      >
        {item.icon}
        <span>{item.label}</span>
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && item.children && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 py-2 min-w-[200px] animate-fade-in">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href || "#"}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-collegium-blue transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleItem = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-xl animate-slide-in-right">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-bold text-collegium-blue">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-80px)]">
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 rounded-lg hover:bg-gray-50"
                  >
                    <span className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        expandedItems.includes(item.label) && "rotate-180",
                      )}
                    />
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href || "#"}
                          className="block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-collegium-blue"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href || "#"}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
                  onClick={onClose}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </Link>
              )}
            </div>
          ))}

          <div className="pt-4 border-t mt-4 space-y-2">
            <Link
              href="/write-review"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              <PenLine className="w-4 h-4" />
              <span className="font-medium">Write a Review</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              <LogIn className="w-4 h-4" />
              <span className="font-medium">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isCounsellingOpen, setIsCounsellingOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white",
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-collegium-blue flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-collegium-blue">
                  Collegium
                </span>
                <span className="text-xs text-gray-500 block -mt-1">
                  know better about colleges
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 whitespace-nowrap">
              {navigationItems.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-collegium-blue hover:bg-blue-50 transition-colors"
                  >
                    {item.icon}
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                ),
              )}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Counselling CTA - Desktop */}
              <button
                onClick={() => setIsCounsellingOpen(true)}
                className="whitespace-nowrap hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-collegium-yellow text-collegium-blue text-sm font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Need Counselling?
              </button>

              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-collegium-blue transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Notification Bell */}
              <button className="relative p-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-collegium-blue transition-colors hidden sm:block">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>

              {/* Compare Button - Desktop */}
              <Link href="/compare" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<GitCompare className="w-4 h-4" />}
                >
                  Compare
                </Button>
              </Link>

              {/* Write Review - Desktop */}
              <Link href="/write-review" className="hidden md:block">
                <Button
                  variant="outline"
                  size="sm"
                  leftIcon={<PenLine className="w-4 h-4" />}
                >
                  Write a Review
                </Button>
              </Link>

              {/* Login Button */}
              <Link href="/login" className="hidden sm:block">
                <Button size="sm" leftIcon={<User className="w-4 h-4" />}>
                  Login
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CounsellingModal
        isOpen={isCounsellingOpen}
        onClose={() => setIsCounsellingOpen(false)}
      />
    </>
  );
}
