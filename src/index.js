import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles';
import App from './components/app/App';
import { store } from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
