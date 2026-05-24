import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "gray" | "dark" | "teal-900";
  padding?: "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  id,
  bg = "white",
  padding = "lg",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-slate-900 text-white",
    "teal-900": "bg-teal-900 text-white",
  };

  const paddingClasses = {
    sm: "py-16",
    md: "py-20 lg:py-24",
    lg: "py-24 lg:py-32",
  };

  return (
    <section
      id={id}
      className={cn(
        bgClasses[bg],
        paddingClasses[padding],
        "relative overflow-hidden",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {children}
      </div>
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
    </section>
  );
}

Section.displayName = "Section";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold tracking-wider uppercase border border-teal-100">
        <span className="w-2 h-2 rounded-full bg-teal-500"></span>
        Excellence
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {/* Decorative divider */}
      <div className={cn("mt-8 h-1 w-24 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full", align === "left" ? "ml-0" : "mx-auto")}></div>
    </div>
  );
}

SectionHeader.displayName = "SectionHeader";

interface GridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function Grid({
  children,
  columns = 3,
  gap = "lg",
  className,
}: GridProps) {
  const columnsClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-6",
    md: "gap-8",
    lg: "gap-12",
  };

  return (
    <div className={cn("grid", columnsClasses[columns], gapClasses[gap], className)}>
      {children}
    </div>
  );
}

Grid.displayName = "Grid";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "default" | "accent" | "outline";
}

export function Card({ children, className, hover = true, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-white border-gray-100",
    accent: "bg-gradient-to-br from-gray-50 to-white border-teal-50",
    outline: "bg-white border-2 border-gray-200",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variants[variant],
        hover && "hover:-translate-y-2 hover:shadow-xl hover:border-teal-200",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.displayName = "Card";
