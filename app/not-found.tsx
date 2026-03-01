import Link from "next/link"
import { Home, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-background px-4 py-16 md:py-24">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        <p className="text-8xl font-bold text-[#00a9bf]/20 md:text-9xl" aria-hidden>
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
          Страница не найдена
        </h1>
        <p className="mt-3 text-muted-foreground">
          Запрашиваемая страница не существует или была перемещена. Проверьте адрес или перейдите на главную.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90">
            <Link href="/" className="inline-flex items-center gap-2">
              <Home className="size-4" aria-hidden />
              На главную
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services" className="inline-flex items-center gap-2">
              <Search className="size-4" aria-hidden />
              Каталог анализов
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
