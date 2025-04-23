"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-[#f3c76c] sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Asset Imobiliária Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-archivo font-semibold tracking-wider text-xl">ASSET</span>
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
