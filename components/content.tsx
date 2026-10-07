import Link from "next/link";
import Reveal from "./Reveal";

export const EVENT = { iso: "2026-10-13T11:00:00-03:00", label: "Terça, 13/10 · 11h", where: "Edifício Frings / Kennedy" };

export const PAUTAS = [
  { title: "Segurança pública", text: "O brasileiro vive refém. Tolerância zero com o crime: facção tratada como terrorismo, fim da saidinha e respaldo à polícia e à vítima." },
  { title: "Chega de PT", text: "Do mensalão ao petrolão, o país já viu do que esse projeto é capaz. Não aceitamos aparelhamento do Estado nem a volta das mesmas práticas." },
  { title: "STF no seu lugar", text: "Ministro não é eleito. Fim do ativismo judicial, das decisões que censuram e do Supremo legislando por cima do Congresso." },
  { title: "Liberdade de expressão", text: "Opinião não é crime. Ninguém deve ser censurado, derrubado ou investigado por discordar do governo." },
  { title: "Menos Estado, menos imposto", text: "Corte de gastos, fim da gastança e do rombo nas contas. Quem paga a conta é quem trabalha." },
  { title: "Livre iniciativa e mérito", text: "Menos burocracia, menos sindicato pendurado no Estado, mais liberdade para quem empreende e produz." },
  { title: "Universidade sem doutrinação", text: "Sala de aula é lugar de ensinar a pensar, não de militância. Espaço e respeito iguais para a direita no campus." },
  { title: "Propriedade privada", text: "Propriedade é direito. Segurança jurídica contra invasões e título de terra para quem vive e produz nela." },
  { title: "Revisão do pacto federativo", text: "Estados que mais produzem enviam muito mais do que recebem de volta. É hora de rever essa conta." },
  { title: "Liberdade econômica", text: "Na nossa visão, o Brasil trata o empreendedor como inimigo. Precisamos de reformas claras para quem quer produzir." },
];


export const REGRAS = [
  "Inscrição na hora, com a organização",
  "Até 3 minutos por pessoa, para todo mundo ter vez",
  "Crítica a ideias e governos, nunca ataque a pessoas",
  "Sem nome, número ou material de candidato",
  "Quem discordar do ato é ignorado, não confrontado",
];

export function Facts() {
  return (
    <div className="facts">
      <div className="fact"><b>Quando</b>{EVENT.label}</div>
      <div className="fact"><b>Onde</b>{EVENT.where}</div>
    </div>
  );
}

export function Featured({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={detailed ? "featured detailed" : "featured"}>
      <div className="featured-tag">Pauta nº 1</div>
      <h3>Segurança pública: tolerância zero com o crime</h3>
      <p>O brasileiro vive refém. Facção manda em território, bandido sai pela porta da frente e a vítima é tratada como detalhe. Chega.</p>
      <ul className="hard">
        {SEGURANCA.map(([b, t, why]) => <li key={b}><b>{b}</b> {t}{detailed && <span className="why">{why}</span>}</li>)}
      </ul>
    </div>
  );
}

export function Mic() {
  return (
    <div className="mic">
      <div className="label">Como vai ser o ato</div>
      <p className="big">Microfone aberto. A palavra é de todos.</p>
      <p>Não tem palanque nem dono do discurso. Quem quiser falar, fala. É o nosso momento de se expressar.</p>
      <ul className="rules">{REGRAS.map((r, i) => <li key={r}>{r}</li>)}</ul>
    </div>
  );
}

export function Cta({ hidePautas = false }: { hidePautas?: boolean }) {
  return (
    <section>
      <div className="wrap">
        <div className="cta">
          <p>Dia 13/10, 11h. Apareça e fale.</p>
          <div className="btns">
            <Link className="btn" href="/ato/">Como vai ser o ato</Link>
            {!hidePautas && <Link className="btn ghost" href="/pautas/">Ver as pautas</Link>}
          </div>
        </div>
      </div>
    </section>
  );
}

export const SEGURANCA = [
  ["Facção é terrorismo.", "Crime organizado tratado como terrorismo, com pena e regime à altura.", "Quem controla território, impõe regras pela violência e desafia o Estado não comete crime comum. Defendemos um enquadramento específico, com pena e cumprimento proporcionais ao dano."],
  ["Fim da saidinha", "e da progressão fácil de regime. Pena é para ser cumprida.", "Benefício automático enfraquece a sentença. Defendemos cumprimento efetivo da pena e critérios rígidos para qualquer benefício."],
  ["Redução da maioridade penal", "para crimes hediondos.", "Quem comete crime hediondo responde pelo que fez. A proposta é limitada a esses crimes, não uma regra geral."],
  ["Polícia respeitada.", "Respaldo jurídico, equipamento e salário para quem enfrenta o crime.", "O policial precisa de segurança jurídica para agir dentro da lei, equipamento adequado e remuneração digna."],
  ["Legítima defesa garantida.", "Direito do cidadão de defender a si, a família e o patrimônio.", "Quem se defende de uma agressão não pode ser tratado como criminoso. A lei deve proteger o cidadão que reage dentro dos limites da defesa."],
  ["Prioridade é a vítima,", "não o criminoso. Audiência de custódia não pode ser porta giratória.", "O sistema deve olhar primeiro para quem sofreu o crime. Audiência de custódia não pode servir para soltar quem reincide."],
];

export type Detail = { slug: string; title: string; resume: string; position: string; points: [string, string][] };
export const DETALHES: Detail[] = [
  {
    slug: "chega-de-pt", title: "Chega de PT",
    resume: "Sem aparelhamento do Estado e sem a volta das mesmas práticas.",
    position: "Do mensalão ao petrolão, o país já viu do que esse projeto é capaz. Somos alunos que não aceitam o uso da máquina pública por um partido, nem a volta de esquemas que a Justiça já julgou.",
    points: [["Fim do aparelhamento", "de órgãos e estatais por indicação política."], ["Transparência", "e prestação de contas no uso do dinheiro público."], ["Combate à corrupção", "sem seletividade, qualquer que seja o partido."]],
  },
  {
    slug: "stf-no-seu-lugar", title: "STF no seu lugar",
    resume: "Fim do ativismo judicial e do Supremo legislando por cima do Congresso.",
    position: "Ministro não é eleito. Na nossa visão, o Supremo deve julgar à luz da Constituição e deixar a criação de leis para quem recebe voto para isso.",
    points: [["Cabe ao Congresso legislar;", "cabe ao Judiciário julgar."], ["Debate sobre os limites", "das decisões individuais de ministros."], ["Separação dos Poderes", "respeitada, sem decisões que censuram."]],
  },
  {
    slug: "liberdade-de-expressao", title: "Liberdade de expressão",
    resume: "Opinião não é crime.",
    position: "Ninguém deve ser censurado, derrubado ou investigado por discordar do governo. Liberdade vale para todos, inclusive para quem pensa diferente de nós.",
    points: [["Contra a censura prévia", "e a remoção de conteúdo por causa de opinião."], ["Investigação só por crime,", "nunca por divergência política."], ["Debate livre,", "incluindo dentro da universidade."]],
  },
  {
    slug: "menos-estado-menos-imposto", title: "Menos Estado, menos imposto",
    resume: "Corte de gastos e fim do rombo nas contas.",
    position: "Quem paga a conta é quem trabalha. Defendemos um Estado que cabe no orçamento, gasta com responsabilidade e não resolve o rombo aumentando a carga sobre quem produz.",
    points: [["Corte de gastos", "e metas claras para as contas públicas."], ["Menor carga tributária", "sobre quem trabalha e empreende."], ["Prioridade para o essencial:", "segurança, saúde e educação."]],
  },
  {
    slug: "livre-iniciativa-e-merito", title: "Livre iniciativa e mérito",
    resume: "Menos burocracia, mais liberdade para quem empreende e produz.",
    position: "Quem quer abrir um negócio, contratar e crescer não pode esbarrar em burocracia e em estruturas penduradas no Estado. Valorizamos o esforço e o resultado de cada um.",
    points: [["Simplificar", "a abertura e o funcionamento de empresas."], ["Reduzir burocracia", "e regulação excessiva."], ["Mérito como critério,", "do mercado à sala de aula."]],
  },
  {
    slug: "universidade-sem-doutrinacao", title: "Universidade sem doutrinação",
    resume: "Espaço e respeito iguais para a direita no campus.",
    position: "Sala de aula é lugar de ensinar a pensar, não de militância. Queremos uma PUC onde o aluno possa discordar sem medo de ser prejudicado.",
    points: [["Pluralidade de visões", "em aulas, debates e convidados."], ["Avaliação pelo conteúdo,", "nunca pela posição política do aluno."], ["Mesmos critérios e espaço", "para atos de qualquer orientação."]],
  },
  {
    slug: "propriedade-privada", title: "Propriedade privada e direitos de terra",
    resume: "Propriedade é direito, e quem produz na terra precisa de título.",
    position: "Defendemos a propriedade privada como base da liberdade e da prosperidade, com segurança jurídica contra invasões, e a concessão de títulos de propriedade a quem vive e produz na terra.",
    points: [["Propriedade protegida", "contra invasão e confisco."], ["Título de terra", "para quem vive e produz nela."], ["Segurança jurídica", "para quem investe e trabalha, no campo e na cidade."]],
  },
  {
    slug: "pacto-federativo", title: "Revisão do pacto federativo",
    resume: "Quem mais produz não pode ser quem mais paga sem retorno.",
    position: "Estados como São Paulo e Rio de Janeiro enviam à União muito mais do que recebem de volta e ajudam a sustentar estados de menor arrecadação, como o Maranhão. Defendemos rever essa conta.",
    points: [["Revisão do pacto federativo", "com regras claras para a divisão dos recursos."], ["Mais retorno", "aos estados que mais arrecadam."], ["Mais autonomia", "para estados e municípios decidirem sobre o próprio dinheiro."]],
  },
  {
    slug: "liberdade-economica", title: "Liberdade econômica",
    resume: "O Brasil precisa parar de tratar o empreendedor como inimigo.",
    position: "Na nossa visão, quem abre um negócio, gera emprego e paga imposto enfrenta mais obstáculos do que apoio do Estado. Para virar esse jogo, o país precisa de reformas claras, com regras simples e previsíveis para quem quer produzir.",
    points: [["Reforma tributária", "que simplifique e reduza o peso sobre quem produz."], ["Desburocratização", "para abrir, manter e encerrar um negócio sem labirinto de regras."], ["Regras claras", "e estáveis, para quem investe saber o que esperar."]],
  },
];

export function PautasDetalhe() {
  return (
    <>
      {DETALHES.map((d, i) => (
        <Reveal key={d.slug} className="featured detailed three">
          <span id={d.slug} className="anchor" />
          <div className="featured-tag">Pauta nº {i + 2}</div>
          <h3>{d.title}</h3>
          <p>{d.resume} {d.position}</p>
          <ul className="hard">
            {d.points.map(([b, t]) => <li key={b}><b>{b}</b> {t}</li>)}
          </ul>
        </Reveal>
      ))}
    </>
  );
}

export function PautasIndex() {
  return (
    <nav className="chips" aria-label="Pautas">
      <a href="#seguranca">Segurança pública</a>
      {DETALHES.map((d) => <a key={d.slug} href={`#${d.slug}`}>{d.title}</a>)}
    </nav>
  );
}
