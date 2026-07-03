"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

import { useRecruiterMode } from "@/components/providers/recruiter-provider"
import { fadeUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { recruiterMode } = useRecruiterMode()
  const reducedMotion = useReducedMotion()
  const disableMotion = recruiterMode || reducedMotion

  if (disableMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
