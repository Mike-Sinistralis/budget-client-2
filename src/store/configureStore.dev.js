import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import perf from 'react-addons-perf';
import * as lodash from 'lodash';
import * as immutable from 'immutable';
import { routerReducer as routing } from 'react-router-redux';

import DevTools from '../Containers/DevTools';
import { reducer as app } from '../reducers/app';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  app,
  routing,
});


const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument({ maxAge: 20 })
  )
);

sagas.map((saga) => sagaMiddleware.run(saga));

// TODO: Get hot module reloading working for reducers

window.store = store;
window.perf = perf;
window.lodash = lodash;
window.immutable = immutable;

export default store;
