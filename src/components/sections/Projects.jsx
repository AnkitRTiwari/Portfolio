import { Reveal } from "../Reveal";
import { Card, Section, SectionHeading, Tag } from "../ui";
import { ArrowUpRightIcon, LockIcon } from "../Icons";
import { projects } from "../../data/portfolio";

export const Projects = () => {
  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        title="Projects"
        subtitle="Featured Projects"
        description="Production platforms I've built at work, and personal projects you can try live."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            variant={i % 2 === 0 ? "left" : "right"}
            delay={(i % 2) * 120}
          >
            <Card as="article" className="group flex flex-col h-full p-7">
              <div className="flex items-center justify-between gap-4 mb-5">
                <span
                  className={`font-mono text-xs uppercase tracking-wider rounded-full px-3 py-1 ${
                    project.type === "Professional"
                      ? "text-cyan-300 bg-cyan-400/10"
                      : "text-blue-300 bg-blue-500/10"
                  }`}
                >
                  {project.type}
                </span>
                {project.context && (
                  <span className="text-xs text-gray-500 text-right">
                    {project.context}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 transition-colors group-hover:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-5">{project.description}</p>

              <ul className="space-y-2 text-sm text-gray-300 mb-6 flex-1">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>

              <div className="pt-5 border-t border-white/10">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Live Project
                    <ArrowUpRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm text-gray-500">
                    <LockIcon className="w-4 h-4" />
                    Company project, not publicly available
                  </span>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
