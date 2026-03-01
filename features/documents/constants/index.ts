import type { DocumentItem } from "@/features/documents/types"

export const DOCUMENTS: DocumentItem[] = [
  {
    id: "license",
    title: "Лицензия на осуществление медицинской деятельности",
    description: "Действующая лицензия МЗ РК.",
    fileUrl: "/documents/license.pdf",
    category: "license",
  },
  {
    id: "cert-quality",
    title: "Сертификат системы менеджмента качества",
    description: "Соответствие требованиям ISO 15189.",
    fileUrl: "/documents/cert-quality.pdf",
    category: "certificate",
  },
  {
    id: "privacy",
    title: "Политика обработки персональных данных",
    description: "Порядок сбора, хранения и использования персональных данных.",
    slug: "privacy",
    category: "policy",
  },
  {
    id: "offer",
    title: "Договор оферты",
    description: "Публичная оферта на оказание лабораторных услуг.",
    slug: "offer",
    category: "offer",
  },
]

export function getDocumentsByCategory(category: DocumentItem["category"]) {
  return DOCUMENTS.filter((d) => d.category === category)
}

export function getDocumentBySlug(slug: string) {
  return DOCUMENTS.find((d) => d.slug === slug)
}
