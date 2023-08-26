import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import LoadingSpinner from '@entities/Loading/LoadingSpinner';
import useLocalStorage from '@shared/hooks/useLocalStorage/useLocalStorage';
import ProtectedRoute from '@widgets/ProtectedRoute/ProtectedRoute';

const Register = lazy(() => import('@pages/Register/Register'));
const Login = lazy(() => import('@pages/Login/Login'));
const Home = lazy(() => import('@pages/Home/Home'));

const AppRouter: FC = () => {
  const [user] = useLocalStorage<string>('user', '');

  return (
    <Routes>
      <Route
        path='/register'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path='/login'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='/'
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
