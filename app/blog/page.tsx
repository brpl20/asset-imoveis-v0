import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import Advertisement from "@/components/advertisement"

// Dados simulados de posts do blog
const posts = [
  {
    id: 1,
    title: "Como escolher o imóvel ideal para investimento",
    excerpt: "Descubra as principais dicas para fazer um investimento imobiliário seguro e lucrativo.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "15 de Abril, 2023",
    author: "Ricardo Almeida",
    image: "/placeholder.svg?height=400&width=800",
    category: "Investimentos",
  },
  {
    id: 2,
    title: "Tendências do mercado imobiliário para 2023",
    excerpt: "Conheça as principais tendências que estão moldando o mercado imobiliário neste ano.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "28 de Março, 2023",
    author: "Juliana Costa",
    image: "/placeholder.svg?height=400&width=800",
    category: "Mercado",
  },
  {
    id: 3,
    title: "Dicas para decorar seu apartamento com estilo",
    excerpt: "Aprenda como transformar seu apartamento com dicas de decoração que combinam estilo e funcionalidade.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "10 de Março, 2023",
    author: "Camila Santos",
    image: "/placeholder.svg?height=400&width=800",
    category: "Decoração",
  },
  {
    id: 4,
    title: "O impacto da sustentabilidade no valor dos imóveis",
    excerpt: "Entenda como práticas sustentáveis podem valorizar seu imóvel e atrair mais compradores.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "5 de Março, 2023",
    author: "Fernando Gomes",
    image: "/placeholder.svg?height=400&width=800",
    category: "Sustentabilidade",
  },
  {
    id: 5,
    title: "Como preparar seu imóvel para venda",
    excerpt: "Dicas práticas para valorizar seu imóvel e atrair compradores rapidamente.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "20 de Fevereiro, 2023",
    author: "Mariana Lima",
    image: "/placeholder.svg?height=400&width=800",
    category: "Vendas",
  },
  {
    id: 6,
    title: "Financiamento imobiliário: o que você precisa saber",
    excerpt: "Um guia completo sobre as opções de financiamento disponíveis no mercado.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
    date: "10 de Fevereiro, 2023",
    author: "Paulo Mendes",
    image: "/placeholder.svg?height=400&width=800",
    category: "Financiamento",
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-archivo tracking-wider mb-4">Blog Imobiliário</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fique por dentro das últimas novidades e tendências do mercado imobiliário
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <Link href={`/blog/${post.id}`} className="group">
                  <div className="relative h-64">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <Link href={`/blog/${post.id}`} className="group">
                    <h2 className="text-2xl font-archivo tracking-wider mb-3 group-hover:text-[#c38d51] transition-colors">
                      {post.title}
                    </h2>
                  </Link>

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

                  <div className="mt-4">
                    <Link href={`/blog/${post.id}`} className="text-[#c38d51] font-medium hover:underline">
                      Ler mais
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-archivo tracking-wider mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog?categoria=investimentos"
                  className="text-gray-700 hover:text-[#c38d51] transition-colors"
                >
                  Investimentos
                </Link>
              </li>
              <li>
                <Link href="/blog?categoria=mercado" className="text-gray-700 hover:text-[#c38d51] transition-colors">
                  Mercado
                </Link>
              </li>
              <li>
                <Link href="/blog?categoria=decoracao" className="text-gray-700 hover:text-[#c38d51] transition-colors">
                  Decoração
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?categoria=sustentabilidade"
                  className="text-gray-700 hover:text-[#c38d51] transition-colors"
                >
                  Sustentabilidade
                </Link>
              </li>
              <li>
                <Link href="/blog?categoria=vendas" className="text-gray-700 hover:text-[#c38d51] transition-colors">
                  Vendas
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?categoria=financiamento"
                  className="text-gray-700 hover:text-[#c38d51] transition-colors"
                >
                  Financiamento
                </Link>
              </li>
            </ul>
          </div>

          <Advertisement position="blog-sidebar" />

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-archivo tracking-wider mb-4">Posts Populares</h3>
            <div className="space-y-4">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#c38d51] transition-colors">{post.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
