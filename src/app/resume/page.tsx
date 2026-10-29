import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";

export const metadata = { title: "Resume | Joshua Mwalukimba" };

export default function ResumePage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 64px)", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <Link href="/about" className="cs-back" style={{ justifyContent: "center" }}>
          <ArrowLeft size={14} /> Back to About
        </Link>
        <h1 className="section-title">Resume</h1>
        <p className="section-desc" style={{ margin: "0 auto 32px" }}>Download my latest CV as PDF.</p>
        <a href="/Joshua_Mwalukimba_Resume.pdf" download className="btn btn-primary">
          <Download size={16} /> Download CV
        </a>
      </div>
    </section>
  );
}
