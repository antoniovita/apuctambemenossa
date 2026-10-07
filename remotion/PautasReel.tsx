import { AbsoluteFill, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, F } from "./theme";

export type Pauta = { title: string; text: string };
export const PAUTA_FRAMES = 105;

const Slide: React.FC<{ n: number; total: number; pauta: Pauta }> = ({ n, total, pauta }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const words = pauta.title.toUpperCase().split(" ");
  const bar = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 24 });
  const textIn = spring({ frame: frame - 28, fps, config: { damping: 200 } });
  const out = interpolate(frame, [PAUTA_FRAMES - 10, PAUTA_FRAMES], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ padding: `${height * (width < 1000 ? 0.2 : 0.17)}px 70px 0`, justifyContent: "flex-start", opacity: out }}>
      <div style={{ fontFamily: F.label, fontWeight: 600, letterSpacing: "0.16em", color: C.gold, fontSize: 30 }}>
        PAUTA {n} DE {total}
      </div>
      <div style={{ width: 120 * bar, height: 8, background: C.gold, margin: "18px 0 22px" }} />
      <div style={{ fontFamily: F.display, color: C.cream, fontSize: width < 1000 ? 96 : 108, lineHeight: 1.12, display: "flex", flexWrap: "wrap", gap: "0 26px" }}>
        {words.map((w, i) => {
          const s = spring({ frame: frame - 6 - i * 4, fps, config: { damping: 18, stiffness: 160 } });
          return (
            <span key={i} style={{ display: "inline-block", transform: `translateY(${(1 - s) * 60}px)`, opacity: s }}>{w}</span>
          );
        })}
      </div>
      <p style={{ fontFamily: F.body, fontSize: width < 1000 ? 38 : 32, color: C.cream, maxWidth: 900, lineHeight: 1.35, opacity: 0.9 * textIn, transform: `translateY(${(1 - textIn) * 20}px)`, marginTop: 26 }}>
        {pauta.text}
      </p>
    </AbsoluteFill>
  );
};

export const PautasReel: React.FC<{ pautas: Pauta[] }> = ({ pautas }) => {
  const frame = useCurrentFrame();
  const total = pautas.length * PAUTA_FRAMES;
  return (
    <AbsoluteFill style={{ background: C.navy }}>
      <AbsoluteFill style={{ background: `linear-gradient(90deg, ${C.gold} 0 6px, transparent 6px)` }} />
      {pautas.map((p, i) => (
        <Sequence key={p.title} from={i * PAUTA_FRAMES} durationInFrames={PAUTA_FRAMES} premountFor={10}>
          <Slide n={i + 1} total={pautas.length} pauta={p} />
        </Sequence>
      ))}
      <div style={{ position: "absolute", left: 0, bottom: 0, height: 8, width: `${((frame % total) / total) * 100}%`, background: `linear-gradient(90deg, ${C.gold}, ${C.green})` }} />
    </AbsoluteFill>
  );
};
