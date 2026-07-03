import type { ProcessStep } from "@/types"

/**
 * ============================================================
 * PROCESSO DE DESENVOLVIMENTO
 * ============================================================
 * Fluxo visual da seção Processo. `order` define a sequência.
 * ============================================================
 */
export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    title: "Briefing",
    description: "Entendo o problema, o público e o resultado esperado.",
    order: 1,
  },
  {
    id: "pesquisa",
    title: "Pesquisa",
    description: "Referências, restrições técnicas e oportunidades de UX.",
    order: 2,
  },
  {
    id: "prototipo",
    title: "Protótipo",
    description: "Estrutura de telas, hierarquia e fluxos principais.",
    order: 3,
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    description: "Implementação tipada, componentizada e orientada a produto.",
    order: 4,
  },
  {
    id: "testes",
    title: "Testes",
    description: "Validação visual, responsiva e de acessibilidade básica.",
    order: 5,
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Publicação com SEO, performance e monitoramento inicial.",
    order: 6,
  },
  {
    id: "melhorias",
    title: "Melhorias",
    description: "Iteração com base em feedback e métricas reais.",
    order: 7,
  },
]
