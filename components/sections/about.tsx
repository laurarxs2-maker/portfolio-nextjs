import { ArrowDown } from "lucide-react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/data/site"

/**
 * Seção Sobre
 * - Textos longos: edite os parágrafos abaixo
 * - Mini timeline lateral: edite o array `story`
 * - Nome/role vêm de data/site.ts
 */
const story = [
  "HTML & CSS",
  "JavaScript",
  "Projetos full stack e front-end",
  "ADS na Anhembi Morumbi",
  "Disponível para vagas efetivas",
]

export function About() {
  return (
    <Section id="sobre">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Sobre"
            title="De atendimento de excelência para produtos digitais."
            description={`${siteConfig.name} é estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web, disponível para vagas efetivas como Desenvolvedora Júnior.`}
          />
          <div className="space-y-4 text-muted-foreground">
            <p>
              Tenho conhecimentos em JavaScript, HTML e CSS, experiência com
              metodologias ágeis (Scrum e Kanban) e participação no NLW Pocket —
              Full Stack (Rocketseat), onde desenvolvi uma aplicação web prática
              e intuitiva.
            </p>
            <p>
              Venho de uma trajetória sólida em atendimento ao cliente e
              ambientes de alta exigência — Grupo Amil e Hospital Albert Einstein
              — o que fortaleceu comunicação, organização e trabalho em equipe.
              Estou em constante aprendizagem e motivada a crescer na área de
              tecnologia.
            </p>
            <p>
              Neste portfolio, cada projeto mostra não só o resultado visual, mas
              como eu penso: problema, alternativas, trade-offs e o que
              melhoraria na próxima versão.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card>
            <CardContent className="space-y-0 p-6">
              {story.map((step, index) => (
                <div key={step} className="flex flex-col items-start">
                  <div className="rounded-2xl border border-border/70 bg-background/50 px-4 py-3 text-sm font-medium text-foreground">
                    {step}
                  </div>
                  {index < story.length - 1 ? (
                    <ArrowDown className="my-2 ml-4 size-4 text-primary/70" />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
