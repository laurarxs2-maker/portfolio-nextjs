import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  )
}

type SectionTitleProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
