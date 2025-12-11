"use client";

import { BackgroundGlow } from "@/components/ui";
import { Dock } from "@/components/navigation";
import { Hero, Speaking, YouTubeSnippets, Ventures, SocialProof, Footer } from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <BackgroundGlow />
      <Dock />
      <Hero />
      <Speaking />
      <YouTubeSnippets />
      <Ventures />
      <SocialProof />
      <Footer />
    </div>
  );
}
