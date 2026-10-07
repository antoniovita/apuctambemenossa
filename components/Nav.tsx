"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/pautas/", label: "Pautas" },
  { href: "/ato/", label: "O ato" },
];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav" aria-label="Principal">
      <div className="wrap">
        <Link className="brand" href="/">A PUC também <span>é nossa</span></Link>
        <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
        <ul id="menu" className={open ? "open" : ""}>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} aria-current={path === l.href ? "page" : undefined} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
