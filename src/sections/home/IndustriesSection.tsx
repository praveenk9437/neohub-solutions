"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Shield, TrendingUp, Factory, ShoppingBag, Building2, Zap, Cpu, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Shield, TrendingUp, Factory, ShoppingBag, Building2, Zap, Cpu,
};

export default function IndustriesSection() {
  const [active, setActive] = useState(0);
  const industry = industries[active];
  const Icon = iconMap[industry.icon] || Cpu;

  return (
    <section className="py-24 bg-neo-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Industries"
          title="Deep Domain Expertise Across "
          highlight="Key Sectors"
          description="We combine technology depth with industry-specific knowledge to deliver solutions that move the needle in your sector."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Industry Tabs */}
          <div className="space-y-2">
            {industries.map((ind, i) => {
              const IndIcon = iconMap[ind.icon] || Cpu;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActive(i)}
                  className={`w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                    active === i
                      ? "bg-neo-orange/10 border-neo-orange/30 text-neo-text"
                      : "border-neo-border bg-neo-card text-neo-muted hover:border-neo-border-light hover:text-neo-text"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${active === i ? "bg-neo-orange/20" : "bg-neo-surface"}`}>
                    <IndIcon className={`w-4 h-4 ${active === i ? "text-neo-orange" : "text-neo-subtle"}`} />
                  </div>
                  <span className="font-medium text-sm">{ind.name}</span>
                  {active === i && <ArrowRight className="w-4 h-4 text-neo-orange ml-auto" />}
                </button>
              );
            })}
          </div>

          {/* Industry Detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 glass rounded-2xl border border-neo-border p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center">
                <Icon className="w-7 h-7 text-neo-orange" />
              </div>
              <div>
                <h3 className="text-neo-text text-2xl font-bold">{industry.name}</h3>
                <p className="text-neo-subtle text-sm">Industry Solutions</p>
              </div>
            </div>
            <p className="text-neo-muted mb-8 leading-relaxed">{industry.description}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-neo-text font-semibold text-sm uppercase tracking-wider mb-3">Key Challenges</h4>
                <ul className="space-y-2">
                  {industry.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-neo-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-neo-orange mt-1.5 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-neo-text font-semibold text-sm uppercase tracking-wider mb-3">Our Solutions</h4>
                <ul className="space-y-2">
                  {industry.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-neo-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-neo-orange mt-1.5 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcomes */}
            <div className="mt-8 pt-6 border-t border-neo-border">
              <h4 className="text-neo-text font-semibold text-sm uppercase tracking-wider mb-4">Proven Outcomes</h4>
              <div className="flex flex-wrap gap-3">
                {industry.outcomes.map((outcome) => (
                  <span key={outcome} className="px-3 py-1.5 rounded-full glass-orange border border-neo-orange/20 text-neo-orange text-xs font-medium">
                    {outcome}
                  </span>
                ))}
              </div>
            </div>

            <a href={`/industries/#${industry.id}`} className="inline-flex items-center gap-2 mt-6 text-neo-orange text-sm font-medium hover:gap-3 transition-all duration-200">
              Explore {industry.name} Solutions <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
