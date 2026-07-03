import type { RoadmapItem } from "@/types"

/**
 * ============================================================
 * EM DESENVOLVIMENTO (roadmap)
 * ============================================================
 * progress: 0–100 (barra de progresso)
 * status: exploring | building | shipped
 * ============================================================
 */
export const roadmap: RoadmapItem[] = [
  {
    id: "financeiro",
    title: "Sistema Financeiro",
    description: "Controle de receitas, despesas e dashboards pessoais.",
    progress: 60,
    status: "building",
  },
  {
    id: "erp",
    title: "Sistema ERP",
    description: "Módulos de clientes, pedidos e estoque para pequenos negócios.",
    progress: 30,
    status: "building",
  },
  {
    id: "landing-saas",
    title: "Landing SaaS",
    description: "Template premium de conversão com design system completo.",
    progress: 80,
    status: "building",
  },
]
