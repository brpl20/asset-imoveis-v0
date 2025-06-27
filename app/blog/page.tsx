import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { getBlogPosts, getBlogCategories, getBlogImageUrl } from "@/src/services/strapi"

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = await getBlogCategories();

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
            {posts.map((post) => {
              const mainImage = post.attributes.image?.data?.[0]?.attributes;

              return (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <Link href={`/blog/${post.attributes.slug}`} className="group">
                    <div className="relative h-64">
                      <Image
                        src={mainImage
                          ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${mainImage.url}`
                          : "/placeholder.svg"}
                        alt={post.attributes.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                        {post.attributes.category}
                      </div>
                    </div>
                  </Link>

                  <div className="p-6">
                    <Link href={`/blog/${post.attributes.slug}`} className="group">
                      <h2 className="text-2xl font-archivo tracking-wider mb-3 group-hover:text-[#c38d51] transition-colors">
                        {post.attributes.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 mb-4">{post.attributes.resume}</p>

                    <div className="flex justify-between text-sm text-gray-500 border-t pt-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {new Date(post.attributes.publishedAt).toLocaleDateString('pt-BR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.attributes.author}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <Link href={`/blog/${post.attributes.slug}`} className="text-[#c38d51] font-medium hover:underline">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-archivo tracking-wider mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    href={`/blog?categoria=${category.toLowerCase()}`}
                    className="text-gray-700 hover:text-[#c38d51] transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-archivo tracking-wider mb-4">Posts Populares</h3>
            <div className="space-y-4">
              {posts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.attributes.slug}`} className="group flex gap-3">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={post.attributes.image?.data
                        ? getBlogImageUrl(post.attributes.image.data, 'thumbnail')
                        : "/placeholder.svg"}
                      alt={post.attributes.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#c38d51] transition-colors">
                      {post.attributes.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(post.attributes.publishedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
