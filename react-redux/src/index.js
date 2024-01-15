import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from '../node_modules/react-redux/dist/react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider> 
);
