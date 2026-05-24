"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
  asChild?: boolean;
}

type ButtonRef = HTMLButtonElement | HTMLAnchorElement | null;

const Button = React.forwardRef<ButtonRef, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, icon, asChild = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] shadow-sm";

    const variants = {
      primary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 hover:shadow-lg hover:shadow-slate-900/20",
      accent: "bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:from-teal-700 hover:to-blue-700 focus:ring-teal-600 hover:shadow-lg hover:shadow-teal-600/30",
      outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-slate-900",
      ghost: "text-slate-600 hover:text-teal-700 hover:bg-teal-50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-2",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-2",
    };

    if (asChild) {
      return (
        <Link
          href="#"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {!isLoading && icon && <span className="mr-2">{icon}</span>}
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
