import * as types from './Constants';

const filtersClean = payload => ({
	type: types.FILTERS_CLEAN,
	payload
});
const filtersAdd = payload => ({
	type: types.FILTERS_ADD,
	payload
});
const filterFailed = payload => ({
	type: types.FILTERS_FAILED,
	payload
});

export {
	filtersClean,
	filtersAdd,
	filterFailed
};