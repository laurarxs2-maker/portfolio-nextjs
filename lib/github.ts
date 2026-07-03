import type { GitHubData, GitHubLanguage, GitHubRepo } from "@/types"

const USERNAME = process.env.GITHUB_USERNAME || "laurarxs2-maker"

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Python: "#3572a5",
  Shell: "#89e051",
  Other: "#8b949e",
}

function headers() {
  const token = process.env.GITHUB_TOKEN
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "laura-xavier-portfolio",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export function getGithubFallback(): GitHubData {
  return {
    profile: {
      login: USERNAME,
      name: "Laura Xavier",
      avatar_url: `https://github.com/${USERNAME}.png`,
      html_url: `https://github.com/${USERNAME}`,
      public_repos: 0,
      followers: 0,
    },
    repos: [],
    languages: [
      { name: "TypeScript", percentage: 45, color: LANGUAGE_COLORS.TypeScript },
      { name: "JavaScript", percentage: 30, color: LANGUAGE_COLORS.JavaScript },
      { name: "CSS", percentage: 15, color: LANGUAGE_COLORS.CSS },
      { name: "HTML", percentage: 10, color: LANGUAGE_COLORS.HTML },
    ],
    recentCommits: [],
  }
}

function computeLanguages(repos: GitHubRepo[]): GitHubLanguage[] {
  const counts: Record<string, number> = {}
  let total = 0

  for (const repo of repos) {
    const lang = repo.language || "Other"
    counts[lang] = (counts[lang] || 0) + 1
    total += 1
  }

  if (total === 0) return getGithubFallback().languages

  return Object.entries(counts)
    .map(([name, count]) => ({
      name,
      percentage: Math.round((count / total) * 100),
      color: LANGUAGE_COLORS[name] || LANGUAGE_COLORS.Other,
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 6)
}

export async function fetchGithubData(): Promise<GitHubData> {
  try {
    const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`, {
      headers: headers(),
      next: { revalidate: 3600 },
    })

    if (!profileRes.ok) return getGithubFallback()

    const profile = await profileRes.json()

    const reposRes = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: headers(),
        next: { revalidate: 3600 },
      },
    )

    const reposRaw = reposRes.ok ? await reposRes.json() : []
    const repos: GitHubRepo[] = (reposRaw as Array<Record<string, unknown>>).map(
      (repo) => ({
        id: repo.id as number,
        name: repo.name as string,
        description: (repo.description as string | null) ?? null,
        html_url: repo.html_url as string,
        language: (repo.language as string | null) ?? null,
        stargazers_count: repo.stargazers_count as number,
        forks_count: repo.forks_count as number,
        updated_at: repo.updated_at as string,
        topics: (repo.topics as string[]) || [],
      }),
    )

    const eventsRes = await fetch(
      `https://api.github.com/users/${USERNAME}/events/public?per_page=10`,
      {
        headers: headers(),
        next: { revalidate: 3600 },
      },
    )

    const events = eventsRes.ok ? await eventsRes.json() : []
    const recentCommits = (
      events as Array<{
        type: string
        repo: { name: string }
        payload?: { commits?: Array<{ message: string; sha: string }> }
        created_at: string
      }>
    )
      .filter((event) => event.type === "PushEvent")
      .flatMap((event) =>
        (event.payload?.commits || []).slice(0, 1).map((commit) => ({
          repo: event.repo.name,
          message: commit.message,
          date: event.created_at,
          url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
        })),
      )
      .slice(0, 5)

    return {
      profile: {
        login: profile.login,
        name: profile.name,
        avatar_url: profile.avatar_url,
        html_url: profile.html_url,
        public_repos: profile.public_repos,
        followers: profile.followers,
      },
      repos,
      languages: computeLanguages(repos),
      recentCommits,
    }
  } catch {
    return getGithubFallback()
  }
}
