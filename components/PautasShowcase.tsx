"use client";
import { useEffect, useState } from "react";
import Reel from "./Reel";
import { PautasReel, PAUTA_FRAMES } from "@/remotion/PautasReel";
import { PAUTAS } from "./content";

export default function PautasShowcase() {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia("(max-width: 640px)");
    const f = () => setNarrow(m.matches);
    f();
    m.addEventListener("change", f);
    return () => m.removeEventListener("change", f);
  }, []);
  return (
    <div className={narrow ? "reel tall" : "reel"}>
      <Reel key={String(narrow)} component={PautasReel} inputProps={{ pautas: PAUTAS }} durationInFrames={PAUTAS.length * PAUTA_FRAMES}
        width={narrow ? 900 : 1280} height={narrow ? 1100 : 720} staticFrame={70} label="Animação com as dez pautas do ato" />
    </div>
  );
}
