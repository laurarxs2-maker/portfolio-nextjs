"use client"

import { Command } from "cmdk"
import { useEffect, useState } from "react"

import { commandLinks } from "@/data/nav"
import { projects } from "@/data/projects"
import { siteConfig } from "@/data/site"

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((value) => !value)
      }
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    if (href.startsWith("http") || href.startsWith("/")) {
      window.location.href = href
      return
    }
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: "smooth" })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-black/50 px-4 pt-[15vh] backdrop-blur-sm">
      <button
        className="absolute inset-0 cursor-default"
        aria-label="Fechar command palette"
        onClick={() => setOpen(false)}
      />
      <Command className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <Command.Input
          placeholder="Buscar seções, projetos..."
          className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <Command.List className="max-h-80 overflow-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm text-muted-foreground">
            Nenhum resultado.
          </Command.Empty>

          <Command.Group heading="Navegação" className="px-2 py-1 text-xs text-muted-foreground">
            {commandLinks.map((item) => (
              <Command.Item
                key={item.href}
                value={item.label}
                onSelect={() => navigate(item.href)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-accent"
              >
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Projetos" className="px-2 py-1 text-xs text-muted-foreground">
            {projects.map((project) => (
              <Command.Item
                key={project.slug}
                value={project.title}
                onSelect={() => navigate(`/projects/${project.slug}`)}
                className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-accent"
              >
                {project.title}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Links" className="px-2 py-1 text-xs text-muted-foreground">
            <Command.Item
              value="github"
              onSelect={() => navigate(siteConfig.social.github)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-accent"
            >
              GitHub
            </Command.Item>
            <Command.Item
              value="linkedin"
              onSelect={() => navigate(siteConfig.social.linkedin)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-accent"
            >
              LinkedIn
            </Command.Item>
            <Command.Item
              value="curriculo"
              onSelect={() => navigate(siteConfig.social.resumeUrl)}
              className="cursor-pointer rounded-lg px-3 py-2 text-sm text-foreground aria-selected:bg-accent"
            >
              Currículo
            </Command.Item>
          </Command.Group>
        </Command.List>
        <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
          Pressione <kbd className="rounded bg-muted px-1.5 py-0.5">Esc</kbd> para fechar
        </div>
      </Command>
    </div>
  )
}
