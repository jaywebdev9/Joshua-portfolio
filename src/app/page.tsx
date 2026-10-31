import Link from "next/link";
import { projects } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <p className="hero-eyebrow">Hi, my name is</p>
          <h1 className="hero-name">Joshua Mwalukimba.</h1>
          <h2 className="hero-tagline">I build digital solutions for businesses.</h2>
          <p className="hero-desc">
            I&apos;m a software developer based in Tanzania specializing in
            building websites and business systems that solve real operational
            problems — from online presence to inventory and sales management.
          </p>
          <Link href="/projects" className="hero-cta">
            Check out my work
          </Link>
        </div>
      </section>

      {/* ABOUT preview */}
      <section className="section" id="about">
        <div className="container">
          <div className="section-head">
            <span className="section-num">01.</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Hello! I&apos;m Joshua, a developer who enjoys turning business
                problems into clear digital tools. My focus is on building
                things that people actually use — websites that attract customers
                and systems that replace messy spreadsheets.
              </p>
              <p>
                I care about clean code, clear communication and delivering work
                that ships. Whether it&apos;s a lodge website, a photography studio
                site, or a full retail management system, the goal is the same:
                make the product useful.
              </p>
              <p>Here are a few technologies I&apos;ve been working with recently:</p>
              <ul className="skills-list">
                {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Prisma", "HTML & CSS"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
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

      {/* PROJECTS */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-head">
            <span className="section-num">02.</span>
            <h2 className="section-title">Some Things I&apos;ve Built</h2>
            <div className="section-line" />
          </div>
          <div className="project-list">
            {featured.map((p) => (
              <article key={p.id} className="project-card">
                <div className="project-img">{p.title}</div>
                <div>
                  <p className="project-over">{p.category} · {p.status}</p>
                  <h3 className="project-name">
                    <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="project-desc">{p.shortDesc}</p>
                  <div className="project-tech">
                    {p.techStack.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <Link href={`/projects/${p.slug}`} aria-label="Case study">
                      <ExternalLink size={16} />
                    </Link>
                    {p.githubUrl && p.githubUrl !== "#" && (
                      <a href={p.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/projects" className="btn-outline">View all projects</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <p className="contact-num">04. What&apos;s Next?</p>
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-desc">
          I&apos;m currently open to freelance projects and remote opportunities.
          Whether you have a question, a project idea, or just want to say hi —
          I&apos;ll do my best to get back to you.
        </p>
        <a href="mailto:joshuamwalukimba2@gmail.com" className="contact-btn">
          Say Hello
        </a>
      </section>
    </>
  );
}
