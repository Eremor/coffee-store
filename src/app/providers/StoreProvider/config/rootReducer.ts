import { combineReducers } from '@reduxjs/toolkit';

import { StateSchema } from '../types/StateSchema';
import { productsReducer } from 'pages/MainPage';

export const rootReducer = combineReducers<StateSchema>({
  products: productsReducer,
});
