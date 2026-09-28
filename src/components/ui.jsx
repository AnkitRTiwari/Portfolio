import { Reveal } from "./Reveal";

export const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative py-24 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto px-6">{children}</div>
  </section>
);

export const SectionHeading = ({ index, title, subtitle, description }) => (
  <Reveal className="mb-14 max-w-2xl">
    <p className="flex items-center gap-3 font-mono text-sm text-highlight mb-4">
      <span>{index}.</span>
      <span className="uppercase tracking-[0.2em]">{title}</span>
      <span className="h-px w-16 bg-gradient-to-r from-highlight to-transparent" />
    </p>
    <h2 className="text-4xl md:text-5xl font-bold text-fg leading-tight">
      {subtitle}
    </h2>
    {description && (
      <p className="mt-4 text-lg text-fg-muted">{description}</p>
    )}
  </Reveal>
);

export const Tag = ({ children }) => (
  <span className="bg-accent/10 text-link py-1 px-3 rounded-full text-sm transition hover:bg-accent/20 hover:-translate-y-0.5">
    {children}
  </span>
);

export const Card = ({ as = "div", className = "", children }) => {
  const Element = as;
  return (
    <Element
      className={`rounded-2xl border border-overlay/10 bg-surface/80 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] light:shadow-[0_1px_3px_rgba(15,23,42,0.06)] ${className}`}
    >
      {children}
    </Element>
  );
};
