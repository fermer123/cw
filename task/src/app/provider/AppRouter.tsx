import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import LoadingSpinner from '@src/entities/Loading/LoadingSpinner';
import useLocalStorage from '@src/shared/hooks/useLocalStorage/useLocalStorage';
import ProtectedRoute from '@src/widgets/ProtectedRoute/ProtectedRoute';

const Register = lazy(() => import('@src/pages/Register/Register'));
const Login = lazy(() => import('@src/pages/Login/Login'));
const Home = lazy(() => import('@src/pages/Home/Home'));

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
