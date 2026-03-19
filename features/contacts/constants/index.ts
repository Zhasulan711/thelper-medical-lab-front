import type { ContactPhone, ContactMessenger, Requisites } from "@/features/contacts/types"
import { TelegramIcon } from "@/components/icons/TelegramIcon"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

export const CONTACT_PHONES: ContactPhone[] = [
  { label: "Единый номер", value: "+7 (777) 276-40-40", href: "https://wa.me/77772764040" },
  { label: "Дополнительный номер", value: "+7 (705) 149-82-24", href: "https://wa.me/77051498224" },
]

export const CONTACT_EMAIL = "info@thelper.kz"

export const CONTACT_MESSENGERS: ContactMessenger[] = [
  { label: "Telegram", href: "https://t.me/thelper_lab", Icon: TelegramIcon },
  { label: "WhatsApp", href: "https://wa.me/77772764040", Icon: WhatsAppIcon },
]

export const CONTACT_ADDRESS = "050052, г. Алматы, Ауэзовский район, м-н Атамекен, ул. Аманжол, 28"

export const REQUISITES: Requisites = {
  name: "ТОО «ОМИКРОН 3Д»",
  bin: "191140005638",
  iik: "KZ123456789012345678",
  bank: "АО «Банк»",
  bik: "123456789",
  address: "050000, г. Алматы, Ауэзовский район, мкр. Таугуль, ул. Аманжол, д. 24",
  phone: "+7 (777) 276-40-40",
  email: "b2b@thelper.kz",
}
