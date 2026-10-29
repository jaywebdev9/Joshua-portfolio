import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div style={{ maxWidth: 280 }}>
            <div className="logo" style={{ marginBottom: 12 }}>
              <span className="logo-badge">J</span>
              <span>Joshua Mwalukimba</span>
            </div>
            <p className="text-muted" style={{ fontSize: 13.5, lineHeight: 1.6 }}>
              Full-Stack Developer building digital solutions that help businesses work smarter.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <span style={{ fontWeight: 500, color: "#fff", marginBottom: 4 }}>Navigate</span>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
            </div>
            <div className="footer-col">
              <span style={{ fontWeight: 500, color: "#fff", marginBottom: 4 }}>Connect</span>
              <a href="mailto:joshuamwalukimba2@gmail.com">Email</a>
              <a href="https://wa.me/255689995937" target="_blank" rel="noreferrer">WhatsApp</a>
              <a href="https://github.com/jaywebdev9" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/joshua-mwalukimba-a77a602a6" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Joshua Mwalukimba. All rights reserved.</p>
          <p>Based in Tanzania · Available for remote work</p>
        </div>
      </div>
    </footer>
  );
}
