import * as types from './Constants';

const errorModaltoShow = payload => ({
	type: types.ERROR_MODAL_TO_SHOW,
	payload
});
const errorModalHidden = payload => ({
	type: types.ERROR_MODAL_HIDDEN,
	payload
});

export {
	errorModaltoShow,
	errorModalHidden,
}


