"use client";
import { useEffect, useRef, useState } from "react";
import type { PlayerRef } from "@remotion/player";
import Reel from "./Reel";
import { Manifesto, MANIFESTO_FRAMES } from "@/remotion/Manifesto";

// A rolagem da página controla o frame da composição Remotion.
export default function ScrollScrub() {
  const outer = useRef<HTMLDivElement>(null);
  const player = useRef<PlayerRef>(null);
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const f = () => setNarrow(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = outer.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
      player.current?.seekTo(Math.round(p * (MANIFESTO_FRAMES - 1)));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [narrow]);

  return (
    <div className="scrub" ref={outer}>
      <div className="scrub-stick">
        <div className={narrow ? "scrub-frame portrait" : "scrub-frame"}>
          <Reel key={String(narrow)} playerRef={player} component={Manifesto} durationInFrames={MANIFESTO_FRAMES}
            width={narrow ? 900 : 1600} height={narrow ? 1200 : 900} autoPlay={false} loop={false}
            label="Manifesto animado, controlado pela rolagem da página" />
        </div>
        <p className="scrub-hint" aria-hidden="true">role para continuar ↓</p>
      </div>
      <p className="sr">Não somos unanimidade. Somos muitos. Somos organizados. E temos pauta. A PUC também é nossa.</p>
    </div>
  );
}
