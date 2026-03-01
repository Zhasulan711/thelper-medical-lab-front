"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TestTube2, Menu, X, Phone, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackPhoneClick, trackCtaClick } from "@/lib/analytics"
import { smoothTransition } from "@/lib/animations"

const NAV_ITEMS = [
    { path: "/services", label: "Анализы" },
    { path: "/prices", label: "Цены" },
    { path: "/locations", label: "Филиалы" },
    { path: "/about", label: "О нас" },
    { path: "/blog", label: "Блог" },
    { path: "/promotions", label: "Акции" },
    { path: "/business", label: "B2B" },
    { path: "/documents", label: "Документы" },
    { path: "/contacts", label: "Контакты" },
] as const

const PHONE = "+7 (777) 777-77-77"
const PHONE_HREF = "tel:+77777777777"

export function Header() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-90 cursor-pointer"
                    aria-label="T-Helper — на главную"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                    }}
                >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-[#00a9bf]/10 text-[#00a9bf]">
                        <TestTube2 className="size-5" aria-hidden />
                    </span>
                    <span className="text-xl font-semibold text-foreground">
                        T-Helper
                    </span>
                </Link>

                <nav
                    className="hidden lg:flex items-center gap-1"
                    aria-label="Основное меню"
                >
                    {NAV_ITEMS.map(({ path, label }) => {
                        const isActive = pathname === path || pathname.startsWith(path + "/")
                        return (
                            <Link
                                key={path}
                                href={path}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors cursor-pointer",
                                    isActive
                                        ? "text-[#00a9bf] bg-[#00a9bf]/5"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                )}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex items-center gap-3 sm:gap-4">
                    <a
                        href={PHONE_HREF}
                        onClick={trackPhoneClick}
                        className="hidden sm:inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-[#00a9bf] hover:text-[#0095a8] transition-colors whitespace-nowrap"
                    >
                        <Phone className="size-4 shrink-0" aria-hidden />
                        {PHONE}
                    </a>
                    <Button
                        asChild
                        size="sm"
                        className="h-9 rounded-full bg-[#00a9bf] px-3 sm:px-4 text-white hover:bg-[#0095a8] shrink-0 text-sm"
                    >
                        <Link
                            href="/#cta"
                            className="inline-flex items-center gap-1"
                            onClick={(e) => {
                                if (pathname === "/") {
                                    e.preventDefault()
                                    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                                }
                                trackCtaClick("header")
                            }}
                        >
                            Записаться
                            <ArrowRight className="size-4 shrink-0" aria-hidden />
                        </Link>
                    </Button>

                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="lg:hidden shrink-0 text-[#00a9bf] hover:bg-[#00a9bf]/10"
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((v) => !v)}
                    >
                        {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </Button>
                </div>
            </div>

            <AnimatePresence>
            {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={smoothTransition}
                        className="lg:hidden overflow-hidden border-t border-border bg-background"
                        role="dialog"
                        aria-label="Мобильное меню"
                    >
                        <nav className="mx-auto max-w-7xl flex flex-col px-4 py-4 gap-0.5" aria-label="Меню">
                        {NAV_ITEMS.map(({ path, label }) => {
                            const isActive = pathname === path || pathname.startsWith(path)
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "rounded-lg px-4 py-3 text-base font-medium transition-colors cursor-pointer",
                                        isActive ? "bg-[#00a9bf]/10 text-[#00a9bf]" : "text-foreground hover:bg-muted"
                                    )}
                                >
                                    {label}
                                </Link>
                            )
                        })}
                        <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                            <a
                                href={PHONE_HREF}
                                onClick={() => { trackPhoneClick(); setIsMenuOpen(false) }}
                                className="flex items-center gap-2 rounded-lg px-4 py-3 text-[#00a9bf] font-medium cursor-pointer"
                            >
                                <Phone className="size-4" />
                                {PHONE}
                            </a>
                            <Button asChild className="w-full rounded-full bg-[#00a9bf] text-white hover:bg-[#0095a8]">
                                <Link
                                    href="/#cta"
                                    onClick={(e) => {
                                        if (pathname === "/") {
                                            e.preventDefault()
                                            document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                        trackCtaClick("header")
                                        setIsMenuOpen(false)
                                    }}
                                >
                                    Записаться
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </motion.div>
            )}
            </AnimatePresence>
        </header>
    )
}
