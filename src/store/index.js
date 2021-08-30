import { createStore, applyMiddleware, compose } from 'redux';
import middleware from '../middleware';

import reducer from '../reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(middleware),
);

const store = createStore(reducer, enhancers);
export default store;