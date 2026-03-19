"use client"

import { useState, useCallback, type ChangeEvent, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, User } from "lucide-react"
import { REVIEWS } from "@/features/home/constants"
import { inViewFadeUp } from "@/lib/animations"

export function ReviewsSection() {
  const [index, setIndex] = useState(0)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    text: "",
  })

  const goPrev = useCallback(() => {
    setIndex((i) => (i <= 0 ? REVIEWS.length - 1 : i - 1))
  }, [])

  const goNext = useCallback(() => {
    setIndex((i) => (i >= REVIEWS.length - 1 ? 0 : i + 1))
  }, [])

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    },
    []
  )

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: "", text: "" })
  }, [])

  const review = REVIEWS[index]

  return (
    <motion.section
      className="bg-[#36807f] py-16 md:py-20"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
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
            className="flex size-12 cursor-pointer items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex size-12 cursor-pointer items-center justify-center rounded-xl bg-white/20 text-white transition-colors hover:bg-white/30"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setIsFormOpen((prev) => !prev)
              setIsSubmitted(false)
            }}
            className="cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-[#36807f] transition-colors hover:bg-white/90"
          >
            Оставить отзыв
          </button>

          <AnimatePresence>
            {isFormOpen ? (
              <motion.form
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleSubmit}
                className="mx-auto mt-5 flex max-w-xl flex-col gap-3 rounded-2xl bg-white/10 p-4 text-left"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-[#1f3f3f] outline-none transition focus:border-white"
                  required
                />
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  placeholder="Ваш отзыв"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-white/30 bg-white/95 px-4 py-3 text-[#1f3f3f] outline-none transition focus:border-white"
                  required
                />
                <button
                  type="submit"
                  className="cursor-pointer self-start rounded-xl bg-white px-5 py-3 font-semibold text-[#36807f] transition-colors hover:bg-white/90"
                >
                  Отправить
                </button>
                {isSubmitted ? (
                  <p className="text-sm text-white/90">
                    Спасибо! Отзыв отправлен.
                  </p>
                ) : null}
              </motion.form>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
