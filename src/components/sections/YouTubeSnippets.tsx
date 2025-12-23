"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui";

const featuredVideos = [
  { id: "z6iSCaXFHMc" },
  { id: "zbN-sEMgWtw" },
  { id: "eMj3vJtfL4c" },
  { id: "cZQpdRiPbnU" },
  { id: "llmCnYQG4XM" },
  { id: "FWXow7vEN4c" },
];

const CHANNEL_URL = "https://www.youtube.com/@sinanyurttadur";

function VideoCard({ videoId, index }: { videoId: string; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/[0.06] transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-zinc-900/70">
        {/* Glow Effect */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Video Container */}
        <div className="relative aspect-video">
          {!isPlaying ? (
            <>
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Play Button */}
              <motion.button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white/20"
                    animate={isHovered ? { scale: [1, 1.5], opacity: [0.5, 0] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  />

                  {/* Play Icon */}
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors">
                    <svg
                      className="w-6 h-6 md:w-8 md:h-8 text-black ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </motion.button>
            </>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function YouTubeSnippets() {
  const t = useTranslations("youtube");

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[400px] bg-red-500/[0.015] rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[300px] bg-white/[0.01] rounded-full blur-[100px]" />
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
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/[0.08] border border-red-500/[0.15] text-red-400/90 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="#000" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
              {t("title")} <span className="font-instrument italic text-white/60">{t("titleHighlight")}</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              {t("subtitle")}
            </p>
          </div>

          {/* View Channel Link */}
          <motion.a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.12] transition-all group shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm font-medium">{t("viewAll")}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featuredVideos.map((video, index) => (
            <VideoCard key={video.id} videoId={video.id} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
