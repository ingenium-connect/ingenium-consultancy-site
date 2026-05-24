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
      className={cn(bgClasses[bg], paddingClasses[padding], className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
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
    <div className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
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
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 shadow-sm border border-gray-100",
        hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-100",
        className
      )}
    >
      {children}
    </div>
  );
}

Card.displayName = "Card";
