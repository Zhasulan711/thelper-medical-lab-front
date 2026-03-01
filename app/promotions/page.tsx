import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"
import { getAllPromotions } from "@/features/promotions/constants"

export const metadata = {
  title: "Акции | T-Helper",
  description:
    "Текущие акции и специальные предложения лаборатории T-Helper. Скидки на чек-апы, выезд на дом, программа рекомендаций.",
}

function formatDateRange(dateFrom?: string, dateTo?: string): string | null {
  if (!dateFrom) return null
  const from = formatDate(dateFrom)
  if (!dateTo) return `с ${from}`
  return `${from} — ${formatDate(dateTo)}`
}

function formatDate(s: string): string {
  const d = new Date(s + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

export default function PromotionsPage() {
  const promotions = getAllPromotions()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Акции</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          Акции
        </h1>

        <p className="mb-10 text-muted-foreground">
          Специальные предложения и скидки лаборатории T-Helper. Следите за обновлениями.
        </p>

        {promotions.length === 0 ? (
          <p className="text-muted-foreground">Сейчас нет активных акций. Следите за новостями на сайте.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {promotions.map((promo) => {
              const dateRange = formatDateRange(promo.dateFrom, promo.dateTo)
              return (
                <li key={promo.slug}>
                  <Link href={`/promotions/${promo.slug}`} className="group block h-full">
                    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                      {promo.image ? (
                        <div className="relative aspect-video bg-muted">
                          <Image
                            src={promo.image}
                            alt={promo.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <div className="flex aspect-video min-h-[140px] items-center justify-center bg-[#00a9bf]/10 text-[#00a9bf]">
                          <span className="text-4xl font-bold opacity-80">%</span>
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-5">
                        <h2 className="font-semibold text-foreground group-hover:text-[#00a9bf]">
                          {promo.title}
                        </h2>
                        {dateRange && (
                          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Calendar className="size-3.5" aria-hidden />
                            {dateRange}
                          </p>
                        )}
                        <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                          {promo.excerpt}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00a9bf] group-hover:underline">
                          Подробнее
                          <ArrowRight className="size-4" aria-hidden />
                        </span>
                      </div>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </main>
  )
}
