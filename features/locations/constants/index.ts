import type { Location } from "@/features/locations/types"
import clinicImage from "@/assets/images/clinic.png"

export function get2GISRouteUrl(lat: number, lng: number): string {
  return `https://2gis.ru/directions/points/${lng}%2C${lat}`
}

export function get2GISPointUrl(lat: number, lng: number): string {
  return `https://2gis.ru/geo/${lat}%2C${lng}`
}

export function get2GISStaticMapUrl(lat: number, lng: number, width = 600, height = 400): string {
  return `https://static.maps.2gis.com/1.0?s=${width}x${height}&c=${lat},${lng}&z=16`
}

export const LOCATIONS: Location[] = [
  {
    slug: "amanzhol-28",
    name: "T-Helper",
    address: "г. Алматы, ул. Аманжол 28",
    hours: "Пн–Пт: 8:00–18:00, Сб: 9:00–14:00, Вс: выходной",
    phone: "+7 (777) 276-40-40",
    howToGet: "Ориентир: ул. Аманжол, 28. Уточните удобный маршрут по телефону или в WhatsApp.",
    image: clinicImage.src,
    lat: 43.209465,
    lng: 76.847604,
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getAllLocations(): Location[] {
  return LOCATIONS
}
