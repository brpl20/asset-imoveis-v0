import Link from "next/link"
import Image from "next/image"
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import { properties } from "../app/imoveis/[slug]/page"

export default function FeaturedProperties() {
  const recentProperties = properties.slice(0, 3)
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-archivo tracking-wider mb-4">Imóveis em Destaque</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção de imóveis premium em localizações privilegiadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentProperties.map((property) => (
            <Link key={property.id} href={`/imoveis/${property.slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:-translate-y-1">
                <div className="relative h-64">
                  <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                    Destaque
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-archivo tracking-wider mb-2 group-hover:text-[#c38d51] transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold text-black">{property.price}</span>
                  </div>

                  <div className="flex justify-between text-gray-600 border-t pt-4">
                    <div className="flex items-center">
                      <BedDouble className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bedrooms} Quartos</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.bathrooms} Banheiros</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.area} m²</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/imoveis">
            <CustomButton variant="primary">Ver Todos os Imóveis</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
