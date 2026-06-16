"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, ArrowRight, TrendingUp, Heart, BookOpen, Globe, Coffee, Users, Lightbulb, Star, Shield } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";
import CTASection from "@/sections/home/CTASection";
import { openPositions, benefits, values } from "@/data/careers";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  TrendingUp, Heart, BookOpen, Globe, Coffee, Users, Lightbulb, Star, Shield,
};

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const depts = ["All", ...Array.from(new Set(openPositions.map((p) => p.department)))];
  const filtered = selectedDept === "All" ? openPositions : openPositions.filter((p) => p.department === selectedDept);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
              <span className="text-neo-orange text-sm font-medium uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6 leading-tight">
              Build the Future of
              <br />
              <span className="gradient-text">Enterprise Technology</span>
            </h1>
            <p className="text-neo-muted text-xl max-w-2xl leading-relaxed mb-8">
              Join a team of world-class technologists and consultants who are redefining what's possible in AI, Data, Cloud, and Digital Transformation.
            </p>
            <div className="flex gap-4">
              <Button href="#open-positions">View Open Positions</Button>
              <Button href="/contact/" variant="secondary">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Why Neohub" title="Why the Best " highlight="Choose Neohub" description="We've built a culture where exceptional people do exceptional work — supported by the resources, mentorship, and opportunities to thrive." className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon] || Star;
              return (
                <GlowCard key={benefit.title} delay={i * 0.08} className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neo-orange" />
                  </div>
                  <h3 className="text-neo-text font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-neo-muted text-sm leading-relaxed">{benefit.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture / Values */}
      <section className="py-20 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Culture" title="Values We Live " highlight="Every Day" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, i) => {
              const Icon = iconMap[val.icon] || Star;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center p-6 glass rounded-xl border border-neo-border hover:border-neo-orange/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-neo-orange" />
                  </div>
                  <h4 className="text-neo-text font-semibold mb-2">{val.title}</h4>
                  <p className="text-neo-subtle text-xs leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-neo-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Open Roles" title="Current " highlight="Openings" className="mb-8" />

          {/* Dept filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {depts.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedDept === dept
                    ? "bg-neo-orange text-white"
                    : "glass border border-neo-border text-neo-muted hover:border-neo-orange/40 hover:text-neo-text"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {filtered.map((position, i) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl border border-neo-border p-6 hover:border-neo-orange/30 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-neo-text font-bold text-lg">{position.title}</h3>
                      <span className="text-xs font-medium text-neo-orange bg-neo-orange/10 border border-neo-orange/20 px-2.5 py-0.5 rounded-full">New</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-neo-muted mb-3">
                      <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" />{position.department}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{position.location}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{position.type}</span>
                    </div>
                    <p className="text-neo-subtle text-sm">{position.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="/contact/"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neo-orange text-white rounded-lg font-medium text-sm hover:bg-neo-orange-600 transition-colors group-hover:shadow-[0_0_20px_rgba(232,103,58,0.3)]"
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12 text-neo-muted">No positions available in this department currently.</div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
