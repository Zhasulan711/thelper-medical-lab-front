import Link from "next/link"
import { notFound } from "next/navigation"
import { getDocumentBySlug } from "@/features/documents/constants"

const DOCUMENT_CONTENT: Record<string, { title: string; content: string }> = {
  privacy: {
    title: "Политика обработки персональных данных",
    content: `
1. Общие положения
Настоящая политика определяет порядок обработки персональных данных посетителей сайта и пациентов лаборатории T-Helper (далее — Оператор).

2. Сбор данных
Оператор может собирать следующие персональные данные: ФИО, контактный телефон, адрес электронной почты, данные о состоянии здоровья (в объёме, необходимом для оказания услуг).

3. Цели обработки
Обработка персональных данных осуществляется в целях оказания лабораторных услуг, записи на приём, информирования о результатах и специальных предложениях (при согласии).

4. Защита данных
Оператор принимает необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования.

5. Права субъекта данных
Вы имеете право на доступ к своим персональным данным, их уточнение, блокирование или уничтожение. Для этого направьте запрос на info@thelper.kz.

6. Изменение политики
Оператор вправе вносить изменения в настоящую политику. Актуальная версия размещена на сайте.
    `.trim(),
  },
  offer: {
    title: "Договор оферты",
    content: `
1. Термины
Исполнитель — ТОО «T-Helper». Заказчик — физическое или юридическое лицо, принявшее условия оферты.

2. Предмет договора
Исполнитель оказывает Заказчику услуги по проведению лабораторных исследований в соответствии с действующим прайс-листом.

3. Порядок оказания услуг
Услуги оказываются при наличии предоплаты или оплаты в момент сдачи биоматериала. Заказчик обязан предоставить достоверные данные и соблюдать правила подготовки к исследованиям.

4. Сроки выполнения
Сроки выполнения исследований указаны в прайс-листе и на сайте. Результаты выдаются лично, по электронной почте или через личный кабинет (при наличии).

5. Ответственность
Исполнитель несёт ответственность за качество проведённых исследований в соответствии с законодательством РК. Заказчик несёт ответственность за достоверность предоставленных данных.

6. Реквизиты
ТОО «T-Helper», БИН 123456789012. Контакты: info@thelper.kz, +7 (777) 777-77-77.
    `.trim(),
  },
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const doc = getDocumentBySlug(slug)
  if (!doc) return { title: "Документ | T-Helper" }
  const content = DOCUMENT_CONTENT[slug]
  return {
    title: content?.title ?? doc.title,
    description: doc.description,
  }
}

export default async function DocumentSlugPage({ params }: Props) {
  const { slug } = await params
  const doc = getDocumentBySlug(slug)
  if (!doc) notFound()

  const content = DOCUMENT_CONTENT[slug]
  if (!content) notFound()

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <Link href="/documents" className="hover:text-foreground">
            Документы
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{content.title}</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          {content.title}
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
            {content.content}
          </pre>
        </div>

        <p className="mt-8">
          <Link href="/documents" className="text-[#00a9bf] hover:underline">
            ← Все документы
          </Link>
        </p>
      </div>
    </main>
  )
}
