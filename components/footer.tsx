import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-6 bg-[#F9F6F1] text-xs">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-[#444444] tracking-wide">© {new Date().getFullYear()} PERPETUA PRECISION</span>
          
          <span className="text-[#444444] tracking-wide">
            All rights reserved. Dedicated to preserving vintage excellence.
          </span>
          
          <div className="space-x-6">
            <Link
              href="/privacy"
              className="text-[#444444] hover:text-[#EDC87C] transition-colors duration-300 tracking-wide"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-[#444444] hover:text-[#EDC87C] transition-colors duration-300 tracking-wide"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#444444] hover:text-[#EDC87C] transition-colors duration-300 tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

