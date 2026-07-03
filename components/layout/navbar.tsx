"use client"

import {
  BriefcaseBusiness,
  FileText,
  Github,
  Linkedin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { Button } from "@/components/ui/button"
import { navItems } from "@/data/nav"
import { siteConfig } from "@/data/site"
import { useScrollState } from "@/hooks/use-scroll-state"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { scrolled } = useScrollState()
  const { theme, setTheme } = useTheme()
  const { recruiterMode, toggleRecruiterMode } = useRecruiterMode()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/#home"
          className="text-sm font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="icon" asChild>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </Button>
          {/* Currículo: PDF em /public — path em data/site.ts → social.resumeUrl */}
          <Button variant="outline" size="sm" asChild>
            <a
              href={siteConfig.social.resumeUrl}
              download="Curriculo-Laura-Xavier.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText />
              Currículo
            </a>
          </Button>
          <Button
            variant={recruiterMode ? "default" : "secondary"}
            size="sm"
            onClick={toggleRecruiterMode}
            aria-pressed={recruiterMode}
          >
            <BriefcaseBusiness />
            Modo Recrutador
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Alternar tema"
          >
            {mounted && theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={siteConfig.social.resumeUrl}
                  download="Curriculo-Laura-Xavier.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText /> Currículo
                </a>
              </Button>
              <Button
                variant={recruiterMode ? "default" : "secondary"}
                size="sm"
                onClick={toggleRecruiterMode}
              >
                Modo Recrutador
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                Tema
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
