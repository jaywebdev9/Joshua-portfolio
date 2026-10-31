import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft } from "lucide-react";

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
        <Link href="/projects" className="hero-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 32 }}>
          <ArrowLeft size={14} /> All projects
        </Link>
        <p className="project-over">{p.category} · {p.status}</p>
        <h1 className="page-title">{p.title}</h1>
        <p className="page-desc" style={{ marginBottom: 40 }}>{p.shortDesc}</p>
        <div className="project-img" style={{ marginBottom: 40, aspectRatio: "16/9" }}>{p.title} screenshot</div>
        {p.problem && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--text)", fontSize: 18, marginBottom: 10 }}>The Problem</h2>
            <p style={{ lineHeight: 1.7 }}>{p.problem}</p>
          </div>
        )}
        {p.solution && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--text)", fontSize: 18, marginBottom: 10 }}>The Solution</h2>
            <p style={{ lineHeight: 1.7 }}>{p.solution}</p>
          </div>
        )}
        {p.role && (
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ color: "var(--text)", fontSize: 18, marginBottom: 10 }}>My Role</h2>
            <p style={{ lineHeight: 1.7 }}>{p.role}</p>
          </div>
        )}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ color: "var(--text)", fontSize: 18, marginBottom: 12 }}>Tech Stack</h2>
          <div className="project-tech">{p.techStack.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
          <Link href="/contact" className="btn-outline">Discuss a similar project</Link>
        </div>
      </div>
    </article>
  );
}
