import type { StaticImageData } from "next/image"
import fixedPhoto1 from "@/assets/images/fixed-photo-1.png"
import fixedPhoto2 from "@/assets/images/fixed-photo-2.png"
import fixedPhoto3 from "@/assets/images/fixed-photo-3.png"
import fixedPhoto4 from "@/assets/images/fixed-photo-4.png"
import fixedPhoto5 from "@/assets/images/fixed-photo-5.png"
import fixedPhoto6 from "@/assets/images/fixed-photo-6.jpg"

export type TeamMember = {
  image: StaticImageData
  name: string
  role: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  { image: fixedPhoto1, name: "Сотрудник лаборатории", role: "Медперсонал" },
  { image: fixedPhoto2, name: "Сотрудник лаборатории", role: "Медперсонал" },
  { image: fixedPhoto3, name: "Сотрудник лаборатории", role: "Медперсонал" },
  { image: fixedPhoto4, name: "Сотрудник лаборатории", role: "Медперсонал" },
  { image: fixedPhoto5, name: "Сотрудник лаборатории", role: "Медперсонал" },
  { image: fixedPhoto6, name: "Сотрудник лаборатории", role: "Медперсонал" },
]
