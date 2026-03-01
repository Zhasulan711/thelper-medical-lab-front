"use client"

import { cn } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

type AnalysesPaginationProps = {
  basePath: string
  currentPage: number
  totalItems: number
  pageSize: number
  className?: string
}

export function AnalysesPagination({
  basePath,
  currentPage,
  totalItems,
  pageSize,
  className,
}: AnalysesPaginationProps) {
  if (totalItems === 0) return null

  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const prevPage = currentPage > 1 ? currentPage - 1 : null
  const nextPage = currentPage < totalPages ? currentPage + 1 : null

  const href = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`)

  const pageNumbers = getPageNumbers(currentPage, totalPages)

  return (
    <Pagination className={cn("pt-4 pb-2", className)}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevPage !== null ? href(prevPage) : undefined} />
        </PaginationItem>

        {pageNumbers.map((p, idx) =>
          p === "..." ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink href={href(p)} isActive={p === currentPage}>
                {p}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        <PaginationItem>
          <PaginationNext href={nextPage !== null ? href(nextPage) : undefined} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  const maxVisible = 7
  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const want = new Set<number>([1, total])
  const radius = 2
  for (let i = Math.max(1, current - radius); i <= Math.min(total, current + radius); i++) {
    want.add(i)
  }
  const sorted = [...want].sort((a, b) => a - b)
  const out: (number | "...")[] = []
  let prev = 0
  for (const p of sorted) {
    if (prev && p - prev > 1) out.push("...")
    out.push(p)
    prev = p
  }
  return out
}
