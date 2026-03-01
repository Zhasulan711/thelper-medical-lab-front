import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Droplet, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCategoryBySlug,
  getAnalyzesByCategory,
} from "@/features/services/constants"
import { CategoryFaq } from "@/features/services/components/CategoryFaq"

const PREPARATION_BY_SLUG: Record<string, string> = {
  biokhimija: "Кровь сдаётся натощак (8–14 часов голода). За сутки исключить алкоголь, тяжёлую пищу. Разрешена вода без газа.",
  gormony: "Уточняйте для каждого гормона: некоторые сдаются в определённую фазу цикла или время суток. Часто — натощак.",
  gematologija: "Общий анализ крови — натощак или через 3–4 часа после лёгкого приёма пищи. Исключить алкоголь за 24 часа.",
  immunologija: "Обычно натощак. Ограничения по приёму лекарств уточняйте у врача.",
  allergologija: "Антигистаминные препараты отменяют по согласованию с врачом за несколько дней до исследования.",
  infekcii: "Зависит от типа исследования (кровь, мазок, моча). Часто — натощак для анализа крови.",
  onkomarkery: "Как правило, натощак. Избегать физических нагрузок накануне.",
  "check-up": "Комплексная подготовка: натощак 8–14 часов, исключить алкоголь и тяжёлую пищу за 24 часа. Утро — предпочтительное время сдачи.",
}

type Props = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) return { title: "Категория | T-Helper" }
  return {
    title: `${category.name} | T-Helper`,
    description: category.description,
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = getCategoryBySlug(slug)
  if (!category) notFound()

  const analyzes = getAnalyzesByCategory(slug)
  const preparation = PREPARATION_BY_SLUG[slug]

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-foreground">Анализы</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{category.name}</span>
        </nav>

        <h1 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
          {category.name}
        </h1>

        <p className="mb-8 max-w-3xl text-muted-foreground">
          {category.description}
        </p>

        {preparation && (
          <section className="mb-10 rounded-xl border border-border bg-muted/30 p-5">
            <h2 className="mb-2 text-lg font-semibold text-foreground">
              Подготовка к сдаче
            </h2>
            <p className="text-sm text-muted-foreground">{preparation}</p>
          </section>
        )}

        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Анализы в категории ({analyzes.length})
          </h2>
          <ul className="flex flex-col gap-4">
            {analyzes.map((item) => (
              <li
                key={item.slug}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  {item.code && (
                    <span className="text-xs text-muted-foreground">{item.code}</span>
                  )}
                  <h3 className="font-semibold text-foreground">{item.name}</h3>
                  {item.shortDescription && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.shortDescription}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplet className="size-3.5" />
                      {item.material}
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-4 sm:flex-row">
                  <span className="text-lg font-bold text-foreground">
                    от {item.priceFrom} ₸
                  </span>
                  <Button asChild variant="outline" size="sm" className="gap-1">
                    <Link href={`/analyzes/${item.slug}`}>
                      Подробнее
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          {analyzes.length === 0 && (
            <p className="rounded-xl border border-border bg-muted/30 p-6 text-center text-muted-foreground">
              В этой категории пока нет анализов.
            </p>
          )}
        </section>

        <CategoryFaq categorySlug={slug} />
      </div>
    </main>
  )
}
