export type Category = {
  slug: string
  name: string
  description: string
  analysisCount: number
  isCheckup?: boolean
}

export type Subcategory = {
  slug: string
  name: string
  categorySlug: string
}

export type Analyze = {
  slug: string
  name: string
  categorySlug: string
  subcategorySlug?: string
  groupKey?: string
  priceFrom: number
  duration: string
  material: string
  code?: string
  shortDescription?: string
}

export type AnalyzeDetail = {
  preparation: string[]
  whenPrescribed: string
  whatAffectsResult: string
  contraindications: string
  howToTake: string
  recommendationsAfter: string
  description?: string
  synonyms?: string
}
