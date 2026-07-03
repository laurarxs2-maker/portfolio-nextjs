import type { Skill, SkillCategory } from "@/types"

/**
 * ============================================================
 * SKILLS (badges por categoria)
 * ============================================================
 * Categorias: frontend | backend | database | tools | cloud
 * level: 1 a 5 (reservado para uso futuro / tooltips)
 * tooltip: texto ao passar o mouse no badge
 *
 * Para adicionar tecnologia: inclua no array `skills` com a
 * category correta. Labels das categorias ficam em skillCategories.
 * ============================================================
 */
export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Banco" },
  { id: "tools", label: "Ferramentas" },
  { id: "cloud", label: "Cloud" },
]

export const skills: Skill[] = [
  {
    name: "React",
    category: "frontend",
    level: 4,
    tooltip: "Componentes, hooks, composicao e padroes de UI moderna.",
  },
  {
    name: "Next.js",
    category: "frontend",
    level: 4,
    tooltip: "App Router, Server Components, rotas e otimizacoes.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: 4,
    tooltip: "Tipagem estrita, models e DX em projetos reais.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: 5,
    tooltip: "Design systems utilitarios e interfaces premium.",
  },
  {
    name: "Framer Motion",
    category: "frontend",
    level: 3,
    tooltip: "Microinteracoes e motion com respeito a a11y.",
  },
  {
    name: "HTML/CSS",
    category: "frontend",
    level: 5,
    tooltip: "Semantica, acessibilidade e layouts responsivos.",
  },
  {
    name: "Node.js",
    category: "backend",
    level: 3,
    tooltip: "APIs REST e logica de servidor em JavaScript/TS.",
  },
  {
    name: "API Routes",
    category: "backend",
    level: 3,
    tooltip: "Route Handlers no Next.js com validacao e cache.",
  },
  {
    name: "Prisma",
    category: "backend",
    level: 3,
    tooltip: "ORM tipado, migrations e modelagem relacional.",
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: 3,
    tooltip: "Modelagem, queries e relacoes em apps full stack.",
  },
  {
    name: "SQLite",
    category: "database",
    level: 3,
    tooltip: "Prototipagem rapida e projetos locais.",
  },
  {
    name: "Git",
    category: "tools",
    level: 4,
    tooltip: "Fluxo de branches, commits semanticos e PRs.",
  },
  {
    name: "GitHub",
    category: "tools",
    level: 4,
    tooltip: "Repos, issues, Actions e colaboracao.",
  },
  {
    name: "Figma",
    category: "tools",
    level: 3,
    tooltip: "Leitura de design e handoff para implementacao.",
  },
  {
    name: "ESLint/Prettier",
    category: "tools",
    level: 4,
    tooltip: "Qualidade de codigo e consistencia de estilo.",
  },
  {
    name: "Vercel",
    category: "cloud",
    level: 4,
    tooltip: "Deploy, previews e otimizacao de front-end.",
  },
  {
    name: "Docker",
    category: "cloud",
    level: 2,
    tooltip: "Containers basicos para ambientes de desenvolvimento.",
  },
]
