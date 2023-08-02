import ReactDOM from 'react-dom/client';

import App from './components/Pages/App';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
