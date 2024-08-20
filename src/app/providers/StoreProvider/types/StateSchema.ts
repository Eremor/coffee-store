import { Reducer } from '@reduxjs/toolkit';

import { ProductsSchema } from 'pages/MainPage';

export interface StateSchema {
  products: Reducer<ProductsSchema>
}
