import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-[#f3c76c] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="asset_vertical_02.png"
              alt="Asset Imobiliária Logo"
              width={190}
              height={190}
              className="mb-5"
            />
            <p className="text-sm mb-4">
              Soluções imobiliárias inteligentes para você encontrar o imóvel dos seus sonhos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:text-[#c38d51] transition-colors" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:text-[#c38d51] transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-[#c38d51] transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-[#c38d51] transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                <Youtube className="h-5 w-5 hover:text-[#c38d51] transition-colors" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-archivo tracking-wider">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c38d51] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/imoveis" className="hover:text-[#c38d51] transition-colors">
                  Imóveis
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#c38d51] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#c38d51] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#c38d51] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-archivo tracking-wider">Categorias</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/imoveis?categoria=apartamentos" className="hover:text-[#c38d51] transition-colors">
                  Apartamentos
                </Link>
              </li>
              <li>
                <Link href="/imoveis?categoria=casas" className="hover:text-[#c38d51] transition-colors">
                  Casas
                </Link>
              </li>
              <li>
                <Link href="/imoveis?categoria=comercial" className="hover:text-[#c38d51] transition-colors">
                  Comercial
                </Link>
              </li>
              <li>
                <Link href="/imoveis?categoria=terrenos" className="hover:text-[#c38d51] transition-colors">
                  Terrenos
                </Link>
              </li>
              <li>
                <Link href="/imoveis?categoria=lancamentos" className="hover:text-[#c38d51] transition-colors">
                  Lançamentos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-archivo tracking-wider">Contato</h4>
            <address className="not-italic text-sm space-y-2">
              <p>Av. Paulista, 1000</p>
              <p>São Paulo, SP</p>
              <p>CEP: 01310-100</p>
              <p>Tel: (11) 3000-0000</p>
              <p>Email: contato@assetimobiliaria.com.br</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Asset Inteligência Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
