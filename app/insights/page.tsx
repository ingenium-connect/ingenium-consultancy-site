import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle, Target, Lightbulb, Users, Shield, Clock, Award, BarChart, Code, Database, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "post-1",
    title: "The Future of Digital Transformation in Insurance",
    excerpt: "How AI and machine learning are revolutionizing the insurance industry and what companies need to know.",
    category: "Digital Transformation",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "/images/blog/insurance-digital.jpg",
  },
  {
    id: "post-2",
    title: "Building a Data-Driven Culture in Healthcare",
    excerpt: "Strategies for healthcare organizations to leverage data for better patient outcomes and operational efficiency.",
    category: "Data & Analytics",
    date: "May 8, 2024",
    readTime: "6 min read",
    image: "/images/blog/healthcare-data.jpg",
  },
  {
    id: "post-3",
    title: "Scaling Your SaaS Business: Key Strategies",
    excerpt: "Proven approaches for technology startups to scale effectively while maintaining quality and customer satisfaction.",
    category: "Business Strategy",
    date: "April 24, 2024",
    readTime: "10 min read",
    image: "/images/blog/saas-scale.jpg",
  },
  {
    id: "post-4",
    title: "Operational Excellence: The Lean Approach",
    excerpt: "How lean methodologies can transform your manufacturing operations and drive significant cost savings.",
    category: "Process Optimization",
    date: "April 10, 2024",
    readTime: "7 min read",
    image: "/images/blog/lean-manufacturing.jpg",
  },
  {
    id: "post-5",
    title: "Cybersecurity in the Modern Enterprise",
    excerpt: "Essential security measures every organization should implement to protect against evolving threats.",
    category: "Digital Transformation",
    date: "March 28, 2024",
    readTime: "9 min read",
    image: "/images/blog/cybersecurity.jpg",
  },
  {
    id: "post-6",
    title: "The Role of AI in Financial Services",
    excerpt: "How artificial intelligence is reshaping banking, investment, and risk management practices.",
    category: "Data & Analytics",
    date: "March 15, 2024",
    readTime: "8 min read",
    image: "/images/blog/ai-finance.jpg",
  },
];

const categories = ["All", "Digital Transformation", "Data & Analytics", "Business Strategy", "Process Optimization"];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Industry Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industry Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert analysis, trends, and thought leadership focused on making services more accessible, inclusive, and easy to use for everyone.
          </p>
        </div>
      </Section>

      {/* Filters */}
      <Section bg="white" padding="sm">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                idx === 0
                  ? "bg-teal-600 text-white"
                  : "bg-gray-100 text-slate-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* Blog Grid */}
      <Section bg="gray" padding="lg">
        <Grid columns={2} gap="lg">
          {blogPosts.map((post, idx) => (
            <Card key={idx} className="h-full flex flex-col group hover:-translate-y-1 transition-all duration-300">
              <div className="h-48 bg-gray-200 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                  {post.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 px-3 py-1 bg-white/90 text-slate-900 text-xs font-semibold rounded-full backdrop-blur-sm flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-500 text-sm">Blog Post Image</span>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm text-slate-500">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span>{post.category}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
              <Link href="/contact">
                <Button variant="ghost" className="w-full text-teal-700 group-hover:text-teal-800">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Newsletter Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-teal-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stay Updated with Our Insights
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Subscribe to our newsletter to receive the latest industry insights, trends, and expert advice directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-6 py-3 rounded-full border-2 border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent focus:outline-none"
            />
            <Link href="/contact">
              <Button variant="accent" size="md" className="bg-white text-teal-700 hover:bg-gray-50 hover:text-teal-700 shadow-sm">
                Subscribe
              </Button>
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Need Expert Guidance?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Our consultants are ready to help you navigate your industry's challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="bg-white text-teal-700 hover:bg-gray-50 hover:text-teal-700 shadow-sm">
                Book Your Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>


    </div>
  );
}
