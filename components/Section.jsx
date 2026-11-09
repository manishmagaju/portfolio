import Reveal from "./Reveal";

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-xl text-white/60">{intro}</p>}
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
