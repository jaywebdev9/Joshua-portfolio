import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="https://github.com/jaywebdev9" target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/joshua-mwalukimba-a77a602a6" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="mailto:joshuamwalukimba2@gmail.com" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
      <p className="footer-copy">Designed & Built by Joshua Mwalukimba</p>
    </footer>
  );
}
