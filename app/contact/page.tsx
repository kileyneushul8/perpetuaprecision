"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ContactPage() {
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
                className="text-xs uppercase tracking-[0.4em] text-[#EDC87C] font-medium block mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                PERPETUA ATELIER
              </motion.span>

              <motion.h1
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm mb-6 hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Contact
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
                We welcome inquiries and introductions.
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Form Section - 2/3 width on desktop */}
              <div className="lg:col-span-2">
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  Send a Message
                </span>
                <h2 className="font-serif text-3xl font-light tracking-tight text-[#333333] mb-6">
                  Begin the Conversation
                </h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-12"></div>

                <form className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label
                        htmlFor="first-name"
                        className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light"
                      >
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="flex h-12 w-full rounded-none border-0 border-b border-[#E5E7EB] bg-transparent px-0 py-2 text-[#1C2B39] placeholder:text-[#9CA3AF]/50 placeholder:text-sm focus:border-[#EDC87C] focus:outline-none focus:ring-0 font-light"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="last-name"
                        className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light"
                      >
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="flex h-12 w-full rounded-none border-0 border-b border-[#E5E7EB] bg-transparent px-0 py-2 text-[#1C2B39] placeholder:text-[#9CA3AF]/50 placeholder:text-sm focus:border-[#EDC87C] focus:outline-none focus:ring-0 font-light"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-12 w-full rounded-none border-0 border-b border-[#E5E7EB] bg-transparent px-0 py-2 text-[#1C2B39] placeholder:text-[#9CA3AF]/50 placeholder:text-sm focus:border-[#EDC87C] focus:outline-none focus:ring-0 font-light"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[150px] w-full rounded-none border-0 border-b border-[#E5E7EB] bg-transparent px-0 py-2 text-[#1C2B39] placeholder:text-[#9CA3AF]/50 placeholder:text-sm focus:border-[#EDC87C] focus:outline-none focus:ring-0 font-light"
                      placeholder="Describe your project or inquiry"
                    />
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="inline-flex h-14 items-center justify-center rounded-none bg-transparent border border-[#EDC87C] px-10 text-sm font-light tracking-[0.2em] text-[#333333] transition-all duration-500 hover:bg-[#EDC87C]/10 hover:border-[#EDC87C] focus-visible:outline-none"
                    >
                      SUBMIT INQUIRY
                    </button>
                  </div>
                </form>
              </div>

              {/* Sidebar Information - 1/3 width on desktop */}
              <div className="lg:border-l border-[#E5E7EB] lg:pl-16">
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  Contact Information
                </span>
                <h2 className="font-serif text-3xl font-light tracking-tight text-[#333333] mb-6">How to Reach Us</h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-12"></div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light mb-4">Locations</h3>
                    <div className="mb-6">
                      <p className="font-serif text-lg text-[#333333] mb-1">Santa Barbara, California</p>
                      <p className="text-[#4B5563] font-light">1482 East Valley Road</p>
                      <p className="text-[#4B5563] font-light">Santa Barbara, CA 93108</p>
                    </div>
                    <div>
                      <p className="font-serif text-lg text-[#333333] mb-1">Barcelona, Spain</p>
                      <p className="text-[#4B5563] font-light">Carrer de Provença, 324</p>
                      <p className="text-[#4B5563] font-light">08037 Barcelona, Spain</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light mb-4">Hours</h3>
                    <p className="text-[#4B5563] font-light">Monday – Friday, 9:00 AM – 6:00 PM PST</p>
                    <p className="text-[#4B5563] font-light">Weekends by appointment only</p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-[0.2em] text-[#4B5563] font-light mb-4">Email</h3>
                    <p className="text-[#4B5563] font-light">contact@perpetuaprecision.com</p>
                    <p className="text-[#4B5563] font-light">inquiries@perpetuaprecision.com</p>
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

