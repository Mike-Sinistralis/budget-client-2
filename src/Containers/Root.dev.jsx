import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

import DevTools from './DevTools';

function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        Hello
        <DevTools />
      </div>
    </Provider>
  );
}

Root.propTypes = {
  store: PropTypes.object,
};

export default Root;
