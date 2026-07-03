import type { Stat } from "@/types"

/**
 * ============================================================
 * ESTATÍSTICAS (cards numéricos da home)
 * ============================================================
 * - value: número animado (count-up)
 * - highlight: true mostra "Sim" em verde (status/disponibilidade)
 * - prefix / suffix: texto ao redor do número (ex.: "+", "%")
 * ============================================================
 */
export const stats: Stat[] = [
  { label: "Projetos em destaque", value: 3 },
  { label: "Tecnologias", value: 10, suffix: "+" },
  { label: "Anos de experiência profissional", value: 3, suffix: "+" },
  { label: "Certificações e cursos", value: 8, suffix: "+" },
  {
    label: "Disponível para vagas efetivas",
    value: 1,
    prefix: "",
    highlight: true,
  },
  { label: "Performance Lighthouse (meta)", value: 95, suffix: "+" },
]
