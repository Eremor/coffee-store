import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from 'entities/Product';
import { totalReducer } from 'entities/Total';
import { additiveReducer } from 'entities/Additive';

import { StateSchema } from '../types/StateSchema';

export const rootReducer = combineReducers<StateSchema>({
  products: productsReducer,
  total: totalReducer,
  additive: additiveReducer,
});
