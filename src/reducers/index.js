import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import { reducer as app } from './app';

const rootReducer = combineReducers({
  app,
  routing,
});

export default rootReducer;
