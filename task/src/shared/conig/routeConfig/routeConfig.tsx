import {RouteProps} from 'react-router-dom';

import Home from '@src/pages/Home/Home';
import Login from '@src/pages/Login/Login';
import NotFoundPage from '@src/pages/NotFoundPage/NotFoundPage';
import Register from '@src/pages/Register/Register';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  REGISTER = 'register',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <Home />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <Login />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <Register />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
