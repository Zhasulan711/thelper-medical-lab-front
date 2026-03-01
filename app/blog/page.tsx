import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import { getAllPosts, getCategoryLabel } from "@/features/blog/constants"

export const metadata = {
  title: "Блог | T-Helper",
  description:
    "Статьи о подготовке к анализам, расшифровке результатов и полезные материалы о лабораторной диагностике.",
}

function formatDate(s: string): string {
  const d = new Date(s + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
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

        {posts.length === 0 ? (
          <p className="text-muted-foreground">Статьи скоро появятся.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                    {post.image ? (
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-video min-h-[140px] items-center justify-center bg-[#00a9bf]/10 text-[#00a9bf]">
                        <BookOpen className="size-12" aria-hidden />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <span className="text-xs font-medium uppercase tracking-wide text-[#00a9bf]">
                        {getCategoryLabel(post.category)}
                      </span>
                      <h2 className="mt-2 font-semibold text-foreground group-hover:text-[#00a9bf]">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="size-3.5" aria-hidden />
                        {formatDate(post.date)}
                      </p>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#00a9bf] group-hover:underline">
                        Читать
                        <ArrowRight className="size-4" aria-hidden />
                      </span>
                    </div>
                  </article>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  )
}
