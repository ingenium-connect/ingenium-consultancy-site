import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { BarChart, Code, Database, Target, Shield, Lightbulb, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "strategy",
    icon: <BarChart className="w-8 h-8" />,
    title: "Accessible Strategy",
    description: "Strategic planning that removes barriers and creates inclusive pathways to growth for all stakeholders.",
    details: [
      "Inclusive market analysis and competitive intelligence",
      "Equity-focused corporate and business unit strategy",
      "Growth strategy that prioritizes accessibility",
      "Digital transformation strategy with universal design",
      "M&A strategy with inclusion considerations",
    ],
    image: "/images/services/strategy.jpg",
  },
  {
    id: "digital",
    icon: <Code className="w-8 h-8" />,
    title: "Inclusive Digital Transformation",
    description: "Modernize your operations through technology that works for everyone, regardless of ability or background.",
    details: [
      "Accessibility-first technology assessment",
      "Cloud migration with inclusive infrastructure",
      "Enterprise applications designed for universal access",
      "Automation with accessibility at the core",
      "Cybersecurity that protects all users",
    ],
    image: "/images/services/digital.jpg",
  },
  {
    id: "analytics",
    icon: <Database className="w-8 h-8" />,
    title: "Equitable Data & Analytics",
    description: "Turn your data into actionable insights while ensuring fairness, inclusion, and accessibility.",
    details: [
      "Bias-aware data strategy and governance",
      "Predictive modeling with inclusive metrics",
      "Business intelligence dashboards for all users",
      "Accessible data visualization and reporting",
      "Ethical machine learning implementation",
    ],
    image: "/images/services/analytics.jpg",
  },
  {
    id: "optimization",
    icon: <Target className="w-8 h-8" />,
    title: "Inclusive Process Optimization",
    description: "Streamline operations while removing barriers and creating equitable access for all employees and customers.",
    details: [
      "Accessibility-focused operational efficiency assessment",
      "Process mapping with inclusive design principles",
      "Lean Six Sigma with equity considerations",
      "Cost reduction that maintains accessibility",
      "Quality improvement programs for universal access",
    ],
    image: "/images/services/optimization.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Consulting Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We design ingenious solutions that remove long-standing barriers and make services more accessible, inclusive, and easy to use for everyone.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section bg="white" padding="lg">
        <Grid columns={2} gap="lg">
          {services.map((service, idx) => (
            <Card key={idx} className="h-full flex flex-col hover:border-teal-200">
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center text-teal-700 mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.description}</p>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-slate-900 mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-600">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
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

      {/* How We Work */}
      <Section bg="gray" padding="lg">
        <SectionHeader
          title="How We Work"
          subtitle="Our proven methodology ensures successful outcomes for every client engagement."
        />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-teal-200 -translate-y-1/2 z-0"></div>

            {[
              {
                step: "01",
                title: "Discovery",
                description: "We thoroughly understand your business, challenges, and goals through comprehensive analysis.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a tailored strategy aligned with your objectives and available resources.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our experts execute the plan with precision, ensuring smooth transitions and minimal disruption.",
              },
              {
                step: "04",
                title: "Results",
                description: "We measure success, optimize outcomes, and help you sustain the improvements.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10">
                <div className="w-20 h-20 bg-teal-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-teal-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Not seeing exactly what you need? Our consultants can develop custom solutions tailored to your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="bg-white text-teal-700 hover:bg-gray-50 hover:text-teal-700 shadow-sm">
                Contact Us for Custom Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Section>


    </div>
  );
}
