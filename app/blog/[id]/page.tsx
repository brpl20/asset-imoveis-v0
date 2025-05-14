import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Facebook, Twitter, Linkedin, ArrowLeft } from "lucide-react"
import { getBlogPostBySlug, getBlogPosts, getBlogImageUrl } from "@/src/services/strapi"
import ReactMarkdown from 'react-markdown';

const getSafeImageUrl = (post: any) => {
  const image = post?.attributes?.image?.data?.[0]?.attributes || 
               post?.image?.[0] || 
               post?.attributes?.image?.[0];
  
  if (!image?.url) return '/placeholder.svg';
  
  return image.url.startsWith('http') 
    ? image.url 
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  const allPosts = await getBlogPosts();

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-archivo mb-4">Post não encontrado</h1>
          <Link href="/blog" className="text-[#c38d51] hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }
 // Extrai os dados do post de forma segura
  const postData = post.attributes || post;
  const imageUrl = getSafeImageUrl(post);

  // Posts relacionados (exclui o atual e pega os 2 mais recentes)
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  // Função para formatar a data
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="flex justify-center py-14 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        <Link href="/blog" className="inline-flex items-center text-[#c38d51] mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar para o Blog
        </Link>

        <article className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-80 w-full">
            <Image
              src={imageUrl}
              alt={postData.title || 'Imagem do post'}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-archivo tracking-wider mb-4">
              {postData.title || 'Título não disponível'}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{postData.publishedAt ? formatDate(postData.publishedAt) : 'Data não disponível'}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{postData.author || 'Autor desconhecido'}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8 text-justify">
              <ReactMarkdown>
                {postData.text}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Posts relacionados */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-archivo tracking-wider mb-6">Você também pode gostar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => {
                const relatedPostData = relatedPost.attributes || relatedPost;
                const relatedImageUrl = getSafeImageUrl(relatedPost);
                
                return (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPostData.slug}`} 
                    className="group transition-transform hover:scale-[1.02]"
                  >
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                      <div className="relative h-48">
                        <Image
                          src={relatedImageUrl}
                          alt={relatedPostData.title || 'Imagem do post'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium group-hover:text-[#c38d51] transition-colors">
                          {relatedPostData.title || 'Título não disponível'}
                        </h4>
                        <p className="text-sm text-gray-500 mt-2">
                          {relatedPostData.publishedAt ? formatDate(relatedPostData.publishedAt) : ''}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map(post => ({
    slug: (post.attributes || post).slug,
  }));
}

