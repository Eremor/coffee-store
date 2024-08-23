import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { OrderPage } from 'pages/OrderPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { OrderCashPage } from 'pages/OrderCashPage';
import { OrderCardPage } from 'pages/OrderCardPage';
import { PayErrorPage } from 'pages/PayErrorPage';

import { AppRoutes, RoutePath } from 'shared/const/route';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ORDER]: {
    path: RoutePath.order,
    element: <OrderPage />,
  },
  [AppRoutes.ORDER_CARD]: {
    path: RoutePath.order_card,
    element: <OrderCardPage />,
  },
  [AppRoutes.ORDER_CASH]: {
    path: RoutePath.order_cash,
    element: <OrderCashPage />,
  },
  [AppRoutes.PAY_ERROR]: {
    path: RoutePath.pay_error,
    element: <PayErrorPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
