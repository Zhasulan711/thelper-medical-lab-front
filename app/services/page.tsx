import Link from "next/link"
import { Suspense } from "react"
import { TestTube2, LayoutGrid } from "lucide-react"
import {
  CATEGORIES,
  getCheckupCategories,
  getRegularCategories,
} from "@/features/services/constants"
import { ServicesSearch } from "@/features/services/components/ServicesSearch"
import { cn } from "@/lib/utils"

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

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <aside className="w-full shrink-0 lg:w-64">
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <LayoutGrid className="size-4" />
                Категории
              </h2>
              <ul className="flex flex-col gap-1">
                {CATEGORIES.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/services/${cat.slug}`}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {cat.name}
                      <span className="ml-1 text-xs">({cat.analysisCount})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            {checkups.length > 0 && (
              <section className="mb-10">
                <h2 className="mb-4 text-lg font-semibold text-foreground">
                  Чек-апы (комплексы анализов)
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {checkups.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/services/${cat.slug}`}
                      className={cn(
                        "flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                      )}
                    >
                      <div className="flex size-12 items-center justify-center rounded-lg bg-[#00a9bf]/10">
                        <TestTube2 className="size-6 text-[#00a9bf]" />
                      </div>
                      <h3 className="mt-3 font-semibold text-foreground">{cat.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {cat.description}
                      </p>
                      <span className="mt-3 text-sm font-medium text-[#00a9bf]">
                        {cat.analysisCount} анализов →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Категории анализов
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {regular.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/services/${cat.slug}`}
                    className={cn(
                      "flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                    )}
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                      <TestTube2 className="size-6 text-muted-foreground" />
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground">{cat.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="mt-3 text-sm text-muted-foreground">
                      {cat.analysisCount} анализов →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
