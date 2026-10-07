import type { Metadata } from "next";
import { Cta, Featured, PautasDetalhe, PautasIndex } from "@/components/content";

export const metadata: Metadata = { title: "Pautas", description: "Segurança pública, STF, liberdade de expressão, economia e universidade plural: o que defendemos e por quê." };

export default function Pautas() {
  return (
    <>
      <header className="hero small"><div className="wrap">
        <div className="eyebrow">O que defendemos</div>
        <h1>Nossas <span>pautas.</span></h1>
        <p className="lead">Dez frentes, uma posição clara em cada uma e o que isso significa na prática.</p>
      </div></header>
      <main id="main">
        <section><div className="wrap">
          <PautasIndex />
          <span id="seguranca" className="anchor" />
          <Featured detailed />
          <PautasDetalhe />
        </div></section>
        <Cta hidePautas />
      </main>
    </>
  );
}
