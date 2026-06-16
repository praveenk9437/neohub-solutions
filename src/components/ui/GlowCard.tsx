"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode, useRef, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: string;
}

export default function GlowCard({ children, className, delay = 0, glowColor = "rgba(232, 103, 58, 0.15)" }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-xl border border-neo-border bg-neo-card overflow-hidden transition-all duration-300",
        "hover:border-neo-orange/30 hover:-translate-y-1",
        className
      )}
      style={{
        boxShadow: isHovered ? `0 20px 60px ${glowColor}` : undefined,
      }}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(232, 103, 58, 0.3), transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
