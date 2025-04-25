"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-[#f3c76c] sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-[10px]">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="asset_horizontal_02.png"
              alt="Asset Imobiliária Logo"
              width={215}
              height={215}
              className="rounded"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#c38d51] transition-colors">
              Início
            </Link>
            <Link href="/imoveis" className="hover:text-[#c38d51] transition-colors">
              Imóveis
            </Link>
            <Link href="/blog" className="hover:text-[#c38d51] transition-colors">
              Blog
            </Link>
            <Link href="/sobre" className="hover:text-[#c38d51] transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-[#c38d51] transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#f3c76c]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 pb-6">
            <Link href="/" className="hover:text-[#c38d51] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Início
            </Link>
            <Link
              href="/imoveis"
              className="hover:text-[#c38d51] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Imóveis
            </Link>
            <Link href="/blog" className="hover:text-[#c38d51] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/sobre" className="hover:text-[#c38d51] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
            <Link
              href="/contato"
              className="hover:text-[#c38d51] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
