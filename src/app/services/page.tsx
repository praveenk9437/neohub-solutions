"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Cloud, Layers, Zap, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";
import CTASection from "@/sections/home/CTASection";
import { serviceCategories, methodologySteps } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, BarChart3, Cloud, Layers, Zap, Shield,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-neo-orange/6 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
              <span className="text-neo-orange text-sm font-medium uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6">
              Enterprise Technology <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-neo-muted text-xl max-w-3xl mx-auto leading-relaxed">
              From AI strategy to cloud transformation, we deliver end-to-end technology services that create lasting competitive advantage for enterprise organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIdx) => {
        const Icon = iconMap[category.icon] || Brain;
        return (
          <section
            key={category.id}
            id={category.id}
            className={`py-20 ${catIdx % 2 === 0 ? "bg-neo-dark" : "bg-neo-surface"} relative overflow-hidden`}
          >
            <div className="absolute inset-0 grid-bg opacity-15" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Category Header */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-neo-orange" />
                      </div>
                      <div>
                        <div className="text-neo-orange text-sm font-bold tracking-wider uppercase mb-1">Practice {catIdx + 1}</div>
                        <h2 className="text-neo-text text-3xl font-bold">{category.title}</h2>
                      </div>
                    </div>
                    <p className="text-neo-muted text-lg leading-relaxed mb-8">{category.description}</p>
                    <Button href="/contact/" size="md">
                      Explore {category.title}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>

                {/* Right: Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.services.map((service, i) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="p-4 rounded-xl border border-neo-border bg-neo-card hover:border-neo-orange/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-neo-orange mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-neo-text font-semibold text-sm mb-1">{service.name}</div>
                          <div className="text-neo-subtle text-xs leading-relaxed">{service.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Methodology */}
      <section className="py-20 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Our Approach" title="A Proven Delivery " highlight="Methodology" description="Every engagement follows our battle-tested 6-phase framework, ensuring predictable delivery and measurable outcomes." className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methodologySteps.map((step, i) => (
              <GlowCard key={step.step} delay={i * 0.08} className="p-6">
                <div className="text-neo-orange text-5xl font-black mb-4 opacity-30">{step.step}</div>
                <h3 className="text-neo-text font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-neo-muted text-sm leading-relaxed">{step.description}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
