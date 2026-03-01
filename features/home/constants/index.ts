import type { FaqItem, PopularAnalysisCard, ReviewItem } from "@/features/home/types"
import { getAnalyzeBySlug } from "@/features/services/constants"

/** Slug'и анализов для блока "Популярные анализы" на главной (соответствуют ANALYZES) */
const POPULAR_ANALYSIS_SLUGS = [
  "oak",
  "oam",
  "glukoza",
  "ttg",
  "holesterin",
  "glikirovannyj-gemoglobin",
  "covid-19-igg-igm-iga",
  "psa",
] as const

function formatPrice(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

/** Популярные анализы — данные из реального прайса (ANALYZES) */
export const POPULAR_ANALYSES: PopularAnalysisCard[] = POPULAR_ANALYSIS_SLUGS.map((slug) => {
  const a = getAnalyzeBySlug(slug)!
  return {
    id: a.slug,
    code: a.code,
    title: a.name,
    price: formatPrice(a.priceFrom),
    duration: a.duration,
  }
})

/** @deprecated Используйте POPULAR_ANALYSES */
export const MOCK_ANALYSES = POPULAR_ANALYSES

export const VISIBLE_COUNT = 4
export const CARD_WIDTH = 254
export const GAP = 16
export const STEP = CARD_WIDTH + GAP

export const FAQ_ITEMS: FaqItem[] = [
  {
    title: "Срочные и плановые анализы",
    content: "Мы выполняем как срочные лабораторные исследования в течение нескольких часов, так и плановые — с выдачей результатов в стандартные сроки. Вы можете выбрать удобный для вас формат.",
  },
  {
    title: "Подготовка к анализам",
    content: "Перед сдачей анализов важно соблюдать рекомендации по подготовке: режим питания, приём лекарств, время визита. На нашем сайте и в памятках указаны правила для каждого типа исследования.",
  },
  {
    title: "Консультация врача и расшифровка",
    content: "Результаты анализов можно обсудить с терапевтом или узким специалистом. Мы помогаем с интерпретацией показателей и при необходимости направляем к врачу для назначения дальнейшего обследования.",
  },
]

export const REVIEWS: ReviewItem[] = [
  {
    name: "Алексей М.",
    location: "Алматы",
    text: "Очень удобно записаться онлайн, пришёл в удобное время — без очередей. Результаты прислали на почту в срок. Отдельное спасибо за понятные памятки по подготовке к анализам.",
  },
  {
    name: "Марина К.",
    location: "Астана",
    text: "Сдавали с ребёнком общий анализ крови. Персонал внимательный, взяли аккуратно. Цены адекватные, качество результатов устраивает. Рекомендую.",
  },
  {
    name: "Дмитрий В.",
    location: "Шымкент",
    text: "Пользуюсь лабораторией уже не первый год — и для себя, и для компании заказываем медосмотры. Всё чётко, по договору, отчёты вовремя. Удобно для корпоративных клиентов.",
  },
]

export const INTEREST_OPTIONS = [
  "Анализы",
  "Консультация врача",
  "Чек-ап / комплексное обследование",
  "Выезд на дом",
  "Корпоративным клиентам",
  "Другое",
] as const
