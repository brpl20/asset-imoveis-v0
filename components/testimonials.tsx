import Image from "next/image"
import { Star } from "lucide-react"

// Dados simulados de depoimentos
const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Comprador",
    content:
      "Excelente experiência com a Asset Imobiliária. Profissionais extremamente competentes e atenciosos.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ana Oliveira",
    role: "Vendedora",
    content:
      "Vendi meu imóvel com a Asset. Toda a negociação foi conduzida com muita transparência e profissionalismo. Super recomendo!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section bg-[#f3c76c] text-black rounded-lg my-16 py-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-archivo tracking-wider mb-4">O Que Nossos Clientes Dizem</h2>
        <p className="max-w-2xl mx-auto">A satisfação dos nossos clientes é o nosso maior patrimônio. Confira alguns depoimentos de quem já contou com a ASSET.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
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
