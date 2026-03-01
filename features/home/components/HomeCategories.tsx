"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Heart, Brain, TestTube2, Eye } from "lucide-react"
import { inViewStaggerContainer, staggerItem, cardHover } from "@/lib/animations"

const CATEGORIES = [
  { icon: Heart, name: "Кардиология", desc: "Исследования сердца и сосудов для оценки рисков и контроля лечения." },
  { icon: Brain, name: "Неврология", desc: "Анализы и тесты для диагностики неврологических заболеваний." },
  { icon: TestTube2, name: "Общие анализы", desc: "Клинические и биохимические исследования крови и мочи." },
  { icon: Eye, name: "Офтальмология", desc: "Скрининг и диагностика заболеваний органов зрения." },
] as const

export function HomeCategories() {
  return (
    <motion.section
      className="mx-auto flex max-w-293 flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:justify-between md:gap-12"
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
        {CATEGORIES.map(({ icon: Icon, name, desc }) => (
          <motion.div
            key={name}
            variants={staggerItem}
            initial="initial"
            whileInView="animate"
            viewport={inViewStaggerContainer.viewport}
            className="flex flex-col rounded-xl bg-[#223645] p-5 text-white"
            whileHover={cardHover.hover}
            whileTap={cardHover.tap}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="flex size-14 items-center justify-center rounded-lg bg-white/15">
              <Icon className="size-7 text-white" />
            </div>
            <h3 className="mt-4 font-bold">{name}</h3>
            <p className="mt-2 text-sm text-white/80">{desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
