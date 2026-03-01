"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

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

type ServicesSidebarProps = {
  categoryTree: CategoryTreeItem[]
}

export function ServicesSidebar({ categoryTree }: ServicesSidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="sticky top-6 rounded-xl border border-border bg-card p-4">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <LayoutGrid className="size-4" aria-hidden />
          Категории
        </h2>
        <ul className="flex flex-col gap-0.5">
          {categoryTree.map((cat) => {
            const hasSub = cat.subcategories && cat.subcategories.length > 0
            const catHref = `/services/${cat.slug}`
            const catActive = pathname === catHref

            return (
              <li key={cat.slug} className="flex flex-col gap-0.5">
                <Link
                  href={catHref}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted hover:text-foreground",
                    catActive ? "bg-muted font-medium text-foreground" : "text-muted-foreground"
                  )}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs">({cat.analysisCount})</span>
                </Link>
                {hasSub && (
                  <ul className="ml-3 flex flex-col gap-0.5 border-l border-border pl-2">
                    {cat.subcategories!.map((sub) => {
                      const subHref = `/services/${cat.slug}/${sub.slug}`
                      const subActive = pathname === subHref

                      return (
                        <li key={sub.slug} className="flex flex-col gap-0.5">
                          <Link
                            href={subHref}
                            className={cn(
                              "rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted hover:text-foreground",
                              subActive ? "font-medium text-foreground" : "text-muted-foreground"
                            )}
                          >
                            {sub.name}
                            <span className="ml-1 text-xs opacity-70">({sub.count})</span>
                          </Link>
                          {sub.groups.length > 0 && (
                            <ul className="ml-2 flex flex-col gap-0.5 border-l border-border pl-2">
                              {sub.groups.map((gr) => {
                                const groupHref = `/services/${cat.slug}/${sub.slug}/${gr.key}`
                                const groupActive = pathname === groupHref

                                return (
                                  <li key={gr.key}>
                                    <Link
                                      href={groupHref}
                                      className={cn(
                                        "flex items-center gap-1 rounded-md px-2 py-1 text-xs transition-colors hover:bg-muted hover:text-foreground",
                                        groupActive ? "font-medium text-foreground" : "text-muted-foreground"
                                      )}
                                    >
                                      <ChevronRight className="size-3 shrink-0" aria-hidden />
                                      {gr.name}
                                      <span className="opacity-70">({gr.count})</span>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}
