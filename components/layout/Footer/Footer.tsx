"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { inViewStaggerContainer, staggerItem } from "@/lib/animations"

const FOOTER_NAV = [
  { href: "/services", label: "Анализы" },
  { href: "/prices", label: "Цены" },
  { href: "/locations", label: "Филиалы" },
  { href: "/about", label: "О нас" },
  { href: "/blog", label: "Блог" },
  { href: "/promotions", label: "Акции" },
  { href: "/business", label: "Корпоративным клиентам" },
  { href: "/contacts", label: "Контакты" },
] as const

const FOOTER_DOCS = [
  { href: "/documents", label: "Документы" },
  { href: "/documents/privacy", label: "Политика конфиденциальности" },
  { href: "/documents/offer", label: "Договор оферты" },
] as const

const SOCIAL_LINKS = [
  { href: "#", label: "Telegram", icon: "TG" },
  { href: "#", label: "WhatsApp", icon: "WA" },
] as const

export function Footer() {
  return (
    <motion.footer
      className="border-t border-border bg-muted/30"
      initial={inViewStaggerContainer.initial}
      whileInView={inViewStaggerContainer.whileInView}
      viewport={inViewStaggerContainer.viewport}
      variants={inViewStaggerContainer.variants}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-14">
        <motion.div
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"
          variants={inViewStaggerContainer.variants}
        >
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Навигация
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Контакты
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="tel:+77777777777"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Phone className="size-4 shrink-0" />
                  +7 (777) 777-77-77
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thelper.kz"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Mail className="size-4 shrink-0" />
                  info@thelper.kz
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5" />
                <span>г. Алматы, ул. Примерная, 1</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Мы в соцсетях
            </h3>
            <ul className="mt-4 flex gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <li key={icon}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-muted text-sm font-medium text-foreground transition-colors hover:bg-[#00a9bf] hover:text-white"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Документы
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_DOCS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground"
          variants={staggerItem}
        >
          © {new Date().getFullYear()} T-Helper. Все права защищены.
        </motion.div>
      </div>
    </motion.footer>
  )
}
