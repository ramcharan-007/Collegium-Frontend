"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbSchema } from "@/components/seo";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema
        items={allItems.map((item) => ({ name: item.label, url: item.href }))}
      />
      <nav
        aria-label="Breadcrumb"
        className={cn("flex items-center text-sm text-gray-500", className)}
      >
        <ol className="flex items-center flex-wrap gap-1">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center">
                {index === 0 && (
                  <Home className="w-3.5 h-3.5 mr-1 text-gray-400" />
                )}
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1 text-gray-300 flex-shrink-0" />
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium truncate max-w-[200px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-collegium-blue transition-colors truncate max-w-[200px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
