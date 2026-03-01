"use client"

import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { INTEREST_OPTIONS } from "@/features/home/constants"
import { ctaFormSchema, type CtaFormValues } from "@/lib/validations/cta"
import { trackFormSubmit } from "@/lib/analytics"
import { inViewFadeUp } from "@/lib/animations"

type CtaImageSrc = string | StaticImageData

export function CtaFormSection({ imageSrc }: { imageSrc: CtaImageSrc }) {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<CtaFormValues>({
    resolver: zodResolver(ctaFormSchema),
    defaultValues: { name: "", interest: "", email: "", phone: "", website: "" },
  })

  const onSubmit = async (data: CtaFormValues) => {
    if (data.website) return
    try {
      await new Promise((r) => setTimeout(r, 500))
      setSent(true)
      trackFormSubmit("cta")
    } catch {
      setError("root", { message: "Ошибка отправки. Попробуйте позже." })
    }
  }

  return (
    <motion.section
      id="cta"
      className="bg-muted/30 px-4 py-16 md:py-20"
      initial={inViewFadeUp.initial}
      whileInView={inViewFadeUp.whileInView}
      viewport={inViewFadeUp.viewport}
      transition={inViewFadeUp.transition}
    >
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl bg-card shadow-lg md:flex">
          <div className="relative h-64 w-full shrink-0 md:h-auto md:min-h-[360px] md:w-[45%]">
            <Image
              src={imageSrc}
              alt="Консультация"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center p-6 md:p-10">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Бесплатная консультация
            </h2>

            {sent ? (
              <p className="mt-6 text-muted-foreground">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </p>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cta-name" className="text-sm font-medium text-foreground">
                      ФИО *
                    </label>
                    <Input
                      id="cta-name"
                      placeholder="ФИО *"
                      className="h-10"
                      aria-invalid={!!errors.name}
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive" role="alert">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cta-interest" className="text-sm font-medium text-foreground">
                      Меня интересует *
                    </label>
                    <select
                      id="cta-interest"
                      className={cn(
                        "border-input h-10 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none md:text-sm",
                        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                      )}
                      aria-invalid={!!errors.interest}
                      {...register("interest")}
                    >
                      <option value="">Выберите...</option>
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p className="text-xs text-destructive" role="alert">{errors.interest.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cta-email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="Email *"
                      className="h-10"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive" role="alert">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cta-phone" className="text-sm font-medium text-foreground">
                      Телефон *
                    </label>
                    <Input
                      id="cta-phone"
                      type="tel"
                      placeholder="+7 (777) 000-00-00"
                      className="h-10"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive" role="alert">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <input type="text" tabIndex={-1} autoComplete="off" className="absolute opacity-0 pointer-events-none h-0 w-0" {...register("website")} aria-hidden />
                {errors.root && (
                  <p className="text-sm text-destructive" role="alert">{errors.root.message}</p>
                )}
                <Button
                  type="submit"
                  className="mt-2 h-11 bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка…" : "Получить консультацию"}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
