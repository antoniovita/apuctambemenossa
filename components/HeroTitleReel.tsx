"use client";
import Reel from "./Reel";
import { HeroTitle } from "@/remotion/HeroTitle";

export default function HeroTitleReel() {
  return (
    <div className="hero-title" aria-hidden="true">
      <Reel component={HeroTitle} durationInFrames={900} width={1100} height={640} label="" staticFrame={120} />
    </div>
  );
}
