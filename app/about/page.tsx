"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion"

export default function AboutPage() {
  // Refs for scroll animations
  const heroRef = useRef(null)
  const storyRef = useRef(null)
  const valuesRef = useRef(null)
  const teamRef = useRef(null)

  // Check if elements are in view
  const storyInView = useInView(storyRef, { once: true, threshold: 0.2 })
  const valuesInView = useInView(valuesRef, { once: true, threshold: 0.2 })
  const teamInView = useInView(teamRef, { once: true, threshold: 0.2 })

  // Animation controls
  const storyControls = useAnimation()
  const valuesControls = useAnimation()
  const teamControls = useAnimation()

  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Trigger animations when elements come into view
  useEffect(() => {
    if (storyInView) storyControls.start("visible")
    if (valuesInView) valuesControls.start("visible")
    if (teamInView) teamControls.start("visible")
  }, [storyInView, valuesInView, teamInView, storyControls, valuesControls, teamControls])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] w-full overflow-hidden flex items-center pt-16 pb-24">
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

          {/* Content container */}
          <div className="container relative z-10 h-full flex items-center py-20 md:py-28">
            <motion.div
              className="w-full max-w-5xl mx-auto px-6 text-center hero-text-container md:bg-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                className="mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="inline-block text-xs uppercase tracking-[0.5em] text-[#EDC87C] font-medium border-b border-[#EDC87C]/30 pb-2 px-8">
                  PERPETUA ATELIER
                </span>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Decorative element */}
                <div className="absolute -left-4 md:left-1/4 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#EDC87C]/50 hidden md:block"></div>
                <div className="absolute -right-4 md:right-1/4 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#EDC87C]/50 hidden md:block"></div>

                <h1 className="font-serif tracking-tight leading-none mb-6">
                  <span className="block text-4xl md:text-5xl lg:text-6xl text-[#FFFFFF] font-light tracking-wide drop-shadow-sm text-shadow-medium mb-4">
                    THE ESSENCE OF
                  </span>
                  <span className="block text-6xl md:text-7xl lg:text-8xl text-[#EDC87C] font-normal drop-shadow-sm text-shadow-light tracking-tight">
                    HERITAGE
                  </span>
                </h1>
              </motion.div>

              <motion.div
                className="w-[1px] h-16 bg-gradient-to-b from-[#EDC87C]/0 via-[#EDC87C]/50 to-[#EDC87C]/0 mx-auto my-8"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 64 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              ></motion.div>

              <motion.p
                className="text-lg md:text-xl text-[#FDFDFD] font-light tracking-wide max-w-xl mx-auto leading-relaxed text-shadow-light italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                "The art of replication is the art of remembrance."
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Our Story Section */}
        <section ref={storyRef} className="py-24 md:py-32 bg-[#F9F7F2]">
          <motion.div
            className="container"
            initial="hidden"
            animate={storyControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                  OUR STORY
                </span>
                <h2 className="font-serif text-4xl font-light tracking-tight text-[#1C2B39] mb-6">
                  Founded to preserve the <span className="text-[#EDC87C]">irreplaceable</span>
                </h2>
                <div className="w-20 h-px bg-[#EDC87C] mb-10"></div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-[#4B5563] font-light leading-relaxed mb-6">
                    PERPETUA emerged from a singular vision: to preserve automotive history through precision
                    technology. Our founder, a collector of rare vehicles, faced the impossible challenge of finding
                    replacement parts for a classic Aston Martin DB5. The solution came in the form of industrial CT
                    scanning and advanced 4D printing.
                  </p>
                  <p className="text-[#4B5563] font-light leading-relaxed">
                    What began as a personal project quickly evolved into a mission to serve the world's most discerning
                    collectors and institutions. Today, PERPETUA stands at the intersection of heritage preservation and
                    cutting-edge innovation, replicating parts that were once considered irreplaceable.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-[#A9C4D4]/10 z-10 mix-blend-overlay"></div>
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="PERPETUA precision engineering"
                  fill
                  className="object-cover z-0 opacity-90"
                />
                {/* Blueprint overlay */}
                <div className="absolute inset-0 z-20 opacity-30 blueprint-grid"></div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 md:py-32 relative overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] to-white z-0"></div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-paper-texture opacity-[0.05] z-0"></div>

          <motion.div
            className="container relative z-10"
            initial="hidden"
            animate={valuesControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
            }}
          >
            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-xs uppercase tracking-[0.3em] text-[#A7C7E7] font-light block mb-6">
                OUR VALUES
              </span>
              <h2 className="font-serif text-4xl font-light tracking-tight text-[#1C2B39] mb-6">
                Guided by <span className="text-[#EDC87C]">Excellence</span>
              </h2>
              <div className="w-20 h-px bg-[#EDC87C]/30 mx-auto mb-10"></div>
              <p className="text-[#4B5563] font-light leading-relaxed">
                The work we do is quiet. The results are permanent.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="font-serif text-2xl font-light text-[#1C2B39] mb-6">Uncompromising Quality</h3>
                <div className="w-12 h-px bg-[#EDC87C] mx-auto mb-8"></div>
                <p className="text-[#4B5563] font-light leading-relaxed">
                  We believe that excellence is not an act but a habit. Every part we create undergoes rigorous testing
                  to ensure it meets or exceeds original specifications.
                </p>
              </motion.div>

              <motion.div
                className="text-center relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <div className="absolute top-0 bottom-0 -left-8 w-px bg-gradient-to-b from-transparent via-[#EDC87C]/30 to-transparent hidden md:block"></div>
                <div className="absolute top-0 bottom-0 -right-8 w-px bg-gradient-to-b from-transparent via-[#EDC87C]/30 to-transparent hidden md:block"></div>

                <h3 className="font-serif text-2xl font-light text-[#1C2B39] mb-6">Client Partnership</h3>
                <div className="w-12 h-px bg-[#EDC87C] mx-auto mb-8"></div>
                <p className="text-[#4B5563] font-light leading-relaxed">
                  We view each project as a collaboration. Our clients are partners in the process, bringing their
                  expertise and vision to complement our technical capabilities.
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="font-serif text-2xl font-light text-[#1C2B39] mb-6">Heritage Preservation</h3>
                <div className="w-12 h-px bg-[#EDC87C] mx-auto mb-8"></div>
                <p className="text-[#4B5563] font-light leading-relaxed">
                  We see our work as more than manufacturing—it's preserving history. Each part we replicate helps
                  maintain the legacy of human craftsmanship and innovation.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Team Section - Redesigned with luxury styling */}
        <section ref={teamRef} className="py-32 bg-[#FDFDFD] relative">
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-paper-texture opacity-[0.05] z-0"></div>

          <motion.div
            className="container max-w-6xl mx-auto px-4"
            initial="hidden"
            animate={teamControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
            }}
          >
            {/* Elegant section header */}
            <div className="text-center mb-24">
              <motion.span
                className="text-xs uppercase tracking-[0.4em] text-[#A7C7E7] font-light block mb-6"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                OUR TEAM
              </motion.span>

              <motion.h2
                className="font-serif text-4xl md:text-5xl font-light tracking-tight text-[#1C2B39] mb-8"
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } },
                }}
              >
                Masters of Precision, Stewards of Legacy
              </motion.h2>

              <motion.div
                className="flex items-center justify-center mb-12"
                variants={{
                  hidden: { opacity: 0, width: 0 },
                  visible: { opacity: 1, width: "auto", transition: { duration: 0.8, delay: 0.2 } },
                }}
              >
                <div className="w-12 h-px bg-[#EDC87C]/50"></div>
                <div className="w-2 h-2 rounded-full bg-[#EDC87C] mx-3"></div>
                <div className="w-12 h-px bg-[#EDC87C]/50"></div>
              </motion.div>

              <motion.p
                className="text-lg text-[#444444] font-light leading-relaxed tracking-wide max-w-[70ch] mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
                }}
              >
                At PERPETUA, our strength lies in the rare convergence of engineering brilliance, scientific rigor, and
                artisanal mastery. We are an international team of specialists from the world's most demanding
                industries—motorsport, nautical design, industrial imaging, and heritage restoration—united by an
                obsession with perfection and the technical acumen to recreate what was once thought irreplaceable.
              </motion.p>
            </div>

            {/* Elegant team cards */}
            <motion.div
              className="relative"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.8, delay: 0.4 } },
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#EDC87C]/0 via-[#EDC87C]/30 to-[#EDC87C]/0"></div>

              <div className="bg-white shadow-[0_10px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Header with gold accent */}
                <div className="relative border-b border-[#F0F0F0] px-12 py-8">
                  <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-[#EDC87C]/30 via-[#EDC87C] to-[#EDC87C]/30"></div>
                  <h3 className="font-serif text-2xl font-light text-[#333333] tracking-wide">The Atelier Team</h3>
                </div>

                {/* Team content */}
                <div className="grid md:grid-cols-2 divide-x divide-[#F0F0F0]">
                  {/* Engineering Team */}
                  <div className="group p-12 transition-all duration-500 hover:bg-[#F9F7F2]/50 relative overflow-hidden">
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EDC87C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-8 h-px bg-[#EDC87C]"></div>
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#1C2B39] font-medium ml-4 leading-relaxed">
                          Engineering & Design
                          <br className="hidden md:block" />
                          <span className="mt-1 block">Excellence</span>
                        </h4>
                      </div>

                      <p className="text-[#444444] font-light leading-relaxed tracking-wide">
                        Our engineering team draws on experience from elite motorsport programs and advanced vehicle
                        development studios, where speed, precision, and innovation converge. Their design philosophy
                        bridges performance with legacy, crafting each component to meet exacting standards while
                        honoring the character of the original—whether forged for land or sea.
                      </p>

                      <div className="mt-8 h-px w-0 bg-[#EDC87C] group-hover:w-16 transition-all duration-700 ease-in-out"></div>
                    </div>
                  </div>

                  {/* Imaging & Fabrication Team */}
                  <div className="group p-12 transition-all duration-500 hover:bg-[#F9F7F2]/50 relative overflow-hidden">
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#EDC87C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-8">
                        <div className="w-8 h-px bg-[#EDC87C]"></div>
                        <h4 className="text-xs uppercase tracking-[0.3em] text-[#1C2B39] font-medium ml-4 leading-relaxed">
                          Advanced Imaging &<br className="hidden md:block" />
                          <span className="mt-1 block">Materials Science</span>
                        </h4>
                      </div>

                      <p className="text-[#444444] font-light leading-relaxed tracking-wide">
                        Our imaging and fabrication specialists have led the advancement of ultra-high-resolution
                        industrial inspection across sectors where precision is paramount—from aerospace to advanced
                        manufacturing. With backgrounds in 3D computed tomography, non-destructive testing, and complex
                        materials engineering, they've developed proprietary methods that unveil and replicate
                        structures invisible to the naked eye—delivering flawless fidelity and uncompromising quality.
                      </p>

                      <div className="mt-8 h-px w-0 bg-[#EDC87C] group-hover:w-16 transition-all duration-700 ease-in-out"></div>
                    </div>
                  </div>
                </div>

                {/* Footer accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-[#EDC87C]/10 via-[#EDC87C] to-[#EDC87C]/10"></div>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[#EDC87C]/30 via-[#EDC87C]/0 to-[#EDC87C]/0 mt-16"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Global Statement Footer - Now with blue background */}
        <section className="py-16 text-center relative overflow-hidden">
          {/* Blue background similar to the quote panel */}
          <div className="absolute inset-0 bg-[#93B1C7] z-0"></div>

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 bg-paper-texture opacity-[0.08] z-0"></div>

          {/* Subtle radial gradient for depth */}
          <div className="absolute inset-0 bg-radial-gradient opacity-20 z-0"></div>

          <div className="container relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-px bg-[#EDC87C]/50 mx-auto mb-8"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-white font-light block mb-4">
              Based in Barcelona, Spain and Santa Barbara, CA
            </span>
            <p className="text-white text-lg font-light mb-8">
              PERPETUA is an international atelier bringing together global minds to serve collectors and institutions
              around the world.
            </p>
            <div className="w-16 h-px bg-[#EDC87C]/50 mx-auto"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

