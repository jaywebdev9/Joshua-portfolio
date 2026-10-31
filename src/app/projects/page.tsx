import Link from "next/link";
import { projects } from "@/lib/projects";
import { ExternalLink } from "lucide-react";

export const metadata = { title: "Work | Joshua Mwalukimba" };

export default function ProjectsPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <p className="hero-eyebrow">Archive</p>
        <h1 className="page-title">All Projects</h1>
        <p className="page-desc" style={{ marginBottom: 48 }}>A collection of projects I&apos;ve built for businesses and personal use.</p>
        <div className="project-list">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-img">{p.title}</div>
              <div>
                <p className="project-over">{p.category} · {p.status}</p>
                <h2 className="project-name"><Link href={`/projects/${p.slug}`}>{p.title}</Link></h2>
                <p className="project-desc">{p.shortDesc}</p>
                <div className="project-tech">{p.techStack.map((t) => <span key={t}>{t}</span>)}</div>
                <div className="project-links">
                  <Link href={`/projects/${p.slug}`}><ExternalLink size={16} /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
