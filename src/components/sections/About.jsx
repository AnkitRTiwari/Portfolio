import { Reveal } from "../Reveal";
import { Card, Section, SectionHeading } from "../ui";
import { about, profile } from "../../data/portfolio";

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Currently", value: profile.currently },
  { label: "Experience", value: "4+ years, full stack" },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export const About = () => {
  return (
    <Section id="about">
      <SectionHeading index="01" title="About" subtitle="About Me" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <Reveal variant="left" className="space-y-5 text-lg text-gray-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal variant="left" delay={150}>
            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-8">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-xs uppercase tracking-wider text-gray-500">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-gray-200">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="hover:text-blue-400 transition-colors"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-2 space-y-5">
          {about.focus.map((item, i) => (
            <Reveal key={item.title} variant="right" delay={i * 120}>
              <Card className="p-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-sm text-cyan-400">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};
