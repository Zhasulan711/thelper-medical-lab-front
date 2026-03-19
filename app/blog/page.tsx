import Link from "next/link"
import { getAllPosts } from "@/features/blog/constants"
import { BlogGridAnimated } from "@/features/blog/components/BlogGridAnimated"

export const metadata = {
  title: "Блог | T-Helper",
  description:
    "Статьи о подготовке к анализам, расшифровке результатов и полезные материалы о лабораторной диагностике.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Блог</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          Блог
        </h1>

        <p className="mb-10 text-muted-foreground">
          Подготовка к анализам, расшифровка результатов и полезные материалы о лабораторной диагностике.
        </p>

        <BlogGridAnimated posts={posts} />
      </div>
    </main>
  )
}
