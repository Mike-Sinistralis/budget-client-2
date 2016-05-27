import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import perf from 'react-addons-perf';
import * as lodash from 'lodash';
import * as immutable from 'immutable';
// TODO: Remove push once we learn it better and use it in a few spots.
import { routerMiddleware, push } from 'react-router-redux';

import DevTools from '../Containers/DevTools';
import sagas from '../sagas';
import hashHistory from './getHistory';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(hashHistory);

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(sagaMiddleware, historyMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument({ maxAge: 20 })
  )
);

sagas.map((saga) => sagaMiddleware.run(saga));

// TODO: Get hot module reloading working for reducers

window.store = store;
window.perf = perf;
window.lodash = lodash;
window.immutable = immutable;

// Try it out via window.store.dispatch(window.push('/bar'))
window.push = push;

export default store;
