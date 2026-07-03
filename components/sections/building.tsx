import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { roadmap } from "@/data/roadmap"

export function Building() {
  return (
    <Section id="building">
      <Reveal>
        <SectionTitle
          eyebrow="Em desenvolvimento"
          title="Atualmente construindo"
          description="Roadmap transparente do que está em andamento — com progresso realista."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {roadmap.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.05}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="capitalize">{item.status}</span>
                  <span className="font-mono">{item.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="progress-bar h-full rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
