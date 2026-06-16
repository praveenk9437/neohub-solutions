"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neo-orange/50 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-neo-orange text-white hover:bg-neo-orange-600 hover:shadow-[0_0_30px_rgba(232,103,58,0.4)] active:scale-95",
      secondary: "glass border border-neo-border text-neo-text hover:border-neo-orange/40 hover:bg-neo-card active:scale-95",
      ghost: "text-neo-muted hover:text-neo-orange hover:bg-neo-orange/10 active:scale-95",
      outline: "border border-neo-orange text-neo-orange hover:bg-neo-orange hover:text-white active:scale-95",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    if (href) {
      return (
        <a href={href} className={cn(base, variants[variant], sizes[size], className)}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
