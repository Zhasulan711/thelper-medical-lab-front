"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useMemo, useRef, useState, useEffect } from "react"
import Link from "next/link"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type { Analyze } from "@/features/services/types"

const SUGGESTIONS_MAX = 8

function filterAnalyses(analyzes: Analyze[], q: string): Analyze[] {
  const normalized = q.trim().toLowerCase()
  if (!normalized) return []
  return analyzes.filter(
    (a) =>
      a.name.toLowerCase().includes(normalized) ||
      a.slug.toLowerCase().includes(normalized)
  )
}

type ServicesSearchProps = {
  className?: string
  allAnalyzes: Analyze[]
}

export function ServicesSearch({ className, allAnalyzes }: ServicesSearchProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(() => searchParams.get("q") ?? "")
  const [isOpen, setIsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)

  const suggestions = useMemo(
    () => filterAnalyses(allAnalyzes, query).slice(0, SUGGESTIONS_MAX),
    [allAnalyzes, query]
  )
  const hasQuery = query.trim().length > 0
  const showDropdown = isOpen && hasQuery
  const safeFocusedIndex =
    showDropdown && suggestions.length > 0
      ? Math.max(0, Math.min(focusedIndex, suggestions.length - 1))
      : -1

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const q = query.trim()
      if (q) {
        router.push(`/services?q=${encodeURIComponent(q)}`)
      } else {
        router.push("/services")
      }
      router.refresh()
      setIsOpen(false)
      setFocusedIndex(-1)
    },
    [query, router]
  )

  const openDropdown = useCallback(() => {
    setIsOpen(true)
    setFocusedIndex(0)
  }, [])
  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    setFocusedIndex(-1)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeDropdown()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [closeDropdown])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!showDropdown || suggestions.length === 0) {
        if (e.key === "Escape") setIsOpen(false)
        return
      }
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setFocusedIndex((i) => (i < suggestions.length - 1 ? i + 1 : 0))
        return
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setFocusedIndex((i) => (i > 0 ? i - 1 : suggestions.length - 1))
        return
      }
      if (e.key === "Enter" && safeFocusedIndex >= 0 && suggestions[safeFocusedIndex]) {
        e.preventDefault()
        router.push(`/analyzes/${suggestions[safeFocusedIndex].slug}`)
        closeDropdown()
        return
      }
      if (e.key === "Escape") {
        closeDropdown()
      }
    },
    [showDropdown, suggestions, safeFocusedIndex, router, closeDropdown]
  )

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Поиск по анализам..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            openDropdown()
          }}
          onFocus={() => hasQuery && openDropdown()}
          onKeyDown={handleKeyDown}
          className="h-11 pl-10 pr-4"
          aria-label="Поиск по анализам"
          aria-expanded={showDropdown}
          aria-autocomplete="list"
          role="combobox"
        />
      </form>

      {showDropdown && (
        <div
          className="absolute top-full left-0 right-0 z-50 mt-1 max-h-[min(20rem,60vh)] overflow-auto rounded-lg border border-border bg-popover shadow-md"
          role="listbox"
        >
          {suggestions.length === 0 ? (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              По запросу «{query.trim()}» ничего не найдено.
            </div>
          ) : (
            <ul className="py-1">
              {suggestions.map((a, i) => (
                <li key={a.slug} role="option" aria-selected={i === safeFocusedIndex}>
                  <Link
                    href={`/analyzes/${a.slug}`}
                    className={cn(
                      "flex flex-col gap-0.5 px-4 py-2.5 text-left transition-colors",
                      i === safeFocusedIndex
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-muted/70"
                    )}
                    onMouseEnter={() => setFocusedIndex(i)}
                    onClick={closeDropdown}
                  >
                    <span className="font-medium text-foreground">{a.name}</span>
                    <span className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{a.duration}</span>
                      <span>·</span>
                      <span className="font-medium text-orange-500">
                        от {a.priceFrom.toLocaleString("ru-KZ")} ₸
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {hasQuery && suggestions.length > 0 && (
            <div className="border-t border-border px-4 py-2 text-center">
              <button
                type="button"
                className="text-sm font-medium text-primary hover:underline"
                onClick={() => {
                  const q = query.trim()
                  if (q) {
                    router.push(`/services?q=${encodeURIComponent(q)}`)
                    router.refresh()
                  }
                  closeDropdown()
                }}
              >
                Показать все результаты по «{query.trim()}»
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
