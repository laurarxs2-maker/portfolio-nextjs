"use client"

import { useScrollState } from "@/hooks/use-scroll-state"

export function ScrollProgress() {
  const { progress } = useScrollState()

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
      aria-hidden
    >
      <div
        className="progress-bar h-full origin-left transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}
