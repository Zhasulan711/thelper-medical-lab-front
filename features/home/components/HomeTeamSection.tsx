"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Stethoscope } from "lucide-react"
import { TEAM_MEMBERS } from "@/features/home/constants/team"
import { inViewFadeUp } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function HomeTeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [slideWidth, setSlideWidth] = useState(320)
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragStartScrollLeft = useRef(0)

  const canPrev = index > 0
  const canNext = TEAM_MEMBERS.length > 1

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    dragStartX.current = e.clientX
    dragStartScrollLeft.current = el.scrollLeft
    setIsDragging(true)
  }, [])

  useEffect(() => {
    if (!isDragging) return
    const el = scrollRef.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const dx = dragStartX.current - e.clientX
      el.scrollLeft = dragStartScrollLeft.current + dx
    }
    const handleMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const updateWidth = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const w = el.clientWidth
    if (w > 0) setSlideWidth(w)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateWidth()
    const ro = new ResizeObserver(updateWidth)
    ro.observe(el)
    return () => ro.disconnect()
  }, [updateWidth])

  const updateIndexFromScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft } = el
    const i = Math.round(scrollLeft / slideWidth)
    setIndex(Math.max(0, Math.min(i, TEAM_MEMBERS.length - 1)))
  }, [slideWidth])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateIndexFromScroll()
    el.addEventListener("scroll", updateIndexFromScroll)
    return () => el.removeEventListener("scroll", updateIndexFromScroll)
  }, [updateIndexFromScroll, slideWidth])

  const scrollTo = useCallback(
    (i: number) => {
      const el = scrollRef.current
      if (!el) return
      const target = Math.max(0, Math.min(i, TEAM_MEMBERS.length - 1))
      el.scrollTo({ left: target * slideWidth, behavior: "smooth" })
    },
    [slideWidth]
  )

  const goPrev = useCallback(() => scrollTo(index - 1), [index, scrollTo])
  const goNext = useCallback(
    () => scrollTo(index >= TEAM_MEMBERS.length - 1 ? 0 : index + 1),
    [index, scrollTo]
  )

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 py-16 md:py-24"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <div className="mb-12 flex flex-col gap-4 text-center md:mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a9bf]">
          Люди, которым можно доверять
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Наша команда
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Специалисты лаборатории — опытные медработники, которые заботятся о точности анализов и вашем комфорте.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4">
        <button
          type="button"
          onClick={goPrev}
          disabled={!canPrev}
          className={cn(
            "z-10 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-[#00a9bf] shadow-lg transition-all hover:scale-105 hover:border-[#00a9bf]/30 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30",
            "md:size-14"
          )}
          aria-label="Предыдущий"
        >
          <ChevronLeft className="size-6 md:size-7" />
        </button>

        <div className="relative w-full max-w-sm overflow-hidden rounded-2xl md:max-w-md">
          <div
            ref={scrollRef}
            className={cn(
              "scrollbar-hide flex aspect-3/4 w-full touch-pan-x overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory",
              isDragging ? "cursor-grabbing select-none" : "cursor-grab"
            )}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseDown={handleMouseDown}
          >
            {TEAM_MEMBERS.map((member, i) => (
              <article
                key={i}
                className="relative h-full shrink-0 snap-start snap-always overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5"
                style={{ width: slideWidth }}
              >
                <div className="absolute inset-0 bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 28rem"
                    className="object-cover"
                    priority={i < 3}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 via-black/20 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-semibold drop-shadow-sm">{member.name}</p>
                  <p className="mt-0.5 text-sm text-white/90">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={goNext}
          disabled={!canNext}
          className={cn(
            "z-10 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-[#00a9bf] shadow-lg transition-all hover:scale-105 hover:border-[#00a9bf]/30 hover:shadow-xl disabled:pointer-events-none disabled:opacity-30",
            "md:size-14"
          )}
          aria-label="Следующий"
        >
          <ChevronRight className="size-6 md:size-7" />
        </button>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          {TEAM_MEMBERS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              className={cn(
                "rounded-full transition-all duration-200",
                i === index
                  ? "h-2.5 w-8 bg-[#00a9bf]"
                  : "h-2 w-2 bg-muted-foreground/25 hover:bg-muted-foreground/40"
              )}
              aria-label={`Сотрудник ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-xs font-medium tabular-nums text-muted-foreground">
          {index + 1} / {TEAM_MEMBERS.length}
        </span>
      </div>

      <div className="mt-12 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm text-muted-foreground">
        <Stethoscope className="size-4 shrink-0 text-[#00a9bf]" />
        <span>Профессиональный подход к каждому пациенту</span>
      </div>
    </motion.section>
  )
}
