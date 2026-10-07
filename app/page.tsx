import Link from "next/link";
import HeroTitleReel from "@/components/HeroTitleReel";
import ScrollScrub from "@/components/ScrollScrub";
import Reveal from "@/components/Reveal";
import PautasShowcase from "@/components/PautasShowcase";
import CountdownReel from "@/components/CountdownReel";
import { Cta, Facts, Mic, PAUTAS, WHATSAPP } from "@/components/content";

export default function Home() {
  return (
    <>
      <header className="hero home">
        <img className="hero-photo" src="/img_campus_banner_index.jpg" alt="" aria-hidden="true" />
        <div className="wrap wide">
          <div className="eyebrow">Ato estudantil · PUC-Rio</div>
          <h1 className="sr">A PUC também é nossa.</h1>
          <HeroTitleReel />
          <p className="lead">Um ato pacífico de alunos que discordam do rumo do país e querem ser ouvidos dentro da própria universidade.</p>
          <Facts />
          <div className="btns">
            <a className="btn" href={WHATSAPP} target="_blank" rel="noopener noreferrer">Entrar no grupo do WhatsApp</a>
            <Link className="btn ghost" href="/pautas/">Nossas pautas</Link>
          </div>
        </div>
      </header>
      <main id="main">
        <section>
          <div className="wrap duo rv-host">
            <Reveal>
              <div className="label">Visão</div>
              <p>Um Brasil onde o cidadão de bem não vive com medo e onde o Estado serve a quem trabalha. Somos alunos cansados do PT: de um governo que gasta sem limite, passa a mão no crime e convive com um Supremo que, na nossa visão, governa no lugar de quem foi eleito.</p>
            </Reveal>
            <Reveal delay={150}>
              <div className="label">Objetivo</div>
              <p>Mostrar que a PUC não é unanimidade de esquerda. Que existe um grupo grande, organizado e com pautas firmes. E entregar à Vice-Reitoria pedidos concretos para que o campus seja plural de verdade.</p>
            </Reveal>
          </div>
        </section>
        <section>
          <div className="wrap">
            <Reveal><CountdownReel /></Reveal>
          </div>
        </section>
        <ScrollScrub />
        <section>
          <div className="wrap">
            <div className="label">O que defendemos</div>
            <Reveal><h2>Dez pautas, com a segurança em primeiro</h2></Reveal>
            <Reveal delay={100}><PautasShowcase /></Reveal>
            <ul className="sr">{PAUTAS.map((p) => <li key={p.title}>{p.title}: {p.text}</li>)}</ul>
            <div className="btns"><Link className="btn" style={{ background: "var(--ink)", color: "var(--bg)" }} href="/pautas/">Ler todas as pautas</Link></div>
          </div>
        </section>
        <section><div className="wrap"><Reveal><Mic /></Reveal></div></section>
        <Cta />
      </main>
    </>
  );
}
