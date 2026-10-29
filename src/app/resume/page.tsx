import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Resume | Joshua Mwalukimba",
  description: "Download Joshua Mwalukimba's resume / CV.",
};

export default function ResumePage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <Link
          href="/about"
          className="mb-8 inline-flex items-center gap-1.5 text-[13.5px] text-[#A8B6CE] hover:text-white"
        >
          <ArrowLeft size={14} />
          Back to About
        </Link>

        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white">
          Resume
        </h1>
        <p className="mb-8 text-[15px] text-[#A8B6CE]">
          Download my latest CV as a PDF.
        </p>

        <a
          href="/Joshua_Mwalukimba_Resume.pdf"
          download
          className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[14px]"
        >
          <Download size={16} />
          Download CV (PDF)
        </a>

        <p className="mt-6 text-[13px] text-[#A8B6CE]">
          Prefer to talk first?{" "}
          <Link href="/contact" className="text-[#52B8FF] hover:underline">
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
