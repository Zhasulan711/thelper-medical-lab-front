"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Stethoscope } from "lucide-react"
import { TEAM_MEMBERS } from "@/features/home/constants/team"
import { inViewStaggerContainer, staggerItem, cardHover } from "@/lib/animations"

export function HomeTeamSection() {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      <div className="mb-10 flex flex-col gap-3 md:mb-14">
        <motion.span
          variants={staggerItem}
          className="text-sm font-medium uppercase tracking-wider text-[#00a9bf]"
        >
          Люди, которым можно доверять
        </motion.span>
        <motion.h2
          variants={staggerItem}
          className="text-2xl font-bold text-foreground md:text-3xl"
        >
          Наша команда
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="max-w-xl text-muted-foreground"
        >
          Специалисты лаборатории — опытные медработники, которые заботятся о точности анализов и вашем комфорте.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, i) => (
          <motion.article
            key={i}
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={inViewStaggerContainer.viewport}
            className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            whileHover={cardHover.hover}
            whileTap={cardHover.tap}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="relative aspect-3/4 w-full overflow-hidden bg-muted">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
            </div>
            <div className="flex flex-col gap-1 border-t border-border bg-card p-4">
              <p className="font-semibold text-foreground">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        variants={staggerItem}
        className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
      >
        <Stethoscope className="size-4 text-[#00a9bf]" />
        <span>Профессиональный подход к каждому пациенту</span>
      </motion.div>
    </motion.section>
  )
}
