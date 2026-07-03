import {
  BrainCircuit,
  Construction,
  GitBranch,
  Layers3,
  Scale,
  TrendingUp,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { EngineeringSection } from "@/types"

const blocks: {
  key: keyof EngineeringSection
  title: string
  icon: typeof BrainCircuit
  list?: boolean
}[] = [
  { key: "problem", title: "O problema", icon: BrainCircuit },
  { key: "architecture", title: "Arquitetura e por quê", icon: Layers3 },
  { key: "alternatives", title: "Alternativas consideradas", icon: Scale, list: true },
  { key: "challenges", title: "Desafios enfrentados", icon: Construction, list: true },
  {
    key: "v2Improvements",
    title: "Melhorias em uma v2.0",
    icon: TrendingUp,
    list: true,
  },
]

export function EngineeringDeepDive({
  engineering,
}: {
  engineering: EngineeringSection
}) {
  return (
    <section id="engineering" className="scroll-mt-24">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <GitBranch className="size-5" />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Engenharia da solução
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Como eu pensei este projeto
          </h2>
        </div>
      </div>

      <div className="grid gap-4">
        {blocks.map((block) => {
          const Icon = block.icon
          const value = engineering[block.key]

          return (
            <Card key={block.key}>
              <CardHeader className="flex flex-row items-center gap-3 space-y-0">
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-background/60">
                  <Icon className="size-4 text-primary" />
                </div>
                <CardTitle className="text-lg">{block.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {block.list && Array.isArray(value) ? (
                  <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {value.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {value as string}
                  </p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
