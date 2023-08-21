import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from '@styles/global';

import Layout from './components/Layout';
import {setupStore} from './store';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  </Provider>,
);
