import type { Category, Analyze, AnalyzeDetail } from "@/features/services/types"

export const CATEGORIES: Category[] = [
  { slug: "biokhimija", name: "Биохимические исследования", description: "Исследования биохимических показателей крови и других биоматериалов.", analysisCount: 12, isCheckup: false },
  { slug: "gormony", name: "Гормональные исследования", description: "Анализы на гормоны щитовидной железы, половые гормоны и др.", analysisCount: 8, isCheckup: false },
  { slug: "gematologija", name: "Гематологические исследования", description: "Общий анализ крови, коагулограмма и другие гематологические тесты.", analysisCount: 15, isCheckup: false },
  { slug: "immunologija", name: "Иммунологические исследования", description: "Оценка иммунного статуса, маркеры инфекций.", analysisCount: 6, isCheckup: false },
  { slug: "allergologija", name: "Аллергологические исследования", description: "Определение аллергенов и специфических IgE.", analysisCount: 5, isCheckup: false },
  { slug: "infekcii", name: "Инфекции (ПЦР, ИФА)", description: "ПЦР и ИФА-диагностика инфекций.", analysisCount: 20, isCheckup: false },
  { slug: "onkomarkery", name: "Онкомаркёры", description: "Маркеры опухолевых заболеваний.", analysisCount: 7, isCheckup: false },
  { slug: "check-up", name: "Чек-апы (комплексы)", description: "Готовые комплексы анализов для профилактического обследования.", analysisCount: 5, isCheckup: true },
]

export const ANALYZES: Analyze[] = [
  { slug: "glukoza-krov", name: "Глюкоза (в крови)", categorySlug: "biokhimija", priceFrom: 170, duration: "1 календарный день", material: "Кровь венозная", code: "№ 16", shortDescription: "Основной лабораторный тест для оценки углеводного обмена." },
  { slug: "glikirovannyj-gemoglobin", name: "Гликированный гемоглобин (HbA1c)", categorySlug: "biokhimija", priceFrom: 500, duration: "1 календарный день", material: "Кровь венозная", code: "№ 18", shortDescription: "Оценка среднего уровня глюкозы за 2–3 месяца." },
  { slug: "fruktozamin", name: "Фруктозамин", categorySlug: "biokhimija", priceFrom: 690, duration: "до 4 рабочих дней", material: "Кровь венозная", code: "№ 17", shortDescription: "Контроль компенсации сахарного диабета." },
  { slug: "obshhij-analiz-krovi", name: "Общий анализ крови (без лейкоформулы и СОЭ)", categorySlug: "gematologija", priceFrom: 220, duration: "1 календарный день", material: "Кровь венозная", code: "№ 5", shortDescription: "Базовый скрининг состояния крови." },
  { slug: "ttg", name: "ТТГ (тиреотропный гормон)", categorySlug: "gormony", priceFrom: 350, duration: "1 календарный день", material: "Кровь венозная", code: "№ 20", shortDescription: "Скрининг функции щитовидной железы." },
  { slug: "vitamin-d", name: "25-OH витамин D", categorySlug: "gormony", priceFrom: 670, duration: "1 календарный день", material: "Кровь венозная", code: "№ 25", shortDescription: "Оценка обеспеченности витамином D." },
  { slug: "check-up-bazovyj", name: "Чек-ап базовый", categorySlug: "check-up", priceFrom: 12000, duration: "1–2 дня", material: "Кровь венозная", shortDescription: "Комплекс: ОАК, биохимия, глюкоза, ТТГ, липидограмма." },
  { slug: "check-up-rasshirennyj", name: "Чек-ап расширенный", categorySlug: "check-up", priceFrom: 25000, duration: "2–3 дня", material: "Кровь венозная, моча", shortDescription: "Расширенное профилактическое обследование." },
]

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function getAnalyzesByCategory(categorySlug: string): Analyze[] {
  return ANALYZES.filter((a) => a.categorySlug === categorySlug)
}

export function getCheckupCategories(): Category[] {
  return CATEGORIES.filter((c) => c.isCheckup)
}

export function getRegularCategories(): Category[] {
  return CATEGORIES.filter((c) => !c.isCheckup)
}

export function getAnalyzeBySlug(slug: string): Analyze | undefined {
  return ANALYZES.find((a) => a.slug === slug)
}

export const ANALYZE_DETAILS: Record<string, AnalyzeDetail> = {
  "glukoza-krov": {
    preparation: [
      "Натощак (8–14 часов голода), можно пить воду без газа.",
      "За 24 часа исключить алкоголь, тяжёлую и жирную пищу.",
      "За 1 час до сдачи не курить, избегать физических и эмоциональных нагрузок.",
      "Лекарства — по согласованию с врачом (некоторые влияют на уровень глюкозы).",
    ],
    whenPrescribed: "Скрининг и контроль сахарного диабета, оценка углеводного обмена, обследование при ожирении, заболеваниях поджелудочной железы, перед операциями и при подозрении на гипогликемию.",
    whatAffectsResult: "Приём пищи, алкоголь, курение, стресс, физическая нагрузка, приём ряда лекарств (глюкокортикоиды, диуретики и др.).",
    contraindications: "Специфических противопоказаний нет. При тяжёлом состоянии пациента забор крови согласовывается с лечащим врачом.",
    howToTake: "Забор крови из вены. Если нет возможности центрифугировать пробу в течение 30 минут, используется пробирка с ингибитором гликолиза (фторид натрия).",
    recommendationsAfter: "После сдачи можно сразу есть и пить. При головокружении сообщите медперсоналу — возможен краткий отдых.",
    description: "Глюкоза — основной источник энергии для метаболизма. Анализ крови на глюкозу — главный лабораторный тест для оценки углеводного обмена и скрининга диабета.",
    synonyms: "Анализ крови на глюкозу; Глюкоза в плазме или сыворотке крови; Сахар крови; Глюкоза в крови; Анализ глюкозы в крови натощак.",
  },
  "glikirovannyj-gemoglobin": {
    preparation: [
      "Строгих требований к голоданию нет — сдаётся в любое время.",
      "Специальная подготовка не требуется.",
    ],
    whenPrescribed: "Диагностика и контроль сахарного диабета, оценка компенсации гликемии за 2–3 месяца.",
    whatAffectsResult: "Выраженная анемия, гемолиз, переливание крови, приём больших доз витамина C или E могут влиять на результат.",
    contraindications: "Нет специфических противопоказаний.",
    howToTake: "Забор крови из вены. Срок исполнения обычно 1 календарный день.",
    recommendationsAfter: "Стандартные. Ограничений после сдачи нет.",
    description: "Гликированный гемоглобин (HbA1c) отражает средний уровень глюкозы в крови за последние 2–3 месяца. Используется для диагностики и контроля диабета.",
  },
  "ttg": {
    preparation: [
      "Натощак (желательно утром).",
      "За 2–4 недели по согласованию с врачом отменить приём гормонов щитовидной железы (если применяются).",
    ],
    whenPrescribed: "Оценка функции щитовидной железы, скрининг гипо- и гипертиреоза, контроль лечения.",
    whatAffectsResult: "Приём тиреоидных гормонов, стресс, острые заболевания.",
    contraindications: "Специфических противопоказаний нет.",
    howToTake: "Забор крови из вены. Срок исполнения — 1 календарный день.",
    recommendationsAfter: "Стандартные.",
  },
}

export function getAnalyzeDetail(slug: string): AnalyzeDetail | undefined {
  return ANALYZE_DETAILS[slug]
}

export function getSimilarAnalyzes(currentSlug: string, categorySlug: string, limit = 4): Analyze[] {
  return ANALYZES.filter((a) => a.categorySlug === categorySlug && a.slug !== currentSlug).slice(0, limit)
}
