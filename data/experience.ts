import type { Experience } from "@/types"

/**
 * ============================================================
 * EXPERIÊNCIA (profissional, formação, cursos, projetos)
 * ============================================================
 * kind aceitos:
 * - professional | personal | freelance | course | bootcamp
 * - hackathon | education
 *
 * Ordem do array = ordem de exibição na seção Experiência.
 * Para cargos novos, adicione no topo da lista.
 * ============================================================
 */
export const experiences: Experience[] = [
  {
    id: "amil",
    title: "Assistente Administrativo",
    organization: "Grupo Amil",
    kind: "professional",
    start: "Jan 2026",
    end: "Atual",
    description:
      "Atuação em produto VIP com rotinas administrativas da área da saúde: cadastro e análise de reembolsos, agendamentos e gestão de informações sensíveis. Alto padrão de qualidade, atenção a detalhes, confidencialidade e cumprimento de prazos.",
  },
  {
    id: "einstein-ii",
    title: "Representante de Atendimento ao Cliente II",
    organization: "Hospital Israelita Albert Einstein",
    kind: "professional",
    start: "Abr 2024",
    end: "Jun 2025",
    description:
      "Atendimento com excelência, agendamento de exames e procedimentos, atualizações em sistemas e direcionamento de ligações para pacientes internos e externos.",
  },
  {
    id: "einstein-i",
    title: "Representante de Atendimento ao Cliente I",
    organization: "Hospital Israelita Albert Einstein",
    kind: "professional",
    start: "Jul 2023",
    end: "Abr 2024",
    description:
      "Atendimento ao cliente em ambiente de alta exigência, fortalecendo comunicação, organização e trabalho em equipe.",
  },
  {
    id: "hs-prevent",
    title: "Assistente de Prevenção a Fraude",
    organization: "HS Prevent",
    kind: "professional",
    start: "Set 2022",
    end: "Jun 2023",
    description:
      "Rotinas de prevenção a fraude com foco em precisão, análise de informações e processos seguros.",
  },
  {
    id: "socicam",
    title: "Assistente Administrativo",
    organization: "Socicam",
    kind: "professional",
    start: "Set 2021",
    end: "Ago 2022",
    description:
      "Apoio administrativo em operações de terminais e atendimento ao cidadão, com organização e cumprimento de rotinas.",
  },
  {
    id: "personal-projects",
    title: "Projetos pessoais full stack e front-end",
    organization: "Independente",
    kind: "personal",
    start: "2025",
    end: "Atual",
    description:
      "Desenvolvimento de Busca Prestador, SeriesVault e LW Gourmet Digital — do problema à interface, com documentação de decisões de engenharia.",
    stack: ["TypeScript", "JavaScript", "HTML", "CSS", "IA"],
  },
  {
    id: "ads",
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "Universidade Anhembi Morumbi",
    kind: "education",
    start: "2024",
    end: "2026",
    description:
      "Graduação tecnológica com foco em desenvolvimento de software e formação para o mercado de tecnologia.",
  },
  {
    id: "nlw",
    title: "NLW Pocket | Iniciantes - Fullstack",
    organization: "Rocketseat",
    kind: "course",
    start: "Out 2025",
    description:
      "Aplicação web prática e intuitiva em imersão full stack, reforçando fundamentos e entrega de produto.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: "ada-frontend",
    title: "Front-end | Elas + Tech",
    organization: "Ada",
    kind: "bootcamp",
    start: "2025",
    description:
      "Programa de formação front-end com foco em JavaScript e inclusão de mulheres na tecnologia.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
]
