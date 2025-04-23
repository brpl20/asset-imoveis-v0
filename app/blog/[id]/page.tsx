import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import Advertisement from "@/components/advertisement"

// Dados simulados de posts do blog
const posts = [
  {
    id: 1,
    title: "Como escolher o imóvel ideal para investimento",
    excerpt: "Descubra as principais dicas para fazer um investimento imobiliário seguro e lucrativo.",
    content: `
      <p>Investir em imóveis continua sendo uma das opções mais seguras e rentáveis no mercado financeiro. No entanto, para garantir o sucesso do seu investimento, é fundamental fazer escolhas estratégicas e bem informadas.</p>
      
      <h2>Localização é fundamental</h2>
      <p>O primeiro e mais importante fator a considerar é a localização do imóvel. Propriedades em áreas com boa infraestrutura, fácil acesso a transporte público, próximas a escolas, hospitais e centros comerciais tendem a valorizar mais rapidamente e atrair inquilinos com facilidade.</p>
      
      <h2>Analise o potencial de valorização</h2>
      <p>Pesquise sobre projetos futuros para a região, como novas linhas de metrô, shopping centers ou parques. Esses desenvolvimentos podem aumentar significativamente o valor do seu imóvel a médio e longo prazo.</p>
      
      <h2>Considere o perfil do inquilino</h2>
      <p>Defina antecipadamente qual tipo de inquilino você deseja atrair. Estudantes universitários? Famílias? Executivos? Cada perfil tem necessidades específicas que influenciarão na escolha do imóvel ideal para investimento.</p>
      
      <h2>Avalie a rentabilidade</h2>
      <p>Calcule o retorno sobre o investimento (ROI) antes de fechar negócio. Compare o valor do aluguel com o preço de compra do imóvel para determinar se o investimento é realmente vantajoso.</p>
      
      <h2>Fique atento às tendências do mercado</h2>
      <p>O mercado imobiliário está em constante evolução. Atualmente, imóveis compactos em áreas centrais e com foco em sustentabilidade estão entre os mais procurados.</p>
      
      <h2>Conclusão</h2>
      <p>Investir em imóveis pode ser extremamente lucrativo quando feito com planejamento e conhecimento. Consulte sempre um especialista do mercado imobiliário antes de tomar sua decisão final.</p>
    `,
    date: "15 de Abril, 2023",
    author: "Ricardo Almeida",
    authorRole: "Especialista em Investimentos Imobiliários",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Investimentos",
    tags: ["investimento", "imóveis", "rentabilidade", "mercado imobiliário"],
  },
  {
    id: 2,
    title: "Tendências do mercado imobiliário para 2023",
    excerpt: "Conheça as principais tendências que estão moldando o mercado imobiliário neste ano.",
    content: `
      <p>O mercado imobiliário está em constante evolução, adaptando-se às novas necessidades e comportamentos dos consumidores. Em 2023, algumas tendências se destacam e prometem moldar o setor nos próximos anos.</p>
      
      <h2>Sustentabilidade como prioridade</h2>
      <p>Imóveis com certificações ambientais, sistemas de energia solar e reaproveitamento de água estão cada vez mais valorizados. Consumidores conscientes buscam propriedades que minimizem o impacto ambiental.</p>
      
      <h2>Espaços multifuncionais</h2>
      <p>Com o aumento do trabalho remoto, ambientes que possam ser adaptados para diferentes funções se tornaram essenciais. Home offices, áreas de lazer e espaços para exercícios físicos são diferenciais importantes.</p>
      
      <h2>Tecnologia integrada</h2>
      <p>Casas inteligentes não são mais futuro, mas presente. Sistemas automatizados de iluminação, segurança e climatização são cada vez mais procurados pelos compradores.</p>
      
      <h2>Valorização de áreas externas</h2>
      <p>Varandas, terraços e áreas verdes ganharam ainda mais importância após a pandemia. Imóveis com esses espaços tendem a ser mais valorizados no mercado.</p>
      
      <h2>Crescimento do mercado de aluguel</h2>
      <p>A geração mais jovem tem preferido a flexibilidade do aluguel à estabilidade da compra. Isso tem impulsionado o mercado de locação, especialmente em grandes centros urbanos.</p>
      
      <h2>Conclusão</h2>
      <p>Acompanhar as tendências do mercado imobiliário é fundamental tanto para investidores quanto para compradores. Estar atento a essas mudanças pode significar melhores negócios e investimentos mais seguros.</p>
    `,
    date: "28 de Março, 2023",
    author: "Juliana Costa",
    authorRole: "Analista de Mercado Imobiliário",
    authorImage: "/placeholder.svg?height=100&width=100",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Mercado",
    tags: ["tendências", "mercado imobiliário", "2023", "sustentabilidade", "tecnologia"],
  },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = posts.find((p) => p.id === postId) || posts[0]

  // Posts relacionados (simulação)
  const relatedPosts = posts.filter((p) => p.id !== postId).slice(0, 2)

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Link href="/blog" className="inline-flex items-center text-[#c38d51] mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o Blog
          </Link>

          <article className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-80">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-3xl md:text-4xl font-archivo tracking-wider mb-4">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>

              <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="border-t border-b py-4 my-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag}`}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={post.authorImage || "/placeholder.svg"}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{post.author}</h4>
                    <p className="text-sm text-gray-600">{post.authorRole}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Link
                    href={`https://facebook.com/share?url=${encodeURIComponent(`https://assetimobiliaria.com.br/blog/${post.id}`)}`}
                    target="_blank"
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Compartilhar no Facebook</span>
                  </Link>
                  <Link
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://assetimobiliaria.com.br/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Compartilhar no Twitter</span>
                  </Link>
                  <Link
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://assetimobiliaria.com.br/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Compartilhar no LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>

          <Advertisement position="property-detail" className="my-8" />

          {relatedPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-archivo tracking-wider mb-6">Posts Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
                    <article className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                      <div className="relative h-48">
                        <Image
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-archivo tracking-wider mb-2 group-hover:text-[#c38d51] transition-colors">
                          {relatedPost.title}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{relatedPost.excerpt}</p>

                        <div className="text-xs text-gray-500">{relatedPost.date}</div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
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
              {posts.slice(0, 3).map((popularPost) => (
                <Link key={popularPost.id} href={`/blog/${popularPost.id}`} className="group flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={popularPost.image || "/placeholder.svg"}
                      alt={popularPost.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#c38d51] transition-colors">
                      {popularPost.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{popularPost.date}</p>
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
