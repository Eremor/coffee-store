import { Product } from 'entities/Product';

export interface ProductsSchema {
  isLoading: boolean
  data?: Product[]
  error?: string
}
