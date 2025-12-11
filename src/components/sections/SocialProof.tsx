"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Container, GlassCard } from "@/components/ui";

type TestimonialSource = "linkedin" | "google";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  source: TestimonialSource;
  date: string;
}

// Mix of real testimonials from LinkedIn and Google
const allTestimonials: Testimonial[] = [
  // LinkedIn Reviews
  {
    name: "Anton Hermann",
    role: "Founder & CMO, spacegoats.io",
    text: "He brings a calm, grounded energy into every conversation. What makes him stand out is his incredible eye for design and aesthetics. He sees what others overlook – the small details, the emotions behind decisions. His solutions are thoughtful, beautifully simple, and always human-centered.",
    source: "linkedin",
    date: "April 2025",
  },
  {
    name: "Julian Riedinger",
    role: "Executive Board, Decadis",
    text: "Über ein Jahr Zusammenarbeit, die ich uneingeschränkt empfehlen kann. Besonders geschätzt habe ich den frischen und kompetenten Blick von außen, der uns geholfen hat, neue Perspektiven im Bereich UI/UX zu gewinnen.",
    source: "linkedin",
    date: "Februar 2025",
  },
  {
    name: "Alex Zimmerman",
    role: "Senior Frontend Engineer, Brask.ai",
    text: "Sinan has an incredible ability to understand complex problems and turn them into practical and creative solutions. His designs were not only detailed but also focused on improving UX and simplifying complex processes.",
    source: "linkedin",
    date: "Januar 2025",
  },
  // Google Reviews
  {
    name: "Gerrit Jahnke",
    role: "Google Review",
    text: "The Need hat unsere Erwartungen übertroffen! Das Team arbeitet äußerst professionell, denkt nutzerzentriert und hat ein feines Gespür für modernes Design.",
    source: "google",
    date: "2024",
  },
  {
    name: "Vasilios Stratidis",
    role: "Google Review",
    text: "Innovativ, tiefgründig und absolut am Puls der Zeit. Herr Yurttadur bringt eine echte Bereicherung für jedes zukunftsorientierte Unternehmen!",
    source: "google",
    date: "2024",
  },
  {
    name: "Can Özdemir",
    role: "Google Review",
    text: "theneed hat uns bei der Transformation unseres Transportunternehmens in der zweiten Generation und bei der Nachfolgeplanung begleitet. Alles lief reibungslos – ohne euch wäre das nicht so einfach gewesen.",
    source: "google",
    date: "2024",
  },
  // More LinkedIn
  {
    name: "Righi Rasoa",
    role: "Founder & Advisor",
    text: "Sinan ist eine außergewöhnliche Persönlichkeit, die Innovation, Menschlichkeit und unternehmerische Exzellenz perfekt vereint. Eine Zusammenarbeit mit ihm ist ein Gewinn – sowohl menschlich als auch beruflich.",
    source: "linkedin",
    date: "Januar 2025",
  },
  {
    name: "Harry Seifert",
    role: "Entrepreneur",
    text: "Produktentwicklung auf höchstem Niveau! Sinan vereint digitale Beratungskompetenz und Teamplayer-Mentalität. Die Zusammenarbeit macht einfach Spaß und ist stets effizient. Book him now!",
    source: "linkedin",
    date: "Januar 2025",
  },
  {
    name: "Philipp Kammel",
    role: "Tribe UX/UI, Atruvia AG",
    text: "Die Zusammenarbeit mit Sinan war von Professionalität, guter Kommunikation und Design-Weitsicht geprägt. Egal in welcher Komplexität die Aufgaben vorlagen, sie wurden immer sehr gut und effektiv gelöst.",
    source: "linkedin",
    date: "Juli 2025",
  },
  // More Google
  {
    name: "Rose Catering GmbH",
    role: "Google Review",
    text: "Super Zusammenarbeit mit THE NEED GmbH! Professionell, lösungsorientiert und immer zuverlässig. Wir fühlen uns bestens betreut – absolut empfehlenswert!",
    source: "google",
    date: "2024",
  },
  {
    name: "Simeon Papadopoulos",
    role: "Google Review",
    text: "Ich bin begeistert von der Zusammenarbeit mit diesem Team. Von der ersten Beratung bis zur finalen Umsetzung unseres Webdesigns und der Entwicklung – alles perfekt!",
    source: "google",
    date: "2024",
  },
  {
    name: "Fabio Limbächer",
    role: "LIMBÄCHER Gruppe",
    text: "Sinan ist echt ein außergewöhnlicher Kopf – smart, lösungsorientiert, kostenbewusst und brutalst innovativ. Für mich ist er einer der wichtigsten Sparringspartner im Business.",
    source: "linkedin",
    date: "Februar 2025",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full"
    >
      <GlassCard className="p-6 h-full flex flex-col" hover>
        {/* Source Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {testimonial.source === "linkedin" ? (
              <svg className="w-4 h-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            )}
            <span className="text-zinc-500 text-xs">{testimonial.source === "linkedin" ? "LinkedIn" : "Google"}</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Quote */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-grow">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/[0.1] to-white/[0.05] flex items-center justify-center text-zinc-300 text-sm font-medium">
            {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div>
            <p className="text-white text-sm font-medium">{testimonial.name}</p>
            <p className="text-zinc-500 text-xs">{testimonial.role}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SocialProof() {
  const t = useTranslations("proof");
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(allTestimonials.length / itemsPerPage);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const currentTestimonials = allTestimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="proof" className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/[0.01] rounded-full blur-[100px]" />
      </div>

      <Container size="xl" className="relative z-10">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                {t("title")}
              </span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                5.0 / 5.0
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              Was andere <span className="font-instrument italic text-white/60">sagen</span>
            </h2>

            {/* Rating Summary */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-zinc-400 text-sm">LinkedIn</span>
                </div>
                <span className="text-zinc-600">+</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-zinc-400 text-sm">32 Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
              }}
              className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Indicators */}
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentPage(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === currentPage
                      ? "w-6 bg-white"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentPage((prev) => (prev + 1) % totalPages);
              }}
              className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 min-h-[400px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="popLayout">
            {currentTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${currentPage}-${testimonial.name}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

      </Container>
    </section>
  );
}
