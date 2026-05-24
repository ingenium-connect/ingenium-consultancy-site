import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Lightbulb, Users, Target, CheckCircle, ArrowRight } from "lucide-react";

const industries = [
  {
    id: "insurance",
    name: "Insurance",
    description: "Transform insurance operations with AI-driven claims processing, risk assessment, and customer experience optimization. We are proud partners of Med-Gen Insurance and developed Wheelswise - their digital motor insurance platform.",
    features: [
      "Automated claims processing",
      "Risk assessment and underwriting",
      "Customer experience optimization",
      "Fraud detection systems",
      "Digital policy issuance",
    ],
    color: "bg-blue-600",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Improve patient outcomes and operational efficiency through data-driven healthcare management solutions.",
    features: [
      "Electronic health records optimization",
      "Patient flow management",
      "Revenue cycle optimization",
      "Telemedicine implementation",
    ],
    color: "bg-emerald-600",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "technology",
    name: "Technology",
    description: "Scale your tech business with our specialized consulting for SaaS companies, startups, and enterprise tech firms.",
    features: [
      "Product strategy and roadmap",
      "Agile transformation",
      "Technical due diligence",
      "Scale-up strategy",
    ],
    color: "bg-indigo-600",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    description: "Enhance customer experience and optimize operations for retail and e-commerce businesses.",
    features: [
      "Omnichannel strategy",
      "Inventory optimization",
      "Customer analytics",
      "Supply chain management",
    ],
    color: "bg-orange-500",
    icon: <Target className="w-8 h-8" />,
  },
  {
    id: "financial",
    name: "Financial Services",
    description: "Modernize financial operations while ensuring compliance and risk management excellence.",
    features: [
      "Regulatory compliance",
      "Risk management systems",
      "Digital banking transformation",
      "Fraud prevention",
    ],
    color: "bg-purple-600",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Drive operational excellence through lean manufacturing and Industry 4.0 implementation.",
    features: [
      "Lean manufacturing",
      "Supply chain optimization",
      "Quality control systems",
      "Predictive maintenance",
    ],
    color: "bg-red-600",
    icon: <Target className="w-8 h-8" />,
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Industries We Serve
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide specialized consulting solutions that make services more accessible, inclusive, and easy to use for everyone in each industry.
          </p>
        </div>
      </Section>

      {/* Industry Cards */}
      <Section bg="white" padding="lg">
        <Grid columns={2} gap="lg">
          {industries.map((industry, idx) => (
            <Card key={idx} className="h-full flex flex-col hover:border-teal-200">
              <div className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                {industry.icon}
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h2>
              <p className="text-slate-600 mb-6">{industry.description}</p>
              <div className="flex-grow">
                <h3 className="font-semibold text-slate-900 mb-4">Key Solutions:</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link href="/contact">
                  <Button variant="ghost" className="w-full justify-between group text-teal-700">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Why Specialized */}
      <Section bg="gray" padding="lg">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Why Industry-Specific Expertise Matters"
            subtitle="Different industries face unique challenges and regulatory requirements. Our specialized teams bring deep industry knowledge to every engagement."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Industry Knowledge",
                description: "Our consultants have extensive experience within each industry, understanding the specific challenges and opportunities.",
                icon: <Lightbulb className="w-6 h-6" />,
              },
              {
                title: "Proven Methodologies",
                description: "We apply industry-tested approaches and best practices that have delivered results for similar organizations.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                title: "Regulatory Expertise",
                description: "We help navigate complex industry regulations and compliance requirements, ensuring your business stays on the right side of the law.",
                icon: <Shield className="w-6 h-6" />,
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:border-teal-200">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center text-teal-700 mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our industry experts and discover how we can help you achieve your goals.
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
