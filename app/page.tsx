import { About } from "@/components/sections/about"
import { Building } from "@/components/sections/building"
import { Contact } from "@/components/sections/contact"
import { Differentials } from "@/components/sections/differentials"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Process } from "@/components/sections/process"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Stats } from "@/components/sections/stats"
import { TimelineSection } from "@/components/sections/timeline-section"

/**
 * Home — ordem das seções.
 * Para reordenar, mova os componentes abaixo.
 * Conteúdo de cada seção: pasta /data e components/sections/*
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Building />
      <TimelineSection />
      <Experience />
      <Differentials />
      <Process />
      <Contact />
    </>
  )
}
