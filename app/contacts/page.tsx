import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import {
  CONTACT_PHONES,
  CONTACT_EMAIL,
  CONTACT_MESSENGERS,
  CONTACT_ADDRESS,
  REQUISITES,
} from "@/features/contacts/constants"
import { ContactForm } from "@/features/contacts/components/ContactForm"

export const metadata = {
  title: "Контакты | T-Helper",
  description:
    "Телефоны, email, мессенджеры лаборатории T-Helper. Форма обратной связи. Реквизиты для B2B.",
}

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground cursor-pointer">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Контакты</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          Контакты
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-10">
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Phone className="size-5 text-[#00a9bf]" />
                Телефоны
              </h2>
              <ul className="space-y-2">
                {CONTACT_PHONES.map(({ label, value, href }) => (
                  <li key={href}>
                    <span className="text-sm text-muted-foreground">{label}: </span>
                    <a href={href} className="text-[#00a9bf] hover:underline">
                      {value}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Mail className="size-5 text-[#00a9bf]" />
                Почта
              </h2>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00a9bf] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <MessageCircle className="size-5 text-[#00a9bf]" />
                Мессенджеры
              </h2>
              <ul className="flex flex-wrap gap-3">
                {CONTACT_MESSENGERS.map(({ label, href, icon }) => (
                  <li key={icon}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#00a9bf] hover:text-white hover:border-[#00a9bf] cursor-pointer"
                    >
                      {icon} {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <MapPin className="size-5 text-[#00a9bf]" />
                Адрес
              </h2>
              <p className="text-muted-foreground">{CONTACT_ADDRESS}</p>
              <Link href="/locations" className="mt-2 inline-block text-sm text-[#00a9bf] hover:underline cursor-pointer">
                Филиалы на карте →
              </Link>
            </section>

            <section className="rounded-xl border border-border bg-muted/20 p-6">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Реквизиты (для B2B)
              </h2>
              <dl className="grid gap-2 text-sm">
                <div>
                  <dt className="text-muted-foreground">Наименование</dt>
                  <dd className="font-medium">{REQUISITES.name}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">БИН</dt>
                  <dd>{REQUISITES.bin}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">ИИК</dt>
                  <dd>{REQUISITES.iik}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Банк</dt>
                  <dd>{REQUISITES.bank}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">БИК</dt>
                  <dd>{REQUISITES.bik}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Юридический адрес</dt>
                  <dd>{REQUISITES.address}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Контакт для B2B</dt>
                  <dd>
                    <a href={`tel:${REQUISITES.phone.replace(/\s/g, "")}`} className="text-[#00a9bf] hover:underline">
                      {REQUISITES.phone}
                    </a>
                    {" · "}
                    <a href={`mailto:${REQUISITES.email}`} className="text-[#00a9bf] hover:underline">
                      {REQUISITES.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Форма обратной связи
              </h2>
              <p className="mb-4 text-sm text-muted-foreground">
                Оставьте заявку — мы перезвоним или напишем в удобное время.
              </p>
              <ContactForm />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
