"use client"

import { motion } from "framer-motion"
import { inViewFadeUp } from "@/lib/animations"

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  as?: "section" | "div"
}

export function AnimatedSection({ children, className, as: Tag = "section" }: AnimatedSectionProps) {
  const Comp = Tag === "section" ? motion.section : motion.div
  return (
    <Comp
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
      className={className}
    >
      {children}
    </Comp>
  )
}
