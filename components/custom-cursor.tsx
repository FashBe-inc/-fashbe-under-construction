"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 }) // Start off-screen
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners for interactive elements
    const addInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, [role="button"], .interactive')

      const handleElementHover = () => setIsHovering(true)
      const handleElementLeave = () => setIsHovering(false)

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", handleElementHover)
        element.addEventListener("mouseleave", handleElementLeave)
      })

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener("mouseenter", handleElementHover)
          element.removeEventListener("mouseleave", handleElementLeave)
        })
      }
    }

    // Add global mouse event listeners
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Hide default cursor
    document.documentElement.style.cursor = "none"
    document.body.style.cursor = "none"

    // Add interactive element listeners
    const cleanupInteractive = addInteractiveListeners()

    // Cleanup function
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.style.cursor = ""
      document.body.style.cursor = ""
      cleanupInteractive()
    }
  }, [])

  // Don't render during SSR
  if (!isMounted) return null

  return (
    <>
      {/* Outer cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.15s ease-out, width 0.2s, height 0.2s",
          width: isHovering ? "50px" : "40px",
          height: isHovering ? "50px" : "40px",
          marginLeft: isHovering ? "-25px" : "-20px",
          marginTop: isHovering ? "-25px" : "-20px",
        }}
      >
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            isClicking ? "border-yellow-500 scale-75" : "border-yellow-400"
          } ${isHovering ? "bg-yellow-400/20" : ""}`}
          style={{
            transition: "all 0.2s ease-out",
          }}
        />
      </div>

      {/* Inner cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.05s ease-out",
          marginLeft: "-4px",
          marginTop: "-4px",
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-yellow-400 ${isClicking ? "scale-150 opacity-100" : "opacity-80"}`}
          style={{
            boxShadow: "0 0 10px rgba(253, 221, 0, 0.5)",
            transition: "all 0.2s ease-out",
          }}
        />
      </div>
    </>
  )
}

