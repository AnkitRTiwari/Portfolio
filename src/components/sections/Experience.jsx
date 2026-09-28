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
        <span className="timeline-line absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500 via-cyan-400/40 to-transparent" />

        <ol className="space-y-16">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} variant="left" className="relative pl-10">
              <span
                className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full ring-4 ${
                  i === 0
                    ? "bg-blue-500 ring-blue-500/20"
                    : "bg-gray-600 ring-white/5"
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 lg:gap-10">
                <div>
                  <p className="font-mono text-sm text-cyan-400">
                    {job.period}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {job.role}
                  </h3>
                  <p className="text-lg text-blue-400 mb-5">{job.company}</p>

                  <ul className="space-y-3 text-gray-300">
                    {job.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
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
