import { create } from "zustand"

export type ModalType = "record" | "callback" | "question" | null

type UIState = {
  modal: ModalType
  openModal: (type: ModalType) => void
  closeModal: () => void
  searchQuery: string
  setSearchQuery: (q: string) => void
}

export const useUIStore = create<UIState>((set) => ({
  modal: null,
  openModal: (type) => set({ modal: type }),
  closeModal: () => set({ modal: null }),
  searchQuery: "",
  setSearchQuery: (q) => set({ searchQuery: q }),
}))
