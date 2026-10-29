import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="hero-eyebrow">Software Developer · Tanzania</p>
              <h1 className="hero-title">
                I build digital solutions that help businesses <span>work smarter.</span>
              </h1>
              <p className="hero-desc">
                Business websites, management systems and custom software designed around real operational needs.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="btn btn-primary">
                  Discuss a Project <ArrowRight size={16} />
                </Link>
                <Link href="/projects" className="btn btn-outline">
                  Explore My Work
                </Link>
              </div>
              <div className="hero-meta">
                <span><span className="dot" /> Available for freelance</span>
                <span>Based in Tanzania</span>
                <span>Remote-friendly</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo">Your professional photo</div>
              <div className="hero-badge">
                <strong>Full-Stack Developer</strong>
                <span> · Websites & Business Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Projects built for real business needs</h2>
            </div>
            <Link href="/projects" className="text-accent" style={{ fontSize: 14, display: "inline-flex", alignItems: "center", gap: 6 }}>
              View all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="projects-grid cols-3">
            {featured.map((p) => (
              <Link key={p.id} href={`/projects/${p.slug}`} className="card">
                <div className="project-img">
                  {p.title} screenshot
                  <span className="project-status">{p.status}</span>
                </div>
                <div className="project-body">
                  <p className="project-cat">{p.category}</p>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.shortDesc}</p>
                  <div className="project-tags">
                    {p.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ borderTop: "1px solid var(--border)", background: "#080D18" }}>
        <div className="container">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I can help you build</h2>
          <div className="services-grid mt-10">
            {[
              { t: "Business Websites", d: "Professional websites that build trust and attract customers — for lodges, studios, agencies and local businesses." },
              { t: "Business Systems", d: "Inventory, sales, bookings and internal tools that replace notebooks and spreadsheets." },
              { t: "E-commerce", d: "Online stores with product management, payments and order tracking." },
              { t: "Custom Software", d: "Tailored solutions when off-the-shelf tools don’t fit your process." },
              { t: "Website Redesign", d: "Modernize an existing site for better speed, mobile experience and conversion." },
              { t: "Maintenance", d: "Keep your system secure, updated and running smoothly after launch." },
            ].map((s) => (
              <div key={s.t} className="card service-card">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn btn-outline">View all services</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-label">How I Work</p>
          <h2 className="section-title">Simple process, clear results</h2>
          <div className="process-list mt-10">
            {[
              { n: "01", t: "Discovery", d: "Understand goals, users and current process." },
              { n: "02", t: "Planning", d: "Define scope, timeline and deliverables." },
              { n: "03", t: "Design", d: "Clear structure and user-friendly interfaces." },
              { n: "04", t: "Development", d: "Clean, maintainable and scalable code." },
              { n: "05", t: "Testing", d: "Responsive checks, forms and performance." },
              { n: "06", t: "Launch & Support", d: "Deploy, handover and ongoing support." },
            ].map((s) => (
              <div key={s.n} className="process-item">
                <span className="process-num">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container text-center" style={{ maxWidth: 560 }}>
          <h2 className="section-title">Have a business problem software could solve?</h2>
          <p className="section-desc" style={{ margin: "0 auto 32px" }}>
            Let’s discuss the right approach — website, management system, or something custom.
          </p>
          <div className="flex-center">
            <Link href="/contact" className="btn btn-primary">Discuss a Project <ArrowRight size={16} /></Link>
            <a href="https://wa.me/255689995937" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
