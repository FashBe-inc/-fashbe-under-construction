"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Check if we're on a touch device
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check if device is touch-capable
    const isTouchCapable =
      "ontouchstart" in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0

    setIsTouchDevice(isTouchCapable)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>FashBe - Coming Soon</title>
        <meta name="description" content="Where the Fashion & Beauty Pack Hangs out" />
      </head>
      <body className={inter.className}>
        {children}
        {!isTouchDevice && <CustomCursor />}
      </body>
    </html>
  )
}

