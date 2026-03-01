"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { POPULAR_ANALYSES, VISIBLE_COUNT, CARD_WIDTH, GAP, STEP } from "@/features/home/constants"
import { inViewFadeUp } from "@/lib/animations"

export function PopularAnalysesCarousel() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, POPULAR_ANALYSES.length - VISIBLE_COUNT)

  const goNext = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? i : i + 1))
  }, [maxIndex])

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? i : i - 1))
  }, [])

  return (
    <motion.section
      className="mx-auto max-w-[1100px] px-4 py-16"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
        Популярные анализы
      </h2>

      <div className="relative">
        <div className="h-[170px] overflow-hidden">
          <motion.div
            className="flex h-full items-stretch gap-4"
            style={{ width: "max-content" }}
            animate={{ x: -index * STEP }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
          >
            {POPULAR_ANALYSES.map((item) => (
              <div
                key={item.id}
                className="flex w-[254px] shrink-0 flex-col rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <p className="min-h-0 flex-1 text-sm font-medium leading-snug text-foreground line-clamp-4">
                  {item.title}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">{item.duration}</p>
                <p className="mt-1 text-xl font-bold text-orange-500">{item.price} ₸</p>
                <Button
                  className="mt-4 w-full shrink-0 bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90"
                  size="sm"
                >
                  В корзину
                </Button>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          disabled={index === 0}
          className="absolute left-0 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-muted disabled:pointer-events-none disabled:opacity-40 md:-left-4"
          aria-label="Предыдущие"
        >
          <ChevronLeft className="size-5 text-[#00a9bf]" />
        </button>
        <button
          type="button"
          onClick={goNext}
          disabled={index >= maxIndex}
          className="absolute right-0 top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background shadow-md hover:bg-muted disabled:pointer-events-none disabled:opacity-40 md:-right-4"
          aria-label="Следующие"
        >
          <ChevronRight className="size-5 text-[#00a9bf]" />
        </button>
      </div>
    </motion.section>
  )
}
