'use client'

import { useState, useMemo } from 'react'
import { Bath, BedDouble, Filter, MapPin, Ruler, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export interface FormattedProperty {
  id: number
  title: string
  location: string
  price: string
  description: string
  bedrooms: number
  bathrooms: number
  area: number
  images: string[]
  slug: string
  type: string
}


export const revalidate = 60;

export default function ImoveisClient({ properties }: { properties: FormattedProperty[] }) {

  const [search, setSearch] = useState('')
  const [selectedType, setSelectedType] = useState('Todos os tipos')

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchSearch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())

      const matchType =
        selectedType === 'Todos os tipos' || property.type === selectedType.toLowerCase()

      return matchSearch && matchType
    })
  }, [properties, search, selectedType])

  return (
    <>
      <section className="bg-black text-white py-16 px-4">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-archivo tracking-wider mb-4 text-primary">Imóveis</h1>
            <p className="text-xl">
              Explore nossa seleção de imóveis residenciais e comerciais. Encontre o imóvel ideal para você ou seu
              investimento.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-secondary" />
              </div>
              <input
                type="text"
                placeholder="Buscar imóveis..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm"
              />
            </div>

            <div className="flex space-x-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm rounded-md"
              >
                <option>Todos os tipos</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Terreno</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Listagem de Imóveis */}
      <section className="py-16">
        <div className="container">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg mb-4">Nenhum imóvel encontrado</p>
              <Link href="/contato" className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary/90">
                Fale com um corretor
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Link key={property.id} href={`/imoveis/${property.slug}`} className="group">
                  <div className="card overflow-hidden h-full flex flex-col border-t-4 border-t-primary">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={property.images[0] || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="100vw"
                      />
                      <div className="absolute bottom-0 left-0 bg-secondary text-white font-bold py-2 px-4">
                        {property.price}
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-1 text-secondary" />
                        <span>{property.location}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{property.description}</p>
                      <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                        <div className="flex items-center">
                          <BedDouble className="h-4 w-4 mr-1 text-primary" />
                          <span>{property.bedrooms} Quartos</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1 text-primary" />
                          <span>{property.bathrooms} Banheiros</span>
                        </div>
                        <div className="flex items-center">
                          <Ruler className="h-4 w-4 mr-1 text-primary" />
                          <span>{property.area} m²</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}