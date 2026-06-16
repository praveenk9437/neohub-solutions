"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const partners = [
  { name: "Oracle", abbr: "ORC", color: "#FF0000" },
  { name: "Microsoft", abbr: "MS", color: "#00A4EF" },
  { name: "AWS", abbr: "AWS", color: "#FF9900" },
  { name: "Google Cloud", abbr: "GCP", color: "#4285F4" },
  { name: "Snowflake", abbr: "SF", color: "#29B5E8" },
  { name: "Databricks", abbr: "DB", color: "#FF3621" },
  { name: "Salesforce", abbr: "SFD", color: "#00A1E0" },
  { name: "ServiceNow", abbr: "SN", color: "#62D84E" },
  { name: "Workato", abbr: "WRK", color: "#5A67D8" },
  { name: "MuleSoft", abbr: "MS", color: "#00B3E6" },
];

export default function TechEcosystem() {
  return (
    <section className="py-24 bg-neo-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,103,58,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Technology Ecosystem"
          title="Powered by Industry-Leading "
          highlight="Technology Partners"
          description="We deliver value through deep partnerships with the world's leading cloud, data, and enterprise technology platforms."
          className="mb-16"
        />

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl border border-neo-border p-5 text-center hover:border-neo-orange/30 transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: partner.color + "22", color: partner.color, border: `1px solid ${partner.color}44` }}
              >
                {partner.abbr}
              </div>
              <div className="text-neo-muted text-xs font-medium group-hover:text-neo-text transition-colors">{partner.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Partner tier labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { tier: "Elite Partner", desc: "Oracle, Microsoft, AWS", count: "3" },
            { tier: "Premier Partner", desc: "Snowflake, Databricks, Google Cloud", count: "3" },
            { tier: "Certified Partner", desc: "Salesforce, ServiceNow, MuleSoft, Workato", count: "4+" },
          ].map((item) => (
            <div key={item.tier} className="text-center p-6 glass rounded-xl border border-neo-border hover:border-neo-orange/20 transition-all duration-300">
              <div className="text-3xl font-bold text-neo-orange mb-1">{item.count}</div>
              <div className="text-neo-text font-semibold mb-1">{item.tier}</div>
              <div className="text-neo-subtle text-sm">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
