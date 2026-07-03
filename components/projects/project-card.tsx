import { ArrowUpRight, BrainCircuit, Github } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types"
import { cn } from "@/lib/utils"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/30">
      <div
        className={cn(
          "relative h-48 bg-gradient-to-br p-6",
          project.coverGradient,
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_45%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <Badge variant="secondary">{project.year}</Badge>
          <div>
            <p className="text-sm text-white/80">{project.subtitle}</p>
            <h3 className="mt-1 text-2xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <CardContent className="space-y-5 p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Problema resolvido
          </p>
          <p className="text-sm text-foreground">{project.problemStatement}</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Principais funcionalidades
          </p>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.links.live || project.links.demo ? (
            <Button asChild size="sm" variant="secondary">
              <a
                href={project.links.live || project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
                <ArrowUpRight />
              </a>
            </Button>
          ) : null}
          {project.links.repo ? (
            <Button asChild size="sm" variant="outline">
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
          <Button asChild size="sm">
            <Link href={`/projects/${project.slug}#engineering`}>
              <BrainCircuit />
              Ver engenharia da solução
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
