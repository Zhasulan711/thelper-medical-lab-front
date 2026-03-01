"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2 } from "lucide-react"

type LocationImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  sizes?: string
}

export function LocationImage({ src, alt, className, fill, sizes }: LocationImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-muted text-muted-foreground ${fill ? "absolute inset-0" : ""} ${className ?? ""}`}
        aria-hidden
      >
        <span className="flex flex-col items-center gap-2 text-sm">
          <Building2 className="size-10" />
          <span className="px-2 text-center">Фото филиала</span>
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes}
      className={className}
      onError={() => setFailed(true)}
      unoptimized={src.startsWith("http")}
    />
  )
}
