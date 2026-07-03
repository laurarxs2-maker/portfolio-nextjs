"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDownRight, FileText, Mail, Sparkles } from "lucide-react"

import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function Hero() {
  const { recruiterMode } = useRecruiterMode()
  const reducedMotion = useReducedMotion()
  const animate = !recruiterMode && !reducedMotion

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <Badge variant="success" className="mb-6 gap-2 px-3 py-1">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {siteConfig.availability}
          </Badge>

          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {siteConfig.name} · {siteConfig.role}
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{siteConfig.tagline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.description} Cada projeto documenta o raciocínio de
            engenharia por trás da solução — não só o resultado visual.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projetos">
                Ver projetos
                <ArrowDownRight />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contato">
                Entrar em contato
                <Mail />
              </a>
            </Button>
            {/* PDF real em /public/Curriculo-Laura-Xavier.pdf */}
            <Button asChild variant="outline" size="lg">
              <a
                href={siteConfig.social.resumeUrl}
                download="Curriculo-Laura-Xavier.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar currículo
                <FileText />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20 blur-2xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-8 shadow-2xl backdrop-blur-xl"
            initial={animate ? { opacity: 0, y: 20 } : false}
            animate={animate ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                Product-minded engineer
              </div>
              <Badge>Jr. Full Stack</Badge>
            </div>

            <div className="space-y-4">
              {[
                "Interfaces com aparência de SaaS premium",
                "Decisões técnicas documentadas",
                "Performance, SEO e acessibilidade",
                "Pronto para contribuir em times reais",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-background/40 px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {["React", "Next.js", "TS"].map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-border/60 bg-background/50 px-3 py-4 text-center font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
