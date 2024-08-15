declare module 'eslint-plugin-react-hooks';
declare module 'eslint-plugin-react-refresh';

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;