import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -160,
            right: 0,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(22,139,250,0.1)",
            filter: "blur(120px)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ paddingTop: 64, paddingBottom: 80 }}>
          <div className="hero-grid">
            <div>
              <p className="label">SOFTWARE DEVELOPER · TANZANIA</p>
              <h1
                style={{
                  fontSize: "clamp(1.75rem, 5vw, 3.1rem)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                I build digital solutions that help businesses{" "}
                <span className="text-cyan">work smarter.</span>
              </h1>
              <p
                className="text-muted"
                style={{ fontSize: 15.5, lineHeight: 1.7, maxWidth: 480, marginBottom: 32 }}
              >
                Business websites, management systems and custom software designed
                around real operational needs — from improving online presence to
                organizing everyday operations.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="/contact" className="btn-primary">
                  Discuss a Project
                  <ArrowRight size={16} />
                </Link>
                <Link href="/projects" className="btn-secondary">
                  Explore My Work
                </Link>
              </div>
              <div className="trust-row">
                <span>
                  <span className="dot-green" />
                  Available for freelance
                </span>
                <span>Based in Tanzania</span>
                <span>Remote-friendly</span>
              </div>
            </div>

            {/* Photo area */}
            <div style={{ position: "relative", maxWidth: 400, margin: "0 auto", width: "100%" }}>
              <div className="glass" style={{ borderRadius: 16, padding: 4, overflow: "hidden" }}>
                <div
                  style={{
                    aspectRatio: "4/5",
                    borderRadius: 12,
                    background: "#101C30",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#A8B6CE",
                    fontSize: 14,
                  }}
                >
                  Your professional photo here
                </div>
              </div>
              <div
                className="glass"
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: 16,
                  right: 16,
                  borderRadius: 12,
                  padding: "12px 16px",
                  textAlign: "center",
                  fontSize: 13,
                }}
              >
                <span className="text-cyan">Full-Stack Developer</span>
                <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.2)" }}>·</span>
                <span className="text-muted">Websites & Business Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p className="label">SELECTED WORK</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff" }}>
                Projects built for real business needs
              </h2>
            </div>
            <Link href="/projects" className="text-cyan" style={{ fontSize: 13.5, display: "inline-flex", alignItems: "center", gap: 6 }}>
              View all projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="projects-grid featured">
            {featured.map((project) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="project-card glass glass-hover">
                <div className="project-card-image">
                  {project.title} screenshot
                  <span className="status-badge">{project.status}</span>
                </div>
                <div className="project-card-body">
                  <span className="text-cyan" style={{ fontSize: 12, marginBottom: 6 }}>{project.category}</span>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: "#fff", marginBottom: 8 }}>{project.title}</h3>
                  <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 16, flex: 1 }}>
                    {project.shortDesc}
                  </p>
                  <div className="tech-tags">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(8,14,26,0.5)" }}>
        <div className="container">
          <div style={{ maxWidth: 560, marginBottom: 40 }}>
            <p className="label">SERVICES</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff" }}>
              What I can help you build
            </h2>
          </div>
          <div className="services-grid">
            {[
              { title: "Business Websites", desc: "Professional websites that build trust and bring customers — for lodges, studios, agencies and local businesses." },
              { title: "Business Systems", desc: "Inventory, sales, bookings and internal tools that replace notebooks and spreadsheets." },
              { title: "E-commerce Solutions", desc: "Online stores with product management, payments and order tracking." },
              { title: "Custom Software", desc: "Tailored solutions when off-the-shelf tools don’t fit your unique process." },
              { title: "Website Redesign", desc: "Modernize an existing website for better speed, mobile experience and conversion." },
              { title: "Maintenance & Support", desc: "Keep your system secure, updated and running smoothly after launch." },
            ].map((item) => (
              <div key={item.title} className="service-card glass glass-hover">
                <h3 style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 8 }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn-secondary">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ maxWidth: 560, marginBottom: 40 }}>
            <p className="label">HOW I WORK</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff" }}>
              Simple process, clear results
            </h2>
          </div>
          <div className="process-grid">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals, users and current process." },
              { step: "02", title: "Planning", desc: "Define scope, timeline, tech stack and deliverables." },
              { step: "03", title: "Design", desc: "Create clear structure and user-friendly interfaces." },
              { step: "04", title: "Development", desc: "Build clean, maintainable and scalable code." },
              { step: "05", title: "Testing", desc: "Check responsiveness, forms, edge cases and performance." },
              { step: "06", title: "Launch & Support", desc: "Deploy, hand over documentation and provide ongoing support." },
            ].map((item) => (
              <div key={item.step} className="process-item">
                <span className="text-cyan" style={{ fontSize: 13, fontWeight: 600 }}>{item.step}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 500, color: "#fff", marginBottom: 4 }}>{item.title}</h3>
                  <p className="text-muted" style={{ fontSize: 13.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 640 }}>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 600, color: "#fff", marginBottom: 16 }}>
            Have a business problem that software could solve?
          </h2>
          <p className="text-muted" style={{ fontSize: 15, marginBottom: 32 }}>
            Let’s discuss the right approach — whether you need a website, a management system, or something custom.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <Link href="/contact" className="btn-primary">
              Discuss a Project <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/255689995937" target="_blank" rel="noreferrer" className="btn-secondary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
