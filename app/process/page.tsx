"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ProcessPage() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-32 md:py-40 overflow-hidden pt-16">
          {/* Gradient background with parallax effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#93B1C7] via-[#93B1C7] to-[#F9F6F1] z-0"
            style={{ y }}
          />

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-paper-texture opacity-[0.08] z-0"></div>

          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-radial-gradient opacity-30 z-0"></div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 floating-particles-light z-0"></div>

          <div className="container relative z-10 max-w-4xl mx-auto px-4 text-center">
            <motion.div
              className="hero-text-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span
                className="text-xs uppercase tracking-[0.4em] text-[#EDC87C] mb-6 block font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                PERPETUA ATELIER
              </motion.span>

              <motion.h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm mb-6 group hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Our Process
                <span className="block w-0 h-[2px] bg-[#EDC87C] mx-auto mt-4 group-hover:w-40 transition-all duration-700"></span>
              </motion.h1>

              <motion.div
                className="w-20 h-px bg-[#EDC87C]/30 mx-auto mb-10"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>

              <motion.p
                className="text-lg text-[#FDFDFD] font-light tracking-wide max-w-3xl mx-auto leading-relaxed text-shadow-light hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Where advanced precision meets timeless standards.
              </motion.p>

              <motion.div
                className="mt-6 max-w-xl mx-auto hero-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <p className="text-sm text-[#FDFDFD] font-light italic text-center text-shadow-light">
                  "We don't replicate parts. We replicate intent."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Step-by-Step Timeline */}
        <section className="py-24 bg-white">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="space-y-32">
              {/* Step 01 */}
              <div
                className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
                style={{ animationDelay: "0.2s" }}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">01</span>
                  <h2 className="font-serif text-3xl font-light tracking-tight text-[#1C2B39] mb-6">
                    Initial Consultation
                  </h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <p className="text-[#4B5563] font-light leading-relaxed mb-4">
                    We begin with a thorough consultation to understand your specific needs, the history of the part,
                    and any special requirements or challenges.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    This foundational step ensures that our approach is tailored precisely to your unique situation and
                    objectives.
                  </p>
                </div>
                <div className="relative h-[400px] bg-[#F9FAFB] group transition-all duration-500 hover:shadow-md overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#EDC87C]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                    Consultation Image
                  </div>
                </div>
              </div>

              {/* Step 02 */}
              <div
                className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="order-2 md:order-1 relative h-[400px] bg-[#F9FAFB] group transition-all duration-500 hover:shadow-md overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#EDC87C]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                    CT Scanning Image
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">02</span>
                  <h2 className="font-serif text-3xl font-light tracking-tight text-[#1C2B39] mb-6">Digital Capture</h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <p className="text-[#4B5563] font-light leading-relaxed mb-4">
                    Using industrial CT technology, we create a perfect digital model of your original part, capturing
                    both external dimensions and internal structures with micron-level precision.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    This non-destructive process preserves your original while revealing details invisible to the naked
                    eye.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div
                className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
                style={{ animationDelay: "0.6s" }}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">03</span>
                  <h2 className="font-serif text-3xl font-light tracking-tight text-[#1C2B39] mb-6">
                    Engineering Analysis
                  </h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <p className="text-[#4B5563] font-light leading-relaxed mb-4">
                    Our engineers analyze the digital model to understand not just form, but function, material
                    properties, and historical manufacturing techniques.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    This deep analysis informs our approach to replication, ensuring authenticity in both appearance and
                    performance.
                  </p>
                </div>
                <div className="relative h-[400px] bg-[#F9FAFB] group transition-all duration-500 hover:shadow-md overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#EDC87C]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                    Engineering Analysis Image
                  </div>
                </div>
              </div>

              {/* Step 04 */}
              <div
                className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
                style={{ animationDelay: "0.8s" }}
              >
                <div className="order-2 md:order-1 relative h-[400px] bg-[#F9FAFB] group transition-all duration-500 hover:shadow-md overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#EDC87C]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                    4D Printing Image
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">04</span>
                  <h2 className="font-serif text-3xl font-light tracking-tight text-[#1C2B39] mb-6">
                    Precision Replication
                  </h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <p className="text-[#4B5563] font-light leading-relaxed mb-4">
                    We reproduce your part using our advanced 4D printing technology, which allows us to control not
                    just form but material properties and behavior over time.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    Each component is created with meticulous attention to detail, ensuring perfect replication of the
                    original.
                  </p>
                </div>
              </div>

              {/* Step 05 */}
              <div
                className="grid md:grid-cols-2 gap-16 items-center opacity-0 animate-[fadeInUp_1s_ease-out_forwards]"
                style={{ animationDelay: "1s" }}
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">05</span>
                  <h2 className="font-serif text-3xl font-light tracking-tight text-[#1C2B39] mb-6">
                    Delivery & Integration
                  </h2>
                  <div className="w-20 h-px bg-[#EDC87C] mb-8"></div>
                  <p className="text-[#4B5563] font-light leading-relaxed mb-4">
                    We provide white-glove delivery and optional installation services, ensuring your replicated parts
                    are perfectly integrated with your collection or project.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    Our specialists can travel worldwide to ensure proper installation and provide comprehensive
                    documentation.
                  </p>
                </div>
                <div className="relative h-[400px] bg-[#F9FAFB] group transition-all duration-500 hover:shadow-md overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-[#EDC87C]/30 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] font-light">
                    Delivery Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

