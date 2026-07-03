import type { Transition, Variants } from "framer-motion"

export const transitions = {
  fast: { duration: 0.15, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  base: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } as Transition,
  slow: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } as Transition,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.base },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.base },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.base },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}
