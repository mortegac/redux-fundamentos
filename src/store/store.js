import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import rootReducers from './rootReducer';


// const { logger } = require('redux-logger');

const logger = createLogger({
    collapsed: true,
});
const middlewares = applyMiddleware(logger, thunkMiddleware)

// const middlewares = [ thunkMiddleware ];

// eslint-disable-next-line
// process.env.NODE_ENV === 'development' && middlewares.push(logger);

// const initialState = {
// 	errors:{},
// 	users:{},
//   }

const store = createStore(
	rootReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	compose(middlewares),
  );

// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(
// 		...middlewares
// 	)
// );

export default store;