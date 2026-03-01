"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="ru">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fafafa", color: "#171717" }}>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(4rem, 15vw, 8rem)",
              fontWeight: 700,
              color: "rgba(0, 169, 191, 0.2)",
              margin: 0,
            }}
            aria-hidden
          >
            500
          </p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginTop: "1rem", marginBottom: 0 }}>
            Что-то пошло не так
          </h1>
          <p style={{ color: "#737373", marginTop: "0.75rem", maxWidth: "28rem" }}>
            Произошла внутренняя ошибка. Мы уже знаем о ней и работаем над исправлением. Попробуйте обновить страницу или вернуться позже.
          </p>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              type="button"
              onClick={() => reset()}
              style={{
                padding: "0.625rem 1.25rem",
                backgroundColor: "#00a9bf",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Попробовать снова
            </button>
            <Link
              href="/"
              style={{
                padding: "0.625rem 1.25rem",
                border: "1px solid #e5e5e5",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                color: "inherit",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              На главную
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
