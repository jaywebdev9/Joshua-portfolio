import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Services | Joshua Mwalukimba",
  description: "Business websites, management systems, e-commerce and custom software.",
};

const services = [
  {
    title: "Business Websites",
    desc: "Professional, fast and mobile-friendly websites that help your business look credible and attract customers. Ideal for lodges, studios, agencies, shops and service providers.",
    deliverables: ["Custom design", "Responsive layout", "Contact / booking forms", "Basic SEO setup", "WhatsApp integration"],
  },
  {
    title: "Business Systems",
    desc: "Custom web applications that replace notebooks and spreadsheets — inventory, sales, bookings, customer tracking and internal workflows.",
    deliverables: ["Dashboard & reports", "Stock / sales tracking", "User roles", "Data export", "Mobile-friendly interface"],
  },
  {
    title: "E-commerce Solutions",
    desc: "Online stores tailored to how you actually sell — product management, orders, payments and customer experience.",
    deliverables: ["Product catalog", "Cart & checkout", "Order management", "Payment integration", "Admin panel"],
  },
  {
    title: "Website Redesign",
    desc: "Modernize an existing website for better speed, mobile experience, clarity and conversion without losing your brand.",
    deliverables: ["UX audit", "New visual design", "Performance improvements", "Content restructuring", "Migration support"],
  },
  {
    title: "Custom Software",
    desc: "When off-the-shelf tools don’t fit, I design and build software around your specific operational needs.",
    deliverables: ["Requirements analysis", "Architecture design", "Full development", "Testing & documentation", "Handover & training"],
  },
  {
    title: "Maintenance & Support",
    desc: "Keep your website or system secure, updated and running smoothly after launch.",
    deliverables: ["Bug fixes", "Security updates", "Content updates", "Performance monitoring", "Feature improvements"],
  },
];

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
            SERVICES
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Solutions for modern businesses
          </h1>
          <p className="text-[15.5px] leading-relaxed text-[#A8B6CE]">
            I help businesses and creators turn operational problems into clear digital solutions —
            whether that’s a professional website, a management system, or something more custom.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-6 md:p-7">
              <h2 className="mb-3 text-lg font-medium text-white">{s.title}</h2>
              <p className="mb-5 text-[14.5px] leading-relaxed text-[#A8B6CE]">{s.desc}</p>
              <div>
                <p className="mb-2 text-[12px] font-medium uppercase tracking-wider text-[#52B8FF]">
                  Typical deliverables
                </p>
                <ul className="space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[13.5px] text-[#A8B6CE]">
                      <span className="h-1 w-1 rounded-full bg-[#52B8FF]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/5 bg-[#101C30]/50 p-8 text-center md:p-10">
          <h3 className="mb-3 text-xl font-medium text-white">
            Not sure which service fits?
          </h3>
          <p className="mb-6 text-[14.5px] text-[#A8B6CE]">
            Tell me about your business problem and I’ll recommend the right approach.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px]"
          >
            Discuss a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
