import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080E1A]">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#168BFA]/15 text-[#52B8FF] text-sm font-bold">
                J
              </span>
              <span>Joshua Mwalukimba</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-[#A8B6CE]">
              Full-Stack Developer building digital solutions that help businesses work smarter.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 text-[13.5px]">
            <div className="flex flex-col gap-2.5">
              <span className="mb-1 font-medium text-white">Navigate</span>
              <Link href="/projects" className="text-[#A8B6CE] hover:text-white">
                Projects
              </Link>
              <Link href="/services" className="text-[#A8B6CE] hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-[#A8B6CE] hover:text-white">
                About
              </Link>
              <Link href="/process" className="text-[#A8B6CE] hover:text-white">
                Process
              </Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="mb-1 font-medium text-white">Connect</span>
              <a href="mailto:joshuamwalukimba2@gmail.com" className="text-[#A8B6CE] hover:text-white">
                Email
              </a>
              <a href="https://wa.me/255689995937" target="_blank" className="text-[#A8B6CE] hover:text-white">
                WhatsApp
              </a>
              <a href="https://github.com/jaywebdev9" target="_blank" className="text-[#A8B6CE] hover:text-white">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joshua-mwalukimba-a77a602a6"
                target="_blank"
                className="text-[#A8B6CE] hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-[12.5px] text-[#A8B6CE] md:flex-row">
          <p>© {new Date().getFullYear()} Joshua Mwalukimba. All rights reserved.</p>
          <p>Based in Tanzania · Available for remote work</p>
        </div>
      </div>
    </footer>
  );
}
