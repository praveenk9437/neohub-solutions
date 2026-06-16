"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-neo-dark">
      <div className="absolute inset-0">
        <ParticleBackground count={50} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,103,58,0.15)_0%,transparent_65%)]" />
        <div className="absolute inset-0 grid-bg-orange opacity-20" />
      </div>

      {/* Orange glow at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neo-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-orange border border-neo-orange/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
          <span className="text-neo-orange text-sm font-medium">Ready to Transform?</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6 leading-tight"
        >
          Ready to Transform
          <br />
          <span className="gradient-text text-glow-orange">Your Business?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neo-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Join 20+ enterprises that have partnered with Neohub Solutions to unlock the power of AI, Data, and Cloud. Let's build your transformation story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/contact/" size="lg" className="group shadow-[0_0_40px_rgba(232,103,58,0.3)]">
            Talk to an Expert
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="/contact/" variant="secondary" size="lg">
            <Phone className="w-4 h-4 text-neo-orange" />
            Contact Us
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 mt-12 text-neo-subtle text-sm"
        >
          {["No long-term lock-in", "Response within 24 hours", "Free initial consultation", "NDA on request"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-neo-orange" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
