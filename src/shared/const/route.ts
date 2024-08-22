export enum AppRoutes {
  MAIN = 'main',
  ORDER = 'order',
  ORDER_CARD = 'order_card',
  ORDER_CASH = 'order_cash',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ORDER]: '/order',
  [AppRoutes.ORDER_CARD]: '/order/card',
  [AppRoutes.ORDER_CASH]: '/order/cash',
  [AppRoutes.NOT_FOUND]: '*',
};
