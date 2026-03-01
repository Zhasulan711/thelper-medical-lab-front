"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ImageSrc } from "@/features/home/types"
import { FAQ_ITEMS } from "@/features/home/constants"
import { inViewFadeUp, smoothTransition } from "@/lib/animations"

export function FaqSection({ imageSrc }: { imageSrc: ImageSrc }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <motion.section
      className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:gap-12"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl md:max-w-[420px]">
        <Image
          src={typeof imageSrc === "string" ? imageSrc : imageSrc.src}
          alt="Медицинские услуги"
          width={typeof imageSrc === "string" ? 520 : imageSrc.width ?? 520}
          height={typeof imageSrc === "string" ? 400 : imageSrc.height ?? 400}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
            Медицинские услуги{" "}
            <span className="relative inline-block">
              для вас
              <span className="absolute bottom-1 left-0 right-0 h-1 w-full rounded-full bg-[#00a9bf]/60" />
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Здоровье — главная ценность. Мы помогаем вовремя проходить обследования и получать точные результаты анализов для контроля состояния и лечения.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-muted/50 cursor-pointer"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      isOpen ? "bg-[#00a9bf] text-white" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="flex-1 font-semibold text-foreground">
                    {item.title}
                  </span>
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-full",
                      isOpen ? "bg-[#00a9bf] text-white" : "bg-muted text-muted-foreground"
                    )}
                  >
                    {isOpen ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={smoothTransition}
                    className="border-t border-border overflow-hidden"
                  >
                    <div className="px-4 pb-4 pt-2">
                      <p className="pl-12 text-sm text-muted-foreground md:pl-14">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
