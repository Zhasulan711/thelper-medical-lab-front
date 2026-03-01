"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { TestTube2, LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Category } from "@/features/services/types"
import { inViewFadeUp, inViewStaggerContainer, staggerItem } from "@/lib/animations"

type CheckupCategory = Category & { description?: string }
type ServicesCatalogAnimatedProps = {
  categories: Category[]
  checkups: CheckupCategory[]
  regular: CheckupCategory[]
}

export function ServicesCatalogAnimated({
  categories,
  checkups,
  regular,
}: ServicesCatalogAnimatedProps) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
      <motion.aside
        className="w-full shrink-0 lg:w-64"
        initial={inViewFadeUp.initial}
        whileInView={inViewFadeUp.whileInView}
        viewport={inViewFadeUp.viewport}
        transition={inViewFadeUp.transition}
      >
        <div className="rounded-xl border border-border bg-card p-4">
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <LayoutGrid className="size-4" />
            Категории
          </h2>
          <ul className="flex flex-col gap-1">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="block cursor-pointer rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {cat.name}
                  <span className="ml-1 text-xs">({cat.analysisCount})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.aside>

      <div className="min-w-0 flex-1">
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
    </div>
  )
}
