import Link from "next/link"
import { Suspense } from "react"
import {
  getCheckupCategories,
  getRegularCategories,
  getCategoryTree,
  searchAnalyses,
  ANALYZES,
} from "@/features/services/constants"
import { ServicesSearch } from "@/features/services/components/ServicesSearch"
import { ServicesCatalogAnimated } from "@/features/services/components/ServicesCatalogAnimated"

export const metadata = {
  title: "Каталог анализов | T-Helper",
  description: "Каталог анализов и услуг лаборатории T-Helper. Выберите категорию или найдите нужный анализ.",
}

type Props = { searchParams: Promise<{ q?: string }> }

export default async function ServicesPage({ searchParams }: Props) {
  const { q } = await searchParams
  const searchResults = q ? searchAnalyses(q) : []

  const checkups = getCheckupCategories()
  const regular = getRegularCategories()

  return (
    <main className="min-h-screen bg-background">
      <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
        <Link href="/" className="hover:text-foreground">Главная</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Анализы</span>
      </nav>

      <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
        Каталог анализов
      </h1>

      <Suspense fallback={<div className="mb-8 h-11 rounded-md border border-border bg-muted/30" />}>
        <ServicesSearch key={q ?? ""} allAnalyzes={ANALYZES} className="mb-8" />
      </Suspense>

      <ServicesCatalogAnimated
        categoryTree={getCategoryTree()}
        checkups={checkups}
        regular={regular}
        searchQuery={q}
        searchResults={searchResults}
      />
    </main>
  )
}
