import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Shield, Lightbulb, Users, Target, Clock, Award, CheckCircle, ArrowRight } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our engagements.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Excellence",
    description: "We pursue excellence in every aspect of our work and deliverables.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We embrace new ideas and technologies to create innovative solutions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaboration",
    description: "We believe in the power of partnership and teamwork.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Timeliness",
    description: "We respect our clients' time and deliver results on schedule.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Results-Driven",
    description: "We focus on delivering measurable, tangible results.",
  },
];

const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Clients Served", value: "3" },
  { label: "Projects Completed", value: "3" },
  { label: "Success Rate", value: "98%" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            About Ingenium
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Ingenium
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We design ingenious solutions that remove long-standing barriers and make services more accessible, inclusive, and easy to use for everyone.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Our Story"
            subtitle="Founded in 2023, Ingenium has grown from a small group of passionate consultants to a leading consulting firm serving clients across multiple industries."
            align="left"
          />
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              What began as a boutique consulting practice has evolved into a trusted partner for organizations seeking to navigate today's complex business landscape. Our journey started with a simple mission: to remove barriers and make services accessible, inclusive, and easy to use for everyone.
            </p>
            <p>
              Over the past 3 years, we've worked with companies of all sizes - from enterprises to fast-growing startups - helping them overcome challenges, seize opportunities, and build more inclusive systems. Our deep industry knowledge, combined with our commitment to accessibility and inclusion, has made us a preferred consulting partner for many organizations.
            </p>
            <p>
              Today, we continue to push the boundaries of what's possible in business consulting, leveraging the latest technologies and methodologies to create solutions that work for everyone.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section bg="gray" padding="lg">
        <div className="max-w-6xl mx-auto">
          <Grid columns={4} gap="md">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </Grid>
        </div>
      </Section>

      {/* Values Section */}
      <Section bg="white" padding="lg">
        <SectionHeader
          title="Our Core Values"
          subtitle="These values guide everything we do and define the way we work with our clients and each other."
        />
        <Grid columns={3}>
          {values.map((value, idx) => (
            <Card key={idx} className="text-center h-full hover:border-teal-200">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl flex items-center justify-center text-teal-700 mx-auto mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-teal-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Schedule a free initial consultation to discuss your business needs and how we can help you achieve your goals.
          </p>
          <Link href="/contact">
            <Button variant="accent" size="lg" icon={<Lightbulb className="w-5 h-5" />}>
              Book Your Free Consultation
            </Button>
          </Link>
        </div>
      </Section>


    </div>
  );
}
