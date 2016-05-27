import React from 'react'

function App(props) {
  return (
    <div>
      <span>This is App</span>
      {props.children}
    </div>
  );
}

export default App;
