export type DocumentItem = {
  id: string
  title: string
  description?: string
  fileUrl?: string
  slug?: string
  category: "license" | "certificate" | "policy" | "offer"
}
