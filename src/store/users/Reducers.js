import {
	USERS_CLEAN,
	USERS_ADD,
} from './Constants';

const initialState = {
	list:{},
};

const users = (state = initialState, action = {}) => {
	switch (action.type) {
	case USERS_CLEAN:
		return { ...state, ...initialState };
	
	case USERS_ADD:
		return { 
			...state, 
			list:{ ...action.payload }
		};	
	
	default: return state;
	}
};

export default users;
