import { RootState } from 'app/providers/StoreProvider';

export const getProductsData = (state: RootState) => state.products?.data;

export const getProductsIsLoading = (state: RootState) => state.products.isLoading;

export const getProductsError = (state: RootState) => state.products?.error;
