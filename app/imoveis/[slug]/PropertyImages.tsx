// app/imoveis/[slug]/PropertyImages.tsx
"use client"

import { useState } from 'react'
import Image from "next/image"

export default function PropertyImages({ property }: { property: any }) {
  const [mainImage, setMainImage] = useState(property.images[0])

  return (
    <div className="mb-8">
      <div className="relative h-[400px] rounded-lg overflow-hidden mb-2 border-2 border-primary">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {property.images.map((image: string, index: number) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className="relative h-24 rounded-lg overflow-hidden border border-gray-200 hover:border-secondary transition-colors"
          >
            <Image
              src={image}
              alt={`${property.title} - Imagem ${index + 1}`}
              fill
              className="object-cover"
            />
            {image === mainImage && (
              <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}