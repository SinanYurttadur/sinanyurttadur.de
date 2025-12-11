"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Container, GlassCard, SectionHeader } from "@/components/ui";

const topics = [
  {
    key: "innovation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    key: "ai",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    key: "transformation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

export function Speaking() {
  const t = useTranslations("speaking");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="speaking" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
      </div>

      <motion.div style={{ opacity }} className="relative z-10">
        <Container size="xl">
          {/* Section Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-500 text-sm mb-6">
              {t("title")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              Keynote <span className="font-instrument italic text-white/60">Topics</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              {t("subtitle")}
            </p>
          </motion.div>
        </Container>

        {/* Horizontal Scrolling Cards */}
        <div className="relative">
          <div className="flex gap-6 px-6 md:px-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {/* Spacer for left padding on larger screens */}
            <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />

            {topics.map((topic, index) => (
              <motion.div
                key={topic.key}
                className="flex-shrink-0 w-[340px] md:w-[400px] snap-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard
                  className="p-8 h-full min-h-[280px] flex flex-col cursor-pointer group"
                  hover
                  glow
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all mb-6">
                    {topic.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                    {t(`topics.${topic.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t(`topics.${topic.key}.description`)}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                    <span className="text-sm">Mehr erfahren</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Book a Talk Card */}
            <motion.div
              className="flex-shrink-0 w-[340px] md:w-[400px] snap-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://cal.com/theneedworks/expertengesprach"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="h-full min-h-[280px] rounded-2xl border border-dashed border-white/[0.15] bg-white/[0.02] p-8 flex flex-col items-center justify-center text-center hover:bg-white/[0.04] hover:border-white/[0.25] transition-all group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/[0.05] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-all">
                    <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <p className="text-zinc-400 group-hover:text-white transition-colors font-medium">
                    Keynote anfragen
                  </p>
                  <p className="text-zinc-600 text-sm mt-1">
                    Für Ihre Veranstaltung
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Spacer for right padding on larger screens */}
            <div className="hidden lg:block flex-shrink-0 w-[calc((100vw-1280px)/2)]" />
          </div>

          {/* Scroll hint gradient */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none lg:hidden" />
        </div>
      </motion.div>
    </section>
  );
}
