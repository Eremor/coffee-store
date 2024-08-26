export enum AppRoutes {
  MAIN = 'main',
  ORDER = 'order',
  ORDER_CARD = 'order_card',
  ORDER_CASH = 'order_cash',
  PAY_ERROR = 'pay_error',
  VEND = 'vend',
  VEND_ERROR = 'vend_error',
  VEND_FINISH = 'vend_finish',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ORDER]: '/order',
  [AppRoutes.ORDER_CARD]: '/pay/card',
  [AppRoutes.ORDER_CASH]: '/pay/cash',
  [AppRoutes.PAY_ERROR]: '/pay/pay_error',
  [AppRoutes.VEND]: '/vend',
  [AppRoutes.VEND_ERROR]: '/vend/error',
  [AppRoutes.VEND_FINISH]: '/vend/finish',
  [AppRoutes.NOT_FOUND]: '*',
};
