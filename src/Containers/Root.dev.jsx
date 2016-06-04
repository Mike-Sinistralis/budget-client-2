import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';
import AppRouter from '../Components/Router';

function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <AppRouter />
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
