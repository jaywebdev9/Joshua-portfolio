import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Resume | Joshua Mwalukimba" };

export default function ResumePage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 80px)", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 480 }}>
        <Link href="/about" className="hero-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
          <ArrowLeft size={14} /> Back
        </Link>
        <h1 className="page-title">Resume</h1>
        <p className="page-desc" style={{ margin: "0 auto 32px" }}>Download my CV as PDF.</p>
        <a href="/Joshua_Mwalukimba_Resume.pdf" download className="btn-outline">Download CV</a>
      </div>
    </section>
  );
}
