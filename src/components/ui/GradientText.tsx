"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface GradientTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className = "",
  as = "span",
  ...props
}: GradientTextProps) {
  const Component = motion[as];

  return (
    <Component
      className={`
        bg-gradient-to-r from-white via-white/90 to-zinc-400
        bg-clip-text text-transparent
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
}
