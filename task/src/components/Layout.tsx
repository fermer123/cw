import {FC} from 'react';
import {Route, Routes} from 'react-router-dom';

import Home from './Pages/Home/Home';

const Layout: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default Layout;