import type { Metadata, Viewport } from "next";
import { Anton, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--f-anton", display: "swap" });
const barlow = Barlow({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--f-barlow", display: "swap" });
const cond = Barlow_Condensed({ weight: ["500", "600"], subsets: ["latin"], variable: "--f-cond", display: "swap" });

export const metadata: Metadata = {
  title: { default: "A PUC também é nossa", template: "%s · A PUC também é nossa" },
  description: "Ato estudantil pacífico na PUC-Rio, terça 13/10 às 11h, no Edifício Frings / Kennedy. Microfone aberto.",
};
export const viewport: Viewport = { themeColor: "#0f1a2e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable} ${cond.variable}`}>
      <body>
        <a className="skip" href="#main">Ir para o conteúdo</a>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
