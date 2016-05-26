import 'babel-polyfill';

const actionTypeContext = require.context('../src/actionTypes/', true, /.*\.js$/);
actionTypeContext.keys().forEach(actionTypeContext);

const componentsContext = require.context('../src/Components/', true, /.*\.jsx$/);
componentsContext.keys().forEach(componentsContext);

const reducersContext = require.context('../src/reducers/', true, /.*\.js$/);
reducersContext.keys().forEach(reducersContext);

const sagasContext = require.context('../src/sagas', true, /.*\.js$/);
sagasContext.keys().forEach(sagasContext);

const utilsContext = require.context('../src/utils', true, /.*\.js$/);
utilsContext.keys().forEach(utilsContext);

const selectorsContext = require.context('../src/selectors', true, /.*\.js$/);
selectorsContext.keys().forEach(selectorsContext);

const testsContext = require.context('.', true, /.*\.spec\..*$/);
testsContext.keys().forEach(testsContext);
