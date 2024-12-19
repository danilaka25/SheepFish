import * as Yup from 'yup';

export const productValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  price: Yup.number()
    .required('Price is required')
    .positive('Price must be positive'),
  description: Yup.string().required('Description is required'),
  image: Yup.string()
    .url('Must be a valid URL')
    .required('Image URL is required'),
});
