import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  RefreshControl,
  ListRenderItem,
} from 'react-native';
import {useProducts} from '$src/api/api';
import {Product} from '$src/types/product';
import {useSelector} from 'react-redux';
import {RootState} from '$src/store/store';
import {ProductItem} from '$src/components/ProductItem';
import {ProductListScreenProps} from '$src/types/navigation';

const ProductListScreen: React.FC<ProductListScreenProps> = ({navigation}) => {
  const {
    data: apiProducts,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useProducts();

  const localProducts = useSelector((state: RootState) => state.products.items);

  const products = React.useMemo(() => {
    if (localProducts.length > 0) {
      return localProducts;
    }
    return apiProducts || [];
  }, [apiProducts, localProducts]);

  const renderItem: ListRenderItem<Product> = React.useCallback(
    ({item}) => (
      <ProductItem
        item={item}
        onPress={() => navigation.navigate('ProductPage', {product: item})}
      />
    ),
    [navigation],
  );

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList<Product>
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={10}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
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

export default ProductListScreen;
