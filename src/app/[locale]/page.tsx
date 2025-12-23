"use client";

import { BackgroundGlow } from "@/components/ui";
import { Dock } from "@/components/navigation";
import { Hero, AboutVideo, Speaking, YouTubeSnippets, Ventures, Booking, SocialProof, Footer } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <BackgroundGlow />
      <Dock />
      <Hero />
      <Speaking />
      <YouTubeSnippets />
      <AboutVideo />
      <Ventures />
      <Booking />
      <SocialProof />
      <Footer />
    </div>
  );
}
