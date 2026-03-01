"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { fadeInUp } from "@/lib/animations"
import { ArrowRight } from "lucide-react"
import { trackCtaClick } from "@/lib/analytics"

type HeroProps = {
  imageSrc: import("next/image").StaticImageData
}

export function HomeHero({ imageSrc }: HeroProps) {
  return (
    <div className="relative h-[724px] w-full overflow-hidden">
      <Image
        src={imageSrc.src}
        alt="Hero"
        fill
        className="object-cover scale-105 blur-[2px]"
        priority
      />
      <div
        className="absolute inset-0 z-1 bg-black/45"
        aria-hidden
      />
      <section className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center text-white">
        <motion.h1
          className="text-3xl font-semibold drop-shadow-md md:text-4xl lg:text-5xl"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
        >
          Ваше здоровье – наш главный приоритет.
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg drop-shadow-md"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
        >
          Хорошее здоровье — это состояние психического, физического и социального благополучия, и оно не сводится просто к отсутствию болезней!
        </motion.p>
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ ...fadeInUp.transition, delay: 0.45 }}
        >
          <Button
            asChild
            size="sm"
            className="h-9 rounded-full bg-[#00a9bf] px-3 sm:px-4 text-white hover:bg-[#0095a8] shrink-0 text-sm"
            onClick={() => trackCtaClick("home-hero")}
          >
            <Link href="/#cta" className="inline-flex items-center gap-1">
              Записаться
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </Link>
          </Button>

        </motion.div>
      </section>
    </div>
  )
}
