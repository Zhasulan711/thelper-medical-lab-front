import Link from "next/link"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getAllLocations,
  get2GISRouteUrl,
} from "@/features/locations/constants"
import type { Location } from "@/features/locations/types"
import { LocationsMapLazy } from "@/features/locations/components/LocationsMapLazy"
import { LocationImage } from "@/features/locations/components/LocationImage"

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

        <section>
          <h2 className="mb-4 text-lg font-semibold text-foreground">Список филиалов</h2>
          <ul className="flex flex-col gap-6">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <LocationCard location={loc} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

function LocationCard({ location }: { location: Location }) {
  const routeUrl = get2GISRouteUrl(location.lat, location.lng)

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div className="grid gap-0 md:grid-cols-[280px_1fr]">
        <div className="relative aspect-4/3 md:aspect-auto md:h-[220px]">
          <LocationImage
            src={location.image}
            alt={location.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        </div>
        <div className="flex flex-col justify-between p-5">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              <Link href={`/locations/${location.slug}`} className="hover:text-[#00a9bf] hover:underline">
                {location.name}
              </Link>
            </h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{location.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-4 shrink-0" aria-hidden />
                <span>{location.hours}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" aria-hidden />
                <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="text-[#00a9bf] hover:underline">
                  {location.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Navigation className="mt-0.5 size-4 shrink-0" aria-hidden />
                <span>{location.howToGet}</span>
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild className="bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90">
              <a
                href={routeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Navigation className="size-4" aria-hidden />
                Построить маршрут
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href={`/locations/${location.slug}`}>Подробнее</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
