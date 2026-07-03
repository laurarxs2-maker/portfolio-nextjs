import type { Project } from "@/types"

/**
 * ============================================================
 * PROJETOS EM DESTAQUE
 * ============================================================
 * Como adicionar um projeto:
 * 1. Crie um objeto no array `projects` abaixo
 * 2. Defina um `slug` único (URL: /projects/seu-slug)
 * 3. Preencha `engineering` (diferencial do portfolio)
 * 4. `featured: true` para aparecer na home
 * 5. `links.repo` / `links.live` / `links.demo` são opcionais
 *
 * coverGradient: classes Tailwind de gradiente do card
 * (ex.: "from-violet-500/40 via-blue-500/20 to-cyan-500/30")
 * ============================================================
 */
export const projects: Project[] = [
  {
    slug: "busca-prestador",
    title: "Busca Prestador",
    subtitle: "Plataforma full stack de busca de prestadores de serviços",
    description:
      "Plataforma de busca de prestadores de serviços desenvolvida com arquitetura full stack, integrando IA, banco de dados, front-end e back-end. O sistema oferece busca eficiente, interface intuitiva e uma estrutura escalável, aplicando boas práticas de desenvolvimento e integração entre tecnologias.",
    problemStatement:
      "Encontrar prestadores de serviços de forma rápida e confiável costuma ser fragmentado entre indicação informal e ferramentas genéricas, sem uma experiência unificada de busca.",
    role: "Full Stack Developer",
    stack: ["TypeScript", "Full Stack", "IA", "Banco de dados"],
    highlights: [
      "Busca eficiente de prestadores de serviços",
      "Integração entre front-end, back-end e banco de dados",
      "Uso de IA na arquitetura da solução",
      "Interface intuitiva e estrutura preparada para escalar",
    ],
    links: {
      repo: "https://github.com/laurarxs2-maker/Busca-Prestador",
    },
    coverGradient: "from-violet-500/40 via-blue-500/20 to-cyan-500/30",
    status: "shipped",
    featured: true,
    year: 2026,
    // Seção "Ver engenharia da solução" — mostre como você pensa
    engineering: {
      problem:
        "Construir uma plataforma que una busca, dados e inteligência artificial em uma experiência clara para o usuário final.",
      architecture:
        "Arquitetura full stack com separação entre interface, regras de negócio e persistência. A IA entra como camada de apoio à busca e à organização de resultados, enquanto o front-end prioriza usabilidade e feedback rápido.",
      alternatives: [
        "Busca apenas no front-end com dados estáticos — descartada por não escalar nem permitir filtros reais.",
        "Ferramenta no-code — descartada para praticar integração real entre stack e boas práticas de código.",
        "Monólito sem camada de IA — considerado, mas a IA agrega valor direto à descoberta de prestadores.",
      ],
      challenges: [
        "Integrar front-end, back-end, banco e IA sem acoplamento excessivo.",
        "Manter a busca responsiva e compreensível para o usuário.",
        "Aplicar boas práticas em um projeto com várias camadas técnicas.",
      ],
      v2Improvements: [
        "Ranking e filtros avançados por categoria, região e avaliação.",
        "Autenticação de prestadores e painel de gestão.",
        "Métricas de uso para evoluir a relevância da busca.",
      ],
    },
  },
  {
    slug: "series-vault",
    title: "SeriesVault",
    subtitle: "Catálogo inteligente de séries com apoio de IA",
    description:
      "O SeriesVault é um projeto criado em parceria com Inteligência Artificial, reunindo informações, curiosidades e dados organizados sobre diversas séries. A ideia é centralizar tudo em um único lugar, facilitando consultas rápidas, pesquisas e descobertas de novos títulos.",
    problemStatement:
      "Informações sobre séries ficam espalhadas em várias fontes, o que dificulta consulta rápida, pesquisa e descoberta de novos títulos em um só lugar.",
    role: "Front-end Developer",
    stack: ["JavaScript", "IA", "HTML", "CSS"],
    highlights: [
      "Centralização de informações e curiosidades sobre séries",
      "Organização de dados para consulta rápida",
      "Descoberta de novos títulos em um único lugar",
      "Projeto desenvolvido com apoio de Inteligência Artificial",
    ],
    links: {
      repo: "https://github.com/laurarxs2-maker/projeto-series-vault",
    },
    coverGradient: "from-emerald-500/30 via-teal-500/20 to-blue-500/30",
    status: "shipped",
    featured: true,
    year: 2025,
    engineering: {
      problem:
        "Criar um catálogo legível e organizado de séries, com dados estruturados e experiência simples de exploração.",
      architecture:
        "Aplicação front-end em JavaScript com dados organizados por título e categorias. A IA apoiou a estruturação de conteúdo e a organização das informações, acelerando a montagem do catálogo sem perder clareza na interface.",
      alternatives: [
        "Planilha ou documento estático — descartado por não oferecer experiência de produto.",
        "Consumir apenas uma API externa sem curadoria — descartado para manter controle sobre o conteúdo exibido.",
        "Stack mais pesada (framework completo) — adiada para priorizar entrega e domínio de JavaScript.",
      ],
      challenges: [
        "Organizar muitas informações sem poluir a interface.",
        "Manter consultas rápidas e navegação intuitiva.",
        "Equilibrar uso de IA com decisões próprias de produto e UX.",
      ],
      v2Improvements: [
        "Busca e filtros por gênero, status e popularidade.",
        "Páginas de detalhe por série com curiosidades e metadados.",
        "Persistência de favoritos do usuário.",
      ],
    },
  },
  {
    slug: "lw-gourmet-digital",
    title: "LW Gourmet Digital",
    subtitle: "Vitrine digital de confeitaria com conversão via WhatsApp",
    description:
      "Vitrine digital sofisticada para a LW Gourmet, focada em transformar a presença no Instagram em uma página de vendas estruturada. O site atua como uma ponte direta entre a exposição visual dos doces e o fechamento de pedidos via WhatsApp, utilizando uma estética que reforça o valor artesanal da confeitaria.",
    problemStatement:
      "A presença no Instagram gera desejo, mas não oferece um fluxo de venda estruturado entre a vitrine visual e o pedido final.",
    role: "Front-end Developer",
    stack: ["HTML", "CSS", "JavaScript", "WhatsApp"],
    highlights: [
      "Vitrine digital com estética sofisticada e artesanal",
      "Ponte entre Instagram e página de vendas estruturada",
      "Conversão de interesse em pedidos via WhatsApp",
      "Foco em apresentação visual dos produtos",
    ],
    links: {
      repo: "https://github.com/laurarxs2-maker/LW-Gourmet-Digital",
    },
    coverGradient: "from-rose-500/35 via-orange-400/20 to-amber-500/25",
    status: "shipped",
    featured: true,
    year: 2025,
    engineering: {
      problem:
        "Transformar exposição visual de produtos em um fluxo de venda claro, sem perder a identidade artesanal da marca.",
      architecture:
        "Landing/vitrine em HTML, CSS e JavaScript com hierarquia visual forte, seções de produtos e CTAs que direcionam o fechamento para o WhatsApp. A prioridade foi conversão e percepção de valor, não complexidade de backend.",
      alternatives: [
        "Manter apenas Instagram Shopping — insuficiente para uma página de vendas própria e memorável.",
        "E-commerce completo com carrinho e pagamento — overhead alto para o momento do negócio.",
        "Builder visual (Wix/Framer) — descartado para manter o código no portfolio e controle total do layout.",
      ],
      challenges: [
        "Traduzir a estética artesanal da confeitaria em interface digital.",
        "Criar um caminho curto entre desejo e pedido no WhatsApp.",
        "Manter responsividade sem perder impacto visual dos produtos.",
      ],
      v2Improvements: [
        "Catálogo dinâmico com categorias e destaque de lançamentos.",
        "Integração com formulário de pedido pré-preenchido.",
        "Otimização de imagens e SEO local para buscas da região.",
      ],
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}
