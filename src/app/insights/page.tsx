"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import CTASection from "@/sections/home/CTASection";
import { insights, categories } from "@/data/insights";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = insights.filter((insight) => {
    const matchesCategory = activeCategory === "All" || insight.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((i) => i.featured);
  const rest = filtered.filter((i) => !i.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
              <span className="text-neo-orange text-sm font-medium uppercase tracking-wider">Insights & Perspectives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6">
              AI, Data & Cloud <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-neo-muted text-xl max-w-2xl mx-auto mb-8">
              Executive-level perspectives on AI, cloud, data, and digital transformation from our practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-neo-dark border-b border-neo-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neo-subtle" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neo-surface border border-neo-border rounded-lg pl-10 pr-4 py-2.5 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors"
              />
            </div>

            {/* Category filters */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-neo-orange text-white"
                      : "bg-neo-surface border border-neo-border text-neo-muted hover:border-neo-orange/40 hover:text-neo-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-neo-muted">No insights found matching your search.</div>
          ) : (
            <>
              {/* Featured */}
              {featured.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-neo-text font-bold text-xl mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-neo-orange rounded-full" />
                    Featured
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {featured.map((insight, i) => (
                      <GlowCard key={insight.id} delay={i * 0.1} className="p-6 cursor-pointer">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-bold text-neo-orange bg-neo-orange/10 border border-neo-orange/20 px-2.5 py-1 rounded-full">{insight.category}</span>
                          <span className="text-neo-subtle text-xs">{insight.date}</span>
                        </div>
                        <h3 className="text-neo-text font-bold text-xl mb-3 leading-tight hover:text-neo-orange transition-colors">
                          {insight.title}
                        </h3>
                        <p className="text-neo-muted text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-neo-subtle text-xs">
                            <Clock className="w-3 h-3" />
                            {insight.readTime}
                          </div>
                          <a href={`/insights/${insight.slug}/`} className="inline-flex items-center gap-1.5 text-neo-orange text-sm font-medium hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </GlowCard>
                    ))}
                  </div>
                </div>
              )}

              {/* Rest */}
              {rest.length > 0 && (
                <div>
                  <h2 className="text-neo-text font-bold text-xl mb-6 flex items-center gap-2">
                    <div className="w-1 h-6 bg-neo-orange rounded-full" />
                    All Insights
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((insight, i) => (
                      <GlowCard key={insight.id} delay={i * 0.06} className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-neo-orange bg-neo-orange/10 border border-neo-orange/20 px-2.5 py-1 rounded-full">{insight.category}</span>
                        </div>
                        <h3 className="text-neo-text font-bold text-base mb-2 leading-snug">{insight.title}</h3>
                        <p className="text-neo-subtle text-sm leading-relaxed mb-4 line-clamp-2">{insight.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {insight.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1 text-neo-subtle text-xs">
                              <Tag className="w-2.5 h-2.5" />{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-neo-border">
                          <span className="text-neo-subtle text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" />{insight.readTime}
                          </span>
                          <a href={`/insights/${insight.slug}/`} className="text-neo-orange text-xs font-medium hover:underline flex items-center gap-1">
                            Read <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </GlowCard>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
