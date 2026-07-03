import { ArrowDown } from "lucide-react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { processSteps } from "@/data/process"

export function Process() {
  return (
    <Section id="processo">
      <Reveal>
        <SectionTitle
          eyebrow="Processo"
          title="Como eu desenvolvo"
          description="Um fluxo claro do briefing à melhoria contínua."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delay={index * 0.04}>
            <div className="relative rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md">
              <span className="font-mono text-xs text-primary">
                0{step.order}
              </span>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
              {index < processSteps.length - 1 ? (
                <ArrowDown className="absolute -bottom-3 left-1/2 hidden size-4 -translate-x-1/2 text-primary/60 xl:block" />
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
