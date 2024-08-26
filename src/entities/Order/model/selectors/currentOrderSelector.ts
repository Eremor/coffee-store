import { RootState } from 'app/providers/StoreProvider';

export const getSelectedProductId = (state: RootState) => state.currentOrder.productId;
