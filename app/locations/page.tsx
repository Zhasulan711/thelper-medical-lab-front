import Link from "next/link"
import { getAllLocations } from "@/features/locations/constants"
import { LocationsMapLazy } from "@/features/locations/components/LocationsMapLazy"
import { LocationsListAnimated } from "@/features/locations/components/LocationsListAnimated"
import { AnimatedSection } from "@/components/ui/animated-section"

export const metadata = {
  title: "Филиалы и адреса | T-Helper",
  description:
    "Адреса филиалов лаборатории T-Helper, часы работы, телефоны. Карта 2ГИС, построить маршрут.",
}

export default function LocationsPage() {
  const locations = getAllLocations()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Филиалы</span>
        </nav>

        <h1 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
          Филиалы и адреса
        </h1>
        <p className="mb-8 text-muted-foreground">
          Выберите удобный филиал, посмотрите часы работы и постройте маршрут в 2ГИС.
        </p>

        <section className="mb-10">
          <h2 className="mb-3 text-lg font-semibold text-foreground">Карта филиалов</h2>
          <LocationsMapLazy locations={locations} />
        </section>

        <AnimatedSection className="">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Список филиалов</h2>
          <LocationsListAnimated locations={locations} />
        </AnimatedSection>
      </div>
    </main>
  )
}
