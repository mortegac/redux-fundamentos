import {
	FILTERS_CLEAN,
	FILTERS_ADD,
	FILTERS_FAILED	
} from './Constants';

const initialState = {
	module:'',
	status:false,
	data:{},
};

const filters = (state = initialState, action = {}) => {
	switch (action.type) {
	case FILTERS_CLEAN:
		return { ...state, ...initialState };
	
	case FILTERS_ADD:
		return { 
			...state, 
			...action.payload,
			status:true
		};		
	
	case FILTERS_FAILED:
		return { 
			...state, 
			status:false 
		};	
	
	default: return state;
	}
};

export default filters;
