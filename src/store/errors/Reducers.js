import * as types from './Constants';

const initialState = {
	errorExists:false,
	list:{},
};
const errors = (state = initialState, action = {}) => {

	switch (action.type) {
		
		case types.ERRORS_CLEAN:
			return { 
				...state, 
				...initialState 
			};

		case types.ERRORS_ADD:
		const error = {'error': action.payload.error, module:action.payload.module }
			return { 
				...state, 
				errorExists:true,
				list: { ...error  }
			};	
		default: return state;
	}
};

export default {errors}