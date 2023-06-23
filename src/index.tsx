import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './styles/index.scss';

const root: Root = createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
