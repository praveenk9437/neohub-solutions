"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const serviceOptions = [
  "AI & Generative AI",
  "Data & Analytics",
  "Cloud Services",
  "Enterprise Applications",
  "Digital Transformation",
  "Managed Services",
  "Other",
];

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/mdavbqgp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-neo-black overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-1/3 w-[500px] h-[400px] bg-neo-orange/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-orange border border-neo-orange/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neo-orange animate-pulse" />
              <span className="text-neo-orange text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neo-text mb-6">
              Let's Start Your <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-neo-muted text-xl max-w-2xl mx-auto">
              Ready to discuss your technology challenges? Our team of experts is here to help you define the right path forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-neo-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-neo-text text-2xl font-bold mb-6">Neohub Solutions</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-neo-orange" />
                    </div>
                    <div>
                      <div className="text-neo-text font-semibold mb-0.5">Headquarters</div>
                      <div className="text-neo-muted text-sm leading-relaxed">
                        5000 Centregreen Way, Suite 500<br />
                        Cary, NC 27513<br />
                        United States
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-neo-orange" />
                    </div>
                    <div>
                      <div className="text-neo-text font-semibold mb-0.5">Email Us</div>
                      <a href="mailto:sales@neohubsolutions.com" className="text-neo-muted text-sm hover:text-neo-orange transition-colors">
                        sales@neohubsolutions.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neo-orange/10 border border-neo-orange/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-neo-orange" />
                    </div>
                    <div>
                      <div className="text-neo-text font-semibold mb-0.5">Call Us</div>
                      <a href="tel:+12512090501" className="text-neo-muted text-sm hover:text-neo-orange transition-colors">
                        +1 (251) 209-0501
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="glass rounded-xl border border-neo-border p-6">
                <h3 className="text-neo-text font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "Response within 24 business hours",
                    "Free initial consultation (60 min)",
                    "No-obligation assessment",
                    "Custom proposal within 5 business days",
                    "NDA available on request",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neo-muted">
                      <CheckCircle2 className="w-4 h-4 text-neo-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl border border-neo-orange/30 p-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-neo-orange/15 border border-neo-orange/25 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-neo-orange" />
                  </div>
                  <h3 className="text-neo-text text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-neo-muted mb-8">Thank you for reaching out. Our team will respond within 24 business hours.</p>
                  <Button onClick={() => setStatus("idle")} variant="outline">Send Another Message</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass rounded-2xl border border-neo-border p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neo-muted text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={formData.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-neo-muted text-sm font-medium mb-2">Company *</label>
                      <input
                        type="text" name="company" required value={formData.company} onChange={handleChange}
                        placeholder="Acme Corporation"
                        className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-neo-muted text-sm font-medium mb-2">Business Email *</label>
                      <input
                        type="email" name="email" required value={formData.email} onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-neo-muted text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-neo-muted text-sm font-medium mb-2">Service Interest *</label>
                    <select
                      name="service" required value={formData.service} onChange={handleChange}
                      className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm focus:outline-none focus:border-neo-orange/50 transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-neo-muted text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message" required value={formData.message} onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project, challenges, and what you're looking to achieve..."
                      className="w-full bg-neo-surface border border-neo-border rounded-lg px-4 py-3 text-neo-text text-sm placeholder-neo-subtle focus:outline-none focus:border-neo-orange/50 transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <div className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                      Something went wrong. Please try again or email us directly at hello@neohubsolutions.com
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-neo-orange text-white rounded-lg px-6 py-4 font-semibold hover:bg-neo-orange-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(232,103,58,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>
                  <p className="text-neo-subtle text-xs text-center">
                    By submitting this form, you agree to our Privacy Policy. We'll never spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 bg-neo-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl border border-neo-border p-8 text-center">
            <div className="text-neo-muted mb-2 text-sm font-medium uppercase tracking-wider">Headquarters Location</div>
            <h3 className="text-neo-text text-xl font-bold mb-2">5000 Centregreen Way, Suite 500</h3>
            <p className="text-neo-muted mb-6">Cary, NC 27513 · Research Triangle Park Area · North Carolina</p>
            <a
              href="https://maps.google.com/?q=5000+Centregreen+Way+Cary+NC+27513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neo-orange text-sm font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
