"use client"

import { ArrowUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useScrollState } from "@/hooks/use-scroll-state"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const { scrolled } = useScrollState(400)

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-40 shadow-lg transition-all",
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp />
    </Button>
  )
}
