import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from 'entities/Product';

export const fetchAllProducts = createAsyncThunk<Product[], undefined>(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('./products.json');

      if (!response.ok) {
        throw new Error('Файл с данными не найден');
      }

      const data: { products: Product[] } = await response.json();

      return data.products;
    }
    catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
