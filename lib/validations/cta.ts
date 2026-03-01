import { z } from "zod"

const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/

export const ctaFormSchema = z.object({
  name: z.string().min(2, "Введите ФИО").max(200),
  interest: z.string().min(1, "Выберите интерес"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().regex(phoneRegex, "Введите телефон в формате +7 (777) 000-00-00"),
  website: z.string().max(0).optional(),
})

export type CtaFormValues = z.infer<typeof ctaFormSchema>
