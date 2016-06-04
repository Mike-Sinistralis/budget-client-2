import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import AppRouter from '../Components/Router';

function Root({ store }) {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
