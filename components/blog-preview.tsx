// components/blog-preview.tsx
import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { CustomButton } from "./ui/custom-button"
import { getBlogPosts, getBlogImageUrl } from "@/src/services/strapi"

export default async function BlogPreview() {
  const posts = await getBlogPosts();
  const limitedPosts = posts.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-archivo tracking-wider mb-4">Blog Imobiliário</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das últimas novidades e tendências do mercado imobiliário
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {limitedPosts.map((post) => {
            const postData = post.attributes || post;
            const mainImage = postData.image?.data?.[0]?.attributes;

            return (
              <Link 
                href={`/blog/${postData.slug}`} 
                key={post.id} 
                className="group"
              >
                <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={mainImage
                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${mainImage.url}`
                        : "/placeholder.svg"}
                      alt={postData.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#f3c76c] text-black px-3 py-1 rounded-full text-sm font-medium">
                      {postData.category}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-archivo tracking-wider mb-3 group-hover:text-[#c38d51] transition-colors">
                      {postData.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{postData.resume}</p>

                    <div className="flex justify-between text-sm text-gray-500 border-t pt-4 mt-auto">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(postData.publishedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{postData.author}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
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
