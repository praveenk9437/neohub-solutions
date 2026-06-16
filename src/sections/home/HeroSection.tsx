"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neo-black">
      {/* Background layers */}
      <div className="absolute inset-0">
        <ParticleBackground count={100} />
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,103,58,0.12)_0%,transparent_65%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neo-black to-transparent z-10" />
        {/* Animated grid */}
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-[15%] w-80 h-80 rounded-full bg-neo-orange/5 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 left-[10%] w-60 h-60 rounded-full bg-neo-orange/8 blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neo-orange/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neo-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neo-orange" />
          </span>
          <span className="text-neo-orange text-sm font-medium">Next-Generation Technology Consulting</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-neo-text mb-6"
        >
          Accelerating{" "}
          <span className="gradient-text text-glow-orange">Digital Transformation</span>
          <br />
          Through{" "}
          <span className="relative">
            <span className="text-neo-orange">AI</span>
            <span className="text-neo-text">, Data & Cloud</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none">
              <path d="M0 4 C75 8, 225 0, 300 4" stroke="#E8673A" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>{" "}
          Innovation
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-neo-muted max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Empowering enterprises with intelligent technology solutions that transform operations,
          drive growth, and create measurable business value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button href="/services/" size="lg" className="group">
            Explore Services
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/contact/" variant="secondary" size="lg">
            <Play className="w-4 h-4 text-neo-orange" />
            Schedule Consultation
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-neo-subtle"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
