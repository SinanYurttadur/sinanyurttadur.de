"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui";

export function Hero() {
  const t = useTranslations("hero");
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAvatar, setHasAvatar] = useState(false);

  // Mouse position for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Very subtle spring animation
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Subtle parallax transforms
  const glowX = useTransform(smoothMouseX, [-0.5, 0.5], [15, -15]);
  const glowY = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Check if avatar exists
  useEffect(() => {
    const img = new window.Image();
    img.src = "/images/sinan-hero.png";
    img.onload = () => setHasAvatar(true);
    img.onerror = () => setHasAvatar(false);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: glowX, y: glowY }}
      >
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[300px] bg-white/[0.012] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[250px] bg-white/[0.008] rounded-full blur-[80px]" />
      </motion.div>

      <Container size="xl" className="relative z-10 pt-32 pb-20">
        {/* Tagline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t("tagline")}
          </span>
        </motion.div>

        {/* Avatar + Name Row */}
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/[0.1] overflow-hidden flex items-center justify-center">
            {hasAvatar ? (
              <Image
                src="/images/sinan-hero.png"
                alt="Sinan Yurttadur"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-zinc-500 text-lg font-medium">SY</span>
            )}
          </div>
          <div>
            <p className="text-white text-base font-medium">Sinan Yurttadur</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-zinc-500 text-sm">{t("roles.speaker")}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500 text-sm">{t("roles.entrepreneur")}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500 text-sm">{t("roles.advisor")}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Headline - Smaller */}
        <motion.div
          className="max-w-4xl mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
            <span className="text-white">{t("headlinePart1")}</span>{" "}
            <span className="font-instrument italic text-white/70">
              {t("headlineHighlight")}
            </span>
            <br className="hidden sm:block" />
            <span className="text-white">{t("headlinePart2")}</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t("subheadline")}
        </motion.p>

        {/* CTA Row */}
        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Primary CTA - Links to Cal.com */}
          <motion.a
            href="https://cal.com/theneedworks/expertengesprach"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-7 py-3.5 bg-white text-black font-medium rounded-xl text-base transition-all flex items-center gap-2.5 hover:bg-zinc-100"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t("cta")}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.linkedin.com/in/sinan-yurttadur-2ba246269/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@sinanyurttadur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
