import type { SiteConfig } from "@/types"

/**
 * ============================================================
 * CONFIGURAÇÃO PRINCIPAL DO PORTFOLIO
 * ============================================================
 * Edite este arquivo para alterar identidade, contato e textos
 * globais (Hero, SEO, Modo Recrutador, botões sociais).
 *
 * Currículo (PDF):
 * - Coloque o arquivo em /public
 * - Atualize `social.resumeUrl` (ex.: "/Curriculo-Laura-Xavier.pdf")
 * - O botão "Currículo" na Navbar/Hero/Command Palette usa esse path
 *
 * Contato:
 * - phone: texto exibido (ex.: "(11) 96562-0048")
 * - whatsapp: link wa.me com DDI+DDD+número (ex.: 5511965620048)
 * - email / linkedin / github: links diretos
 *
 * Disponibilidade:
 * - `availability` aparece no badge do Hero
 * - `recruiterSummary` aparece no Modo Recrutador
 * ============================================================
 */
export const siteConfig: SiteConfig = {
  name: "Laura Xavier",
  role: "Desenvolvedora Front-end Jr. | Estudante de ADS",
  // Frase de impacto do Hero (título principal)
  tagline:
    "Construindo interfaces modernas, rápidas e experiências digitais memoráveis.",
  // Meta description / SEO e subtítulo do Hero
  description:
    "Estudante de Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web. Disponível para vagas efetivas como Desenvolvedora Júnior.",
  location: "São Paulo, SP",
  // true = mostra avisos de conteúdo demo (hoje desligado)
  isPlaceholder: false,
  // URL canônica do site (SEO, sitemap, Open Graph)
  url: "https://laura-xavier.dev",
  social: {
    github: "https://github.com/laurarxs2-maker",
    linkedin: "https://www.linkedin.com/in/laura-xavier-730b13204/",
    email: "lauraramosxavier1@gmail.com",
    phone: "(11) 96562-0048",
    whatsapp: "https://wa.me/5511965620048",
    // PDF real em /public — troque o arquivo e mantenha o mesmo nome, ou atualize o path
    resumeUrl: "/Curriculo-Laura-Xavier.pdf",
  },
  // Texto objetivo exibido quando o "Modo Recrutador" está ativo
  recruiterSummary:
    "Laura Xavier — Desenvolvedora Front-end Jr. e estudante de ADS (Anhembi Morumbi). Stack: JavaScript, HTML, CSS, TypeScript e projetos full stack com IA. Experiência prévia em atendimento e rotinas administrativas (Grupo Amil, Hospital Albert Einstein), com comunicação, organização e trabalho em equipe. Disponível para vagas efetivas. Contato: lauraramosxavier1@gmail.com | (11) 96562-0048 | LinkedIn e GitHub no portfolio.",
  availability: "Disponível para vagas efetivas",
}
