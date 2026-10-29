import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Projects | Joshua Mwalukimba",
  description: "Selected projects built to solve real business problems.",
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
            PROJECTS
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Selected work
          </h1>
          <p className="text-[15px] leading-relaxed text-[#A8B6CE]">
            Real projects built for businesses and creators. Each one solves a
            practical problem — from inventory management to professional online presence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl transition"
            >
              <div className="aspect-[16/9] relative bg-[#101C30]">
                <div className="absolute inset-0 flex items-center justify-center text-[13px] text-[#A8B6CE]">
                  {project.title} — screenshot
                </div>
                <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {project.status}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-[12px] text-[#52B8FF]">{project.category}</div>
                <h2 className="mb-2 text-lg font-medium text-white group-hover:text-[#52B8FF] transition">
                  {project.title}
                </h2>
                <p className="mb-5 flex-1 text-[14px] leading-relaxed text-[#A8B6CE]">
                  {project.shortDesc}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-[#A8B6CE]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[13px] text-[#52B8FF]">
                  View case study
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
