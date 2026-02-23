"use client";

import * as React from "react";
import Link from "next/link";
import { Star, Gift, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui";

export function ReviewIncentiveBanner() {
  const [isDismissed, setIsDismissed] = React.useState(false);

  React.useEffect(() => {
    const dismissed = localStorage.getItem("collegium_review_banner_dismissed");
    if (dismissed) setIsDismissed(true);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem("collegium_review_banner_dismissed", "true");
  };

  if (isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 md:p-6 relative">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-12 h-12 bg-collegium-yellow/20 rounded-xl flex items-center justify-center shrink-0">
          <Gift className="w-6 h-6 text-amber-600" />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg">
            Share Your College Experience & Earn Rewards!
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Write a genuine review about your college and get a chance to win
            Amazon vouchers worth ₹500. Help future students make better decisions.
          </p>
          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs text-gray-500 ml-2">50,000+ reviews already written</span>
          </div>
        </div>

        <Link href="/write-review">
          <Button
            className="bg-collegium-yellow text-collegium-blue hover:bg-yellow-400 whitespace-nowrap"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Write a Review
          </Button>
        </Link>
      </div>
    </div>
  );
}
