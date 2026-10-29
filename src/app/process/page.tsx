import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Process | Joshua Mwalukimba" };

export default function ProcessPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <p className="section-label">Process</p>
        <h1 className="section-title">How I work</h1>
        <p className="section-desc">A clear process designed to reduce uncertainty and deliver results that match your needs.</p>
        <div className="process-list mt-12">
          {[
            { n: "01", t: "Discovery", d: "We start by understanding your goals, current process, users and constraints." },
            { n: "02", t: "Planning", d: "I define scope, milestones, tech stack and acceptance criteria so you know what will be delivered." },
            { n: "03", t: "Design", d: "Structure, key screens and visual direction focused on clarity and usability." },
            { n: "04", t: "Development", d: "Clean, maintainable code with regular progress updates — no surprises at the end." },
            { n: "05", t: "Testing", d: "Responsive checks, forms, edge cases, basic performance and security before launch." },
            { n: "06", t: "Launch & Support", d: "Deployment, handover, short documentation and agreed support so you can run it confidently." },
          ].map((s) => (
            <div key={s.n} className="process-item">
              <span className="process-num">{s.n}</span>
              <div><h3>{s.t}</h3><p>{s.d}</p></div>
            </div>
          ))}
        </div>
        <div className="card text-center mt-12" style={{ padding: 40 }}>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>Ready to start?</h3>
          <p className="text-muted" style={{ marginBottom: 20, fontSize: 14 }}>Tell me about what you need.</p>
          <Link href="/contact" className="btn btn-primary">Discuss a Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
