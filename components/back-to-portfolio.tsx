"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BackToPortfolio() {
  return (
    <div className="container relative z-50 pt-6 pb-2">
      <Link
        href="/portfolio"
        className="inline-flex items-center text-[#A9C4D4] hover:text-[#EDC87C] transition-colors group"
        scroll={false} // Remove scroll={true} to use our global scroll behavior
      >
        <ChevronLeft className="h-4 w-4 mr-1 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="relative overflow-hidden">
          <span className="relative z-10">Back to Portfolio</span>
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#EDC87C] group-hover:w-full transition-all duration-300"></span>
        </span>
      </Link>
    </div>
  )
}

