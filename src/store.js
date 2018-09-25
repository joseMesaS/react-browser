import {createStore} from 'redux';
import reducer from './reducers/index.js';

const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const store = createStore(reducer, devTools);

export default store;