import type { Category, Subcategory, Analyze, AnalyzeDetail } from "@/features/services/types"

const CATEGORY_BASE: Omit<Category, "analysisCount">[] = [
  { slug: "biokhimija", name: "Биохимия крови", description: "Глюкоза, АЛТ/АСТ, креатинин, холестерин, гликированный гемоглобин, C-реактивный белок.", isCheckup: false },
  { slug: "gormony", name: "Гормоны", description: "Репродуктивные гормоны, щитовидная железа.", isCheckup: false },
  { slug: "gematologija", name: "Общие анализы", description: "ОАК, ОАМ, коагулограмма, группа крови.", isCheckup: false },
  { slug: "immunologija", name: "Иммунологические исследования", description: "Иммунограмма и оценка иммунного статуса.", isCheckup: false },
  { slug: "infekcii", name: "Инфекции и ИППП", description: "Хламидии, вирусные инфекции, гепатиты, паразиты.", isCheckup: false },
  { slug: "onkomarkery", name: "Онкомаркёры", description: "ПСА, СА-125, АФП, РЭА, СА 72-4, NSE, ферритин.", isCheckup: false },
  { slug: "dopolnitelno", name: "Дополнительно", description: "Забор крови и др.", isCheckup: false },
]

export const SUBCATEGORIES: Subcategory[] = [
  { slug: "hlamidii", name: "Хламидии", categorySlug: "infekcii" },
  { slug: "drugie-urogenitalnye", name: "Другие урогенитальные инфекции", categorySlug: "infekcii" },
  { slug: "virusnye-infekcii", name: "Вирусные инфекции", categorySlug: "infekcii" },
  { slug: "virusnye-gepatity", name: "Вирусные гепатиты", categorySlug: "infekcii" },
  { slug: "parazitarnye", name: "Паразитарные инфекции", categorySlug: "infekcii" },
  { slug: "reproduktivnye", name: "Репродуктивные гормоны", categorySlug: "gormony" },
  { slug: "shhitovidnaja", name: "Щитовидная железа", categorySlug: "gormony" },
]

export const SUBGROUP_DISPLAY_NAMES: Record<string, Record<string, string>> = {
  hlamidii: {
    "chlamydia-trachomatis": "Chlamydia trachomatis",
    "chlamydia-pneumoniae": "Chlamydia pneumoniae",
    "chlamydia-psittaci": "Chlamydia psittaci",
  },
  "drugie-urogenitalnye": {
    "trihomonada-gardnerella-mikoplazma": "Трихомонада, Гарднерелла, Микоплазма hominis",
    "mikoplazma-pneumoniae": "Микоплазма pneumoniae",
    ureaplasma: "Уреаплазма",
    gonoreya: "Гонорея",
  },
  "virusnye-infekcii": {
    cmv: "Цитомегаловирус (CMV)",
    "vpg-1-2": "ВПГ 1/2 (Герпес)",
    veb: "Вирус Эпштейна-Барр (ВЭБ)",
    "varicella-zoster": "Варицелла-Зостер",
    "covid-19": "COVID-19",
  },
  "virusnye-gepatity": {
    "gepatit-a": "Гепатит A",
    "gepatit-b": "Гепатит B",
    "gepatit-c": "Гепатит C",
    "gepatit-d-e": "Гепатит D / E",
  },
  parazitarnye: {
    parazity: "Паразиты (Токсоплазма, Лямблии, Аскарида, Эхинококк, Описторхи, Токсокара и др.)",
  },
  reproduktivnye: {
    "lh-fsg-prolaktin-testosteron": "ЛГ / ФСГ / Пролактин / Тестостерон",
    estradiol: "Эстрадиол",
    amg: "АМГ",
  },
  shhitovidnaja: {
    ttg: "ТТГ",
    "t3-t4": "Т3 / Т4",
    "antitela-shhitovidnoj": "Антитела к щитовидной железе",
    trab: "TRAb",
  },
}

const DURATION_1 = "1 календарный день"
const DURATION_1_2 = "1–2 дня"
const MATERIAL_BLOOD = "Кровь венозная"
const MATERIAL_URINE = "Моча"

export const ANALYZES: Analyze[] = [
  // 🔬 Инфекции и ИППП — Хламидии
  { slug: "chlamydia-trachomatis-igg", name: "Chlamydia trachomatis IgG", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-iga", name: "Chlamydia trachomatis IgA", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-igm", name: "Chlamydia trachomatis IgM", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-avidnost", name: "Chlamydia trachomatis Авидность", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-cik", name: "Chlamydia trachomatis ЦИК", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-sp-ige", name: "Chlamydia trachomatis Sp.IgE", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-trachomatis-affinnost", name: "Chlamydia trachomatis Аффинность", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-trachomatis", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Chlamydia pneumoniae
  { slug: "chlamydia-pneumoniae-igg-iga-igm", name: "Chlamydia pneumoniae IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-pneumoniae", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-pneumoniae-avidnost", name: "Chlamydia pneumoniae Авидность", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-pneumoniae", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-pneumoniae-cik", name: "Chlamydia pneumoniae ЦИК", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-pneumoniae", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Chlamydia psittaci
  { slug: "chlamydia-psittaci-igg", name: "Chlamydia psittaci IgG", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-psittaci", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-psittaci-avidnost", name: "Chlamydia psittaci Авидность", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-psittaci", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "chlamydia-psittaci-cik", name: "Chlamydia psittaci ЦИК", categorySlug: "infekcii", subcategorySlug: "hlamidii", groupKey: "chlamydia-psittaci", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Другие урогенитальные — Трихомонада, Гарднерелла, Микоплазма hominis
  { slug: "trihomonada-gardnerella-mikoplazma-igg-iga-igm", name: "Трихомонада, Гарднерелла, Микоплазма hominis IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "trihomonada-gardnerella-mikoplazma", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "trihomonada-gardnerella-mikoplazma-avidnost", name: "Трихомонада, Гарднерелла, Микоплазма hominis Авидность", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "trihomonada-gardnerella-mikoplazma", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "trihomonada-gardnerella-mikoplazma-cik", name: "Трихомонада, Гарднерелла, Микоплазма hominis ЦИК", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "trihomonada-gardnerella-mikoplazma", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "trihomonada-gardnerella-mikoplazma-sp-ige", name: "Трихомонада, Гарднерелла, Микоплазма hominis Sp.IgE", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "trihomonada-gardnerella-mikoplazma", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "trihomonada-gardnerella-mikoplazma-affinnost", name: "Трихомонада, Гарднерелла, Микоплазма hominis Аффинность", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "trihomonada-gardnerella-mikoplazma", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Микоплазма pneumoniae
  { slug: "mikoplazma-pneumoniae-igg-iga-igm", name: "Микоплазма pneumoniae IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "mikoplazma-pneumoniae", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "mikoplazma-pneumoniae-avidnost", name: "Микоплазма pneumoniae Авидность", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "mikoplazma-pneumoniae", priceFrom: 2800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "mikoplazma-pneumoniae-cik", name: "Микоплазма pneumoniae ЦИК", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "mikoplazma-pneumoniae", priceFrom: 3200, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Уреаплазма
  { slug: "ureaplasma-igg-iga-igm", name: "Уреаплазма IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "ureaplasma", priceFrom: 1400, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "ureaplasma-avidnost", name: "Уреаплазма Авидность", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "ureaplasma", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "ureaplasma-cik", name: "Уреаплазма ЦИК", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "ureaplasma", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Гонорея
  { slug: "gonoreya-igg", name: "Гонорея IgG", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "gonoreya", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "gonoreya-avidnost", name: "Гонорея Авидность", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "gonoreya", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "gonoreya-cik", name: "Гонорея ЦИК", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "gonoreya", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "gonoreya-sp-ige", name: "Гонорея Sp.IgE", categorySlug: "infekcii", subcategorySlug: "drugie-urogenitalnye", groupKey: "gonoreya", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // 🦠 Вирусные инфекции — Цитомегаловирус (CMV)
  { slug: "cmv-igg-iga-igm", name: "Цитомегаловирус (CMV) IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "cmv", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "cmv-sp-ige", name: "Цитомегаловирус (CMV) Sp.IgE", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "cmv", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "cmv-avidnost", name: "Цитомегаловирус (CMV) Авидность", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "cmv", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "cmv-cik", name: "Цитомегаловирус (CMV) ЦИК", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "cmv", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // ВПГ 1/2 (Герпес)
  { slug: "vpg-1-2-igg-igm", name: "ВПГ 1/2 (Герпес) IgG / IgM", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "vpg-1-2", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "vpg-1-2-sp-ige", name: "ВПГ 1/2 (Герпес) Sp.IgE", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "vpg-1-2", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "vpg-1-2-avidnost", name: "ВПГ 1/2 (Герпес) Авидность", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "vpg-1-2", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Вирус Эпштейна-Барр (ВЭБ)
  { slug: "veb-vca-igg-igm", name: "ВЭБ VCA IgG / IgM", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "veb", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "veb-ea-igg", name: "ВЭБ EA IgG", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "veb", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "veb-na-igg", name: "ВЭБ NA IgG", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "veb", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "veb-avidnost", name: "ВЭБ Авидность", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "veb", priceFrom: 5000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "veb-cik", name: "ВЭБ ЦИК", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "veb", priceFrom: 5500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // Варицелла-Зостер, COVID-19
  { slug: "varicella-zoster-igg-igm", name: "Варицелла-Зостер IgG / IgM", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "varicella-zoster", priceFrom: 3000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "covid-19-igg-igm-iga", name: "COVID-19 IgG / IgM / IgA", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "covid-19", priceFrom: 3000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "covid-19-igg-avidnost", name: "COVID-19 IgG (авидность)", categorySlug: "infekcii", subcategorySlug: "virusnye-infekcii", groupKey: "covid-19", priceFrom: 6000, duration: "3–5 дней", material: MATERIAL_BLOOD },
  // 🧬 Вирусные гепатиты
  { slug: "gepatit-a-igm", name: "Гепатит A (IgM)", categorySlug: "infekcii", subcategorySlug: "virusnye-gepatity", groupKey: "gepatit-a", priceFrom: 2500, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "gepatit-b-hbsag", name: "Гепатит B HBsAg", categorySlug: "infekcii", subcategorySlug: "virusnye-gepatity", groupKey: "gepatit-b", priceFrom: 1800, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "gepatit-b-antitela", name: "Гепатит B Антитела", categorySlug: "infekcii", subcategorySlug: "virusnye-gepatity", groupKey: "gepatit-b", priceFrom: 2000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "gepatit-c-at-core-ns", name: "Гепатит C AT / Core / NS", categorySlug: "infekcii", subcategorySlug: "virusnye-gepatity", groupKey: "gepatit-c", priceFrom: 1800, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "gepatit-d-e-igg-igm", name: "Гепатит D / E IgG / IgM", categorySlug: "infekcii", subcategorySlug: "virusnye-gepatity", groupKey: "gepatit-d-e", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // 🧫 Паразитарные инфекции
  { slug: "parazity-igg-iga-igm", name: "Паразиты (Токсоплазма, Лямблии, Аскарида, Эхинококк, Описторхи, Токсокара и др.) IgG / IgA / IgM", categorySlug: "infekcii", subcategorySlug: "parazitarnye", groupKey: "parazity", priceFrom: 1800, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "parazity-avidnost", name: "Паразиты Авидность", categorySlug: "infekcii", subcategorySlug: "parazitarnye", groupKey: "parazity", priceFrom: 3600, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "parazity-cik", name: "Паразиты ЦИК", categorySlug: "infekcii", subcategorySlug: "parazitarnye", groupKey: "parazity", priceFrom: 3400, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "parazity-sp-ige", name: "Паразиты Sp.IgE", categorySlug: "infekcii", subcategorySlug: "parazitarnye", groupKey: "parazity", priceFrom: 1200, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // 🧪 Гормоны — Репродуктивные
  { slug: "lh-fsg-prolaktin-testosteron", name: "ЛГ / ФСГ / Пролактин / Тестостерон", categorySlug: "gormony", subcategorySlug: "reproduktivnye", groupKey: "lh-fsg-prolaktin-testosteron", priceFrom: 2000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "estradiol", name: "Эстрадиол", categorySlug: "gormony", subcategorySlug: "reproduktivnye", groupKey: "estradiol", priceFrom: 3000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "amg", name: "АМГ", categorySlug: "gormony", subcategorySlug: "reproduktivnye", groupKey: "amg", priceFrom: 8000, duration: "3–5 дней", material: MATERIAL_BLOOD },
  // Щитовидная железа
  { slug: "ttg", name: "ТТГ", categorySlug: "gormony", subcategorySlug: "shhitovidnaja", groupKey: "ttg", priceFrom: 1800, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "t3-t4", name: "Т3 / Т4", categorySlug: "gormony", subcategorySlug: "shhitovidnaja", groupKey: "t3-t4", priceFrom: 1600, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "antitela-shhitovidnoj", name: "Антитела к щитовидной железе", categorySlug: "gormony", subcategorySlug: "shhitovidnaja", groupKey: "antitela-shhitovidnoj", priceFrom: 2000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "trab", name: "TRAb", categorySlug: "gormony", subcategorySlug: "shhitovidnaja", groupKey: "trab", priceFrom: 8000, duration: "5–7 дней", material: MATERIAL_BLOOD },
  // 🧬 Онкомаркеры
  { slug: "psa", name: "ПСА", categorySlug: "onkomarkery", priceFrom: 2500, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "ca-125", name: "СА-125", categorySlug: "onkomarkery", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "afp", name: "АФП", categorySlug: "onkomarkery", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "rea", name: "РЭА", categorySlug: "onkomarkery", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "ca-72-4", name: "СА 72-4", categorySlug: "onkomarkery", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "nse", name: "NSE", categorySlug: "onkomarkery", priceFrom: 4000, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  { slug: "ferritin", name: "Ферритин", categorySlug: "onkomarkery", priceFrom: 2500, duration: DURATION_1_2, material: MATERIAL_BLOOD },
  // 🩺 Биохимия крови
  { slug: "glukoza", name: "Глюкоза", categorySlug: "biokhimija", priceFrom: 1000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "alt-ast", name: "АЛТ / АСТ", categorySlug: "biokhimija", priceFrom: 1000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "kreatinin", name: "Креатинин", categorySlug: "biokhimija", priceFrom: 1000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "holesterin", name: "Холестерин", categorySlug: "biokhimija", priceFrom: 1000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "lpvp-lpnp", name: "ЛПВП / ЛПНП", categorySlug: "biokhimija", priceFrom: 1200, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "glikirovannyj-gemoglobin", name: "Гликированный гемоглобин", categorySlug: "biokhimija", priceFrom: 5000, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "c-reaktivnyj-belok", name: "C-реактивный белок", categorySlug: "biokhimija", priceFrom: 1700, duration: DURATION_1, material: MATERIAL_BLOOD },
  // 🧾 Общие анализы
  { slug: "oak", name: "ОАК", categorySlug: "gematologija", priceFrom: 1800, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "oam", name: "ОАМ", categorySlug: "gematologija", priceFrom: 1500, duration: DURATION_1, material: MATERIAL_URINE },
  { slug: "koagulogramma", name: "Коагулограмма", categorySlug: "gematologija", priceFrom: 3500, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "gruppa-krovi", name: "Группа крови", categorySlug: "gematologija", priceFrom: 1100, duration: DURATION_1, material: MATERIAL_BLOOD },
  { slug: "immunogramma", name: "Иммунограмма", categorySlug: "immunologija", priceFrom: 40000, duration: "5–7 дней", material: MATERIAL_BLOOD },
  // 🧷 Дополнительно
  { slug: "zabor-krovi", name: "Забор крови", categorySlug: "dopolnitelno", priceFrom: 500, duration: DURATION_1, material: MATERIAL_BLOOD },
]

export const CATEGORIES: Category[] = CATEGORY_BASE.map((cat) => ({
  ...cat,
  analysisCount: ANALYZES.filter((a) => a.categorySlug === cat.slug).length,
}))

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug)
}

export function getSubcategoriesByCategory(categorySlug: string): Subcategory[] {
  return SUBCATEGORIES.filter((s) => s.categorySlug === categorySlug)
}

export function getSubcategoryBySlug(slug: string): Subcategory | undefined {
  return SUBCATEGORIES.find((s) => s.slug === slug)
}

export function getSubgroupDisplayName(subcategorySlug: string, groupKey: string): string {
  return SUBGROUP_DISPLAY_NAMES[subcategorySlug]?.[groupKey] ?? groupKey
}

export function getAnalyzesGroupedBySubcategory(categorySlug: string): {
  subcategory: Subcategory
  groups: { groupKey: string; groupName: string; analyzes: Analyze[] }[]
}[] {
  const subcategories = getSubcategoriesByCategory(categorySlug)
  if (subcategories.length === 0) return []

  const analyzes = getAnalyzesByCategory(categorySlug)
  return subcategories.map((sub) => {
    const subAnalyzes = analyzes.filter((a) => a.subcategorySlug === sub.slug)
    const groupKeys = [...new Set(subAnalyzes.map((a) => a.groupKey).filter(Boolean))] as string[]
    const groups = groupKeys.map((groupKey) => ({
      groupKey,
      groupName: getSubgroupDisplayName(sub.slug, groupKey),
      analyzes: subAnalyzes.filter((a) => a.groupKey === groupKey),
    }))
    return { subcategory: sub, groups }
  })
}

export function getAnalyzesBySubcategory(subcategorySlug: string): Analyze[] {
  return ANALYZES.filter((a) => a.subcategorySlug === subcategorySlug)
}

export function getAnalyzesByGroup(subcategorySlug: string, groupKey: string): Analyze[] {
  return ANALYZES.filter(
    (a) => a.subcategorySlug === subcategorySlug && a.groupKey === groupKey
  )
}

export function getCategoryTree(): {
  slug: string
  name: string
  analysisCount: number
  subcategories?: {
    slug: string
    name: string
    count: number
    groups: { key: string; name: string; count: number }[]
  }[]
}[] {
  return CATEGORIES.map((cat) => {
    const subcats = getSubcategoriesByCategory(cat.slug)
    if (subcats.length === 0) {
      return { slug: cat.slug, name: cat.name, analysisCount: cat.analysisCount }
    }
    const subcategories = subcats.map((sub) => {
      const groupsData = getGroupsForSubcategory(sub.slug)
      const groups = groupsData.map((g) => ({
        key: g.groupKey,
        name: g.groupName,
        count: g.analyzes.length,
      }))
      const count = groupsData.reduce((acc, g) => acc + g.analyzes.length, 0)
      return { slug: sub.slug, name: sub.name, count, groups }
    })
    return {
      slug: cat.slug,
      name: cat.name,
      analysisCount: cat.analysisCount,
      subcategories,
    }
  })
}

export function getGroupsForSubcategory(subcategorySlug: string): {
  groupKey: string
  groupName: string
  analyzes: Analyze[]
}[] {
  const sub = getSubcategoryBySlug(subcategorySlug)
  if (!sub) return []
  const analyzes = getAnalyzesBySubcategory(subcategorySlug)
  const groupKeys = [...new Set(analyzes.map((a) => a.groupKey).filter(Boolean))] as string[]
  return groupKeys.map((groupKey) => ({
    groupKey,
    groupName: getSubgroupDisplayName(subcategorySlug, groupKey),
    analyzes: analyzes.filter((a) => a.groupKey === groupKey),
  }))
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
  "glukoza": {
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
