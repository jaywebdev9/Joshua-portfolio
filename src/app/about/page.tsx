import Link from "next/link";

export const metadata = { title: "About | Joshua Mwalukimba" };

export default function AboutPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <div className="section-head">
          <span className="section-num">01.</span>
          <h1 className="section-title">About Me</h1>
          <div className="section-line" />
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p>I&apos;m Joshua Mwalukimba, a software developer based in Tanzania. I build websites and business systems that help businesses work smarter.</p>
            <p>My work ranges from professional websites for lodges and studios to full inventory and sales systems for retail shops. I care about clarity, clean code, and shipping work that people actually use.</p>
            <p>I&apos;m currently available for freelance projects and open to remote opportunities.</p>
            <ul className="skills-list" style={{ marginTop: 32 }}>
              {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "HTML & CSS", "Git", "Responsive Design"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-outline">Get in touch</Link>
              <Link href="/resume" className="btn-outline">Resume</Link>
            </div>
          </div>
          <div className="about-photo">
            <div className="about-photo-border" />
            <div className="about-photo-frame" style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: 13 }}>
              Your photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
