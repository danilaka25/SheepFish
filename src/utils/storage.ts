import AsyncStorage from '@react-native-async-storage/async-storage';
import {Product} from '$src/types/product';

const STORAGE_KEYS = {
  PRODUCTS: 'products',
};

export const storage = {
  products: {
    get: async (): Promise<Product[]> => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEYS.PRODUCTS);
        return data ? JSON.parse(data) : [];
      } catch {
        return [];
      }
    },
    set: async (products: Product[]): Promise<void> => {
      try {
        await AsyncStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
      } catch (error) {
        console.error('Error saving products:', error);
      }
    },
  },
};
