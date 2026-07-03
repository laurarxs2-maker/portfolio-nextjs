import { ArrowLeft, ArrowUpRight, Github } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { EngineeringDeepDive } from "@/components/projects/engineering-deep-dive"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProjectBySlug, projects } from "@/data/projects"
import { siteConfig } from "@/data/site"
import { cn } from "@/lib/utils"

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Button asChild variant="ghost" size="sm" className="mb-8">
        <Link href="/#projetos">
          <ArrowLeft />
          Voltar aos projetos
        </Link>
      </Button>

      <div
        className={cn(
          "mb-10 overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br p-8 md:p-10",
          project.coverGradient,
        )}
      >
        <Badge variant="secondary" className="mb-4">
          {project.year} · {project.role}
        </Badge>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-white/85 md:text-lg">
          {project.subtitle}
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {project.links.live || project.links.demo ? (
          <Button asChild>
            <a
              href={project.links.live || project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deploy / Demo
              <ArrowUpRight />
            </a>
          </Button>
        ) : null}
        {project.links.repo ? (
          <Button asChild variant="outline">
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
              GitHub
            </a>
          </Button>
        ) : null}
        <Button asChild variant="secondary">
          <a href="#engineering">Ver engenharia da solução</a>
        </Button>
      </div>

      <div className="mb-12 grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="space-y-3 p-6">
            <h2 className="text-lg font-medium">Objetivo</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-3 p-6">
            <h2 className="text-lg font-medium">Problema</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.problemStatement}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-lg font-medium">Tecnologias</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground">
              Principais funcionalidades
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <EngineeringDeepDive engineering={project.engineering} />
    </div>
  )
}
