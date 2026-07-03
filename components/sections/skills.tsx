import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skillCategories, skills } from "@/data/skills"

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionTitle
          eyebrow="Skills"
          title="Stack organizada por domínio"
          description="Badges com contexto — não barras genéricas. Cada tecnologia tem um propósito claro no meu fluxo de trabalho."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const items = skills.filter((skill) => skill.category === category.id)
          return (
            <Reveal key={category.id} delay={index * 0.05}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{category.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <div key={skill.name} className="group relative">
                      <Badge
                        variant="secondary"
                        className="cursor-default px-3 py-1.5 transition-all group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
                        title={skill.tooltip}
                      >
                        {skill.name}
                      </Badge>
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg border border-border bg-popover px-3 py-2 text-xs text-popover-foreground opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
                        {skill.tooltip}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
