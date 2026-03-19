import Link from "next/link"
import { Briefcase, FileCheck, Send } from "lucide-react"
import { B2B_INTRO, B2B_SERVICES, B2B_TERMS } from "@/features/business/constants"
import { BusinessLeadForm } from "@/features/business/components/BusinessLeadForm"

export const metadata = {
  title: "Корпоративным клиентам (B2B) | T-Helper",
  description:
    "Сотрудничество с медицинскими центрами: забор биоматериала на стороне партнёра, доставка нашим водителем, лабораторные исследования в T-Helper.",
}

export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Корпоративным клиентам</span>
        </nav>

        <h1 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
          Корпоративным клиентам (B2B)
        </h1>
        <p className="mb-10 text-muted-foreground">
          {B2B_INTRO}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Briefcase className="size-5 text-[#00a9bf]" />
              Сотрудничество с медцентрами
            </h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              {B2B_SERVICES.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <FileCheck className="size-5 text-[#00a9bf]" />
              Условия сотрудничества
            </h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Для начала работы необходимо:
            </p>
            <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
              {B2B_TERMS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted-foreground">
              <Link href="/contacts" className="text-[#00a9bf] hover:underline">
                Реквизиты и контакты для B2B →
              </Link>
            </p>
          </section>

          <section className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
            <h2 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Send className="size-5 text-[#00a9bf]" />
              Оставить заявку
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Заполните форму — менеджер свяжется с вами для согласования условий сотрудничества, графика забора проб и формата передачи результатов.
            </p>
            <BusinessLeadForm />
          </section>
        </div>
      </div>
    </main>
  )
}
