import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import sagas from '../sagas';
import hashHistory from './getHistory';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(hashHistory);

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware, historyMiddleware)
);

sagas.map((saga) => sagaMiddleware.run(saga));

export default store;
