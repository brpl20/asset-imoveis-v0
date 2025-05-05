import Image from "next/image"
import Link from "next/link"
import { Bath, BedDouble, Car, CheckCircle, MapPin, Ruler, Share2 } from "lucide-react"
import type { Metadata } from "next"
import PropertyImages from "./PropertyImages"

export const properties = [
  {
    id: 1,
    title: "Casa térrea",
    location: "Pacaembu, Cascavel",
    address: "Rua Francisco Beltrao, 1507 - Cascavel, PR 85812-475",
    price: "R$ 1.600.000",
    description:
      "Linda casa térrea a venda em uma das regiões mas valorizadas de Cascavel. Essa casa inteira mobiliada e decorada com Piscina aquecida, área gourmet, cozinha nova e sua localização chama a atenção.",
    bedrooms: 3,
    bathrooms: 3,
    area: 480,
    garage: 4,
    images: [
      "/casa_terrea_1.jpeg?height=600&width=800",
      "/casa_terrea_2.jpeg?height=600&width=800",
      "/casa_terrea_3.jpeg?height=600&width=800",
      "/casa_terrea_4.jpeg?height=600&width=800",
      "/casa_terrea_5.jpeg?height=600&width=800",
      "/casa_terrea_6.jpeg?height=600&width=800",
      "/casa_terrea_7.jpeg?height=600&width=800",
      "/casa_terrea_8.jpeg?height=600&width=800",
      "/casa_terrea_9.jpeg?height=600&width=800",
      "/casa_terrea_10.jpeg?height=600&width=800",
      "/casa_terrea_11.jpeg?height=600&width=800",
      "/casa_terrea_12.jpeg?height=600&width=800",
    ],
    amenities: [
      "1 Suite + 2 Quartos",
      "Piscina Aquecida",
      "Sobra de Terreno",
      "Amplo Living ",
      "Churrasqueira",
      "Inteira Mobiliada",
      "Lavanderia",
      "Vaga para 4 Carros",
      "480m² Área Total",
      "196m² Construído",
    ],
    featured: true,
    agent: {
      name: "Anderson Rocha Dreher",
      phone: "45 99810 0566",
      email: "carlos.oliveira@imobiliaria.com",
      photo: "/placeholder.svg?height=150&width=150",
    },
    slug: "casa-terrea",
  },
  {
    id: 2,
    title: "Casa com Piscina",
    location: "Alphaville, Barueri",
    address: "Alameda Cauaxi, 350 - Alphaville, Barueri",
    price: "R$ 2.500.000",
    description:
      "Magnífica casa em condomínio fechado com segurança 24h. Amplo jardim com piscina, churrasqueira e espaço gourmet. Ambientes integrados, acabamento premium e automação residencial completa. Localização privilegiada próxima aos principais centros comerciais.",
    bedrooms: 4,
    bathrooms: 3,
    area: 350,
    garage: 4,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    amenities: [
      "Piscina privativa",
      "Churrasqueira",
      "Jardim",
      "Espaço gourmet",
      "Sistema de segurança",
      "Automação residencial",
      "Closet",
      "Despensa",
    ],
    featured: true,
    agent: {
      name: "Mariana Santos",
      phone: "(11) 97654-3210",
      email: "mariana.santos@imobiliaria.com",
      photo: "/placeholder.svg?height=150&width=150",
    },
    slug: "casa-com-piscina",
  },
  {
    id: 3,
    title: "Cobertura Duplex",
    location: "Vila Nova Conceição, São Paulo",
    address: "Rua Afonso Braz, 800 - Vila Nova Conceição, São Paulo",
    price: "R$ 3.800.000",
    description:
      "Exclusiva cobertura duplex com vista para o Parque Ibirapuera. Terraço com piscina privativa, spa e área gourmet. Ambientes amplos e integrados, acabamento de altíssimo padrão e 4 vagas na garagem. Localização privilegiada a poucos minutos dos melhores restaurantes e lojas da cidade.",
    bedrooms: 4,
    bathrooms: 4,
    area: 280,
    garage: 4,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    amenities: [
      "Terraço",
      "Piscina privativa",
      "Spa",
      "Área gourmet",
      "Vista panorâmica",
      "Elevador privativo",
      "Automação residencial",
      "Adega climatizada",
    ],
    featured: true,
    agent: {
      name: "Renata Almeida",
      phone: "(11) 96543-2109",
      email: "renata.almeida@imobiliaria.com",
      photo: "/placeholder.svg?height=150&width=150",
    },
    slug: "cobertura-duplex",
  },
]
// Função para buscar o imóvel pelo slug
function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug)
}

// Função para gerar os metadados dinâmicos
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const property = properties.find((p) => p.slug === params.slug)

  if (!property) {
    return {
      title: "Imóvel não encontrado",
    }
  }

  return {
    title: `${property.title} | ASSET Imóveis`,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      type: "website",
      images: [
        {
          url: property.images[0],
          width: 800,
          height: 600,
          alt: property.title,
        },
      ],
    },
  }
}

export default async function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug);
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

  // Filtra os imóveis semelhantes (exclui o imóvel atual)
  const similarProperties = properties.filter((p) => p.id !== property.id)

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
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="h-5 w-5 mr-1 text-secondary" />
                  <span>{property.address}</span>
                </div>
              </div>

              <PropertyImages property={property} />

              <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-4 text-secondary">Características</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenities, index) => (
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
                  dangerouslySetInnerHTML={{ __html: property.description }}
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
                  <div className="text-3xl font-bold text-secondary mb-6">{property.price}</div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <BedDouble className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Quartos</span>
                      <span className="font-bold">{property.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Bath className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Banheiros</span>
                      <span className="font-bold">{property.bathrooms}</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Ruler className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Área</span>
                      <span className="font-bold">{property.area} m²</span>
                    </div>
                    <div className="flex flex-col items-center p-3 bg-primary/10 rounded-lg">
                      <Car className="h-6 w-6 text-primary mb-1" />
                      <span className="text-sm text-gray-500">Vagas</span>
                      <span className="font-bold">{property.garage}</span>
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