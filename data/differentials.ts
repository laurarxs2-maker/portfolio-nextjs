import type { Differential } from "@/types"

/**
 * ============================================================
 * DIFERENCIAIS ("O que esperar trabalhando comigo")
 * ============================================================
 * icon: nome do ícone Lucide usado em differentials.tsx
 * (Code2, MessageSquare, Zap, ShieldCheck, FolderKanban,
 *  Smartphone, Search, Gauge, Sparkles)
 * Se adicionar um ícone novo, registre o mapa em
 * components/sections/differentials.tsx
 * ============================================================
 */
export const differentials: Differential[] = [
  {
    id: "clean-code",
    title: "Código limpo",
    description: "Componentes legíveis, tipados e fáceis de evoluir.",
    icon: "Code2",
  },
  {
    id: "communication",
    title: "Comunicação",
    description: "Explico decisões técnicas de forma clara e objetiva.",
    icon: "MessageSquare",
  },
  {
    id: "fast-learning",
    title: "Aprendizado rápido",
    description: "Absorvo stacks e padrões novos com autonomia.",
    icon: "Zap",
  },
  {
    id: "best-practices",
    title: "Boas práticas",
    description: "Acesso, SEO, performance e organização desde o início.",
    icon: "ShieldCheck",
  },
  {
    id: "organization",
    title: "Organização",
    description: "Arquitetura de pastas e dados pensada para escalar.",
    icon: "FolderKanban",
  },
  {
    id: "responsive",
    title: "Responsividade",
    description: "Mobile-first sem quebrar em tablet, desktop ou ultrawide.",
    icon: "Smartphone",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Metadata, OG, sitemap e estrutura semântica corretas.",
    icon: "Search",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Bundle consciente, lazy loading e Core Web Vitals.",
    icon: "Gauge",
  },
  {
    id: "ux",
    title: "UX",
    description: "Microinterações úteis e hierarquia visual clara.",
    icon: "Sparkles",
  },
]
