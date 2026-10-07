"use client";
import { useEffect, useState } from "react";
import Reel from "./Reel";
import { Countdown, type CountdownProps } from "@/remotion/Countdown";
import { EVENT } from "./content";

function calc(): CountdownProps {
  const ms = new Date(EVENT.iso).getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, past: true };
  return { days: Math.floor(ms / 864e5), hours: Math.floor(ms / 36e5) % 24, minutes: Math.floor(ms / 6e4) % 60, past: false };
}

export default function CountdownReel() {
  const [t, setT] = useState<CountdownProps | null>(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="reel sq">
      {t && <Reel component={Countdown} inputProps={t} durationInFrames={90} width={1280} height={800}
        staticFrame={40} label={t.past ? "O ato já começou" : `Faltam ${t.days} dias, ${t.hours} horas e ${t.minutes} minutos para o ato`} />}
    </div>
  );
}
