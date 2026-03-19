"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import type { BlogPost } from "@/features/blog/types"
import { getCategoryLabel } from "@/features/blog/constants"
import { inViewStaggerContainer, staggerItem } from "@/lib/animations"

function formatDate(s: string): string {
  const d = new Date(s + "T00:00:00")
  return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })
}

export function BlogGridAnimated({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground">Статьи скоро появятся.</p>
  }

  return (
    <motion.ul
      className="grid gap-6 sm:grid-cols-2"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      {posts.map((post) => (
        <motion.li key={post.slug} variants={staggerItem}>
          <Link href={`/blog/${post.slug}`} className="group block h-full cursor-pointer">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
              {post.image ? (
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    quality={60}
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
        </motion.li>
      ))}
    </motion.ul>
  )
}
