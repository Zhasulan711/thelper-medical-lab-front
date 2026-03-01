import type { Category, Analyze, AnalyzeDetail } from "@/features/services/types"

const CATEGORY_BASE: Omit<Category, "analysisCount">[] = [
  { slug: "biokhimija", name: "Биохимические исследования", description: "Исследования биохимических показателей крови и других биоматериалов.", isCheckup: false },
  { slug: "gormony", name: "Гормональные исследования", description: "Анализы на гормоны щитовидной железы, половые гормоны и др.", isCheckup: false },
  { slug: "gematologija", name: "Гематологические исследования", description: "Общий анализ крови, коагулограмма и другие гематологические тесты.", isCheckup: false },
  { slug: "immunologija", name: "Иммунологические исследования", description: "Оценка иммунного статуса, маркеры инфекций.", isCheckup: false },
  { slug: "allergologija", name: "Аллергологические исследования", description: "Определение аллергенов и специфических IgE.", isCheckup: false },
  { slug: "infekcii", name: "Инфекции (ПЦР, ИФА)", description: "ПЦР и ИФА-диагностика инфекций.", isCheckup: false },
  { slug: "onkomarkery", name: "Онкомаркёры", description: "Маркеры опухолевых заболеваний.", isCheckup: false },
  { slug: "check-up", name: "Чек-апы (комплексы)", description: "Готовые комплексы анализов для профилактического обследования.", isCheckup: true },
]

export const ANALYZES: Analyze[] = [
  // Биохимические (12)
  { slug: "glukoza-krov", name: "Глюкоза (в крови)", categorySlug: "biokhimija", priceFrom: 170, duration: "1 календарный день", material: "Кровь венозная", code: "№ 16", shortDescription: "Основной лабораторный тест для оценки углеводного обмена." },
  { slug: "glikirovannyj-gemoglobin", name: "Гликированный гемоглобин (HbA1c)", categorySlug: "biokhimija", priceFrom: 500, duration: "1 календарный день", material: "Кровь венозная", code: "№ 18", shortDescription: "Оценка среднего уровня глюкозы за 2–3 месяца." },
  { slug: "fruktozamin", name: "Фруктозамин", categorySlug: "biokhimija", priceFrom: 690, duration: "до 4 рабочих дней", material: "Кровь венозная", code: "№ 17", shortDescription: "Контроль компенсации сахарного диабета." },
  { slug: "kreatinin", name: "Креатинин", categorySlug: "biokhimija", priceFrom: 280, duration: "1 календарный день", material: "Кровь венозная", code: "№ 19", shortDescription: "Оценка функции почек." },
  { slug: "mochevina", name: "Мочевина", categorySlug: "biokhimija", priceFrom: 260, duration: "1 календарный день", material: "Кровь венозная", code: "№ 20", shortDescription: "Маркер белкового обмена и функции почек." },
  { slug: "alt", name: "АЛТ (аланинаминотрансфераза)", categorySlug: "biokhimija", priceFrom: 320, duration: "1 календарный день", material: "Кровь венозная", code: "№ 21", shortDescription: "Фермент печени, маркер повреждения гепатоцитов." },
  { slug: "ast", name: "АСТ (аспартатаминотрансфераза)", categorySlug: "biokhimija", priceFrom: 320, duration: "1 календарный день", material: "Кровь венозная", code: "№ 22", shortDescription: "Фермент печени и сердца." },
  { slug: "obshhij-bilirubin", name: "Билирубин общий", categorySlug: "biokhimija", priceFrom: 290, duration: "1 календарный день", material: "Кровь венозная", code: "№ 23", shortDescription: "Оценка функции печени и желчевыводящих путей." },
  { slug: "holesterin-obshhij", name: "Холестерин общий", categorySlug: "biokhimija", priceFrom: 310, duration: "1 календарный день", material: "Кровь венозная", code: "№ 24", shortDescription: "Скрининг липидного обмена." },
  { slug: "ldl-holesterin", name: "Холестерин ЛПНП", categorySlug: "biokhimija", priceFrom: 380, duration: "1 календарный день", material: "Кровь венозная", code: "№ 25", shortDescription: "«Плохой» холестерин, фактор риска атеросклероза." },
  { slug: "hdl-holesterin", name: "Холестерин ЛПВП", categorySlug: "biokhimija", priceFrom: 380, duration: "1 календарный день", material: "Кровь венозная", code: "№ 26", shortDescription: "«Хороший» холестерин." },
  { slug: "trigliceridy", name: "Триглицериды", categorySlug: "biokhimija", priceFrom: 350, duration: "1 календарный день", material: "Кровь венозная", code: "№ 27", shortDescription: "Липиды крови, фактор риска сердечно-сосудистых заболеваний." },
  // Гематологические (15)
  { slug: "obshhij-analiz-krovi", name: "Общий анализ крови (без лейкоформулы и СОЭ)", categorySlug: "gematologija", priceFrom: 220, duration: "1 календарный день", material: "Кровь венозная", code: "№ 5", shortDescription: "Базовый скрининг состояния крови." },
  { slug: "oak-s-lejkoformuloj", name: "ОАК с лейкоформулой и СОЭ", categorySlug: "gematologija", priceFrom: 450, duration: "1 календарный день", material: "Кровь венозная", code: "№ 6", shortDescription: "Развёрнутый общий анализ крови." },
  { slug: "retikulocity", name: "Ретикулоциты", categorySlug: "gematologija", priceFrom: 520, duration: "1 календарный день", material: "Кровь венозная", code: "№ 7", shortDescription: "Оценка кроветворной функции костного мозга." },
  { slug: "koagulogramma", name: "Коагулограмма (базовая)", categorySlug: "gematologija", priceFrom: 890, duration: "1 календарный день", material: "Кровь венозная", code: "№ 8", shortDescription: "ПТВ, МНО, АЧТВ, фибриноген." },
  { slug: "d-dimery", name: "D-димеры", categorySlug: "gematologija", priceFrom: 1200, duration: "1 календарный день", material: "Кровь венозная", code: "№ 9", shortDescription: "Маркер тромбообразования." },
  { slug: "ferritin", name: "Ферритин", categorySlug: "gematologija", priceFrom: 850, duration: "1–2 дня", material: "Кровь венозная", code: "№ 10", shortDescription: "Запасы железа в организме." },
  { slug: "obshhij-zhelezosvyazyvayushhij", name: "ОЖСС (общая железосвязывающая способность)", categorySlug: "gematologija", priceFrom: 420, duration: "1 календарный день", material: "Кровь венозная", code: "№ 11", shortDescription: "Оценка обмена железа." },
  { slug: "transferrin", name: "Трансферрин", categorySlug: "gematologija", priceFrom: 680, duration: "1 календарный день", material: "Кровь венозная", code: "№ 12", shortDescription: "Белок, переносящий железо." },
  { slug: "vitamin-b12", name: "Витамин B12", categorySlug: "gematologija", priceFrom: 950, duration: "3–5 дней", material: "Кровь венозная", code: "№ 13", shortDescription: "Диагностика B12-дефицитной анемии." },
  { slug: "folievaya-kislota", name: "Фолиевая кислота", categorySlug: "gematologija", priceFrom: 720, duration: "1–2 дня", material: "Кровь венозная", code: "№ 14", shortDescription: "Оценка обеспеченности фолатами." },
  { slug: "gruppa-krovi-rezus", name: "Группа крови и резус-фактор", categorySlug: "gematologija", priceFrom: 580, duration: "1 календарный день", material: "Кровь венозная", code: "№ 15", shortDescription: "Определение группы крови по системе AB0 и резус." },
  { slug: "eritrocity-sedimentacija", name: "СОЭ (скорость оседания эритроцитов)", categorySlug: "gematologija", priceFrom: 180, duration: "1 календарный день", material: "Кровь венозная", code: "№ 16", shortDescription: "Неспецифический маркер воспаления." },
  { slug: "trombocity", name: "Тромбоциты (подсчёт)", categorySlug: "gematologija", priceFrom: 350, duration: "1 календарный день", material: "Кровь венозная", code: "№ 17", shortDescription: "Оценка свёртывающей системы." },
  { slug: "prothrombin-vremya", name: "Протромбиновое время (ПТВ, МНО)", categorySlug: "gematologija", priceFrom: 420, duration: "1 календарный день", material: "Кровь венозная", code: "№ 18", shortDescription: "Контроль при приёме антикоагулянтов." },
  { slug: "apttv", name: "АЧТВ (активированное частичное тромбопластиновое время)", categorySlug: "gematologija", priceFrom: 380, duration: "1 календарный день", material: "Кровь венозная", code: "№ 19", shortDescription: "Оценка внутреннего пути свёртывания." },
  // Гормональные (8)
  { slug: "ttg", name: "ТТГ (тиреотропный гормон)", categorySlug: "gormony", priceFrom: 350, duration: "1 календарный день", material: "Кровь венозная", code: "№ 20", shortDescription: "Скрининг функции щитовидной железы." },
  { slug: "vitamin-d", name: "25-OH витамин D", categorySlug: "gormony", priceFrom: 670, duration: "1 календарный день", material: "Кровь венозная", code: "№ 25", shortDescription: "Оценка обеспеченности витамином D." },
  { slug: "t3-svobodnyj", name: "Т3 свободный", categorySlug: "gormony", priceFrom: 520, duration: "1 календарный день", material: "Кровь венозная", code: "№ 26", shortDescription: "Гормон щитовидной железы." },
  { slug: "t4-svobodnyj", name: "Т4 свободный", categorySlug: "gormony", priceFrom: 520, duration: "1 календарный день", material: "Кровь венозная", code: "№ 27", shortDescription: "Гормон щитовидной железы." },
  { slug: "kortizol", name: "Кортизол", categorySlug: "gormony", priceFrom: 680, duration: "1–2 дня", material: "Кровь венозная", code: "№ 28", shortDescription: "Гормон надпочечников, стрессовый гормон." },
  { slug: "insulin", name: "Инсулин", categorySlug: "gormony", priceFrom: 720, duration: "1 календарный день", material: "Кровь венозная", code: "№ 29", shortDescription: "Оценка углеводного обмена и инсулинорезистентности." },
  { slug: "prolaktin", name: "Пролактин", categorySlug: "gormony", priceFrom: 580, duration: "1 календарный день", material: "Кровь венозная", code: "№ 30", shortDescription: "Гормон гипофиза." },
  { slug: "fsg", name: "ФСГ (фолликулостимулирующий гормон)", categorySlug: "gormony", priceFrom: 620, duration: "1 календарный день", material: "Кровь венозная", code: "№ 31", shortDescription: "Оценка репродуктивной функции." },
  // Иммунологические (6)
  { slug: "iga", name: "Иммуноглобулин A (IgA)", categorySlug: "immunologija", priceFrom: 650, duration: "1–2 дня", material: "Кровь венозная", code: "№ 32", shortDescription: "Антитела слизистых оболочек." },
  { slug: "igm", name: "Иммуноглобулин M (IgM)", categorySlug: "immunologija", priceFrom: 650, duration: "1–2 дня", material: "Кровь венозная", code: "№ 33", shortDescription: "Маркер острой фазы инфекции." },
  { slug: "igg", name: "Иммуноглобулин G (IgG)", categorySlug: "immunologija", priceFrom: 650, duration: "1–2 дня", material: "Кровь венозная", code: "№ 34", shortDescription: "Основной класс антител в крови." },
  { slug: "ige-obshhij", name: "Иммуноглобулин E общий", categorySlug: "immunologija", priceFrom: 580, duration: "1 календарный день", material: "Кровь венозная", code: "№ 35", shortDescription: "Маркер аллергических реакций." },
  { slug: "c-reaktivnyj-belok", name: "С-реактивный белок (СРБ)", categorySlug: "immunologija", priceFrom: 420, duration: "1 календарный день", material: "Кровь венозная", code: "№ 36", shortDescription: "Маркер воспаления." },
  { slug: "aslo", name: "АСЛ-О (антистрептолизин-О)", categorySlug: "immunologija", priceFrom: 480, duration: "1 календарный день", material: "Кровь венозная", code: "№ 37", shortDescription: "Маркер перенесённой стрептококковой инфекции." },
  // Аллергологические (5)
  { slug: "panel-pishhevye-allergeny", name: "Панель пищевые аллергены (IgE)", categorySlug: "allergologija", priceFrom: 4500, duration: "5–7 дней", material: "Кровь венозная", code: "№ 40", shortDescription: "Скрининг пищевой аллергии." },
  { slug: "panel-bytovye-allergeny", name: "Панель бытовые аллергены (IgE)", categorySlug: "allergologija", priceFrom: 3800, duration: "5–7 дней", material: "Кровь венозная", code: "№ 41", shortDescription: "Пыль, клещи, шерсть животных." },
  { slug: "panel-pylevye-allergeny", name: "Панель пыльцевые аллергены (IgE)", categorySlug: "allergologija", priceFrom: 4200, duration: "5–7 дней", material: "Кровь венозная", code: "№ 42", shortDescription: "Пыльца деревьев и трав." },
  { slug: "allergen-otdelnyj", name: "Определение специфического IgE (1 аллерген)", categorySlug: "allergologija", priceFrom: 650, duration: "3–5 дней", material: "Кровь венозная", code: "№ 43", shortDescription: "Количественное определение IgE к одному аллергену." },
  { slug: "eozinofilnyj-belok", name: "Эозинофильный катионный белок", categorySlug: "allergologija", priceFrom: 1200, duration: "3–5 дней", material: "Кровь венозная", code: "№ 44", shortDescription: "Маркер аллергического воспаления." },
  // Инфекции ПЦР, ИФА (20)
  { slug: "hbs-ag", name: "HBsAg (гепатит B, поверхностный антиген)", categorySlug: "infekcii", priceFrom: 580, duration: "1 календарный день", material: "Кровь венозная", code: "№ 50", shortDescription: "Скрининг гепатита B." },
  { slug: "anti-hcv", name: "Anti-HCV (антитела к гепатиту C)", categorySlug: "infekcii", priceFrom: 620, duration: "1 календарный день", material: "Кровь венозная", code: "№ 51", shortDescription: "Скрининг гепатита C." },
  { slug: "hiv-1-2", name: "ВИЧ 1 и 2 (антиген + антитела)", categorySlug: "infekcii", priceFrom: 450, duration: "1 календарный день", material: "Кровь венозная", code: "№ 52", shortDescription: "Скрининг ВИЧ-инфекции." },
  { slug: "sifilis-rpr", name: "Сифилис (RPR, антикардиолипиновый тест)", categorySlug: "infekcii", priceFrom: 420, duration: "1 календарный день", material: "Кровь венозная", code: "№ 53", shortDescription: "Скрининг сифилиса." },
  { slug: "pcr-covid-19", name: "ПЦР SARS-CoV-2 (COVID-19)", categorySlug: "infekcii", priceFrom: 2500, duration: "1–2 дня", material: "Мазок из ротоглотки", code: "№ 54", shortDescription: "Выявление РНК вируса." },
  { slug: "igg-covid-19", name: "IgG к SARS-CoV-2 (COVID-19)", categorySlug: "infekcii", priceFrom: 1200, duration: "1–2 дня", material: "Кровь венозная", code: "№ 55", shortDescription: "Антитела после перенесённой инфекции или вакцинации." },
  { slug: "pcr-ureaplasma", name: "ПЦР Ureaplasma species", categorySlug: "infekcii", priceFrom: 450, duration: "1–2 дня", material: "Соскоб/мазок", code: "№ 56", shortDescription: "Выявление ДНК уреаплазм." },
  { slug: "pcr-mikoplazma", name: "ПЦР Mycoplasma genitalium", categorySlug: "infekcii", priceFrom: 450, duration: "1–2 дня", material: "Соскоб/мазок", code: "№ 57", shortDescription: "Выявление ДНК микоплазмы." },
  { slug: "pcr-hlamidia", name: "ПЦР Chlamydia trachomatis", categorySlug: "infekcii", priceFrom: 450, duration: "1–2 дня", material: "Соскоб/мазок", code: "№ 58", shortDescription: "Выявление ДНК хламидий." },
  { slug: "pcr-gardnerella", name: "ПЦР Gardnerella vaginalis", categorySlug: "infekcii", priceFrom: 450, duration: "1–2 дня", material: "Соскоб/мазок", code: "№ 59", shortDescription: "Бактериальный вагиноз." },
  { slug: "pcr-gerpes-1-2", name: "ПЦР HSV 1/2 (герпес)", categorySlug: "infekcii", priceFrom: 450, duration: "1–2 дня", material: "Соскоб/кровь", code: "№ 60", shortDescription: "Выявление ДНК вируса простого герпеса." },
  { slug: "pcr-cmv", name: "ПЦР ЦМВ (цитомегаловирус)", categorySlug: "infekcii", priceFrom: 550, duration: "1–2 дня", material: "Кровь венозная/моча", code: "№ 61", shortDescription: "Выявление ДНК цитомегаловируса." },
  { slug: "pcr-ebv", name: "ПЦР ВЭБ (вирус Эпштейна–Барр)", categorySlug: "infekcii", priceFrom: 550, duration: "1–2 дня", material: "Кровь венозная", code: "№ 62", shortDescription: "Выявление ДНК вируса." },
  { slug: "pcr-toksoplazma", name: "ПЦР Toxoplasma gondii", categorySlug: "infekcii", priceFrom: 650, duration: "2–3 дня", material: "Кровь венозная", code: "№ 63", shortDescription: "Токсоплазмоз." },
  { slug: "ifa-toksoplazma-igg-igm", name: "ИФА Toxoplasma gondii (IgG, IgM)", categorySlug: "infekcii", priceFrom: 850, duration: "1–2 дня", material: "Кровь венозная", code: "№ 64", shortDescription: "Антитела к токсоплазме." },
  { slug: "ifa-cmv-igg-igm", name: "ИФА ЦМВ (IgG, IgM)", categorySlug: "infekcii", priceFrom: 850, duration: "1–2 дня", material: "Кровь венозная", code: "№ 65", shortDescription: "Антитела к цитомегаловирусу." },
  { slug: "ifa-hlamidia-iga-igg", name: "ИФА Chlamydia trachomatis (IgA, IgG)", categorySlug: "infekcii", priceFrom: 720, duration: "1–2 дня", material: "Кровь венозная", code: "№ 66", shortDescription: "Антитела к хламидиям." },
  { slug: "ifa-gerpes-1-2-igg-igm", name: "ИФА HSV 1/2 (IgG, IgM)", categorySlug: "infekcii", priceFrom: 950, duration: "1–2 дня", material: "Кровь венозная", code: "№ 67", shortDescription: "Антитела к вирусу герпеса." },
  { slug: "ifa-lamblia", name: "ИФА Giardia lamblia (лямблии)", categorySlug: "infekcii", priceFrom: 680, duration: "1–2 дня", material: "Кровь венозная", code: "№ 68", shortDescription: "Антитела к лямблиям." },
  { slug: "ifa-opistorhoz", name: "ИФА Opisthorchis (описторхоз)", categorySlug: "infekcii", priceFrom: 620, duration: "1–2 дня", material: "Кровь венозная", code: "№ 69", shortDescription: "Антитела к описторхам." },
  // Онкомаркёры (7)
  { slug: "psa-obshhij", name: "ПСА общий", categorySlug: "onkomarkery", priceFrom: 950, duration: "1 календарный день", material: "Кровь венозная", code: "№ 70", shortDescription: "Скрининг рака предстательной железы." },
  { slug: "psa-svobodnyj", name: "ПСА свободный", categorySlug: "onkomarkery", priceFrom: 950, duration: "1 календарный день", material: "Кровь венозная", code: "№ 71", shortDescription: "Уточнение при повышении общего ПСА." },
  { slug: "afp", name: "АФП (альфа-фетопротеин)", categorySlug: "onkomarkery", priceFrom: 720, duration: "1–2 дня", material: "Кровь венозная", code: "№ 72", shortDescription: "Маркер печени и герминогенных опухолей." },
  { slug: "rea", name: "РЭА (раково-эмбриональный антиген)", categorySlug: "onkomarkery", priceFrom: 780, duration: "1–2 дня", material: "Кровь венозная", code: "№ 73", shortDescription: "Маркер колоректального рака и др." },
  { slug: "ca-125", name: "CA 125", categorySlug: "onkomarkery", priceFrom: 850, duration: "1–2 дня", material: "Кровь венозная", code: "№ 74", shortDescription: "Маркер рака яичников." },
  { slug: "ca-19-9", name: "CA 19-9", categorySlug: "onkomarkery", priceFrom: 850, duration: "1–2 дня", material: "Кровь венозная", code: "№ 75", shortDescription: "Маркер рака поджелудочной железы и ЖКТ." },
  { slug: "he4", name: "HE4 (белок 4 эпидидимиса человека)", categorySlug: "onkomarkery", priceFrom: 1650, duration: "3–5 дней", material: "Кровь венозная", code: "№ 76", shortDescription: "Маркер рака яичников." },
  // Чек-апы (5)
  { slug: "check-up-bazovyj", name: "Чек-ап базовый", categorySlug: "check-up", priceFrom: 12000, duration: "1–2 дня", material: "Кровь венозная", shortDescription: "Комплекс: ОАК, биохимия, глюкоза, ТТГ, липидограмма." },
  { slug: "check-up-rasshirennyj", name: "Чек-ап расширенный", categorySlug: "check-up", priceFrom: 25000, duration: "2–3 дня", material: "Кровь венозная, моча", shortDescription: "Расширенное профилактическое обследование." },
  { slug: "check-up-zhenskij", name: "Чек-ап женский", categorySlug: "check-up", priceFrom: 18500, duration: "2–3 дня", material: "Кровь венозная", shortDescription: "Гормоны, липиды, ОАК, биохимия, онкомаркёры." },
  { slug: "check-up-muzhskoj", name: "Чек-ап мужской", categorySlug: "check-up", priceFrom: 17500, duration: "2–3 дня", material: "Кровь венозная", shortDescription: "ПСА, липиды, ОАК, биохимия, глюкоза." },
  { slug: "check-up-sport", name: "Чек-ап для спортсменов", categorySlug: "check-up", priceFrom: 22000, duration: "2–3 дня", material: "Кровь венозная", shortDescription: "Биохимия, гормоны, маркеры мышц и сердца." },
]

/** Категории с количеством анализов, посчитанным по ANALYZES */
export const CATEGORIES: Category[] = CATEGORY_BASE.map((cat) => ({
  ...cat,
  analysisCount: ANALYZES.filter((a) => a.categorySlug === cat.slug).length,
}))

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
