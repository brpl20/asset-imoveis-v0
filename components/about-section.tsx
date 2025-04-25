import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-archivo tracking-wider mb-6">Asset Inteligência Imobiliária</h2>
            <p className="text-gray-700 mb-6">
              Há mais de 15 anos no mercado, a Asset Inteligência Imobiliária se destaca pela excelência no atendimento e
              pelo profundo conhecimento do mercado imobiliário.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#c38d51] mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Equipe de corretores altamente qualificados e certificados</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#c38d51] mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Atendimento personalizado e focado nas necessidades do cliente</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#c38d51] mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Amplo portfólio de imóveis em localizações privilegiadas</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#c38d51] mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Assessoria completa em todas as etapas da negociação</p>
              </div>
            </div>

            <Link href="/sobre">
              <CustomButton variant="primary">Conheça Nossa História</CustomButton>
            </Link>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=600&width=800" alt="Asset Imobiliária" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
