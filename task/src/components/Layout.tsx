import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import useLocalStorage from './component/Hook/UseLocalStorage/useLocalStorage';
import LoadingSpinner from './component/Loading/LoadingSpinner';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

const Register = lazy(() => import('./Pages/Register/Register'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Home = lazy(() => import('./Pages/Home/Home'));

const Layout: FC = () => {
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

export default Layout;
