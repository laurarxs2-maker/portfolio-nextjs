import { Github, Linkedin, Mail } from "lucide-react"

import { navItems } from "@/data/nav"
import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-medium text-foreground">
              Obrigado por visitar meu portfólio.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.name} · {siteConfig.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${siteConfig.social.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
