"use client";
import Reel from "./Reel";
import { SpeakerTimer, TIMER_SECONDS } from "@/remotion/SpeakerTimer";

export default function SpeakerTimerReel() {
  return (
    <>
      <div className="reel sq">
        <Reel component={SpeakerTimer} durationInFrames={TIMER_SECONDS * 30} width={1280} height={800}
          controls autoPlay={false} loop={false} label="Cronômetro de 3 minutos para quem fala" />
      </div>
      <p className="reel-note">Cronômetro de 3 minutos para quem estiver no microfone. Aperte play para iniciar.</p>
    </>
  );
}
