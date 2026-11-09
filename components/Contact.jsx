"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { site, socials } from "@/data/site";

const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
const empty = { name: "", email: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Enter your name (at least 2 characters).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Enter a subject (at least 3 characters).";
  if (v.message.trim().length < 10) e.message = "Write a message of at least 10 characters.";
  return e;
}

export default function Contact() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const set = (k) => (ev) => setV({ ...v, [k]: ev.target.value });

  async function onSubmit(ev) {
    ev.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) return;
    if (!endpoint) {
      // No backend configured: hand off to the visitor's email app. Nothing is "sent" by this site.
      const body = encodeURIComponent(`${v.message}\n\nFrom: ${v.name} <${v.email}>`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${body}`;
      setStatus({ type: "info", text: "Your email app should open with the message ready. Press send there to deliver it." });
      return;
    }
    setStatus({ type: "loading", text: "Sending..." });
    try {
      const res = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(v) });
      if (!res.ok) throw new Error();
      setV(empty);
      setStatus({ type: "success", text: "Message sent. Thank you!" });
    } catch {
      setStatus({ type: "error", text: "Could not send the message. Please email me directly." });
    }
  }

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="mb-1.5 block text-sm text-white/70">{label}</label>
      {k === "message"
        ? <textarea id={k} rows={5} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent" />
        : <input id={k} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent" {...props} />}
      {errors[k] && <p id={`${k}-err`} className="mt-1 text-xs text-red-400">{errors[k]}</p>}
    </div>
  );

  return (
    <Section id="contact" title="Get in touch" intro="Have a project or an opportunity in mind? Send a message.">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass space-y-4 rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {field("name", "Name", { autoComplete: "name" })}
              {field("email", "Email", { type: "email", autoComplete: "email" })}
            </div>
            {field("subject", "Subject")}
            {field("message", "Message")}
            <button type="submit" disabled={status.type === "loading"} className="btn-primary disabled:opacity-60"><Send size={15} aria-hidden="true" />Send message</button>
            <p role="status" aria-live="polite" className={`text-sm ${status.type === "error" ? "text-red-400" : status.type === "success" ? "text-emerald-400" : "text-white/60"}`}>{status.text}</p>
          </form>
        </Reveal>
        <Reveal delay={0.1} className="space-y-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target={s.icon === "mail" ? undefined : "_blank"} rel="noopener noreferrer" className="glass flex items-center gap-3 rounded-2xl p-4 transition hover:border-accent/40">
              <Icon name={s.icon} size={18} className="text-accent" />
              <span className="min-w-0 break-all text-sm text-white/80">{s.icon === "mail" ? site.email : s.label}</span>
            </a>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
