"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui";

const stats = [
  { value: "10M+", label: "Reichweite", icons: ["youtube", "linkedin"] },
  { value: "50+", label: "Keynotes", icons: [] },
  { value: "5+", label: "Exits & Products", icons: [] },
];

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
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-gradient-to-br from-violet-500/[0.03] to-cyan-500/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[300px] bg-white/[0.01] rounded-full blur-[100px]" />
      </motion.div>

      <Container size="xl" className="relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge Row */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {t("tagline")}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium">
                Verfügbar für Keynotes
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.1]">
                <span className="text-white">{t("headlinePart1")}</span>{" "}
                <span className="font-instrument italic text-white/70">
                  {t("headlineHighlight")}
                </span>
                <br />
                <span className="text-white">{t("headlinePart2")}</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-zinc-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("subheadline")}
            </motion.p>

            {/* CTA Row */}
            <motion.div
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Primary CTA */}
              <motion.a
                href="https://cal.com/theneedworks/expertengesprach"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3.5 bg-white text-black font-medium rounded-xl text-base transition-all flex items-center gap-2.5 hover:bg-zinc-100"
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
              <div className="flex items-center gap-2">
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

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-left">
                  <motion.p
                    className="text-3xl md:text-4xl font-semibold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-zinc-500 text-sm">{stat.label}</p>
                    {stat.icons && stat.icons.length > 0 && (
                      <div className="flex items-center gap-1.5">
                        {stat.icons.includes("youtube") && (
                          <svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                        )}
                        {stat.icons.includes("linkedin") && (
                          <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Profile Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-2xl" />

              {/* Profile Card */}
              <div className="relative rounded-2xl bg-zinc-900/50 border border-white/[0.08] p-6 backdrop-blur-sm">
                {/* Avatar Section */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/[0.05] border border-white/[0.1] overflow-hidden">
                      {hasAvatar ? (
                        <Image
                          src="/images/sinan-hero.png?v=2"
                          alt="Sinan Yurttadur"
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-zinc-500 text-2xl font-medium">SY</span>
                        </div>
                      )}
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-zinc-900 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white">Sinan Yurttadur</h3>
                    <p className="text-zinc-400 text-sm mt-1">Innovation & Transformation</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-zinc-500 text-xs">Stuttgart, DE</span>
                    </div>
                  </div>
                </div>

                {/* Role Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium">
                    {t("roles.speaker")}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium">
                    {t("roles.entrepreneur")}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-medium">
                    {t("roles.advisor")}
                  </span>
                </div>

                {/* Education */}
                <div className="space-y-2 mb-5 pb-5 border-b border-white/[0.06]">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">Akademischer Hintergrund</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-xs">Harvard Business School</span>
                      <span className="text-zinc-500 text-[10px]">Neuroscience & AI</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-xs">DHBW Stuttgart</span>
                      <span className="text-zinc-500 text-[10px]">Informatik</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-300 text-xs">Uni Hohenheim</span>
                      <span className="text-zinc-500 text-[10px]">Wirtschaft</span>
                    </div>
                  </div>
                </div>

                {/* Expertise Areas */}
                <div className="space-y-3 mb-6">
                  <p className="text-zinc-500 text-xs uppercase tracking-wider">Expertise</p>
                  <div className="grid grid-cols-2 gap-2">
                    {["Innovation", "KI & Automation", "Transformation", "Product Strategy", "UX & Design", "Neuroscience"].map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-2 text-zinc-400 text-xs"
                      >
                        <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {area}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <a
                  href="https://cal.com/theneedworks/expertengesprach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] hover:text-white transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  15 Min Gespräch buchen
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
