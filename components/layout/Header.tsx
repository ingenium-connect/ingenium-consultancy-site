"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  // { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg shadow-slate-200/50 py-3" : "bg-white py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden shadow-lg shadow-teal-600/20 group-hover:shadow-xl transition-all duration-300">
              <Image src="/logo.svg" alt="Ingenium" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" width={40} height={40} />
            </div>
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Ingenium</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-slate-900 hover:text-teal-700 transition-colors">
              Book Consultation
            </Link>
            <Button size="sm" variant="accent" icon={<ArrowRight className="w-4 h-4" />}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl shadow-slate-200/50 animate-fade-in">
          <nav className="px-4 py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-base font-medium text-slate-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Link>
              <Button className="w-full" variant="accent" icon={<ArrowRight className="w-4 h-4" />}>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
