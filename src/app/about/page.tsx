import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export const metadata = {
  title: "About | Joshua Mwalukimba",
  description: "Full-Stack Developer based in Tanzania building digital solutions for businesses.",
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          {/* Left - Story */}
          <div>
            <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
              ABOUT
            </p>
            <h1 className="mb-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Turning ideas into digital solutions
            </h1>

            <div className="space-y-5 text-[15px] leading-relaxed text-[#A8B6CE]">
              <p>
                I’m Joshua Mwalukimba, a Full-Stack Developer based in Tanzania. I specialize in
                building modern websites and business systems that solve real operational problems —
                from professional online presence to inventory and sales management.
              </p>
              <p>
                I care about clarity, clean code, and delivering work that actually ships and gets used.
                Whether it’s a lodge website, a photography studio site, or a full retail management
                system, my focus is on making the product useful for the people who will use it every day.
              </p>
              <p>
                I’m currently available for freelance projects and open to remote opportunities where
                I can contribute to meaningful products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px]"
              >
                Get in touch
                <ArrowRight size={14} />
              </Link>
              <a
                href="/resume"
                className="btn-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13.5px]"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right - Info cards */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-[14px] font-medium text-white">Quick facts</h3>
              <dl className="space-y-3 text-[13.5px]">
                <div className="flex justify-between">
                  <dt className="text-[#A8B6CE]">Location</dt>
                  <dd className="text-white">Tanzania</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#A8B6CE]">Focus</dt>
                  <dd className="text-white">Websites & Business Systems</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#A8B6CE]">Availability</dt>
                  <dd className="text-emerald-400">Open to work</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#A8B6CE]">Languages</dt>
                  <dd className="text-white">English, Kiswahili</dd>
                </div>
              </dl>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-[14px] font-medium text-white">Tech I work with</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js",
                  "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Git",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-[12px] text-[#A8B6CE]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="mb-3 text-[14px] font-medium text-white">What I value</h3>
              <ul className="space-y-2 text-[13.5px] text-[#A8B6CE]">
                <li className="flex gap-2">
                  <span className="text-[#52B8FF]">•</span>
                  Clear communication and realistic timelines
                </li>
                <li className="flex gap-2">
                  <span className="text-[#52B8FF]">•</span>
                  Clean, maintainable code
                </li>
                <li className="flex gap-2">
                  <span className="text-[#52B8FF]">•</span>
                  Solutions that match real business needs
                </li>
                <li className="flex gap-2">
                  <span className="text-[#52B8FF]">•</span>
                  Continuous learning and improvement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
