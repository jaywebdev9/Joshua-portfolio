import Link from "next/link";

export const metadata = { title: "Process | Joshua Mwalukimba" };

export default function ProcessPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <h1 className="page-title">How I Work</h1>
        <p className="page-desc" style={{ marginBottom: 40 }}>A simple process from discovery to launch.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[
            ["01", "Discovery", "Understand goals, users and current process."],
            ["02", "Planning", "Define scope, timeline and deliverables."],
            ["03", "Design", "Structure and interfaces focused on clarity."],
            ["04", "Development", "Clean, maintainable code with regular updates."],
            ["05", "Testing", "Responsive checks, forms and performance."],
            ["06", "Launch", "Deploy, handover and ongoing support."],
          ].map(([n, t, d]) => (
            <div key={n} style={{ display: "flex", gap: 16, padding: 20, border: "1px solid var(--border)", borderRadius: 4, background: "var(--bg-light)" }}>
              <span style={{ fontFamily: "var(--mono)", color: "var(--accent)", fontSize: 14 }}>{n}</span>
              <div>
                <h3 style={{ color: "var(--text)", fontSize: 16, marginBottom: 4 }}>{t}</h3>
                <p style={{ fontSize: 14 }}>{d}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Link href="/contact" className="btn-outline">Start a project</Link>
        </div>
      </div>
    </section>
  );
}
