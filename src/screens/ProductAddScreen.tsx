import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Formik} from 'formik';
import {productValidationSchema} from '$src/utils/validation';
import {Product} from '$src/types/product';
import {useDispatch} from 'react-redux';
import {addProduct} from '$src/store/productSlice';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getRandomImage} from '$src/utils/getRandomImage';
import {ProductAddScreenProps} from '$src/types/navigation';
import {FormValues} from '$src/types/form';

const ProductAddScreen: React.FC<ProductAddScreenProps> = ({navigation}) => {
  const [isSaving, setIsSaving] = React.useState(false);
  const dispatch = useDispatch();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSaving(true);
      const newProduct: Product = {
        ...values,
        price: Number(values.price),
        id: Date.now(),
        category: 'other',
      };

      dispatch(addProduct(newProduct));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving product:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScrollView style={styles.container}>
        <Formik
          initialValues={{title: '', price: '', description: '', image: ''}}
          validationSchema={productValidationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            submitForm,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.title && errors.title && styles.inputError,
                  ]}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  value={values.title}
                  placeholder="Product title"
                />
                {touched.title && errors.title && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.error}>{errors.title}</Text>
                  </View>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Price</Text>
                <TextInput
                  style={[
                    styles.input,
                    touched.price && errors.price && styles.inputError,
                  ]}
                  onChangeText={handleChange('price')}
                  onBlur={handleBlur('price')}
                  value={values.price}
                  placeholder="Product price"
                  keyboardType="numeric"
                />
                {touched.price && errors.price && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.error}>{errors.price}</Text>
                  </View>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                  style={[
                    styles.input,
                    styles.textArea,
                    touched.description &&
                      errors.description &&
                      styles.inputError,
                  ]}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  placeholder="Product description"
                  multiline
                  numberOfLines={4}
                />
                {touched.description && errors.description && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.error}>{errors.description}</Text>
                  </View>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Image URL</Text>
                <View style={styles.imageInputContainer}>
                  <TextInput
                    style={[
                      styles.input,
                      touched.image && errors.image && styles.inputError,
                    ]}
                    onChangeText={handleChange('image')}
                    onBlur={handleBlur('image')}
                    value={values.image}
                    placeholder="Product image URL"
                    multiline
                  />
                  <TouchableOpacity
                    style={styles.imageInputIcon}
                    onPress={() => setFieldValue('image', getRandomImage())}>
                    <Icon
                      name="add-photo-alternate"
                      size={24}
                      color="#007AFF"
                    />
                  </TouchableOpacity>
                </View>
                {touched.image && errors.image && (
                  <View style={styles.errorContainer}>
                    <Text style={styles.error}>{errors.image}</Text>
                  </View>
                )}
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={submitForm}
                disabled={isSaving}>
                {isSaving ? (
                  <ActivityIndicator color="white" />
                ) : (
                  <Text style={styles.buttonText}>Add Product</Text>
                )}
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorContainer: {
    position: 'absolute',
    top: 3,
    right: 5,
  },
  error: {
    color: '#FF3B30',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  imageInputContainer: {
    position: 'relative',
  },
  imageInputIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{translateY: -12}],
  },
  inputError: {
    borderColor: '#FF3B30',
  },
});

export default ProductAddScreen;
