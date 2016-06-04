import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from '../store/getStore';
import hashHistory from '../store/getHistory';

/* components */
import App from './App';
import Dashboard from './Dashboard';
import Index from './Index';
import Account from './Account';

const history = syncHistoryWithStore(hashHistory, store);

function AppRouter() {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="account" component={Account} />
      </Route>
    </Router>
  );
}

export default AppRouter;
