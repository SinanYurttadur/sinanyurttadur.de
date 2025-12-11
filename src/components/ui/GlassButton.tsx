"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variants = {
  primary: "bg-white/[0.08] hover:bg-white/[0.12] border-white/[0.15] text-white",
  secondary: "bg-transparent hover:bg-white/[0.05] border-white/[0.08] text-zinc-400 hover:text-white",
  ghost: "bg-transparent hover:bg-white/[0.05] border-transparent text-zinc-400 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ children, variant = "primary", size = "md", className = "", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={`
          backdrop-blur-xl border rounded-xl font-medium
          transition-all duration-300
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

GlassButton.displayName = "GlassButton";
