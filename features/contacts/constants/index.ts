import type { ContactPhone, ContactMessenger, Requisites } from "@/features/contacts/types"
import { TelegramIcon } from "@/components/icons/TelegramIcon"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

export const CONTACT_PHONES: ContactPhone[] = [
  { label: "Единый номер", value: "+7 (777) 777-77-77", href: "tel:+77777777777" },
  { label: "Справочная", value: "+7 (727) 123-45-67", href: "tel:+77271234567" },
]

export const CONTACT_EMAIL = "info@thelper.kz"

export const CONTACT_MESSENGERS: ContactMessenger[] = [
  { label: "Telegram", href: "https://t.me/thelper_lab", Icon: TelegramIcon },
  { label: "WhatsApp", href: "https://wa.me/77777777777", Icon: WhatsAppIcon },
]

export const CONTACT_ADDRESS = "г. Алматы, ул. Примерная, 1"

export const REQUISITES: Requisites = {
  name: "ТОО «T-Helper»",
  bin: "123456789012",
  iik: "KZ123456789012345678",
  bank: "АО «Банк»",
  bik: "123456789",
  address: "г. Алматы, ул. Примерная, 1",
  phone: "+7 (777) 777-77-77",
  email: "b2b@thelper.kz",
}
