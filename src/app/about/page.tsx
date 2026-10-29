import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata = { title: "About | Joshua Mwalukimba" };

export default function AboutPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <div style={{ display: "grid", gap: 48 }} className="about-grid">
          <div>
            <p className="section-label">About</p>
            <h1 className="section-title">Turning ideas into digital solutions</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 540 }}>
              <p>I’m Joshua Mwalukimba, a Full-Stack Developer based in Tanzania. I build modern websites and business systems that solve real operational problems.</p>
              <p>I care about clarity, clean code, and delivering work that actually ships and gets used — whether it’s a lodge website, a studio site, or a full retail management system.</p>
              <p>Currently available for freelance projects and open to remote opportunities.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
              <Link href="/contact" className="btn btn-primary">Get in touch <ArrowRight size={14} /></Link>
              <Link href="/resume" className="btn btn-outline"><Download size={14} /> Download CV</Link>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 14, marginBottom: 16 }}>Quick facts</h3>
              {[
                ["Location", "Tanzania"],
                ["Focus", "Websites & Business Systems"],
                ["Availability", "Open to work"],
                ["Languages", "English, Kiswahili"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 10 }}>
                  <span className="text-muted">{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: 14, marginBottom: 12 }}>Tech I work with</h3>
              <div className="project-tags">
                {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "Git"].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1.2fr 0.8fr !important; }
        }
      `}</style>
    </section>
  );
}
