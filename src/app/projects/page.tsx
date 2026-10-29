import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Projects | Joshua Mwalukimba" };

export default function ProjectsPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h1 className="section-title">Selected work</h1>
        <p className="section-desc">Real projects built for businesses and creators.</p>
        <div className="projects-grid mt-12">
          {projects.map((p) => (
            <Link key={p.id} href={`/projects/${p.slug}`} className="card">
              <div className="project-img">
                {p.title} screenshot
                <span className="project-status">{p.status}</span>
              </div>
              <div className="project-body">
                <p className="project-cat">{p.category}</p>
                <h2 className="project-title">{p.title}</h2>
                <p className="project-desc">{p.shortDesc}</p>
                <div className="project-tags">
                  {p.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <p className="text-accent" style={{ fontSize: 13, marginTop: 16, display: "flex", alignItems: "center", gap: 4 }}>
                  View case study <ArrowRight size={14} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
