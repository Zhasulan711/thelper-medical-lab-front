import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, Droplet, ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
  getAnalyzesBySubcategory,
} from "@/features/services/constants"
import { CategoryFaq } from "@/features/services/components/CategoryFaq"
import { AnalysesPagination } from "@/features/services/components/AnalysesPagination"

const PAGE_SIZE = 4

type Props = {
  params: Promise<{ category: string; subcategory: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: Props) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const category = getCategoryBySlug(categorySlug)
  const subcategory = getSubcategoryBySlug(subcategorySlug)
  if (!category || !subcategory || subcategory.categorySlug !== categorySlug) {
    return { title: "Подкатегория | T-Helper" }
  }
  return {
    title: `${subcategory.name} | ${category.name} | T-Helper`,
    description: `Анализы: ${subcategory.name}. ${category.description}`,
  }
}

export default async function SubcategoryPage({ params, searchParams }: Props) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(String(pageParam ?? "1"), 10) || 1)

  const category = getCategoryBySlug(categorySlug)
  const subcategory = getSubcategoryBySlug(subcategorySlug)

  if (!category || !subcategory || subcategory.categorySlug !== categorySlug) {
    notFound()
  }

  const allAnalyzes = getAnalyzesBySubcategory(subcategorySlug)
  const totalItems = allAnalyzes.length
  const start = (currentPage - 1) * PAGE_SIZE
  const analyzes = allAnalyzes.slice(start, start + PAGE_SIZE)
  const basePath = `/services/${categorySlug}/${subcategorySlug}`

  return (
    <main className="min-h-screen bg-background">
      <nav className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <Link href="/services" className="hover:text-foreground">
            Анализы
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <Link href={`/services/${categorySlug}`} className="hover:text-foreground">
            {category.name}
          </Link>
          <ChevronRight className="size-4 shrink-0" aria-hidden />
          <span className="text-foreground">{subcategory.name}</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
          {subcategory.name}
        </h1>
        <p className="mb-8 text-muted-foreground">
          {totalItems} {totalItems === 1 ? "позиция" : totalItems < 5 ? "позиции" : "позиций"}
        </p>

        <section className="mb-4">
          {totalItems === 0 ? (
            <p className="rounded-xl border border-border bg-muted/30 p-6 text-center text-muted-foreground">
              В этой подкатегории пока нет анализов.
            </p>
          ) : (
            <>
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
                  <h2 className="font-semibold text-foreground">{item.name}</h2>
                  {item.shortDescription && (
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.shortDescription}
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Droplet className="size-3.5" aria-hidden />
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
                      <ArrowRight className="size-3.5" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </li>
            ))}
          </ul>

          <AnalysesPagination
            basePath={basePath}
            currentPage={currentPage}
            totalItems={totalItems}
            pageSize={PAGE_SIZE}
          />
            </>
          )}
        </section>

        <CategoryFaq categorySlug={categorySlug} />
    </main>
  )
}
