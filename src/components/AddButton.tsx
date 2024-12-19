import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type AddButtonProps = {
  onPress: () => void;
};

export const AddButton: React.FC<AddButtonProps> = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Icon name="add" size={24} color="#000" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginRight: 10,
  },
});
