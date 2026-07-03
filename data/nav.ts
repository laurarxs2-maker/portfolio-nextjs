import type { NavItem } from "@/types"

/**
 * ============================================================
 * NAVEGAÇÃO
 * ============================================================
 * navItems: links da Navbar (âncoras da home)
 * commandLinks: itens do Command Palette (Ctrl/Cmd+K)
 *
 * Os `href` com # precisam existir como id nas seções
 * (ex.: id="projetos" em components/sections/projects.tsx).
 * ============================================================
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projetos" },
  { label: "Skills", href: "#skills" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export const commandLinks: NavItem[] = [
  ...navItems,
  { label: "Experiência", href: "#experiencia" },
  { label: "Timeline", href: "#timeline" },
  { label: "Processo", href: "#processo" },
]
