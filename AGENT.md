# AGENT.md — decisões do projeto

### 2026-07-03 - Arquitetura do portfolio premium (Junior Full Stack)

**Modelo:** Opus

**Decisão:**
Adotar site marketing multi-rota (home seccionada + `/projects/[slug]`), conteúdo estático tipado em `/data` + `/types`, GitHub via fetch no servidor com cache e fallback, animações em camadas com gates (`prefers-reduced-motion` + Recruiter Mode), e placeholders centralizados em `data/site.ts` (`isPlaceholder`) para desbloquear implementação. Dados pessoais reais: Laura Xavier / GitHub `laurarxs2-maker`. Projetos ainda placeholder até envio da autora.

**Contexto:**
Greenfield para impressionar recruiters/tech leads/CTOs com estética SaaS (Vercel/Linear/Stripe), stack Next.js + Tailwind + shadcn-like + Framer Motion + Geist, meta Lighthouse >95 e a11y AA. O valor central é demonstrar raciocínio de engenharia, não só UI.

**Alternativas descartadas:**
- SPA única com âncoras apenas — piora SEO e compartilhamento das case studies.
- CMS (Sanity/Contentful) — overhead desnecessário para conteúdo pessoal versionado.
- MDX como fonte primária — adiado; TS/JSON cobre o volume atual com melhor tipagem.
- Fetch GitHub no client — rate limit, flash de UI e sem token seguro.
- Motion sempre ligado — risco de falhar Lighthouse e a11y.
- Bloquear build até dados reais — impede entrega incremental.

**Impacto:**
Conteúdo real de projetos fica limitado a `/data`. Secrets (EmailJS, GitHub token) em `.env.local`. Rotas e modelos de `Project.engineering` ficam estáveis.
