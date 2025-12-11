"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, hover = true, glow = false, className = "", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={`
          bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl
          ${hover ? "transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15]" : ""}
          ${glow ? "shadow-[0_0_60px_rgba(255,255,255,0.03)]" : ""}
          ${className}
        `}
        whileHover={hover ? { scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";
