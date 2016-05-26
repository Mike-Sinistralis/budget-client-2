import { Component } from 'react';
import { Map as immutableMap, List as immutableList } from 'immutable';

/* istanbul ignore next */
// Used to mock functions in tests.
function emptyAction() {}

/* istanbul ignore next */
// Used to mock empty jsx class nodes.
class emptyNode extends Component {
  render() {
    return false;
  }
}

/* istanbul ignore next */
// Used to pass in empty immutable maps during tests to mock initial state for Components.
const emptyMap = immutableMap({});

/* istanbul ignore next */
// Used to pass in empty immutable lists during tests to mock initial state for Components.
const emptyList = immutableList([]);

export { emptyAction, emptyNode, emptyMap, emptyList };
