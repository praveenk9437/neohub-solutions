"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Services", href: "/services/", hasDropdown: true },
  { label: "Industries", href: "/industries/" },
  { label: "About", href: "/about/" },
  { label: "Insights", href: "/insights/" },
  { label: "Careers", href: "/careers/" },
];

const serviceDropdown = [
  { label: "AI & Generative AI", href: "/services/#ai-genai" },
  { label: "Data & Analytics", href: "/services/#data-analytics" },
  { label: "Cloud Services", href: "/services/#cloud-services" },
  { label: "Enterprise Applications", href: "/services/#enterprise-apps" },
  { label: "Digital Transformation", href: "/services/#digital-transformation" },
  { label: "Managed Services", href: "/services/#managed-services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-neo-black/95 backdrop-blur-xl border-b border-neo-border shadow-xl"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-neo-orange flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(232,103,58,0.6)] transition-all duration-300">
                <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: "serif" }}>N</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-neo-text font-bold text-lg tracking-wide">NEOHUB</span>
              <span className="text-neo-orange font-light text-xs tracking-[0.2em] block -mt-0.5">SOLUTIONS</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-neo-muted hover:text-neo-text transition-colors duration-200 text-sm font-medium"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-neo-muted hover:text-neo-text transition-colors duration-200 text-sm font-medium block"
                  >
                    {item.label}
                  </a>
                )}

                {item.hasDropdown && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 w-56 glass border border-neo-border rounded-xl p-2 transition-all duration-200",
                      dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {serviceDropdown.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="block px-3 py-2 text-sm text-neo-muted hover:text-neo-text hover:bg-neo-surface rounded-lg transition-all duration-150"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button href="/contact/" size="sm" className="hidden lg:inline-flex">
              Schedule Consultation
            </Button>
            <button
              className="lg:hidden p-2 text-neo-muted hover:text-neo-text transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-neo-dark border-t border-neo-border"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-neo-muted hover:text-neo-text hover:bg-neo-surface rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-neo-border">
                <Button href="/contact/" className="w-full justify-center mt-2">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
