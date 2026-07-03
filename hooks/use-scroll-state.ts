"use client"

import { useEffect, useState } from "react"

export function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > threshold)
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return { scrolled, progress }
}
