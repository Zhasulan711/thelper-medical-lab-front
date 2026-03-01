"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact"
import { trackFormSubmit } from "@/lib/analytics"

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", phone: "", email: "", message: "", website: "" },
  })

  const onSubmit = async (data: ContactFormValues) => {
    if (data.website) {
      return // honeypot
    }
    try {
      // TODO: POST /api/leads или отправка в CRM
      await new Promise((r) => setTimeout(r, 500))
      setSent(true)
      trackFormSubmit("contact")
    } catch {
      setError("root", { message: "Ошибка отправки. Попробуйте позже." })
    }
  }

  if (sent) {
    return (
      <p className="rounded-xl border border-border bg-muted/30 p-6 text-center text-muted-foreground">
        Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
            ФИО *
          </label>
          <Input
            id="contact-name"
            placeholder="Иванов Иван Иванович"
            className="h-10"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive" role="alert">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-sm font-medium text-foreground">
            Телефон *
          </label>
          <Input
            id="contact-phone"
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
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          id="contact-email"
          type="email"
          placeholder="email@example.com"
          className="h-10"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive" role="alert">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
          Сообщение *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Текст сообщения..."
          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive" role="alert">{errors.message.message}</p>
        )}
      </div>
      <input type="text" tabIndex={-1} autoComplete="off" className="absolute opacity-0 pointer-events-none h-0 w-0" {...register("website")} aria-hidden />
      {errors.root && (
        <p className="text-sm text-destructive" role="alert">{errors.root.message}</p>
      )}
      <Button type="submit" className="h-11 bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90" disabled={isSubmitting}>
        {isSubmitting ? "Отправка…" : "Отправить"}
        <ArrowRight className="ml-2 size-4" />
      </Button>
    </form>
  )
}
