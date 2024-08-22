export type {
  TotalSchema,
} from './model/types/TotalSchema';

export {
  totalActions,
  totalReducer,
} from './model/slice/totalSLice';

export {
  getTotalPrice,
  getBasePrice,
  getMarkupVolume,
  getMarkupAdditives,
} from './model/selectors/totalSelector';
