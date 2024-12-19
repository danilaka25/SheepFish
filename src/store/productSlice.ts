import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '$src/types/product';

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    clearProducts: state => {
      state.items = [];
    },
  },
});

export const {addProduct, clearProducts} = productSlice.actions;
export default productSlice.reducer;
