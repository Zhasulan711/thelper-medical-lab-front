"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowBigRight, Camera, Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"

const NAV_ITEMS = [
    { path: "/services", label: "Анализы" },
    { path: "/prices", label: "Цены" },
    { path: "/locations", label: "Филиалы" },
    { path: "/about", label: "О нас" },
    { path: "/promotions", label: "Акции" },
    { path: "/contacts", label: "Контакты" },
] as const

export const Header = () => {
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const go = (path: string) => {
        router.push(path)
        setIsMenuOpen(false)
    }

    return (
        <header className="relative max-w-293 mx-auto flex justify-between items-center border-b pt-[0.938rem] pb-[0.938rem] text-lg">
            <Camera width={70} height={70} onClick={() => router.push("/")} />

            <nav className="hidden gap-2 items-center md:flex text-base lg:text-lg">
                {NAV_ITEMS.map(({ path, label }) => (
                    <span key={path} onClick={() => router.push(path)} className="cursor-pointer">
                        {label}
                    </span>
                ))}
            </nav>
            <Button
                type="button"
                className="p-2 md:hidden"
                aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((v) => !v)}
            >
                {isMenuOpen ? (
                    <X className="size-5 text-[#00a9bf]" />
                ) : (
                    <Menu className="size-5 text-[#00a9bf]" />
                )}
            </Button>

            <div className="flex items-center gap-2 text-[#00a9bf]">

                <span className="hidden sm:inline">+7 (777) 777-77-77</span>
                <Button className="pt-5 pb-5 pr-10 pl-10 flex gap-2 items-center rounded-full cursor-pointer bg-white border border-[#00a9bf] hover:bg-[#00a9bf] hover:text-white">
                    <span className="text-black">Записаться</span>
                    <ArrowBigRight className="text-black" />
                </Button>
            </div>

            {isMenuOpen && (
                <nav
                    className="absolute left-0 right-0 top-full z-50 flex flex-col gap-2 border-b border-border bg-background px-87.5 py-4 md:hidden"
                    aria-label="Меню"
                >
                    {NAV_ITEMS.map(({ path, label }) => (
                        <button
                            key={path}
                            type="button"
                            className="text-left text-[#00a9bf] hover:underline"
                            onClick={() => go(path)}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            )}
        </header>
    )
}