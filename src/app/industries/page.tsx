"use client";

import { motion } from "framer-motion";
import { Heart, Shield, TrendingUp, Factory, ShoppingBag, Building2, Zap, Cpu, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";
import CTASection from "@/sections/home/CTASection";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Shield, TrendingUp, Factory, ShoppingBag, Building2, Zap, Cpu,
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-neo-orange/6 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
              <span className="text-neo-orange text-sm font-medium uppercase tracking-wider">Industries</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6">
              Industry-Specific <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-neo-muted text-xl max-w-3xl mx-auto leading-relaxed">
              Deep domain expertise combined with cutting-edge technology — we understand your industry challenges and deliver solutions that create real competitive advantage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid Overview */}
      <section className="py-16 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Cpu;
              return (
                <motion.a
                  key={ind.id}
                  href={`#${ind.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex flex-col items-center gap-3 p-5 glass rounded-xl border border-neo-border hover:border-neo-orange/40 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-neo-orange/10 flex items-center justify-center group-hover:bg-neo-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-neo-orange" />
                  </div>
                  <span className="text-neo-muted text-sm font-medium group-hover:text-neo-text transition-colors">{ind.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Individual Industry Sections */}
      {industries.map((industry, idx) => {
        const Icon = iconMap[industry.icon] || Cpu;
        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`py-20 ${idx % 2 === 0 ? "bg-neo-black" : "bg-neo-surface"} relative overflow-hidden`}
          >
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-5 mb-10"
              >
                <div className="w-16 h-16 rounded-2xl bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 text-neo-orange" />
                </div>
                <div>
                  <div className="text-neo-orange text-xs font-bold tracking-wider uppercase mb-1">Industry Solutions</div>
                  <h2 className="text-3xl font-bold text-neo-text">{industry.name}</h2>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neo-muted text-lg leading-relaxed mb-12 max-w-3xl"
              >
                {industry.description}
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenges */}
                <GlowCard className="p-6">
                  <h3 className="text-neo-text font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-2 h-5 rounded-full bg-neo-orange" />
                    Key Challenges
                  </h3>
                  <ul className="space-y-3">
                    {industry.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-sm text-neo-muted">
                        <ArrowRight className="w-4 h-4 text-neo-orange mt-0.5 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </GlowCard>

                {/* Solutions */}
                <GlowCard className="p-6" delay={0.1}>
                  <h3 className="text-neo-text font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-2 h-5 rounded-full bg-neo-orange" />
                    Our Solutions
                  </h3>
                  <ul className="space-y-3">
                    {industry.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-3 text-sm text-neo-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-neo-orange mt-1.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </GlowCard>

                {/* Outcomes */}
                <GlowCard className="p-6" delay={0.2}>
                  <h3 className="text-neo-text font-bold text-lg mb-4 flex items-center gap-2">
                    <div className="w-2 h-5 rounded-full bg-neo-orange" />
                    Proven Outcomes
                  </h3>
                  <ul className="space-y-4">
                    {industry.outcomes.map((o) => (
                      <li key={o} className="flex items-center gap-3 text-sm font-medium text-neo-orange bg-neo-orange/10 border border-neo-orange/20 rounded-lg px-4 py-2.5">
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact/" size="sm" className="mt-6 w-full justify-center">
                    Explore Solutions
                  </Button>
                </GlowCard>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
