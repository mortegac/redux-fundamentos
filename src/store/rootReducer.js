import { combineReducers } from 'redux';

import errorHandling from './errorHandling/Reducers';

export const reducers = () => ({
	...errorHandling,
});

export default combineReducers( reducers() );
