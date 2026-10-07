"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, type ComponentType } from "react";
import type { PlayerRef } from "@remotion/player";

const Player = dynamic(() => import("@remotion/player").then((m) => m.Player), { ssr: false });

type Props = {
  component: ComponentType<any>;
  inputProps?: Record<string, unknown>;
  durationInFrames: number;
  width: number;
  height: number;
  fps?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  label: string;
  staticFrame?: number;
  playerRef?: React.Ref<PlayerRef>;
};

export function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(m.matches);
    const f = () => setR(m.matches);
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return r;
}

export default function Reel({ component, inputProps, durationInFrames, width, height, fps = 30, controls = false, autoPlay = true, loop = true, label, staticFrame, playerRef }: Props) {
  const reduced = useReducedMotion();
  return (
    <Player
      ref={playerRef}
      component={component}
      inputProps={inputProps ?? {}}
      durationInFrames={durationInFrames}
      compositionWidth={width}
      compositionHeight={height}
      fps={fps}
      controls={controls}
      autoPlay={autoPlay && !reduced}
      initiallyMuted
      initialFrame={reduced && staticFrame !== undefined ? staticFrame : 0}
      loop={loop}
      clickToPlay={controls}
      acknowledgeRemotionLicense
      style={{ width: "100%", height: "100%" }}
      errorFallback={() => null}
      aria-label={label}
    />
  );
}
