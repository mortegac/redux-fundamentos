import { combineReducers } from 'redux';

// import errorHandling from './errorHandling/Reducers';


import errors from './errors/Reducers';
import users from './users/Reducers';

export const rootReducers = {
	...errors,
	...users,
};

export default combineReducers(rootReducers);

