import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Joshua Mwalukimba`,
    description: project.shortDesc,
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="section">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-[13.5px] text-[#A8B6CE] hover:text-white transition"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <div className="mb-10">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#168BFA]/15 px-3 py-1 text-[12px] font-medium text-[#52B8FF]">
              {project.category}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-[12px] text-[#A8B6CE]">
              {project.status}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-[16px] leading-relaxed text-[#A8B6CE]">
            {project.shortDesc}
          </p>
        </div>

        <div className="glass mb-12 aspect-[16/9] overflow-hidden rounded-2xl bg-[#101C30]">
          <div className="flex h-full items-center justify-center text-[14px] text-[#A8B6CE]">
            {project.title} — main screenshot
          </div>
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px]"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px]"
            >
              <Github size={14} />
              Source Code
            </a>
          )}
        </div>

        <div className="space-y-10">
          {project.problem && (
            <section>
              <h2 className="mb-3 text-lg font-medium text-white">The Problem</h2>
              <p className="text-[15px] leading-relaxed text-[#A8B6CE]">{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2 className="mb-3 text-lg font-medium text-white">The Solution</h2>
              <p className="text-[15px] leading-relaxed text-[#A8B6CE]">{project.solution}</p>
            </section>
          )}

          {project.role && (
            <section>
              <h2 className="mb-3 text-lg font-medium text-white">My Role</h2>
              <p className="text-[15px] leading-relaxed text-[#A8B6CE]">{project.role}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-medium text-white">Key Features</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[14.5px] text-[#A8B6CE]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#52B8FF]" />
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h2 className="mb-4 text-lg font-medium text-white">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[13px] text-[#A8B6CE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {project.results && (
            <section>
              <h2 className="mb-3 text-lg font-medium text-white">Results & Status</h2>
              <p className="text-[15px] leading-relaxed text-[#A8B6CE]">{project.results}</p>
            </section>
          )}
        </div>

        <div className="mt-16 rounded-2xl border border-white/5 bg-[#101C30]/60 p-8 text-center">
          <h3 className="mb-3 text-xl font-medium text-white">
            Have a similar project in mind?
          </h3>
          <p className="mb-6 text-[14.5px] text-[#A8B6CE]">
            Let’s discuss how I can help you build it.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
          >
            Discuss a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
