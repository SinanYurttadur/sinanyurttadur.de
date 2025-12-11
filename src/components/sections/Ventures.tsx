"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container, GlassCard } from "@/components/ui";

const ventures = [
  {
    key: "theneed",
    name: "theneed.works",
    url: "https://theneed.works",
    logo: "/images/logos/theneed.png",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    key: "uxcircle",
    name: "uxcircle.de",
    url: "https://uxcircle.de",
    logo: "/images/logos/uxcircle.png",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export function Ventures() {
  const t = useTranslations("ventures");

  return (
    <section id="ventures" className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-white/[0.01] rounded-full blur-[120px]" />
      </div>

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-500 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              Ventures
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              100% Founder
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Mein <span className="font-instrument italic text-white/60">Ökosystem</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ventures.map((venture, index) => (
            <motion.a
              key={venture.key}
              href={venture.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block group"
            >
              <GlassCard className="p-8 h-full relative overflow-hidden" hover glow>
                {/* Gradient accent */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${venture.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Header with Logo and Role */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                      <img
                        src={venture.logo}
                        alt={venture.name}
                        className="w-9 h-9 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-white font-bold text-xl">${venture.name.charAt(0).toUpperCase()}</span>`;
                        }}
                      />
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs font-medium">
                      Founder & CEO
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    {venture.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-zinc-400 text-lg mb-4">
                    {t(`${venture.key}.tagline`)}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-500 mb-6 leading-relaxed">
                    {t(`${venture.key}.description`)}
                  </p>

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors">
                    <span className="text-sm">Website besuchen</span>
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
