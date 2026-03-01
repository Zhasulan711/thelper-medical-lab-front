"use client"

import dynamic from "next/dynamic"
import type { Location } from "@/features/locations/types"
import { Skeleton } from "@/components/ui/skeleton"

const LocationsMapInner = dynamic(
  () => import("./LocationsMap").then((mod) => mod.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <Skeleton className="h-[320px] w-full rounded-xl" aria-label="Загрузка карты" />
    ),
  }
)

type LocationsMapLazyProps = {
  locations: Location[]
  singleCenter?: [number, number]
  mapId?: string
}

export function LocationsMapLazy({ locations, singleCenter, mapId }: LocationsMapLazyProps) {
  return <LocationsMapInner locations={locations} singleCenter={singleCenter} mapId={mapId} />
}
