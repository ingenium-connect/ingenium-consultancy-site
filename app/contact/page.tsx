import { Header } from "@/components/layout";
import { Section, SectionHeader, Grid, Card } from "@/components/ui";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Target, Lightbulb, Users, Shield, CheckCircle, Clock, Award, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

const formFields = [
  { id: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
  { id: "email", label: "Email Address", type: "email", placeholder: "john@company.com" },
  { id: "company", label: "Company Name", type: "text", placeholder: "Your Company Inc." },
  { id: "phone", label: "Phone Number", type: "tel", placeholder: "+1 (555) 000-0000" },
  { id: "service", label: "Service Needed", type: "select", options: ["Business Strategy", "Digital Transformation", "Data & Analytics", "Process Optimization", "Other"] },
  { id: "message", label: "Message", type: "textarea", placeholder: "Tell us about your needs..." },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <Section bg="white" padding="lg" className="pt-32 lg:pt-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full text-teal-700 text-sm font-medium border border-teal-100 mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></span>
            Connect With Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Connect With Us
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to make services more accessible across Africa? Schedule a free consultation with our Nairobi-based experts today.
          </p>
        </div>
      </Section>

      <Section bg="white" padding="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <SectionHeader
                title="Send Us a Message"
                subtitle="Fill out the form below and our team will get back to you within 24 hours."
                align="left"
              />
              <Card>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="input-field"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="input-field"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-700">
                        Company Name *
                      </label>
                      <input
                        id="company"
                        type="text"
                        className="input-field"
                        placeholder="Your Company Inc."
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="input-field"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">
                      Service Needed
                    </label>
                    <select id="service" className="input-field">
                      <option value="">Select a service</option>
                      <option value="strategy">Business Strategy</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="analytics">Data & Analytics</option>
                      <option value="optimization">Process Optimization</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      className="textarea-field"
                      placeholder="Tell us about your needs..."
                      required
                    ></textarea>
                  </div>
                  <Button size="lg" className="w-full" icon={<Send className="w-5 h-5" />}>
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <SectionHeader
                title="Contact Information"
                subtitle="Have questions? We're here to help. Reach out through any of these channels."
                align="left"
              />

              {/* Office Info */}
              <div className="space-y-6">
                <Card className="hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">Our Nairobi Office</h3>
                      <p className="text-slate-600 mb-1">
                        Ushirika Road, Karen
                      </p>
                      <p className="text-slate-600 mb-2">Nairobi, Kenya</p>
                      <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        Open Monday-Friday, 8am-5pm EAT
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Methods */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-slate-500">Email Us</p>
                      <a href="mailto:inquiries@ingeniumct.com" className="text-slate-900 font-medium hover:text-teal-600 transition-colors break-all">
                        inquiries@ingeniumct.com
                      </a>
                    </div>
                  </div>
                </Card>
                <Card className="hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Call Us</p>
                      <p className="text-slate-900 font-medium">+254 705 385 894</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Quick Links</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full justify-start">
                      Book a Consultation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full justify-start">
                      View Services
                    </Button>
                  </Link>
                  <Link href="/insights">
                    <Button variant="outline" className="w-full justify-start">
                      Read Our Blog
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/5"></div>
                <div className="relative z-10 text-slate-500">
                  <MapPin className="w-12 h-12 mb-4 mx-auto opacity-50" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Ushirika Road, Karen, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section bg="gray" padding="lg">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about our consulting services and process."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              question: "How much do your services cost?",
              answer: "Our pricing varies based on the scope and complexity of your project. We offer customized solutions tailored to your specific needs and budget. Contact us for a personalized quote.",
            },
            {
              question: "How long does a typical engagement last?",
              answer: "Engagement lengths vary depending on the scope. Strategy projects typically last 4-8 weeks, while implementation projects may range from 3-12 months.",
            },
            {
              question: "Do you work with startups and SMEs?",
              answer: "Yes! We offer specialized consulting packages designed for startups and small to medium-sized enterprises, making our expertise accessible to organizations of all sizes.",
            },
            {
              question: "What industries do you serve?",
              answer: "We serve a wide range of industries including Financial Services, Healthcare, Agribusiness, and Telecom & Tech across Africa. Our industry-specific expertise ensures tailored solutions for the East African market.",
            },
          ].map((faq, idx) => (
            <Card key={idx} className="hover:border-teal-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5 text-teal-600" />
                {faq.question}
              </h3>
              <p className="text-slate-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="white" padding="lg">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center border border-teal-100">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your free initial consultation and let's discuss how we can help you achieve your goals.
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
