import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { timeline } from "@/data/timeline"

export function TimelineSection() {
  return (
    <Section id="timeline">
      <Reveal>
        <SectionTitle
          eyebrow="Timeline"
          title="Linha do tempo de aprendizado"
          description="Cursos, projetos e conquistas em uma narrativa contínua."
        />
      </Reveal>

      <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[11px] before:w-px before:bg-border md:before:left-1/2">
        {timeline.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.04}>
            <div
              className={`relative grid gap-4 md:grid-cols-2 ${
                index % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div
                className={`rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{item.date}</Badge>
                  <Badge variant="outline" className="capitalize">
                    {item.kind}
                  </Badge>
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <div className="hidden md:block" />
              <span className="absolute top-6 left-2 size-2.5 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
