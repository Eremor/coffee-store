import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TotalSchema } from '../types/TotalSchema';

const initialState: TotalSchema = {
  totalPrice: 0,
  basePrice: 0,
  markupVolume: 0,
  markupAdditives: 0,
};

const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setBasePrice: (state, action: PayloadAction<number>) => {
      state.basePrice = action.payload;
    },
    setMarkupVolume: (state, action: PayloadAction<number>) => {
      state.markupVolume = action.payload;
    },
    setMarkupAdditives: (state, action: PayloadAction<number>) => {
      state.markupAdditives = action.payload;
    },
    clearTotal: (state) => {
      state.totalPrice = 0;
      state.basePrice = 0;
      state.markupVolume = 0;
      state.markupAdditives = 0;
    },
  },
});

export const { actions: totalActions } = totalSlice;
export const { reducer: totalReducer } = totalSlice;
