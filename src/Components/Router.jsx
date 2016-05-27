import React from 'react'
import { createHashHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import store from '../store/getStore';
import App from './App';
import Bar from './Bar';
import Foo from './Foo';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const history = syncHistoryWithStore(hashHistory, store);


function AppRouter() {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo}/>
        <Route path="bar" component={Bar}/>
      </Route>
    </Router>
  );
}

export default AppRouter;