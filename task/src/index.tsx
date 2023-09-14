import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from '@app/styles/global';

import AppRouter from './app/provider/AppRouter';
import {setupStore} from './store';

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
