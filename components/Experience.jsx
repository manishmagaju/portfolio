import Section from "./Section";
import Reveal from "./Reveal";
import { timeline } from "@/data/site";

export default function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <ol className="relative ml-2 space-y-8 border-l border-white/15 pl-8">
        {timeline.map((t) => (
          <li key={t.title} className="relative">
            <span aria-hidden="true" className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" />
            <Reveal className="glass rounded-2xl p-6">
              <p className="text-xs text-accent">{t.type} &middot; {t.period}</p>
              <h3 className="mt-1 text-lg font-medium">{t.title}</h3>
              <p className="text-sm text-white/50">{t.place}</p>
              <p className="mt-3 text-sm text-white/70">{t.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
