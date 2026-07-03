import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/data/experience"
import type { ExperienceKind } from "@/types"

const kindLabels: Record<ExperienceKind, string> = {
  professional: "Profissional",
  personal: "Projeto pessoal",
  freelance: "Freelance",
  course: "Curso",
  bootcamp: "Bootcamp",
  hackathon: "Hackathon",
  education: "Formação",
}

export function Experience() {
  return (
    <Section id="experiencia">
      <Reveal>
        <SectionTitle
          eyebrow="Experiência"
          title="Trajetória profissional e formação"
          description="Experiência em ambientes de alta exigência, formação em ADS e projetos de desenvolvimento web."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge variant="outline">{kindLabels[item.kind]}</Badge>
                  <Badge variant="secondary">
                    {item.start}
                    {item.end ? ` — ${item.end}` : ""}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {item.organization}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                {item.stack ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
