import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Providers } from "./providers";
import { FloatingCompareBar } from "@/components/compare";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Collegium - Find Your Perfect College | Rankings, Reviews & Admissions",
  description:
    "Explore 25,000+ colleges in India. Compare rankings, reviews, courses, fees, placements & admission criteria. Get college predictions based on your exam scores.",
  keywords:
    "colleges in India, college rankings, admission, JEE Main, NEET, MBA colleges, engineering colleges, medical colleges",
  openGraph: {
    title: "Collegium - Find Your Perfect College",
    description:
      "Explore 25,000+ colleges in India. Compare rankings, reviews, courses, fees, and placements.",
    type: "website",
    locale: "en_IN",
    siteName: "Collegium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collegium - Find Your Perfect College",
    description:
      "Explore 25,000+ colleges in India. Compare rankings, reviews, courses, fees, and placements.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-gray-900 min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCompareBar />
        </Providers>
      </body>
    </html>
  );
}
