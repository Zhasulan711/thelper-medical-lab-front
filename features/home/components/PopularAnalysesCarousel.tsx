"use client"

import { useRef, useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { POPULAR_ANALYSES } from "@/features/home/constants"
import { inViewFadeUp } from "@/lib/animations"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const GAP_PX = 20

function getCardsPerView(width: number): number {
  if (width >= 1280) return 4
  if (width >= 1024) return 3
  if (width >= 640) return 2
  return 1
}

export function PopularAnalysesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(260)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const updateLayout = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const containerW = el.clientWidth
    if (containerW <= 0) return
    // По ширине окна решаем, сколько карточек в ряд (контейнер ограничен max-w-6xl и не дотягивает до 1280)
    const viewportW = typeof window !== "undefined" ? window.innerWidth : 1280
    const n = getCardsPerView(viewportW)
    const totalGap = (n - 1) * GAP_PX
    const width = Math.floor((containerW - totalGap) / n)
    setCardWidth(Math.max(width, 200))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateLayout()
    const ro = new ResizeObserver(updateLayout)
    ro.observe(el)
    const onWindowResize = () => updateLayout()
    window.addEventListener("resize", onWindowResize)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", onWindowResize)
    }
  }, [updateLayout])

  const updateArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollPrev(scrollLeft > 2)
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 2)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener("scroll", updateArrows)
    return () => el.removeEventListener("scroll", updateArrows)
  }, [updateArrows])

  const scrollBy = useCallback((delta: number) => {
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" })
  }, [])

  const step = cardWidth + GAP_PX

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16 md:py-20"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
        Популярные анализы
      </h2>

      <div className="flex items-center gap-3 md:gap-6">
        <button
          type="button"
          onClick={() => scrollBy(-step)}
          disabled={!canScrollPrev}
          className={cn(
            "z-10 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-card text-[#00a9bf] shadow-md ring-1 ring-border/50 transition-all hover:scale-105 hover:shadow-lg hover:ring-[#00a9bf]/30 disabled:pointer-events-none disabled:opacity-40 md:size-12"
          )}
          aria-label="Предыдущие"
        >
          <ChevronLeft className="size-5 md:size-6" />
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide flex min-w-0 flex-1 gap-5 overflow-x-auto overflow-y-hidden scroll-smooth py-1 snap-x snap-mandatory"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {POPULAR_ANALYSES.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[180px] shrink-0 snap-start snap-always flex-col rounded-2xl border border-border/80 bg-card p-6 shadow-md ring-1 ring-black/4 transition-all hover:shadow-lg hover:ring-black/6"
              style={{ width: cardWidth }}
            >
              <p className="min-h-0 flex-1 text-sm font-semibold leading-snug text-foreground line-clamp-4">
                {item.title}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{item.duration}</p>
              <p className="mt-2 text-xl font-bold text-orange-500">{item.price} ₸</p>
              <Button
                className="mt-5 h-10 w-full shrink-0 rounded-lg bg-[#00a9bf] font-medium text-white hover:bg-[#00a9bf]/90"
                size="sm"
              >
                В корзину
              </Button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollBy(step)}
          disabled={!canScrollNext}
          className={cn(
            "z-10 flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-card text-[#00a9bf] shadow-md ring-1 ring-border/50 transition-all hover:scale-105 hover:shadow-lg hover:ring-[#00a9bf]/30 disabled:pointer-events-none disabled:opacity-40 md:size-12"
          )}
          aria-label="Следующие"
        >
          <ChevronRight className="size-5 md:size-6" />
        </button>
      </div>
    </motion.section>
  )
}
