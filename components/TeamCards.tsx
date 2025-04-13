"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TeamCards() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're at the team-cards anchor
    const hash = window.location.hash
    if (hash === '#team-cards') {
      setIsVisible(true)
    }
  }, [])

  if (!isVisible) return null

  return (
    <section id="team-cards" className="py-32 md:py-40 bg-white relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
            Digital Business Cards
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#444444] mb-10">
            Connect with Us
          </h2>
          <div className="w-20 h-px bg-[#EDC87C] mx-auto mb-10"></div>
          <p className="text-lg text-[#4B5563] font-light max-w-3xl mx-auto leading-relaxed">
            Download our contact information directly to your device.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Kiley's Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image
                  src="/team/kiley.jpg"
                  alt="Kiley Neushul"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#444444] mb-2">Kiley Neushul</h3>
              <p className="text-sm text-[#4B5563] mb-4">Co-Founder & VP</p>
              <div className="flex space-x-4">
                <a
                  href="/vcards/kiley.vcf"
                  download
                  className="inline-flex items-center px-4 py-2 border border-[#EDC87C] text-[#444444] hover:bg-[#EDC87C] hover:text-white transition-colors"
                >
                  Download Card
                </a>
              </div>
            </div>
          </motion.div>

          {/* Gabriel's Card */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden">
                <Image
                  src="/team/gabriel.jpg"
                  alt="Gabriel Hernan-Paz"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-serif text-[#444444] mb-2">Gabriel Hernan-Paz</h3>
              <p className="text-sm text-[#4B5563] mb-4">Co-Founder & CEO</p>
              <div className="flex space-x-4">
                <a
                  href="/vcards/gabriel.vcf"
                  download
                  className="inline-flex items-center px-4 py-2 border border-[#EDC87C] text-[#444444] hover:bg-[#EDC87C] hover:text-white transition-colors"
                >
                  Download Card
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 