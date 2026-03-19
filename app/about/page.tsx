import Link from "next/link"
import Image from "next/image"
import receptionImage from "@/assets/images/reception.jpg"
import collectionRoomImage from "@/assets/images/collection-room.jpg"
import clinicalLaboratoryImage from "@/assets/images/clinical-laboratory.jpg"
import {
  ABOUT_HISTORY,
  ABOUT_MISSION,
  ABOUT_QUALITY,
  ABOUT_PARTNERS,
} from "@/features/about/constants"
import { Award, Building2, CalendarClock, Images } from "lucide-react"

export const metadata = {
  title: "О нас | T-Helper",
  description:
    "История и миссия лаборатории T-Helper с 2007 года. Стандарты качества, партнёрства и фотогалерея лаборатории.",
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
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <CalendarClock className="size-5 text-[#00a9bf]" />
              Лаборатория с 2007 года
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{ABOUT_HISTORY}</p>
              <p>{ABOUT_MISSION}</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Images className="size-5 text-[#00a9bf]" />
              Лабораторные кабинеты
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Рабочие зоны лаборатории и приёмные кабинеты. Ниже размещены визуальные материалы для раздела «О нас».
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Ресепшн и ожидание",
                  src: receptionImage,
                },
                {
                  title: "Кабинет забора биоматериала",
                  src: collectionRoomImage,
                },
                {
                  title: "Внутренняя лабораторная зона",
                  src: clinicalLaboratoryImage,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
                >
                  <div className="relative aspect-video bg-muted">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Фото блока для презентации лаборатории.
                    </p>
                  </div>
                </article>
              ))}
            </div>
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
                      className="rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#00a9bf] hover:text-[#00a9bf] cursor-pointer"
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
