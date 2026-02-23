"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ title = "Frequently Asked Questions", faqs, className }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className={cn("py-10", className)}>
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="font-medium text-gray-900 dark:text-white pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-400 shrink-0 transition-transform",
                  openIndex === index && "rotate-180"
                )}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
