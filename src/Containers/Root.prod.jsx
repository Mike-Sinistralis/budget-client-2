import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import Router from '../Components/Router';

function Root({ store }) {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
