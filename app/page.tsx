import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  Target,
  Users,
  Lightbulb,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  BarChart,
  Code,
  Database,
  TrendingUp,
  Zap,
  Award,
  CreditCard,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Business Strategy",
    description: "Data-driven strategic planning to position your business for sustainable growth and competitive advantage.",
    features: ["Market analysis", "Growth roadmap", "Competitive positioning"],
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Modernize your operations with cutting-edge technology solutions tailored to your unique business needs.",
    features: ["Cloud migration", "System integration", "Automation"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics",
    description: "Turn your data into actionable insights with our advanced analytics and business intelligence solutions.",
    features: ["Predictive modeling", "Dashboard design", "Data governance"],
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Process Optimization",
    description: "Streamline your operations and eliminate inefficiencies through lean methodologies and best practices.",
    features: ["Workflow redesign", "Cost reduction", "Quality improvement"],
  },
];

const differentiators = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Proven Expertise",
    description: "Our team of senior consultants brings decades of experience across multiple industries.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovative Solutions",
    description: "We leverage the latest technologies and methodologies to deliver cutting-edge results.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work as an extension of your team, not just a vendor.",
  },
];

const industries = [
  {
    name: "Financial Services",
    description: "Banking, insurance, and fintech solutions for Africa&apos;s growing economies.",
    color: "bg-blue-600",
  },
  {
    name: "Healthcare",
    description: "Digital health solutions improving patient outcomes across East Africa.",
    color: "bg-emerald-600",
  },
  {
    name: "Agribusiness",
    description: "Modernizing agriculture with technology for food security and export growth.",
    color: "bg-lime-600",
  },
  {
    name: "Telecom & Tech",
    description: "Digital transformation for Africa&apos;s rapidly expanding technology sector.",
    color: "bg-indigo-600",
  },
];

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Clients Served", value: "3+" },
  { label: "Projects Completed", value: "3" },
  { label: "Success Rate", value: "98%" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100">
                <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
                Based in Nairobi, Kenya | Premium Consulting
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Pioneering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                  Ingenious Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                Our mission is to design solutions that remove long-standing barriers and make services more accessible, inclusive, and easy to use for everyone. We bring Premium Consulting & implementation expertise to the African market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                    Book Free Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="pt-8 flex flex-wrap items-center gap-8 text-slate-500 border-t border-slate-200">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-delay-300">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Revenue Growth", value: "45%", trend: "+", color: "text-emerald-600" },
                    { label: "Cost Reduction", value: "32%", trend: "-", color: "text-emerald-600" },
                    { label: "Customer Satisfaction", value: "98%", trend: "+", color: "text-blue-600" },
                    { label: "Process Efficiency", value: "55%", trend: "+", color: "text-blue-600" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <div className="text-3xl font-bold text-slate-900 mb-2">
                        {stat.value}
                        <span className={`text-lg ${stat.color}`}>{stat.trend}</span>
                      </div>
                      <div className="text-slate-500 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-700">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">
                      Trusted by <span className="font-semibold text-slate-900">3+</span> companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section bg="gray" padding="lg">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive consulting solutions designed to address your most complex business challenges and drive sustainable growth."
        />
        <Grid columns={2}>
          {services.map((service, idx) => (
            <Card key={idx} className="h-full hover:border-teal-200">
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center text-teal-700 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button variant="ghost" className="w-full justify-between group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Differentiators Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-7xl mx-auto space-y-16">
          <SectionHeader
            title="Why Choose Ingenium"
            subtitle="We combine industry expertise with proven methodologies to deliver exceptional results for our clients."
            align="center"
          />
          <div className="space-y-16">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-12 ${idx % 2 === 1 ? "flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <Card className="p-8 hover:border-teal-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl mb-6 flex items-center justify-center text-teal-700">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="relative h-64 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl overflow-hidden border border-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {idx === 0 && <Shield className="w-24 h-24 text-teal-200" />}
                      {idx === 1 && <Lightbulb className="w-24 h-24 text-teal-200" />}
                      {idx === 2 && <Users className="w-24 h-24 text-teal-200" />}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <Link href="/about">
              <Button variant="accent" icon={<ArrowRight className="w-4 h-4" />}>
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section bg="gray" padding="lg">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Specialized consulting solutions tailored to the unique challenges and opportunities of each industry."
        />
        <Grid columns={4} gap="md">
          {industries.map((industry, idx) => (
            <Card key={idx} className="h-full text-center hover:border-teal-200 group">
              <div className={`w-16 h-16 ${industry.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white shadow-lg shadow-${industry.color}/30`}>
                {idx === 0 && <Globe className="w-8 h-8" />}
                {idx === 1 && <Users className="w-8 h-8" />}
                {idx === 2 && <Target className="w-8 h-8" />}
                {idx === 3 && <BarChart className="w-8 h-8" />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
              <p className="text-slate-600 text-sm">{industry.description}</p>
              <Link href="/industries">
                <Button variant="ghost" className="mt-4 text-teal-700 w-full hover:bg-teal-50">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* Value Proposition Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="Our Value Proposition"
            subtitle="We don't just provide consulting services—we deliver transformative outcomes that last."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Measurable Results",
                description: "We focus on delivering tangible, measurable outcomes that move the needle for your business.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Speed & Agility",
                description: "Our lean approach ensures rapid implementation without compromising on quality or depth.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence Guaranteed",
                description: "Our commitment to excellence is baked into every engagement, every deliverable, every relationship.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:border-teal-200">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl mx-auto mb-6 flex items-center justify-center text-teal-700">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Products Section */}
      <Section bg="gray" padding="lg">
        <SectionHeader
          title="Delivered Products"
          subtitle="We design and develop digital products that make services more accessible across Africa."
        />
        <div className="mt-8 overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max [scroll-snap-type:xmandatory]">
            {/* Wheelswise Product */}
            <Card className="min-w-[450px] max-w-[450px] h-full flex flex-col group hover:-translate-y-2 transition-all duration-300 scroll-snap-align:start overflow-hidden border border-slate-200">
              <div className="h-20 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden flex items-center justify-center">
                <CreditCard className="w-12 h-12 text-white/50" />
              </div>
              <div className="p-6 flex-grow">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 text-xs font-bold rounded-full mb-2 border border-blue-100">
                  Product Development
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Wheelswise</h3>
                <p className="text-sm text-teal-700 font-medium mb-3">Digital Motor Insurance Platform</p>
                <p className="text-slate-600 text-sm mb-4">
                  We developed this digital motor insurance platform for Med-Gen Insurance. Users can compare and buy comprehensive or third-party-only coverage online.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Instant online policy",
                    "IRA-compliant",
                    "M-Pesa payments",
                    "Digital certificates"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="https://motor.medgeninsurance.com/" target="_blank" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 text-sm">
                  Visit Wheelswise <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section bg="white" padding="lg">
        <SectionHeader
          title="Our Partners"
          subtitle="We collaborate with leading organizations to deliver exceptional outcomes."
        />
        <div className="mt-8 overflow-x-auto -mx-6 px-6 pb-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max [scroll-snap-type:xmandatory]">
            {/* Med-Gen Insurance Partner */}
            <Card className="min-w-[450px] max-w-[450px] h-full flex flex-col group hover:-translate-y-2 transition-all duration-300 scroll-snap-align:start overflow-hidden border border-slate-200">
              <div className="h-20 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden flex items-center justify-center">
                <HeartPulse className="w-12 h-12 text-white/50" />
              </div>
              <div className="p-6 flex-grow">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 text-xs font-bold rounded-full mb-2 border border-emerald-100">
                  Strategic Partner
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Med-Gen Insurance</h3>
                <p className="text-sm text-teal-700 font-medium mb-3">Comprehensive Insurance Solutions</p>
                <p className="text-slate-600 text-sm mb-4">
                  We partner with Med-Gen to deliver integrated insurance solutions. We also developed Wheelswise - their digital motor insurance platform.
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Medical & dental",
                    "Maternity & optical",
                    "Motor & property",
                    "Business & travel"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link href="https://main.d1x50suy4xsszw.amplifyapp.com/" target="_blank" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 text-sm">
                  Visit Med-Gen Insurance <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="teal-900" padding="lg">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-blue-900"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="bg-white text-teal-900 hover:bg-gray-100 hover:text-teal-900">
                  Book Your Free Consultation
                </Button>
              </Link>
              <Link href="tel:+254700000000">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-900">
                  Call Us: +254 705 385 894
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
