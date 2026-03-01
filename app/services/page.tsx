import Link from "next/link"
import { Suspense } from "react"
import { TestTube2 } from "lucide-react"
import {
  CATEGORIES,
  getCheckupCategories,
  getRegularCategories,
} from "@/features/services/constants"
import { ServicesSearch } from "@/features/services/components/ServicesSearch"
import { ServicesCatalogAnimated } from "@/features/services/components/ServicesCatalogAnimated"

export const metadata = {
  title: "Каталог анализов | T-Helper",
  description: "Каталог анализов и услуг лаборатории T-Helper. Выберите категорию или найдите нужный анализ.",
}

export default function ServicesPage() {
  const checkups = getCheckupCategories()
  const regular = getRegularCategories()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">Главная</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Анализы</span>
        </nav>

        <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Каталог анализов
        </h1>

        <Suspense fallback={<div className="mb-8 h-11 rounded-md border border-border bg-muted/30" />}>
          <ServicesSearch className="mb-8" />
        </Suspense>

        <ServicesCatalogAnimated
          categories={CATEGORIES}
          checkups={checkups}
          regular={regular}
        />
      </div>
    </main>
  )
}
