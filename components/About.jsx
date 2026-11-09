import Section from "./Section";
import Reveal from "./Reveal";
import { about, interests, site } from "@/data/site";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-4 text-white/70">
          {about.map((p) => <p key={p}>{p}</p>)}
        </Reveal>
        <Reveal delay={0.1} className="glass rounded-2xl p-6">
          <h3 className="font-medium">Interests</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {interests.map((i) => <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{i}</li>)}
          </ul>
          <p className="mt-6 border-t border-white/10 pt-4 text-sm text-white/50">Based in {site.location}</p>
        </Reveal>
      </div>
    </Section>
  );
}
