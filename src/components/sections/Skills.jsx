import { Reveal } from "../Reveal";
import { Card, Section, SectionHeading, Tag } from "../ui";
import { skillGroups } from "../../data/portfolio";

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        title="Skills"
        subtitle="Tech I Work With"
        description="The languages, frameworks and tools I use to take products from idea to production."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} variant="zoom" delay={(i % 3) * 120}>
            <Card className="p-6 h-full">
              <h3 className="text-lg font-bold text-white mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
