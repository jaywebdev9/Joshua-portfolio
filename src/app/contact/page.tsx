"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // For now just simulate — later connect to API / EmailJS / Resend
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  }

  return (
    <section className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-[13px] font-medium tracking-widest text-[#52B8FF]">
            CONTACT
          </p>
          <h1 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let’s build something useful
          </h1>
          <p className="text-[15.5px] leading-relaxed text-[#A8B6CE]">
            Have a project in mind, a question, or just want to say hello?  
            Send a message or reach me directly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact info */}
          <div className="space-y-5">
            <a
              href="mailto:joshuamwalukimba2@gmail.com"
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-5 transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168BFA]/15 text-[#52B8FF]">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[12px] text-[#A8B6CE]">Email</p>
                <p className="text-[14px] text-white">joshuamwalukimba2@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/255689995937"
              target="_blank"
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-5 transition"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168BFA]/15 text-[#52B8FF]">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-[12px] text-[#A8B6CE]">WhatsApp</p>
                <p className="text-[14px] text-white">+255 689 995 937</p>
              </div>
            </a>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168BFA]/15 text-[#52B8FF]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[12px] text-[#A8B6CE]">Location</p>
                <p className="text-[14px] text-white">Tanzania · Remote-friendly</p>
              </div>
            </div>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168BFA]/15 text-[#52B8FF]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[12px] text-[#A8B6CE]">Phone</p>
                <p className="text-[14px] text-white">+255 768 403 948</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-6 md:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  ✓
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Message sent</h3>
                <p className="text-[14px] text-[#A8B6CE]">
                  Thank you. I’ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[13px] text-[#A8B6CE]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-[#168BFA]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-[13px] text-[#A8B6CE]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-[#168BFA]/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="mb-1.5 block text-[13px] text-[#A8B6CE]">
                    Project Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition focus:border-[#168BFA]/50"
                  >
                    <option value="" className="bg-[#101C30]">Select...</option>
                    <option value="website" className="bg-[#101C30]">Business Website</option>
                    <option value="system" className="bg-[#101C30]">Business System</option>
                    <option value="ecommerce" className="bg-[#101C30]">E-commerce</option>
                    <option value="redesign" className="bg-[#101C30]">Website Redesign</option>
                    <option value="custom" className="bg-[#101C30]">Custom Software</option>
                    <option value="other" className="bg-[#101C30]">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-[13px] text-[#A8B6CE]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-white/30 focus:border-[#168BFA]/50"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary flex w-full items-center justify-center gap-2 rounded-full py-3 text-[14px] disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : (
                    <>
                      Send Message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
