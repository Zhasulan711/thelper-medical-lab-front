import { getCategoryTree } from "@/features/services/constants"
import { ServicesSidebar } from "@/features/services/components/ServicesSidebar"

export default async function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categoryTree = getCategoryTree()

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 py-6 md:py-8 lg:flex-row lg:gap-8">
      <aside className="sticky top-6 h-fit max-h-[calc(100vh-3rem)] shrink-0 overflow-y-auto lg:w-72">
        <ServicesSidebar categoryTree={categoryTree} />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  )
}
