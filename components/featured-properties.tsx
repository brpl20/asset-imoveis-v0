import Link from "next/link"
import Image from "next/image"
import { Bath, BedDouble, MapPin, Maximize } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import { getProperties, getImageUrl, PropertyImage } from "../src/services/strapi"

interface FormattedProperty {
  id: number
  title: string
  location: string
  price: string
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  slug: string
}

function formatProperty(property: any): FormattedProperty {
  return {
    id: property.id,
    title: property.title || 'Sem título',
    location: property.location || 'Local não informado',
    price: `R$ ${property.price?.toLocaleString('pt-BR') || '0'}`,
    bedrooms: property.bedrooms || 0,
    bathrooms: property.bathrooms || 0,
    area: property.area || 0,
    images: property.images?.map((img: PropertyImage) => getImageUrl(img)) || ['/placeholder.svg'],
    slug: property.slug || '',
  };
}

export default async function FeaturedProperties() {
  try {
    const allProperties = await getProperties();

    // Verificação segura com fallback para array vazio
    const safeProperties = Array.isArray(allProperties) ? allProperties : [];

    // Filtro com verificação completa da estrutura
    const featuredProperties = safeProperties
      .filter(property => property?.featured === true)
      .slice(0, 3)
      .map(formatProperty);

    // Se não houver imóveis destacados
    if (featuredProperties.length === 0) {
      return (
        <div className="text-center py-12">
          <p>Nenhum imóvel em destaque no momento</p>
          <Link href="/imoveis">
            <CustomButton variant="primary" className="mt-4">
              Ver Todos os Imóveis
            </CustomButton>
          </Link>
        </div>
      );
    }

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
            {featuredProperties.map((property) => (
              <Link key={property.id} href={`/imoveis/${property.slug}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:-translate-y-1">
                  <div className="relative h-64">
                    <Image
                      src={property.images[0] || "/placeholder.svg"}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
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
    );
  } catch (error) {
    console.error("Erro ao carregar imóveis:", error);
    return (
      <div className="text-center py-12">
        <p>Ocorreu um erro ao carregar os imóveis</p>
        <Link href="/">
          <CustomButton variant="primary" className="mt-4">
            Tentar novamente
          </CustomButton>
        </Link>
      </div>
    );
  }
}
