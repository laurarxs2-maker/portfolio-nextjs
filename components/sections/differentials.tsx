import {
  Code2,
  FolderKanban,
  Gauge,
  MessageSquare,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import { differentials } from "@/data/differentials"

const icons: Record<string, LucideIcon> = {
  Code2,
  MessageSquare,
  Zap,
  ShieldCheck,
  FolderKanban,
  Smartphone,
  Search,
  Gauge,
  Sparkles,
}

export function Differentials() {
  return (
    <Section id="diferenciais">
      <Reveal>
        <SectionTitle
          eyebrow="Diferenciais"
          title="O que você pode esperar trabalhando comigo"
          description="Compromissos concretos de qualidade, comunicação e entrega."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentials.map((item, index) => {
          const Icon = icons[item.icon] || Sparkles
          return (
            <Reveal key={item.id} delay={index * 0.04}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-border bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
