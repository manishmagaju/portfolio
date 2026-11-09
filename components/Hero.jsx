"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Icon from "./Icon";
import { site, socials } from "@/data/site";

const code = [
  ["const", " developer", " = {"],
  ["", "  name:", ` "${site.name}",`],
  ["", "  role:", ` "${site.role}",`],
  ["", "  stack:", ' ["Next.js", "Node.js"],'],
  ["", "  location:", ` "${site.location}",`],
  ["", "", "};"],
];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] max-w-full -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div>
        <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white/80">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
          Available for new opportunities
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Hi, I&apos;m <span className="gradient-text">{site.name}.</span>
        </h1>
        <p className="mt-4 text-xl text-white/80 sm:text-2xl">Software Developer crafting modern web experiences.</p>
        <p className="mt-4 max-w-lg text-white/60">{site.tagline} I build responsive, accessible products with React, Next.js and Node.js.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">View My Projects <ArrowRight size={16} aria-hidden="true" /></a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <div className="mt-8 flex gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} target={s.icon === "mail" ? undefined : "_blank"} rel="noopener noreferrer"
              className="glass rounded-full p-3 text-white/70 transition hover:-translate-y-0.5 hover:text-white">
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
        className="glass min-w-0 overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" /><span className="h-3 w-3 rounded-full bg-yellow-400/70" /><span className="h-3 w-3 rounded-full bg-green-400/70" />
          <span className="ml-3 font-mono text-xs text-white/40">developer.js</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
          {code.map((l, i) => (
            <div key={i}><span className="text-violet">{l[0]}</span><span className="text-sky-300">{l[1]}</span><span className="text-white/80">{l[2]}</span></div>
          ))}
        </pre>
      </motion.div>
    </section>
  );
}
