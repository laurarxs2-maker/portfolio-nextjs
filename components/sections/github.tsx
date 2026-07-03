import { ExternalLink, GitFork, Star } from "lucide-react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDate } from "@/lib/utils"
import type { GitHubData } from "@/types"

export function GitHubSection({ data }: { data: GitHubData }) {
  return (
    <Section id="github">
      <Reveal>
        <SectionTitle
          eyebrow="GitHub"
          title="Atividade pública"
          description={`Perfil @${data.profile.login} — repositórios recentes, linguagens e commits.`}
        />
      </Reveal>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Repositórios</p>
            <p className="mt-2 font-mono text-2xl font-semibold">
              {data.profile.public_repos}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Followers</p>
            <p className="mt-2 font-mono text-2xl font-semibold">
              {data.profile.followers}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Perfil</p>
            <a
              href={data.profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              github.com/{data.profile.login}
              <ExternalLink className="size-3.5" />
            </a>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground">
            Últimos repositórios
          </h3>
          {data.repos.length === 0 ? (
            <Card>
              <CardContent className="p-5 text-sm text-muted-foreground">
                Nenhum repositório público encontrado ainda. A seção usa fallback
                estável enquanto o perfil cresce.
              </CardContent>
            </Card>
          ) : (
            data.repos.map((repo) => (
              <Card key={repo.id} className="transition-transform hover:-translate-y-0.5">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {repo.name}
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {repo.description || "Sem descrição"}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    {repo.language ? <Badge variant="outline">{repo.language}</Badge> : null}
                    <span className="inline-flex items-center gap-1">
                      <Star className="size-3.5" /> {repo.stargazers_count}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="size-3.5" /> {repo.forks_count}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              Linguagens
            </h3>
            <Card>
              <CardContent className="space-y-3 p-5">
                {data.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{lang.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              Últimos commits
            </h3>
            <Card>
              <CardContent className="space-y-4 p-5">
                {data.recentCommits.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Sem eventos públicos recentes.
                  </p>
                ) : (
                  data.recentCommits.map((commit) => (
                    <a
                      key={`${commit.url}-${commit.message}`}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-border/60 p-3 transition-colors hover:bg-accent"
                    >
                      <p className="text-sm text-foreground">{commit.message}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {commit.repo} · {formatDate(commit.date)}
                      </p>
                    </a>
                  ))
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}
