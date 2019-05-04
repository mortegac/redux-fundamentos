import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';


const { logger } = require('redux-logger');
const middlewares = [ thunkMiddleware ];

// eslint-disable-next-line
process.env.NODE_ENV === 'development' && middlewares.push(logger);

const store = createStore(
	rootReducer,
	applyMiddleware(
		...middlewares
	)
);

export default store;