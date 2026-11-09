import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/site";

function LinkBtn({ href, icon: I, children }) {
  const cls = "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3.5 py-1.5 text-sm";
  if (!href) return <span aria-disabled="true" title="Add a URL in data/site.js" className={`${cls} cursor-not-allowed text-white/30`}><I size={14} aria-hidden="true" />{children}</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${cls} transition hover:bg-white/10`}><I size={14} aria-hidden="true" />{children}</a>;
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="A selection of things I've built. Replace the placeholders in data/site.js.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article className="glass group h-full overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-accent/40 motion-reduce:hover:translate-y-0">
              {/* Replace this block with <Image src="/projects/xyz.png" ... /> when you have screenshots */}
              <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${p.hue}`}>
                <span className="font-mono text-xs text-white/50">Screenshot placeholder</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-white/60">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => <li key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-accent">{t}</li>)}
                </ul>
                <div className="mt-5 flex gap-3">
                  <LinkBtn href={p.live} icon={ExternalLink}>Live demo</LinkBtn>
                  <LinkBtn href={p.github} icon={Github}>GitHub</LinkBtn>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
