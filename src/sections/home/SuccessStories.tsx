"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const caseStudies = [
  {
    industry: "Healthcare",
    company: "Regional Health System",
    challenge: "Fragmented patient data across 12 legacy systems preventing real-time clinical insights.",
    solution: "Deployed a unified healthcare data platform on Snowflake with AI-powered predictive analytics.",
    results: ["40% reduction in readmission rates", "60% faster care coordination", "$8M annual cost savings"],
    color: "#E8673A",
  },
  {
    industry: "Insurance",
    company: "National Insurance Carrier",
    challenge: "Manual claims processing causing 45-day cycle times and 12% fraud loss rates.",
    solution: "Built an AI-powered claims automation platform with ML-based fraud detection.",
    results: ["85% reduction in processing time", "35% improvement in fraud detection", "$15M saved annually"],
    color: "#E8673A",
  },
  {
    industry: "Financial Services",
    company: "Regional Banking Group",
    challenge: "Legacy core banking system hindering digital product innovation and cloud adoption.",
    solution: "Executed cloud-native migration to AWS with modern microservices architecture.",
    results: ["3x faster product launches", "99.99% system uptime", "40% infrastructure cost reduction"],
    color: "#E8673A",
  },
  {
    industry: "Manufacturing",
    company: "Industrial Equipment Maker",
    challenge: "Unplanned downtime costing $2M/month across 8 manufacturing facilities.",
    solution: "Implemented IoT-driven predictive maintenance with Azure ML and real-time dashboards.",
    results: ["30% reduction in downtime", "25% improvement in OEE", "$18M annual savings"],
    color: "#E8673A",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-neo-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-neo-orange/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Success Stories"
          title="Proven Results, Real "
          highlight="Business Impact"
          description="Our work speaks for itself. Here's a sample of the transformation outcomes we've delivered for enterprise clients."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.industry + cs.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl border border-neo-border p-8 hover:border-neo-orange/30 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-neo-orange text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-neo-orange/10 border border-neo-orange/20">
                    {cs.industry}
                  </span>
                  <h3 className="text-neo-text font-semibold text-lg mt-3">{cs.company}</h3>
                </div>
                <TrendingUp className="w-8 h-8 text-neo-orange/40 group-hover:text-neo-orange transition-colors duration-300" />
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <div className="text-neo-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">The Challenge</div>
                <p className="text-neo-muted text-sm leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <div className="text-neo-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">Our Solution</div>
                <p className="text-neo-muted text-sm leading-relaxed">{cs.solution}</p>
              </div>

              {/* Results */}
              <div className="pt-6 border-t border-neo-border">
                <div className="text-neo-text text-xs font-semibold uppercase tracking-wider mb-3">Results Delivered</div>
                <ul className="space-y-2">
                  {cs.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-neo-orange flex-shrink-0" />
                      <span className="text-neo-orange font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/industries/"
            className="inline-flex items-center gap-2 text-neo-orange font-medium hover:gap-3 transition-all duration-200"
          >
            Explore All Industry Solutions <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
