"use client"

import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function AnimatedBackground() {
  const { recruiterMode } = useRecruiterMode()
  const reducedMotion = usePrefersReducedMotion()
  const enabled = !recruiterMode && !reducedMotion
  const { x, y } = useMousePosition(enabled)

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[120px]" />
      <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-violet-500/15 blur-[120px]" />

      {enabled ? (
        <div
          className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow),transparent_65%)] transition-opacity duration-300"
          style={{ left: x, top: y }}
        />
      ) : null}
    </div>
  )
}
