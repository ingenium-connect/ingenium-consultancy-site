/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const metadata: Metadata = {
  title: {
    default: "Ingenium | Business Consulting & Digital Transformation",
    template: "%s | Ingenium",
  },
  description: "Empowering businesses and transforming industries through tailored, data-driven solutions. Expert business strategy, digital transformation, and process optimization for enterprises and SMEs.",
  keywords: [
    "business consulting",
    "digital transformation",
    "data-driven strategy",
    "process optimization",
    "insurance consulting",
    "healthcare consulting",
    "enterprise strategy",
  ],
  authors: [{ name: "Ingenium" }],
  openGraph: {
    title: "Ingenium | Business Consulting & Digital Transformation",
    description: "Empowering businesses through tailored, data-driven solutions.",
    type: "website",
    locale: "en_US",
    url: "https://Ingeniumconnect.com",
    images: [
      {
        url: "https://Ingeniumconnect.com/logo.png",
        width: 2271,
        height: 1134,
        alt: "Ingenium Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingenium | Business Consulting",
    description: "Transforming industries with data-driven strategies.",
    images: ["https://Ingeniumconnect.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://Ingeniumconnect.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
