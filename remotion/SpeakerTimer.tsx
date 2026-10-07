import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, F } from "./theme";

export const TIMER_SECONDS = 180;

// Cronômetro regressivo de 3 minutos para o microfone aberto. Os controles do Player fazem play/pausa/reinício.
export const SpeakerTimer: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();
  const left = Math.max(0, TIMER_SECONDS - Math.floor(frame / fps));
  const mm = Math.floor(left / 60);
  const ss = String(left % 60).padStart(2, "0");
  const progress = frame / (TIMER_SECONDS * fps);
  const warn = left <= 30;
  const color = left <= 10 ? "#ff5a4d" : warn ? C.gold : C.cream;
  const R = 230, circ = 2 * Math.PI * R;
  const flash = left <= 10 ? interpolate(frame % fps, [0, fps / 2, fps], [1, 0.45, 1]) : 1;

  return (
    <AbsoluteFill style={{ background: C.navy, alignItems: "center", justifyContent: "center" }}>
      <svg width={width * 0.62} height={width * 0.62} viewBox="0 0 520 520" style={{ position: "absolute", maxHeight: "92%" }}>
        <circle cx="260" cy="260" r={R} fill="none" stroke="rgba(245,242,232,.12)" strokeWidth="16" />
        <circle cx="260" cy="260" r={R} fill="none" stroke={warn ? color : C.green} strokeWidth="16" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={circ * progress} transform="rotate(-90 260 260)" opacity={flash} />
      </svg>
      <div style={{ textAlign: "center", opacity: flash }}>
        <div style={{ fontFamily: F.display, fontSize: 190, lineHeight: 1, color }}>{mm}:{ss}</div>
        <div style={{ fontFamily: F.label, fontWeight: 600, letterSpacing: "0.2em", color: C.gold, fontSize: 28 }}>
          {left === 0 ? "TEMPO ESGOTADO" : "MICROFONE ABERTO"}
        </div>
      </div>
    </AbsoluteFill>
  );
};
