import { Button } from "@/components/ui/button";
import medicalBuilding from "@/assets/images/ironwood-medical.jpg"
import Image from "next/image";
import Link from "next/link";
import { PopularAnalysesCarousel } from "@/features/home/components/PopularAnalysesCarousel"
import { FaqSection } from "@/features/home/components/FaqSection"
import { ReviewsSection } from "@/features/home/components/ReviewsSection"
import { CtaFormSection } from "@/features/home/components/CtaFormSection"
import { ArrowRight, Heart, Brain, TestTube2, Eye } from "lucide-react";
export default function Home() {
  return (
    <main>
      <div className="relative h-[724px] w-full overflow-hidden">
        <Image
          src={medicalBuilding.src}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        <section className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center text-white">
          <h1 className="text-3xl font-semibold drop-shadow-md md:text-4xl lg:text-5xl">
            Ваше здоровье – наш главный приоритет.
          </h1>
          <p className="max-w-2xl text-lg drop-shadow-md">
            Хорошее здоровье — это состояние психического, физического и социального благополучия, и оно не сводится просто к отсутствию болезней!
          </p>
          <Button className="bg-[#00a9bf] text-white hover:bg-[#00a9bf]/90 cursor-pointer">
            Записаться
          </Button>
        </section>
      </div>

      <div className="mx-auto flex max-w-293 flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:gap-12">
        <div className="w-full shrink-0 rounded-2xl border border-border bg-card p-8 shadow-sm md:max-w-[420px]">
          <div className="border-b border-border pb-6">
            <p className="text-4xl font-bold text-[#00a9bf]">5000+</p>
            <p className="mt-1 text-sm text-muted-foreground">Филиалов по всему миру</p>
          </div>
          <div className="grid grid-cols-2 gap-0 pt-6">
            <div className="border-r border-border pr-6">
              <p className="text-3xl font-bold text-[#00a9bf]">1000+</p>
              <p className="mt-1 text-sm text-muted-foreground">Больниц основано</p>
            </div>
            <div className="pl-6">
              <p className="text-3xl font-bold text-[#00a9bf]">300+</p>
              <p className="mt-1 text-sm text-muted-foreground">Местных партнёров</p>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-3">
          <span className="text-sm font-medium uppercase tracking-wider text-[#00a9bf]">
            Наши преимущества
          </span>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Почему мы лучше
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Индустрия здравоохранения — это постоянно меняющаяся, конкурентная отрасль, требующая внимания и заботы. Мы надеемся познакомить вас с нашей компанией, которая поднимает планку и внедряет инновации с невероятной скоростью.
          </p>
        </section>
      </div>

      <PopularAnalysesCarousel />

      <section className="mx-auto flex max-w-293 flex-col gap-10 px-4 py-16 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex max-w-md flex-col gap-4">
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
            Разные категории исследований
          </h2>
          <p className="text-muted-foreground">
            По запросам пациентов мы предлагаем разные виды анализов и исследований для точной диагностики и контроля здоровья.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-[#00a9bf] font-medium hover:underline"
          >
            Смотреть больше
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 md:max-w-[520px]">
          {[
            { icon: Heart, name: "Кардиология", desc: "Исследования сердца и сосудов для оценки рисков и контроля лечения." },
            { icon: Brain, name: "Неврология", desc: "Анализы и тесты для диагностики неврологических заболеваний." },
            { icon: TestTube2, name: "Общие анализы", desc: "Клинические и биохимические исследования крови и мочи." },
            { icon: Eye, name: "Офтальмология", desc: "Скрининг и диагностика заболеваний органов зрения." },
          ].map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="flex flex-col rounded-xl bg-[#223645] p-5 text-white"
            >
              <div className="flex size-14 items-center justify-center rounded-lg bg-white/15">
                <Icon className="size-7 text-white" />
              </div>
              <h3 className="mt-4 font-bold">{name}</h3>
              <p className="mt-2 text-sm text-white/80">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FaqSection imageSrc={medicalBuilding} />

      <ReviewsSection />

      <CtaFormSection imageSrc={medicalBuilding} />
    </main>
  );
}
