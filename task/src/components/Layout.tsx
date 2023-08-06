import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import useLocalStorage from './component/Hook/UseLocalStorage/useLocalStorage';
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
          <Suspense fallback='loading...'>
            <Register />
          </Suspense>
        }
      />
      <Route
        path='/login'
        element={
          <Suspense fallback='loading...'>
            <Login />
          </Suspense>
        }
      />
      <Route
        path='/'
        element={
          <Suspense fallback='loading...'>
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
