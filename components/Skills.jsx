import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { skills } from "@/data/site";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Tools I use to design, build and ship.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.05} className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-accent/15 p-2 text-accent"><Icon name={g.icon} size={18} /></span>
              <h3 className="font-medium">{g.group}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">{s}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
