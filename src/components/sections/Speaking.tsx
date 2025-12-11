"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Container } from "@/components/ui";

const topics = [
  {
    key: "mindset",
    image: "/images/speaking/mindset.jpg",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    badge: "Keynote",
  },
  {
    key: "aiworkshop",
    image: "/images/speaking/ai-workshop.jpg",
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    badge: "Workshop",
  },
  {
    key: "transformation",
    image: "/images/speaking/transformation.jpg",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    badge: "Keynote",
  },
  {
    key: "aifinale",
    image: "/images/speaking/ai-finale.jpg",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    badge: "Keynote",
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
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-500 text-sm">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                  {t("title")}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
                Keynotes & <span className="font-instrument italic text-white/60">Workshops</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl">
                {t("subtitle")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <motion.a
                href="https://cal.com/theneedworks/expertengesprach"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-100 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Videocall buchen
              </motion.a>
              <motion.button
                onClick={() => {
                  navigator.clipboard.writeText("hi@sinanyurttadur.de");
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-300 font-medium text-sm hover:bg-white/[0.08] hover:text-white transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">hi@sinanyurttadur.de</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
          {/* Topic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.key}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.12]">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={topic.image}
                    alt={t(`topics.${topic.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback gradient if image doesn't exist
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${topic.gradient}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                  {/* Badge */}
                  {topic.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-medium ${
                        topic.badge === "Workshop"
                          ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300"
                          : "bg-white/10 border border-white/20 text-white"
                      }`}>
                        {topic.badge === "Workshop" ? (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                          </svg>
                        )}
                        {topic.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-white transition-colors">
                    {t(`topics.${topic.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {t(`topics.${topic.key}.description`)}
                  </p>

                  {/* Takeaway */}
                  <p className="text-zinc-500 text-xs italic mb-6">
                    {t(`topics.${topic.key}.takeaway`)}
                  </p>

                  </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
