"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { get2GISRouteUrl } from "@/features/locations/constants"
import type { Location } from "@/features/locations/types"
import { LocationImage } from "@/features/locations/components/LocationImage"
import { inViewStaggerContainer, staggerItem } from "@/lib/animations"

export function LocationsListAnimated({ locations }: { locations: Location[] }) {
  return (
    <motion.ul
      className="flex flex-col gap-6"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      {locations.map((loc) => (
        <motion.li key={loc.slug} variants={staggerItem}>
          <LocationCard location={loc} />
        </motion.li>
      ))}
    </motion.ul>
  )
}

function LocationCard({ location }: { location: Location }) {
  const routeUrl = get2GISRouteUrl(location.lat, location.lng)
  const whatsappHref = `https://wa.me/${location.phone.replace(/\D/g, "")}`

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
              <Link href={`/locations/${location.slug}`} className="hover:text-[#00a9bf] hover:underline cursor-pointer">
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
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00a9bf] hover:underline"
                >
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
