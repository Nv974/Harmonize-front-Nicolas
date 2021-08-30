import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './reset.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </CookiesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
