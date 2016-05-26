import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

function Root({ store }) {
  return (
    <Provider store={store}>
      Hello
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
