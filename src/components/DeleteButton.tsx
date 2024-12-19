import React from 'react';
import {TouchableOpacity, Alert, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {clearProducts} from '$src/store/productSlice';

export const DeleteButton = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
    Alert.alert(
      'Delete All Products',
      'Are you sure you want to delete all local products?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => dispatch(clearProducts()),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Icon name="delete" size={24} color="#FF3B30" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 16,
  },
});
