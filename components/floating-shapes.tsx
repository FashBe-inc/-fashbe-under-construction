"use client"

import { useEffect, useRef } from "react"

const shapes = [
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-1-WmUI0vGn7rbWbA3uKMBgUC5UGxZ5ga.svg",
    width: 71,
    height: 94,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-2-fozPQVjW38le1SBin4ciu00MdejMid.svg",
    width: 111,
    height: 53,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-3-5O1tcRBbpAA55KfTFaJiy65Qs9fxSP.svg",
    width: 80,
    height: 80,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-4-kAuJh8iwUGtv2GNMv99Fi0cgr2Ovjv.svg",
    width: 45,
    height: 43,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-5-KB0E4ENNYB9eZCldxt6SCByRfTggEP.svg",
    width: 70,
    height: 67,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-6-qlQcRu9AlzXXB7aBTc0w14eFNyj3pu.svg",
    width: 28,
    height: 29,
  },
  {
    url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shape-7-axkLl4N0iEuS4j81oJS4jjJ08wfcQx.svg",
    width: 31,
    height: 29,
  },
]

export default function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create and position shapes
    shapes.forEach((shape, index) => {
      const img = document.createElement("img")
      img.src = shape.url
      img.alt = ""
      img.style.position = "absolute"
      img.style.width = `${shape.width}px`
      img.style.height = `${shape.height}px`
      img.style.opacity = "0.5"
      img.style.transition = "transform 20s ease-in-out"

      // Random initial position
      const left = Math.random() * (container.offsetWidth - shape.width)
      const top = Math.random() * (container.offsetHeight - shape.height)
      img.style.left = `${left}px`
      img.style.top = `${top}px`

      container.appendChild(img)

      // Animate position
      const animate = () => {
        const newLeft = Math.random() * (container.offsetWidth - shape.width)
        const newTop = Math.random() * (container.offsetHeight - shape.height)
        img.style.transform = `translate(${newLeft - left}px, ${newTop - top}px)`

        setTimeout(animate, 20000)
      }

      // Start animation with delay based on index
      setTimeout(animate, index * 1000)
    })

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true" />
}

