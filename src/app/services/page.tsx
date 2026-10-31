import Link from "next/link";

export const metadata = { title: "Services | Joshua Mwalukimba" };

const services = [
  { t: "Business Websites", d: "Professional, fast websites that help your business look credible and attract customers." },
  { t: "Business Systems", d: "Inventory, sales and internal tools that replace notebooks and spreadsheets." },
  { t: "E-commerce", d: "Online stores with product management, payments and order tracking." },
  { t: "Website Redesign", d: "Modernize an existing site for better speed, mobile experience and conversion." },
  { t: "Custom Software", d: "When off-the-shelf tools don’t fit, I build around your specific process." },
  { t: "Maintenance", d: "Keep your site or system secure, updated and running smoothly." },
];

export default function ServicesPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <div className="section-head">
          <span className="section-num">03.</span>
          <h1 className="section-title">Services</h1>
          <div className="section-line" />
        </div>
        <p className="page-desc" style={{ marginBottom: 40 }}>I help businesses turn operational problems into clear digital solutions.</p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.t} className="service-item">
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn-outline">Discuss a project</Link>
        </div>
      </div>
    </section>
  );
}
