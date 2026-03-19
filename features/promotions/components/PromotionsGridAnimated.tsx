"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import type { Promotion } from "@/features/promotions/types"
import { inViewStaggerContainer, staggerItem } from "@/lib/animations"

function formatDate(s: string): string {
  const d = new Date(s + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

function formatDateRange(dateFrom?: string, dateTo?: string): string | null {
  if (!dateFrom) return null
  const from = formatDate(dateFrom)
  if (!dateTo) return `с ${from}`
  return `${from} — ${formatDate(dateTo)}`
}

export function PromotionsGridAnimated({ promotions }: { promotions: Promotion[] }) {
  if (promotions.length === 0) {
    return (
      <p className="text-muted-foreground">
        Сейчас нет активных акций. Следите за новостями на сайте.
      </p>
    )
  }

  return (
    <motion.ul
      className="grid gap-6 sm:grid-cols-2"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      {promotions.map((promo) => {
        const dateRange = formatDateRange(promo.dateFrom, promo.dateTo)
        return (
          <motion.li key={promo.slug} variants={staggerItem}>
            <Link href={`/promotions/${promo.slug}`} className="group block h-full cursor-pointer">
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                {promo.image ? (
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={promo.image}
                      alt={promo.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      quality={60}
                    />
                  </div>
                ) : (
                  <div className="flex aspect-video min-h-[140px] items-center justify-center bg-[#00a9bf]/10 text-[#00a9bf]">
                    <span className="text-4xl font-bold opacity-80">%</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-semibold text-foreground group-hover:text-[#00a9bf]">
                    {promo.title}
                  </h2>
                  {dateRange && (
                    <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="size-3.5" aria-hidden />
                      {dateRange}
                    </p>
                  )}
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                    {promo.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00a9bf] group-hover:underline">
                    Подробнее
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                </div>
              </article>
            </Link>
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
