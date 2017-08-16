import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import store from './store';
import Routes from './routes';
import a11y from 'react-a11y';

if (process.env.NODE_ENV !== 'production') a11y(React, { includeSrcNode: true });

// establishes socket connection
import './socket';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app'),
);
