"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { fadeInUp } from "@/lib/animations"

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
        className="object-cover"
        priority
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
          <Button className="bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90 cursor-pointer" asChild>
            <a href="/#cta">Записаться</a>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}
