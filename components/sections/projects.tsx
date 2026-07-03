import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { ProjectCard } from "@/components/projects/project-card"
import { getFeaturedProjects } from "@/data/projects"

export function Projects() {
  const projects = getFeaturedProjects()

  return (
    <Section id="projetos">
      <Reveal>
        <SectionTitle
          eyebrow="Projetos"
          title="Cases com cara de produto"
          description="Cada projeto é tratado como case de startup: problema, stack, entregáveis e — o diferencial — a engenharia por trás da solução."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-1">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
