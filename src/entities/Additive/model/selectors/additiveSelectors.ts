import { RootState } from 'app/providers/StoreProvider';

export const getAdditives = (state: RootState) => state.additive.additives;
