import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  },
});

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

export const getProperties = async (): Promise<Property[]> => {
  try {
    const { data } = await api.get<ApiResponse<Property[]>>('/imovels?populate=*');
    
    if (!data?.data) {
      throw new Error('Formato de resposta inválido');
    }

    return data.data.map(property => ({
      ...property,
      // Garante que images sempre seja um array
      images: Array.isArray(property.images) ? property.images : []
    }));
    
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error('Erro ao buscar imóveis:', {
      url: axiosError.config?.url,
      status: axiosError.response?.status,
      error: axiosError.response?.data || axiosError.message,
    });
    throw new Error('Não foi possível carregar os imóveis');
  }
};

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