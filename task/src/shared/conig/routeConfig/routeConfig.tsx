import {RouteProps} from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <>123</>,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <>123</>,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <>123</>,
  },
};
