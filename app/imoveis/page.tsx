import { getProperties, getImageUrl } from "@/src/services/strapi"
import ImoveisClient from './ImoveisClient'

export const revalidate = 60 // funciona aqui, pois não tem 'use client'

function formatProperty(property: any) {
  return {
    id: property.id,
    title: property.title || 'Sem título',
    location: property.location || 'Local não informado',
    price: `R$ ${property.price?.toLocaleString('pt-BR') || '0'}`,
    description: property.description || '',
    bedrooms: property.bedrooms || 0,
    bathrooms: property.bathrooms || 0,
    area: property.area || 0,
    images: property.images?.map((img: any) => getImageUrl(img)) || ['/placeholder.svg'],
    slug: property.slug || '',
    type: property.type || 'outro',
  }
}


export default async function ImoveisPage() {
  const strapiProperties = await getProperties()
  const properties = strapiProperties.map(formatProperty)

  return <ImoveisClient properties={properties} />
}
