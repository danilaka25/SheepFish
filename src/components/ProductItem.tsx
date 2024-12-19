import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {LoadingImage} from '$src/components/LoadingImage';
import {Product} from '$src/types/product';

type ProductItemProps = {
  item: Product;
  onPress: () => void;
};

export const ProductItem = React.memo<ProductItemProps>(({item, onPress}) => (
  <TouchableOpacity style={styles.productCard} onPress={onPress}>
    <LoadingImage
      source={{uri: item.image}}
      style={styles.productImage}
      loaderStyle={styles.imageLoader}
    />
    <View style={styles.productInfo}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  </TouchableOpacity>
));

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productInfo: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  imageLoader: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});
