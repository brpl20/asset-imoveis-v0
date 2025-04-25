import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { CustomButton } from "./ui/custom-button"

// Dados simulados de posts do blog
const posts = [
  {
    id: 1,
    title: "Como escolher o imóvel ideal para investimento",
    excerpt: "Descubra as principais dicas para fazer um investimento imobiliário seguro e lucrativo.",
    date: "15 de Abril, 2023",
    author: "Ricardo Almeida",
    image: "/placeholder.svg?height=300&width=500",
    category: "Investimentos",
  },
  {
    id: 2,
    title: "Tendências do mercado imobiliário para 2023",
    excerpt: "Conheça as principais tendências que estão moldando o mercado imobiliário neste ano.",
    date: "28 de Março, 2023",
    author: "Juliana Costa",
    image: "/placeholder.svg?height=300&width=500",
    category: "Mercado",
  },
  {
    id: 3,
    title: "Dicas para decorar seu apartamento com estilo",
    excerpt: "Aprenda como transformar seu apartamento com dicas de decoração que combinam estilo e funcionalidade.",
    date: "10 de Março, 2023",
    author: "Camila Santos",
    image: "/placeholder.svg?height=300&width=500",
    category: "Decoração",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-archivo tracking-wider mb-4">Blog Imobiliário</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e tendências do mercado imobiliário
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="group">
              <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:-translate-y-1">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-archivo tracking-wider mb-3 group-hover:text-[#c38d51] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blog">
            <CustomButton variant="primary">Ver Todos os Artigos</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
