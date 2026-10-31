export const metadata = { title: "Contact | Joshua Mwalukimba" };

export default function ContactPage() {
  return (
    <section className="contact-section" style={{ paddingTop: "calc(var(--nav-h) + 80px)" }}>
      <p className="contact-num">04. What&apos;s Next?</p>
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-desc">
        I&apos;m currently open to freelance projects and remote opportunities.
        Whether you have a question or a project idea — I&apos;ll do my best to reply.
      </p>
      <a href="mailto:joshuamwalukimba2@gmail.com" className="contact-btn">Say Hello</a>
      <p style={{ marginTop: 32, fontSize: 14 }}>
        Or WhatsApp:{" "}
        <a href="https://wa.me/255689995937" target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
          +255 689 995 937
        </a>
      </p>
    </section>
  );
}
