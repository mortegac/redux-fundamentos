import {
	USERS_CLEAN,
	USERS_ADD,
	USER_FILTER,
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
	
	case USER_FILTER:
	
		const data = action.payload;
		const matches = data.filter(number => number.id < 10 );
		
		return { 
			...state, 
			list:{ ...matches }
		};
		
		// const data = list.filter (function (x) { 
		// 	return x.faction === "Rebels"; 
		//   });
		// return {
		// 	...state,
		// }
	
	default: return state;
	}
};

export default {users};
