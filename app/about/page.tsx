import Link from "next/link"
import Image from "next/image"
import {
  ABOUT_HISTORY,
  ABOUT_MISSION,
  ABOUT_EQUIPMENT,
  ABOUT_QUALITY,
  ABOUT_PARTNERS,
} from "@/features/about/constants"
import { Microscope, Award, Building2 } from "lucide-react"

export const metadata = {
  title: "О нас | T-Helper",
  description:
    "История и миссия лаборатории T-Helper. Оборудование, стандарты качества, партнёры.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">О нас</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          О нас
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              История и миссия
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{ABOUT_HISTORY}</p>
              <p>{ABOUT_MISSION}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Microscope className="size-5 text-[#00a9bf]" />
              Оборудование
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Мы используем современные анализаторы и реагенты ведущих производителей для точных результатов.
            </p>
            <ul className="grid gap-6 sm:grid-cols-2">
              {ABOUT_EQUIPMENT.map((item, i) => (
                <li
                  key={i}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  {item.image ? (
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-video min-h-[120px] items-center justify-center bg-muted text-muted-foreground">
                      <Microscope className="size-10" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    {item.manufacturer && (
                      <p className="mt-1 text-sm text-muted-foreground">{item.manufacturer}</p>
                    )}
                    {item.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Award className="size-5 text-[#00a9bf]" />
              Стандарты качества
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {ABOUT_QUALITY.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Building2 className="size-5 text-[#00a9bf]" />
              Партнёры
            </h2>
            <ul className="flex flex-wrap gap-4">
              {ABOUT_PARTNERS.map((p, i) => (
                <li key={i}>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#00a9bf] hover:text-[#00a9bf]"
                    >
                      {p.name}
                    </a>
                  ) : (
                    <span className="rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground">
                      {p.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
