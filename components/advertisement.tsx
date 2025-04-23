import Image from "next/image"
import Link from "next/link"

// Tipos de anúncios disponíveis
type AdvertisementPosition = "home-top" | "home-middle" | "blog-sidebar" | "property-detail" | "search-results"

interface AdvertisementProps {
  position: AdvertisementPosition
  className?: string
}

// Componente de anúncio que pode ser colocado em diferentes partes do site
export default function Advertisement({ position, className = "" }: AdvertisementProps) {
  // Simulação de anúncios diferentes baseados na posição
  const getAdContent = () => {
    switch (position) {
      case "home-top":
        return {
          image: "/placeholder.svg?height=200&width=800",
          title: "Lançamento Exclusivo",
          description: "Condomínio de luxo com vista para o mar",
          link: "/imoveis/lancamento-exclusivo",
          width: 800,
          height: 200,
        }
      case "home-middle":
        return {
          image: "/placeholder.svg?height=250&width=970",
          title: "Financiamento Facilitado",
          description: "Taxas especiais para imóveis selecionados",
          link: "/financiamento",
          width: 970,
          height: 250,
        }
      case "blog-sidebar":
        return {
          image: "/placeholder.svg?height=400&width=300",
          title: "Avaliação Gratuita",
          description: "Saiba quanto vale seu imóvel",
          link: "/avaliacao",
          width: 300,
          height: 400,
        }
      case "property-detail":
        return {
          image: "/placeholder.svg?height=120&width=728",
          title: "Consultoria Personalizada",
          description: "Agende uma visita com nossos especialistas",
          link: "/contato",
          width: 728,
          height: 120,
        }
      case "search-results":
        return {
          image: "/placeholder.svg?height=90&width=728",
          title: "Imóveis na Planta",
          description: "Condições especiais para lançamentos",
          link: "/imoveis/lancamentos",
          width: 728,
          height: 90,
        }
      default:
        return {
          image: "/placeholder.svg?height=250&width=300",
          title: "Anúncio",
          description: "Espaço disponível para publicidade",
          link: "/contato",
          width: 300,
          height: 250,
        }
    }
  }

  const adContent = getAdContent()

  return (
    <div className={`advertisement ${className}`}>
      <Link
        href={adContent.link}
        className="block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="relative" style={{ width: "100%", height: "auto" }}>
          <Image
            src={adContent.image || "/placeholder.svg"}
            alt={adContent.title}
            width={adContent.width}
            height={adContent.height}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-[#f3c76c] p-4">
            <h3 className="text-lg font-archivo tracking-wider mb-1">{adContent.title}</h3>
            <p className="text-sm">{adContent.description}</p>
          </div>
        </div>
      </Link>
      <div className="text-xs text-gray-500 text-right mt-1">Anúncio</div>
    </div>
  )
}
