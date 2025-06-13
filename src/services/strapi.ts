import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});


// INICIO IMOVEIS

// Tipo para a imagem (ajustado para o formato simplificado)
export interface PropertyImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
}

// Tipo principal para o imóvel (formato simplificado)
export interface Property {
  id: number;
  title: string;
  location: string;
  address: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  featured: boolean;
  slug: string;
  type: string;
  amenities: string[];
  images: PropertyImage[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Tipo para a resposta da API
interface ApiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const getProperties = async (filters?: {
  type?: string;
  minPrice?: string;
  maxPrice?: string;
}): Promise<any[]> => {
  try {
    const params: any = {
      populate: '*',
      next: {tags: ['featured-properties']}
    }

    if (filters) {
      if (filters.type) {
        params.filters = {
          ...params.filters,
          type: { $eq: filters.type }
        }
      }

      if (filters.minPrice || filters.maxPrice) {
        params.filters = {
          ...params.filters,
          price: {
            ...(filters.minPrice && { $gte: Number(filters.minPrice) }),
            ...(filters.maxPrice && { $lte: Number(filters.maxPrice) })
          }
        }
      }
    }

    const { data } = await api.get<ApiResponse<any[]>>('/imovels', { params })
    return data.data || []
  } catch (error) {
    console.error("Failed to load properties:", error)
    return []
  }
}

export const getPropertyBySlug = async (slug: string): Promise<Property | null> => {
  try {
    const { data } = await api.get<ApiResponse<Property[]>>('/imovels?populate=*', {
      params: {
        filters: { slug: { $eq: slug } },
      },
    });

    if (!data?.data?.length) {
      return null;
    }

    return {
      ...data.data[0],
      images: Array.isArray(data.data[0].images) ? data.data[0].images : []
    };

  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Erro ao buscar imóvel:', {
      slug,
      url: axiosError.config?.url,
      status: axiosError.response?.status,
      error: axiosError.response?.data || axiosError.message,
    });
    return null;
  }
};

// Função auxiliar para URLs de imagem
export const getImageUrl = (image: PropertyImage): string => {
  if (!image?.url) return '/placeholder.svg';
  return image.url.startsWith('http') ? image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
};

// FINAL IMOVEIS

// INICIO BLOG

// Tipos para o blog
interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
  size?: number;
}

interface StrapiImageAttributes {
  url: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
}

interface StrapiImageData {
  id: number;
  attributes: StrapiImageAttributes;
}

export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    text: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    date: string;
    author: string;
    resume: string;
    category: string;
    image: {
      data: StrapiImageData[];
    };
  };
}

// Funções para o blog
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data } = await api.get<{ data: any[] }>('/blogs?populate=*');
    
    if (!data.data) return [];

    return data.data.map(post => ({
      id: post.id,
      attributes: {
        title: post.title,
        text: post.text,
        slug: post.slug,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        publishedAt: post.publishedAt,
        date: post.date,
        author: post.author,
        resume: post.resume,
        category: post.category,
        image: {
          data: post.image ? post.image.map((img: any) => ({
            id: img.id,
            attributes: {
              url: img.url,
              alternativeText: img.alternativeText,
              caption: img.caption,
              width: img.width,
              height: img.height,
              formats: img.formats
            }
          })) : []
        }
      }
    }));
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    return [];
  }
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data } = await api.get<ApiResponse<BlogPost[]>>('/blogs', {
      params: {
        populate: '*',
        filters: { slug: { $eq: slug } },
      },
    });

    if (!data?.data?.length) {
      return null;
    }

    return data.data[0];
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Erro ao buscar post do blog:', {
      slug,
      url: axiosError.config?.url,
      status: axiosError.response?.status,
      error: axiosError.response?.data || axiosError.message,
    });
    return null;
  }
};

export const getBlogCategories = async (): Promise<string[]> => {
  try {
    const posts = await getBlogPosts();
    const categories = new Set(
      posts
        .map(post => post.attributes?.category)
        .filter(category => category !== undefined && category !== null)
    );
    return Array.from(categories) as string[];
  } catch (error) {
    console.error("Failed to load blog categories:", error);
    return [];
  }
};

// Função auxiliar para URLs de imagem do blog
export const getBlogImageUrl = (
  imageData: StrapiImageData[],
  format: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'original'
): string => {
  if (!imageData || imageData.length === 0) return '/placeholder.svg';
  
  const img = imageData[0].attributes;
  let url = img.url;
  
  if (format !== 'original' && img.formats?.[format]?.url) {
    url = img.formats[format].url;
  }
  
  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
};

// FINAL BLOG