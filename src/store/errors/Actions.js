import * as types from './Constants';

export const errorsClean = payload => ({
	type: types.ERRORS_CLEAN,
});

export const errorsAdd = payload => ({
	type: types.ERRORS_ADD,
	payload
});