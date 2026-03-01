"use client"

import { useMemo, useState, useCallback } from "react"
import Link from "next/link"
import { Search, Download, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { jsPDF } from "jspdf"
import autoTable from "jspdf-autotable"
import type { Analyze, Category } from "@/features/services/types"

type PricesCatalogProps = {
  analyzes: Analyze[]
  categories: Category[]
}

export function PricesCatalog({ analyzes, categories }: PricesCatalogProps) {
  const [query, setQuery] = useState("")
  const [categorySlug, setCategorySlug] = useState<string>("")

  const categoryMap = useMemo(
    () => Object.fromEntries(categories.map((c) => [c.slug, c.name])),
    [categories]
  )

  const filtered = useMemo(() => {
    let list = analyzes
    if (categorySlug) {
      list = list.filter((a) => a.categorySlug === categorySlug)
    }
    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          (a.code?.toLowerCase().includes(q) ?? false)
      )
    }
    return list
  }, [analyzes, categorySlug, query])

  const handleDownloadPdf = useCallback(() => {
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" })
    doc.setFontSize(14)
    doc.text("Прайс-лист анализов — T-Helper", 14, 12)
    doc.setFontSize(9)
    doc.text(`Дата выгрузки: ${new Date().toLocaleDateString("ru-RU")}`, 14, 18)

    const tableData = filtered.map((a) => [
      a.code ?? "—",
      a.name,
      categoryMap[a.categorySlug] ?? a.categorySlug,
      a.material,
      a.duration,
      `от ${a.priceFrom} ₸`,
    ])
    autoTable(doc, {
      head: [["Код", "Название", "Категория", "Биоматериал", "Срок", "Цена"]],
      body: tableData,
      startY: 24,
      styles: { fontSize: 7 },
      headStyles: { fillColor: [0, 169, 191] },
      margin: { left: 14, right: 14 },
    })
    doc.save("pricelist-t-helper.pdf")
  }, [filtered, categoryMap])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="relative flex-1 sm:min-w-[220px]">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              placeholder="Поиск по названию или коду..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-10 pl-9"
              aria-label="Поиск по прайсу"
            />
          </div>
          <select
            value={categorySlug}
            onChange={(e) => setCategorySlug(e.target.value)}
            className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Фильтр по категории"
          >
            <option value="">Все категории</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownloadPdf}
          className="shrink-0"
        >
          <Download className="mr-2 size-4" aria-hidden />
          Скачать прайс (PDF)
        </Button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 font-semibold text-foreground">Код</th>
              <th className="px-4 py-3 font-semibold text-foreground">Название</th>
              <th className="px-4 py-3 font-semibold text-foreground">Категория</th>
              <th className="px-4 py-3 font-semibold text-foreground">Биоматериал</th>
              <th className="px-4 py-3 font-semibold text-foreground">Срок</th>
              <th className="px-4 py-3 font-semibold text-foreground">Цена</th>
              <th className="w-24 px-4 py-3" aria-hidden />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                  По вашему запросу ничего не найдено. Измените поиск или фильтр.
                </td>
              </tr>
            ) : (
              filtered.map((a) => (
                <tr
                  key={a.slug}
                  className="border-b border-border/80 transition-colors hover:bg-muted/30"
                >
                  <td className="px-4 py-3 text-muted-foreground">{a.code ?? "—"}</td>
                  <td className="px-4 py-3 font-medium text-foreground">{a.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {categoryMap[a.categorySlug] ?? a.categorySlug}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{a.material}</td>
                  <td className="px-4 py-3 text-muted-foreground">{a.duration}</td>
                  <td className="px-4 py-3 font-semibold text-[#00a9bf]">
                    от {a.priceFrom} ₸
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/analyzes/${a.slug}`}
                      className="inline-flex items-center gap-1 text-[#00a9bf] hover:underline"
                    >
                      Подробнее
                      <ExternalLink className="size-3.5" aria-hidden />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground">
        Показано позиций: {filtered.length}
        {filtered.length !== analyzes.length &&
          ` из ${analyzes.length}. Цены ориентировочные, актуальность уточняйте в лаборатории.`}
      </p>
    </div>
  )
}
