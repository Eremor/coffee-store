import { Reducer } from '@reduxjs/toolkit';

import { ProductsSchema } from 'entities/Product';

export interface StateSchema {
  products: Reducer<ProductsSchema>
}
