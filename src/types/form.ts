import {Product} from '$src/types/product';

export type FormValues = Omit<Product, 'id' | 'category' | 'price'> & {
  price: string;
};
