"use client";

import { motion } from "framer-motion";

interface BackgroundGlowProps {
  className?: string;
}

export function BackgroundGlow({ className = "" }: BackgroundGlowProps) {
  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top ambient glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]"
        animate={{
          opacity: [0.5, 0.8, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}
