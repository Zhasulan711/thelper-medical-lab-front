"use client"

import Script from "next/script"
import { useRef, useEffect, useState } from "react"
import type { Location } from "@/features/locations/types"

declare global {
  interface Window {
    DG?: {
      then: (resolve: (api: unknown) => void, reject?: (err: unknown) => void) => Promise<unknown>
      map?: (id: string, opts: { center: [number, number]; zoom: number }) => { fitBounds: (b: unknown) => void }
      marker?: (latlng: [number, number]) => { addTo: (m: unknown) => { bindPopup: (html: string) => unknown } }
      LatLngBounds?: new (points: [number, number][]) => unknown
    }
  }
}

type LocationsMapProps = {
  locations: Location[]
  singleCenter?: [number, number]
  mapId?: string
}

export function LocationsMap({ locations, singleCenter, mapId = "locations-map-container" }: LocationsMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (!scriptLoaded || !window.DG || !containerRef.current || locations.length === 0) return

    let timeoutId: number | null = null
    const loader = window.DG
    const initMap = (DG: Window["DG"]) => {
      if (!DG?.map || !DG?.marker || !containerRef.current) return
      const center: [number, number] = singleCenter ?? [locations[0].lat, locations[0].lng]
      const map = DG.map!(mapId, { center, zoom: 14 })

      locations.forEach((loc) => {
        DG.marker!([loc.lat, loc.lng])
          .addTo(map)
          .bindPopup(
            `<div style="min-width:180px;padding:4px 0;"><strong>${escapeHtml(loc.name)}</strong><br/>${escapeHtml(loc.address)}<br/><a href="/locations/${loc.slug}" style="color:#00a9bf;">Подробнее →</a></div>`
          )
      })

          if (!singleCenter && locations.length > 1 && DG.LatLngBounds) {
          try {
            const bounds = new DG.LatLngBounds(locations.map((l) => [l.lat, l.lng] as [number, number]))
            map.fitBounds(bounds)
          } catch {}
      }
    }

    loader.then(
      (api) => {
        let DG = (api && typeof (api as { map?: unknown }).map === "function" ? api : window.DG) as Window["DG"]
        if (!DG?.map && window.DG) DG = window.DG
        if (DG?.map) {
          initMap(DG)
          return
        }
        timeoutId = window.setTimeout(() => {
          const late = window.DG
          if (late?.map) initMap(late)
          else setError("Карта 2ГИС недоступна")
        }, 300)
      },
      () => setError("Не удалось загрузить карту")
    )

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [scriptLoaded, locations, singleCenter, mapId])

  if (locations.length === 0) return null

  return (
    <>
      <Script
        src="https://maps.api.2gis.ru/2.0/loader.js?pkg=full"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div className="relative">
        <div
          id={mapId}
          ref={containerRef}
          className="h-[320px] w-full rounded-xl border border-border bg-muted/30"
          aria-label="Карта филиалов 2ГИС"
        />
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl bg-muted/80 text-sm text-muted-foreground">
            <span>{error}</span>
            <a
              href="https://2gis.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00a9bf] hover:underline"
            >
              Открыть 2ГИС →
            </a>
          </div>
        )}
      </div>
    </>
  )
}

function escapeHtml(s: string): string {
  if (typeof document === "undefined") return s
  const el = document.createElement("div")
  el.textContent = s
  return el.innerHTML
}
