import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductListScreen from '$src/screens/ProductListScreen';
import ProductPageScreen from '$src/screens/ProductPageScreen';
import ProductAddScreen from '$src/screens/ProductAddScreen';
import {RootStackParamList} from '$src/types/navigation';
import {AddButton} from '$src/components/AddButton';
import {DeleteButton} from '$src/components/DeleteButton';
import {StackNavigationOptions} from '@react-navigation/stack';
import {NavigationOptionsProps} from '$src/types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const navigationOptions = {
  ProductList: ({
    navigation,
  }: NavigationOptionsProps): StackNavigationOptions => ({
    title: 'Products',
    headerRight: () => (
      <AddButton onPress={() => navigation.navigate('ProductAdd')} />
    ),
  }),
  ProductPage: {
    title: 'Product Details',
  },
  ProductAdd: (): StackNavigationOptions => ({
    title: 'Add Product',
    headerRight: () => <DeleteButton />,
  }),
};

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          gestureDirection: 'horizontal',
        }}>
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={navigationOptions.ProductList}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPageScreen}
          options={navigationOptions.ProductPage}
        />
        <Stack.Screen
          name="ProductAdd"
          component={ProductAddScreen}
          options={navigationOptions.ProductAdd}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
