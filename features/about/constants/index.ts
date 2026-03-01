import type { EquipmentItem, Partner } from "@/features/about/types"

export const ABOUT_HISTORY =
  "T-Helper — современная лаборатория с фокусом на точность результатов и удобство пациентов. Мы работаем с 2020 года и постоянно развиваем перечень исследований и сервисов."

export const ABOUT_MISSION =
  "Наша миссия — делать лабораторную диагностику доступной, понятной и быстрой. Мы используем современное оборудование и строго соблюдаем стандарты качества."

export const ABOUT_EQUIPMENT: EquipmentItem[] = [
  {
    name: "Автоматический биохимический анализатор",
    manufacturer: "Roche Diagnostics",
    description: "Высокоточные биохимические и иммунохимические исследования.",
  },
  {
    name: "Гематологический анализатор",
    manufacturer: "Sysmex",
    description: "Общий анализ крови с лейкоформулой и СОЭ.",
  },
]

export const ABOUT_QUALITY = [
  "Внутренний и внешний контроль качества (ФСВОК, международные программы).",
  "Стандартизированные методики и реагенты ведущих производителей.",
  "Обучение персонала и соблюдение регламентов забора и хранения образцов.",
]

export const ABOUT_PARTNERS: Partner[] = [
  { name: "Roche Diagnostics", url: "https://www.roche.com" },
  { name: "Sysmex", url: "https://www.sysmex.com" },
]
