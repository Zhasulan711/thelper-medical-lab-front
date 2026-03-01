import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, BookOpen } from "lucide-react"
import { getPostBySlug, getCategoryLabel } from "@/features/blog/constants"

function formatDate(s: string): string {
  const d = new Date(s + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Статья | T-Helper" }
  return {
    title: `${post.title} | Блог | T-Helper`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-foreground">
            Блог
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground line-clamp-1">{post.title}</span>
        </nav>

        <article>
          <span className="text-xs font-medium uppercase tracking-wide text-[#00a9bf]">
            {getCategoryLabel(post.category)}
          </span>
          <h1 className="mt-2 mb-4 text-2xl font-bold text-foreground md:text-3xl">
            {post.title}
          </h1>
          <p className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4" aria-hidden />
            {formatDate(post.date)}
          </p>

          {post.image && (
            <div className="relative mb-8 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="whitespace-pre-wrap font-sans text-muted-foreground">
              {post.content}
            </div>
          </div>
        </article>

        <p className="mt-10">
          <Link href="/blog" className="text-[#00a9bf] hover:underline">
            ← Все статьи
          </Link>
        </p>
      </div>
    </main>
  )
}
