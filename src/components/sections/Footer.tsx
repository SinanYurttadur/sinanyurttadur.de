"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui";
import Link from "next/link";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Berlin",
      };
      const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Europe/Berlin",
      };
      setCurrentTime(now.toLocaleTimeString(locale === "de" ? "de-DE" : "en-US", timeOptions));
      setCurrentDate(now.toLocaleDateString(locale === "de" ? "de-DE" : "en-US", dateOptions));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, [locale]);

  return (
    <footer id="contact" className="relative py-24 border-t border-white/[0.05]">
      <Container size="xl">
        {/* Contact CTA Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400 text-sm">{t("available")}</span>
          </div>

          {/* Avatar */}
          <div className="mb-6">
            <img
              src="/images/sinan-hero.png"
              alt="Sinan Yurttadur"
              className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-white/10"
            />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            {t("cta")}
          </h2>

          <p className="text-zinc-500 text-lg mb-10 max-w-md mx-auto">
            {t("ctaSubtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Book Call Button */}
            <motion.a
              href="https://cal.com/theneedworks/expertengesprach"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-medium rounded-2xl text-base overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {t("bookCall")}
              </span>
            </motion.a>

            {/* Email Button */}
            <motion.button
              onClick={() => {
                navigator.clipboard.writeText("hi@sinanyurttadur.de");
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.05] border border-white/[0.1] text-white font-medium rounded-2xl text-base hover:bg-white/[0.1] hover:border-white/[0.2] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-mono text-zinc-300 group-hover:text-white transition-colors">hi@sinanyurttadur.de</span>
              <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Info Bar */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-zinc-500 text-sm">
            {currentDate} - {currentTime}
          </p>
          <p className="text-zinc-600 text-sm">
            {t("location")}
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.05] mb-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Name/Brand */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium mb-1">Sinan Yurttadur</p>
            <p className="text-zinc-500 text-sm">Innovation & Transformation</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/sinan-yurttadur-2ba246269/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@sinanyurttadur"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </motion.a>
          </div>

          {/* Right: Legal Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link
              href={`/${locale}/legal`}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              {t("impressum")} & {t("datenschutz")}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10">
          <p className="text-zinc-600 text-sm">
            {t("createdBy")} Sinan Yurttadur - {t("founder")} <a href="https://theneed.works" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">theneed.works</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
