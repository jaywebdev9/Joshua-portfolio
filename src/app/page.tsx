import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden">
        {/* subtle background glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-[#168BFA]/10 blur-[120px]" />

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left content */}
            <div>
              <p className="mb-4 text-[13px] font-medium tracking-widest text-[#52B8FF]">
                SOFTWARE DEVELOPER · TANZANIA
              </p>

              <h1 className="mb-5 text-4xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                I build digital solutions that help businesses{" "}
                <span className="text-[#52B8FF]">work smarter.</span>
              </h1>

              <p className="mb-8 max-w-lg text-[15.5px] leading-relaxed text-[#A8B6CE]">
                Business websites, management systems and custom software designed
                around real operational needs — from improving online presence to
                organizing everyday operations.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                >
                  Discuss a Project
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/projects"
                  className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
                >
                  Explore My Work
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#A8B6CE]">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for freelance
                </span>
                <span>Based in Tanzania</span>
                <span>Remote-friendly</span>
              </div>
            </div>

            {/* Right - Photo / visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="glass glow-blue relative overflow-hidden rounded-2xl p-1">
                <div className="aspect-[4/5] overflow-hidden rounded-[14px] bg-[#101C30]">
                  {/* Replace with real photo later */}
                  <div className="flex h-full items-center justify-center text-[#A8B6CE]">
                    <span className="text-sm">Your professional photo here</span>
                  </div>
                </div>
              </div>
              {/* floating badge */}
              <div className="glass absolute -bottom-4 left-4 right-4 rounded-xl px-4 py-3 text-center text-[13px]">
                <span className="text-[#52B8FF]">Full-Stack Developer</span>
                <span className="mx-2 text-white/20">·</span>
                <span className="text-[#A8B6CE]">Websites & Business Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURED PROJECTS ========== */}
      <section className="section border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
                SELECTED WORK
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Projects built for real business needs
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1.5 text-[13.5px] text-[#52B8FF] hover:underline md:flex"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="glass glass-hover group flex flex-col overflow-hidden rounded-2xl transition"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-[#101C30] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-[13px] text-[#A8B6CE]">
                    {project.title} screenshot
                  </div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                    {project.status}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[12px] text-[#52B8FF]">{project.category}</span>
                  </div>
                  <h3 className="mb-2 text-[16px] font-medium text-white group-hover:text-[#52B8FF] transition">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-[13.5px] leading-relaxed text-[#A8B6CE] line-clamp-2">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-[#A8B6CE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-[#52B8FF]"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== WHAT I CAN HELP WITH ========== */}
      <section className="section border-t border-white/5 bg-[#080E1A]/50">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 max-w-xl">
            <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
              SERVICES
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              What I can help you build
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business Websites",
                desc: "Professional websites that build trust and bring customers — for lodges, studios, agencies and local businesses.",
              },
              {
                title: "Business Systems",
                desc: "Inventory, sales, bookings and internal tools that replace notebooks and spreadsheets with clear digital workflows.",
              },
              {
                title: "E-commerce Solutions",
                desc: "Online stores with product management, secure payments and order tracking tailored to your operations.",
              },
              {
                title: "Custom Software",
                desc: "Tailored solutions when off-the-shelf tools don’t fit your unique business process.",
              },
              {
                title: "Website Redesign",
                desc: "Modernize an existing website for better speed, mobile experience and conversion.",
              },
              {
                title: "Maintenance & Support",
                desc: "Keep your system secure, updated and running smoothly after launch.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass glass-hover rounded-2xl p-5 transition"
              >
                <h3 className="mb-2 text-[15px] font-medium text-white">{item.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#A8B6CE]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[13.5px]"
            >
              View all services
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROCESS PREVIEW ========== */}
      <section className="section border-t border-white/5">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 max-w-xl">
            <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
              HOW I WORK
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Simple process, clear results
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { step: "01", title: "Discovery", desc: "Understand your goals, users and current process." },
              { step: "02", title: "Planning", desc: "Define scope, timeline, tech stack and deliverables." },
              { step: "03", title: "Design", desc: "Create clear structure and user-friendly interfaces." },
              { step: "04", title: "Development", desc: "Build clean, maintainable and scalable code." },
              { step: "05", title: "Testing", desc: "Check responsiveness, forms, edge cases and performance." },
              { step: "06", title: "Launch & Support", desc: "Deploy, hand over documentation and provide ongoing support." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-2xl border border-white/5 bg-[#101C30]/40 p-5">
                <span className="text-[13px] font-semibold text-[#52B8FF]">{item.step}</span>
                <div>
                  <h3 className="mb-1 text-[15px] font-medium text-white">{item.title}</h3>
                  <p className="text-[13.5px] text-[#A8B6CE]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="section border-t border-white/5">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Have a business problem that software could solve?
          </h2>
          <p className="mb-8 text-[15px] text-[#A8B6CE]">
            Let’s discuss the right approach — whether you need a website, a management system, or something custom.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px]"
            >
              Discuss a Project
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/255689995937"
              target="_blank"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-7 py-3 text-[14px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
