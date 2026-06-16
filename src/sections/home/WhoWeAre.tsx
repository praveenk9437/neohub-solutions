"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const pillars = [
  "AI-first transformation partner",
  "Deep enterprise domain expertise",
  "Global delivery capability",
  "Outcome-driven engagements",
  "Proven technology partnerships",
  "Agile, iterative methodology",
];

const timeline = [
  { year: "2018", title: "Founded", description: "Established in Cary, NC as a technology consulting firm focused on enterprise transformation." },
  { year: "2020", title: "Cloud Practice", description: "Launched our Cloud Services practice, helping 50+ enterprises migrate to AWS, Azure, and GCP." },
  { year: "2021", title: "Data Excellence", description: "Built a world-class Data & Analytics practice with Snowflake and Databricks at the core." },
  { year: "2022", title: "AI Expansion", description: "Established our AI Center of Excellence to lead enterprise AI and ML transformation." },
  { year: "2024", title: "GenAI Leadership", description: "Launched our Generative AI practice, helping enterprises deploy production-grade GenAI solutions." },
  { year: "2025", title: "Global Growth", description: "Serving 200+ clients across 20+ countries with 500+ successfully delivered projects." },
];

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-neo-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-neo-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <SectionHeader
              badge="Who We Are"
              title="More Than a Consulting Firm — A "
              highlight="Transformation Partner"
              description="Neohub Solutions is a next-generation technology consulting firm helping enterprises harness the power of AI, Data, Cloud, and Digital Transformation to compete and win in the modern economy."
              align="left"
            />

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-10"
            >
              {pillars.map((pillar, i) => (
                <motion.li
                  key={pillar}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-neo-muted"
                >
                  <CheckCircle2 className="w-4 h-4 text-neo-orange flex-shrink-0" />
                  {pillar}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4"
            >
              <Button href="/about/" variant="primary">
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact/" variant="ghost">
                Talk to Us
              </Button>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neo-orange/30 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-3.5 top-1.5 w-5 h-5 rounded-full border-2 border-neo-orange bg-neo-dark flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neo-orange" />
                  </div>
                  <div className="text-neo-orange text-xs font-bold tracking-wider mb-1">{item.year}</div>
                  <div className="text-neo-text font-semibold mb-1">{item.title}</div>
                  <div className="text-neo-subtle text-sm leading-relaxed">{item.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
