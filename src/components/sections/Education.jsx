import { Reveal } from "../Reveal";
import { Card, Section, SectionHeading } from "../ui";
import { certifications, education } from "../../data/portfolio";

export const Education = () => {
  return (
    <Section id="education">
      <SectionHeading
        index="05"
        title="Education"
        subtitle="Education & Certifications"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal variant="left">
          <Card className="p-7 h-full">
            <h3 className="text-xl font-bold text-fg mb-6">🎓 Education</h3>
            <ul className="space-y-6">
              {education.map((item) => (
                <li key={item.title}>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-semibold text-fg-soft">{item.title}</p>
                    {item.period && (
                      <span className="font-mono text-sm text-fg-muted shrink-0">
                        {item.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-fg-muted mt-1">{item.place}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <Card className="p-7 h-full">
            <h3 className="text-xl font-bold text-fg mb-6">
              📜 Certifications
            </h3>
            <ul className="space-y-6">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <p className="font-semibold text-fg-soft">{cert.title}</p>
                  <p className="text-sm text-highlight mt-1">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};
