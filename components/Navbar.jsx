"use client";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => { const el = document.getElementById(l.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="text-base font-semibold tracking-tight">
          {site.name.split(" ")[0]}<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition ${active === l.id ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={site.resume} download className="btn-ghost hidden !py-1.5 sm:inline-flex"><Download size={14} aria-hidden="true" />Resume</a>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-white/10 bg-ink/95 px-5 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-3 text-base ${active === l.id ? "text-accent" : "text-white/80"}`}>{l.label}</a>
            </li>
          ))}
          <li><a href={site.resume} download className="block py-3 text-white/80">Download resume</a></li>
        </ul>
      )}
    </header>
  );
}
