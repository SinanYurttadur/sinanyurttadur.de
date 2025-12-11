"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container, GlassCard } from "@/components/ui";

// Sample testimonials - replace with real data or Senja integration
const testimonials = [
  {
    name: "Michael Schmidt",
    role: "CEO, TechVentures GmbH",
    text: "Sinan hat unsere digitale Transformation maßgeblich vorangetrieben. Seine Expertise in Innovation und UX ist einzigartig.",
    rating: 5,
  },
  {
    name: "Sarah Weber",
    role: "Head of Product, FinanceApp",
    text: "Die Zusammenarbeit mit Sinan war herausragend. Er versteht es, komplexe Probleme in elegante Lösungen zu verwandeln.",
    rating: 5,
  },
  {
    name: "Thomas Müller",
    role: "Founder, StartupX",
    text: "Ein echter Visionär. Sinan hat uns geholfen, unsere Produktstrategie völlig neu zu denken.",
    rating: 5,
  },
];

// Trusted by logos - monochrome placeholders
const trustedLogos = [
  { name: "Company 1", width: 120 },
  { name: "Company 2", width: 100 },
  { name: "Company 3", width: 110 },
  { name: "Company 4", width: 90 },
  { name: "Company 5", width: 130 },
];

export function SocialProof() {
  const t = useTranslations("proof");

  return (
    <section id="proof" className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.01] rounded-full blur-[100px]" />
      </div>

      <Container size="xl" className="relative z-10">
        {/* Rating Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <p className="text-white text-lg font-medium mb-2">{t("testimonials")}</p>
          <p className="text-zinc-500 text-sm">Basierend auf Google & Senja Reviews</p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full" hover>
                {/* Quote */}
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/[0.1] flex items-center justify-center text-zinc-400 text-sm font-medium">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{testimonial.name}</p>
                    <p className="text-zinc-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-center text-zinc-600 text-sm uppercase tracking-wider mb-8">
            {t("trustedBy")}
          </p>

          {/* Logo Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {trustedLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="h-8 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Placeholder logo - replace with actual logos */}
                <div
                  className="bg-zinc-700 rounded"
                  style={{ width: logo.width, height: 24 }}
                />
              </motion.div>
            ))}
          </div>

          <p className="text-center text-zinc-600 text-xs mt-6">
            Füge deine Kundenlogos zu /public/images/logos/ hinzu
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
