import { z } from "zod"

const phoneRegex = /^\+7\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/

export const businessLeadFormSchema = z.object({
  company: z.string().min(2, "Введите название компании").max(200),
  contact: z.string().min(2, "Введите контактное лицо").max(200),
  phone: z.string().regex(phoneRegex, "Введите телефон в формате +7 (777) 000-00-00"),
  email: z.string().email("Введите корректный email"),
  comment: z.string().max(2000).optional(),
  website: z.string().max(0).optional(),
})

export type BusinessLeadFormValues = z.infer<typeof businessLeadFormSchema>
