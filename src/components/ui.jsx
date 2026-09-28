import { Reveal } from "./Reveal";

export const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

export const SectionHeading = ({ index, title, subtitle, description }) => (
  <Reveal className="mb-14 max-w-2xl">
    <p className="flex items-center gap-3 font-mono text-sm text-cyan-400 mb-4">
      <span>{index}.</span>
      <span className="uppercase tracking-[0.2em]">{title}</span>
      <span className="h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
    </p>
    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
      {subtitle}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-gray-400">{description}</p>
    )}
  </Reveal>
);

export const Tag = ({ children }) => (
  <span className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5">
    {children}
  </span>
);

export const Card = ({ as = "div", className = "", children }) => {
  const Element = as;
  return (
    <Element
      className={`rounded-2xl border border-white/10 bg-[#0b0d14]/80 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] ${className}`}
    >
      {children}
    </Element>
  );
};
