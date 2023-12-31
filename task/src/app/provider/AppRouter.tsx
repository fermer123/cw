import {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {routeConfig} from '@app/routeConfig/routeConfig';
import LoadingSpinner from '@entities/Loading/LoadingSpinner';
import useLocalStorage from '@shared/hooks/useLocalStorage/useLocalStorage';
import ProtectedRoute from '@widgets/ProtectedRoute/ProtectedRoute';

const AppRouter: FC = () => {
  const [user] = useLocalStorage<string>('user', '');

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => {
          if (path === '/login' || path === '/register' || path === '*') {
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
