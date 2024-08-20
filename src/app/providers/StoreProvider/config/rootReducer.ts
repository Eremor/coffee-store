import { combineReducers } from '@reduxjs/toolkit';

import { productsReducer } from 'entities/Product';

import { StateSchema } from '../types/StateSchema';

export const rootReducer = combineReducers<StateSchema>({
  products: productsReducer,
});
