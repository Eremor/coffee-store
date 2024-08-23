export enum AppRoutes {
  MAIN = 'main',
  ORDER = 'order',
  ORDER_CARD = 'order_card',
  ORDER_CASH = 'order_cash',
  PAY_ERROR = 'pay_error',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ORDER]: '/order',
  [AppRoutes.ORDER_CARD]: '/order/card',
  [AppRoutes.ORDER_CASH]: '/order/cash',
  [AppRoutes.PAY_ERROR]: '/order/pay_error',
  [AppRoutes.NOT_FOUND]: '*',
};
