import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from 'entities/Product';

import { ProductsSchema } from '../types/ProductsSchema';
import { fetchAllProducts } from '../services/fetchAllProducts/fetchAllProducts';

const initialState: ProductsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
