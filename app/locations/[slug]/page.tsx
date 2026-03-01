import Link from "next/link"
import { notFound } from "next/navigation"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  getLocationBySlug,
  get2GISRouteUrl,
  get2GISPointUrl,
} from "@/features/locations/constants"
import { LocationsMapLazy } from "@/features/locations/components/LocationsMapLazy"
import { LocationImage } from "@/features/locations/components/LocationImage"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) return { title: "Филиал | T-Helper" }
  return {
    title: `${location.name} — адрес, часы работы | T-Helper`,
    description: `${location.address}. Часы: ${location.hours}. Телефон: ${location.phone}. Построить маршрут в 2ГИС.`,
  }
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  if (!location) notFound()

  const routeUrl = get2GISRouteUrl(location.lat, location.lng)
  const pointUrl = get2GISPointUrl(location.lat, location.lng)

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/locations" className="hover:text-foreground">
            Филиалы
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{location.name}</span>
        </nav>

        <h1 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
          {location.name}
        </h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
              <LocationImage
                src={location.image}
                alt={location.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">Контактная информация</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-[#00a9bf]" aria-hidden />
                  <span>{location.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-[#00a9bf]" aria-hidden />
                  <span>{location.hours}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-[#00a9bf]" aria-hidden />
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="text-[#00a9bf] hover:underline">
                    {location.phone}
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-lg font-semibold text-foreground">Как добраться</h2>
              <p className="text-muted-foreground">{location.howToGet}</p>
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-border overflow-hidden">
              <LocationsMapLazy
                locations={[location]}
                singleCenter={[location.lat, location.lng]}
                mapId="location-detail-map"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90">
                <a
                  href={routeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Navigation className="size-4" aria-hidden />
                  Построить маршрут
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full">
                <a
                  href={pointUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Открыть в 2ГИС
                </a>
              </Button>
            </div>
          </aside>
        </div>

        <p className="mt-8">
          <Link href="/locations" className="text-[#00a9bf] hover:underline">
            ← Все филиалы
          </Link>
        </p>
      </div>
    </main>
  )
}
