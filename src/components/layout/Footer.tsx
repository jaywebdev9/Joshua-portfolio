import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <span className="nav-logo-mark">J</span>
              <span>Joshua Mwalukimba</span>
            </Link>
            <p>Full-Stack Developer building digital solutions that help businesses work smarter.</p>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <strong>Navigate</strong>
              <Link href="/projects">Projects</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/process">Process</Link>
            </div>
            <div className="footer-col">
              <strong>Connect</strong>
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
