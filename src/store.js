import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers/index.js';

const middleWare = applyMiddleware(logger);

export default createStore(reducer, middleWare);