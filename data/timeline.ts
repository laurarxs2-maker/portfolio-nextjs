import type { TimelineItem } from "@/types"

/**
 * ============================================================
 * TIMELINE (linha do tempo de aprendizado)
 * ============================================================
 * kind: learning | course | project | achievement
 * Adicione novos marcos no final (ou reordene como preferir).
 * ============================================================
 */
export const timeline: TimelineItem[] = [
  {
    id: "html",
    date: "2025",
    title: "HTML, CSS e fundamentos da web",
    description:
      "Base semântica, layouts responsivos e primeiros projetos visuais.",
    kind: "learning",
  },
  {
    id: "js",
    date: "2025",
    title: "JavaScript e lógica de programação",
    description:
      "Cursos Ada, Hashtag e prática com interações e aplicações web.",
    kind: "course",
  },
  {
    id: "nlw",
    date: "2025",
    title: "NLW Pocket Fullstack — Rocketseat",
    description: "Aplicação web prática em imersão full stack.",
    kind: "project",
  },
  {
    id: "ads",
    date: "2024–2026",
    title: "ADS — Anhembi Morumbi",
    description: "Graduação em Análise e Desenvolvimento de Sistemas.",
    kind: "learning",
  },
  {
    id: "projects",
    date: "2025–2026",
    title: "Busca Prestador, SeriesVault e LW Gourmet",
    description:
      "Projetos públicos no GitHub com foco em produto, interface e integração.",
    kind: "project",
  },
  {
    id: "opportunity",
    date: "2026",
    title: "Disponível para vagas efetivas",
    description:
      "Pronta para contribuir em times de tecnologia com comunicação, organização e vontade de evoluir.",
    kind: "achievement",
  },
]
