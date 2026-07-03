/**
 * Tipos do portfolio.
 * Ao criar campos novos em /data, declare-os aqui para manter type-safety.
 */
export type SocialLinks = {
  github: string
  linkedin: string
  email: string
  phone?: string
  whatsapp?: string
  /** Path público do PDF, ex.: "/Curriculo-Laura-Xavier.pdf" */
  resumeUrl: string
}

export type SiteConfig = {
  name: string
  role: string
  tagline: string
  description: string
  location: string
  isPlaceholder: boolean
  url: string
  social: SocialLinks
  recruiterSummary: string
  availability: string
}

export type ProjectStatus = "shipped" | "building" | "concept"

export type EngineeringSection = {
  problem: string
  architecture: string
  alternatives: string[]
  challenges: string[]
  v2Improvements: string[]
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  problemStatement: string
  role: string
  stack: string[]
  highlights: string[]
  metrics?: { label: string; value: string }[]
  links: { live?: string; repo?: string; demo?: string }
  coverGradient: string
  status: ProjectStatus
  featured: boolean
  year: number
  engineering: EngineeringSection
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "cloud"

export type Skill = {
  name: string
  category: SkillCategory
  level: 1 | 2 | 3 | 4 | 5
  tooltip: string
}

export type TimelineKind = "learning" | "course" | "project" | "achievement"

export type TimelineItem = {
  id: string
  date: string
  title: string
  description: string
  kind: TimelineKind
}

export type ExperienceKind =
  | "professional"
  | "personal"
  | "freelance"
  | "course"
  | "bootcamp"
  | "hackathon"
  | "education"

export type Experience = {
  id: string
  title: string
  organization: string
  kind: ExperienceKind
  start: string
  end?: string
  description: string
  stack?: string[]
}

export type Stat = {
  label: string
  value: number
  suffix?: string
  prefix?: string
  highlight?: boolean
}

export type RoadmapItem = {
  id: string
  title: string
  description: string
  progress: number
  status: "exploring" | "building" | "shipped"
}

export type Differential = {
  id: string
  title: string
  description: string
  icon: string
}

export type ProcessStep = {
  id: string
  title: string
  description: string
  order: number
}

export type NavItem = {
  label: string
  href: string
}

export type GitHubRepo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
}

export type GitHubLanguage = {
  name: string
  percentage: number
  color: string
}

export type GitHubData = {
  profile: {
    login: string
    name: string | null
    avatar_url: string
    html_url: string
    public_repos: number
    followers: number
  }
  repos: GitHubRepo[]
  languages: GitHubLanguage[]
  recentCommits: {
    repo: string
    message: string
    date: string
    url: string
  }[]
}
