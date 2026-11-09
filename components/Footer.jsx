import { ArrowUp } from "lucide-react";
import Icon from "./Icon";
import { navLinks, site, socials } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-semibold">{site.name}<span className="text-accent">.</span></p>
          <p className="mt-1 text-sm text-white/50">{site.tagline}</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => <a key={s.label} href={s.href} aria-label={s.label} className="text-white/50 transition hover:text-white"><Icon name={s.icon} size={18} /></a>)}
          </div>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm text-white/60">
          {navLinks.map((l) => <li key={l.id}><a href={`#${l.id}`} className="hover:text-white">{l.label}</a></li>)}
        </ul></nav>
        <a href="#home" className="btn-ghost self-start"><ArrowUp size={15} aria-hidden="true" />Back to top</a>
      </div>
      <p className="border-t border-white/5 py-5 text-center text-xs text-white/40">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
