import Link from "next/link";

export const metadata = { title: "Services | Joshua Mwalukimba" };

const services = [
  {
    num: "01",
    t: "Business Websites",
    d: "Professional, fast websites that help your business look credible and attract customers online.",
  },
  {
    num: "02",
    t: "Business Systems",
    d: "Inventory, sales and internal tools that replace notebooks and spreadsheets with real-time clarity.",
  },
  {
    num: "03",
    t: "E-commerce",
    d: "Online stores with product management, payments and order tracking built for growth.",
  },
  {
    num: "04",
    t: "Website Redesign",
    d: "Modernize an existing site for better speed, mobile experience and conversion.",
  },
  {
    num: "05",
    t: "Custom Software",
    d: "When off-the-shelf tools don’t fit, I build around your specific process and workflow.",
  },
  {
    num: "06",
    t: "Maintenance & Support",
    d: "Keep your site or system secure, updated and running smoothly after launch.",
  },
];

export default function ServicesPage() {
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + 48px)" }}>
      <div className="container">
        <div className="section-head anim-fade-up">
          <span className="section-num">03.</span>
          <h1 className="section-title">Services</h1>
          <div className="section-line" />
        </div>
        <p className="page-desc anim-fade-up anim-delay-1" style={{ marginBottom: 40 }}>
          I help businesses turn operational problems into clear digital solutions.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div
              key={s.t}
              className={`service-item anim-fade-up anim-delay-${Math.min(i + 1, 4)}`}
            >
              <p className="service-num">{s.num}</p>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
        <div className="anim-fade-up anim-delay-4" style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn-outline">
            Discuss a project
          </Link>
        </div>
      </div>
    </section>
  );
}
