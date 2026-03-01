"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQ_BY_CATEGORY: Record<string, { q: string; a: string }[]> = {
  biokhimija: [
    { q: "Нужно ли сдавать биохимию натощак?", a: "Да. Рекомендуется голодание 8–14 часов, можно пить воду без газа." },
    { q: "Когда готовы результаты?", a: "Обычно в течение 1 рабочего дня, часть исследований — до 3–5 дней." },
  ],
  gormony: [
    { q: "В какой день цикла сдавать половые гормоны?", a: "Зависит от показателя. ФСГ, ЛГ, эстрадиол — чаще 2–5 день цикла. Уточняйте у врача." },
    { q: "ТТГ сдавать натощак?", a: "Да. Кровь сдаётся натощак, утром предпочтительно." },
  ],
  gematologija: [
    { q: "Общий анализ крови — натощак или нет?", a: "Можно натощак или через 3–4 часа после лёгкого приёма пищи. Жирная еда и алкоголь накануне искажают результат." },
  ],
  "check-up": [
    { q: "Как подготовиться к чек-апу?", a: "Натощак 8–14 часов, за сутки — без алкоголя и тяжёлой пищи. Сдача утром предпочтительна." },
    { q: "Сколько по времени занимает сдача?", a: "Забор крови обычно 10–15 минут. Сроки готовности результатов зависят от комплекса (1–3 дня)." },
  ],
}

const DEFAULT_FAQ = [
  { q: "Как подготовиться к сдаче?", a: "Общие правила: натощак для большинства анализов крови, за 24 часа — без алкоголя. Детали смотрите в блоке «Подготовка» выше или на странице анализа." },
  { q: "Когда будут готовы результаты?", a: "Срок указан у каждого анализа (например, 1 календарный день). Результаты можно получить по email или в личном кабинете." },
]

export function CategoryFaq({ categorySlug }: { categorySlug: string }) {
  const items = FAQ_BY_CATEGORY[categorySlug] ?? DEFAULT_FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  if (items.length === 0) return null

  return (
    <section className="rounded-xl border border-border bg-card p-5">
      <h2 className="mb-4 text-lg font-semibold text-foreground">
        Частые вопросы по категории
      </h2>
      <ul className="flex flex-col gap-2">
        {items.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <li key={i} className="rounded-lg border border-border overflow-hidden">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center justify-between gap-2 p-3 text-left text-sm font-medium text-foreground hover:bg-muted/50"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                {faq.q}
                {isOpen ? (
                  <ChevronUp className="size-4 shrink-0 text-muted-foreground" />
                ) : (
                  <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
                )}
              </button>
              {isOpen && (
                <div className="border-t border-border px-3 pb-3 pt-2">
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
