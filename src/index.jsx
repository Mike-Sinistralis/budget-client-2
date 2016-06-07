import React from 'react';
import { render } from 'react-dom';

import store from './store/getStore';
import Root from './Containers/Root.jsx';

render(
  <Root store={store} />,
  document.getElementById('app')
);

/*
   CODE TO TEST API, REMOVE ONCE WE KNOW WTF WE ARE DOING
 */

function serializeQueryString(params) {
  function buildQueryStringData(param) {
    return `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`;
  }

  if (!params) {
    return '';
  }

  return `?${Object.keys(params).map(buildQueryStringData).join('&')}`;
}

function FetchError(status, body) {
  this.name = 'FetchError';
  this.status = status;
  this.body = body;
}

function wasSuccessful(response) {
  if (response.status !== 200 && response.status !== 400) {
    throw new FetchError(response.status, {});
  }

  return response.text();
}

function parseResponse(responseText) {
  return responseText ? JSON.parse(responseText) : {};
}

function handleError(error) {
  if (error.status) {
    return error;
  }

  return new FetchError(0, error);
}

function fetchResult(result) {
  const response = result[0];
  const json = result[2];
  return {
    status: response.status,
    body: json,
  };
}

function baseApi(baseUrl, options, action, body, params = '') {
  const fullOptions = Object.assign({}, options, {
    body: JSON.stringify(body),
  });

  const fetchResponse = fetch(`${baseUrl}/${action}${serializeQueryString(params)}`, fullOptions);
  const successResult = fetchResponse.then(wasSuccessful);
  const parseResult = successResult.then(parseResponse);

  return Promise.all([fetchResponse, successResult, parseResult])
    .then(fetchResult, handleError);
}

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json; charset=utf8',
};

window.postBudget = window.lodash.curry(baseApi, 3)('http://localhost:3110', {
  method: 'POST',
  headers,
});

window.getBudget = window.lodash.curry(baseApi, 3)('http://localhost:3110', {
  method: 'GET',
  headers,
});

window.removeBudget = window.lodash.curry(baseApi, 3)('http://localhost:3110', {
  method: 'DELETE',
  headers,
});

window.updateBudget = window.lodash.curry(baseApi, 3)('http://localhost:3110', {
  method: 'PUT',
  headers,
});

// Type this into the console (Example of creating user): postBudget('v1/user', { username: 'mzimmerman0205@gmail.com', password: 'Password1' });
// Type this into the console (Example of getting user): getBudget('v1/user/1');