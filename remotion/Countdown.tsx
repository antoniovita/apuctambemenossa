import { AbsoluteFill } from "remotion";
import { C, F } from "./theme";

export type CountdownProps = { days: number; hours: number; minutes: number; past: boolean };

const Cell: React.FC<{ value: number; label: string }> = ({ value, label }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontFamily: F.display, fontSize: 210, lineHeight: 1.1, color: C.cream }}>{String(value).padStart(2, "0")}</div>
    <div style={{ fontFamily: F.label, fontWeight: 600, letterSpacing: "0.18em", color: C.gold, fontSize: 32, marginTop: 6 }}>{label}</div>
  </div>
);

export const Countdown: React.FC<CountdownProps> = ({ days, hours, minutes, past }) => {
  return (
    <AbsoluteFill style={{ background: C.navy, alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: F.label, fontWeight: 600, letterSpacing: "0.2em", color: C.gold, fontSize: 30, marginBottom: 20 }}>
        {past ? "O ATO JÁ COMEÇOU" : "FALTA PARA O ATO"}
      </div>
      {!past && (
        <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
          <Cell value={days} label="DIAS" />
          <div style={{ fontFamily: F.display, fontSize: 180, color: C.gold, opacity: 0.9 }}>:</div>
          <Cell value={hours} label="HORAS" />
          <div style={{ fontFamily: F.display, fontSize: 180, color: C.gold, opacity: 0.9 }}>:</div>
          <Cell value={minutes} label="MIN" />
        </div>
      )}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 10, background: `linear-gradient(90deg, ${C.gold} 50%, ${C.green} 50%)` }} />
    </AbsoluteFill>
  );
};
