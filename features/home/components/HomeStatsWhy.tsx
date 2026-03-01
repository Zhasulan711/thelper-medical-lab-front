"use client"

import { motion } from "framer-motion"
import { inViewFadeUp, staggerContainer, staggerItem } from "@/lib/animations"

export function HomeStatsWhy() {
  return (
    <motion.div
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:gap-12"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <motion.div
        className="w-full shrink-0 rounded-2xl border border-border bg-card p-8 shadow-sm md:max-w-[420px]"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={inViewFadeUp.viewport}
      >
        <div className="border-b border-border pb-6">
          <motion.p variants={staggerItem} className="text-4xl font-bold text-[#00a9bf]">5000+</motion.p>
          <motion.p variants={staggerItem} className="mt-1 text-sm text-muted-foreground">Филиалов по всему миру</motion.p>
        </div>
        <div className="grid grid-cols-2 gap-0 pt-6">
          <div className="border-r border-border pr-6">
            <motion.p variants={staggerItem} className="text-3xl font-bold text-[#00a9bf]">1000+</motion.p>
            <motion.p variants={staggerItem} className="mt-1 text-sm text-muted-foreground">Больниц основано</motion.p>
          </div>
          <div className="pl-6">
            <motion.p variants={staggerItem} className="text-3xl font-bold text-[#00a9bf]">300+</motion.p>
            <motion.p variants={staggerItem} className="mt-1 text-sm text-muted-foreground">Местных партнёров</motion.p>
          </div>
        </div>
      </motion.div>

      <motion.section
        className="flex flex-col gap-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={inViewFadeUp.viewport}
      >
        <motion.span
          variants={staggerItem}
          className="text-sm font-medium uppercase tracking-wider text-[#00a9bf]"
        >
          Наши преимущества
        </motion.span>
        <motion.h2
          variants={staggerItem}
          className="text-2xl font-bold text-foreground md:text-3xl"
        >
          Почему мы лучше
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="max-w-xl text-muted-foreground"
        >
          Индустрия здравоохранения — это постоянно меняющаяся, конкурентная отрасль, требующая внимания и заботы. Мы надеемся познакомить вас с нашей компанией, которая поднимает планку и внедряет инновации с невероятной скоростью.
        </motion.p>
      </motion.section>
    </motion.div>
  )
}
