import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Droplet, FileText, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  getAnalyzeBySlug,
  getCategoryBySlug,
  getAnalyzeDetail,
  getSimilarAnalyzes,
} from "@/features/services/constants"

function EmptyBlock() {
  return <span className="text-muted-foreground">—</span>
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const analyze = getAnalyzeBySlug(slug)
  if (!analyze) return { title: "Анализ | T-Helper" }
  const detail = getAnalyzeDetail(slug)
  const description =
    detail?.description ??
    detail?.whenPrescribed ??
    analyze.shortDescription ??
    `Лабораторный анализ: ${analyze.name}. Цена от ${analyze.priceFrom} ₸. Срок выполнения: ${analyze.duration}.`
  const title = `${analyze.name} | Анализы | T-Helper`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  }
}

export default async function AnalyzePage({ params }: Props) {
  const { slug } = await params
  const analyze = getAnalyzeBySlug(slug)
  if (!analyze) notFound()

  const category = getCategoryBySlug(analyze.categorySlug)
  const detail = getAnalyzeDetail(slug)
  const similar = getSimilarAnalyzes(slug, analyze.categorySlug, 4)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTest",
    name: analyze.name,
    description:
      detail?.description ??
      detail?.whenPrescribed ??
      analyze.shortDescription ??
      `Лабораторный анализ: ${analyze.name}.`,
    code: analyze.code?.replace(/^№\s*/, ""),
    usedToDiagnose: detail?.whenPrescribed,
    preparation: detail?.preparation?.join(" "),
    howPerformed: detail?.howToTake ?? `Забор биоматериала: ${analyze.material}.`,
  }

  const hasDescription =
    detail?.description ?? detail?.whenPrescribed ?? analyze.shortDescription
  const hasPreparation = detail?.preparation?.length
  const hasWhatAffects = detail?.whatAffectsResult
  const hasContraindications = detail?.contraindications
  const hasHowToTake = detail?.howToTake
  const hasRecommendations = detail?.recommendationsAfter

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-foreground">
            Анализы
          </Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <Link href={`/services/${analyze.categorySlug}`} className="hover:text-foreground">
                {category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-foreground line-clamp-1">{analyze.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {analyze.name}
            </h1>
            {analyze.code && (
              <p className="mt-1 text-sm text-muted-foreground">{analyze.code}</p>
            )}

            {(hasDescription || detail?.whenPrescribed) && (
              <section className="mt-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Описание и показания к назначению
                </h2>
                <div className="mt-2 space-y-2 text-muted-foreground">
                  {detail?.description && <p>{detail.description}</p>}
                  {detail?.whenPrescribed && (
                    <p>
                      <strong className="text-foreground">Когда назначают:</strong>{" "}
                      {detail.whenPrescribed}
                    </p>
                  )}
                  {!detail?.whenPrescribed && analyze.shortDescription && (
                    <p>{analyze.shortDescription}</p>
                  )}
                </div>
              </section>
            )}

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Подготовка к сдаче
              </h2>
              {hasPreparation ? (
                <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
                  {detail!.preparation.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-muted-foreground">
                  Уточняйте требования к подготовке в лаборатории при записи.
                </p>
              )}
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Что влияет на результат
              </h2>
              <p className="mt-2 text-muted-foreground">
                {hasWhatAffects ? detail!.whatAffectsResult : <EmptyBlock />}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Противопоказания и ограничения
              </h2>
              <p className="mt-2 text-muted-foreground">
                {hasContraindications ? detail!.contraindications : <EmptyBlock />}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Как проходит сдача
              </h2>
              <p className="mt-2 text-muted-foreground">
                {hasHowToTake ? (
                  detail!.howToTake
                ) : (
                  <>Забор биоматериала производится в процедурном кабинете. {analyze.material}.</>
                )}
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-lg font-semibold text-foreground">
                Рекомендации после сдачи
              </h2>
              <p className="mt-2 text-muted-foreground">
                {hasRecommendations ? detail!.recommendationsAfter : <EmptyBlock />}
              </p>
            </section>

            {detail?.synonyms && (
              <section className="mt-8">
                <h2 className="text-lg font-semibold text-foreground">
                  Синонимы
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{detail.synonyms}</p>
              </section>
            )}
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <Card className="border-border bg-card p-5 shadow-sm">
              {analyze.code && (
                <p className="text-xs text-muted-foreground">Артикул: {analyze.code.replace(/^№\s*/, "")}</p>
              )}
              <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 shrink-0" aria-hidden />
                <span className="text-sm">Срок исполнения: {analyze.duration}</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-foreground">
                от {analyze.priceFrom} ₸
              </p>
              <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <Droplet className="size-4 shrink-0 mt-0.5" aria-hidden />
                <span>Биоматериал: {analyze.material}</span>
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <Button
                  className="w-full bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90"
                  asChild
                >
                  <Link href="/#cta">
                    <FileText className="mr-2 size-4" aria-hidden />
                    Записаться
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/#cta">
                    <HelpCircle className="mr-2 size-4" aria-hidden />
                    Задать вопрос
                  </Link>
                </Button>
              </div>
            </Card>
          </aside>
        </div>

        {similar.length > 0 && (
          <section className="mt-12 border-t border-border pt-10">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              Похожие анализы
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {similar.map((item) => (
                <li key={item.slug}>
                  <Link href={`/analyzes/${item.slug}`} className="block h-full cursor-pointer">
                    <Card className="h-full transition-colors hover:border-[#00a9bf]/50 hover:bg-muted/30">
                      <CardContent className="p-4">
                        {item.code && (
                          <span className="text-xs text-muted-foreground">{item.code}</span>
                        )}
                        <p className="mt-1 line-clamp-3 text-sm font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {item.duration}
                        </p>
                        <p className="mt-1 text-lg font-bold text-[#00a9bf]">
                          от {item.priceFrom} ₸
                        </p>
                        <span className="mt-2 inline-block text-sm text-[#00a9bf] hover:underline">
                          Подробнее →
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <p className="mt-8">
          <Link
            href={`/services/${analyze.categorySlug}`}
            className="text-[#00a9bf] hover:underline"
          >
            ← Назад к категории
          </Link>
        </p>
      </div>
    </main>
  )
}
