"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

export default function PrivacyPolicyPage() {
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 md:py-32 overflow-hidden pt-16">
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
              <motion.h1
                className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-[#FFFFFF] text-shadow-medium drop-shadow-sm mb-4 hero-headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Privacy Policy
              </motion.h1>

              <motion.p
                className="text-lg text-[#FDFDFD] font-light tracking-wide drop-shadow-sm text-shadow-light hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Effective Date: March 31, 2025
              </motion.p>
            </motion.div>
          </div>

          {/* Diagonal separator */}
          <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
            <div className="diagonal-separator-light"></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-[700px] mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-[#444444] font-light leading-relaxed mb-12">
                  At PERPETUA, we value your privacy and are committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our
                  website or services.
                </p>

                {/* Information We Collect */}
                <div className="mb-16 p-8 bg-[#F9FAFB] border-l-2 border-[#EDC87C]">
                  <h2 className="font-serif text-2xl font-light text-[#EDC87C] mb-6">Information We Collect</h2>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit
                    arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut
                    in nulla enim.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
                    Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget
                    diam.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi
                    lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue
                    elementum.
                  </p>
                </div>

                {/* How We Use It */}
                <div className="mb-16">
                  <h2 className="font-serif text-2xl font-light text-[#EDC87C] mb-6">How We Use It</h2>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                    diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                    augue, eu vulputate magna eros eu erat.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                    Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem
                    tristique cursus.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed">
                    Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor.
                    Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                  </p>
                </div>

                {/* Your Rights */}
                <div className="mb-16 p-8 bg-[#F9FAFB] border-l-2 border-[#EDC87C]">
                  <h2 className="font-serif text-2xl font-light text-[#EDC87C] mb-6">Your Rights</h2>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at
                    dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
                    lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed">
                    Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
                    adipiscing diam, a cursus ipsum ante quis turpis.
                  </p>
                </div>

                {/* Cookies */}
                <div className="mb-16">
                  <h2 className="font-serif text-2xl font-light text-[#EDC87C] mb-6">Cookies</h2>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
                    Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem
                    massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed">
                    Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue
                    elementum. Morbi in ipsum sit amet pede facilisis laoreet.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mb-16 p-8 bg-[#F9FAFB] border-l-2 border-[#EDC87C]">
                  <h2 className="font-serif text-2xl font-light text-[#EDC87C] mb-6">Contact Information</h2>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada
                    tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar
                    ullamcorper.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed mb-4">
                    Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer
                    id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue.
                  </p>
                  <p className="text-[#444444] font-light leading-relaxed">
                    For any privacy-related inquiries, please contact us at privacy@perpetuaprecision.com or visit our
                    offices in Santa Barbara, California or Barcelona, Spain.
                  </p>
                </div>

                {/* Back Link */}
                <div className="text-center pt-8 border-t border-[#E5E7EB]">
                  <Link
                    href="/"
                    className="inline-flex items-center text-[#333333] hover:text-[#EDC87C] transition-colors relative overflow-hidden group"
                  >
                    <span className="relative z-10 text-sm tracking-[0.1em] font-light">Return to Homepage</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

