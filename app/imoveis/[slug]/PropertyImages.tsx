"use client"

import { useState } from "react"
import Image from "next/image"

interface Property {
  title: string;
  images: string[];
}

interface PropertyImagesProps {
  property: Property;
}

export default function PropertyImages({ property }: PropertyImagesProps) {
  const [mainImage, setMainImage] = useState(property.images[0])

  return (
    <div className="mb-8">
      {/* Imagem principal */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-4">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          className="object-cover transition-all duration-300"
          priority
        />
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-2">
        {property.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`relative h-24 rounded overflow-hidden border-2 ${
              image === mainImage ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`${property.title} - Imagem ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
