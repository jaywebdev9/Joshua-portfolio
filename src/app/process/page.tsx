import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Process | Joshua Mwalukimba",
  description: "How I work with clients — from discovery to launch and support.",
};

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start by understanding your goals, current process, users and constraints. I ask questions so the solution matches real needs, not assumptions.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "I define scope, milestones, tech stack and acceptance criteria. You get a clear picture of what will be delivered and roughly when.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Structure, key screens and visual direction are established. The focus is on clarity and usability for the people who will actually use the product.",
  },
  {
    num: "04",
    title: "Development",
    desc: "I build the solution with clean, maintainable code. You receive progress updates so there are no surprises at the end.",
  },
  {
    num: "05",
    title: "Testing",
    desc: "Responsive checks, forms, edge cases, basic performance and security are reviewed before launch.",
  },
  {
    num: "06",
    title: "Launch & Support",
    desc: "Deployment, handover, short documentation and agreed support so you can run the system confidently.",
  },
];

export default function ProcessPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
            PROCESS
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            How I work
          </h1>
          <p className="text-[15.5px] leading-relaxed text-[#A8B6CE]">
            A clear, collaborative process designed to reduce uncertainty and deliver
            results that match your business needs.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="shrink-0 text-[15px] font-semibold text-[#52B8FF]">
                {s.num}
              </span>
              <div>
                <h2 className="mb-2 text-[16px] font-medium text-white">{s.title}</h2>
                <p className="text-[14.5px] leading-relaxed text-[#A8B6CE]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/5 bg-[#101C30]/50 p-8 text-center">
          <h3 className="mb-3 text-xl font-medium text-white">
            Ready to start a project?
          </h3>
          <p className="mb-6 text-[14.5px] text-[#A8B6CE]">
            Tell me about what you need and we’ll take it from there.
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
    </section>
  );
}
