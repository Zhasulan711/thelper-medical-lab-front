import { getCategoryTree } from "@/features/services/constants"
import { ServicesSidebar } from "@/features/services/components/ServicesSidebar"

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categoryTree = getCategoryTree()

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 px-4 py-6 md:gap-8 md:py-8 lg:flex-row lg:gap-8">
      <aside className="sticky top-6 z-10 h-fit max-h-[calc(100vh-3rem)] shrink-0 overflow-y-auto order-1 lg:w-72">
        <ServicesSidebar categoryTree={categoryTree} />
      </aside>
      <div className="min-w-0 flex-1 overflow-x-hidden order-2">{children}</div>
    </div>
  )
}
