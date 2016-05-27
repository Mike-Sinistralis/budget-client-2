import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import perf from 'react-addons-perf';
import * as lodash from 'lodash';
import * as immutable from 'immutable';
// TODO: Remove push once we learn it better and use it in a few spots.
import { routerReducer as routing, routerMiddleware, push } from 'react-router-redux';

import DevTools from '../Containers/DevTools';
import { reducer as app } from '../reducers/app';
import sagas from '../sagas';
import hashHistory from './getHistory';

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(hashHistory);

const rootReducer = combineReducers({
  app,
  routing,
});


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
