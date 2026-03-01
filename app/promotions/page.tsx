import Link from "next/link"
import { getAllPromotions } from "@/features/promotions/constants"
import { PromotionsGridAnimated } from "@/features/promotions/components/PromotionsGridAnimated"

export const metadata = {
  title: "Акции | T-Helper",
  description:
    "Текущие акции и специальные предложения лаборатории T-Helper. Скидки на чек-апы, выезд на дом, программа рекомендаций.",
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

        <PromotionsGridAnimated promotions={promotions} />
      </div>
    </main>
  )
}
