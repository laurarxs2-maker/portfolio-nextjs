"use client"

import { BriefcaseBusiness, X } from "lucide-react"

import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function RecruiterBanner() {
  const { recruiterMode, setRecruiterMode } = useRecruiterMode()

  if (!recruiterMode) return null

  return (
    <div className="border-b border-emerald-500/20 bg-emerald-500/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex gap-3">
          <BriefcaseBusiness className="mt-0.5 size-5 shrink-0 text-emerald-400" />
          <div>
            <p className="text-sm font-medium text-foreground">Modo Recrutador ativo</p>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {siteConfig.recruiterSummary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <a href="#experiencia" className="rounded-full border border-border px-3 py-1 hover:text-foreground">
                Experiência
              </a>
              <a href="#skills" className="rounded-full border border-border px-3 py-1 hover:text-foreground">
                Tecnologias
              </a>
              <a href="#projetos" className="rounded-full border border-border px-3 py-1 hover:text-foreground">
                Projetos
              </a>
              <a
                href={siteConfig.social.resumeUrl}
                className="rounded-full border border-border px-3 py-1 hover:text-foreground"
              >
                Currículo
              </a>
              <a href="#contato" className="rounded-full border border-border px-3 py-1 hover:text-foreground">
                Contato
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-3 py-1 hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Desativar modo recrutador"
          onClick={() => setRecruiterMode(false)}
        >
          <X />
        </Button>
      </div>
    </div>
  )
}
