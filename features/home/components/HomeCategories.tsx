"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TestTube2 } from "lucide-react"
import { inViewStaggerContainer, staggerItem, cardHover } from "@/lib/animations"
import { CATEGORIES } from "@/features/services/constants"

export function HomeCategories() {
  return (
    <motion.section
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:justify-between md:gap-12"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      <div className="flex max-w-md flex-col gap-4">
        <motion.h2
          variants={staggerItem}
          className="text-2xl font-bold leading-tight text-foreground md:text-3xl"
        >
          Разные категории исследований
        </motion.h2>
        <motion.p variants={staggerItem} className="text-muted-foreground">
          По запросам пациентов мы предлагаем разные виды анализов и исследований для точной диагностики и контроля здоровья.
        </motion.p>
        <motion.div variants={staggerItem}>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-[#00a9bf] font-medium hover:underline cursor-pointer"
          >
            Смотреть больше
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 md:max-w-[520px]">
        {CATEGORIES.slice(0, 4).map((cat) => (
          <motion.div
            key={cat.slug}
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={inViewStaggerContainer.viewport}
            className="flex flex-col rounded-xl bg-[#36807f] p-5 text-white"
            whileHover={cardHover.hover}
            whileTap={cardHover.tap}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link href={`/services/${cat.slug}`} className="flex h-full flex-col cursor-pointer">
              <div className="flex size-14 items-center justify-center rounded-lg bg-white/15">
                <TestTube2 className="size-7 text-white" />
              </div>
              <h3 className="mt-4 font-bold">{cat.name}</h3>
              <p className="mt-2 text-sm text-white/80 line-clamp-2">{cat.description}</p>
              <span className="mt-3 text-xs font-medium text-white/90">
                {cat.analysisCount} {cat.analysisCount === 1 ? "анализ" : "анализов"}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
