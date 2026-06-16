"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";

const metrics = [
  { end: 200, suffix: "+", label: "Clients Served" },
  { end: 500, suffix: "+", label: "Projects Delivered" },
  { end: 15, suffix: "+", label: "Industries Supported" },
  { end: 20, suffix: "+", label: "Countries" },
];

export default function MetricsBar() {
  return (
    <section className="py-16 bg-neo-dark border-y border-neo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-4xl md:text-5xl font-black text-neo-orange mb-2">
                <AnimatedCounter end={metric.end} suffix={metric.suffix} />
              </div>
              <div className="text-neo-muted text-sm uppercase tracking-wider">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
