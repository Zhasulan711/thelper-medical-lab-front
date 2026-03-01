import Link from "next/link"
import { ANALYZES, CATEGORIES } from "@/features/services/constants"
import { PricesCatalog } from "@/features/prices/components/PricesCatalog"

export const metadata = {
  title: "Цены на анализы | T-Helper",
  description:
    "Актуальный прайс-лист лаборатории T-Helper. Поиск и фильтр по категориям. Скачать прайс в PDF.",
}

type Props = { searchParams: Promise<{ page?: string }> }

export default async function PricesPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams
  const currentPage = Math.max(1, parseInt(String(pageParam ?? "1"), 10) || 1)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Цены</span>
        </nav>

        <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          Цены на анализы
        </h1>

        <p className="mb-8 max-w-2xl text-muted-foreground">
          Ориентировочные цены на лабораторные исследования. Точную стоимость и сроки уточняйте при записи.
        </p>

        <PricesCatalog analyzes={ANALYZES} categories={CATEGORIES} currentPage={currentPage} />
      </div>
    </main>
  )
}
