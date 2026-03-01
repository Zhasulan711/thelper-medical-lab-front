import type { StaticImageData } from "next/image"

export type ImageSrc = string | StaticImageData | { src: string; width?: number; height?: number }

export type FaqItem = {
  title: string
  content: string
}

export type ReviewItem = {
  name: string
  location: string
  text: string
}

export type PopularAnalysisCard = {
  id: string
  title: string
  price: string
  duration: string
  /** Код для отображения (например "№ 10"), если нет — показывается id */
  code?: string
}
