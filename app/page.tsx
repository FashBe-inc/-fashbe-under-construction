import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FloatingShapes from "@/components/floating-shapes"
import CountdownTimer from "@/components/countdown-timer"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background shapes */}
      <FloatingShapes />

      <div className="container max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 flex flex-col items-center lg:items-start">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-42uKY2mD0YnTH01t5BkbD0aPBxfLxl.svg"
                alt="FashBe"
                width={180}
                height={48}
                priority
                className="h-12 w-auto"
              />
            </div>

            <p className="text-xl text-gray-400 mb-8 max-w-xl text-center lg:text-left">
              Join us and explore our world. Coming soon to iOS and Android.
            </p>

            {/* Countdown timer */}
            <div className="mb-12 w-full">
              <CountdownTimer targetDate="2025-05-31" />
            </div>

            {/* Email signup */}
            <div className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 bg-white/10 border-gray-800 focus:border-yellow-400"
                  />
                </div>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">Get Notified</Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Be the first to know when we launch. No spam, ever.</p>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[400px] animate-gentle-bounce">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-[32px] blur-2xl transform rotate-6" />

              {/* Phone mockup */}
              <div className="relative transform rotate-6 hover:rotate-8 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fb-preview-Vb2E11Dd9VDAlJToI29i3oqJLvcr3x.png"
                  alt="FashBe App Preview"
                  width={400}
                  height={800}
                  className="rounded-[32px] shadow-2xl"
                  priority
                />

                {/* Reflection effect */}
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-transparent via-transparent to-black/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

