"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About", num: "01." },
  { href: "/projects", label: "Work", num: "02." },
  { href: "/services", label: "Services", num: "03." },
  { href: "/contact", label: "Contact", num: "04." },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">Joshua.</Link>

          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                <span>{l.num}</span>{l.label}
              </Link>
            ))}
          </nav>

          <Link href="/resume" className="nav-resume">Resume</Link>

          <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.num}</span>{l.label}
          </Link>
        ))}
        <Link href="/resume" className="btn-outline" style={{ marginTop: 24, alignSelf: "flex-start" }} onClick={() => setOpen(false)}>
          Resume
        </Link>
      </div>
    </>
  );
}
