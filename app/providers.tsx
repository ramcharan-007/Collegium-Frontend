"use client";

import { CompareProvider, RecentlyViewedProvider } from "@/contexts";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CompareProvider>
      <RecentlyViewedProvider>
        {children}
      </RecentlyViewedProvider>
    </CompareProvider>
  );
}
