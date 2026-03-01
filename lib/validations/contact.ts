import { z } from "zod"

const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/

export const contactFormSchema = z.object({
  name: z.string().min(2, "Введите ФИО (минимум 2 символа)").max(200),
  phone: z.string().regex(phoneRegex, "Введите телефон в формате +7 (777) 000-00-00"),
  email: z.string().email("Введите корректный email"),
  message: z.string().min(10, "Сообщение минимум 10 символов").max(2000),
  website: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
