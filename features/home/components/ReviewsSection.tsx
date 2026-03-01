"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { REVIEWS } from "@/features/home/constants"

export function ReviewsSection() {
  const [index, setIndex] = useState(0)

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? REVIEWS.length - 1 : i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= REVIEWS.length - 1 ? 0 : i + 1))
  }, [])

  const review = REVIEWS[index]

  return (
    <section className="bg-[#00a9bf] py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Что говорят наши пациенты
        </h2>

        <div className="mt-10 flex flex-col items-center">
          <div className="flex size-24 items-center justify-center rounded-full bg-white/20">
            <User className="size-12 text-white" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex flex-col items-center gap-4"
            >
              <p className="text-white/95 leading-relaxed">
                «{review.text}»
              </p>
              <div>
                <p className="font-bold text-white">{review.name}</p>
                <p className="text-sm text-white/80">{review.location}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex size-12 items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex size-12 items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
