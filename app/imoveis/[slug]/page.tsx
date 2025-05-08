import Image from "next/image"
import Link from "next/link"
import { Bath, BedDouble, Car, CheckCircle, MapPin, Ruler, Share2 } from "lucide-react"
import type { Metadata } from "next"
import PropertyImages from "./PropertyImages"
import { getProperties, getPropertyBySlug, getImageUrl, PropertyImage } from "@/src/services/strapi"

interface FormattedProperty {
  id: number;
  title: string;
  location: string;
  address: string;
  price: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  images: string[];
  amenities: string[];
  featured: boolean;
  slug: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = await getPropertyBySlug(params.slug)

  if (!property) {
    return {
      title: "Imóvel não encontrado",
    }
  }

  // Corrigido para o formato simplificado
  const firstImageUrl = property.images?.length > 0 ? getImageUrl(property.images[0]) : '/placeholder.svg'

  return {
    title: `${property.title} | ASSET Imóveis`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      type: "website",
      images: [
        {
          url: firstImageUrl,
          width: 800,
          height: 600,
          alt: property.title,
        },
      ],
    },
  }
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = await getPropertyBySlug(params.slug);
  const allProperties = await getProperties();

  if (!property) {
    return (
      <div className="container py-20 text-center">
        <h1 className="heading-lg mb-6">Imóvel não encontrado</h1>
        <p className="mb-8">O imóvel que você está procurando não existe ou foi removido.</p>
        <Link href="/imoveis" className="btn-secondary">
          Ver Todos os Imóveis
        </Link>
      </div>
    );
  }

  // Função para formatar os dados para o formato esperado pelo seu componente
  const formatProperty = (property: any): FormattedProperty => ({
    id: property.id,
    title: property.title || 'Sem título',
    location: property.location || 'Local não informado',
    address: property.address || 'Endereço não informado',
    price: `R$ ${property.price?.toLocaleString('pt-BR') || '0'}`,
    description: property.description || '',
    bedrooms: property.bedrooms || 0,
    bathrooms: property.bathrooms || 0,
    area: property.area || 0,
    garage: property.garage || 0,
    images: property.images?.map((img: PropertyImage) => getImageUrl(img)) || ['/placeholder.svg'],
    amenities: property.amenities || [],
    featured: property.featured || false,
    slug: property.slug || '',
  });

  const formattedProperty = formatProperty(property);

  // Filtra os imóveis semelhantes (exclui o imóvel atual)
  const similarProperties = allProperties
    .filter(p => p.id !== property.id)
    .map(formatProperty);
  return (
    <>
      <section className="pt-8 pb-16">
        <div className="container">
          <div className="mb-8">
            <Link href="/imoveis" className="text-secondary font-medium inline-flex items-center hover:underline">
              <span className="mr-1">←</span> Voltar para Imóveis
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6 border-l-4 border-primary pl-4">
                <h1 className="text-3xl font-bold mb-2">{formattedProperty.title}</h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-5 w-5 mr-1 text-secondary" />
                  <span>{formattedProperty.address}</span>
                </div>
              </div>

              <PropertyImages property={formattedProperty} />

              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-secondary">Características</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formattedProperty.amenities.map((amenities, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{amenities}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 bg-gray-50 p-6 rounded-lg border-t-4 border-t-secondary">
                <h2 className="text-xl font-bold mb-4 text-secondary">Descrição</h2>
                <div
                  className="prose prose-lg max-w-none prose-headings:text-secondary prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: formattedProperty.description }}
                />
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4 text-secondary">Localização</h2>
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center border-2 border-dashed border-primary/50">
                  <MapPin className="h-12 w-12 text-primary" />
                  <span className="absolute">Mapa indisponível na visualização</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mb-6">
                  <div className="text-3xl font-bold text-secondary mb-6">{formattedProperty.price}</div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <BedDouble className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Quartos</span>
                      <span className="font-bold">{formattedProperty.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Bath className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Banheiros</span>
                      <span className="font-bold">{formattedProperty.bathrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Ruler className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Área</span>
                      <span className="font-bold">{formattedProperty.area} m²</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Car className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Vagas</span>
                      <span className="font-bold">{formattedProperty.garage}</span>
                    </div>
                  </div>

                  <button className="w-full py-3 px-4 bg-secondary text-white text-center font-medium rounded-md hover:bg-secondary/90 transition-colors mb-3">
                    Agendar Visita
                  </button>

                  <button className="w-full py-3 px-4 border-2 border-primary text-primary bg-white text-center font-medium rounded-md hover:bg-primary/10 transition-colors">
                    Solicitar Informações
                  </button>

                  <div className="mt-4 flex justify-center">
                    <button className="inline-flex items-center text-gray-500 hover:text-secondary">
                      <Share2 className="h-4 w-4 mr-1" />
                      Compartilhar
                    </button>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 border border-primary">
                  <h3 className="text-xl font-bold mb-4 text-secondary">Fale com um Especialista</h3>
                  <p className="mb-6 text-gray-700">
                    Nossos consultores estão prontos para ajudar você a encontrar o imóvel ideal para suas necessidades.
                  </p>
                  <Link
                    href="/contato"
                    className="block w-full py-3 px-4 bg-secondary text-white text-center font-medium rounded-md hover:bg-secondary/90 transition-colors"
                  >
                    Entrar em Contato
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 border-t border-primary/20">
        <div className="container">
          <h2 className="heading-lg mb-12 text-center text-secondary">Imóveis Semelhantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similarProperties.map((relatedProperty) => (
              <Link key={relatedProperty.id} href={`/imoveis/${relatedProperty.slug}`} className="group">
                <div className="card overflow-hidden h-full flex flex-col border-t-4 border-t-primary">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedProperty.images[0] || "/placeholder.svg"}
                      alt={relatedProperty.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 bg-secondary text-white font-bold py-2 px-4">
                      {relatedProperty.price}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-secondary" />
                      <span>{relatedProperty.location}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {relatedProperty.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{relatedProperty.description}</p>
                    <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center">
                        <BedDouble className="h-4 w-4 mr-1 text-primary" />
                        <span>{relatedProperty.bedrooms} Quartos</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1 text-primary" />
                        <span>{relatedProperty.bathrooms} Banheiros</span>
                      </div>
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 mr-1 text-primary" />
                        <span>{relatedProperty.area} m²</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}