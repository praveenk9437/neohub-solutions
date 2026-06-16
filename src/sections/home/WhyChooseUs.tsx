"use client";

import { motion } from "framer-motion";
import { Award, Bot, Globe2, Network, IterationCcw, Target } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const differentiators = [
  {
    icon: Award,
    title: "Deep Industry Expertise",
    description: "Our consultants bring 10–20+ years of domain experience across Healthcare, Finance, Manufacturing, and beyond.",
    stat: "8+ Industries",
  },
  {
    icon: Bot,
    title: "AI-Driven Innovation",
    description: "We embed AI into every engagement — from strategy through execution — to deliver smarter, faster, and more impactful outcomes.",
    stat: "AI-First Approach",
  },
  {
    icon: Globe2,
    title: "Enterprise Scale Delivery",
    description: "Battle-tested delivery frameworks that scale from pilot to enterprise-wide transformation with predictable outcomes.",
    stat: "50+ Projects",
  },
  {
    icon: Network,
    title: "Global Talent Network",
    description: "Access to a curated network of elite technology practitioners across North America, Europe, and Asia-Pacific.",
    stat: "5+ Countries",
  },
  {
    icon: IterationCcw,
    title: "Agile Methodology",
    description: "Iterative, sprint-based delivery with continuous stakeholder alignment and rapid value realization.",
    stat: "2-Week Sprints",
  },
  {
    icon: Target,
    title: "Measurable Outcomes",
    description: "We define, track, and deliver against clear business KPIs — our success is measured by your ROI, not project completion.",
    stat: "ROI-Focused",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neo-black relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-orange opacity-20" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-neo-orange/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Neohub"
          title="What Makes Us "
          highlight="Different"
          description="We're not a typical consulting firm. We bring the rigor of enterprise consulting with the agility and innovation mindset of a technology startup."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative p-6 rounded-xl border border-neo-border bg-neo-card hover:border-neo-orange/30 transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neo-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neo-orange" />
                    </div>
                    <span className="text-xs font-bold text-neo-orange bg-neo-orange/10 px-2.5 py-1 rounded-full border border-neo-orange/20">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="text-neo-text font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-neo-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
