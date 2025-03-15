"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setMessage("Thank you for subscribing! We'll notify you when we launch.")
      setEmail("")
      setIsSubmitting(false)
    }, 1000)

    // In a real implementation, you would send the email to your API
    // const response = await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email }),
    // });
    // const data = await response.json();
    // setMessage(data.message);
    // setIsSubmitting(false);
  }

  return (
    <div className="max-w-md">
      <form onSubmit={handleSubmit} className="relative mb-4">
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full py-5 pl-12 pr-4 bg-transparent border border-gray-600 rounded-md focus:border-blue-600 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-md transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe for Updates"}
        </button>
      </form>

      {message && <div className="text-green-400 mb-4">{message}</div>}

      <div className="flex items-center mt-4">
        <a href="#" className="text-blue-600 hover:text-white transition-colors flex items-center">
          About Us <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  )
}

