export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: "preparation" | "interpretation" | "useful"
  image?: string
  content: string
}
