import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar } from "lucide-react"
import { getPromotionBySlug } from "@/features/promotions/constants"

function formatDateRange(dateFrom?: string, dateTo?: string): string | null {
  if (!dateFrom) return null
  const d = new Date(dateFrom + "T00:00:00")
  const from = d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
  if (!dateTo) return `с ${from}`
  const d2 = new Date(dateTo + "T00:00:00")
  const to = d2.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
  return `${from} — ${to}`
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const promo = getPromotionBySlug(slug)
  if (!promo) return { title: "Акция | T-Helper" }
  return {
    title: `${promo.title} | Акции | T-Helper`,
    description: promo.excerpt,
  }
}

export default async function PromotionDetailPage({ params }: Props) {
  const { slug } = await params
  const promo = getPromotionBySlug(slug)
  if (!promo) notFound()

  const dateRange = formatDateRange(promo.dateFrom, promo.dateTo)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/promotions" className="hover:text-foreground">
            Акции
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground line-clamp-1">{promo.title}</span>
        </nav>

        <article>
          <h1 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            {promo.title}
          </h1>

          {dateRange && (
            <p className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="size-4" aria-hidden />
              {dateRange}
            </p>
          )}

          {promo.image && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={promo.image}
                alt={promo.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-muted-foreground">
              {promo.content}
            </pre>
          </div>
        </article>

        <p className="mt-10">
          <Link href="/promotions" className="text-[#00a9bf] hover:underline">
            ← Все акции
          </Link>
        </p>
      </div>
    </main>
  )
}
