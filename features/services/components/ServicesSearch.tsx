"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function ServicesSearch({ className }: { className?: string }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get("q") ?? "")

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const q = query.trim()
      if (q) {
        router.push(`/services?q=${encodeURIComponent(q)}`)
      } else {
        router.push("/services")
      }
    },
    [query, router]
  )

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Поиск по анализам..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-11 pl-10 pr-4"
        aria-label="Поиск по анализам"
      />
    </form>
  )
}
