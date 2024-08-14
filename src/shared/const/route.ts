export enum AppRoutes {
  MAIN = 'main',
  ORDER = 'order',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ORDER]: '/order/',
  [AppRoutes.NOT_FOUND]: '*'
}