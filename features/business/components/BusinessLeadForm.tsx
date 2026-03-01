"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { businessLeadFormSchema, type BusinessLeadFormValues } from "@/lib/validations/business"
import { trackFormSubmit } from "@/lib/analytics"

export function BusinessLeadForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<BusinessLeadFormValues>({
    resolver: zodResolver(businessLeadFormSchema),
    defaultValues: { company: "", contact: "", phone: "", email: "", comment: "", website: "" },
  })

  const onSubmit = async (data: BusinessLeadFormValues) => {
    if (data.website) return
    try {
      await new Promise((r) => setTimeout(r, 500))
      setSent(true)
      trackFormSubmit("business")
    } catch {
      setError("root", { message: "Ошибка отправки. Попробуйте позже." })
    }
  }

  if (sent) {
    return (
      <p className="rounded-xl border border-border bg-muted/30 p-6 text-center text-muted-foreground">
        Спасибо! Заявка принята. Менеджер свяжется с вами в ближайшее время для обсуждения условий.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="b2b-company" className="text-sm font-medium text-foreground">
            Название компании *
          </label>
          <Input
            id="b2b-company"
            placeholder="ООО «Компания»"
            className="h-10"
            aria-invalid={!!errors.company}
            {...register("company")}
          />
          {errors.company && (
            <p className="text-xs text-destructive" role="alert">{errors.company.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="b2b-contact" className="text-sm font-medium text-foreground">
            Контактное лицо *
          </label>
          <Input
            id="b2b-contact"
            placeholder="ФИО"
            className="h-10"
            aria-invalid={!!errors.contact}
            {...register("contact")}
          />
          {errors.contact && (
            <p className="text-xs text-destructive" role="alert">{errors.contact.message}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="b2b-phone" className="text-sm font-medium text-foreground">
            Телефон *
          </label>
          <Input
            id="b2b-phone"
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
        <div className="flex flex-col gap-1.5">
          <label htmlFor="b2b-email" className="text-sm font-medium text-foreground">
            Email *
          </label>
          <Input
            id="b2b-email"
            type="email"
            placeholder="corp@company.kz"
            className="h-10"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive" role="alert">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="b2b-comment" className="text-sm font-medium text-foreground">
          Комментарий
        </label>
        <textarea
          id="b2b-comment"
          rows={3}
          placeholder="Количество сотрудников, желаемые виды исследований, пожелания по формату..."
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          {...register("comment")}
        />
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" className="absolute opacity-0 pointer-events-none h-0 w-0" {...register("website")} aria-hidden />
      {errors.root && (
        <p className="text-sm text-destructive" role="alert">{errors.root.message}</p>
      )}
      <Button type="submit" className="h-11 bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90" disabled={isSubmitting}>
        {isSubmitting ? "Отправка…" : "Оставить заявку"}
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </form>
  )
}
