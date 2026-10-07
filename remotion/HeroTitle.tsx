import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { C, F } from "./theme";

const LINES = [
  { text: "A PUC", gold: false },
  { text: "TAMBÉM", gold: false },
  { text: "É NOSSA.", gold: true },
];
const LOOP = 150; // ambient periodic motion divides the 900f duration -> seamless loop

export const HeroTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const size = Math.min(height / 3.55, width / 5.6);
    let idx = 0;

  return (
    <AbsoluteFill style={{ justifyContent: "center", paddingLeft: width * 0.01 }}>
      {LINES.map((line, li) => {
        const chars = [...line.text];
        return (
          <div key={li} style={{ display: "flex", lineHeight: 1.1, height: size * 1.14 }}>
            {chars.map((ch, ci) => {
              const n = idx++;
              const s = spring({ frame: frame - 4 - n * 2, fps, config: { damping: 200 }, durationInFrames: 28 });
              const rot = 0;
              const float = 0;
              const flash = 0;
              return (
                <span
                  key={ci}
                  style={{
                    fontFamily: F.display, fontSize: size, display: "inline-block", whiteSpace: "pre",
                    color: line.gold ? C.gold : C.cream,
                    transform: `translateY(${(1 - s) * size * 0.35 + float}px) rotate(${rot}deg)`,
                    opacity: s,
                    textShadow: flash ? `0 0 ${40 * flash}px ${C.gold}` : "none",
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </div>
        );
      })}
      {/* underline wipe + shimmer */}
      <div style={{ position: "absolute", left: width * 0.01, bottom: height * 0.03, height: 4, width: width * 0.4 * spring({ frame: frame - 50, fps, config: { damping: 200 } }), background: `linear-gradient(90deg, ${C.gold} 50%, ${C.green} 50%)` }} />
      <div style={{ position: "absolute", left: width * 0.01 + (((frame % LOOP) / LOOP) * width * 0.55), bottom: height * 0.03, height: 4, width: 0 }} />
    </AbsoluteFill>
  );
};
