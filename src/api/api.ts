import {useQuery} from '@tanstack/react-query';
import {Product} from '$src/types/product';

const BASE_URL = 'https://fakestoreapi.com';

const client = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Unknown error');
    }
  },
};

const api = {
  products: {
    getAll: () => client.get<Product[]>('/products'),
  },
};

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: api.products.getAll,
  });
};

export default api;
