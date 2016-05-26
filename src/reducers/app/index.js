import { fromJS } from 'immutable';

const typeToHandler = {

};

const initialState = fromJS({
  isLoaded: false,
  isAuthenticated: false,
});

function reducer(state = initialState, action) {
  const handler = typeToHandler[action.type];

  return handler ? handler(state, action) : state;
}

export { reducer, initialState };
