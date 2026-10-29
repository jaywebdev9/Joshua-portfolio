import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container" style={{ maxWidth: 720 }}>
        <Link href="/projects" className="cs-back"><ArrowLeft size={14} /> All projects</Link>
        <div className="cs-header">
          <div className="cs-badges">
            <span className="badge">{p.category}</span>
            <span className="badge badge-muted">{p.status}</span>
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>{p.title}</h1>
          <p className="section-desc">{p.shortDesc}</p>
        </div>
        <div className="cs-cover">{p.title} — screenshot</div>
        {p.liveUrl && p.liveUrl !== "#" && (
          <div style={{ marginBottom: 40 }}>
            <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Live Demo <ExternalLink size={14} />
            </a>
          </div>
        )}
        {p.problem && <div className="cs-section"><h2>The Problem</h2><p>{p.problem}</p></div>}
        {p.solution && <div className="cs-section"><h2>The Solution</h2><p>{p.solution}</p></div>}
        {p.role && <div className="cs-section"><h2>My Role</h2><p>{p.role}</p></div>}
        {p.features && (
          <div className="cs-section">
            <h2>Key Features</h2>
            <ul className="cs-features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        )}
        <div className="cs-section">
          <h2>Tech Stack</h2>
          <div className="project-tags">{p.techStack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
        </div>
        {p.results && <div className="cs-section"><h2>Results & Status</h2><p>{p.results}</p></div>}
        <div className="card" style={{ padding: 32, textAlign: "center", marginTop: 48 }}>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>Have a similar project in mind?</h3>
          <p className="text-muted" style={{ marginBottom: 20, fontSize: 14 }}>Let’s discuss how I can help.</p>
          <Link href="/contact" className="btn btn-primary">Discuss a Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}
