import { Reducer } from '@reduxjs/toolkit';

import { ProductsSchema } from 'entities/Product';
import { TotalSchema } from 'entities/Total';
import { AdditiveSchema } from 'entities/Additive';

export interface StateSchema {
  products: Reducer<ProductsSchema>
  total: Reducer<TotalSchema>
  additive: Reducer<AdditiveSchema>
}
