import {FC, lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Register = lazy(() => import('./Pages/Register/Register'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Home = lazy(() => import('./Pages/Home/Home'));

const Layout: FC = () => {
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
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Layout;
