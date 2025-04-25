import Image from "next/image"
import { Star } from "lucide-react"

// Dados simulados de depoimentos
const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Comprador",
    content:
      "Excelente experiência com a Asset Imobiliária. Encontrei o apartamento dos meus sonhos em tempo recorde. Profissionais extremamente competentes e atenciosos.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Vendedora",
    content:
      "Vendi meu imóvel em apenas 3 semanas com a Asset. Toda a negociação foi conduzida com muita transparência e profissionalismo. Super recomendo!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Roberto Mendes",
    role: "Investidor",
    content:
      "Trabalho com a Asset há mais de 5 anos em meus investimentos imobiliários. A equipe tem um conhecimento profundo do mercado e sempre me orienta para as melhores oportunidades.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-[#f3c76c] text-black rounded-lg my-16 py-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-archivo tracking-wider mb-4">O Que Nossos Clientes Dizem</h2>
        <p className="max-w-2xl mx-auto">A satisfação dos nossos clientes é o nosso maior orgulho</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                />
              ))}
            </div>

            <p className="text-gray-700">{testimonial.content}</p>
          </div>
        ))}
      </div>
      </div>


      
    </section>
  )
}
