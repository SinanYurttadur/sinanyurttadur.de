"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui";

export function Booking() {
  const t = useTranslations("booking");

  return (
    <section id="booking" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-500 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              {t("badge")}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            {t("title")} <span className="font-instrument italic text-white/60">{t("titleHighlight")}</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Speaker/Keynote Card */}
          <motion.div
            className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-500/5 border border-violet-500/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
              </svg>
            </div>

            <h3 className="text-2xl font-medium text-white mb-3">{t("speaker.title")}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">{t("speaker.description")}</p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["KI & Automation", "Innovation", "Transformation", "Mindset"].map((topic) => (
                <span key={topic} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs">
                  {topic}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:hi@sinanyurttadur.de?subject=Keynote%20Anfrage"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors font-medium"
              whileHover={{ x: 4 }}
            >
              {t("speaker.cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Podcast Card */}
          <motion.div
            className="group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/20 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </div>

            <h3 className="text-2xl font-medium text-white mb-3">{t("podcast.title")}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed">{t("podcast.description")}</p>

            {/* Topics */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Interviews", "Panels", "Deep Dives", "Q&A"].map((topic) => (
                <span key={topic} className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs">
                  {topic}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="mailto:hi@sinanyurttadur.de?subject=Podcast%20Anfrage"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              whileHover={{ x: 4 }}
            >
              {t("podcast.cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
