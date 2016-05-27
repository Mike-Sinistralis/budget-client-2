import React, { PropTypes } from 'react';

function App(props) {
  return (
    <div>
      <span>This is App</span>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
