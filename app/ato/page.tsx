import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SpeakerTimerReel from "@/components/SpeakerTimerReel";
import { Facts, Mic } from "@/components/content";

export const metadata: Metadata = { title: "O ato", description: "Terça, 13/10 às 11h, Edifício Frings / Kennedy. Microfone aberto, até 3 minutos por pessoa." };

export default function Ato() {
  return (
    <>
      <header className="hero small"><div className="wrap">
        <div className="eyebrow">Como vai ser</div>
        <h1>O <span>ato.</span></h1>
        <Facts />
      </div></header>
      <main id="main">
        <section><div className="wrap"><Reveal>
          <div className="label">Quem somos</div>
          <h2>Sem partido. Com pauta.</h2>
          <p className="big-p">O ato não tem filiação com nenhum partido de direita, seja PL, NOVO ou MISSÃO.</p>
          <ul className="pills" aria-label="Partidos sem vínculo com o ato">
            <li>Sem vínculo com o PL</li><li>Sem vínculo com o NOVO</li><li>Sem vínculo com o MISSÃO</li>
          </ul>
          <p>Somos o reflexo de uma juventude trabalhadora e de direita que cansou dos desgovernos da esquerda e da situação do país.</p>
        </Reveal></div></section>
        <section><div className="wrap"><Mic /></div></section>
        <section><div className="wrap">
          <div className="label">Tempo de fala</div>
          <h2>Três minutos para cada um</h2>
          <SpeakerTimerReel />
        </div></section>
        <section><div className="wrap">
          <div className="label">Objetivo</div>
          <h2>Por que fazer</h2>
          <p>Mostrar que a PUC não é unanimidade de esquerda. Que existe um grupo grande, organizado e com pautas firmes. E entregar à Vice-Reitoria pedidos concretos para que o campus seja plural de verdade.</p>
          <p>O ato é pacífico, sem bloqueio de circulação ou de aulas e sem propaganda eleitoral.</p>
        </div></section>
      </main>
    </>
  );
}
