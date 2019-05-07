import { combineReducers } from 'redux';

// import errorHandling from './errorHandling/Reducers';


import * as errors from './errors/Reducers';
import * as filters from './filters/Reducers';
import * as users from './users/Reducers';

export const rootReducers = {
	...errors,
	...filters,
	...users,
};

export default combineReducers(rootReducers);

