import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Services | Joshua Mwalukimba" };

const services = [
  { t: "Business Websites", d: "Professional, fast and mobile-friendly websites that help your business look credible and attract customers.", items: ["Custom design", "Responsive layout", "Contact / booking forms", "Basic SEO", "WhatsApp integration"] },
  { t: "Business Systems", d: "Custom web applications that replace notebooks and spreadsheets — inventory, sales, bookings and workflows.", items: ["Dashboard & reports", "Stock / sales tracking", "User roles", "Data export", "Mobile-friendly"] },
  { t: "E-commerce Solutions", d: "Online stores tailored to how you sell — products, orders, payments and customer experience.", items: ["Product catalog", "Cart & checkout", "Order management", "Payment integration", "Admin panel"] },
  { t: "Website Redesign", d: "Modernize an existing website for better speed, mobile experience, clarity and conversion.", items: ["UX audit", "New visual design", "Performance", "Content structure", "Migration"] },
  { t: "Custom Software", d: "When off-the-shelf tools don’t fit, I design and build software around your specific needs.", items: ["Requirements analysis", "Architecture", "Full development", "Testing & docs", "Handover"] },
  { t: "Maintenance & Support", d: "Keep your website or system secure, updated and running smoothly after launch.", items: ["Bug fixes", "Security updates", "Content updates", "Monitoring", "Improvements"] },
];

export default function ServicesPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <p className="section-label">Services</p>
        <h1 className="section-title">Solutions for modern businesses</h1>
        <p className="section-desc">I help businesses turn operational problems into clear digital solutions.</p>
        <div className="services-grid mt-12">
          {services.map((s) => (
            <div key={s.t} className="card service-card">
              <h3 style={{ fontSize: 16, marginBottom: 10 }}>{s.t}</h3>
              <p style={{ marginBottom: 16 }}>{s.d}</p>
              <p className="text-accent" style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", marginBottom: 8 }}>TYPICAL DELIVERABLES</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {s.items.map((i) => (
                  <li key={i} style={{ fontSize: 13.5, color: "var(--text-muted)", display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card text-center mt-12" style={{ padding: 40 }}>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>Not sure which service fits?</h3>
          <p className="text-muted" style={{ marginBottom: 20, fontSize: 14 }}>Tell me about your problem and I’ll recommend the right approach.</p>
          <Link href="/contact" className="btn btn-primary">Discuss a Project <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
