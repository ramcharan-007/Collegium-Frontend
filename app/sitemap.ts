import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://collegium.in";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/engineering-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/mba-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/medical-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/law-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/arts-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/commerce-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/science-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/design-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/pharmacy-colleges`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/courses`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/course-finder`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/exams`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/rankings`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/college-predictor`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${baseUrl}/study-abroad`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  // City-specific listing pages
  const cities = [
    "bangalore", "delhi", "mumbai", "hyderabad", "chennai",
    "kolkata", "pune", "ahmedabad", "jaipur", "lucknow",
    "chandigarh", "bhopal", "indore", "nagpur", "coimbatore",
    "kochi", "thiruvananthapuram", "visakhapatnam", "patna", "dehradun",
  ];

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city}-colleges`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Exam detail pages
  const exams = [
    "jee-main", "jee-advanced", "neet", "cat", "gate", "cuet",
    "clat", "xat", "mat", "cmat", "nata", "bitsat",
  ];

  const examPages: MetadataRoute.Sitemap = exams.map((exam) => ({
    url: `${baseUrl}/exams/${exam}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // College predictor pages
  const predictorPages: MetadataRoute.Sitemap = exams.slice(0, 6).map((exam) => ({
    url: `${baseUrl}/college-predictor/${exam}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Study abroad country pages
  const countries = ["usa", "uk", "canada", "australia", "germany", "ireland", "new-zealand", "singapore"];
  const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${baseUrl}/study-abroad/${country}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Board exam pages
  const boardExamPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/board-exams`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/board-exams/cbse-class-12`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/board-exams/cbse-class-10`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
  ];

  // TODO: When backend is connected, dynamically generate college detail pages
  // const collegeSlugs = await getCollegeSlugs();
  // const collegePages = collegeSlugs.map(slug => ({ url: `${baseUrl}/college/${slug}`, ... }));

  return [
    ...staticPages,
    ...cityPages,
    ...examPages,
    ...predictorPages,
    ...countryPages,
    ...boardExamPages,
  ];
}
