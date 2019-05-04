import * as types from './Constants';

const initialState={
	modal: false,
	modalError: false,
	httpCode: 0,
	namespace:''

}

const errorHandlingReducers = (state = initialState, action) => {
	switch (action.type) {

		case types.ERROR_MODAL_HIDDEN:
			return {
				initialState
			};
		case types.ERROR_MODAL_TO_SHOW:
			return {
				...state,
				...action.payload,
				modalError: true
			};


		default:
			return state;
	}
}

export default {
	errorHandling: errorHandlingReducers
}
