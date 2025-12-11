"use client";

import { motion } from "framer-motion";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className = "",
  as = "span",
}: GradientTextProps) {
  const classes = `bg-gradient-to-r from-white via-white/90 to-zinc-400 bg-clip-text text-transparent ${className}`;

  if (as === "h1") return <motion.h1 className={classes}>{children}</motion.h1>;
  if (as === "h2") return <motion.h2 className={classes}>{children}</motion.h2>;
  if (as === "h3") return <motion.h3 className={classes}>{children}</motion.h3>;
  if (as === "p") return <motion.p className={classes}>{children}</motion.p>;
  return <motion.span className={classes}>{children}</motion.span>;
}
