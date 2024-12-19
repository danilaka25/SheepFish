import { Product } from '$src/types/product';
import {StackNavigationProp} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  ProductList: undefined;
  ProductPage: {product: Product};
  ProductAdd: undefined;
};

export type NavigationOptionsProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

export type ProductListScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductList'>;
};

export type ProductAddScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductAdd'>;
};

export type ProductPageScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'ProductPage'>;
  route: RouteProp<RootStackParamList, 'ProductPage'>;
};
