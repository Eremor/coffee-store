import { Reducer } from '@reduxjs/toolkit';

import { ProductsSchema } from 'entities/Product';
import { TotalSchema } from 'entities/Total';

export interface StateSchema {
  products: Reducer<ProductsSchema>
  total: Reducer<TotalSchema>
}
