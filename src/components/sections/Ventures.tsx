"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container, GlassCard } from "@/components/ui";

const tier1Ventures = [
  {
    key: "theneed",
    name: "theneed",
    url: "https://theneed.de",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    key: "uxcircle",
    name: "uxcircle",
    url: "https://uxcircle.de",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const tier2Ventures = [
  {
    key: "hubli",
    name: "hubli.ai",
    url: "https://hubli.ai",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    key: "commissio",
    name: "commissio.io",
    url: "https://commissio.io",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    key: "routex",
    name: "routeX",
    url: "#",
    badge: "Beta",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
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
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-500 text-sm mb-6">
            Ventures
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Das <span className="font-instrument italic text-white/60">Ökosystem</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Tier 1: The Engines */}
        <div className="mb-12">
          <motion.p
            className="text-zinc-500 text-sm uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Engines
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tier1Ventures.map((venture, index) => (
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
                    {/* Logo/Name */}
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      {venture.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-zinc-400 text-lg mb-4">
                      {t(`tier1.${venture.key}.tagline`)}
                    </p>

                    {/* Description */}
                    <p className="text-zinc-500 mb-6">
                      {t(`tier1.${venture.key}.description`)}
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
        </div>

        {/* Tier 2: The Product Lab */}
        <div>
          <motion.p
            className="text-zinc-500 text-sm uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Product Lab
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier2Ventures.map((venture, index) => (
              <motion.a
                key={venture.key}
                href={venture.url}
                target={venture.url !== "#" ? "_blank" : undefined}
                rel={venture.url !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block group"
              >
                <GlassCard className="p-6 h-full" hover>
                  <div className="flex items-start justify-between mb-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
                      {venture.icon}
                    </div>

                    {/* Badge */}
                    {venture.badge && (
                      <span className="px-2 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {venture.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h4 className="text-lg font-medium text-white mb-1">
                    {venture.name}
                  </h4>

                  {/* Tagline */}
                  <p className="text-zinc-500 text-sm">
                    {t(`tier2.${venture.key}.tagline`)}
                  </p>
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
