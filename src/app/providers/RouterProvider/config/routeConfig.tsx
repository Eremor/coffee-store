import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { OrderPage } from 'pages/OrderPage';
import { NotFoundPage } from 'pages/NotFoundPage';

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
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
