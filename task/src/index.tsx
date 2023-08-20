import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from '@styles/global';

import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Layout />
  </BrowserRouter>,
);
