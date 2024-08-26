import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentOrderSchema } from '../types/CurrentOrderSchema';

const initialState: CurrentOrderSchema = {
  productId: '',
};

const currentOrderSlice = createSlice({
  name: 'currentOrder',
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<string>) => {
      state.productId = action.payload;
    },
    clearSelectedProductId: (state) => {
      state.productId = '';
    },
  },
});

export const { actions: currentOrderActions } = currentOrderSlice;
export const { reducer: currentOrderReducer } = currentOrderSlice;
