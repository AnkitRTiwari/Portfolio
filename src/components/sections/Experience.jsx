import { Reveal } from "../Reveal";
import { Section, SectionHeading, Tag } from "../ui";
import { experience } from "../../data/portfolio";

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        title="Experience"
        subtitle="Where I've Worked"
      />

      <Reveal variant="fade" className="relative">
        <span className="timeline-line absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-highlight/40 to-transparent" />

        <ol className="space-y-16">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} variant="left" className="relative pl-10">
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full ring-4 ${
                  i === 0
                    ? "bg-accent ring-accent/20"
                    : "bg-fg-faint ring-overlay/5"
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-10">
                <div>
                  <p className="font-mono text-sm text-highlight">
                    {job.period}
                  </p>
                  <p className="text-sm text-fg-subtle mt-1">{job.location}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-fg">
                    {job.role}
                  </h3>
                  <p className="text-lg text-link mb-5">{job.company}</p>

                  <ul className="space-y-3 text-fg-body">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.tech.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
};
