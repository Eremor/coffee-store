import { RootState } from 'app/providers/StoreProvider';

export const getTotalPrice = (state: RootState) => state.total.totalPrice;

export const getBasePrice = (state: RootState) => state.total.basePrice;

export const getMarkupVolume = (state: RootState) => state.total.markupVolume;

export const getMarkupAdditives = (state: RootState) => state.total.markupAdditives;
