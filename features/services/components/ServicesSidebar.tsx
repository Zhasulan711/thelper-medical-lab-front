"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, ChevronRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const LG_BREAKPOINT = 1024

function useIsLg() {
  const [isLg, setIsLg] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`)
    const update = () => setIsLg(mql.matches)
    update()
    mql.addEventListener("change", update)
    return () => mql.removeEventListener("change", update)
  }, [])
  return isLg
}

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

function CategoryTree({
  categoryTree,
  pathname,
  onLinkClick,
  className,
}: {
  categoryTree: CategoryTreeItem[]
  pathname: string
  onLinkClick?: () => void
  className?: string
}) {
  return (
    <ul className={cn("flex flex-col gap-0.5", className)}>
      {categoryTree.map((cat) => {
        const hasSub = cat.subcategories && cat.subcategories.length > 0
        const catHref = `/services/${cat.slug}`
        const catActive = pathname === catHref

        return (
          <li key={cat.slug} className="flex flex-col gap-0.5">
            <Link
              href={catHref}
              onClick={onLinkClick}
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
                        onClick={onLinkClick}
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
                                  onClick={onLinkClick}
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
  )
}

export function ServicesSidebar({ categoryTree }: ServicesSidebarProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isLg = useIsLg()

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {!isLg && (
        <div>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
            aria-label="Открыть категории"
          >
            <Menu className="size-5 shrink-0" aria-hidden />
            Категории
          </button>
        </div>
      )}

      {mobileOpen && !isLg && (
        <div
          className="fixed inset-0 z-50"
          aria-modal
          role="dialog"
          aria-label="Категории анализов"
        >
          <button
            type="button"
            onClick={closeMobile}
            className="absolute inset-0 bg-black/50"
            aria-label="Закрыть"
          />
          <div className="absolute left-0 top-0 h-full w-full max-w-sm overflow-y-auto border-r border-border bg-card shadow-xl">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card p-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <LayoutGrid className="size-4" aria-hidden />
                Категории
              </h2>
              <button
                type="button"
                onClick={closeMobile}
                className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Закрыть"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>
            <div className="p-4">
              <CategoryTree
                categoryTree={categoryTree}
                pathname={pathname}
                onLinkClick={closeMobile}
              />
            </div>
          </div>
        </div>
      )}

      {isLg && (
        <aside className="w-full shrink-0 lg:w-72">
          <div className="sticky top-6 rounded-xl border border-border bg-card p-4">
            <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <LayoutGrid className="size-4" aria-hidden />
              Категории
            </h2>
            <CategoryTree categoryTree={categoryTree} pathname={pathname} />
          </div>
        </aside>
      )}
    </>
  )
}
