"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <p className="section-label">Contact</p>
        <h1 className="section-title">Let’s build something useful</h1>
        <p className="section-desc">Have a project in mind or a question? Send a message or reach me on WhatsApp.</p>

        <div style={{ display: "grid", gap: 40, marginTop: 48 }} className="contact-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { icon: <Mail size={18} />, label: "Email", value: "joshuamwalukimba2@gmail.com", href: "mailto:joshuamwalukimba2@gmail.com" },
              { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+255 689 995 937", href: "https://wa.me/255689995937" },
              { icon: <Phone size={18} />, label: "Phone", value: "+255 768 403 948", href: "tel:+255768403948" },
              { icon: <MapPin size={18} />, label: "Location", value: "Tanzania · Remote-friendly", href: undefined },
            ].map((c) => (
              <a key={c.label} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                className="card" style={{ padding: 16, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <p style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.label}</p>
                  <p style={{ fontSize: 14 }}>{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="card" style={{ padding: 28 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <p style={{ fontSize: 18, marginBottom: 8 }}>Message sent</p>
                <p className="text-muted" style={{ fontSize: 14 }}>I’ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Full Name</label>
                  <input required name="name" placeholder="Your name"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", color: "var(--text)", outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Email</label>
                  <input required type="email" name="email" placeholder="you@example.com"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", color: "var(--text)", outline: "none" }} />
                </div>
                <div>
                  <label style={{ fontSize: 13, color: "var(--text-muted)", display: "block", marginBottom: 6 }}>Message</label>
                  <textarea required name="message" rows={5} placeholder="Tell me about your project..."
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid var(--border)", background: "rgba(255,255,255,0.03)", color: "var(--text)", outline: "none", resize: "vertical" }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 800px) {
          .contact-grid { grid-template-columns: 0.85fr 1.15fr !important; }
        }
      `}</style>
    </section>
  );
}
