import {
	ERRORS_CLEAN,
	ERRORS_ADD,
} from './Constants';

const initialState = {
	errorExists:false,
	list:{},
};

const errors = (state = initialState, action = {}) => {
	switch (action.type) {
	case ERRORS_CLEAN:
		return { ...state, ...initialState };
	
	case ERRORS_ADD:
		return { 
			...state, 
			errorExists:false,
			list:{ ...state.list, ...action.payload }
		};	
	
	default: return state;
	}
};

export default errors;
