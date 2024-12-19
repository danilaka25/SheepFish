import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '$src/types/navigation';
import {LoadingImage} from '$src/components/LoadingImage';

type ProductPageScreenProps = {
  route: RouteProp<RootStackParamList, 'ProductPage'>;
};

const ProductPageScreen: React.FC<ProductPageScreenProps> = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <LoadingImage source={{uri: product.image}} style={styles.image} />
      <ScrollView style={styles.scrollContent}>
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 300,
  },
  scrollContent: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
});

export default ProductPageScreen;
