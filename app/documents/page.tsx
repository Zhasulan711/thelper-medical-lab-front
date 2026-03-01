import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import { DOCUMENTS, getDocumentsByCategory } from "@/features/documents/constants"
import type { DocumentItem } from "@/features/documents/types"

export const metadata = {
  title: "Документы | T-Helper",
  description:
    "Лицензии, сертификаты, политика обработки персональных данных, договор оферты лаборатории T-Helper.",
}

const CATEGORY_LABELS: Record<string, string> = {
  license: "Лицензии",
  certificate: "Сертификаты",
  policy: "Политика обработки данных",
  offer: "Договор оферты",
}

export default function DocumentsPage() {
  const licenses = getDocumentsByCategory("license")
  const certificates = getDocumentsByCategory("certificate")
  const policyDocs = getDocumentsByCategory("policy")
  const offerDocs = getDocumentsByCategory("offer")

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-6 md:py-8">
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-foreground">
            Главная
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Документы</span>
        </nav>

        <h1 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
          Документы
        </h1>

        <p className="mb-10 text-muted-foreground">
          Лицензии, сертификаты и правовые документы лаборатории T-Helper. Доступны для просмотра и скачивания.
        </p>

        <div className="space-y-10">
          {licenses.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {CATEGORY_LABELS.license}
              </h2>
              <ul className="space-y-3">
                {licenses.map((doc) => (
                  <DocumentCard key={doc.id} doc={doc} />
                ))}
              </ul>
            </section>
          )}

          {certificates.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {CATEGORY_LABELS.certificate}
              </h2>
              <ul className="space-y-3">
                {certificates.map((doc) => (
                  <DocumentCard key={doc.id} doc={doc} />
                ))}
              </ul>
            </section>
          )}

          {policyDocs.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {CATEGORY_LABELS.policy}
              </h2>
              <ul className="space-y-3">
                {policyDocs.map((doc) => (
                  <DocumentCard key={doc.id} doc={doc} />
                ))}
              </ul>
            </section>
          )}

          {offerDocs.length > 0 && (
            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                {CATEGORY_LABELS.offer}
              </h2>
              <ul className="space-y-3">
                {offerDocs.map((doc) => (
                  <DocumentCard key={doc.id} doc={doc} />
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}

function DocumentCard({ doc }: { doc: DocumentItem }) {
  const isFile = !!doc.fileUrl
  const href = doc.fileUrl ?? `/documents/${doc.slug}`

  return (
    <li className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="min-w-0">
        <h3 className="font-medium text-foreground">{doc.title}</h3>
        {doc.description && (
          <p className="mt-1 text-sm text-muted-foreground">{doc.description}</p>
        )}
      </div>
      <div className="flex shrink-0 gap-2">
        <Link
          href={href}
          {...(isFile ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[#00a9bf] hover:text-white hover:border-[#00a9bf]"
        >
          {isFile ? (
            <>
              <Download className="size-4" aria-hidden />
              Скачать
            </>
          ) : (
            <>
              <ExternalLink className="size-4" aria-hidden />
              Просмотр
            </>
          )}
        </Link>
      </div>
    </li>
  )
}
