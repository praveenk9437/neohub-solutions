"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Star, Shield, Users, CheckCircle2, Globe2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlowCard from "@/components/ui/GlowCard";
import Button from "@/components/ui/Button";
import CTASection from "@/sections/home/CTASection";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace emerging technologies and challenge conventional thinking to create breakthrough solutions." },
  { icon: Star, title: "Excellence", description: "We hold ourselves to the highest standards in every engagement, delivering quality that exceeds expectations." },
  { icon: Shield, title: "Integrity", description: "We build lasting relationships through transparency, honesty, and unwavering ethical practices." },
  { icon: Users, title: "Collaboration", description: "We believe the best outcomes emerge from diverse, inclusive teams working together with purpose." },
  { icon: CheckCircle2, title: "Customer Success", description: "Our clients' success is our success. We're invested in your outcomes, not just project delivery." },
];

const leadership = [
  { name: "Sandeep Surapaneni", title: "Chief Executive Officer", bio: "20+ years leading enterprise technology transformations across Fortune 500 companies." },
  { name: "Sarah Chen", title: "Chief Technology Officer", bio: "Former AWS Principal Architect. Pioneering AI and cloud-native architectures at enterprise scale." },
  { name: "Michael Rodriguez", title: "Chief Data Officer", bio: "Built data platforms for 3 unicorn startups. Expert in modern data stack and AI/ML platforms." },
  { name: "Priya Patel", title: "VP, Delivery Excellence", bio: "15+ years delivering complex enterprise programs on time, on budget, and beyond expectations." },
];

const globalOffices = [
  { city: "Cary, NC", country: "United States", type: "Headquarters", flag: "🇺🇸" },
  { city: "Hyderabad", country: "India", type: "Global Delivery Center", flag: "🇮🇳" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange" />
              <span className="text-neo-orange text-sm font-medium tracking-wider uppercase">About Neohub Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6 leading-tight">
              We Are a <span className="gradient-text">Next-Generation</span>
              <br />Technology Partner
            </h1>
            <p className="text-neo-muted text-xl leading-relaxed max-w-2xl">
              Founded in Cary, NC, Neohub Solutions was built on a simple premise: enterprises deserve a technology partner that combines deep expertise with genuine innovation — one that's as invested in your success as you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <GlowCard className="p-8">
              <div className="w-14 h-14 rounded-xl bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-neo-orange" />
              </div>
              <h3 className="text-neo-text text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neo-muted leading-relaxed text-lg">
                To help organizations unlock the full potential of AI, Data, Cloud, and Digital Transformation — delivering solutions that create lasting competitive advantage and measurable business value.
              </p>
            </GlowCard>
            <GlowCard className="p-8" delay={0.1}>
              <div className="w-14 h-14 rounded-xl bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-neo-orange" />
              </div>
              <h3 className="text-neo-text text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-neo-muted leading-relaxed text-lg">
                To become the most trusted global technology transformation partner — known for our integrity, innovation, and the measurable impact we create for every client we serve.
              </p>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Core Values" title="The Principles That " highlight="Guide Us" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <GlowCard key={value.title} delay={i * 0.08} className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-neo-orange" />
                  </div>
                  <h4 className="text-neo-text font-semibold mb-2">{value.title}</h4>
                  <p className="text-neo-subtle text-sm leading-relaxed">{value.description}</p>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-neo-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Leadership" title="Led by " highlight="Visionary Practitioners" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, i) => (
              <GlowCard key={leader.name} delay={i * 0.1} className="p-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neo-orange to-neo-orange-700 mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{leader.name.charAt(0)}</span>
                </div>
                <h4 className="text-neo-text font-bold text-lg mb-1">{leader.name}</h4>
                <div className="text-neo-orange text-sm font-medium mb-3">{leader.title}</div>
                <p className="text-neo-subtle text-sm leading-relaxed">{leader.bio}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Global Delivery */}
      <section className="py-20 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Global Presence" title="A Truly " highlight="Global Delivery Model" description="We serve clients across the US and India with delivery centers strategically positioned to provide round-the-clock support and expertise." className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalOffices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl border border-neo-border p-6 text-center hover:border-neo-orange/30 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{office.flag}</div>
                <h4 className="text-neo-text font-bold text-lg">{office.city}</h4>
                <div className="text-neo-muted text-sm mb-2">{office.country}</div>
                <span className="text-neo-orange text-xs font-medium bg-neo-orange/10 px-3 py-1 rounded-full">{office.type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
