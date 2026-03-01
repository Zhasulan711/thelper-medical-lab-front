import type { Location } from "@/features/locations/types"

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
    slug: "tsentr",
    name: "T-Helper Центр",
    address: "г. Алматы, ул. Абая, 150",
    hours: "Пн–Пт: 7:00–20:00, Сб: 8:00–18:00, Вс: выходной",
    phone: "+7 (727) 123-45-67",
    howToGet: "Остановка «Абая — Байзакова». 5 минут пешком от метро «Алатау».",
    image: get2GISStaticMapUrl(43.238293, 76.945465),
    lat: 43.238293,
    lng: 76.945465,
  },
  {
    slug: "severnyj",
    name: "T-Helper Северный",
    address: "г. Алматы, пр. Достык, 97",
    hours: "Пн–Пт: 8:00–19:00, Сб–Вс: 9:00–15:00",
    phone: "+7 (727) 234-56-78",
    howToGet: "Остановка «Достык — Сейфуллина». Рядом с ТРЦ «Хан Шатыр».",
    image: get2GISStaticMapUrl(43.25667, 76.92861),
    lat: 43.25667,
    lng: 76.92861,
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}

export function getAllLocations(): Location[] {
  return LOCATIONS
}
