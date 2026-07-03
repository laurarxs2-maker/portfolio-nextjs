"use client"

import { useEffect, useState } from "react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { Card, CardContent } from "@/components/ui/card"
import { stats } from "@/data/stats"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

function AnimatedNumber({
  value,
  enabled,
}: {
  value: number
  enabled: boolean
}) {
  const [display, setDisplay] = useState(enabled ? 0 : value)

  useEffect(() => {
    if (!enabled) {
      setDisplay(value)
      return
    }

    let frame = 0
    const total = 24
    const interval = window.setInterval(() => {
      frame += 1
      setDisplay(Math.round((value * frame) / total))
      if (frame >= total) window.clearInterval(interval)
    }, 30)

    return () => window.clearInterval(interval)
  }, [enabled, value])

  return <>{display}</>
}

export function Stats() {
  const { recruiterMode } = useRecruiterMode()
  const reducedMotion = usePrefersReducedMotion()
  const animate = !recruiterMode && !reducedMotion

  return (
    <Section>
      <Reveal>
        <SectionTitle
          eyebrow="Números"
          title="Estatísticas com foco em entrega"
          description="Indicadores objetivos para quem precisa avaliar rapidamente perfil e ritmo de trabalho."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <Card
              className={cn(
                "transition-transform duration-300 hover:-translate-y-1 hover:shadow-primary/10",
                stat.highlight && "border-emerald-500/30",
              )}
            >
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-3 font-mono text-3xl font-semibold tracking-tight text-foreground">
                  {stat.highlight ? (
                    <span className="text-emerald-400">Sim</span>
                  ) : (
                    <>
                      {stat.prefix}
                      <AnimatedNumber value={stat.value} enabled={animate} />
                      {stat.suffix}
                    </>
                  )}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
