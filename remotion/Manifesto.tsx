import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { C, F } from "./theme";

export const MANIFESTO_FRAMES = 300;
const LINES = [
  { t: "Não somos unanimidade.", c: C.cream },
  { t: "Somos muitos.", c: C.cream },
  { t: "Somos organizados.", c: C.cream },
  { t: "E temos pauta.", c: C.gold },
  { t: "A PUC também é nossa.", c: C.gold },
];

// Frame é controlado pela rolagem (ver ScrollScrub): cada linha ocupa uma fatia do progresso.
export const Manifesto: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const seg = MANIFESTO_FRAMES / LINES.length;
  const size = Math.min(width / 9, height / 5);
  const p = frame / MANIFESTO_FRAMES;

  return (
    <AbsoluteFill style={{ background: C.navy, alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      {/* barras que varrem conforme o progresso */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(100deg, transparent ${p * 140 - 40}%, rgba(242,194,48,.05) ${p * 140 - 20}%, transparent ${p * 140}%)` }} />
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 10, background: C.gold, transform: `scaleY(${p})`, transformOrigin: "top" }} />
      <div style={{ position: "absolute", left: 0, bottom: 0, height: 10, width: `${p * 100}%`, background: `linear-gradient(90deg, ${C.gold}, ${C.green})` }} />
      {LINES.map((l, i) => {
        const start = i * seg;
        const into = interpolate(frame, [start, start + seg * 0.28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const outro = i === LINES.length - 1 ? 0 : interpolate(frame, [start + seg * 0.78, start + seg], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        const ease = 1 - Math.pow(1 - into, 3);
        const words = l.t.split(" ");
        return (
          <div
            key={i}
            style={{
              position: "absolute", width: "86%", textAlign: "center", fontFamily: F.display, textTransform: "uppercase",
              fontSize: size, lineHeight: 1.18, color: l.c,
              opacity: into * (1 - outro),
              transform: `translateY(${(1 - ease) * 24 - outro * 20}px)`,
              filter: `blur(${outro * 3}px)`,
              display: "flex", flexWrap: "wrap", justifyContent: "center", gap: `0 ${size * 0.28}px`,
            }}
          >
            {words.map((w, wi) => {
              const wp = interpolate(frame, [start + wi * 4, start + wi * 4 + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
              return <span key={wi} style={{ display: "inline-block", transform: `translateY(${(1 - wp) * 14}px)`, opacity: wp }}>{w}</span>;
            })}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
