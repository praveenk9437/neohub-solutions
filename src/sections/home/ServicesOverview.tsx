"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Cloud, Layers, Zap, Shield, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import { serviceCategories } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, BarChart3, Cloud, Layers, Zap, Shield,
};

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-neo-black relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-orange opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neo-orange/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Services"
          title="End-to-End Technology "
          highlight="Transformation"
          description="From AI strategy to cloud modernization, we deliver comprehensive solutions that drive real business outcomes across the enterprise."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, i) => {
            const Icon = iconMap[category.icon] || Brain;
            return (
              <GlowCard key={category.id} delay={i * 0.08} className="p-6 group cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neo-orange/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neo-orange" />
                  </div>
                  <div>
                    <h3 className="text-neo-text font-semibold text-lg mb-1">{category.title}</h3>
                    <p className="text-neo-subtle text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {category.services.slice(0, 4).map((service) => (
                    <li key={service.name} className="flex items-center gap-2 text-sm text-neo-muted">
                      <div className="w-1 h-1 rounded-full bg-neo-orange flex-shrink-0" />
                      {service.name}
                    </li>
                  ))}
                  {category.services.length > 4 && (
                    <li className="text-neo-subtle text-xs pl-3">
                      +{category.services.length - 4} more
                    </li>
                  )}
                </ul>
                <a
                  href={`/services/#${category.id}`}
                  className="inline-flex items-center gap-1.5 text-neo-orange text-sm font-medium hover:gap-2.5 transition-all duration-200 group-hover:text-neo-orange-300"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </GlowCard>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/services/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-neo-orange/30 text-neo-orange font-medium hover:bg-neo-orange hover:text-white transition-all duration-300 group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
