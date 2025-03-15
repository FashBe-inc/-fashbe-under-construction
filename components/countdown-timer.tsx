"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex justify-between max-w-md mx-auto lg:mx-0">
      <div className="text-center px-2">
        <div className="bg-black/50 border border-yellow-400/30 rounded-md px-3 py-2 mb-2">
          <div className="text-6xl md:text-8xl font-mono tracking-tight text-yellow-400 tabular-nums">
            {days.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="text-gray-400 text-lg md:text-xl">Days</div>
      </div>
      <div className="text-center px-2 relative">
        <div className="bg-black/50 border border-yellow-400/30 rounded-md px-3 py-2 mb-2">
          <div className="text-6xl md:text-8xl font-mono tracking-tight text-yellow-400 tabular-nums">
            {hours.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="text-gray-400 text-lg md:text-xl">Hours</div>
        <span className="absolute top-1/4 -right-2 text-5xl md:text-7xl text-yellow-400 opacity-50">:</span>
      </div>
      <div className="text-center px-2 relative">
        <div className="bg-black/50 border border-yellow-400/30 rounded-md px-3 py-2 mb-2">
          <div className="text-6xl md:text-8xl font-mono tracking-tight text-yellow-400 tabular-nums">
            {minutes.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="text-gray-400 text-lg md:text-xl">Minutes</div>
        <span className="absolute top-1/4 -right-2 text-5xl md:text-7xl text-yellow-400 opacity-50">:</span>
      </div>
      <div className="text-center px-2">
        <div className="bg-black/50 border border-yellow-400/30 rounded-md px-3 py-2 mb-2">
          <div className="text-6xl md:text-8xl font-mono tracking-tight text-yellow-400 tabular-nums">
            {seconds.toString().padStart(2, "0")}
          </div>
        </div>
        <div className="text-gray-400 text-lg md:text-xl">Seconds</div>
      </div>
    </div>
  )
}

