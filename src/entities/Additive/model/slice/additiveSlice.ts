import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Syrups } from '../const/const';
import { AdditiveSchema } from '../types/AdditiveSchema';
import { Additive } from '../types/Additive';

const initialState: AdditiveSchema = {
  additives: [
    {
      title: Syrups.Vanilla,
      weight: 0,
    },
    {
      title: Syrups.Mint,
      weight: 0,
    },
    {
      title: Syrups.Caramel,
      weight: 0,
    },
    {
      title: Syrups.Chocolate,
      weight: 0,
    },
  ],
};

const AdditiveSlice = createSlice({
  name: 'additive',
  initialState,
  reducers: {
    setAdditiveWeight: (state, action: PayloadAction<Additive>) => {
      const { title, weight } = action.payload;
      const additive = state.additives.find(item => item.title === title);
      if (additive) {
        additive.weight = weight;
      }
    },
    clearAdditives: (state) => {
      state.additives.forEach((additive) => {
        additive.weight = 0;
      });
    },
  },
});

export const { actions: additiveActions } = AdditiveSlice;
export const { reducer: additiveReducer } = AdditiveSlice;
