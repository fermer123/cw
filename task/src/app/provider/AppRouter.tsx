import {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import LoadingSpinner from '@entities/Loading/LoadingSpinner';
import {routeConfig} from '@shared/conig/routeConfig/routeConfig';
import useLocalStorage from '@shared/hooks/useLocalStorage/useLocalStorage';
import ProtectedRoute from '@widgets/ProtectedRoute/ProtectedRoute';

const AppRouter: FC = () => {
  const [user] = useLocalStorage<string>('user', '');

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => {
          if (path === '/login' || path === '/register') {
            return <Route key={path} path={path} element={element} />;
          }
          return (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute user={user}>{element}</ProtectedRoute>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
