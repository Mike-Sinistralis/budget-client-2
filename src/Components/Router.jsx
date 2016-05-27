import React from 'react';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store/getStore';
import hashHistory from '../store/getHistory';
import App from './App';
import Bar from './Bar';
import Foo from './Foo';

const history = syncHistoryWithStore(hashHistory, store);

function AppRouter() {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
      </Route>
    </Router>
  );
}

export default AppRouter;
