import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import Router from '../Components/Router';

function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Router />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
