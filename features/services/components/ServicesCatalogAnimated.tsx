"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TestTube2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Category, Analyze } from "@/features/services/types"
import { inViewStaggerContainer, staggerItem } from "@/lib/animations"

type CheckupCategory = Category & { description?: string }

export type CategoryTreeItem = {
  slug: string
  name: string
  analysisCount: number
  subcategories?: {
    slug: string
    name: string
    count: number
    groups: { key: string; name: string; count: number }[]
  }[]
}

type ServicesCatalogAnimatedProps = {
  categoryTree: CategoryTreeItem[]
  checkups: CheckupCategory[]
  regular: CheckupCategory[]
  searchQuery?: string
  searchResults?: Analyze[]
}

export function ServicesCatalogAnimated({
  categoryTree: _categoryTree,
  checkups,
  regular,
  searchQuery,
  searchResults = [],
}: ServicesCatalogAnimatedProps) {
  return (
    <div className="min-w-0 flex-1">
      {searchQuery !== undefined && searchQuery !== "" && (
        <motion.section
          className="mb-10"
          initial={inViewStaggerContainer.initial}
          whileInView={inViewStaggerContainer.whileInView}
          viewport={inViewStaggerContainer.viewport}
          variants={inViewStaggerContainer.variants}
        >
          <motion.h2 variants={staggerItem} className="mb-4 text-lg font-semibold text-foreground">
            Результаты поиска
            {searchResults.length > 0 && (
              <span className="ml-2 font-normal text-muted-foreground">
                ({searchResults.length})
              </span>
            )}
          </motion.h2>
          {searchResults.length === 0 ? (
            <p className="text-sm text-muted-foreground">По запросу «{searchQuery}» ничего не найдено.</p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {searchResults.map((a) => (
                <motion.li key={a.slug} variants={staggerItem}>
                  <Link
                    href={`/analyzes/${a.slug}`}
                    className={cn(
                      "flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    )}
                  >
                    <span className="font-medium text-foreground">{a.name}</span>
                    <span className="mt-1 text-sm text-muted-foreground">{a.duration}</span>
                    <span className="mt-1 text-base font-semibold text-orange-500">
                      от {a.priceFrom.toLocaleString("ru-KZ")} ₸
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.section>
      )}

      {checkups.length > 0 && (
          <motion.section
            className="mb-10"
            initial={inViewStaggerContainer.initial}
            whileInView={inViewStaggerContainer.whileInView}
            viewport={inViewStaggerContainer.viewport}
            variants={inViewStaggerContainer.variants}
          >
            <motion.h2 variants={staggerItem} className="mb-4 text-lg font-semibold text-foreground">
              Чек-апы (комплексы анализов)
            </motion.h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {checkups.map((cat) => (
                <motion.div key={cat.slug} variants={staggerItem}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className={cn(
                      "flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                    )}
                  >
                    <div className="flex size-12 items-center justify-center rounded-lg bg-[#00a9bf]/10">
                      <TestTube2 className="size-6 text-[#00a9bf]" />
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground">{cat.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {cat.description}
                    </p>
                    <span className="mt-3 text-sm font-medium text-[#00a9bf]">
                      {cat.analysisCount} анализов →
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial={inViewStaggerContainer.initial}
          whileInView={inViewStaggerContainer.whileInView}
          viewport={inViewStaggerContainer.viewport}
          variants={inViewStaggerContainer.variants}
        >
          <motion.h2 variants={staggerItem} className="mb-4 text-lg font-semibold text-foreground">
            Категории анализов
          </motion.h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {regular.map((cat) => (
              <motion.div key={cat.slug} variants={staggerItem}>
                <Link
                  href={`/services/${cat.slug}`}
                  className={cn(
                    "flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  )}
                >
                  <div className="flex size-12 items-center justify-center rounded-lg bg-muted">
                    <TestTube2 className="size-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-3 font-semibold text-foreground">{cat.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {cat.description}
                  </p>
                  <span className="mt-3 text-sm text-muted-foreground">
                    {cat.analysisCount} анализов →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
  </div>
  )
}
