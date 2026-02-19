import { NewsArticleDetail } from "@/components/news";

// Sample article data
const articleData: Record<string, any> = {
  "jee-main-2025-session-1-results": {
    id: "1",
    title: "JEE Main 2025 Session 1 Results Announced: Check Your Score Now",
    slug: "jee-main-2025-session-1-results",
    excerpt:
      "NTA has announced the JEE Main 2025 Session 1 results. Students can check their scores on the official website. The cutoff for JEE Advanced qualification has been released.",
    content: `
      <p>The National Testing Agency (NTA) has officially released the JEE Main 2025 Session 1 results today. Candidates who appeared for the examination can now check their scores on the official NTA website.</p>
      
      <h2>How to Check JEE Main 2025 Results</h2>
      <p>Follow these steps to check your JEE Main 2025 Session 1 result:</p>
      <ol>
        <li>Visit the official NTA JEE Main website at jeemain.nta.nic.in</li>
        <li>Click on the "JEE Main 2025 Session 1 Result" link</li>
        <li>Enter your Application Number and Date of Birth</li>
        <li>Submit and view your scorecard</li>
      </ol>
      
      <h2>JEE Main 2025 Cutoff for JEE Advanced</h2>
      <p>The qualifying cutoff for JEE Advanced 2025 has been announced:</p>
      <ul>
        <li><strong>General Category:</strong> 90 percentile</li>
        <li><strong>OBC-NCL:</strong> 75 percentile</li>
        <li><strong>SC:</strong> 55 percentile</li>
        <li><strong>ST:</strong> 45 percentile</li>
        <li><strong>PwD:</strong> 0.001 percentile</li>
      </ul>
      
      <h2>What's Next?</h2>
      <p>Students who qualify for JEE Advanced can start their preparation immediately. JEE Advanced 2025 is expected to be conducted in May 2025. Meanwhile, students should also keep an eye on the counselling dates for NIT, IIIT, and GFTI admissions through JoSAA.</p>
      
      <h2>Important Dates</h2>
      <table>
        <tr>
          <th>Event</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>JEE Main Session 1 Result</td>
          <td>January 15, 2025</td>
        </tr>
        <tr>
          <td>JEE Main Session 2</td>
          <td>April 2025</td>
        </tr>
        <tr>
          <td>JEE Advanced Registration</td>
          <td>April 2025</td>
        </tr>
        <tr>
          <td>JEE Advanced Exam</td>
          <td>May 2025</td>
        </tr>
      </table>
      
      <p>We congratulate all students who have cleared JEE Main 2025 and wish them the best for their future endeavors!</p>
    `,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200",
    category: "Exam Results",
    author: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/100?img=1",
      bio: "Priya is an education journalist with over 8 years of experience covering entrance exams and higher education in India. She specializes in JEE, NEET, and competitive exam updates.",
    },
    publishedAt: "2025-01-15T10:30:00Z",
    updatedAt: "2025-01-15T12:00:00Z",
    readTime: 5,
    views: 45230,
    comments: 234,
    tags: ["JEE Main", "Results", "NTA", "Engineering", "IIT"],
  },
};

const relatedArticles = [
  {
    id: "2",
    title: "Top 10 Engineering Colleges in India 2025: NIRF Ranking Released",
    slug: "top-engineering-colleges-nirf-2025",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    category: "Rankings",
    publishedAt: "2025-01-14T14:00:00Z",
  },
  {
    id: "3",
    title: "CAT 2025 Registration to Begin from August: Complete Guide",
    slug: "cat-2025-registration-guide",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
    category: "Exam Updates",
    publishedAt: "2025-01-13T09:00:00Z",
  },
  {
    id: "4",
    title: "New Education Policy 2025: Major Changes in Higher Education",
    slug: "nep-2025-higher-education-changes",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400",
    category: "Policy",
    publishedAt: "2025-01-12T16:30:00Z",
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Article Not Found
          </h1>
          <p className="text-gray-600">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <NewsArticleDetail article={article} relatedArticles={relatedArticles} />
  );
}
